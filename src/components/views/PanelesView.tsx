import React from 'react';
import { BarChart3, TrendingUp, Users, Building, DollarSign, Award, Target } from 'lucide-react';
import { Lead, HousingProject } from '../../types';

interface PanelesViewProps {
  leads: Lead[];
  projects: HousingProject[];
}

export const PanelesView: React.FC<PanelesViewProps> = ({ leads, projects }) => {
  const visLeadsCount = leads.filter((l) => l.housingInterest === 'VIS').length;
  const noVisLeadsCount = leads.filter((l) => l.housingInterest === 'No VIS').length;
  const hotLeadsCount = leads.filter((l) => l.temperature === 'Hot').length;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER SECTION */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#003DA5]" />
            <h1 className="text-lg font-bold text-slate-900">Paneles & Analítica de Gestión Comercial</h1>
          </div>
          <p className="text-xs text-slate-500">
            Métricas clave de conversión, velocidad de venta por proyecto e impacto de subsidios Colsubsidio.
          </p>
        </div>

        <div className="bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs px-3 py-1.5 rounded-xl">
          Reporte Mensual Julio 2026
        </div>
      </div>

      {/* METRICS SUMMARY TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
          <span className="text-xs text-slate-500 font-medium block">Total Leads Capturados</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black text-slate-900">{leads.length + 142}</span>
            <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
              +24% vs mes ant.
            </span>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
          <span className="text-xs text-slate-500 font-medium block">Leads Calificados Hot (Score &gt;85)</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black text-amber-600">{hotLeadsCount}</span>
            <span className="text-xs text-amber-800 font-bold bg-amber-50 px-1.5 py-0.5 rounded">
              {Math.round((hotLeadsCount / leads.length) * 100)}% de conversión
            </span>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
          <span className="text-xs text-slate-500 font-medium block">Promedio Tiempo Primer Contacto</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black text-[#003DA5]">12.4 min</span>
            <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
              -4.2 min
            </span>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
          <span className="text-xs text-slate-500 font-medium block">Efectividad Subsidio Colsubsidio</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-black text-emerald-700">91.2%</span>
            <span className="text-xs text-slate-500 font-medium">Cajas de Compensación</span>
          </div>
        </div>
      </div>

      {/* DETAILED CHARTS & DISTRIBUTION BREAKDOWN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Interest Distribution */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
            Distribución de Demanda por Proyecto (VIS vs No VIS)
          </h3>

          <div className="space-y-3">
            {projects.map((proj) => {
              const projLeads = leads.filter((l) => l.recommendedProjectId === proj.id).length;
              const percentage = Math.round((projLeads / leads.length) * 100);

              return (
                <div key={proj.id} className="space-y-1 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-800">{proj.name} ({proj.type})</span>
                    <span className="font-extrabold text-[#003DA5]">{projLeads} leads ({percentage}%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${proj.type === 'VIS' ? 'bg-[#003DA5]' : 'bg-slate-800'}`}
                      style={{ width: `${Math.max(percentage * 3, 10)}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Channel Source Breakdown */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
            Efectividad por Canal de Captación
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center">
              <div>
                <span className="font-bold text-slate-900 block">Pauta Meta (Facebook / Instagram)</span>
                <span className="text-[10px] text-slate-500">Campañas Subsidio Colsubsidio 2026</span>
              </div>
              <span className="font-black text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                48% Conversión
              </span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center">
              <div>
                <span className="font-bold text-slate-900 block">Google Search (Búsqueda Orgánica y Pauta)</span>
                <span className="text-[10px] text-slate-500">Proyectos Sabana de Bogotá y Cundinamarca</span>
              </div>
              <span className="font-black text-[#003DA5] bg-blue-50 px-2 py-1 rounded">
                32% Conversión
              </span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center">
              <div>
                <span className="font-bold text-slate-900 block">Portal Institucional Colsubsidio</span>
                <span className="text-[10px] text-slate-500">Feria de Vivienda & Afiliados Directos</span>
              </div>
              <span className="font-black text-purple-700 bg-purple-50 px-2 py-1 rounded">
                20% Conversión
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
