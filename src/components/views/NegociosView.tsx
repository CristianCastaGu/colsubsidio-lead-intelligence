import React, { useState } from 'react';
import {
  Briefcase,
  Plus,
  Building,
  DollarSign,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  FileText
} from 'lucide-react';
import { Deal, HousingProject } from '../../types';

interface NegociosViewProps {
  deals: Deal[];
  projects: HousingProject[];
  onOpenWhatsAppModalByLeadName: (leadName: string) => void;
}

export const NegociosView: React.FC<NegociosViewProps> = ({
  deals,
  projects,
  onOpenWhatsAppModalByLeadName,
}) => {
  const stages: Deal['stage'][] = [
    'Prospección',
    'Cita Sala',
    'Pre-Aprobado',
    'Promesa Firmada',
    'Cierre Exitoso'
  ];

  const totalPipelineValue = deals.reduce((sum, d) => sum + d.valueCOP, 0);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER SECTION */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#003DA5]" />
            <h1 className="text-lg font-bold text-slate-900">Negocios / Oportunidades en Negociación</h1>
          </div>
          <p className="text-xs text-slate-500">
            Pipeline comercial de ventas de vivienda VIS y No VIS con validación de subsidios Colsubsidio.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl text-right">
            <span className="text-[10px] text-emerald-800 font-semibold block">Valor Total Pipeline</span>
            <span className="text-sm font-extrabold text-emerald-900">
              ${(totalPipelineValue / 1000000000).toFixed(2)} mil millones COP
            </span>
          </div>

          <button
            onClick={() => alert('Crear nueva oportunidad comercial')}
            className="bg-[#003DA5] hover:bg-[#002B75] text-white px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Crear Negocio</span>
          </button>
        </div>
      </div>

      {/* KANBAN PIPELINE BOARD */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => {
          const stageDeals = deals.filter((d) => d.stage === stage);
          const stageValue = stageDeals.reduce((sum, d) => sum + d.valueCOP, 0);

          return (
            <div key={stage} className="bg-slate-100/80 p-3 rounded-xl border border-slate-200 min-w-[240px] flex flex-col">
              {/* Stage Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                <div>
                  <h3 className="font-bold text-xs text-slate-900">{stage}</h3>
                  <span className="text-[10px] text-slate-500 font-medium">
                    ${(stageValue / 1000000).toFixed(0)}M COP
                  </span>
                </div>
                <span className="bg-slate-200 text-slate-800 font-extrabold text-[11px] px-2 py-0.5 rounded-full">
                  {stageDeals.length}
                </span>
              </div>

              {/* Cards Container */}
              <div className="space-y-3 flex-1">
                {stageDeals.map((deal) => (
                  <div
                    key={deal.id}
                    className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs hover:shadow-md transition-all space-y-2 cursor-pointer group"
                    onClick={() => onOpenWhatsAppModalByLeadName(deal.leadName)}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-xs text-slate-900 group-hover:text-[#003DA5] transition-colors">
                        {deal.leadName}
                      </h4>
                      <span className="text-[10px] font-extrabold bg-[#003DA5]/10 text-[#003DA5] px-1.5 py-0.5 rounded">
                        {deal.probability}% Prob
                      </span>
                    </div>

                    <div className="text-[11px] space-y-1 text-slate-600">
                      <p className="font-semibold text-slate-800 flex items-center gap-1">
                        <Building className="w-3 h-3 text-[#003DA5]" /> {deal.projectName}
                      </p>
                      <p className="text-[10px] text-slate-500">Unidad: {deal.unitCode}</p>
                    </div>

                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-200/80 flex items-center justify-between">
                      <span className="text-[10px] text-slate-500 font-semibold">Valor Negocio:</span>
                      <span className="text-xs font-black text-emerald-700">
                        ${(deal.valueCOP / 1000000).toFixed(0)}M COP
                      </span>
                    </div>

                    {/* Subsidio Badge */}
                    <div className="flex items-center justify-between text-[10px] pt-1">
                      <span
                        className={`font-bold px-1.5 py-0.5 rounded ${
                          deal.subsidyStatus.includes('Aprobado')
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {deal.subsidyStatus}
                      </span>
                      <span className="text-slate-400">Cierre: {deal.closingDate}</span>
                    </div>
                  </div>
                ))}

                {stageDeals.length === 0 && (
                  <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center text-slate-400 text-xs">
                    Sin negocios en esta etapa
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
