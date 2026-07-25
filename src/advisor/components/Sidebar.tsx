import React from 'react';
import {
  Home,
  Users,
  Briefcase,
  Building,
  UserCheck,
  Target,
  Megaphone,
  Repeat,
  BarChart3,
  Settings,
  ShieldCheck,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { ViewType } from '../types';
import { SofiaConnectionStatus } from '../hooks/useSofiaLeads';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface SidebarProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  hotLeadsCount: number;
  leadsCount: number;
  dealsCount: number;
  projectsCount: number;
  sofiaStatus: SofiaConnectionStatus;
}

const SOFIA_STATUS_META: Record<SofiaConnectionStatus, { dot: string; label: string; bg: string }> = {
  connecting: { dot: 'bg-amber-400 animate-ping', label: 'Sofía: Conectando…', bg: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
  connected: { dot: 'bg-emerald-400 animate-pulse', label: 'Sofía WhatsApp: En Vivo', bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
  error: { dot: 'bg-red-500', label: 'Sofía WhatsApp: Sin Conexión', bg: 'bg-red-500/10 text-red-400 border-red-500/30' },
};

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  setCurrentView,
  hotLeadsCount,
  leadsCount,
  dealsCount,
  projectsCount,
  sofiaStatus,
}) => {
  const menuItems: {
    id: ViewType;
    label: string;
    icon: React.FC<{ className?: string }>;
    badge?: number | string;
    badgeColor?: string;
    isHot?: boolean;
  }[] = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'leads', label: 'Leads (Directorio)', icon: Users, badge: leadsCount },
    { id: 'negocios', label: 'Negocios / Oportunidades', icon: Briefcase, badge: dealsCount },
    { id: 'proyectos', label: 'Proyectos de Vivienda', icon: Building, badge: `${projectsCount} VIS/No VIS` },
    { id: 'buyer_personas', label: 'Buyer Personas IA', icon: UserCheck },
    {
      id: 'score360',
      label: 'Score 360 & Perfilamiento',
      icon: Target,
      badge: hotLeadsCount > 0 ? `${hotLeadsCount} Hot` : undefined,
      badgeColor: 'bg-amber-400 text-slate-900 font-extrabold',
      isHot: hotLeadsCount > 0,
    },
    { id: 'campanas', label: 'Campañas & Contenido', icon: Megaphone },
    { id: 'remarketing', label: 'Remarketing IA', icon: Repeat },
    { id: 'paneles', label: 'Paneles & Analítica', icon: BarChart3 },
    { id: 'configuracion', label: 'Configuración', icon: Settings },
  ];

  return (
    <aside className="w-20 bg-[#121316] text-slate-300 flex flex-col items-center shrink-0 h-full border-r border-slate-800/80 py-4 z-30 transition-all duration-300 select-none overflow-visible">
      {/* Top Status Floating Balloons */}
      <div className="flex flex-col items-center gap-3 pb-4 mb-2 border-b border-slate-800/80 w-full px-2">
        {/* Motor AI Status Balloon */}
        <div className="relative group flex items-center justify-center">
          <div className="w-11 h-11 rounded-2xl bg-slate-900/90 border border-slate-700/60 flex items-center justify-center shadow-md cursor-pointer hover:border-emerald-400/60 hover:scale-105 transition-all">
            <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          {/* Tooltip Hover Banner */}
          <div className="absolute left-14 top-1/2 -translate-y-1/2 z-50 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 ease-out whitespace-nowrap">
            <div className="flex items-center gap-2.5 px-3.5 py-2 bg-[#1B1D24] text-white text-xs font-semibold rounded-xl border border-slate-700 shadow-2xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Motor de Inteligencia Activo</span>
              <span className="text-[10px] text-[#FFD200] font-bold bg-[#FFD200]/10 px-2 py-0.5 rounded border border-[#FFD200]/20 ml-1">
                v2.4 MVP
              </span>
            </div>
          </div>
        </div>

        {/* Agente Sofía WhatsApp Balloon */}
        <div className="relative group flex items-center justify-center">
          <div className="w-11 h-11 rounded-2xl bg-slate-900/90 border border-slate-700/60 flex items-center justify-center shadow-md cursor-pointer hover:border-[#25D366]/60 hover:scale-105 transition-all">
            <WhatsAppIcon className="w-5 h-5 text-slate-300 group-hover:text-[#25D366] fill-current transition-colors" />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
              <span className={`inline-flex rounded-full h-3 w-3 ${SOFIA_STATUS_META[sofiaStatus].dot}`}></span>
            </span>
          </div>
          {/* Tooltip Hover Banner */}
          <div className="absolute left-14 top-1/2 -translate-y-1/2 z-50 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 ease-out whitespace-nowrap">
            <div className="flex items-center gap-2.5 px-3.5 py-2 bg-[#1B1D24] text-white text-xs font-semibold rounded-xl border border-slate-700 shadow-2xl backdrop-blur-md">
              <span className={`w-2 h-2 rounded-full ${SOFIA_STATUS_META[sofiaStatus].dot}`} />
              <span>Agente Sofía (WhatsApp)</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ml-1 ${SOFIA_STATUS_META[sofiaStatus].bg}`}>
                {SOFIA_STATUS_META[sofiaStatus].label}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Navigation Balloons */}
      <nav className="flex-1 flex flex-col items-center gap-2.5 w-full px-2 py-1 overflow-visible">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <div key={item.id} className="relative group flex items-center justify-center w-full">
              <button
                onClick={() => setCurrentView(item.id)}
                aria-label={item.label}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer relative shadow-md ${
                  isActive
                    ? 'bg-gradient-to-br from-[#003DA5] to-blue-700 text-[#FFD200] border-2 border-[#FFD200] shadow-lg shadow-[#003DA5]/40 scale-105'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-white hover:bg-slate-800/90 hover:scale-110 hover:shadow-xl'
                }`}
              >
                <Icon className={`w-5 h-5 shrink-0 transition-colors ${isActive ? 'text-[#FFD200]' : ''}`} />

                {/* Badge indicator on balloon */}
                {item.badge !== undefined && (
                  <span
                    className={`absolute -top-1 -right-1 flex h-4 min-w-4 px-1 items-center justify-center text-[9px] font-extrabold rounded-full border border-slate-900 shadow-sm ${
                      item.isHot
                        ? 'bg-amber-400 text-slate-950 animate-bounce'
                        : isActive
                        ? 'bg-[#FFD200] text-[#003DA5]'
                        : 'bg-slate-700 text-white'
                    }`}
                  >
                    {typeof item.badge === 'number'
                      ? item.badge > 99
                        ? '99+'
                        : item.badge
                      : item.badge.split(' ')[0]}
                  </span>
                )}
              </button>

              {/* Deployed Floating Label / Tooltip on Hover */}
              <div className="absolute left-16 top-1/2 -translate-y-1/2 z-[100] pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 ease-out whitespace-nowrap">
                <div className="flex items-center gap-3 px-4 py-2.5 bg-[#1B1D24] text-white text-xs font-semibold rounded-xl border border-slate-700/90 shadow-2xl backdrop-blur-md">
                  {/* Small arrow pointing left */}
                  <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#1B1D24] border-l border-b border-slate-700/90 rotate-45" />

                  <span className="relative z-10 text-slate-100 font-bold">{item.label}</span>

                  {item.badge !== undefined && (
                    <span
                      className={`relative z-10 text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        item.badgeColor ||
                        (isActive ? 'bg-[#FFD200] text-[#003DA5]' : 'bg-slate-800 text-slate-300 border border-slate-700')
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      {/* Bottom Footer Info Balloon */}
      <div className="pt-3 border-t border-slate-800/80 w-full flex justify-center px-2">
        <div className="relative group flex items-center justify-center">
          <div className="w-11 h-11 rounded-2xl bg-[#003DA5]/20 border border-[#003DA5]/40 flex items-center justify-center text-[#FFD200] cursor-pointer hover:bg-[#003DA5]/30 hover:scale-105 transition-all shadow-md">
            <ShieldCheck className="w-5 h-5" />
          </div>
          {/* Tooltip Hover Banner */}
          <div className="absolute left-14 bottom-0 z-50 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 ease-out whitespace-nowrap">
            <div className="p-3 bg-[#1B1D24] text-white text-xs rounded-xl border border-slate-700 shadow-2xl backdrop-blur-md space-y-1 max-w-xs">
              <div className="flex items-center gap-1.5 text-[#FFD200] font-bold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Colsubsidio Vivienda</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug whitespace-normal">
                Integrado con Subsidio Familiar y Mi Casa Ya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

