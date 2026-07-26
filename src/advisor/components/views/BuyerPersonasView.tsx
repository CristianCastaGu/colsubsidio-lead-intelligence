import React, { useState } from 'react';
import {
  UserCheck,
  Sparkles,
  Target,
  TrendingUp,
  Copy,
  Check,
  Users,
  PieChart,
  Lightbulb,
  Wallet,
  User,
  Briefcase,
  Building2,
  Info,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { BuyerPersona } from '../../types';

interface BuyerPersonasViewProps {
  personas: BuyerPersona[];
}

export const BuyerPersonasView: React.FC<BuyerPersonasViewProps> = ({ personas }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyScript = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Define cluster details matching reference design exactly
  const clusterDetails = [
    {
      id: 'cluster_1',
      clusterName: 'CLUSTER 1',
      percentage: '42% del Total',
      title: 'Familia Joven - Mi Primer Hogar',
      subBadge: 'Afiliados Cat A/B con subsidio aprobado',
      subBadgeColor: 'text-[#003DA5] bg-blue-50 border-blue-200',
      income: '$2.6M - $5.2M COP',
      incomeSub: '(2 a 4 SMMLV)',
      avgAge: '26 - 36 años',
      description: 'Parejas jóvenes con 1 hijo o en planes, asalariados de empresas colombianas afiliadas a Colsubsidio.',
      painPoints: [
        'Incertidumbre en la asignación del subsidio Mi Casa Ya y tiempos de desembolso.',
        'Miedo a no completar la cuota inicial acumulada durante la construcción.',
        'Poca claridad en la combinación del subsidio de la Caja con el crédito hipotecario.'
      ],
      triggers: [
        'Confirmación de asignación directa del Subsidio Familiar de Vivienda Colsubsidio.',
        'Proyectos cerca a rutas de transporte principal (TransMilenio / Regiotram).',
        'Cuota mensual de crédito inferior o equivalente al valor del arriendo actual.'
      ],
      projects: ['Ciudadela Verde - Soacha', 'Altos de Mosquera', 'Bosques de Tocancipá'],
      projectBadgeColor: 'bg-[#003DA5]/10 text-[#003DA5] border-[#003DA5]/20',
      script: '"Hola [Nombre], Como afiliado a Colsubsidio en Categoría B, tienes acceso a subsidios que te acercan más a tu primer hogar..."'
    },
    {
      id: 'cluster_2',
      clusterName: 'CLUSTER 2',
      percentage: '28% del Total',
      title: 'Profesional Independiente No VIS - Sabana Centro',
      subBadge: 'Compradores de valorización Sabana',
      subBadgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      income: '$7.5M - $15M COP',
      incomeSub: null,
      avgAge: '32 - 45 años',
      description: 'Profesionales, consultores o emprendedores que buscan calidad de vida fuera de Bogotá (Chía, Cajicá, Sopó).',
      painPoints: [
        'Tráfico de ingreso a Bogotá durante horas pico.',
        'Exigencia de acabados de alta calidad y conectividad para teletrabajo.',
        'Comparación rigurosa de precio por metro cuadrado frente a la competencia.'
      ],
      triggers: [
        'Zonas comunes enfocadas en bienestar (Club House, gimnasio, piscina, coworking).',
        'Descuentos por pago rápido de cuota inicial.',
        'Vistas a la montaña y entorno seguro y silencioso.'
      ],
      projects: ['Reservas de Cajicá', 'Metrópolis Suba'],
      projectBadgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      script: '"Estimado [Nombre], sabemos que buscas tranquilidad y valorización. Estos proyectos en la Sabana ofrecen..."'
    },
    {
      id: 'cluster_3',
      clusterName: 'CLUSTER 3',
      percentage: '18% del Total',
      title: 'Inversionista de Renta & Vacacional',
      subBadge: 'Inversión patrimonio Colsubsidio',
      subBadgeColor: 'text-purple-800 bg-purple-50 border-purple-200',
      income: '$10M+ COP',
      incomeSub: null,
      avgAge: '40 - 60 años',
      description: 'Inversionistas que buscan renta corta/larga o segunda vivienda en zonas cálidas de Cundinamarca (Girardot, Ricaurte).',
      painPoints: [
        'Retorno de inversión (ROI) incierto.',
        'Mantenimiento y administración a distancia.'
      ],
      triggers: [
        'Alta demanda de alquiler vacacional.',
        'Proyectos entregados con acabados o tipo resort.'
      ],
      projects: ['Portal de Girardot - Sol y Agua'],
      projectBadgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
      script: '"Hola [Nombre], esta es una excelente oportunidad para generar ingresos pasivos y asegurar tu inversión en el tiempo..."'
    }
  ];

  return (
    <div className="space-y-5 animate-fadeIn">
      {/* 1. TOP HEADER SECTION */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <UserCheck className="w-5 h-5 text-[#003DA5]" />
            <h1 className="text-lg font-extrabold text-slate-900 font-display tracking-tight">
              Buyer Personas IA — Arquetipos de Compradores
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Perfiles generados por IA mediante clustering de datos reales de afiliados y compradores de Colsubsidio Vivienda.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#003DA5] px-3.5 py-1.5 rounded-full text-xs font-extrabold border border-blue-200 shadow-2xs shrink-0">
          <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
          <span>Modelo de Clustering IA v3.2</span>
        </div>
      </div>

      {/* 2. KPI METRICS BAR (4 Metrics Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {/* Metric 1 */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#003DA5] flex items-center justify-center shrink-0 border border-blue-100">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black text-slate-900">3</span>
              <span className="text-xs font-extrabold text-slate-800">Clusters Identificados</span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">Arquetipos principales</p>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
            <PieChart className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black text-slate-900">100%</span>
              <span className="text-xs font-extrabold text-slate-800">Cobertura del universo</span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">Afiliados analizados</p>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-extrabold text-slate-900">Tendencia principal</p>
            <p className="text-[11px] text-slate-500 font-medium leading-tight">
              El 70% de los compradores se concentra en los clusters 1 y 2
            </p>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 border border-purple-100">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-extrabold text-slate-900">Uso recomendado</p>
            <p className="text-[11px] text-slate-500 font-medium leading-tight">
              Segmentar campañas y personalizar oferta de proyectos
            </p>
          </div>
        </div>
      </div>

      {/* 3. 3 CLUSTER CARDS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {clusterDetails.map((cluster) => (
          <div
            key={cluster.id}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all p-5 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Cluster Top Bar */}
              <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-black text-[#003DA5] uppercase tracking-wider block">
                    {cluster.clusterName}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug font-display">
                    {cluster.title}
                  </h3>
                </div>
                <span className="bg-[#FFD200] text-[#003DA5] font-black text-xs px-2.5 py-0.5 rounded-full shrink-0 shadow-2xs ml-2">
                  {cluster.percentage}
                </span>
              </div>

              {/* Sub-badge pill */}
              <div>
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${cluster.subBadgeColor}`}>
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{cluster.subBadge}</span>
                </span>
              </div>

              {/* Income & Age Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/80 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-slate-500 font-medium text-[11px]">
                    <Wallet className="w-3.5 h-3.5 text-[#003DA5]" />
                    <span>Ingresos del Hogar</span>
                  </div>
                  <p className="font-extrabold text-slate-900 text-xs">{cluster.income}</p>
                  {cluster.incomeSub && (
                    <p className="text-[10px] text-slate-500 font-medium">{cluster.incomeSub}</p>
                  )}
                </div>

                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/80 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-slate-500 font-medium text-[11px]">
                    <User className="w-3.5 h-3.5 text-[#003DA5]" />
                    <span>Edad Promedio</span>
                  </div>
                  <p className="font-extrabold text-slate-900 text-xs">{cluster.avgAge}</p>
                </div>
              </div>

              {/* Demographic Description Box */}
              <div className="p-3 bg-slate-50/70 rounded-xl border border-slate-200/70 text-xs text-slate-700 font-medium leading-relaxed flex items-start gap-2.5">
                <Briefcase className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{cluster.description}</span>
              </div>

              {/* Dolores y Temores Clave */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                  <Target className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Dolores y Temores Clave</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600 font-medium pl-1">
                  {cluster.painPoints.map((pain, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                      <span>{pain}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detonantes de Compra (Triggers) */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                  <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Detonantes de Compra (Triggers)</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600 font-medium pl-1">
                  {cluster.triggers.map((trig, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                      <span>{trig}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proyectos Recomendados */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                  <Building2 className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Proyectos Recomendados</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cluster.projects.map((proj, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-bold px-3 py-1 rounded-full border shadow-2xs ${cluster.projectBadgeColor}`}
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Commercial Script Box (Bottom Navy Box) */}
            <div className="p-4 bg-[#0B132B] text-white rounded-xl space-y-2 text-xs shadow-xs">
              <div className="flex items-center justify-between">
                <span className="font-black text-[#FFD200] flex items-center gap-1.5 text-xs">
                  <Sparkles className="w-3.5 h-3.5 fill-[#FFD200]" />
                  <span>Guion Comercial Sugerido IA</span>
                </span>
                <button
                  onClick={() => copyScript(cluster.id, cluster.script)}
                  className="text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors text-[11px] font-bold"
                >
                  {copiedId === cluster.id ? (
                    <span className="text-emerald-400 font-extrabold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copiado
                    </span>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-[11px] italic text-slate-200 leading-relaxed font-normal">
                {cluster.script}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 4. BOTTOM FOOTER NOTE */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-slate-200/80 text-xs text-slate-500 font-medium">
        <span className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          Los porcentajes representan la proporción de compradores en cada cluster sobre el total analizado.
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          Última actualización: 15 de mayo de 2024
        </span>
      </div>
    </div>
  );
};
