import React, { useState } from 'react';
import { Pencil, FileText, Search, ChevronDown, User, ShieldCheck, Accessibility } from 'lucide-react';

interface NavbarProps {
  currentPath: string; // '/vivienda' | '/vivienda/proyectos'
  onNavigate: (path: string) => void;
  onOpenChat: (query?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenChat }) => {
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [showVirtualMenu, setShowVirtualMenu] = useState(false);

  return (
    <header className="w-full font-sans sticky top-0 z-40 shadow-sm bg-white">
      {/* 1. Fine top bar institutional blue */}
      <div className="bg-[#003DA5] text-white text-[11px] py-1 px-4 sm:px-8 flex justify-between items-center tracking-wide">
        <div className="flex items-center space-x-4">
          <span>Caja de Compensación Familiar Colsubsidio</span>
          <span className="hidden md:inline text-blue-200">|</span>
          <span className="hidden md:inline">Vigilado SuperSubsidios</span>
        </div>
        <div className="flex items-center space-x-4 text-blue-100">
          <button onClick={() => onOpenChat("¿Cómo me afilio a Colsubsidio?")} className="hover:underline flex items-center gap-1">
            <User size={12} /> Portal Afiliados
          </button>
          <button onClick={() => onOpenChat("Atención al cliente y contactos")} className="hover:underline flex items-center gap-1">
            <ShieldCheck size={12} /> Te escuchamos
          </button>
        </div>
      </div>

      {/* 2. White Segment bar */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-8 py-0 flex flex-wrap justify-between items-center text-xs font-medium">
        <div className="flex items-center">
          <button className="bg-[#FFD200] text-gray-900 font-bold px-5 py-2.5 rounded-t-md shadow-inner flex items-center gap-1">
            Personas
          </button>
          <button className="text-gray-500 hover:text-gray-900 px-5 py-2.5 font-medium transition-colors">
            Empresas
          </button>
        </div>

        <div className="flex items-center space-x-4 py-2 text-gray-700">
          <button 
            onClick={() => onOpenChat("Quiero personalizar mi experiencia")}
            className="flex items-center gap-1.5 hover:text-[#003DA5] transition-colors"
          >
            <Pencil size={13} className="text-[#003DA5]" />
            <span className="hidden sm:inline">Personalizar</span>
          </button>

          {/* Accesibilidad with Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowAccessibilityMenu(!showAccessibilityMenu)}
              className="flex items-center gap-1 hover:text-[#003DA5] transition-colors"
            >
              <Accessibility size={14} className="text-[#003DA5]" />
              <span className="font-semibold">A+</span>
              <span className="hidden sm:inline">Accesibilidad</span>
              <ChevronDown size={12} />
            </button>

            {showAccessibilityMenu && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-xl border border-gray-100 p-3 z-50 text-xs">
                <p className="font-bold text-gray-900 mb-2">Opciones de accesibilidad</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Tamaño de texto:</span>
                    <div className="flex gap-1">
                      <button 
                        onClick={() => setFontSize('normal')} 
                        className={`px-2 py-0.5 rounded border ${fontSize === 'normal' ? 'bg-[#003DA5] text-white' : 'bg-gray-50'}`}
                      >
                        A
                      </button>
                      <button 
                        onClick={() => setFontSize('large')} 
                        className={`px-2 py-0.5 rounded border ${fontSize === 'large' ? 'bg-[#003DA5] text-white' : 'bg-gray-50'}`}
                      >
                        A+
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => setHighContrast(!highContrast)} 
                    className="w-full text-left px-2 py-1 bg-gray-50 hover:bg-gray-100 rounded flex justify-between items-center"
                  >
                    <span>Alto Contraste</span>
                    <span className="text-[10px] text-gray-500">{highContrast ? 'ON' : 'OFF'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <a 
            href="#transparencia" 
            onClick={(e) => { e.preventDefault(); onOpenChat("Información de transparencia Colsubsidio"); }}
            className="flex items-center gap-1.5 hover:text-[#003DA5] transition-colors"
          >
            <FileText size={13} className="text-[#003DA5]" />
            <span className="hidden sm:inline">Transparencia</span>
          </a>

          <button 
            onClick={() => onNavigate('/vivienda/proyectos')}
            className="flex items-center gap-1.5 hover:text-[#003DA5] transition-colors"
          >
            <Search size={13} className="text-[#003DA5]" />
            <span className="hidden sm:inline">Buscar</span>
          </button>
        </div>
      </div>

      {/* 3. Main Header */}
      <div className="px-4 sm:px-8 py-3 flex justify-between items-center border-b border-gray-100">
        {/* Logo */}
        <div 
          onClick={() => onNavigate('/vivienda')} 
          className="flex items-center space-x-2.5 cursor-pointer group"
        >
          {/* Geometric Diamond Logo Colsubsidio */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute w-6 h-6 bg-[#FFD200] transform rotate-45 rounded-sm group-hover:scale-105 transition-transform"></div>
            <div className="absolute w-4 h-4 bg-[#003DA5] transform rotate-45 translate-x-1.5 translate-y-1.5 rounded-sm"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-[#003DA5] font-sans leading-none">
              Colsubsidio
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Vivienda
            </span>
          </div>
        </div>

        {/* Header Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-gray-700">
          <button onClick={() => onOpenChat("¿Necesitas ayuda con tu proyecto?")} className="hover:text-[#003DA5] transition-colors">
            Te ayudamos
          </button>
          <button onClick={() => onOpenChat("¿Dónde hay centros de servicio Colsubsidio?")} className="hover:text-[#003DA5] transition-colors">
            Encuéntranos
          </button>
          <button onClick={() => onNavigate('/vivienda/proyectos')} className="hover:text-[#003DA5] transition-colors">
            Compra en línea
          </button>
          <button onClick={() => onOpenChat("¿Cómo me afilio para el subsidio de vivienda?")} className="hover:text-[#003DA5] transition-colors">
            Afiliaciones
          </button>
          <button onClick={() => onOpenChat("Beneficios de la caja Colsubsidio")} className="hover:text-[#003DA5] transition-colors">
            Beneficios
          </button>

          {/* Yellow Pill CTA */}
          <div className="relative">
            <button 
              onClick={() => setShowVirtualMenu(!showVirtualMenu)}
              className="bg-[#FFD200] hover:bg-[#f3ca00] text-gray-900 font-bold px-5 py-2.5 rounded-full shadow-sm flex items-center gap-1.5 transition-all text-xs uppercase tracking-wide"
            >
              Colsubsidio virtual ▾
            </button>
            {showVirtualMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 text-xs">
                <a href="#ingreso" onClick={(e) => { e.preventDefault(); onOpenChat("Ingreso a portal virtual"); }} className="block px-4 py-2 hover:bg-gray-50 font-medium">
                  🔑 Portal Transaccional Afiliados
                </a>
                <a href="#credito" onClick={(e) => { e.preventDefault(); onOpenChat("Solicitud de crédito virtual"); }} className="block px-4 py-2 hover:bg-gray-50 font-medium">
                  💳 Solicitud de Crédito
                </a>
                <a href="#subsidio" onClick={(e) => { e.preventDefault(); onOpenChat("Estado de mi subsidio de vivienda"); }} className="block px-4 py-2 hover:bg-gray-50 font-medium">
                  🏡 Consultar Estado de Subsidio
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4. Dark Nav Bar */}
      <nav className="bg-[#0f172a] text-white px-4 sm:px-8 py-0 overflow-x-auto scrollbar-none">
        <ul className="flex items-center space-x-1 sm:space-x-3 text-xs sm:text-sm font-medium whitespace-nowrap">
          <li>
            <button onClick={() => onOpenChat("Servicios de Salud Colsubsidio")} className="px-3 py-3 hover:bg-white/10 transition-colors rounded-none block text-gray-300 hover:text-white">
              Salud
            </button>
          </li>
          <li>
            <button onClick={() => onOpenChat("Información de Subsidios Colsubsidio")} className="px-3 py-3 hover:bg-white/10 transition-colors rounded-none block text-gray-300 hover:text-white">
              Subsidios
            </button>
          </li>
          {/* Active Navigation tab: Vivienda */}
          <li>
            <div className="relative group">
              <button 
                onClick={() => onNavigate('/vivienda')}
                className={`px-4 py-3 font-bold border-b-2 transition-colors flex items-center gap-1 ${
                  currentPath === '/vivienda' || currentPath === '/vivienda/proyectos'
                    ? 'border-[#FFD200] text-[#FFD200] bg-white/5'
                    : 'border-transparent text-white hover:bg-white/10'
                }`}
              >
                Vivienda
                <ChevronDown size={12} />
              </button>

              {/* Submenu for Vivienda */}
              <div className="hidden group-hover:block absolute left-0 top-full bg-[#1e293b] text-white rounded-b-lg shadow-2xl py-2 w-56 z-50 border-t border-[#FFD200]">
                <button 
                  onClick={() => onNavigate('/vivienda')}
                  className={`w-full text-left px-4 py-2 text-xs hover:bg-[#334155] ${currentPath === '/vivienda' ? 'text-[#FFD200] font-bold' : ''}`}
                >
                  Inicio Vivienda
                </button>
                <button 
                  onClick={() => onNavigate('/vivienda/proyectos')}
                  className={`w-full text-left px-4 py-2 text-xs hover:bg-[#334155] ${currentPath === '/vivienda/proyectos' ? 'text-[#FFD200] font-bold' : ''}`}
                >
                  Proyectos de Vivienda
                </button>
                <button 
                  onClick={() => onOpenChat("Subsidio familiar de vivienda")}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-[#334155] text-gray-300"
                >
                  Subsidio VIS
                </button>
                <button 
                  onClick={() => onOpenChat("Crédito hipotecario")}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-[#334155] text-gray-300"
                >
                  Créditos de vivienda
                </button>
              </div>
            </div>
          </li>
          <li>
            <button onClick={() => onOpenChat("Créditos de libre inversión y vivienda")} className="px-3 py-3 hover:bg-white/10 transition-colors block text-gray-300 hover:text-white">
              Créditos
            </button>
          </li>
          <li>
            <button onClick={() => onOpenChat("Seguros Colsubsidio")} className="px-3 py-3 hover:bg-white/10 transition-colors block text-gray-300 hover:text-white">
              Seguros
            </button>
          </li>
          <li>
            <button onClick={() => onOpenChat("Centros deportivos")} className="px-3 py-3 hover:bg-white/10 transition-colors block text-gray-300 hover:text-white">
              Deportes
            </button>
          </li>
          <li>
            <button onClick={() => onOpenChat("Hoteles y turismo Colsubsidio")} className="px-3 py-3 hover:bg-white/10 transition-colors block text-gray-300 hover:text-white">
              Turismo
            </button>
          </li>
          <li>
            <button onClick={() => onOpenChat("Parques de recreación")} className="px-3 py-3 hover:bg-white/10 transition-colors block text-gray-300 hover:text-white">
              Recreación
            </button>
          </li>
          <li>
            <button onClick={() => onOpenChat("Colegios y educación")} className="px-3 py-3 hover:bg-white/10 transition-colors block text-gray-300 hover:text-white">
              Educación
            </button>
          </li>
          <li>
            <button onClick={() => onOpenChat("Otros servicios Colsubsidio")} className="px-3 py-3 hover:bg-white/10 transition-colors block text-gray-300 hover:text-white">
              Otros servicios
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
