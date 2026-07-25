import React, { useState, useMemo } from 'react';
import { animate } from 'motion/react';
import {
  Phone,
  Sparkles,
  ArrowRight,
  Clock,
  Building2,
  ChevronRight,
  Filter,
  ExternalLink,
  AlertCircle,
  CheckCircle2,
  UserCheck,
  TrendingUp,
  FileText,
  HelpCircle,
  Zap,
  CheckSquare,
  Search,
  X,
  Plus,
  User
} from 'lucide-react';
import { Lead, Task, HousingProject } from '../../types';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import {
  getLeadEscalation,
  getFinancialPreviability,
  getPurchaseIntent,
  getNextBestAction,
  getPendingData,
  sortLeadsForInicio,
  isSofiaProfileComplete
} from '../../utils/leadIntelligence';

interface InicioViewProps {
  advisorName: string;
  leads: Lead[];
  projects: HousingProject[];
  tasks: Task[];
  onOpenNewLeadModal: () => void;
  onSelectLeadForScore360: (lead: Lead) => void;
  onOpenWhatsAppModal: (lead: Lead) => void;
  onFilterHotLeads: () => void;
  onNavigateToView: (view: any) => void;
  onToggleTaskComplete: (taskId: string) => void;
}

export const InicioView: React.FC<InicioViewProps> = ({
  advisorName,
  leads,
  projects,
  tasks,
  onOpenNewLeadModal,
  onSelectLeadForScore360,
  onOpenWhatsAppModal,
  onNavigateToView,
  onToggleTaskComplete,
}) => {
  const [selectedProjectFilter, setSelectedProjectFilter] = useState<string>('todos');

  // Quick search (moved here from the top app header, next to "+ Nuevo Lead")
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const trimmedQuery = searchQuery.trim().toLowerCase();
  const matchingLeads = trimmedQuery
    ? leads
        .filter(
          (l) =>
            l.name.toLowerCase().includes(trimmedQuery) ||
            l.phone.includes(trimmedQuery) ||
            l.email.toLowerCase().includes(trimmedQuery) ||
            l.city.toLowerCase().includes(trimmedQuery) ||
            l.housingInterest.toLowerCase().includes(trimmedQuery)
        )
        .slice(0, 5)
    : [];
  const matchingProjects = trimmedQuery
    ? projects
        .filter(
          (p) =>
            p.name.toLowerCase().includes(trimmedQuery) ||
            p.municipality.toLowerCase().includes(trimmedQuery) ||
            p.type.toLowerCase().includes(trimmedQuery)
        )
        .slice(0, 3)
    : [];
  const hasSearchMatches = matchingLeads.length > 0 || matchingProjects.length > 0;

  const handleSearchSelectLead = (lead: Lead) => {
    onSelectLeadForScore360(lead);
    setSearchQuery('');
    setIsSearchFocused(false);
  };

  const handleSearchSelectProject = () => {
    onNavigateToView('proyectos');
    setSearchQuery('');
    setIsSearchFocused(false);
  };

  // Sorted list of leads for Inicio
  const sortedLeads = useMemo(() => {
    let list = sortLeadsForInicio(leads);
    if (selectedProjectFilter !== 'todos') {
      list = list.filter((l) => l.recommendedProjectId === selectedProjectFilter);
    }
    return list;
  }, [leads, selectedProjectFilter]);

  // Default selected lead for the detail panel (first in sorted list)
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);

  const activeSelectedLead = useMemo(() => {
    if (selectedLeadId) {
      const found = leads.find((l) => l.id === selectedLeadId);
      if (found) return found;
    }
    return sortedLeads[0] || leads[0];
  }, [selectedLeadId, sortedLeads, leads]);

  // Operational metrics
  const escalatedLeadsCount = leads.filter((l) => getLeadEscalation(l).active).length;
  const highIntentLeadsCount = leads.filter((l) => getPurchaseIntent(l).status === 'alta').length;
  const profiledBySofiaCount = leads.filter((l) => isSofiaProfileComplete(l)).length;
  const pendingTasksCount = tasks.filter((t) => !t.completed).length;

  // Selected lead intelligence calculations
  const escalation = getLeadEscalation(activeSelectedLead);
  const financial = getFinancialPreviability(activeSelectedLead);
  const intent = getPurchaseIntent(activeSelectedLead);
  const nextAction = getNextBestAction(activeSelectedLead);
  const pendingData = getPendingData(activeSelectedLead);

  const [briefExpanded, setBriefExpanded] = useState(false);

  return (
    <div className="space-y-6 animate-fadeIn pb-8">
      {/* 1. EXECUTIVE METRICS GRID (COLSUBSIDIO BRANDED CARDS) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {/* Metric 1: Perfilados por Sofía */}
        <div className="relative bg-white border border-slate-200/80 hover:border-[#003DA5]/40 rounded-2xl p-4 pt-5 shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-all space-y-1.5 group overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#003DA5]" />
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold tracking-wide uppercase text-slate-500">Perfilados Sofía</p>
            <div className="w-8 h-8 rounded-xl bg-[#003DA5]/10 text-[#003DA5] flex items-center justify-center group-hover:scale-110 transition-transform">
              <UserCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between pt-1">
            <span className="font-display text-3xl font-black text-slate-900">{profiledBySofiaCount}</span>
            <span className="text-[10px] text-[#003DA5] font-bold bg-[#003DA5]/10 px-2 py-0.5 rounded-full border border-[#003DA5]/20">
              WhatsApp En Vivo
            </span>
          </div>
        </div>

        {/* Metric 2: Requieren Atención (Colsubsidio Yellow Accent) */}
        <div className="relative bg-gradient-to-br from-[#FFD200]/20 via-[#FFD200]/10 to-amber-500/5 border border-[#FFD200]/70 hover:border-[#FFD200] rounded-2xl p-4 pt-5 shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-all space-y-1.5 group overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFD200]" />
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-extrabold tracking-wide uppercase text-amber-950">Requieren Atención</p>
            <div className="w-8 h-8 rounded-xl bg-[#FFD200] text-[#003DA5] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
              <Zap className="w-4 h-4 fill-[#003DA5]" />
            </div>
          </div>
          <div className="flex items-baseline justify-between pt-1">
            <span className="font-display text-3xl font-black text-amber-950">{escalatedLeadsCount}</span>
            <span className="text-[10px] text-amber-900 font-extrabold bg-[#FFD200] px-2 py-0.5 rounded-full shadow-2xs">
              Atención Inmediata
            </span>
          </div>
        </div>

        {/* Metric 3: Intención Alta */}
        <div className="relative bg-white border border-slate-200/80 hover:border-emerald-300 rounded-2xl p-4 pt-5 shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-all space-y-1.5 group overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold tracking-wide uppercase text-slate-500">Intención Alta</p>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between pt-1">
            <span className="font-display text-3xl font-black text-slate-900">{highIntentLeadsCount}</span>
            <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              0-3 Meses / Hot
            </span>
          </div>
        </div>

        {/* Metric 4: Tareas Pendientes */}
        <div className="relative bg-white border border-slate-200/80 hover:border-[#003DA5]/40 rounded-2xl p-4 pt-5 shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-all space-y-1.5 group overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-400" />
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold tracking-wide uppercase text-[#003DA5]">Tareas Pendientes</p>
            <div className="w-8 h-8 rounded-xl bg-[#003DA5]/10 text-[#003DA5] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between pt-1">
            <span className="font-display text-3xl font-black text-[#003DA5]">{pendingTasksCount}</span>
            <span className="text-[10px] text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded-full">
              de {tasks.length} asignadas
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN SECTION: LEADS QUE REQUIEREN ATENCIÓN COMERCIAL */}
      {/* Section heading now lives outside the card */}
      <div className="flex items-center gap-3 px-1">
        <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
          <div className="absolute w-4 h-4 bg-[#FFD200] transform rotate-45 rounded-xs" />
          <div className="absolute w-2 h-2 bg-[#003DA5] transform rotate-45 translate-x-0.5 translate-y-0.5 rounded-xs" />
        </div>
        <div>
          <h2 className="text-base font-extrabold text-slate-900 tracking-tight font-display flex items-center gap-2">
            <span>Leads que Requieren Atención Comercial</span>
            <span className="text-[10px] font-bold bg-[#003DA5]/10 text-[#003DA5] px-2.5 py-0.5 rounded-full border border-[#003DA5]/20">
              Auto-Escalamiento AI
            </span>
          </h2>
          <p className="text-xs text-slate-500">
            Calificados automáticamente por perfilamiento conversacional, horizonte de compra y previabilidad financiera
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
          {/* Search + Nuevo Lead (moved here from the top app header) */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Buscar lead por nombre, teléfono, ciudad o proyecto..."
                className="w-full pl-8 pr-7 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 focus:border-[#003DA5] focus:bg-white transition-all font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200/60 transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Interactive Search Results Dropdown Popover */}
              {trimmedQuery && isSearchFocused && (
                <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-2xl z-50 overflow-hidden max-h-96 overflow-y-auto divide-y divide-slate-100 text-xs">
                  {matchingLeads.length > 0 && (
                    <div className="p-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#003DA5] px-2 py-1 flex items-center gap-1.5">
                        <User className="w-3 h-3" />
                        <span>Leads Encontrados ({matchingLeads.length})</span>
                      </div>
                      {matchingLeads.map((lead) => (
                        <button
                          key={lead.id}
                          onMouseDown={() => handleSearchSelectLead(lead)}
                          className="w-full text-left p-2 hover:bg-slate-50 rounded-lg flex items-center justify-between gap-2 group transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-7 h-7 rounded-full bg-[#003DA5] text-[#FFD200] font-extrabold text-[11px] flex items-center justify-center shrink-0">
                              {lead.name.slice(0, 2).toUpperCase()}
                            </div>
                            <div className="truncate">
                              <p className="font-bold text-slate-900 group-hover:text-[#003DA5] truncate">
                                {lead.name}
                              </p>
                              <p className="text-[11px] text-slate-500 truncate">
                                {lead.phone} • {lead.city} • {lead.housingInterest}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700">
                              Score {lead.scores.total}
                            </span>
                            {lead.temperature === 'Hot' && <span className="text-xs">🔥</span>}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {matchingProjects.length > 0 && (
                    <div className="p-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-2 py-1 flex items-center gap-1.5">
                        <Building2 className="w-3 h-3 text-slate-600" />
                        <span>Proyectos Coincidentes</span>
                      </div>
                      {matchingProjects.map((proj) => (
                        <button
                          key={proj.id}
                          onMouseDown={handleSearchSelectProject}
                          className="w-full text-left p-2 hover:bg-slate-50 rounded-lg flex items-center justify-between gap-2 group transition-colors cursor-pointer"
                        >
                          <div className="truncate">
                            <p className="font-bold text-slate-900 group-hover:text-[#003DA5] truncate">
                              {proj.name}
                            </p>
                            <p className="text-[11px] text-slate-500 truncate">
                              {proj.municipality} • {proj.address}
                            </p>
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {proj.type}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  {!hasSearchMatches && (
                    <div className="p-4 text-center text-slate-500 text-xs">
                      No se encontraron leads ni proyectos para <span className="font-bold text-slate-800">"{searchQuery}"</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={onOpenNewLeadModal}
              aria-label="Registrar Nuevo Lead"
              className="bg-[#003DA5] hover:bg-[#002B75] active:bg-[#001F54] text-white px-3.5 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 shadow-sm hover:shadow transition-all cursor-pointer transform active:scale-95 shrink-0"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>+ Nuevo Lead</span>
            </button>
          </div>

          {/* Project Filter */}
          <div className="flex items-center gap-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedProjectFilter}
              onChange={(e) => setSelectedProjectFilter(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 cursor-pointer"
            >
              <option value="todos">Todos los proyectos</option>
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.type})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Table Container with Internal Vertical Scroll & Sticky Header */}
        <div className="overflow-x-auto max-h-[460px] overflow-y-auto border border-slate-200/80 rounded-xl shadow-2xs relative custom-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="sticky top-0 z-10 bg-slate-100/90 backdrop-blur-md border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[10px] font-extrabold shadow-2xs">
              <tr>
                <th className="py-3 px-3.5 bg-slate-100/90">Lead / Afiliación</th>
                <th className="py-3 px-3.5 bg-slate-100/90">Score / Temp</th>
                <th className="py-3 px-3.5 bg-slate-100/90">Previabilidad Financiera</th>
                <th className="py-3 px-3.5 bg-slate-100/90">Intención</th>
                <th className="py-3 px-3.5 bg-slate-100/90">Proyecto Interés / Sugerido</th>
                <th className="py-3 px-3.5 text-right bg-slate-100/90">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium bg-white">
              {sortedLeads.map((lead) => {
                const leadEsc = getLeadEscalation(lead);
                const leadFin = getFinancialPreviability(lead);
                const leadInt = getPurchaseIntent(lead);
                const isSelected = activeSelectedLead.id === lead.id;
                const recProj = projects.find((p) => p.id === lead.recommendedProjectId);

                return (
                  <tr
                    key={lead.id}
                    onClick={() => setSelectedLeadId(lead.id)}
                    className={`transition-colors cursor-pointer group ${
                      leadEsc.active
                        ? 'bg-[#FFD200]/15 hover:bg-[#FFD200]/25 border-l-4 border-l-[#FFD200]'
                        : isSelected
                        ? 'bg-[#003DA5]/5 hover:bg-[#003DA5]/10 border-l-4 border-l-[#003DA5]'
                        : 'hover:bg-slate-50/80'
                    }`}
                  >
                    {/* Lead Name & Info */}
                    <td className="py-3 px-3.5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`relative w-8 h-8 rounded-full flex items-center justify-center font-black text-[10px] shrink-0 border-2 ${
                            lead.temperature === 'Hot'
                              ? 'bg-amber-100 text-amber-900 border-amber-300'
                              : lead.temperature === 'Warm'
                              ? 'bg-blue-50 text-[#003DA5] border-blue-200'
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}
                        >
                          {lead.name.slice(0, 2).toUpperCase()}
                          {leadEsc.active && (
                            <span
                              className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#FFD200] border border-white flex items-center justify-center"
                              title={leadEsc.reasons.join(' • ')}
                            >
                              <Zap className="w-2 h-2 text-amber-800 fill-amber-800" />
                            </span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="font-extrabold text-slate-900 group-hover:text-[#003DA5] flex items-center gap-1.5 truncate">
                            <span>{lead.name}</span>
                          </div>
                          <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                            <span>{lead.city}</span>
                            <span>•</span>
                            <span className="text-[#003DA5] font-extrabold bg-[#003DA5]/10 px-1.5 py-0.2 rounded border border-[#003DA5]/20">
                              {lead.sofia.categoriaAfiliado && lead.sofia.categoriaAfiliado !== 'Desconocida'
                                ? `Cat ${lead.sofia.categoriaAfiliado}`
                                : lead.afiliacionCategoria || 'Afiliado Colsubsidio'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Score & Temperature */}
                    <td className="py-3 px-3.5">
                      <div className="flex items-center gap-1.5">
                        <span className="font-black text-slate-900 text-xs">
                          {lead.scores.total}/100
                        </span>
                        {lead.temperature === 'Hot' ? (
                          <span className="text-[10px] bg-amber-100 text-amber-900 font-black px-1.5 py-0.2 rounded border border-amber-300">
                            🔥 Hot
                          </span>
                        ) : lead.temperature === 'Warm' ? (
                          <span className="text-[10px] bg-blue-50 text-[#003DA5] font-bold px-1.5 py-0.2 rounded border border-blue-200">
                            Warm
                          </span>
                        ) : (
                          <span className="text-[10px] bg-slate-100 text-slate-600 font-medium px-1.5 py-0.2 rounded">
                            Cold
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Financial Previability */}
                    <td className="py-3 px-3.5">
                      <span
                        className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border inline-block ${
                          leadFin.status === 'potencialmente_viable'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                            : leadFin.status === 'pendiente_validacion'
                            ? 'bg-amber-50 text-amber-900 border-amber-200'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        {leadFin.label}
                      </span>
                    </td>

                    {/* Purchase Intent */}
                    <td className="py-3 px-3.5">
                      <div className="flex items-center gap-1">
                        <span
                          className={`font-bold ${
                            leadInt.status === 'alta'
                              ? 'text-emerald-700 font-extrabold'
                              : leadInt.status === 'media'
                              ? 'text-blue-700'
                              : 'text-slate-600'
                          }`}
                        >
                          {leadInt.label}
                        </span>
                        {lead.sofia.timeline && (
                          <span className="text-[10px] text-slate-500 font-medium">({lead.sofia.timeline})</span>
                        )}
                      </div>
                    </td>

                    {/* Recommended Project */}
                    <td className="py-3 px-3.5">
                      <p className="font-bold text-slate-900 truncate max-w-[150px]">
                        {lead.sofia.proyectoInteresOriginal || recProj?.name || lead.recommendedProjectId}
                      </p>
                      {lead.sofia.proyectoRecomendado.length > 0 && (
                        <p className="text-[10px] text-[#003DA5] font-semibold truncate max-w-[150px]">
                          Sugerido: {lead.sofia.proyectoRecomendado[0]}
                        </p>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-3.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {/* WhatsApp Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenWhatsAppModal(lead);
                          }}
                          className="p-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-lg transition-all border border-[#25D366]/30 cursor-pointer flex items-center justify-center hover:scale-105"
                          title="Enviar WhatsApp"
                        >
                          <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                        </button>

                        {/* Call Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(`Iniciando llamada comercial a ${lead.name} (${lead.phone})`);
                          }}
                          className="p-1.5 bg-[#003DA5]/10 hover:bg-[#003DA5]/20 text-[#003DA5] rounded-lg transition-all border border-[#003DA5]/20 cursor-pointer flex items-center justify-center hover:scale-105"
                          title="Llamar directamente"
                        >
                          <Phone className="w-4 h-4 text-[#003DA5]" />
                        </button>

                        {/* Score 360 Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectLeadForScore360(lead);
                          }}
                          className="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold px-2.5 py-1 rounded-lg border border-slate-200 transition-all hover:scale-105"
                          title="Ver perfil completo 360"
                        >
                          360
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-1 px-1">
          <span>
            Mostrando <strong className="text-slate-900 font-black">{sortedLeads.length}</strong> leads disponibles en la base de datos
          </span>
          <span className="text-[11px] text-[#003DA5] font-bold">
            Desplaza la página hacia abajo para explorar la información detallada
          </span>
        </div>
      </div>

      {/* 3. DETAILED SELECTED LEAD INTELLIGENCE PANEL (COLSUBSIDIO EXECUTIVE DARK SYSTEM) */}
      <div className="bg-[#0B132B] text-white rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6 relative overflow-hidden">
        {/* Glow accent effect */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#003DA5]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFD200]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Panel Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 relative z-10">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#003DA5] text-[#FFD200] font-black flex items-center justify-center text-base border-2 border-[#FFD200]/60 shadow-md">
              {activeSelectedLead.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white font-sans tracking-tight">{activeSelectedLead.name}</h3>
                {escalation.active && (
                  <span className="text-[10px] bg-[#FFD200]/20 text-[#FFD200] font-black px-2.5 py-0.5 rounded-full border border-[#FFD200]/40 flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-[#FFD200]" />
                    <span>Auto-Resaltado por Sofía</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                {activeSelectedLead.city} • {activeSelectedLead.channel} • Actualizado: {activeSelectedLead.lastInteraction}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenWhatsAppModal(activeSelectedLead)}
              className="bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 px-3.5 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all shadow-sm hover:scale-105 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-slate-950" />
              <span>Abrir WhatsApp</span>
            </button>
            <button
              onClick={() => onSelectLeadForScore360(activeSelectedLead)}
              className="bg-[#003DA5] hover:bg-blue-700 text-white px-3.5 py-2 rounded-xl text-xs font-black transition-all shadow-sm hover:scale-105 cursor-pointer flex items-center gap-1.5 border border-blue-400/30"
            >
              <span>Ver Score 360</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 CARDS GRID (Previabilidad, Intención, Proyectos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
          {/* Card A: Previabilidad Financiera */}
          <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4.5 space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">
                Previabilidad Financiera
              </h4>
              <span
                className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${
                  financial.status === 'potencialmente_viable'
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                    : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                }`}
              >
                {financial.label}
              </span>
            </div>

            {/* Positive Signals */}
            <div className="space-y-1.5 text-xs">
              <p className="text-[10px] text-slate-400 uppercase font-extrabold tracking-wider">Señales Positivas:</p>
              {financial.positiveSignals.length > 0 ? (
                financial.positiveSignals.map((sig, i) => (
                  <div key={i} className="flex items-start gap-2 text-emerald-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{sig}</span>
                  </div>
                ))
              ) : (
                <p className="text-slate-400 italic">Sin señales financieras confirmadas</p>
              )}
            </div>

            {/* Pending Alerts */}
            <div className="space-y-1.5 text-xs pt-2 border-t border-slate-700/60">
              <p className="text-[10px] text-slate-400 uppercase font-extrabold tracking-wider">Pendientes por Validar:</p>
              {financial.pendingAlerts.map((alt, i) => (
                <div key={i} className="flex items-start gap-2 text-amber-200/90 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{alt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card B: Intención de Compra */}
          <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4.5 space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">
                Intención de Compra
              </h4>
              <span
                className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${
                  intent.status === 'alta'
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                    : 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                }`}
              >
                Intención {intent.label}
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Horizonte temporal:</p>
                <p className="text-white font-extrabold">{activeSelectedLead.sofia.timeline || 'No informado'}</p>
              </div>

              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Motivación principal:</p>
                <p className="text-slate-200 font-medium">{activeSelectedLead.sofia.motivacion || 'Sin motivación registrada'}</p>
              </div>

              <div className="pt-2 border-t border-slate-700/60">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Perfil Estadístico & Desistimiento:</p>
                <p className="text-slate-200 font-semibold">{activeSelectedLead.sofia.perfilEstadistico}</p>
                {activeSelectedLead.sofia.perfilEstadisticoRiesgoDesistimiento !== null && (
                  <p
                    className="text-[11px] text-amber-300 font-bold mt-0.5"
                    title="Estimación histórica basada en el perfil estadístico del lead"
                  >
                    Riesgo histórico desistimiento: {activeSelectedLead.sofia.perfilEstadisticoRiesgoDesistimiento}%
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Card C: Proyecto de Interés y Recomendación */}
          <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4.5 space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">
                Proyectos & Recomendación
              </h4>
              <Building2 className="w-4 h-4 text-[#FFD200]" />
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Interés Original en Pauta:</p>
                <p className="text-white font-black">{activeSelectedLead.sofia.proyectoInteresOriginal || 'No especificado'}</p>
              </div>

              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Recomendado por Sofía:</p>
                {activeSelectedLead.sofia.proyectoRecomendado.length > 0 ? (
                  <div className="space-y-1 mt-0.5">
                    <span className="inline-block bg-[#003DA5]/40 text-blue-200 font-extrabold px-2.5 py-0.5 rounded-full border border-[#003DA5]/60">
                      1º {activeSelectedLead.sofia.proyectoRecomendado[0]}
                    </span>
                    {activeSelectedLead.sofia.proyectoRecomendado[1] && (
                      <span className="block text-[11px] text-slate-400 font-medium">
                        2º {activeSelectedLead.sofia.proyectoRecomendado[1]}
                      </span>
                    )}
                  </div>
                ) : (
                  <p className="text-slate-400 italic">Sin recomendación específica aún</p>
                )}
              </div>

              {/* Brochure Link */}
              {activeSelectedLead.sofia.brochureEnviado && (
                <div className="pt-2 border-t border-slate-700/60">
                  <a
                    href={activeSelectedLead.sofia.brochureEnviado}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-extrabold underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Ver Brochure Digital Enviado</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PRÓXIMA MEJOR ACCIÓN & DATOS CRÍTICOS PENDIENTES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 relative z-10">
          {/* Próxima mejor acción (2 cols) */}
          <div className="md:col-span-2 bg-[#003DA5]/30 border border-[#003DA5]/60 rounded-2xl p-4.5 space-y-2.5 shadow-md">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4.5 h-4.5 text-[#FFD200]" />
              <h4 className="text-xs font-black text-white uppercase tracking-wider">
                Próxima Mejor Acción Sugerida
              </h4>
            </div>
            <p className="text-sm font-black text-[#FFD200]">{nextAction.action}</p>
            <p className="text-xs text-slate-200 font-medium">{nextAction.objective}</p>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => onOpenWhatsAppModal(activeSelectedLead)}
                className="bg-[#003DA5] hover:bg-blue-600 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-xl transition-all cursor-pointer shadow-sm hover:scale-105 border border-blue-400/40"
              >
                {nextAction.followUpAction}
              </button>
            </div>
          </div>

          {/* Datos críticos pendientes (1 col) */}
          <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4.5 space-y-2 shadow-md">
            <div className="flex items-center gap-1.5 text-amber-400">
              <HelpCircle className="w-4 h-4 shrink-0" />
              <h4 className="text-xs font-extrabold uppercase tracking-wider">Datos por Confirmar</h4>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300 font-medium">
              {pendingData.length > 0 ? (
                pendingData.map((d, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))
              ) : (
                <li className="text-emerald-400 font-bold">¡Perfil conversacional completo!</li>
              )}
            </ul>
          </div>
        </div>

        {/* BRIEF DEL ASESOR (SOFÍA) */}
        {activeSelectedLead.sofia.briefAsesor && (
          <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4.5 space-y-2 relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <h4 className="text-xs font-black text-white uppercase tracking-wider">
                  Brief Comercial Generado por Sofía (WhatsApp)
                </h4>
              </div>
              <button
                onClick={() => setBriefExpanded(!briefExpanded)}
                className="text-[11px] text-blue-400 hover:text-blue-300 font-bold underline cursor-pointer"
              >
                {briefExpanded ? 'Ver menos' : 'Ver completo'}
              </button>
            </div>
            <p
              className={`text-xs text-slate-200 leading-relaxed italic ${
                !briefExpanded ? 'line-clamp-2' : ''
              }`}
            >
              "{activeSelectedLead.sofia.briefAsesor}"
            </p>
          </div>
        )}
      </div>

      {/* 4. TAREAS COMERCIALES DEL DÍA & ALERTA DE INVENTARIOS */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <CheckSquare className="w-4 h-4 text-[#003DA5]" />
            <h2 className="text-sm font-extrabold text-slate-900 font-display">Operación Comercial del Día</h2>
          </div>
          <span className="text-[10px] font-black bg-[#FFD200] text-[#003DA5] px-2.5 py-0.5 rounded-full shadow-2xs">
            Hoy
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-1">
          {/* Tasks List */}
          <div className="lg:col-span-2 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-slate-800">Tareas pendientes asignadas</p>
              <span className="text-[10px] text-slate-500 font-medium">Clic para marcar como completada</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => onToggleTaskComplete(task.id)}
                  className={`p-3 rounded-xl border text-xs transition-all cursor-pointer flex items-start gap-2.5 ${
                    task.completed
                      ? 'bg-slate-50 border-slate-200 opacity-60'
                      : 'bg-white border-slate-200 hover:border-[#003DA5] shadow-2xs hover:shadow-xs'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => {}}
                    className="mt-0.5 rounded border-slate-300 text-[#003DA5] focus:ring-[#003DA5] cursor-pointer"
                  />
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-bold truncate ${
                        task.completed ? 'line-through text-slate-400' : 'text-slate-900'
                      }`}
                    >
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-1">
                      <span className="font-extrabold text-[#003DA5] truncate">{task.leadName}</span>
                      <span>•</span>
                      <span className="shrink-0">{task.dueTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Push Alert Box */}
          <div className="p-4 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/60 rounded-2xl space-y-2.5 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-2 text-amber-950 font-black text-xs mb-1">
                <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Alerta de Inventario Vivienda</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                <strong>Altos de Mosquera</strong> tiene 85 unidades VIS disponibles. Se activó bonificación comercial para cierres este mes.
              </p>
            </div>
            <button
              onClick={() => onNavigateToView('proyectos')}
              className="text-xs text-[#003DA5] font-extrabold hover:underline flex items-center gap-1 cursor-pointer pt-2"
            >
              <span>Ver catálogo de proyectos</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
