import React from 'react';
import { Search, MessageCircle, Target, Briefcase, Sparkles, ArrowRight } from 'lucide-react';

interface RoleSelectorProps {
  onSelectRole: (role: 'buyer' | 'advisor') => void;
}

/** Blueprint-style building sketch, echoing the Colsubsidio storefront illustration */
const BuildingSketch: React.FC = () => (
  <svg viewBox="0 0 200 120" fill="none" className="w-full h-full">
    <g stroke="#003DA5" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" opacity="0.55">
      <path d="M14 96 L14 54 L58 32 L102 54 L102 96 Z" />
      <path d="M102 96 L102 44 L152 22 L188 44 L188 96 Z" />
      <path d="M58 32 L58 12 L58 12" />
      <rect x="30" y="66" width="14" height="14" />
      <rect x="50" y="66" width="14" height="14" />
      <rect x="72" y="78" width="16" height="18" />
      <rect x="118" y="58" width="12" height="12" />
      <rect x="138" y="58" width="12" height="12" />
      <rect x="158" y="58" width="12" height="12" />
      <rect x="118" y="76" width="12" height="12" />
      <rect x="138" y="76" width="12" height="12" />
      <rect x="158" y="76" width="12" height="12" />
      <line x1="6" y1="96" x2="196" y2="96" />
      <path d="M6 54 L18 46 L18 96" opacity="0.4" />
    </g>
  </svg>
);

/** Laurel / achievement badge motif, echoing the ratings badge collage */
const BadgeEmblem: React.FC = () => (
  <svg viewBox="0 0 200 120" fill="none" className="w-full h-full">
    <g opacity="0.6">
      <circle cx="100" cy="58" r="26" stroke="#FFD200" strokeWidth="2" />
      <circle cx="100" cy="58" r="18" stroke="#FFD200" strokeWidth="1.2" opacity="0.7" />
      <path d="M92 58 L98 64 L110 50" stroke="#FFD200" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* laurel leaves */}
      {[...Array(6)].map((_, i) => (
        <path
          key={`l-${i}`}
          d={`M${70 - i * 3} ${50 + i * 6} q-8 2 -10 9`}
          stroke="#FFD200"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.5"
        />
      ))}
      {[...Array(6)].map((_, i) => (
        <path
          key={`r-${i}`}
          d={`M${130 + i * 3} ${50 + i * 6} q8 2 10 9`}
          stroke="#FFD200"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.5"
        />
      ))}
      {/* scattered dots, evoking the floral/bird collage texture */}
      <circle cx="34" cy="26" r="2" fill="#FFD200" opacity="0.5" />
      <circle cx="166" cy="20" r="2.5" fill="#FFD200" opacity="0.4" />
      <circle cx="26" cy="90" r="2" fill="#FFD200" opacity="0.4" />
      <circle cx="174" cy="92" r="2" fill="#FFD200" opacity="0.5" />
      <path d="M20 46 q10 -8 18 0" stroke="#FFD200" strokeWidth="1.2" opacity="0.35" />
      <path d="M162 66 q10 -8 18 0" stroke="#FFD200" strokeWidth="1.2" opacity="0.35" />
    </g>
  </svg>
);

export const RoleSelector: React.FC<RoleSelectorProps> = ({ onSelectRole }) => {
  return (
    <div
      className="min-h-screen w-full font-sans flex flex-col"
      style={{
        background: 'linear-gradient(160deg, #FFFDF5 0%, #FFF6D8 42%, #FFEDA8 68%, #F5F6F8 100%)',
      }}
    >
      {/* Institutional top bar, consistent with both sub-apps */}
      <div className="bg-[#003DA5] text-white text-[11px] py-1.5 px-4 sm:px-8 flex justify-center sm:justify-between items-center tracking-wide">
        <span className="hidden sm:inline">Caja de Compensación Familiar Colsubsidio</span>
        <span>Vigilado SuperSubsidios</span>
      </div>

      {/* Header with logo */}
      <div className="px-4 sm:px-8 py-6 flex items-center justify-center sm:justify-start">
        <div className="flex items-center space-x-2.5">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute w-7 h-7 bg-[#FFD200] transform rotate-45 rounded-sm"></div>
            <div className="absolute w-4 h-4 bg-[#003DA5] transform rotate-45 translate-x-1.5 translate-y-1.5 rounded-sm"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-[#003DA5] leading-none">
              Colsubsidio
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Vivienda · Lead Intelligence
            </span>
          </div>
        </div>
      </div>

      {/* Main selector content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-8 pb-16">
        <div className="max-w-4xl w-full text-center space-y-10">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/70 text-slate-900 border border-[#FFD200] rounded-full text-xs font-bold backdrop-blur-sm">
              <Sparkles size={14} className="text-[#003DA5]" />
              Plataforma inteligente de vivienda
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              ¿Cómo quieres continuar?
            </h1>
            <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto">
              Elige tu perfil para llevarte a la experiencia diseñada para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Comprador card */}
            <button
              onClick={() => onSelectRole('buyer')}
              className="group text-left bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#003DA5] transition-all overflow-hidden flex flex-col"
            >
              {/* Gradient banner echoing the Colsubsidio hero illustration */}
              <div
                className="h-28 w-full relative overflow-hidden"
                style={{ background: 'linear-gradient(120deg, #FFFDF0 0%, #FFE9A0 55%, #FFD200 100%)' }}
              >
                <div className="absolute inset-0">
                  <BuildingSketch />
                </div>
              </div>

              <div className="p-8 pt-6 flex flex-col gap-5 flex-1">
                <h2 className="text-xl font-black text-slate-900">Soy Comprador</h2>
                <div className="flex flex-wrap gap-2 text-[11px] text-slate-500">
                  <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full">
                    <Search size={12} /> Proyectos y precios
                  </span>
                  <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full">
                    <MessageCircle size={12} /> Asistente IA
                  </span>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-[#003DA5]">
                  Entrar como comprador
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </button>

            {/* Asesor card */}
            <button
              onClick={() => onSelectRole('advisor')}
              className="group text-left bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#003DA5] transition-all overflow-hidden flex flex-col"
            >
              {/* Institutional blue gradient banner echoing the achievement-badge collage */}
              <div
                className="h-28 w-full relative overflow-hidden"
                style={{ background: 'linear-gradient(120deg, #002B75 0%, #003DA5 55%, #0057D8 100%)' }}
              >
                <div className="absolute inset-0">
                  <BadgeEmblem />
                </div>
              </div>

              <div className="p-8 pt-6 flex flex-col gap-5 flex-1">
                <h2 className="text-xl font-black text-slate-900">Soy Asesor Comercial</h2>
                <div className="flex flex-wrap gap-2 text-[11px] text-slate-500">
                  <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full">
                    <Briefcase size={12} /> Pipeline comercial
                  </span>
                  <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full">
                    <Target size={12} /> Score 360
                  </span>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-[#003DA5]">
                  Entrar como asesor
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
