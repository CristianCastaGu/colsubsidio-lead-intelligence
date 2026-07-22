import React, { useState } from 'react';
import {
  UserCheck,
  Sparkles,
  Target,
  MessageSquare,
  Copy,
  Check,
  ChevronRight,
  TrendingUp,
  Award,
  Users
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

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER SECTION */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-[#003DA5]" />
            <h1 className="text-lg font-bold text-slate-900">Buyer Personas IA — Arquetipos de Compradores</h1>
          </div>
          <p className="text-xs text-slate-500">
            Perfiles generados por IA mediante clustering de datos reales de afiliados y compradores de Colsubsidio Vivienda.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#003DA5]/10 text-[#003DA5] px-3 py-1.5 rounded-xl text-xs font-bold border border-[#003DA5]/20">
          <Sparkles className="w-4 h-4 text-[#FFD200]" />
          <span>Modelo de Clustering IA v3.2</span>
        </div>
      </div>

      {/* PERSONAS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {personas.map((bp) => (
          <div
            key={bp.id}
            className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all p-5 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Top Title & Percentage */}
              <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                    {bp.clusterName}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">{bp.title}</h3>
                </div>
                <span className="bg-[#FFD200] text-[#003DA5] font-black text-xs px-2.5 py-1 rounded-full shrink-0 shadow-2xs">
                  {bp.percentageOfLeads}% del Total
                </span>
              </div>

              {/* Key Demographic Metrics */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-medium block">Ingresos del Hogar</span>
                  <span className="font-bold text-slate-800">{bp.incomeRangeCOP}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-medium block">Edad Promedio</span>
                  <span className="font-bold text-slate-800">{bp.averageAge}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 bg-slate-50/80 p-3 rounded-lg border border-slate-200/80 leading-relaxed">
                {bp.demographics}
              </p>

              {/* Pain Points */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-red-500" />
                  <span>Dolores y Temores Clave:</span>
                </h4>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                  {bp.keyPainPoints.map((pain, idx) => (
                    <li key={idx}>{pain}</li>
                  ))}
                </ul>
              </div>

              {/* Buying Triggers */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Detonantes de Compra (Triggers):</span>
                </h4>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                  {bp.buyingTriggers.map((trig, idx) => (
                    <li key={idx}>{trig}</li>
                  ))}
                </ul>
              </div>

              {/* Recommended Projects */}
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1">
                  Proyectos Recomendados:
                </span>
                <div className="flex flex-wrap gap-1">
                  {bp.recommendedProjects.map((proj, idx) => (
                    <span
                      key={idx}
                      className="bg-[#003DA5]/10 text-[#003DA5] font-bold text-[11px] px-2 py-0.5 rounded border border-[#003DA5]/20"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Commercial Script Box */}
            <div className="p-3.5 bg-slate-900 text-slate-200 rounded-xl space-y-2 text-xs pt-3">
              <div className="flex items-center justify-between text-slate-400">
                <span className="font-bold text-[#FFD200] flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Guion Comercial Sugerido IA
                </span>
                <button
                  onClick={() => copyScript(bp.id, bp.aiCommercialScript)}
                  className="hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                >
                  {copiedId === bp.id ? (
                    <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                      <Check className="w-3 h-3" /> Copiado
                    </span>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-[11px] italic text-slate-300 leading-snug">
                "{bp.aiCommercialScript}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
