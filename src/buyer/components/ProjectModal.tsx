import React, { useState } from 'react';
import { X, Building2, MapPin, CheckCircle, Calculator, Bot, Sparkles, PhoneCall, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onAskAI: (query: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onAskAI }) => {
  if (!project) return null;

  const [familyIncome, setFamilyIncome] = useState<number>(2600000); // 2 SMMLV approx
  const [savings, setSavings] = useState<number>(15000000);

  // Calculate estimated VIS subsidy
  let estimatedSubsidy = 0;
  if (project.subsidioVisEligible) {
    if (familyIncome <= 2600000) {
      estimatedSubsidy = 39000000; // 30 SMMLV
    } else if (familyIncome <= 5200000) {
      estimatedSubsidy = 26000000; // 20 SMMLV
    }
  }

  const remainingBalance = Math.max(0, project.priceFrom - estimatedSubsidy - savings);
  const estimatedMonthlyQuota = Math.round((remainingBalance * 0.009) / (1 - Math.pow(1 + 0.009, -240))); // 20 years

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200 border border-gray-100 font-sans">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 shadow-md text-gray-700 hover:text-black flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Modal Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-[#FFD200] text-gray-900 text-xs font-black px-3 py-1 rounded-full uppercase">
                {project.region}
              </span>
              {project.subsidioVisEligible && (
                <span className="bg-[#E91E63] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle size={12} /> {project.badge || 'Subsidio VIS'}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">{project.name}</h2>
            <p className="text-sm text-gray-200 flex items-center gap-1 mt-1">
              <MapPin size={15} className="text-[#FFD200]" /> {project.address} ({project.city})
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-gray-800">
          {/* Main Info Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-100 text-center">
              <p className="text-[11px] text-gray-500 font-bold uppercase">Precio desde</p>
              <p className="text-lg font-black text-[#003DA5]">{project.priceFormatted}</p>
            </div>
            <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-100 text-center">
              <p className="text-[11px] text-gray-500 font-bold uppercase">Área construida</p>
              <p className="text-lg font-black text-[#003DA5]">{project.areaFormatted}</p>
            </div>
            <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-100 text-center">
              <p className="text-[11px] text-gray-500 font-bold uppercase">Distribución</p>
              <p className="text-sm font-bold text-gray-800 mt-1">{project.bedrooms}</p>
            </div>
            <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-100 text-center">
              <p className="text-[11px] text-gray-500 font-bold uppercase">Entrega</p>
              <p className="text-sm font-bold text-gray-800 mt-1 flex items-center justify-center gap-1">
                <Calendar size={13} className="text-[#003DA5]" /> {project.deliveryDate || '2026'}
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-bold text-gray-900 text-base mb-2">Descripción del Proyecto</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          {/* Amenities & Features */}
          <div>
            <h3 className="font-bold text-gray-900 text-base mb-3">Zonas Comunes y Amenidades</h3>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feat, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1.5 border border-gray-200"
                >
                  <CheckCircle size={13} className="text-[#003DA5]" /> {feat}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Subsidy Calculator for this Project */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-5 rounded-2xl border border-amber-200/80 space-y-4">
            <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
              <Calculator className="text-[#003DA5]" size={20} />
              <h4>Simulador Rápido de Cuota e Impulso VIS ({project.name})</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Ingreso Familiar Mensual (COP):
                </label>
                <select
                  value={familyIncome}
                  onChange={(e) => setFamilyIncome(Number(e.target.value))}
                  className="w-full p-2.5 bg-white border border-gray-300 rounded-xl font-bold text-gray-800"
                >
                  <option value={2000000}>$2.000.000 (Hasta 2 SMMLV - Subsidio Alto)</option>
                  <option value={2600000}>$2.600.000 (2 SMMLV - Subsidio $39M)</option>
                  <option value={4000000}>$4.000.000 (Hasta 4 SMMLV - Subsidio $26M)</option>
                  <option value={6000000}>$6.000.000 (&gt;4 SMMLV - Sin Subsidio VIS)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Ahorro previo / Cesantías (COP):
                </label>
                <input
                  type="number"
                  step={1000000}
                  value={savings}
                  onChange={(e) => setSavings(Number(e.target.value))}
                  className="w-full p-2.5 bg-white border border-gray-300 rounded-xl font-bold text-gray-800"
                />
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="bg-white p-4 rounded-xl border border-amber-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
              <div>
                <span className="text-gray-500 font-bold block">Subsidio Colsubsidio:</span>
                <span className="text-sm font-black text-green-600">
                  ${estimatedSubsidy.toLocaleString('es-CO')}
                </span>
              </div>
              <div>
                <span className="text-gray-500 font-bold block">Crédito Hipotecario:</span>
                <span className="text-sm font-black text-[#003DA5]">
                  ${remainingBalance.toLocaleString('es-CO')}
                </span>
              </div>
              <div>
                <span className="text-gray-500 font-bold block">Cuota Mensual Est.:</span>
                <span className="text-sm font-black text-amber-600">
                  ${estimatedMonthlyQuota.toLocaleString('es-CO')} /mes
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                onClose();
                onAskAI(`Hola, quiero más información detallada del proyecto ${project.name} en ${project.city} y simular mi crédito.`);
              }}
              className="flex-1 bg-[#003DA5] hover:bg-[#002878] text-white font-bold py-3 px-4 rounded-full text-xs shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <Bot size={16} className="text-[#FFD200]" />
              Preguntar al Asistente IA sobre {project.name}
            </button>

            <button
              onClick={() => {
                onClose();
                onAskAI(`Quiero solicitar una cita telefónica o asesoría para comprar en ${project.name}`);
              }}
              className="bg-[#FFD200] hover:bg-[#f3ca00] text-gray-900 font-bold py-3 px-6 rounded-full text-xs shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <PhoneCall size={16} />
              Solicitar Asesoría
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
