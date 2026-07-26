import React from 'react';
import { motion } from 'motion/react';
import {
  Layers,
  Target,
  Sparkles,
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  Users,
  ShieldAlert,
} from 'lucide-react';
import { Lead } from '../../types';
import { isSofiaProfileComplete } from '../../utils/leadIntelligence';
import { STATUS } from '../analytics/palette';
import { ChartCard } from '../analytics/ChartCard';

interface PerfilamientoViewProps {
  leads: Lead[];
}

// ---- Contenido de la metodología real (hackathon Colsubsidio × 30X, 4,142 compradores
// históricos). Referencia fija para Marketing: no depende de los leads actuales del CRM,
// es el resultado del clustering K-Means que hoy usa Sofía para clasificar leads nuevos. ----

const SILHOUETTE_SCORES: { k: number; score: number; best?: boolean }[] = [
  { k: 3, score: 0.218 },
  { k: 4, score: 0.243 },
  { k: 5, score: 0.265, best: true },
  { k: 6, score: 0.26 },
  { k: 7, score: 0.251 },
  { k: 8, score: 0.255 },
];

type RiskLevel = 'high' | 'mid' | 'low';

interface ClusterDef {
  name: string;
  pct: string;
  desistimiento: string;
  risk: RiskLevel;
  edad: string;
  vivienda: string;
  familia: string;
  guia: string;
  isDataArtifact?: boolean;
}

const CLUSTERS: ClusterDef[] = [
  {
    name: 'Comprador Premium / No VIS',
    pct: '7.3% de los compradores históricos',
    desistimiento: '20.4% desistimiento',
    risk: 'high',
    edad: '~34 años',
    vivienda: '$621M',
    familia: 'Sin grupo',
    guia: 'Mayor riesgo de arrepentimiento — probablemente fricción con crédito de montos altos. Reforzar tranquilidad sobre financiación y conectar rápido con asesor de crédito.',
  },
  {
    name: 'Joven Independiente',
    pct: '34.0% de los compradores históricos — el más grande',
    desistimiento: '13.1% desistimiento',
    risk: 'mid',
    edad: '27-28 años',
    vivienda: '$199M',
    familia: 'Sin grupo',
    guia: 'Buscan independencia o primer hogar. Usar amenities de vida social, seguridad, y motivar con la idea del primer paso de independencia.',
  },
  {
    name: 'Familia Joven Consolidada',
    pct: '14.8% de los compradores históricos',
    desistimiento: '11.4% desistimiento',
    risk: 'mid',
    edad: '~35 años',
    vivienda: '$196M',
    familia: '2.7 personas',
    guia: 'Destacar zona infantil, colegios cercanos, espacio para la familia. Buena retención — decisión ya bastante consolidada.',
  },
  {
    name: 'Adulto Establecido',
    pct: '21.2% de los compradores históricos',
    desistimiento: '10.6% desistimiento — el mejor',
    risk: 'low',
    edad: '46-47 años',
    vivienda: '$199M',
    familia: '0.8 personas',
    guia: 'El segmento más seguro de cerrar. Puede ser más directa y eficiente, sin necesidad de mucha persuasión adicional.',
  },
  {
    name: 'Perfil Sin Edad Registrada',
    pct: '22.6% de los compradores históricos — dato incompleto',
    desistimiento: '14.9% desistimiento',
    risk: 'mid',
    edad: 'Sin dato',
    vivienda: '$199M',
    familia: 'Sin grupo',
    guia: 'Artefacto de calidad de datos del sistema histórico, no un comportamiento real. Se excluye al clasificar leads nuevos — un lead de WhatsApp siempre da su edad en la conversación.',
    isDataArtifact: true,
  },
];

const RISK_STYLES: Record<RiskLevel, { badge: string; bar: string; text: string }> = {
  high: { badge: 'bg-red-50 text-red-700 border-red-200', bar: STATUS.critical, text: 'text-red-600' },
  mid: { badge: 'bg-amber-50 text-amber-800 border-amber-200', bar: STATUS.warning, text: 'text-amber-700' },
  low: { badge: 'bg-emerald-50 text-emerald-800 border-emerald-200', bar: STATUS.good, text: 'text-emerald-700' },
};

const METODOLOGIA_STEPS = [
  { num: '01', title: 'Limpieza', desc: 'Se corrigió escala de precios, formatos de edad inconsistentes, y se agruparon 35+ canales de llegada en 6 categorías.' },
  { num: '02', title: 'Codificación', desc: 'Variables numéricas escaladas (edad, valor vivienda, tamaño familiar) + categóricas con one-hot encoding.' },
  { num: '03', title: 'Clustering', desc: 'K-Means probado con k=3 a k=8, evaluado con silhouette score para encontrar la separación óptima.' },
  { num: '04', title: 'Interpretación', desc: 'Cada cluster se perfiló por edad, valor de vivienda, tamaño familiar, canal, y tasa de desistimiento real.' },
];

const FLUJO_STEPS = [
  'Sofía conversa y descubre edad, familia, y proyecto de interés',
  'El servidor clasifica al lead contra los 4 perfiles válidos (cálculo determinístico, no lo adivina la IA)',
  'Sofía ajusta su estrategia en vivo (ej. más refuerzo en financiación si es perfil premium)',
  'El asesor ve el perfil asignado en Score 360° y prioriza según el riesgo de desistimiento',
];

const LIMITACIONES = [
  <>La clasificación de leads nuevos usa solo <strong className="text-slate-800 font-semibold">3 variables observables</strong> (edad, tamaño de vivienda, tamaño familiar) — las variables internas de Colsubsidio (segmento, categoría, pirámide) no están disponibles para un lead externo.</>,
  <>Con solo 3 dimensiones, casos límite pueden clasificar de forma contraintuitiva — ej. un adulto de 42 años sin hijos puede caer en "Joven Independiente" en vez de "Adulto Establecido", porque en los datos reales la ausencia de grupo familiar correlaciona fuerte con edad joven.</>,
  <>El tamaño de muestra varía por perfil (el cluster premium tiene 304 registros vs. 1,407 del más grande) — las conclusiones del cluster premium, aunque claras, tienen menos robustez estadística.</>,
];

export const PerfilamientoView: React.FC<PerfilamientoViewProps> = ({ leads }) => {
  // Only leads that have genuinely gone through Sofía's WhatsApp profiling carry a real
  // perfilEstadistico — the 200 paid-ads leads deliberately haven't (different channel,
  // see sofiaMapper.ts). This section is intentionally small right now; it grows as more
  // real WhatsApp conversations come in, and never fabricates a classification we don't have.
  const profiledLeads = leads.filter(
    (l) => isSofiaProfileComplete(l) && l.sofia.perfilEstadistico && l.sofia.perfilEstadistico !== 'No clasificado (falta edad)'
  );
  const distribution = new Map<string, number>();
  profiledLeads.forEach((l) => {
    distribution.set(l.sofia.perfilEstadistico, (distribution.get(l.sofia.perfilEstadistico) || 0) + 1);
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#003DA5]" />
            <h1 className="text-lg font-black text-slate-900 font-sans tracking-tight">Perfilamiento Estadístico</h1>
          </div>
          <p className="text-xs text-slate-500 max-w-2xl">
            Recurso de referencia para Marketing y estrategia comercial: los 5 perfiles reales de comprador que encontramos
            analizando 4,142 registros históricos de Colsubsidio, y cómo Sofía los usa hoy para ajustar su conversación.
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 text-[#003DA5] font-bold text-xs px-3 py-1.5 rounded-xl shrink-0">
          4,142 compradores históricos analizados
        </div>
      </div>

      {/* OBJETIVO */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
        <p className="text-sm text-slate-700 leading-relaxed">
          <strong className="text-[#003DA5]">Objetivo:</strong> en vez de asumir cómo se comportan los compradores, dejamos que
          los datos reales de 4,142 compradores históricos de Colsubsidio nos dijeran qué perfiles existen realmente — y qué
          tan probable es que cada uno se arrepienta de la compra. Las categorías del dataset original venían codificadas para
          forzar un análisis genuino, sin reciclar supuestos previos sobre los afiliados.
        </p>
      </div>

      {/* METODOLOGÍA */}
      <ChartCard icon={<Target className="w-4 h-4 text-[#003DA5]" />} title="Metodología" subtitle="4 pasos, de datos crudos a perfiles interpretables">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {METODOLOGIA_STEPS.map((step) => (
            <div key={step.num} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <span className="font-mono text-[11px] text-[#003DA5] font-bold">{step.num}</span>
              <h4 className="text-sm font-bold text-slate-900 mt-1">{step.title}</h4>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </ChartCard>

      {/* SILHOUETTE SCORE CHART */}
      <ChartCard
        icon={<Sparkles className="w-4 h-4 text-[#003DA5]" />}
        title="Silhouette score por número de clusters (k)"
        subtitle="Más alto es mejor separación entre grupos — k=5 fue el punto óptimo"
      >
        <div className="flex items-end gap-3 h-36 px-2">
          {SILHOUETTE_SCORES.map((row) => (
            <div key={row.k} className="flex-1 flex flex-col items-center justify-end h-full">
              <span className={`font-mono text-[11px] mb-1 ${row.best ? 'text-[#003DA5] font-bold' : 'text-slate-400'}`}>
                {row.score.toFixed(3)}
              </span>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(row.score / 0.265) * 100}%` }}
                transition={{ duration: 0.5, delay: row.k * 0.05, ease: 'easeOut' }}
                className="w-full rounded-t-md"
                style={{ backgroundColor: row.best ? '#003DA5' : '#cde2fb' }}
              />
              <span className={`text-[11px] mt-1.5 ${row.best ? 'text-[#003DA5] font-bold' : 'text-slate-500'}`}>
                k={row.k}{row.best ? ' ✓' : ''}
              </span>
            </div>
          ))}
        </div>
      </ChartCard>

      {/* LOS 5 PERFILES */}
      <div className="space-y-3">
        <h2 className="text-sm font-extrabold text-slate-500 uppercase tracking-wider px-1">Los 5 perfiles encontrados</h2>
        {CLUSTERS.map((cluster) => {
          const style = RISK_STYLES[cluster.risk];
          return (
            <div
              key={cluster.name}
              className={`relative bg-white rounded-xl border border-slate-200 shadow-xs p-5 overflow-hidden ${cluster.isDataArtifact ? 'opacity-90' : ''}`}
            >
              <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: style.bar }} />
              <div className="pl-3">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-base font-black text-slate-900">{cluster.name}</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">{cluster.pct}</p>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border shrink-0 ${style.badge}`}>
                    {cluster.desistimiento}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 mb-3">
                  <div className="bg-slate-50 rounded-lg p-2.5">
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wide block">Edad típica</span>
                    <span className="text-sm font-bold text-slate-800">{cluster.edad}</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2.5">
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wide block">Vivienda típica</span>
                    <span className="text-sm font-bold text-slate-800">{cluster.vivienda}</span>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2.5">
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wide block">Grupo familiar</span>
                    <span className="text-sm font-bold text-slate-800">{cluster.familia}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  <strong className="text-slate-800 font-semibold">
                    {cluster.isDataArtifact ? 'Nota: ' : 'Guía para Sofía: '}
                  </strong>
                  {cluster.guia}
                </p>

                {/* Real cross-reference against our current CRM leads — only shown for the
                    4 clusters actually used to classify live leads */}
                {!cluster.isDataArtifact && (
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="text-[11px] text-slate-500">
                      En tu CRM ahora mismo:{' '}
                      <strong className="text-slate-800">
                        {distribution.get(cluster.name) || 0} lead{(distribution.get(cluster.name) || 0) === 1 ? '' : 's'}
                      </strong>{' '}
                      clasificado{(distribution.get(cluster.name) || 0) === 1 ? '' : 's'} en este perfil por Sofía.
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* CROSS-REFERENCE CALLOUT */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
        <Users className="w-4 h-4 text-[#003DA5] shrink-0 mt-0.5" />
        <p className="text-xs text-[#003DA5] leading-relaxed">
          <strong>{profiledLeads.length}</strong> de tus {leads.length} leads actuales ya tienen un perfil estadístico real asignado
          por Sofía. Los leads capturados por pauta paga (Meta/Google Ads) todavía no pasan por este perfilamiento — solo ocurre
          cuando el lead conversa con Sofía por WhatsApp. Esta cifra crece a medida que más leads hablan con el agente.
        </p>
      </div>

      {/* HALLAZGO PRINCIPAL */}
      <div className="bg-gradient-to-br from-red-50 via-amber-50/40 to-transparent border border-red-200 rounded-xl p-6 text-center">
        <Lightbulb className="w-7 h-7 text-red-500 mx-auto mb-2" />
        <h3 className="text-base font-black text-red-700">Vivienda premium = casi el doble de riesgo de arrepentimiento</h3>
        <p className="text-xs text-slate-700 max-w-xl mx-auto mt-2 leading-relaxed">
          Los compradores que van hacia proyectos No VIS (Araucaria, Los Nogales) se retractan de la compra a una tasa mucho
          mayor que el resto — probablemente por fricción con el crédito hipotecario en montos altos. Esto se tradujo directo
          en el comportamiento de Sofía.
        </p>
        <div className="flex items-center justify-center gap-10 mt-5">
          <div>
            <div className="font-mono text-3xl font-black text-red-600">20.4%</div>
            <div className="text-[10px] text-slate-500 mt-1">Premium / No VIS</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-black text-emerald-600">10.6%</div>
            <div className="text-[10px] text-slate-500 mt-1">Adulto Establecido</div>
          </div>
        </div>
      </div>

      {/* CÓMO SE USA EN PRODUCCIÓN */}
      <ChartCard icon={<ArrowRight className="w-4 h-4 text-[#003DA5]" />} title="Cómo se usa en producción" subtitle="De la conversación con Sofía a la acción del asesor">
        <div className="flex flex-col sm:flex-row items-stretch gap-2">
          {FLUJO_STEPS.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                <span className="font-mono text-[10px] text-[#003DA5] font-bold block mb-1">{idx + 1}</span>
                <p className="text-[11px] text-slate-700 leading-snug">{step}</p>
              </div>
              {idx < FLUJO_STEPS.length - 1 && (
                <div className="hidden sm:flex items-center justify-center text-slate-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </ChartCard>

      {/* LIMITACIONES HONESTAS */}
      <ChartCard icon={<AlertTriangle className="w-4 h-4 text-amber-600" />} title="Limitaciones honestas" subtitle="Para usar este análisis con criterio, no como verdad absoluta">
        <ul className="space-y-2.5">
          {LIMITACIONES.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </ChartCard>

      <p className="text-center text-[10px] text-slate-400 font-mono tracking-wide pb-2">
        Hackathon Colsubsidio × 30X — Reto Vivienda — Análisis sobre 4,142 compradores reales
      </p>
    </div>
  );
};
