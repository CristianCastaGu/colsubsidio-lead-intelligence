import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Download,
  Phone,
  MessageSquare,
  Sparkles,
  Flame,
  CheckCircle2,
  MoreVertical,
  Target,
  UserPlus
} from 'lucide-react';
import { Lead, LeadStatus, LeadTemperature, HousingCategory } from '../../types';

interface LeadsViewProps {
  leads: Lead[];
  onOpenNewLeadModal: () => void;
  onSelectLeadForScore360: (lead: Lead) => void;
  onOpenWhatsAppModal: (lead: Lead) => void;
  onUpdateLeadStatus: (leadId: string, status: LeadStatus) => void;
}

export const LeadsView: React.FC<LeadsViewProps> = ({
  leads,
  onOpenNewLeadModal,
  onSelectLeadForScore360,
  onOpenWhatsAppModal,
  onUpdateLeadStatus,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('todos');
  const [temperatureFilter, setTemperatureFilter] = useState<string>('todos');
  const [housingFilter, setHousingFilter] = useState<string>('todos');

  // Filter logic
  const filteredLeads = leads.filter((lead) => {
    if (statusFilter !== 'todos' && lead.status !== statusFilter) return false;
    if (temperatureFilter !== 'todos' && lead.temperature !== temperatureFilter) return false;
    if (housingFilter !== 'todos' && lead.housingInterest !== housingFilter) return false;

    if (
      searchQuery &&
      !lead.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !lead.email.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !lead.phone.includes(searchQuery) &&
      !lead.city.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  const exportCSV = () => {
    const csvRows = [
      ['ID', 'Nombre', 'Email', 'Telefono', 'Ciudad', 'Canal', 'Status', 'Score', 'Interes'],
      ...filteredLeads.map((l) => [
        l.id,
        l.name,
        l.email,
        l.phone,
        l.city,
        l.channel,
        l.status,
        l.scores.total,
        l.housingInterest
      ])
    ];

    const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.map((e) => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `leads_colsubsidio_vivienda_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER SECTION */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#003DA5]" />
            <h1 className="text-lg font-bold text-slate-900">Directorio General de Leads (Contactos)</h1>
          </div>
          <p className="text-xs text-slate-500">
            {leads.length} prospectos capturados de canales digitales, feria y afiliados a la Caja.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={exportCSV}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 border border-slate-300 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Exportar CSV</span>
          </button>

          <button
            onClick={onOpenNewLeadModal}
            className="bg-[#003DA5] hover:bg-[#002B75] text-white px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Nuevo Lead</span>
          </button>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre, mail o teléfono..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 font-medium"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 cursor-pointer"
          >
            <option value="todos">Todos los Estados</option>
            <option value="Nuevo">Nuevo</option>
            <option value="En Calificación">En Calificación</option>
            <option value="Cita Agendada">Cita Agendada</option>
            <option value="Pre-Aprobado">Pre-Aprobado</option>
            <option value="En Negociación">En Negociación</option>
          </select>

          {/* Temperature Filter */}
          <select
            value={temperatureFilter}
            onChange={(e) => setTemperatureFilter(e.target.value)}
            className="p-2 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 cursor-pointer"
          >
            <option value="todos">Todas las Temperaturas</option>
            <option value="Hot">🔥 Hot Leads (Score &gt; 85)</option>
            <option value="Warm">🟡 Warm Leads (Score 70-84)</option>
            <option value="Cold">❄️ Cold Leads (Score &lt; 70)</option>
          </select>

          {/* Housing Filter */}
          <select
            value={housingFilter}
            onChange={(e) => setHousingFilter(e.target.value)}
            className="p-2 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 cursor-pointer"
          >
            <option value="todos">Interés Vivienda (VIS / No VIS)</option>
            <option value="VIS">VIS (Interés Social)</option>
            <option value="No VIS">No VIS (Libre Inversión)</option>
          </select>
        </div>
      </div>

      {/* LEADS TABLE */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                <th className="py-3 px-4">Nombre / Contacto</th>
                <th className="py-3 px-4">Afiliación Colsubsidio</th>
                <th className="py-3 px-4">Interés & Presupuesto</th>
                <th className="py-3 px-4">Score 360</th>
                <th className="py-3 px-4">Estado Comercial</th>
                <th className="py-3 px-4 text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors group">
                  {/* Name & Contact */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#003DA5] text-[#FFD200] font-extrabold text-xs flex items-center justify-center shrink-0">
                        {lead.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <button
                          onClick={() => onSelectLeadForScore360(lead)}
                          className="font-bold text-slate-900 group-hover:text-[#003DA5] hover:underline text-left block"
                        >
                          {lead.name}
                        </button>
                        <p className="text-[11px] text-slate-500">
                          {lead.phone} • {lead.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Afiliación */}
                  <td className="py-3 px-4">
                    <span className="font-semibold text-slate-800 block">
                      {lead.colsubsidioAfiliado ? lead.afiliacionCategoria : 'No Afiliado'}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Subsidio: {lead.hasCajaSubsidio ? 'Aprobado ($39M)' : 'En trámite'}
                    </span>
                  </td>

                  {/* Housing Interest & Budget */}
                  <td className="py-3 px-4">
                    <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {lead.housingInterest}
                    </span>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Budget: ${(lead.budgetCOP / 1000000).toFixed(0)}M COP
                    </p>
                  </td>

                  {/* Score 360 */}
                  <td className="py-3 px-4">
                    <button
                      onClick={() => onSelectLeadForScore360(lead)}
                      className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-[#003DA5]/10 px-2.5 py-1 rounded-lg border border-slate-200 cursor-pointer transition-colors"
                    >
                      <Target className="w-3.5 h-3.5 text-[#003DA5]" />
                      <span className="font-extrabold text-slate-900">{lead.scores.total}/100</span>
                      {lead.temperature === 'Hot' && <span className="text-[10px]">🔥</span>}
                    </button>
                  </td>

                  {/* Status Dropdown Select */}
                  <td className="py-3 px-4">
                    <select
                      value={lead.status}
                      onChange={(e) => onUpdateLeadStatus(lead.id, e.target.value as LeadStatus)}
                      className="bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 cursor-pointer"
                    >
                      <option value="Nuevo">Nuevo</option>
                      <option value="En Calificación">En Calificación</option>
                      <option value="Cita Agendada">Cita Agendada</option>
                      <option value="Pre-Aprobado">Pre-Aprobado</option>
                      <option value="En Negociación">En Negociación</option>
                      <option value="Ganado">Ganado (Promesa)</option>
                      <option value="Perdido">Perdido</option>
                    </select>
                  </td>

                  {/* Action Buttons */}
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => onOpenWhatsAppModal(lead)}
                        className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-lg font-bold text-[11px] flex items-center gap-1 border border-emerald-200 cursor-pointer transition-colors"
                      >
                        <MessageSquare className="w-3 h-3 text-emerald-600" />
                        <span>WhatsApp</span>
                      </button>

                      <button
                        onClick={() => onSelectLeadForScore360(lead)}
                        className="bg-[#003DA5]/10 hover:bg-[#003DA5]/20 text-[#003DA5] px-2.5 py-1 rounded-lg font-bold text-[11px] border border-[#003DA5]/20 cursor-pointer transition-colors"
                      >
                        Score 360
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
