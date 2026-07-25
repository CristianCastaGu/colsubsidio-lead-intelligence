import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { animate, motion, AnimatePresence } from 'motion/react';
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
  User,
  ShieldCheck,
  Target,
  Info
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

// Signature moment for this dashboard: the KPI counts (the thing the advisor actually
// looks at first each morning) animate into being on load instead of just appearing.
function useCountUp(target: number, duration = 0.9): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [target, duration]);
  return value;
}

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

  // Default selected lead for the detail panel modal (null by default)
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);

  const activeSelectedLead = useMemo(() => {
    if (!selectedLeadId) return null;
    return leads.find((l) => l.id === selectedLeadId) || null;
  }, [selectedLeadId, leads]);

  // Operational metrics
  const escalatedLeadsCount = leads.filter((l) => getLeadEscalation(l).active).length;
  const highIntentLeadsCount = leads.filter((l) => getPurchaseIntent(l).status === 'alta').length;
  const profiledBySofiaCount = leads.filter((l) => isSofiaProfileComplete(l)).length;
  const pendingTasksCount = tasks.filter((t) => !t.completed).length;

  const profiledCountUp = useCountUp(profiledBySofiaCount);
  const escalatedCountUp = useCountUp(escalatedLeadsCount);
  const highIntentCountUp = useCountUp(highIntentLeadsCount);
  const pendingTasksCountUp = useCountUp(pendingTasksCount);

  // Selected lead intelligence calculations
  const escalation = activeSelectedLead ? getLeadEscalation(activeSelectedLead) : null;
  const financial = activeSelectedLead ? getFinancialPreviability(activeSelectedLead) : null;
  const intent = activeSelectedLead ? getPurchaseIntent(activeSelectedLead) : null;
  const nextAction = activeSelectedLead ? getNextBestAction(activeSelectedLead) : null;
  const pendingData = activeSelectedLead ? getPendingData(activeSelectedLead) : null;

  const [briefExpanded, setBriefExpanded] = useState(false);

  return (
    <div className="space-y-6 animate-fadeIn pb-8">
      {/* 1. EXECUTIVE METRICS GRID (COLSUBSIDIO BRANDED CARDS) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {/* Metric 1: Perfilados por Sofía */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0, ease: 'easeOut' }}
          className="relative bg-white border border-slate-200/80 hover:border-[#003DA5]/40 rounded-2xl p-4 pt-5 shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-all space-y-1.5 group overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#003DA5]" />
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold tracking-wide uppercase text-slate-500">Perfilados Sofía</p>
            <div className="w-8 h-8 rounded-xl bg-[#003DA5]/10 text-[#003DA5] flex items-center justify-center group-hover:scale-110 transition-transform">
              <UserCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between pt-1">
            <span className="font-display text-3xl font-black text-slate-900 tabular-nums">{profiledCountUp}</span>
            <span className="text-[10px] text-[#003DA5] font-bold bg-[#003DA5]/10 px-2 py-0.5 rounded-full border border-[#003DA5]/20">
              WhatsApp En Vivo
            </span>
          </div>
        </motion.div>

        {/* Metric 2: Requieren Atención (Colsubsidio Yellow Accent) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08, ease: 'easeOut' }}
          className="relative bg-gradient-to-br from-[#FFD200]/20 via-[#FFD200]/10 to-amber-500/5 border border-[#FFD200]/70 hover:border-[#FFD200] rounded-2xl p-4 pt-5 shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-all space-y-1.5 group overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFD200]" />
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-extrabold tracking-wide uppercase text-amber-950">Requieren Atención</p>
            <div className="w-8 h-8 rounded-xl bg-[#FFD200] text-[#003DA5] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
              {escalatedLeadsCount > 0 ? (
                <motion.span
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center justify-center"
                >
                  <Zap className="w-4 h-4 fill-[#003DA5]" />
                </motion.span>
              ) : (
                <Zap className="w-4 h-4 fill-[#003DA5]" />
              )}
            </div>
          </div>
          <div className="flex items-baseline justify-between pt-1">
            <span className="font-display text-3xl font-black text-amber-950 tabular-nums">{escalatedCountUp}</span>
            <span className="text-[10px] text-amber-900 font-extrabold bg-[#FFD200] px-2 py-0.5 rounded-full shadow-2xs">
              Atención Inmediata
            </span>
          </div>
        </motion.div>

        {/* Metric 3: Intención Alta */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16, ease: 'easeOut' }}
          className="relative bg-white border border-slate-200/80 hover:border-emerald-300 rounded-2xl p-4 pt-5 shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-all space-y-1.5 group overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold tracking-wide uppercase text-slate-500">Intención Alta</p>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between pt-1">
            <span className="font-display text-3xl font-black text-slate-900 tabular-nums">{highIntentCountUp}</span>
            <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              0-3 Meses / Hot
            </span>
          </div>
        </motion.div>

        {/* Metric 4: Tareas Pendientes */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.24, ease: 'easeOut' }}
          className="relative bg-white border border-slate-200/80 hover:border-[#003DA5]/40 rounded-2xl p-4 pt-5 shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-all space-y-1.5 group overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-400" />
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold tracking-wide uppercase text-[#003DA5]">Tareas Pendientes</p>
            <div className="w-8 h-8 rounded-xl bg-[#003DA5]/10 text-[#003DA5] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between pt-1">
            <span className="font-display text-3xl font-black text-[#003DA5] tabular-nums">{pendingTasksCountUp}</span>
            <span className="text-[10px] text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded-full">
              de {tasks.length} asignadas
            </span>
          </div>
        </motion.div>
      </div>

      {/* 2 + 4. TWO-COLUMN WORKSPACE: leads table (wide) alongside the day's operation (sidebar) */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
      <div className="xl:col-span-2 space-y-4">
      <div className="px-1">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#003DA5] tracking-tight font-display">
          Leads que Requieren Atención Comercial
        </h2>
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

        {/* Table Container with Perfect Rounded Corners & Sticky Header */}
        <div className="border border-slate-200/80 rounded-xl shadow-2xs overflow-hidden">
          <div className="overflow-x-auto max-h-[460px] overflow-y-auto custom-scrollbar relative">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="sticky top-0 z-10 bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[10px] font-extrabold shadow-2xs">
                <tr>
                  <th className="py-3 px-3.5 bg-slate-100">Lead</th>
                  <th className="py-3 px-3.5 bg-slate-100">Afiliación</th>
                  <th className="py-3 px-3.5 bg-slate-100">Score 360</th>
                  <th className="py-3 px-3.5 bg-slate-100">Previabilidad Financiera</th>
                  <th className="py-3 px-3.5 bg-slate-100">Intención</th>
                  <th className="py-3 px-3.5 bg-slate-100">Proyecto Interés / Sugerido</th>
                  <th className="py-3 px-3.5 text-right bg-slate-100">Acciones</th>
                </tr>
              </thead>
            <tbody className="divide-y divide-slate-100 font-medium bg-white">
              {sortedLeads.map((lead) => {
                const leadEsc = getLeadEscalation(lead);
                const leadFin = getFinancialPreviability(lead);
                const leadInt = getPurchaseIntent(lead);
                const isSelected = activeSelectedLead?.id === lead.id;
                const recProj = projects.find((p) => p.id === lead.recommendedProjectId);
                const categoriaText = lead.sofia.categoriaAfiliado && lead.sofia.categoriaAfiliado !== 'Desconocida'
                  ? `Cat ${lead.sofia.categoriaAfiliado}`
                  : lead.afiliacionCategoria || 'Afiliado Colsubsidio';

                return (
                  <tr
                    key={lead.id}
                    onClick={() => setSelectedLeadId(lead.id)}
                    className={`transition-all cursor-pointer group border-l-4 ${
                      leadEsc.active
                        ? 'bg-[#FFD200]/15 hover:bg-[#FFD200]/25 border-l-[#FFD200]'
                        : isSelected
                        ? 'bg-[#003DA5]/5 hover:bg-[#003DA5]/10 border-l-[#003DA5]'
                        : 'border-l-transparent hover:border-l-[#003DA5]/40 hover:bg-slate-50 hover:shadow-[inset_0_0_0_1px_rgba(0,61,165,0.08)]'
                    }`}
                  >
                    {/* Lead Name & City */}
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
                          <div className="font-extrabold text-slate-900 group-hover:text-[#003DA5] truncate">
                            {lead.name}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            {lead.city}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Dedicated Categoría/Afiliación Column */}
                    <td className="py-3 px-3.5">
                      <span className="text-[10px] text-[#003DA5] font-extrabold bg-[#003DA5]/10 px-2 py-0.5 rounded-md border border-[#003DA5]/20 inline-block whitespace-nowrap">
                        {categoriaText}
                      </span>
                    </td>

                    {/* Score 360 */}
                    <td className="py-3 px-3.5">
                      <span className="font-black text-slate-900 text-xs">
                        {lead.scores.total}/100
                      </span>
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

                        {/* Hover affordance: hints the whole row opens a detail bubble on click */}
                        <ChevronRight className="w-4 h-4 text-[#003DA5]/60 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

        {/* Footer Counter */}
        <div className="text-xs text-slate-500 font-semibold pt-1 px-1">
          Mostrando {sortedLeads.length} leads
        </div>
      </div>
      </div>

      {/* 3. FLOATING BUBBLE MODAL: DETAILED LEAD INTELLIGENCE — no backdrop dimming,
          the page stays fully visible/normal behind it; click outside the card to close.
          Rendered via a portal straight into <body>: this view's own wrapper div has the
          animate-fadeIn entrance (a transform-based CSS animation), and ANY ancestor with
          a transform becomes the containing block for position:fixed descendants — so
          without the portal this modal would be "fixed" to that div, not the real
          viewport, which is what caused the mispositioning and the broken outside-click. */}
      {createPortal(
        <AnimatePresence>
        {activeSelectedLead && escalation && financial && intent && nextAction && pendingData && (
          <div
            className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6"
            onClick={() => setSelectedLeadId(null)}
          >
            {/* Floating Bubble Card — top-aligned with margin instead of flex-centered,
                so tall content is fully reachable by scroll instead of getting clipped. */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-white text-slate-900 rounded-3xl border border-slate-200 shadow-2xl max-w-4xl w-full mx-auto my-6 sm:my-10 p-6 sm:p-8 overflow-hidden space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedLeadId(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center transition-all cursor-pointer hover:scale-110 z-20"
                title="Cerrar ventana flotante"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Panel Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 pr-10">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 font-black flex items-center justify-center text-base shrink-0">
                    {activeSelectedLead.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-black text-slate-900 font-sans tracking-tight">{activeSelectedLead.name}</h3>
                      {escalation.active && (
                        <span className="text-[10px] bg-amber-50 text-amber-800 font-black px-2.5 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                          <Zap className="w-3 h-3 fill-amber-800" />
                          <span>Auto-Resaltado por Sofía</span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {activeSelectedLead.city} • {activeSelectedLead.channel} • Actualizado: {activeSelectedLead.lastInteraction}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onOpenWhatsAppModal(activeSelectedLead);
                      setSelectedLeadId(null);
                    }}
                    className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-3.5 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer border border-emerald-200"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-emerald-800" />
                    <span>Abrir WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      onSelectLeadForScore360(activeSelectedLead);
                      setSelectedLeadId(null);
                    }}
                    className="bg-white hover:bg-blue-50 text-[#003DA5] px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 border border-[#003DA5]/30"
                  >
                    <span>Ver Score 360</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 3 CARDS GRID (Previabilidad, Intención, Proyectos) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Card A: Previabilidad Financiera */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4.5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                        Previabilidad Financiera
                      </h4>
                    </div>
                    <span
                      className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border shrink-0 ${
                        financial.status === 'potencialmente_viable'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-amber-50 text-amber-800 border-amber-200'
                      }`}
                    >
                      {financial.label}
                    </span>
                  </div>

                  {/* Positive Signals */}
                  <div className="space-y-1.5 text-xs">
                    <p className="text-[11px] text-emerald-700 font-extrabold">Señales Positivas</p>
                    {financial.positiveSignals.length > 0 ? (
                      financial.positiveSignals.map((sig, i) => (
                        <div key={i} className="flex items-start gap-2 text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{sig}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-slate-400 italic">Sin señales financieras confirmadas</p>
                    )}
                  </div>

                  {/* Pending Alerts */}
                  <div className="space-y-1.5 text-xs pt-2 border-t border-slate-200">
                    <p className="text-[11px] text-amber-700 font-extrabold">Pendientes por Validar</p>
                    {financial.pendingAlerts.map((alt, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-700 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{alt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card B: Intención de Compra */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4.5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#003DA5] flex items-center justify-center shrink-0">
                        <Target className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                        Intención de Compra
                      </h4>
                    </div>
                    <span
                      className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border shrink-0 ${
                        intent.status === 'alta'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-blue-50 text-[#003DA5] border-blue-200'
                      }`}
                    >
                      Intención {intent.label}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Horizonte temporal</p>
                      <p className="text-slate-900 font-extrabold">{activeSelectedLead.sofia.timeline || 'No informado'}</p>
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Motivación principal</p>
                      <p className="text-slate-700 font-medium">{activeSelectedLead.sofia.motivacion || 'Sin motivación registrada'}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Perfil Estadístico & Desistimiento</p>
                      <p className="text-slate-700 font-semibold">{activeSelectedLead.sofia.perfilEstadistico}</p>
                      {activeSelectedLead.sofia.perfilEstadisticoRiesgoDesistimiento !== null && (
                        <p
                          className="text-[11px] text-amber-700 font-bold mt-0.5"
                          title="Estimación histórica basada en el perfil estadístico del lead"
                        >
                          Riesgo histórico desistimiento: {activeSelectedLead.sofia.perfilEstadisticoRiesgoDesistimiento}%
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card C: Proyecto de Interés y Recomendación */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4.5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#003DA5] flex items-center justify-center shrink-0">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                        Proyectos & Recomendación
                      </h4>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Interés Original en Pauta</p>
                      <p className="text-slate-900 font-black">{activeSelectedLead.sofia.proyectoInteresOriginal || 'No especificado'}</p>
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Recomendado por Sofía</p>
                      {activeSelectedLead.sofia.proyectoRecomendado.length > 0 ? (
                        <div className="space-y-1 mt-0.5">
                          <span className="inline-block bg-blue-100 text-[#003DA5] font-extrabold px-2.5 py-0.5 rounded-full">
                            1º {activeSelectedLead.sofia.proyectoRecomendado[0]}
                          </span>
                          {activeSelectedLead.sofia.proyectoRecomendado[1] && (
                            <span className="block text-[11px] text-slate-500 font-medium">
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
                      <div className="pt-2 border-t border-slate-200">
                        <a
                          href={activeSelectedLead.sofia.brochureEnviado}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#003DA5] hover:text-blue-700 font-extrabold underline"
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {/* Próxima mejor acción (2 cols) */}
                <div className="md:col-span-2 relative bg-blue-50 border border-blue-100 rounded-2xl p-4.5 space-y-2.5 overflow-hidden">
                  <WhatsAppIcon className="absolute -bottom-4 -right-4 w-24 h-24 text-[#003DA5]/10 fill-current pointer-events-none" />
                  <div className="relative flex items-center gap-2">
                    <Sparkles className="w-4.5 h-4.5 text-amber-500" />
                    <h4 className="text-xs font-black text-[#003DA5] uppercase tracking-wider">
                      Próxima Mejor Acción Sugerida
                    </h4>
                  </div>
                  <p className="relative text-sm font-black text-[#003DA5]">{nextAction.action}</p>
                  <p className="relative text-xs text-slate-600 font-medium">{nextAction.objective}</p>
                  <div className="relative flex items-center gap-2 pt-1">
                    <button
                      onClick={() => {
                        onOpenWhatsAppModal(activeSelectedLead);
                        setSelectedLeadId(null);
                      }}
                      className="bg-[#003DA5] hover:bg-blue-700 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-xl transition-all cursor-pointer shadow-sm hover:scale-105"
                    >
                      {nextAction.followUpAction}
                    </button>
                  </div>
                </div>

                {/* Datos críticos pendientes (1 col) */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4.5 space-y-2">
                  <div className="flex items-center gap-1.5 text-amber-700">
                    <HelpCircle className="w-4 h-4 shrink-0" />
                    <h4 className="text-xs font-extrabold uppercase tracking-wider">Datos por Confirmar</h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {pendingData.length > 0 ? (
                      pendingData.map((d, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-emerald-700 font-bold">¡Perfil conversacional completo!</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* BRIEF DEL ASESOR (SOFÍA) */}
              {activeSelectedLead.sofia.briefAsesor && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-emerald-600" />
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                        Brief Comercial Generado por Sofía (WhatsApp)
                      </h4>
                    </div>
                    <button
                      onClick={() => setBriefExpanded(!briefExpanded)}
                      className="text-[11px] text-[#003DA5] hover:text-blue-700 font-bold underline cursor-pointer"
                    >
                      {briefExpanded ? 'Ver menos' : 'Ver completo'}
                    </button>
                  </div>
                  <p
                    className={`text-xs text-slate-600 leading-relaxed italic ${
                      !briefExpanded ? 'line-clamp-2' : ''
                    }`}
                  >
                    "{activeSelectedLead.sofia.briefAsesor}"
                  </p>
                </div>
              )}

              {/* Helper Footer Note */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 shrink-0" />
                  La información se actualiza automáticamente con cada interacción o cambio relevante.
                </span>
                <span>
                  ¿Necesitas ayuda?{' '}
                  <button
                    type="button"
                    onClick={() => onNavigateToView('configuracion')}
                    className="text-[#003DA5] font-bold underline hover:text-blue-700 cursor-pointer"
                  >
                    Ver guía rápida
                  </button>
                </span>
              </div>
            </motion.div>
          </div>
        )}
        </AnimatePresence>,
        document.body
      )}

      {/* 4. TAREAS COMERCIALES DEL DÍA & ALERTA DE INVENTARIOS — right-hand sidebar
          alongside the leads table, matching the reference two-column workspace layout */}
      <div className="xl:col-span-1 space-y-4">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <CheckSquare className="w-4 h-4 text-[#003DA5]" />
              <h2 className="text-sm font-extrabold text-slate-900 font-display">Operación Comercial del Día</h2>
            </div>
            <span className="text-[10px] font-black bg-[#FFD200] text-[#003DA5] px-2.5 py-0.5 rounded-full shadow-2xs">
              Hoy
            </span>
          </div>

          <div className="flex items-center justify-between pt-1">
            <p className="text-xs font-bold text-slate-800">Tareas pendientes asignadas</p>
            <span className="text-[10px] text-slate-500 font-medium">Clic para completar</span>
          </div>

          <div className="space-y-2">
            {tasks.slice(0, 6).map((task) => (
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

          {tasks.length > 6 && (
            <button
              onClick={() => onNavigateToView('inicio')}
              className="text-xs text-[#003DA5] font-extrabold hover:underline flex items-center gap-1 cursor-pointer pt-1"
            >
              <span>Ver todas las tareas ({tasks.length})</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Inventory Push Alert Box — with modern architectural housing towers illustration */}
        <div className="relative p-4 bg-gradient-to-br from-amber-50/90 via-amber-100/50 to-orange-50/60 border border-amber-200/80 rounded-2xl space-y-2.5 overflow-hidden shadow-2xs">
          <img
            src="/housing_buildings.jpg"
            alt="Ilustración Proyectos de Vivienda"
            className="absolute bottom-0 right-0 w-36 h-32 object-contain object-bottom pointer-events-none select-none mix-blend-multiply"
          />

          <div className="relative z-10 max-w-[70%]">
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
            className="relative z-10 text-xs text-[#003DA5] font-extrabold hover:underline flex items-center gap-1 cursor-pointer pt-1"
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
