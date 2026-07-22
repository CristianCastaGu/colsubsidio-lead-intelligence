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
  Flame,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  hotLeadsCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  setCurrentView,
  hotLeadsCount,
}) => {
  const menuItems: { id: ViewType; label: string; icon: React.FC<{ className?: string }>; badge?: number | string; badgeColor?: string }[] = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'leads', label: 'Leads', icon: Users, badge: 6 },
    { id: 'negocios', label: 'Negocios / Oportunidades', icon: Briefcase, badge: 4 },
    { id: 'proyectos', label: 'Proyectos de Vivienda', icon: Building, badge: '6 VIS/No VIS' },
    { id: 'buyer_personas', label: 'Buyer Personas IA', icon: UserCheck },
    { id: 'score360', label: 'Score 360', icon: Target, badge: hotLeadsCount > 0 ? `${hotLeadsCount} Hot` : undefined, badgeColor: 'bg-amber-400 text-slate-900 font-extrabold' },
    { id: 'campanas', label: 'Campañas & Contenido', icon: Megaphone },
    { id: 'remarketing', label: 'Remarketing', icon: Repeat },
    { id: 'paneles', label: 'Paneles & Analítica', icon: BarChart3 },
    { id: 'configuracion', label: 'Configuración', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#0B192C] text-slate-300 flex flex-col shrink-0 min-h-[calc(100vh-53px)] border-r border-slate-800 transition-all duration-200">
      {/* Top Sidebar Header Badge */}
      <div className="p-4 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-xs font-semibold text-slate-300">Motor de Inteligencia Activo</span>
        </div>
        <span className="text-[10px] text-[#FFD200] font-bold bg-[#FFD200]/10 px-2 py-0.5 rounded border border-[#FFD200]/20">
          v2.4 MVP
        </span>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold px-3 py-1.5 mb-1">
          Navegación Comercial
        </div>

        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all cursor-pointer group ${
                isActive
                  ? 'bg-white/10 text-white font-bold border-l-4 border-[#FFD200] pl-2.5 shadow-xs'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5 truncate">
                <Icon
                  className={`w-4 h-4 shrink-0 transition-colors ${
                    isActive ? 'text-[#FFD200]' : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                />
                <span className="truncate">{item.label}</span>
              </div>

              {item.badge && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                    item.badgeColor || (isActive ? 'bg-[#FFD200] text-[#003DA5]' : 'bg-slate-800 text-slate-300')
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Footer Info Box */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-900/50">
        <div className="p-3 bg-[#003DA5]/20 border border-[#003DA5]/40 rounded-xl space-y-1.5">
          <div className="flex items-center gap-2 text-[#FFD200] font-bold text-xs">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Colsubsidio Vivienda</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-tight">
            Integrado con Subsidio Familiar de Vivienda y Mi Casa Ya.
          </p>
        </div>
      </div>
    </aside>
  );
};
