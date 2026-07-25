import React, { useState } from 'react';
import { Bell, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  advisorName: string;
  setAdvisorName: (name: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  advisorName,
  setAdvisorName,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);

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

        {/* Spacer pushes notifications/profile to the right now that search + quick actions live in the Home card */}
        <div className="flex-1" />

        {/* Right: Notifications & Advisor Profile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
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
