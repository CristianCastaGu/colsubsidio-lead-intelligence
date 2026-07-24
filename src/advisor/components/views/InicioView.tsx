import React, { useState, useEffect } from 'react';
import { animate } from 'motion/react';
import {
  Flame,
  UserPlus,
  AlertTriangle,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Building2,
  ChevronRight,
  Filter,
  TrendingUp,
  Award,
  ExternalLink
} from 'lucide-react';
import { Lead, Task, HousingProject } from '../../types';

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

function useCountUp(target: number, decimals = 0) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, target, {
      duration: 1,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Number(v.toFixed(decimals))),
    });
    return () => controls.stop();
  }, [target, decimals]);

  return display;
}

export const InicioView: React.FC<InicioViewProps> = ({
  advisorName,
  leads,
  projects,
  tasks,
  onOpenNewLeadModal,
  onSelectLeadForScore360,
  onOpenWhatsAppModal,
  onFilterHotLeads,
  onNavigateToView,
  onToggleTaskComplete,
}) => {
  const [selectedProjectFilter, setSelectedProjectFilter] = useState<string>('todos');

  // Stats
  const hotLeads = leads.filter((l) => l.temperature === 'Hot');
  const newLeadsToday = 14;
  const pendingTasks = tasks.filter((t) => !t.completed);

  // Filtered ranking of opportunities
  const filteredLeads = leads.filter((l) => {
    if (selectedProjectFilter === 'todos') return true;
    return l.recommendedProjectId === selectedProjectFilter;
  });

  const rotationAlertProjects = projects.filter((p) => p.rotationAlert);

  const animatedNewLeads = useCountUp(newLeadsToday);
  const animatedHot = useCountUp(hotLeads.length);
  const animatedPending = useCountUp(pendingTasks.length);
  const animatedConversion = useCountUp(18.4, 1);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* TOP SECTION: TU DÍA DE UN VISTAZO */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#003DA5]" />
            <span>Tu día de un vistazo</span>
          </h2>
          <span className="text-[10px] font-bold bg-[#FFD200] text-[#003DA5] px-2.5 py-0.5 rounded-full">
            Hoy
          </span>
        </div>

        {/* Live Metrics Grid (4 Horizontal Cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <p className="text-[11px] font-medium text-slate-500">Leads nuevos hoy</p>
            <div className="flex items-baseline justify-between">
              <span className="font-display text-2xl font-extrabold text-slate-900">{animatedNewLeads}</span>
              <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                +18% vs ayer
              </span>
            </div>
          </div>

          <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl space-y-1">
            <p className="text-[11px] font-medium text-amber-800">Hot sin contactar</p>
            <div className="flex items-baseline justify-between">
              <span className="font-display text-2xl font-extrabold text-amber-900">{animatedHot}</span>
              <span className="text-xs">🔥</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <p className="text-[11px] font-medium text-slate-500">Tareas pendientes</p>
            <div className="flex items-baseline justify-between">
              <span className="font-display text-2xl font-extrabold text-slate-900">{animatedPending}</span>
              <span className="text-[10px] text-slate-500 font-semibold">de {tasks.length}</span>
            </div>
          </div>

          <div className="p-3 bg-blue-50/80 border border-blue-200/80 rounded-xl space-y-1">
            <p className="text-[11px] font-medium text-[#003DA5]">Tasa conversión</p>
            <div className="flex items-baseline justify-between">
              <span className="font-display text-2xl font-extrabold text-[#003DA5]">{animatedConversion}%</span>
              <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                ↑ 2.3%
              </span>
            </div>
          </div>
        </div>

        {/* Horizontal Split: Tasks List (2 Cols) + Inventory Push Alert Box (1 Col) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-1">
          {/* Tasks List */}
          <div className="lg:col-span-2 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-slate-800">Tareas comerciales del día</p>
              <span className="text-[10px] text-slate-500">Haz clic para marcar como completada</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => onToggleTaskComplete(task.id)}
                  className={`p-2.5 rounded-lg border text-xs transition-all cursor-pointer flex items-start gap-2.5 ${
                    task.completed
                      ? 'bg-slate-50 border-slate-200 opacity-60'
                      : 'bg-white border-slate-200 hover:border-[#003DA5] shadow-2xs'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => {}}
                    className="mt-0.5 rounded border-slate-300 text-[#003DA5] focus:ring-[#003DA5]"
                  />
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-semibold truncate ${
                        task.completed ? 'line-through text-slate-400' : 'text-slate-800'
                      }`}
                    >
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-1">
                      <span className="font-bold text-[#003DA5] truncate">{task.leadName}</span>
                      <span>•</span>
                      <span className="shrink-0">{task.dueTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Push Alert Box */}
          <div className="p-3.5 bg-amber-500/10 border border-amber-300/60 rounded-xl space-y-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs mb-1">
                <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Alerta de Inventario Vivienda</span>
              </div>
              <p className="text-xs text-slate-700 leading-snug">
                <strong>Altos de Mosquera</strong> tiene 85 unidades VIS disponibles. Se activó bonificación comercial para cierres este mes.
              </p>
            </div>
            <button
              onClick={() => onNavigateToView('proyectos')}
              className="text-xs text-[#003DA5] font-bold hover:underline flex items-center gap-1 cursor-pointer pt-2"
            >
              <span>Ver catálogo de proyectos</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* MAIN RANKING OF OPPORTUNITIES TABLE - FULL WIDTH BELOW */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#003DA5]" />
              <h2 className="text-base font-bold text-slate-900">Ranking de Oportunidades Priorizadas</h2>
            </div>
            <p className="text-xs text-slate-500">
              Calificadas en tiempo real según Fit, Intención, Engagement y Conversión
            </p>
          </div>

          {/* Filter Dropdown */}
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedProjectFilter}
              onChange={(e) => setSelectedProjectFilter(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20"
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

        {/* Opportunities Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-500 uppercase tracking-wider text-[10px] font-bold">
                <th className="py-2.5 px-3">Lead / Afiliación</th>
                <th className="py-2.5 px-3">Score 360</th>
                <th className="py-2.5 px-3">Intención</th>
                <th className="py-2.5 px-3">Proyecto Sugerido</th>
                <th className="py-2.5 px-3 text-right">Acción Comercial</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filteredLeads.map((lead) => {
                const project = projects.find((p) => p.id === lead.recommendedProjectId);

                return (
                  <tr
                    key={lead.id}
                    className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                  >
                    {/* Lead Name & Details */}
                    <td className="py-3 px-3" onClick={() => onSelectLeadForScore360(lead)}>
                      <div className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-slate-100 text-[#003DA5] font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-[#003DA5]">
                          {lead.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-[#003DA5] flex items-center gap-1.5">
                            <span>{lead.name}</span>
                            {lead.temperature === 'Hot' && (
                              <span className="text-[10px] bg-amber-100 text-amber-800 font-extrabold px-1.5 py-0.2 rounded">
                                🔥 Hot
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-1">
                            <span>{lead.city}</span>
                            <span>•</span>
                            <span className="text-[#003DA5] font-semibold">
                              {lead.afiliacionCategoria || 'Afiliado Colsubsidio'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Score 360 Badge */}
                    <td className="py-3 px-3" onClick={() => onSelectLeadForScore360(lead)}>
                      <div className="inline-flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                        <span className="font-extrabold text-slate-900 text-xs">
                          {lead.scores.total}/100
                        </span>
                        <div className="w-12 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              lead.scores.total >= 90
                                ? 'bg-emerald-500'
                                : lead.scores.total >= 80
                                ? 'bg-amber-500'
                                : 'bg-slate-400'
                            }`}
                            style={{ width: `${lead.scores.total}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>

                    {/* Intent & Match */}
                    <td className="py-3 px-3" onClick={() => onSelectLeadForScore360(lead)}>
                      <span className="font-semibold text-slate-800">{lead.priority}</span>
                      <p className="text-[10px] text-slate-500">{lead.matchPercentage}% match catálogo</p>
                    </td>

                    {/* Recommended Project */}
                    <td className="py-3 px-3" onClick={() => onSelectLeadForScore360(lead)}>
                      <p className="font-semibold text-slate-900 truncate max-w-[150px]">
                        {project?.name || lead.recommendedProjectId}
                      </p>
                      <span className="text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                        {project?.type} • {project?.municipality}
                      </span>
                    </td>

                    {/* Suggested Action Buttons */}
                    <td className="py-3 px-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {/* WhatsApp Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenWhatsAppModal(lead);
                          }}
                          className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-lg font-bold text-[11px] flex items-center gap-1 transition-colors border border-emerald-200 cursor-pointer"
                          title="Enviar plantilla WhatsApp personalizada"
                        >
                          <MessageSquare className="w-3 h-3 text-emerald-600" />
                          <span>WhatsApp</span>
                        </button>

                        {/* Call Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(`Iniciando llamada comercial a ${lead.name} (${lead.phone})`);
                          }}
                          className="bg-[#003DA5]/10 hover:bg-[#003DA5]/20 text-[#003DA5] px-2.5 py-1 rounded-lg font-bold text-[11px] flex items-center gap-1 transition-colors border border-[#003DA5]/20 cursor-pointer"
                          title="Llamar directamente"
                        >
                          <Phone className="w-3 h-3 text-[#003DA5]" />
                          <span>Llamar</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Bottom Footer Link to Full Contacts */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            Mostrando <span className="font-bold text-slate-800">{filteredLeads.length}</span> leads con scoring procesado
          </span>
          <button
            onClick={() => onNavigateToView('leads')}
            className="text-[#003DA5] font-bold hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Ver todos los contactos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
