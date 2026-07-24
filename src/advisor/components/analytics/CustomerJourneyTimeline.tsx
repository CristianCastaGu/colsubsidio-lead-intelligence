import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AnalyticsLead } from '../../data/analyticsTypes';
import { TEMPERATURE_COLOR } from './palette';

interface Props {
  leads: AnalyticsLead[];
}

/** Job: sequence of events for one entity. Not a chart — a plain-HTML timeline, per the dataviz skill's guidance that not every panel is a chart. */
export const CustomerJourneyTimeline: React.FC<Props> = ({ leads }) => {
  const [selectedId, setSelectedId] = useState(leads[0]?.id);
  const lead = leads.find((l) => l.id === selectedId) || leads[0];
  if (!lead) return null;

  return (
    <div>
      <select
        value={lead.id}
        onChange={(e) => setSelectedId(e.target.value)}
        className="w-full mb-4 text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20"
      >
        {leads.map((l) => (
          <option key={l.id} value={l.id}>
            {l.nombre} — {l.proyecto} ({l.total}/100)
          </option>
        ))}
      </select>

      <div className="flex items-center gap-2 mb-4">
        <span
          className="text-[10px] font-bold uppercase px-2 py-1 rounded-full text-white"
          style={{ backgroundColor: TEMPERATURE_COLOR[lead.temperatura] }}
        >
          {lead.temperatura}
        </span>
        <span className="text-xs text-slate-500">
          {lead.fuente} · {lead.utm_campaign}
        </span>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-2.5 pl-5 space-y-4">
        {lead.journey.map((step, idx) => (
          <div key={step.key} className="relative">
            <div className="absolute -left-[26px] top-0.5 w-3 h-3 rounded-full bg-[#003DA5] ring-4 ring-white flex items-center justify-center">
              {idx === lead.journey.length - 1 && <CheckCircle2 className="w-3 h-3 text-white -m-0.5" />}
            </div>
            <div className="text-xs">
              <span className="font-bold text-slate-900">{step.label}</span>
              <p className="text-[11px] text-slate-500">{step.date}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-slate-500 mt-4 pt-3 border-t border-slate-100">
        Próxima acción sugerida: <span className="font-bold text-slate-800">{lead.nextBestAction}</span>
      </p>
    </div>
  );
};
