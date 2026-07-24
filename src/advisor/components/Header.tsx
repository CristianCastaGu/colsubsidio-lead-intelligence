import React, { useState } from 'react';
import { Search, Bell, Plus, X, User, Building, CheckCircle2 } from 'lucide-react';
import { Lead, HousingProject, ViewType } from '../types';

interface HeaderProps {
  onOpenNewLeadModal: () => void;
  advisorName: string;
  setAdvisorName: (name: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  leads?: Lead[];
  projects?: HousingProject[];
  onSelectLeadForScore360?: (lead: Lead) => void;
  onNavigateToView?: (view: ViewType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNewLeadModal,
  advisorName,
  setAdvisorName,
  searchQuery,
  setSearchQuery,
  leads = [],
  projects = [],
  onSelectLeadForScore360,
  onNavigateToView,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Live filter for search input
  const trimmedQuery = searchQuery.trim().toLowerCase();
  const matchingLeads = trimmedQuery
    ? leads.filter(
        (l) =>
          l.name.toLowerCase().includes(trimmedQuery) ||
          l.phone.includes(trimmedQuery) ||
          l.email.toLowerCase().includes(trimmedQuery) ||
          l.city.toLowerCase().includes(trimmedQuery) ||
          l.housingInterest.toLowerCase().includes(trimmedQuery)
      ).slice(0, 5)
    : [];

  const matchingProjects = trimmedQuery
    ? projects.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmedQuery) ||
          p.zone.toLowerCase().includes(trimmedQuery) ||
          p.type.toLowerCase().includes(trimmedQuery)
      ).slice(0, 3)
    : [];

  const hasSearchMatches = matchingLeads.length > 0 || matchingProjects.length > 0;

  const handleSelectLead = (lead: Lead) => {
    if (onSelectLeadForScore360) {
      onSelectLeadForScore360(lead);
    }
    setSearchQuery('');
    setIsSearchFocused(false);
  };

  const handleSelectProject = () => {
    if (onNavigateToView) {
      onNavigateToView('proyectos');
    }
    setSearchQuery('');
    setIsSearchFocused(false);
  };

  return (
    <header className="shrink-0 bg-white border-b border-slate-200 shadow-xs z-30 relative">
      {/* 1. Fine institutional blue top border accent (#003DA5) */}
      <div className="h-1 bg-[#003DA5] w-full" />

      {/* Main Header Container */}
      <div className="px-4 lg:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Left: Colsubsidio Branding */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex items-center gap-2.5">
            {/* Colsubsidio Diamond Logo */}
            <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
              <div className="absolute w-6 h-6 bg-[#FFD200] transform rotate-45 rounded-sm"></div>
              <div className="absolute w-3.5 h-3.5 bg-[#003DA5] transform rotate-45 translate-x-1.5 translate-y-1.5 rounded-sm"></div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-extrabold tracking-tight text-[#003DA5] leading-none">
                Colsubsidio
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mt-0.5">
                Vivienda · Lead Intelligence
              </span>
            </div>
          </div>
        </div>

        {/* Center: Global Interactive Search Bar */}
        <div className="flex-1 max-w-lg relative">
          <div className="relative flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              placeholder="Buscar lead por nombre, teléfono, ciudad o proyecto..."
              className="w-full pl-9 pr-8 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 focus:border-[#003DA5] focus:bg-white transition-all font-medium"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 p-0.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200/60 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Interactive Search Results Dropdown Popover */}
          {trimmedQuery && isSearchFocused && (
            <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-2xl z-50 overflow-hidden max-h-96 overflow-y-auto divide-y divide-slate-100 text-xs">
              {/* Leads Matches */}
              {matchingLeads.length > 0 && (
                <div className="p-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#003DA5] px-2 py-1 flex items-center gap-1.5">
                    <User className="w-3 h-3" />
                    <span>Leads Encontrados ({matchingLeads.length})</span>
                  </div>
                  {matchingLeads.map((lead) => (
                    <button
                      key={lead.id}
                      onMouseDown={() => handleSelectLead(lead)}
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

              {/* Projects Matches */}
              {matchingProjects.length > 0 && (
                <div className="p-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-2 py-1 flex items-center gap-1.5">
                    <Building className="w-3 h-3 text-slate-600" />
                    <span>Proyectos Coincidentes</span>
                  </div>
                  {matchingProjects.map((proj) => (
                    <button
                      key={proj.id}
                      onMouseDown={handleSelectProject}
                      className="w-full text-left p-2 hover:bg-slate-50 rounded-lg flex items-center justify-between gap-2 group transition-colors cursor-pointer"
                    >
                      <div className="truncate">
                        <p className="font-bold text-slate-900 group-hover:text-[#003DA5] truncate">
                          {proj.name}
                        </p>
                        <p className="text-[11px] text-slate-500 truncate">
                          {proj.zone} • {proj.location}
                        </p>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {proj.type}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* No Results Fallback */}
              {!hasSearchMatches && (
                <div className="p-4 text-center text-slate-500 text-xs">
                  No se encontraron leads ni proyectos para <span className="font-bold text-slate-800">"{searchQuery}"</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: Actions, Notifications & Advisor Profile */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Action Button - Primary New Lead */}
          <button
            type="button"
            onClick={onOpenNewLeadModal}
            aria-label="Registrar Nuevo Lead"
            className="bg-[#003DA5] hover:bg-[#002B75] active:bg-[#001F54] text-white px-3.5 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 shadow-sm hover:shadow transition-all cursor-pointer transform active:scale-95"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Nuevo Lead</span>
          </button>

          {/* Notifications Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-slate-600 hover:text-[#003DA5] hover:bg-slate-100 rounded-lg relative transition-all cursor-pointer"
              title="Notificaciones"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#FFD200] ring-2 ring-white"></span>
            </button>

            {/* Notifications Popover */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-xl shadow-xl z-50 p-3 text-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                  <span className="font-bold text-slate-800">Alertas Comerciales</span>
                  <span className="bg-[#003DA5]/10 text-[#003DA5] text-[10px] font-bold px-2 py-0.5 rounded-full">
                    3 Nuevas
                  </span>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  <div className="p-2 bg-amber-50/80 border border-amber-200/60 rounded-lg flex gap-2">
                    <span className="text-amber-600 font-bold">🔥</span>
                    <div>
                      <p className="font-semibold text-slate-800">Valentina Restrepo (Score 94)</p>
                      <p className="text-[11px] text-slate-600">Simuló crédito VIS para Ciudadela Verde hace 12 min.</p>
                    </div>
                  </div>
                  <div className="p-2 bg-blue-50/80 border border-blue-200/60 rounded-lg flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#003DA5] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800">Cita Agendada Sábado</p>
                      <p className="text-[11px] text-slate-600">Santiago Gómez solicitó atención en Cajicá.</p>
                    </div>
                  </div>
                  <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg">
                    <p className="font-semibold text-slate-800">Alerta de Rotación de Inventario</p>
                    <p className="text-[11px] text-slate-500">Altos de Mosquera requiere impulso de ventas VIS.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="h-5 w-[1px] bg-slate-200 hidden sm:block"></div>

          {/* Advisor Switcher Profile */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#003DA5] text-[#FFD200] font-bold text-xs flex items-center justify-center ring-2 ring-[#FFD200]/40">
              CR
            </div>
            <div className="hidden lg:block text-left">
              <select
                value={advisorName}
                onChange={(e) => setAdvisorName(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-800 border-none focus:outline-none cursor-pointer p-0"
              >
                <option value="Carlos Rodríguez">Carlos Rodríguez (Asesor Sr)</option>
                <option value="Mariana Silva">Mariana Silva (Asesor VIS)</option>
                <option value="Juan Pablo Torres">Juan Pablo Torres (Líder Comercial)</option>
              </select>
              <p className="text-[10px] text-slate-500 leading-none">Sede Principal Colsubsidio</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
