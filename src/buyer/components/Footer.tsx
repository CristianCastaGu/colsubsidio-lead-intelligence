import React, { useState } from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

interface FooterProps {
  onOpenChat: (query?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenChat }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'work' | 'legal' | 'quick' | 'contact'>('about');

  return (
    <footer className="bg-[#0f172a] text-gray-300 font-sans border-t border-gray-800 pt-10 pb-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Tabs */}
        <div className="border-b border-gray-700 flex flex-wrap gap-2 sm:gap-6 text-xs sm:text-sm font-bold mb-8">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-3 px-1 border-b-2 transition-colors ${
              activeTab === 'about' ? 'border-[#FFD200] text-[#FFD200]' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Acerca de nosotros
          </button>
          <button
            onClick={() => setActiveTab('work')}
            className={`pb-3 px-1 border-b-2 transition-colors ${
              activeTab === 'work' ? 'border-[#FFD200] text-[#FFD200]' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Trabaja con nosotros
          </button>
          <button
            onClick={() => setActiveTab('legal')}
            className={`pb-3 px-1 border-b-2 transition-colors ${
              activeTab === 'legal' ? 'border-[#FFD200] text-[#FFD200]' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Legales
          </button>
          <button
            onClick={() => setActiveTab('quick')}
            className={`pb-3 px-1 border-b-2 transition-colors ${
              activeTab === 'quick' ? 'border-[#FFD200] text-[#FFD200]' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Accesos rápidos
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`pb-3 px-1 border-b-2 transition-colors ${
              activeTab === 'contact' ? 'border-[#FFD200] text-[#FFD200]' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Contáctanos
          </button>
        </div>

        {/* Dynamic Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-xs text-gray-400">
          {activeTab === 'about' && (
            <>
              <div>
                <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Nuestra Organización</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => onOpenChat("Quiénes somos")} className="hover:text-white">Quiénes somos</button></li>
                  <li><button onClick={() => onOpenChat("Nuestro impacto social")} className="hover:text-white">Nuestro impacto social</button></li>
                  <li><button onClick={() => onOpenChat("Perfil organizacional")} className="hover:text-white">Perfil organizacional</button></li>
                  <li><button onClick={() => onOpenChat("Informe de gestión y sostenibilidad")} className="hover:text-white">Gobierno Corporativo</button></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Líneas de Servicio</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => onOpenChat("Vivienda y Subsidios")} className="hover:text-white">Vivienda y Subsidios</button></li>
                  <li><button onClick={() => onOpenChat("Salud y Droguerías")} className="hover:text-white">Salud y Medicamentos</button></li>
                  <li><button onClick={() => onOpenChat("Educación y Colegios")} className="hover:text-white">Colegios y Universidad</button></li>
                  <li><button onClick={() => onOpenChat("Hoteles y Clubes")} className="hover:text-white">Hoteles y Clubes Campestres</button></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Compromiso Social</h4>
                <p className="leading-relaxed mb-3">
                  Caja de Compensación Familiar Colsubsidio, trabajando desde hace más de 65 años por el bienestar de los colombianos y sus familias.
                </p>
                <div className="flex items-center gap-2 text-white font-bold">
                  <ShieldCheck className="text-[#FFD200]" size={18} />
                  <span>Caja de Compensación vigilada SuperSubsidios</span>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Síguenos</h4>
                <div className="flex space-x-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#003DA5] cursor-pointer text-white">
                    <Facebook size={16} />
                  </span>
                  <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#003DA5] cursor-pointer text-white">
                    <Instagram size={16} />
                  </span>
                  <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#003DA5] cursor-pointer text-white">
                    <Youtube size={16} />
                  </span>
                  <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#003DA5] cursor-pointer text-white">
                    <Linkedin size={16} />
                  </span>
                </div>
              </div>
            </>
          )}

          {activeTab === 'legal' && (
            <div className="col-span-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-white font-bold text-sm mb-3">Políticas y Datos</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => onOpenChat("Política de tratamiento de datos personales")} className="hover:text-white">Política de Tratamiento de Datos Personales</button></li>
                  <li><button onClick={() => onOpenChat("Términos y condiciones")} className="hover:text-white">Términos y Condiciones de Uso</button></li>
                  <li><button onClick={() => onOpenChat("Aviso de privacidad")} className="hover:text-white">Aviso de Privacidad</button></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-3">Superintendencia</h4>
                <p className="leading-relaxed">
                  Superintendencia del Subsidio Familiar. Vigilado SuperSubsidios. Nit Colsubsidio: 860.007.336-1
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-3">Transparencia</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => onOpenChat("Línea ética")} className="hover:text-white">Línea Ética y Transparencia</button></li>
                  <li><button onClick={() => onOpenChat("Radicación de PQRS")} className="hover:text-white">Radicación PQRS</button></li>
                </ul>
              </div>
            </div>
          )}

          {(activeTab === 'work' || activeTab === 'quick' || activeTab === 'contact') && (
            <div className="col-span-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-white font-bold text-sm mb-3">Líneas de Atención Bogotá</h4>
                <p className="flex items-center gap-2 mb-2"><Phone size={14} className="text-[#FFD200]" /> (601) 745 7900</p>
                <p className="flex items-center gap-2 mb-2"><Phone size={14} className="text-[#FFD200]" /> Línea Nacional: 01 8000 91 0100</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-3">Atención Vivienda</h4>
                <p className="flex items-center gap-2 mb-2"><Mail size={14} className="text-[#FFD200]" /> servicioalcliente@colsubsidio.com</p>
                <p className="flex items-center gap-2"><MapPin size={14} className="text-[#FFD200]" /> Centro de Experiencia Vivienda: Calle 26 # 25-50, Bogotá</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-3">Horario de Atención</h4>
                <p>Lunes a Viernes: 8:00 a.m. a 5:00 p.m.</p>
                <p>Sábados: 8:00 a.m. a 12:00 m.</p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-500 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#FFD200] transform rotate-45 flex items-center justify-center rounded-xs">
              <div className="w-2.5 h-2.5 bg-[#003DA5]"></div>
            </div>
            <span className="text-gray-300 font-bold">Colsubsidio Vivienda © 2026</span>
            <span>— Todos los derechos reservados.</span>
          </div>
          <div className="flex gap-4">
            <button onClick={() => onOpenChat("Mapa del sitio")} className="hover:underline">Mapa del Sitio</button>
            <button onClick={() => onOpenChat("Accesibilidad web")} className="hover:underline">Accesibilidad Web</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
