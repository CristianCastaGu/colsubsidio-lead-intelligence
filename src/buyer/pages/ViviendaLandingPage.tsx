import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, ArrowRight, Play, Pause, ShieldCheck, CheckCircle, Calculator, Building2, Award, BookOpen, MapPin, ExternalLink } from 'lucide-react';
import { CATEGORY_CARDS, PROJECTS_DATA, OFFICIAL_BROCHURES } from '../data/mockData';
import { Project, OfficialBrochure } from '../types';
import { BrochureViewerModal } from '../components/BrochureViewerModal';

interface ViviendaLandingPageProps {
  onNavigateToProyectos: (query?: string) => void;
  onOpenProjectModal: (project: Project) => void;
  onAskAI: (query: string) => void;
}

export const ViviendaLandingPage: React.FC<ViviendaLandingPageProps> = ({
  onNavigateToProyectos,
  onOpenProjectModal,
  onAskAI
}) => {
  const [carouselPlaying, setCarouselPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedBrochureLocation, setSelectedBrochureLocation] = useState<string>('Todas');
  const [activeBrochure, setActiveBrochure] = useState<OfficialBrochure | null>(null);

  const brochureLocations = useMemo(
    () => Array.from(new Set(OFFICIAL_BROCHURES.map((b) => b.location))),
    []
  );

  const filteredBrochures = useMemo(
    () =>
      selectedBrochureLocation === 'Todas'
        ? OFFICIAL_BROCHURES
        : OFFICIAL_BROCHURES.filter((b) => b.location === selectedBrochureLocation),
    [selectedBrochureLocation]
  );

  const heroSlides = [
    {
      title: 'Vivienda VIS Colsubsidio: donde nace tu hogar',
      subtitle: 'Habita espacios diseñados para tus sueños en Bogotá y Cundinamarca con subsidios de hasta 30 SMMLV.',
      cta: 'Conoce más',
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      badge: 'Nuevas Entregas 2026'
    },
    {
      title: 'El impulso que necesitas para estrenar casa propia',
      subtitle: 'Acompañamiento integral, ahorro programado y tasas de crédito especiales para afiliados Colsubsidio.',
      cta: 'Simular Subsidio',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
      badge: 'Subsidio hasta $43M'
    }
  ];

  return (
    <div className="w-full font-sans bg-white text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100/80 border-b border-gray-200/60 py-2.5 px-4 sm:px-8 text-xs font-medium text-gray-600">
        <div className="max-w-7xl mx-auto flex items-center space-x-2">
          <span className="hover:underline cursor-pointer text-[#003DA5]">Inicio</span>
          <span>/</span>
          <span className="font-bold text-gray-900">Vivienda Colsubsidio</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#FFFDF0] via-[#FFFDF5] to-white py-8 sm:py-14 px-4 sm:px-8 border-b border-yellow-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFD200]/30 text-gray-900 border border-[#FFD200] rounded-full text-xs font-bold">
              <Award size={14} className="text-[#003DA5]" />
              {heroSlides[currentSlide].badge}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#003DA5] leading-tight font-sans">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavigateToProyectos()}
                className="bg-[#0f172a] hover:bg-black text-white font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm shadow-md transition-all hover:scale-105"
              >
                {heroSlides[currentSlide].cta}
              </button>

              <button
                onClick={() => onAskAI("¿Cómo aplico al subsidio VIS Colsubsidio?")}
                className="bg-white hover:bg-yellow-50 text-[#003DA5] border-2 border-[#003DA5] font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <Calculator size={16} />
                Consultar Subsidio VIS
              </button>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src={heroSlides[currentSlide].imageUrl}
                alt="Familia estrenando vivienda Colsubsidio"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-sm border border-yellow-200">
                  <p className="text-xs font-black text-[#003DA5]">Familia Colsubsidio</p>
                  <p className="text-xs text-gray-700 mt-0.5">"Logramos el sueño de tener apartamento propio con el subsidio de la caja."</p>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="mt-4 flex items-center justify-between px-2">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCarouselPlaying(!carouselPlaying)}
                  className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  title={carouselPlaying ? 'Pausar carrusel' : 'Reproducir carrusel'}
                >
                  {carouselPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <div className="flex space-x-1.5">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        currentSlide === idx ? 'w-7 bg-[#003DA5]' : 'w-2.5 bg-gray-300'
                      }`}
                    ></button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-1">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                  className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 text-gray-700"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
                  className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 text-gray-700"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Nuestros proyectos */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#003DA5]">Catálogo de Inmuebles</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">Nuestros proyectos</h2>
            <p className="text-sm text-gray-600 max-w-2xl mt-1">
              Encuentra el hogar perfecto para ti y tu familia en más de 80 proyectos en Bogotá y los principales municipios de Cundinamarca.
            </p>
          </div>

          <button
            onClick={() => onNavigateToProyectos()}
            className="bg-[#0f172a] hover:bg-black text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 transition-all self-start md:self-auto hover:scale-105"
          >
            <span>Conoce los proyectos</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* SECTION 3: Grid / Carousel of category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORY_CARDS.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onNavigateToProyectos(cat.linkQuery)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col relative"
            >
              {cat.badge && (
                <div className="absolute top-3 left-3 z-10 bg-gray-900 text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <ShieldCheck size={12} className="text-[#FFD200]" />
                  {cat.badge}
                </div>
              )}

              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={cat.imageUrl}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-bold text-gray-900 text-base group-hover:text-[#003DA5] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{cat.subtitle}</p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#003DA5]">
                  <span>Ver proyectos</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3.5: Catálogo Oficial de Brochures (material real compartido por Colsubsidio) */}
      <section className="py-14 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 border-b border-gray-100 pb-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#003DA5]">
              <BookOpen size={14} />
              Material Oficial Colsubsidio
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Catálogo oficial de brochures por proyecto
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mt-1">
              Consulta el brochure digital real de cada etapa y proyecto aprobado, organizado por ubicación. Se abre en una pestaña nueva.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 self-start bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-3 py-1.5 rounded-full shrink-0">
            <CheckCircle size={13} />
            {OFFICIAL_BROCHURES.length} proyectos aprobados
          </span>
        </div>

        {/* Location filter pills */}
        <div className="flex flex-wrap gap-2 mb-7">
          <button
            onClick={() => setSelectedBrochureLocation('Todas')}
            className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
              selectedBrochureLocation === 'Todas'
                ? 'bg-[#0f172a] text-white border-[#0f172a] shadow-sm'
                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
            }`}
          >
            Todas las ubicaciones
          </button>
          {brochureLocations.map((loc) => (
            <button
              key={loc}
              onClick={() => setSelectedBrochureLocation(loc)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                selectedBrochureLocation === loc
                  ? 'bg-[#0f172a] text-white border-[#0f172a] shadow-sm'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
              }`}
            >
              <MapPin size={12} className={selectedBrochureLocation === loc ? 'text-[#FFD200]' : 'text-[#003DA5]'} />
              {loc}
            </button>
          ))}
        </div>

        {/* Brochure cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedBrochureLocation}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filteredBrochures.map((brochure, idx) => (
              <motion.button
                key={brochure.id}
                onClick={() => setActiveBrochure(brochure)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(idx, 8) * 0.04, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="group text-left bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#FFD200] transition-shadow overflow-hidden flex flex-col"
              >
                {/* Animated "open catalog" illustration — CSS only, no external images */}
                <div className="relative h-36 w-full overflow-hidden bg-gradient-to-br from-slate-50 to-amber-50/70 flex items-center justify-center">
                  {/* Ambient decorative dots, echoing the RoleSelector motif */}
                  <span className="absolute top-4 left-6 w-1.5 h-1.5 rounded-full bg-[#FFD200]/60" />
                  <span className="absolute bottom-5 right-8 w-1 h-1 rounded-full bg-[#003DA5]/40" />
                  <span className="absolute top-6 right-10 w-1 h-1 rounded-full bg-[#003DA5]/30" />

                  <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase px-2 py-1 rounded-full shadow-sm z-10">
                    <CheckCircle size={11} />
                    {brochure.status}
                  </span>

                  {/* Stacked "book" made of layered pages, subtle idle sway + hover fan-out */}
                  <div className="relative w-14 h-16 group-hover:scale-105 transition-transform duration-300">
                    <div className="animate-brochure-page-a absolute inset-0 w-11 h-14 mx-auto bg-white border border-[#003DA5]/15 rounded-md shadow-sm group-hover:[transform:rotate(-14deg)_translateX(-7px)]" />
                    <div className="animate-brochure-page-b absolute inset-0 w-11 h-14 mx-auto bg-white border border-[#003DA5]/20 rounded-md shadow-sm group-hover:[transform:rotate(11deg)_translateX(6px)]" />
                    <div className="animate-brochure-cover absolute inset-0 w-11 h-14 mx-auto bg-[#003DA5] rounded-md shadow-md flex items-center justify-center">
                      <BookOpen size={18} className="text-[#FFD200]" />
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-4 flex-1">
                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003DA5] flex items-center gap-1">
                      <MapPin size={11} />
                      {brochure.location}
                    </span>
                    <h3 className="font-display font-bold text-gray-900 text-base mt-0.5 group-hover:text-[#003DA5] transition-colors">
                      {brochure.project}
                    </h3>
                  </div>

                  <span className="inline-flex items-center justify-center gap-1.5 bg-gray-100 group-hover:bg-[#0f172a] text-gray-700 group-hover:text-white font-bold text-xs py-2.5 rounded-xl transition-colors">
                    Ver brochure digital
                    <ExternalLink size={13} />
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* SECTION 4: Más opciones para ti */}
      <section className="bg-gray-50 py-12 px-4 sm:px-8 border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#003DA5]">Soluciones Financieras</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">Más opciones para ti</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dark Highlighted Card for Créditos de Vivienda */}
            <div className="bg-[#0f172a] text-white rounded-3xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 opacity-10 text-white">
                <Building2 size={180} />
              </div>

              <div className="space-y-4 relative z-10">
                <span className="bg-[#FFD200] text-gray-900 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                  Tasa Especial
                </span>
                <h3 className="text-xl font-bold text-white">Créditos de vivienda Colsubsidio</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Financia hasta el 70% del valor de tu inmueble con tasas de interés reducidas para afiliados y plazos cómodos de 5 a 20 años.
                </p>
              </div>

              <div className="pt-6 relative z-10">
                <button
                  onClick={() => onAskAI("Quiero simular un crédito de vivienda Colsubsidio")}
                  className="w-full bg-[#FFD200] hover:bg-[#f3ca00] text-gray-900 font-bold py-3 px-5 rounded-full text-xs transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Conoce más</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Option 2: Subsidio Familiar */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#003DA5] flex items-center justify-center font-bold">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Subsidio Familiar de Vivienda</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Aporte no reembolsable en dinero para familias con ingresos menores a 4 SMMLV. Aplica para vivienda nueva VIS.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onAskAI("¿Cuáles son los requisitos del Subsidio Familiar de Vivienda Colsubsidio?")}
                  className="text-xs font-bold text-[#003DA5] hover:underline flex items-center gap-1"
                >
                  <span>Ver requisitos y montos</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Option 3: Ahorro Programado */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Calculator size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Ahorro Programado y Cesantías</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Planifica tu cuota inicial sumando tus ahorro mensual, cesantías y subsidio de vivienda para asegurar tu nuevo apartamento.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onAskAI("¿Cómo sumar mis cesantías para la cuota inicial?")}
                  className="text-xs font-bold text-[#003DA5] hover:underline flex items-center gap-1"
                >
                  <span>Aprende a planificar</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure viewer: stays inside the app, iframe-embedded */}
      <BrochureViewerModal brochure={activeBrochure} onClose={() => setActiveBrochure(null)} />
    </div>
  );
};
