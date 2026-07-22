import React, { useState } from 'react';
import {
  Building,
  MapPin,
  Tag,
  CheckCircle2,
  AlertTriangle,
  Users,
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { HousingProject, HousingCategory, Lead } from '../../types';

interface ProyectosViewProps {
  projects: HousingProject[];
  leads: Lead[];
  onSelectProjectForLeads: (projectId: string) => void;
}

export const ProyectosView: React.FC<ProyectosViewProps> = ({
  projects,
  leads,
  onSelectProjectForLeads,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedMunicipality, setSelectedMunicipality] = useState<string>('todos');
  const [onlyRotationAlert, setOnlyRotationAlert] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique municipalities
  const municipalities = Array.from(new Set(projects.map((p) => p.municipality)));

  // Filter projects
  const filteredProjects = projects.filter((p) => {
    if (selectedCategory !== 'todos' && p.type !== selectedCategory) return false;
    if (selectedMunicipality !== 'todos' && p.municipality !== selectedMunicipality) return false;
    if (onlyRotationAlert && !p.rotationAlert) return false;
    if (
      searchQuery &&
      !p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !p.municipality.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER SECTION */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-[#003DA5]" />
            <h1 className="text-lg font-bold text-slate-900">Catálogo de Proyectos de Vivienda Colsubsidio</h1>
          </div>
          <p className="text-xs text-slate-500">
            Inventario activo de proyectos VIS y No VIS en Bogotá y Cundinamarca con subsidios aplicables.
          </p>
        </div>

        {/* Quick Summary Pill */}
        <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200 text-xs">
          <span className="text-slate-500 font-medium">Proyectos Activos:</span>
          <span className="font-bold text-[#003DA5]">{projects.length} Portafolio</span>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar proyecto o ciudad..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 font-medium"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 cursor-pointer"
          >
            <option value="todos">Todas las Categorías (VIS / No VIS)</option>
            <option value="VIS">Únicamente VIS (Vivienda Interés Social)</option>
            <option value="No VIS">Únicamente No VIS (Libre Inversión)</option>
          </select>

          {/* Municipality Filter */}
          <select
            value={selectedMunicipality}
            onChange={(e) => setSelectedMunicipality(e.target.value)}
            className="p-2 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 cursor-pointer"
          >
            <option value="todos">Todos los Municipios</option>
            {municipalities.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          {/* Rotation Alert Checkbox */}
          <label className="flex items-center gap-2 p-2 bg-amber-50 border border-amber-200 rounded-lg cursor-pointer text-amber-900 font-semibold select-none">
            <input
              type="checkbox"
              checked={onlyRotationAlert}
              onChange={(e) => setOnlyRotationAlert(e.target.checked)}
              className="rounded border-amber-400 text-[#003DA5] focus:ring-[#003DA5]"
            />
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Alerta Baja Rotación</span>
          </label>
        </div>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          // Count interested leads
          const interestedLeadsCount = leads.filter((l) => l.recommendedProjectId === project.id).length;
          const availabilityPercentage = Math.round((project.unitsAvailable / project.unitsTotal) * 100);

          return (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image & Badges Overlay */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span
                      className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded shadow-xs ${
                        project.type === 'VIS'
                          ? 'bg-[#003DA5] text-[#FFD200]'
                          : 'bg-slate-900 text-white'
                      }`}
                    >
                      {project.type} {project.smmlvPrice ? `• ${project.smmlvPrice}` : ''}
                    </span>

                    {project.subsidyApplicable && (
                      <span className="text-[11px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Subsidio $39M
                      </span>
                    )}
                  </div>

                  {project.rotationAlert && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md animate-pulse">
                      <AlertTriangle className="w-3 h-3" /> Baja Rotación
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white text-xs">
                    <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#FFD200]" /> {project.municipality}
                    </span>
                    <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-bold">
                      Entrega: {project.deliveryDate}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-[#003DA5] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">{project.description}</p>
                  </div>

                  {/* Price */}
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 font-semibold block">Rango de Precio</span>
                      <span className="text-xs font-black text-[#003DA5]">
                        ${(project.minPriceCOP / 1000000).toFixed(0)}M - ${(project.maxPriceCOP / 1000000).toFixed(0)}M COP
                      </span>
                    </div>
                    {project.cajaSubsidioAmountCOP > 0 && (
                      <div className="text-right">
                        <span className="text-[10px] text-emerald-600 font-bold block">Aporte Caja</span>
                        <span className="text-xs font-bold text-emerald-700">+$39 Millones</span>
                      </div>
                    )}
                  </div>

                  {/* Features Pills */}
                  <div className="flex flex-wrap gap-1 text-[10px]">
                    {project.features.map((feat, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Inventory Availability Progress Bar */}
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-500 font-medium">Inventario Disponible:</span>
                      <span className="font-extrabold text-slate-800">
                        {project.unitsAvailable} de {project.unitsTotal} ({availabilityPercentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          availabilityPercentage < 15
                            ? 'bg-amber-500'
                            : availabilityPercentage < 30
                            ? 'bg-blue-600'
                            : 'bg-emerald-500'
                        }`}
                        style={{ width: `${availabilityPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-4 pt-0 border-t border-slate-100 mt-2">
                <button
                  onClick={() => onSelectProjectForLeads(project.id)}
                  className="w-full mt-3 bg-slate-50 hover:bg-[#003DA5] hover:text-white text-[#003DA5] border border-slate-200 font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Ver {interestedLeadsCount} Leads Interesados</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
