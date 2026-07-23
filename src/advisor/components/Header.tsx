import React, { useState } from 'react';
import { Search, Bell, Plus, Building2, User, HelpCircle, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  onOpenNewLeadModal: () => void;
  advisorName: string;
  setAdvisorName: (name: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNewLeadModal,
  advisorName,
  setAdvisorName,
  searchQuery,
  setSearchQuery,
}) => {
  const [activeSegment, setActiveSegment] = useState<'personas' | 'empresas' | 'vivienda'>('vivienda');
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-xs">
      {/* 1. Fine institutional blue top border accent (#003DA5) */}
      <div className="h-1 bg-[#003DA5] w-full" />

      {/* Main Header Container */}
      <div className="px-4 lg:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Left: Colsubsidio Branding & Institutional Segments */}
        <div className="flex items-center gap-6">
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

          {/* Institutional Navigation Pills (Colsubsidio style with active yellow accent) */}
          <div className="hidden md:flex items-center bg-slate-100 p-1 rounded-lg text-xs font-semibold border border-slate-200/80">
            <button
              onClick={() => setActiveSegment('personas')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeSegment === 'personas'
                  ? 'bg-[#FFD200] text-[#003DA5] shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Personas
            </button>
            <button
              onClick={() => setActiveSegment('vivienda')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeSegment === 'vivienda'
                  ? 'bg-[#FFD200] text-[#003DA5] shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Comercial Vivienda
            </button>
            <button
              onClick={() => setActiveSegment('empresas')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeSegment === 'empresas'
                  ? 'bg-[#FFD200] text-[#003DA5] shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Empresas
            </button>
          </div>
        </div>

        {/* Center: Global Search Bar */}
        <div className="flex-1 max-w-md hidden sm:block relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar lead por nombre, teléfono, cédula o proyecto..."
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 focus:border-[#003DA5] transition-all"
          />
        </div>

        {/* Right: Actions, Notifications & Advisor Profile */}
        <div className="flex items-center gap-3">
          {/* Action Button - Primary New Lead */}
          <button
            onClick={onOpenNewLeadModal}
            className="bg-slate-900 hover:bg-black text-white px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer active:scale-95"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span className="hidden sm:inline">Nuevo Lead</span>
          </button>

          {/* Notifications Button */}
          <div className="relative">
            <button
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
