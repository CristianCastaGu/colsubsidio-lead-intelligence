// One-off synthesis script: crosses the real files shared for the hackathon
// (proyectos_catalogo, leads_meta_sim, afiliados_sim) into the derived analytics
// dataset consumed by Paneles & Analítica. Run with: node scripts/generate-analytics.cjs
// Output: src/advisor/data/analyticsData.ts

const fs = require('fs');
const path = require('path');

const RAW_DIR = path.join(__dirname, '..', 'data-raw');
const OUT_FILE = path.join(__dirname, '..', 'src', 'advisor', 'data', 'analyticsData.ts');

const proyectos = JSON.parse(fs.readFileSync(path.join(RAW_DIR, 'proyectos_catalogo.json'), 'utf8'));
const afiliadosRaw = JSON.parse(fs.readFileSync(path.join(RAW_DIR, 'afiliados_sim.json'), 'utf8'));
const leadsRaw = JSON.parse(fs.readFileSync(path.join(RAW_DIR, 'leads_meta_sim.json'), 'utf8'));

const afiliadosById = new Map(afiliadosRaw.map((a) => [a.id, a]));
const proyectosByName = new Map(proyectos.map((p) => [p.nombre, p]));

const NOW = new Date('2026-07-24T12:00:00-05:00');
const SMLV_COP = 1423500; // reference minimum wage used only to scale synthetic affordability

const SALARY_MIDPOINT = {
  'Menor al SMLV': 0.8,
  'Entre 1 y 1.5 SMLV': 1.25,
  'Entre 1.5 y 2 SMLV': 1.75,
  'Entre 2 y 2.5 SMLV': 2.25,
  'Entre 2.5 y 3 SMLV': 2.75,
  'Entre 3 y 4 SMLV': 3.5,
  'Entre 4 y 6 SMLV': 5,
  'Entre 6 y 8 SMLV': 7,
  'Entre 8 y 10 SMLV': 9,
};

const CAMPAIGN_INTENT_BASE = {
  'vivienda-vis-2026': 54,
  'bogota-no-vis': 61,
  'inversion-ricaurte': 74,
  'jovenes-tocancipa': 57,
  'familia-maipore': 67,
  'primer-hogar-chia': 70,
};

const CHANNEL_INTENT_ADJ = { 'Meta Ads': -4, 'Google Ads': 8 };
const CHANNEL_CPL_COP = { 'Meta Ads': 28500, 'Google Ads': 41200 }; // synthetic cost-per-lead

const STAGE_ORDER = ['Nuevo', 'En Calificación', 'Cita Agendada', 'Pre-Aprobado', 'En Negociación', 'Ganado'];

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}
function rand(min, max) {
  return min + Math.random() * (max - min);
}
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function fmtDate(d) {
  return d.toISOString().slice(0, 10);
}
function addDays(d, n) {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

function computeCapacidad(afiliado, proyecto) {
  const midpoint = afiliado ? SALARY_MIDPOINT[afiliado.rango_salarial] || 1.5 : 1.6;
  const monthlyIncome = midpoint * SMLV_COP;
  const dependents = afiliado ? afiliado.personas_a_cargo : rand(0, 3);
  const affordablePriceCOP = monthlyIncome * 0.3 * 120 * (1 - dependents * 0.06);
  const minPriceCOP = proyecto.rango_precio_min * 1_000_000;
  const ratio = affordablePriceCOP / minPriceCOP;

  let base;
  if (ratio >= 1.3) base = 92;
  else if (ratio >= 1.0) base = 78;
  else if (ratio >= 0.8) base = 60;
  else if (ratio >= 0.6) base = 42;
  else if (ratio >= 0.4) base = 26;
  else base = 12;

  const afiliadoBonus = afiliado ? 10 : 0;
  return Math.round(clamp(base + afiliadoBonus + rand(-6, 6) - dependents * 1.5, 4, 99));
}

function pickStage(total, temperatura) {
  const tempBonus = temperatura === 'Hot' ? 1.1 : temperatura === 'Warm' ? 0.35 : 0;
  const expected = clamp((total / 100) * 6 + tempBonus - rand(0, 1.2), 0, 5);
  const idx = Math.round(clamp(expected + rand(-0.5, 0.5), 0, 5));
  return idx;
}

function nextBestAction(temperatura, status) {
  if (status === 'Ganado') return 'Activar postventa y seguro todo riesgo';
  if (status === 'Perdido') return 'Reactivar con contenido educativo (nurture largo)';
  if (temperatura === 'Hot' && (status === 'Nuevo' || status === 'En Calificación')) return 'Llamar en menos de 15 minutos';
  if (temperatura === 'Hot' && status === 'Cita Agendada') return 'Confirmar cita y enviar recordatorio WhatsApp';
  if (temperatura === 'Hot') return 'Enviar cotización formal y agendar firma';
  if (temperatura === 'Warm') return 'Enviar simulador de crédito por WhatsApp';
  return 'Nutrir con contenido educativo (newsletter quincenal)';
}

const JOURNEY_STEPS = [
  { key: 'capturado', label: 'Lead capturado desde pauta' },
  { key: 'formulario', label: 'Completó formulario de perfilamiento' },
  { key: 'landing', label: 'Visitó landing del proyecto' },
  { key: 'simulador', label: 'Usó simulador de subsidio/crédito' },
  { key: 'contacto', label: 'Contactado por asesor (WhatsApp/llamada)' },
  { key: 'cita', label: 'Cita agendada en sala de ventas' },
  { key: 'cierre', label: 'Promesa de compraventa firmada' },
];

// Pass 1 — leading indicators only (capacidad, intención, engagement) plus a
// genuinely *predictive* conversion score derived from them (never from the
// pipeline stage — that would be circular: the model predicts the outcome,
// it doesn't read it off a stage that hasn't happened yet).
const base = leadsRaw.map((lead) => {
  const afiliado = lead.afiliado_id ? afiliadosById.get(lead.afiliado_id) : null;
  const proyecto = proyectosByName.get(lead.proyecto_interes);

  const capacidad = computeCapacidad(afiliado, proyecto);
  const intencion = Math.round(
    clamp((CAMPAIGN_INTENT_BASE[lead.utm_campaign] || 60) + (CHANNEL_INTENT_ADJ[lead.fuente] || 0) + rand(-13, 13), 4, 98)
  );
  const engagement = Math.round(clamp(intencion * 0.65 + rand(-10, 22), 4, 98));
  const conversion = Math.round(clamp(capacidad * 0.35 + intencion * 0.4 + engagement * 0.25 + rand(-9, 9), 2, 99));
  const total = Math.round(capacidad * 0.28 + intencion * 0.3 + engagement * 0.17 + conversion * 0.25);

  return { lead, afiliado, proyecto, capacidad, intencion, engagement, conversion, total };
});

// Percentile-based temperature: guarantees a healthy Hot/Warm/Cold mix
// regardless of the raw formula's absolute scale — top ~15% Hot, next ~35% Warm.
const sortedTotals = [...base.map((b) => b.total)].sort((a, b) => a - b);
const percentile = (p) => sortedTotals[clamp(Math.floor(sortedTotals.length * p), 0, sortedTotals.length - 1)];
const HOT_CUTOFF = percentile(0.85);
const WARM_CUTOFF = percentile(0.5);

const enrichedAll = base.map(({ lead, afiliado, proyecto, capacidad, intencion, engagement, conversion, total }) => {
  const temperatura = total >= HOT_CUTOFF ? 'Hot' : total >= WARM_CUTOFF ? 'Warm' : 'Cold';

  // Stage is a probabilistic OUTCOME of the predicted score, not an input to it.
  let stageIdx = pickStage(total, temperatura);
  let status = STAGE_ORDER[stageIdx];

  const lossChance = temperatura === 'Hot' ? 0.05 : temperatura === 'Warm' ? 0.12 : 0.22;
  if (stageIdx >= 1 && Math.random() < lossChance) status = 'Perdido';

  // Journey: how many steps this lead actually reached
  const reachedSteps = status === 'Perdido' ? clamp(stageIdx + 1, 1, 5) : clamp(stageIdx + 2, 1, JOURNEY_STEPS.length);
  const startDate = new Date(lead.fecha_ingreso);
  let cumulativeDays = 0;
  const journey = JOURNEY_STEPS.slice(0, reachedSteps).map((step, idx) => {
    if (idx > 0) cumulativeDays += 0.3 + Math.random() * 1.1; // strictly increasing — a journey can't go back in time
    return { ...step, date: fmtDate(addDays(startDate, cumulativeDays)) };
  });

  // Score evolution across the journey — rises toward the current total, with noise
  const scoreEvolution = journey.map((step, idx) => {
    const progress = (idx + 1) / journey.length;
    const noisy = total * (0.55 + 0.45 * progress) + rand(-5, 5);
    return { date: step.date, score: Math.round(clamp(noisy, 5, 100)) };
  });

  return {
    lead,
    afiliado,
    proyecto,
    stageIdx,
    id: lead.lead_id,
    nombre: lead.nombre,
    fuente: lead.fuente,
    utm_campaign: lead.utm_campaign,
    proyecto_nombre: lead.proyecto_interes,
    ubicacion: proyecto ? proyecto.ubicacion : 'N/D',
    afiliado_bool: Boolean(afiliado),
    fecha_ingreso: lead.fecha_ingreso,
    capacidad,
    intencion,
    engagement,
    conversion,
    total,
    temperatura,
    status,
    nextBestAction: nextBestAction(temperatura, status),
    journey,
    scoreEvolution,
  };
});

// Analytics-shaped view (Paneles & Analítica) — keeps the original field names.
const processed = enrichedAll.map((e) => ({
  id: e.id,
  nombre: e.nombre,
  fuente: e.fuente,
  utm_campaign: e.utm_campaign,
  proyecto: e.proyecto_nombre,
  ubicacion: e.ubicacion,
  afiliado: e.afiliado_bool,
  fecha_ingreso: e.fecha_ingreso,
  capacidad: e.capacidad,
  intencion: e.intencion,
  engagement: e.engagement,
  conversion: e.conversion,
  total: e.total,
  temperatura: e.temperatura,
  status: e.status,
  nextBestAction: e.nextBestAction,
  journey: e.journey,
  scoreEvolution: e.scoreEvolution,
}));

// ---------- Aggregate datasets ----------

const funnelData = STAGE_ORDER.map((stage, idx) => {
  const count = processed.filter((l) => l.status !== 'Perdido' && STAGE_ORDER.indexOf(l.status) >= idx).length;
  return { stage, count };
});

const channelComparison = ['Meta Ads', 'Google Ads'].map((canal) => {
  const subset = processed.filter((l) => l.fuente === canal);
  const won = subset.filter((l) => l.status === 'Ganado').length;
  return {
    canal,
    leads: subset.length,
    scorePromedio: Math.round(subset.reduce((s, l) => s + l.total, 0) / subset.length),
    intencionPromedio: Math.round(subset.reduce((s, l) => s + l.intencion, 0) / subset.length),
    tasaConversion: Number(((won / subset.length) * 100).toFixed(1)),
    cplCOP: CHANNEL_CPL_COP[canal],
  };
});

const campaignMap = new Map();
processed.forEach((l) => {
  if (!campaignMap.has(l.utm_campaign)) campaignMap.set(l.utm_campaign, []);
  campaignMap.get(l.utm_campaign).push(l);
});
const campaignQuality = [...campaignMap.entries()]
  .map(([campaign, subset]) => {
    const won = subset.filter((l) => l.status === 'Ganado').length;
    const scorePromedio = subset.reduce((s, l) => s + l.total, 0) / subset.length;
    const tasaConversion = (won / subset.length) * 100;
    const qualityIndex = Math.round(scorePromedio * 0.65 + tasaConversion * 3.5);
    return { campaign, leads: subset.length, scorePromedio: Math.round(scorePromedio), tasaConversion: Number(tasaConversion.toFixed(1)), qualityIndex: clamp(qualityIndex, 0, 100) };
  })
  .sort((a, b) => b.qualityIndex - a.qualityIndex);

const ubicaciones = [...new Set(proyectos.map((p) => p.ubicacion))];
const intentHeatmap = ubicaciones.map((ubicacion) => {
  const row = { ubicacion };
  ['Meta Ads', 'Google Ads'].forEach((canal) => {
    const subset = processed.filter((l) => l.ubicacion === ubicacion && l.fuente === canal);
    row[canal] = subset.length ? Math.round(subset.reduce((s, l) => s + l.intencion, 0) / subset.length) : null;
  });
  row.leads = processed.filter((l) => l.ubicacion === ubicacion).length;
  return row;
}).filter((r) => r.leads > 0);

const nbaCounts = new Map();
processed.forEach((l) => {
  nbaCounts.set(l.nextBestAction, (nbaCounts.get(l.nextBestAction) || 0) + 1);
});
const nextBestActionDistribution = [...nbaCounts.entries()]
  .map(([action, count]) => ({ action, count }))
  .sort((a, b) => b.count - a.count);

// Sankey: fuente -> temperatura -> resultado
const RESULT_OF = (l) => (l.status === 'Ganado' ? 'Ganado' : l.status === 'Perdido' ? 'Perdido' : 'En proceso');
const sankeyNodesSet = new Set();
const sankeyLinkMap = new Map();
processed.forEach((l) => {
  const resultado = RESULT_OF(l);
  const a = l.fuente,
    b = `${l.temperatura} lead`,
    c = resultado;
  [a, b, c].forEach((n) => sankeyNodesSet.add(n));
  const k1 = `${a}|${b}`;
  const k2 = `${b}|${c}`;
  sankeyLinkMap.set(k1, (sankeyLinkMap.get(k1) || 0) + 1);
  sankeyLinkMap.set(k2, (sankeyLinkMap.get(k2) || 0) + 1);
});
const sankeyNodes = [...sankeyNodesSet].map((name) => ({ name }));
const nodeIndex = new Map(sankeyNodes.map((n, i) => [n.name, i]));
const sankeyLinks = [...sankeyLinkMap.entries()].map(([key, value]) => {
  const [source, target] = key.split('|');
  return { source: nodeIndex.get(source), target: nodeIndex.get(target), value };
});

// Score trend by acquisition day
const byDay = new Map();
processed.forEach((l) => {
  const day = l.fecha_ingreso.slice(0, 10);
  if (!byDay.has(day)) byDay.set(day, []);
  byDay.get(day).push(l.total);
});
const scoreTrend = [...byDay.entries()]
  .sort(([a], [b]) => (a < b ? -1 : 1))
  .map(([date, scores]) => ({ date, scorePromedio: Math.round(scores.reduce((s, v) => s + v, 0) / scores.length), leads: scores.length }));

const priorityMatrix = processed.map((l) => ({
  id: l.id,
  nombre: l.nombre,
  capacidad: l.capacidad,
  intencion: l.intencion,
  total: l.total,
  temperatura: l.temperatura,
  proyecto: l.proyecto,
}));

const topLeadsRanking = [...processed].sort((a, b) => b.total - a.total).slice(0, 15);

const output = {
  generatedAt: fmtDate(NOW),
  totalLeads: processed.length,
  leads: processed,
  funnelData,
  channelComparison,
  campaignQuality,
  intentHeatmap,
  nextBestActionDistribution,
  sankeyNodes,
  sankeyLinks,
  scoreTrend,
  priorityMatrix,
  topLeadsRanking,
};

const ts = `// AUTO-GENERADO por scripts/generate-analytics.cjs — cruza los datos reales
// compartidos para el hackathon (leads_meta_sim, afiliados_sim, proyectos_catalogo)
// con un modelo de scoring sintético. No editar a mano; volver a correr el script.
import type { AnalyticsData } from './analyticsTypes';

export const ANALYTICS_DATA: AnalyticsData = ${JSON.stringify(output, null, 2)};
`;

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, ts, 'utf8');
console.log(`Wrote ${OUT_FILE} — ${processed.length} leads synthesized.`);

// ============================================================================
// Second output: the SAME leads, shaped to the advisor app's native types
// (Lead / HousingProject / Deal / Task from ../types.ts) — so every existing
// view (Leads, Score 360, Negocios, Proyectos, Remarketing, modales) shows the
// real 200-lead dataset without any changes to those components.
// ============================================================================

const REAL_OUT_FILE = path.join(__dirname, '..', 'src', 'advisor', 'data', 'realAdvisorData.ts');

const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
function fmtDateEs(d) {
  return `${d.getDate()} de ${MESES[d.getMonth()]} ${d.getFullYear()}`;
}
function relativeLabel(target) {
  const diffMs = NOW - target;
  const diffMin = diffMs / 60000;
  const diffHours = diffMin / 60;
  const diffDays = diffHours / 24;
  if (diffMin < 60) return `Hace ${Math.max(1, Math.round(diffMin))} min`;
  if (diffDays < 1) return `Hace ${Math.round(diffHours)} horas`;
  if (diffDays < 2) return 'Ayer';
  return `Hace ${Math.round(diffDays)} días`;
}
function slugifyName(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z\s]/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .join('.');
}
const EMAIL_DOMAINS = ['gmail.com', 'hotmail.com', 'outlook.com'];
const DEVICES = ['Móvil Android', 'iPhone', 'Desktop Chrome', 'Móvil Chrome', 'WhatsApp Web'];
const STEP_DETAILS = {
  capturado: 'Ingresó por formulario de campaña paga.',
  formulario: 'Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).',
  landing: 'Visitó la página del proyecto y revisó precios y disponibilidad.',
  simulador: 'Usó el simulador de subsidio y crédito hipotecario.',
  contacto: 'El asesor comercial estableció el primer contacto.',
  cita: 'Se agendó cita presencial en sala de ventas.',
  cierre: 'Firmó promesa de compraventa.',
};
function formatPhone(telefono) {
  return `+57 ${telefono.slice(0, 3)} ${telefono.slice(3, 6)} ${telefono.slice(6)}`;
}
function prettifyCampaign(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
function buildRationale(e) {
  const afiliacion = e.afiliado_bool ? `Afiliado Categoría ${e.afiliado.categoria} con` : 'No afiliado, con';
  const subsidio = e.proyecto.subsidio_aplicable ? 'subsidio VIS aplicable.' : 'proyecto No VIS (sin subsidio).';
  const strongest = e.intencion >= e.capacidad ? 'intención de compra' : 'capacidad de pago';
  const strongestVal = Math.max(e.intencion, e.capacidad);
  const journeyNote = e.journey.length >= 4 ? ` Ya completó ${e.journey.length} interacciones en su recorrido.` : '';
  return `${afiliacion} ${subsidio} Su señal más fuerte es ${strongest} (${strongestVal}/100).${journeyNote}`;
}

const realLeads = enrichedAll.map((e) => {
  const budgetCOP = Math.round(
    (e.proyecto.rango_precio_min + (e.proyecto.rango_precio_max - e.proyecto.rango_precio_min) * clamp(e.capacidad / 100, 0.15, 0.9)) * 1_000_000
  );
  const downPaymentCOP = Math.round(budgetCOP * (e.proyecto.subsidio_aplicable ? 0.08 : 0.2));
  const lastJourneyDate = e.journey[e.journey.length - 1].date;

  return {
    id: e.id,
    name: e.nombre,
    email: `${slugifyName(e.nombre)}@${pick(EMAIL_DOMAINS)}`,
    phone: formatPhone(e.lead.telefono),
    city: (e.afiliado && e.afiliado.ciudad) || e.ubicacion,
    channel: e.fuente,
    campaign: prettifyCampaign(e.utm_campaign),
    status: e.status,
    temperature: e.temperatura,
    housingInterest: e.proyecto.vis ? 'VIS' : 'No VIS',
    budgetCOP,
    downPaymentCOP,
    colsubsidioAfiliado: e.afiliado_bool,
    afiliacionCategoria: e.afiliado_bool ? `Cat ${e.afiliado.categoria}` : 'No Afiliado',
    hasCajaSubsidio: e.afiliado_bool && e.proyecto.subsidio_aplicable,
    hasMiCasaYa: e.proyecto.subsidio_aplicable && e.capacidad < 65,
    recommendedProjectId: e.proyecto.id,
    matchPercentage: clamp(Math.round((e.capacidad + e.intencion) / 2), 40, 99),
    scores: { fit: e.capacidad, intent: e.intencion, engagement: e.engagement, conversion: e.conversion, total: e.total },
    priority: e.temperatura === 'Hot' ? 'Muy Alta' : e.temperatura === 'Warm' ? (e.total >= 60 ? 'Alta' : 'Media') : 'Baja',
    priorityRationale: buildRationale(e),
    assignedAdvisor: 'Carlos Rodríguez',
    createdAt: relativeLabel(new Date(e.lead.fecha_ingreso)),
    lastInteraction: relativeLabel(new Date(`${lastJourneyDate}T12:00:00-05:00`)),
    behaviorLogs: [...e.journey].reverse().map((step) => ({
      timestamp: relativeLabel(new Date(`${step.date}T12:00:00-05:00`)),
      action: step.label,
      details: STEP_DETAILS[step.key] || '',
      device: pick(DEVICES),
    })),
  };
});

const IMAGE_BY_LOCATION = {
  'Ciudadela Maiporé': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  Tocancipá: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  Chía: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
  Girardot: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  Ricaurte: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  'Ciudadela Calle 80': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  Ubaté: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
};
const DELIVERY_DATES = ['Entrega Inmediata', 'Q4 2026', 'Q1 2027', 'Q2 2027', 'Entrega 2026', 'Q3 2026'];

const realProjects = proyectos.map((p) => {
  const unitsTotal = 80 + Math.floor(Math.random() * 180);
  const unitsAvailable = Math.max(2, Math.round(unitsTotal * (0.05 + Math.random() * 0.4)));
  return {
    id: p.id,
    name: p.nombre,
    type: p.vis ? 'VIS' : 'No VIS',
    municipality: p.ubicacion,
    address: `${p.ubicacion}, Cundinamarca`,
    minPriceCOP: p.rango_precio_min * 1_000_000,
    maxPriceCOP: p.rango_precio_max * 1_000_000,
    unitsTotal,
    unitsAvailable,
    subsidyApplicable: p.subsidio_aplicable,
    cajaSubsidioAmountCOP: p.subsidio_aplicable ? 39_000_000 : 0,
    image: IMAGE_BY_LOCATION[p.ubicacion] || IMAGE_BY_LOCATION['Ciudadela Maiporé'],
    deliveryDate: pick(DELIVERY_DATES),
    description: p.descripcion_corta,
    features: p.amenities,
    rotationAlert: unitsAvailable / unitsTotal < 0.15,
  };
});

const DEAL_STAGE_MAP = {
  'Cita Agendada': 'Cita Sala',
  'Pre-Aprobado': 'Pre-Aprobado',
  'En Negociación': 'Promesa Firmada',
  Ganado: 'Cierre Exitoso',
};
function subsidyStatusFor(e) {
  if (!e.proyecto.subsidio_aplicable) return 'Sin Subsidio';
  if (e.status === 'Ganado') return Math.random() < 0.5 ? 'Aprobado Caja' : 'Aprobado Mi Casa Ya';
  if (e.afiliado_bool) return 'Aprobado Caja';
  return 'En Verificación';
}
const TOWERS = ['Torre 1', 'Torre 2', 'Torre 3', 'Torre A', 'Torre B', 'Torre Norte'];

const realDeals = enrichedAll
  .filter((e) => DEAL_STAGE_MAP[e.status])
  .map((e) => {
    const valueCOP = Math.round(((e.proyecto.rango_precio_min + e.proyecto.rango_precio_max) / 2) * 1_000_000);
    const lastJourneyDate = e.journey[e.journey.length - 1].date;
    return {
      id: `deal-${e.id}`,
      leadId: e.id,
      leadName: e.nombre,
      projectName: e.proyecto.nombre,
      unitCode: `${pick(TOWERS)} - Apt ${100 + Math.floor(Math.random() * 400)}`,
      valueCOP,
      stage: DEAL_STAGE_MAP[e.status],
      probability: e.conversion,
      closingDate: fmtDateEs(addDays(new Date(lastJourneyDate), 10 + Math.random() * 30)),
      subsidyStatus: subsidyStatusFor(e),
    };
  });

function taskTypeFor(nba) {
  if (nba.includes('Llamar')) return 'Llamada';
  if (nba.includes('cotización')) return 'Enviar Cotización';
  if (nba.includes('cita') || nba.includes('Confirmar')) return 'Cita Presencial';
  return 'WhatsApp';
}
const TASK_TIMES = ['08:30 AM', '09:15 AM', '10:00 AM', '11:30 AM', '02:00 PM', '03:15 PM', '04:00 PM', '04:45 PM'];

const realTasks = enrichedAll
  .filter((e) => e.temperatura === 'Hot' && e.status !== 'Ganado' && e.status !== 'Perdido')
  .slice(0, 10)
  .map((e, idx) => ({
    id: `task-${e.id}`,
    title: e.nextBestAction,
    leadName: e.nombre,
    leadPhone: formatPhone(e.lead.telefono),
    type: taskTypeFor(e.nextBestAction),
    dueDate: 'Hoy',
    dueTime: TASK_TIMES[idx % TASK_TIMES.length],
    completed: Math.random() < 0.15,
    priority: 'Alta',
  }));

const realTs = `// AUTO-GENERADO por scripts/generate-analytics.cjs — los mismos ${realLeads.length} leads
// reales (leads_meta_sim + afiliados_sim + proyectos_catalogo), en la forma nativa
// de la app del asesor (Lead / HousingProject / Deal / Task de ../types.ts).
// No editar a mano; volver a correr el script.
import type { Lead, HousingProject, Deal, Task } from '../types';

export const REAL_LEADS: Lead[] = ${JSON.stringify(realLeads, null, 2)} as Lead[];

export const REAL_PROJECTS: HousingProject[] = ${JSON.stringify(realProjects, null, 2)} as HousingProject[];

export const REAL_DEALS: Deal[] = ${JSON.stringify(realDeals, null, 2)} as Deal[];

export const REAL_TASKS: Task[] = ${JSON.stringify(realTasks, null, 2)} as Task[];
`;

fs.writeFileSync(REAL_OUT_FILE, realTs, 'utf8');
console.log(`Wrote ${REAL_OUT_FILE} — ${realLeads.length} leads, ${realProjects.length} proyectos, ${realDeals.length} negocios, ${realTasks.length} tareas.`);
