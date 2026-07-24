import { Lead, HousingProject, SofiaProfile } from '../types';
import { SofiaApiLead } from './sofiaApiTypes';

/** The live feed sends one snapshot per turn of the conversation, same lead_id
 * repeated with more fields filled in each time. Keep only the latest per id. */
export function dedupeLatestByLeadId(raw: SofiaApiLead[]): SofiaApiLead[] {
  const latest = new Map<string, SofiaApiLead>();
  for (const item of raw) {
    const prev = latest.get(item.lead_id);
    if (!prev || new Date(item.timestamp).getTime() > new Date(prev.timestamp).getTime()) {
      latest.set(item.lead_id, item);
    }
  }
  return [...latest.values()];
}

function relativeLabel(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const diffMin = diffMs / 60000;
  if (diffMin < 1) return 'Hace un momento';
  if (diffMin < 60) return `Hace ${Math.round(diffMin)} min`;
  const diffHours = diffMin / 60;
  if (diffHours < 24) return `Hace ${Math.round(diffHours)} horas`;
  return `Hace ${Math.round(diffHours / 24)} días`;
}

/** Raw wire fields → our internal SofiaProfile shape, filling anything missing
 * with the same "pendiente" vocabulary used for leads Sofía hasn't reached yet. */
export function mapToSofiaProfile(raw: SofiaApiLead): SofiaProfile {
  return {
    fuente: raw.fuente ?? null,
    proyectoInteresOriginal: raw.proyecto_interes_original ?? null,
    esAfiliado: raw.es_afiliado ?? null,
    rangoEdad: raw.rango_edad ?? null,
    segmento: (raw.segmento as SofiaProfile['segmento']) ?? 'Desconocido',
    categoriaAfiliado: raw.categoria_afiliado ?? 'Desconocida',
    rangoSalarial: raw.rango_salarial ?? 'Desconocido',
    composicionFamiliar: raw.composicion_familiar ?? null,
    profesion: raw.profesion ?? null,
    primeraVivienda: raw.primera_vivienda ?? null,
    motivacion: raw.motivacion ?? null,
    zonaActual: raw.zona_actual ?? null,
    timeline: (raw.timeline as SofiaProfile['timeline']) ?? null,
    creditoPrevio: raw.credito_previo ?? null,
    fuenteCuotaInicial: (raw.fuente_cuota_inicial as SofiaProfile['fuenteCuotaInicial']) ?? 'no preguntado',
    proyectoRecomendado: raw.proyecto_recomendado ?? [],
    score: raw.score ?? null,
    scoreNumerico: raw.score_numerico ?? null,
    briefAsesor: raw.brief_asesor ?? null,
    remarketingTrack: (raw.remarketing_track as SofiaProfile['remarketingTrack']) ?? null,
    perfilEstadistico: raw.perfil_estadistico ?? 'No clasificado (falta edad)',
    perfilEstadisticoRiesgoDesistimiento: raw.perfil_estadistico_riesgo_desistimiento ?? null,
    datacredito: raw.datacredito
      ? {
          consultado: raw.datacredito.consultado,
          puntaje: raw.datacredito.puntaje,
          nivelRiesgo: raw.datacredito.nivel_riesgo,
          fechaConsulta: raw.datacredito.fecha_consulta,
        }
      : { consultado: false, puntaje: null, nivelRiesgo: null, fechaConsulta: null },
    brochureEnviado: raw.brochure_enviado ?? null,
    timestamp: raw.timestamp,
  };
}

const SCORE_TO_TEMPERATURE: Record<string, Lead['temperature']> = { hot: 'Hot', warm: 'Warm', cold: 'Cold' };
const TEMPERATURE_TO_PRIORITY: Record<Lead['temperature'], Lead['priority']> = {
  Hot: 'Muy Alta',
  Warm: 'Alta',
  Cold: 'Baja',
};

function findMatchingProject(raw: SofiaApiLead, projects: HousingProject[]): HousingProject | undefined {
  const candidates = [...(raw.proyecto_recomendado || []), raw.proyecto_interes_original].filter(Boolean) as string[];
  for (const name of candidates) {
    const match = projects.find((p) => p.name.toLowerCase() === name.toLowerCase());
    if (match) return match;
  }
  return undefined;
}

/** A lead_id from Sofía that doesn't exist yet in our CRM — build a full Lead record
 * for it (best-effort on the fields the WhatsApp contract doesn't carry, like phone/email). */
export function mapToNewLead(raw: SofiaApiLead, projects: HousingProject[]): Lead {
  const temperature = (raw.score && SCORE_TO_TEMPERATURE[raw.score]) || 'Warm';
  const project = findMatchingProject(raw, projects);
  const score = raw.score_numerico ?? 50;
  const budgetCOP = project ? Math.round((project.minPriceCOP + project.maxPriceCOP) / 2) : 200_000_000;

  return {
    id: raw.lead_id,
    name: raw.nombre,
    email: 'No disponible (canal WhatsApp)',
    phone: 'Disponible en el hilo de WhatsApp',
    city: raw.zona_actual || 'No especificado',
    channel: raw.fuente || 'WhatsApp Directo',
    campaign: 'Agente Sofía (WhatsApp)',
    status: 'Nuevo',
    temperature,
    housingInterest: project?.type ?? 'VIS',
    budgetCOP,
    downPaymentCOP: Math.round(budgetCOP * 0.1),
    colsubsidioAfiliado: raw.es_afiliado ?? false,
    afiliacionCategoria: raw.categoria_afiliado && raw.categoria_afiliado !== 'Desconocida' ? (`Cat ${raw.categoria_afiliado}` as Lead['afiliacionCategoria']) : 'No Afiliado',
    hasCajaSubsidio: Boolean(raw.es_afiliado) && Boolean(project?.subsidyApplicable),
    hasMiCasaYa: false,
    recommendedProjectId: project?.id ?? projects[0]?.id ?? '',
    matchPercentage: score,
    scores: { fit: score, intent: score, engagement: score, conversion: score, total: score },
    priority: TEMPERATURE_TO_PRIORITY[temperature],
    priorityRationale: raw.brief_asesor || 'Lead perfilado por el agente Sofía vía WhatsApp — brief aún no generado.',
    assignedAdvisor: 'Carlos Rodríguez',
    createdAt: relativeLabel(raw.timestamp),
    lastInteraction: relativeLabel(raw.timestamp),
    behaviorLogs: [
      {
        timestamp: relativeLabel(raw.timestamp),
        action: 'Perfilado por el Agente Sofía (WhatsApp)',
        details: raw.brief_asesor || 'Conversación completada por WhatsApp.',
        device: 'WhatsApp',
      },
    ],
    sofia: mapToSofiaProfile(raw),
  };
}

/** Merges the latest Sofía snapshots into the existing CRM lead list:
 *  - if the lead_id already exists (came in via ads too), only its `.sofia` block
 *    updates, and only when the timestamp actually advanced
 *  - otherwise, a brand-new WhatsApp-only lead is appended
 *
 *  Pure function of (existing, rawLeads, projects) — no external mutable state.
 *  "Already merged" is derived by comparing each lead's own `sofia.timestamp`,
 *  not tracked in a side Map — that used to make this impure (mutating a Map as
 *  a side effect inside a setState updater), which React 19 StrictMode's
 *  double-invoke of updaters silently undid on the second call.
 *  Returns the SAME array reference when nothing changed, so React doesn't re-render for no reason. */
export function mergeSofiaLeads(existing: Lead[], rawLeads: SofiaApiLead[], projects: HousingProject[]): Lead[] {
  const latest = dedupeLatestByLeadId(rawLeads);
  let next = existing;
  let changed = false;

  for (const raw of latest) {
    const idx = next.findIndex((l) => l.id === raw.lead_id);
    if (idx === -1) {
      if (!changed) next = [...next];
      next.unshift(mapToNewLead(raw, projects));
      changed = true;
    } else if (next[idx].sofia.timestamp !== raw.timestamp) {
      if (!changed) next = [...next];
      next[idx] = { ...next[idx], sofia: mapToSofiaProfile(raw) };
      changed = true;
    }
  }

  return changed ? next : existing;
}
