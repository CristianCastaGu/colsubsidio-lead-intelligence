import React from 'react';
import { Repeat, Flame, MessageSquare, Mail, Zap, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { Lead } from '../../types';

interface RemarketingViewProps {
  leads: Lead[];
  onOpenWhatsAppModal: (lead: Lead) => void;
}

export const RemarketingView: React.FC<RemarketingViewProps> = ({ leads, onOpenWhatsAppModal }) => {
  const hotLeads = leads.filter((l) => l.temperature === 'Hot');
  const warmLeads = leads.filter((l) => l.temperature === 'Warm');
  const coldLeads = leads.filter((l) => l.temperature === 'Cold');

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER SECTION */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Repeat className="w-5 h-5 text-[#003DA5]" />
            <h1 className="text-lg font-bold text-slate-900">Remarketing & Secuencias de Nurturing</h1>
          </div>
          <p className="text-xs text-slate-500">
            Automatización de mensajes segmentados por temperatura de lead (Hot / Warm / Cold) para reacelerar compra.
          </p>
        </div>

        <div className="bg-[#FFD200] text-[#003DA5] font-extrabold text-xs px-3 py-1.5 rounded-xl shadow-2xs">
          Automatización de Cuidado de Leads
        </div>
      </div>

      {/* THREE TEMPERATURE COLUMNS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* HOT LEADS COLUMN */}
        <div className="bg-white rounded-xl border border-amber-200 shadow-xs p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-amber-100 pb-2">
            <h2 className="font-bold text-sm text-amber-900 flex items-center gap-1.5">
              <span>🔥 Secuencia Hot Leads</span>
            </h2>
            <span className="bg-amber-100 text-amber-900 font-extrabold text-xs px-2 py-0.5 rounded-full">
              {hotLeads.length} leads
            </span>
          </div>
          <p className="text-[11px] text-slate-500">
            Cierre inmediato: WhatsApp directo con invitación a Sala de Ventas y simulación de crédito aprobada.
          </p>

          <div className="space-y-2">
            {hotLeads.map((lead) => (
              <div
                key={lead.id}
                className="p-3 bg-amber-50/60 border border-amber-200 rounded-lg text-xs space-y-2"
              >
                <div className="flex justify-between items-start">
                  <span className="font-bold text-slate-900">{lead.name}</span>
                  <span className="text-[10px] bg-amber-200 text-amber-900 font-bold px-1.5 py-0.2 rounded">
                    Score {lead.scores.total}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600">Interés: {lead.housingInterest} ({lead.city})</p>
                <button
                  onClick={() => onOpenWhatsAppModal(lead)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1.5 rounded text-[11px] flex items-center justify-center gap-1 cursor-pointer"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Enviar WhatsApp Personalizado</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* WARM LEADS COLUMN */}
        <div className="bg-white rounded-xl border border-blue-200 shadow-xs p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-blue-100 pb-2">
            <h2 className="font-bold text-sm text-blue-900 flex items-center gap-1.5">
              <span>🟡 Secuencia Warm Leads</span>
            </h2>
            <span className="bg-blue-100 text-blue-900 font-extrabold text-xs px-2 py-0.5 rounded-full">
              {warmLeads.length} leads
            </span>
          </div>
          <p className="text-[11px] text-slate-500">
            Educación y cálculo de subsidios: Envío de calculadora interactiva de subsidio Colsubsidio.
          </p>

          <div className="space-y-2">
            {warmLeads.map((lead) => (
              <div key={lead.id} className="p-3 bg-blue-50/60 border border-blue-200 rounded-lg text-xs space-y-2">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-slate-900">{lead.name}</span>
                  <span className="text-[10px] bg-blue-200 text-blue-900 font-bold px-1.5 py-0.2 rounded">
                    Score {lead.scores.total}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600">Interés: {lead.housingInterest} ({lead.city})</p>
                <button
                  onClick={() => onOpenWhatsAppModal(lead)}
                  className="w-full bg-[#003DA5] hover:bg-[#002B75] text-white font-bold py-1.5 rounded text-[11px] flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Mail className="w-3 h-3" />
                  <span>Activar Secuencia Subsidio</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* COLD LEADS COLUMN */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
              <span>❄️ Secuencia Cold Reactivation</span>
            </h2>
            <span className="bg-slate-100 text-slate-800 font-extrabold text-xs px-2 py-0.5 rounded-full">
              {coldLeads.length} leads
            </span>
          </div>
          <p className="text-[11px] text-slate-500">
            Reenganche: Boletín mensual de lanzamientos de vivienda VIS con cuotas bajas.
          </p>

          <div className="space-y-2">
            {coldLeads.map((lead) => (
              <div key={lead.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-2">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-slate-900">{lead.name}</span>
                  <span className="text-[10px] bg-slate-200 text-slate-800 font-bold px-1.5 py-0.2 rounded">
                    Score {lead.scores.total}
                  </span>
                </div>
                <button
                  onClick={() => onOpenWhatsAppModal(lead)}
                  className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-1.5 rounded text-[11px] flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Repeat className="w-3 h-3" />
                  <span>Reenganchar por Mail</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
