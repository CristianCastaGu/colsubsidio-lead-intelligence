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
  Sparkles
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
  connecting: { dot: 'bg-amber-400', label: 'Sofía: Conectando…', bg: 'bg-amber-50 text-amber-700 border-amber-200' },
  connected: { dot: 'bg-emerald-500', label: 'Sofía WhatsApp: En Vivo', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  error: { dot: 'bg-red-500', label: 'Sofía WhatsApp: Sin Conexión', bg: 'bg-red-50 text-red-700 border-red-200' },
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
      isHot: hotLeadsCount > 0,
    },
    { id: 'campanas', label: 'Campañas & Contenido', icon: Megaphone },
    { id: 'remarketing', label: 'Remarketing IA', icon: Repeat },
    { id: 'paneles', label: 'Paneles & Analítica', icon: BarChart3 },
    { id: 'configuracion', label: 'Configuración', icon: Settings },
  ];

  return (
    <aside className="w-20 bg-white text-slate-500 flex flex-col items-center shrink-0 h-full border-r border-slate-200 py-4 z-30 select-none overflow-visible">
      {/* Top Status Icons */}
      <div className="flex flex-col items-center gap-2.5 pb-3 mb-1.5 border-b border-slate-100 w-full px-2.5">
        {/* Motor AI Status */}
        <div className="relative group flex items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer transition-colors">
            <Sparkles className="w-5 h-5 text-slate-500" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>
          <div className="absolute left-16 top-1/2 -translate-y-1/2 z-50 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 ease-out whitespace-nowrap">
            <div className="flex items-center gap-2.5 px-3.5 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Motor de Inteligencia Activo</span>
              <span className="text-[10px] text-[#FFD200] font-bold bg-[#FFD200]/10 px-2 py-0.5 rounded border border-[#FFD200]/20 ml-1">
                v2.4 MVP
              </span>
            </div>
          </div>
        </div>

        {/* Agente Sofía WhatsApp Status */}
        <div className="relative group flex items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer transition-colors">
            <WhatsAppIcon className="w-5 h-5 text-slate-500 fill-current" />
            <span className={`absolute top-1.5 right-1.5 w-2 h-2 rounded-full ring-2 ring-white ${SOFIA_STATUS_META[sofiaStatus].dot}`} />
          </div>
          <div className="absolute left-16 top-1/2 -translate-y-1/2 z-50 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 ease-out whitespace-nowrap">
            <div className="flex items-center gap-2.5 px-3.5 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl shadow-xl">
              <span className={`w-2 h-2 rounded-full ${SOFIA_STATUS_META[sofiaStatus].dot}`} />
              <span>Agente Sofía (WhatsApp)</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ml-1 ${SOFIA_STATUS_META[sofiaStatus].bg}`}>
                {SOFIA_STATUS_META[sofiaStatus].label}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col items-center gap-2.5 w-full px-2.5 py-1 overflow-visible">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <div key={item.id} className="relative group flex items-center justify-center w-full">
              <button
                onClick={() => setCurrentView(item.id)}
                aria-label={item.label}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all cursor-pointer relative ${
                  isActive
                    ? 'bg-[#003DA5] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700'
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />

                {/* Badge indicator */}
                {item.badge !== undefined && (
                  <span
                    className={`absolute -top-1.5 -right-1.5 flex h-5 min-w-5 px-1 items-center justify-center text-[10px] font-bold rounded-full ring-2 ring-white ${
                      item.isHot ? 'bg-[#FFD200] text-[#003DA5]' : 'bg-[#003DA5] text-white'
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

              {/* Tooltip on Hover */}
              <div className="absolute left-16 top-1/2 -translate-y-1/2 z-[100] pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 ease-out whitespace-nowrap">
                <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl shadow-xl">
                  <span className="text-slate-100 font-bold">{item.label}</span>
                  {item.badge !== undefined && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        item.isHot ? 'bg-[#FFD200] text-[#003DA5]' : 'bg-slate-700 text-slate-200'
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

      {/* Footer */}
      <div className="pt-3 border-t border-slate-100 w-full flex justify-center px-2.5">
        <div className="relative group flex items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer transition-colors">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="absolute left-16 bottom-0 z-50 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 ease-out whitespace-nowrap">
            <div className="p-3 bg-slate-900 text-white text-xs rounded-xl shadow-xl space-y-1 max-w-xs">
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
