import React, { useState, useMemo } from 'react';
import { Search, MapPin, Building2, CheckCircle, RotateCcw, Bot, Eye, Sparkles, Filter, Home } from 'lucide-react';
import { PROJECTS_DATA, CITY_CARDS, ALLIED_CONSTRUCTORS } from '../data/mockData';
import { Project, FilterState } from '../types';

interface ProyectosPageProps {
  initialSearchQuery?: string;
  onOpenProjectModal: (project: Project) => void;
  onAskAI: (query: string) => void;
}

export const ProyectosPage: React.FC<ProyectosPageProps> = ({
  initialSearchQuery = '',
  onOpenProjectModal,
  onAskAI
}) => {
  const [filters, setFilters] = useState<FilterState>({
    region: initialSearchQuery === 'Bogotá' || initialSearchQuery === 'Cundinamarca' ? initialSearchQuery : 'Todos',
    zone: initialSearchQuery && !['Bogotá', 'Cundinamarca', 'VIS'].includes(initialSearchQuery) ? initialSearchQuery : 'Todas',
    searchName: '',
    visOnly: initialSearchQuery === 'VIS'
  });

  const featuredProject = PROJECTS_DATA.find((p) => p.id === 'ciudadela-maipore') || PROJECTS_DATA[0];

  // Filtered projects list
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      // Region filter
      if (filters.region !== 'Todos' && p.region !== filters.region) return false;

      // Zone or City filter
      if (filters.zone !== 'Todas') {
        const zoneLower = filters.zone.toLowerCase();
        const pZoneLower = p.zone.toLowerCase();
        const pCityLower = p.city.toLowerCase();
        if (!pZoneLower.includes(zoneLower) && !pCityLower.includes(zoneLower)) {
          return false;
        }
      }

      // Name search
      if (filters.searchName.trim()) {
        const query = filters.searchName.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCity = p.city.toLowerCase().includes(query);
        const matchesAddress = p.address.toLowerCase().includes(query);
        if (!matchesName && !matchesCity && !matchesAddress) return false;
      }

      // VIS Only
      if (filters.visOnly && !p.subsidioVisEligible) return false;

      return true;
    });
  }, [filters]);

  const resetFilters = () => {
    setFilters({
      region: 'Todos',
      zone: 'Todas',
      searchName: '',
      visOnly: false
    });
  };

  return (
    <div className="w-full font-sans bg-white text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100/80 border-b border-gray-200/60 py-2.5 px-4 sm:px-8 text-xs font-medium text-gray-600">
        <div className="max-w-7xl mx-auto flex items-center space-x-2">
          <span className="hover:underline cursor-pointer text-[#003DA5]">Inicio</span>
          <span>/</span>
          <span className="hover:underline cursor-pointer text-[#003DA5]">Vivienda</span>
          <span>/</span>
          <span className="font-bold text-gray-900">Proyectos de Vivienda</span>
        </div>
      </div>

      {/* HERO SECTION WITH FLOATING SEARCH */}
      <section className="bg-gradient-to-b from-blue-50/80 via-sky-50/50 to-white pt-10 pb-16 px-4 sm:px-8 relative border-b border-blue-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          {/* Left Title */}
          <div className="lg:col-span-8 space-y-3">
            <span className="bg-[#003DA5] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Catálogo Oficial 2026
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#003DA5] font-sans">
              Proyectos de vivienda Colsubsidio
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
              Encuentra apartamentos con subsidio VIS, excelente conectividad y diseños diseñados para tu familia en Bogotá y Cundinamarca.
            </p>
          </div>

          {/* Right Geometric House Illustration */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 bg-[#FFD200]/30 rounded-3xl p-4 flex items-center justify-center border-2 border-[#FFD200]">
              <div className="absolute inset-0 bg-white/40 rounded-3xl backdrop-blur-2xs"></div>
              {/* Stylized House Icon */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-0 h-0 border-l-[45px] border-l-transparent border-r-[45px] border-r-transparent border-b-[40px] border-b-[#FFD200]"></div>
                <div className="w-24 h-20 bg-[#003DA5] rounded-b-xl flex items-center justify-center relative shadow-md">
                  <div className="w-8 h-10 bg-white rounded-t-md"></div>
                  <div className="w-5 h-5 bg-[#FFD200] rounded-xs absolute top-2 left-2"></div>
                </div>
                <span className="text-[11px] font-black text-[#003DA5] mt-2 uppercase tracking-wide">
                  Donde nace tu hogar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Search Bar Card */}
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-5 sm:p-6 border border-gray-200/80 -mb-8 relative z-20">
          <div className="flex items-center gap-2 mb-4 text-[#003DA5] font-bold text-sm">
            <Filter size={18} />
            <h2>Buscador de Vivienda Colsubsidio</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-medium">
            {/* 1. ¿Dónde quieres vivir? */}
            <div>
              <label className="block text-gray-700 font-bold mb-1.5">
                ¿Dónde quieres vivir?
              </label>
              <select
                value={filters.region}
                onChange={(e) => setFilters({ ...filters, region: e.target.value })}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl font-bold text-gray-800 focus:ring-2 focus:ring-[#003DA5] focus:outline-none"
              >
                <option value="Todos">Todas las regiones</option>
                <option value="Bogotá">Bogotá D.C.</option>
                <option value="Cundinamarca">Cundinamarca</option>
              </select>
            </div>

            {/* 2. Elige zona o municipio */}
            <div>
              <label className="block text-gray-700 font-bold mb-1.5">
                Elige zona o municipio
              </label>
              <select
                value={filters.zone}
                onChange={(e) => setFilters({ ...filters, zone: e.target.value })}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl font-bold text-gray-800 focus:ring-2 focus:ring-[#003DA5] focus:outline-none"
              >
                <option value="Todas">Todas las zonas / municipios</option>
                <option value="Norte">Bogotá - Norte (Suba / Usaquén)</option>
                <option value="Occidente">Bogotá - Occidente (Fontibón / Calle 13)</option>
                <option value="Chapinero">Bogotá - Centro / Chapinero</option>
                <option value="Soacha">Soacha</option>
                <option value="Girardot">Girardot</option>
                <option value="Cajicá">Cajicá</option>
                <option value="Sopó">Sopó</option>
                <option value="Tocancipá">Tocancipá</option>
                <option value="Villeta">Villeta</option>
              </select>
            </div>

            {/* 3. Nombre del proyecto */}
            <div>
              <label className="block text-gray-700 font-bold mb-1.5">
                Nombre del proyecto
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={filters.searchName}
                  onChange={(e) => setFilters({ ...filters, searchName: e.target.value })}
                  placeholder="Ej. Maiporé, Calia, Nuva..."
                  className="w-full p-3 pl-9 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-[#003DA5] focus:outline-none"
                />
                <Search size={16} className="absolute left-3 top-3.5 text-gray-400" />
              </div>
            </div>

            {/* 4. Search & Reset Button */}
            <div className="flex items-end gap-2">
              <button
                onClick={() => {}}
                className="flex-1 bg-[#0f172a] hover:bg-black text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2 h-11"
              >
                <Search size={16} />
                Buscar
              </button>

              <button
                onClick={resetFilters}
                className="p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl h-11 transition-colors"
                title="Reiniciar filtros"
              >
                <RotateCcw size={16} />
              </button>
            </div>
          </div>

          {/* VIS Checkbox Filter */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer font-bold text-gray-800">
              <input
                type="checkbox"
                checked={filters.visOnly}
                onChange={(e) => setFilters({ ...filters, visOnly: e.target.checked })}
                className="w-4 h-4 text-[#003DA5] rounded focus:ring-[#003DA5]"
              />
              Mostrar solo proyectos con Subsidio VIS
            </label>

            <span className="text-gray-500 font-medium">
              Mostrando <strong className="text-[#003DA5] font-black">{filteredProjects.length}</strong> proyectos disponibles
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED BANNER PROJECT */}
      <section className="pt-16 pb-10 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-[#FFFDF0] rounded-3xl p-6 sm:p-8 border-2 border-[#FFD200] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="lg:col-span-7 space-y-4">
            <span className="bg-[#FFD200] text-gray-900 text-xs font-black px-3 py-1 rounded-full uppercase">
              Macroproyecto Destacado
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-[#003DA5] font-sans">
              {featuredProject.name}
            </h2>

            <p className="text-sm text-gray-700 leading-relaxed">
              {featuredProject.description}
            </p>

            {/* Pink Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="bg-[#E91E63] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-2xs">
                Precios desde {featuredProject.priceFormatted}
              </span>
              <span className="bg-[#E91E63] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-2xs">
                Área desde {featuredProject.areaFormatted}
              </span>
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenProjectModal(featuredProject)}
                className="bg-[#0f172a] hover:bg-black text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all"
              >
                Encuentra tu nuevo hogar
              </button>

              <button
                onClick={() => onAskAI(`Cuéntame los detalles del proyecto ${featuredProject.name} en Soacha`)}
                className="bg-white hover:bg-yellow-100 text-[#003DA5] border border-[#003DA5] font-bold px-5 py-3 rounded-full text-xs transition-all flex items-center gap-1.5"
              >
                <Bot size={16} className="text-[#003DA5]" />
                Preguntar a la IA
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xl border-2 border-white relative">
            <img
              src={featuredProject.imageUrl}
              alt={featuredProject.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <CheckCircle size={12} className="text-[#FFD200]" />
              Aplica Subsidio VIS
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Proyectos Propios */}
      <section className="py-10 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#003DA5]">Proyectos Destacados</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">Proyectos propios Colsubsidio</h2>
          <p className="text-sm text-gray-600 mt-1">
            Explora las opciones de vivienda disponibles y consulta sus valores con el asistente virtual.
          </p>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="bg-gray-50 rounded-3xl p-12 text-center space-y-4 border border-gray-200">
            <Building2 className="mx-auto text-gray-400" size={48} />
            <h3 className="text-lg font-bold text-gray-800">No encontramos proyectos para los filtros seleccionados</h3>
            <p className="text-xs text-gray-500 max-w-md mx-auto">Prueba reiniciando los filtros de búsqueda para ver todas las opciones disponibles.</p>
            <button
              onClick={resetFilters}
              className="bg-[#003DA5] text-white font-bold px-6 py-2.5 rounded-full text-xs"
            >
              Ver todos los proyectos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Header */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.subsidioVisEligible && (
                    <span className="absolute top-3 left-3 bg-gray-900 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md">
                      Subsidio VIS
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 bg-white/95 text-gray-900 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                    <MapPin size={11} className="text-[#003DA5]" />
                    {project.city}
                  </span>
                </div>

                {/* Body Details */}
                <div className="p-5 flex-1 space-y-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#003DA5] uppercase tracking-wider block">
                      {project.zone}
                    </span>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#003DA5] transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2 py-2 border-y border-gray-100 text-xs">
                    <div>
                      <span className="text-gray-400 font-medium block text-[10px]">Precio desde:</span>
                      <span className="font-black text-[#003DA5] text-sm">{project.priceFormatted}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 font-medium block text-[10px]">Área desde:</span>
                      <span className="font-bold text-gray-800">{project.areaFormatted}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 line-clamp-2">{project.description}</p>
                </div>

                {/* Footer Buttons */}
                <div className="p-4 pt-0 gap-2 flex flex-col sm:flex-row">
                  <button
                    onClick={() => onOpenProjectModal(project)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1"
                  >
                    <Eye size={14} />
                    Ver Detalle
                  </button>

                  <button
                    onClick={() => onAskAI(`Quiero saber más información del proyecto ${project.name} en ${project.city}`)}
                    className="flex-1 bg-[#003DA5] hover:bg-[#002878] text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1 shadow-xs"
                  >
                    <Bot size={14} className="text-[#FFD200]" />
                    Preguntar IA
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* SECTION: Ciudades */}
      <section className="py-12 px-4 sm:px-8 bg-gray-50 border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#003DA5]">Ubicaciones</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">Ciudades y Municipios</h2>
            <p className="text-sm text-gray-600 mt-1">Selecciona la ciudad donde sueñas con tener tu propia vivienda.</p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-between gap-6">
            {CITY_CARDS.map((city) => (
              <div
                key={city.id}
                onClick={() => setFilters({ ...filters, zone: city.name })}
                className="group cursor-pointer flex flex-col items-center text-center space-y-2"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg relative group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={city.imageUrl}
                    alt={city.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md whitespace-nowrap">
                    {city.projectCount} proyectos
                  </span>
                </div>
                <span className="font-bold text-gray-900 text-sm group-hover:text-[#003DA5] transition-colors">
                  {city.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Nuestros Aliados */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#003DA5]">Respaldo y Calidad</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">Nuestros aliados constructores</h2>
          <p className="text-sm text-gray-600 mt-1">Trabajamos junto a las firmas de construcción líderes en el país.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {ALLIED_CONSTRUCTORS.map((constructor) => (
            <div
              key={constructor.id}
              className="bg-white rounded-2xl p-5 border border-gray-200 shadow-2xs hover:shadow-md transition-all flex flex-col items-center justify-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-2 group-hover:bg-blue-50 transition-colors">
                <Building2 size={24} style={{ color: constructor.accentColor }} />
              </div>
              <span className="font-bold text-gray-900 text-sm">{constructor.name}</span>
              <span className="text-[10px] text-gray-500">{constructor.tagline}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
