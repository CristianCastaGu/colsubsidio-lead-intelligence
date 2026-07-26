import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Download,
  Phone,
  UserPlus,
  Zap
} from 'lucide-react';
import { Lead, LeadStatus, LeadTemperature, HousingCategory } from '../../types';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { getLeadEscalation } from '../../utils/leadIntelligence';

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
            <h1 className="text-lg font-black text-slate-900 font-sans tracking-tight">Directorio General de Leads (Contactos)</h1>
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

      {/* LEADS TABLE — same visual language as the Home leads table: temperature-colored
          avatars, pill badges, sticky header, and the same action button styling. */}
      <div className="border border-slate-200/80 rounded-xl shadow-2xs overflow-hidden">
        <div className="overflow-x-auto max-h-[640px] overflow-y-auto custom-scrollbar relative">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="sticky top-0 z-10 bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[10px] font-extrabold shadow-2xs">
              <tr>
                <th className="py-3 px-3.5 bg-slate-100">Nombre / Contacto</th>
                <th className="py-3 px-3.5 bg-slate-100">Afiliación Colsubsidio</th>
                <th className="py-3 px-3.5 bg-slate-100">Interés & Presupuesto</th>
                <th className="py-3 px-3.5 bg-slate-100">Score 360</th>
                <th className="py-3 px-3.5 bg-slate-100">Estado Comercial</th>
                <th className="py-3 px-3.5 text-right bg-slate-100">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium bg-white">
              {filteredLeads.map((lead) => {
                const leadEsc = getLeadEscalation(lead);
                return (
                  <tr
                    key={lead.id}
                    className={`transition-all group border-l-4 ${
                      leadEsc.active
                        ? 'bg-[#FFD200]/15 hover:bg-[#FFD200]/25 border-l-[#FFD200]'
                        : 'border-l-transparent hover:border-l-[#003DA5]/40 hover:bg-slate-50 hover:shadow-[inset_0_0_0_1px_rgba(0,61,165,0.08)]'
                    }`}
                  >
                    {/* Name & Contact */}
                    <td className="py-3 px-3.5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`relative w-8 h-8 rounded-full flex items-center justify-center font-black text-[10px] shrink-0 border-2 shadow-2xs ${
                            lead.temperature === 'Hot'
                              ? 'bg-[#FFF4B8] text-amber-900 border-[#FFD200]'
                              : lead.temperature === 'Warm'
                              ? 'bg-blue-50 text-[#003DA5] border-[#003DA5]'
                              : 'bg-slate-100 text-slate-700 border-slate-300'
                          }`}
                          title={`Temperatura: ${lead.temperature}`}
                        >
                          {lead.name.slice(0, 2).toUpperCase()}
                          {leadEsc.active && (
                            <span
                              className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#FFD200] border border-white flex items-center justify-center shadow-xs"
                              title={leadEsc.reasons.join(' • ')}
                            >
                              <Zap className="w-2 h-2 text-amber-900 fill-amber-900" />
                            </span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <button
                            onClick={() => onSelectLeadForScore360(lead)}
                            className="font-extrabold text-slate-900 group-hover:text-[#003DA5] hover:underline text-left block truncate cursor-pointer"
                          >
                            {lead.name}
                          </button>
                          <p className="text-[10px] text-slate-500 truncate">
                            {lead.phone} • {lead.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Afiliación */}
                    <td className="py-3 px-3.5">
                      <span className="text-[10px] text-[#003DA5] font-extrabold bg-[#003DA5]/10 px-2 py-0.5 rounded-md border border-[#003DA5]/20 inline-block whitespace-nowrap">
                        {lead.colsubsidioAfiliado ? lead.afiliacionCategoria : 'No Afiliado'}
                      </span>
                      <p className="text-[10px] text-slate-500 mt-1">
                        Subsidio: {lead.hasCajaSubsidio ? 'Aprobado ($39M)' : 'En trámite'}
                      </p>
                    </td>

                    {/* Housing Interest & Budget */}
                    <td className="py-3 px-3.5">
                      <span className="text-[11px] font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-300 inline-block">
                        {lead.housingInterest}
                      </span>
                      <p className="text-[10px] text-slate-600 mt-1">
                        Budget: ${(lead.budgetCOP / 1000000).toFixed(0)}M COP
                      </p>
                    </td>

                    {/* Score 360 with horizontal battery progress bar */}
                    <td className="py-3 px-3.5">
                      <div className="flex flex-col items-start gap-1">
                        <button
                          onClick={() => onSelectLeadForScore360(lead)}
                          className="font-black text-slate-900 text-xs hover:text-[#003DA5] cursor-pointer"
                        >
                          {lead.scores.total}/100
                        </button>
                        {/* Horizontal progress meter bar */}
                        <div
                          className="w-14 h-1.5 bg-slate-200/80 rounded-full overflow-hidden border border-slate-300/40"
                          title={`Score 360: ${lead.scores.total}/100`}
                        >
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              lead.scores.total >= 60
                                ? 'bg-gradient-to-r from-amber-400 to-amber-500'
                                : lead.scores.total >= 40
                                ? 'bg-gradient-to-r from-blue-500 to-[#003DA5]'
                                : 'bg-slate-400'
                            }`}
                            style={{ width: `${Math.min(100, Math.max(0, lead.scores.total))}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Status Dropdown Select */}
                    <td className="py-3 px-3.5">
                      <select
                        value={lead.status}
                        onChange={(e) => onUpdateLeadStatus(lead.id, e.target.value as LeadStatus)}
                        className="bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-700 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 cursor-pointer"
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
                    <td className="py-3 px-3.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => onOpenWhatsAppModal(lead)}
                          className="p-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-lg transition-all border border-[#25D366]/30 cursor-pointer flex items-center justify-center hover:scale-105"
                          title="Enviar WhatsApp"
                        >
                          <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                        </button>

                        <button
                          onClick={() => alert(`Iniciando llamada comercial a ${lead.name} (${lead.phone})`)}
                          className="p-1.5 bg-[#003DA5]/10 hover:bg-[#003DA5]/20 text-[#003DA5] rounded-lg transition-all border border-[#003DA5]/20 cursor-pointer flex items-center justify-center hover:scale-105"
                          title="Llamar directamente"
                        >
                          <Phone className="w-4 h-4 text-[#003DA5]" />
                        </button>

                        <button
                          onClick={() => onSelectLeadForScore360(lead)}
                          className="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold px-2.5 py-1 rounded-lg border border-slate-200 transition-all hover:scale-105"
                          title="Ver perfil completo 360"
                        >
                          Score 360
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
