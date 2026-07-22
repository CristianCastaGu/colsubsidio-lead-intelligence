import React, { useState } from 'react';
import { X, UserPlus, ShieldCheck, Building2, Sparkles } from 'lucide-react';
import { Lead, HousingCategory, HousingProject } from '../../types';

interface NuevoLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveLead: (newLead: Partial<Lead>) => void;
  projects: HousingProject[];
}

export const NuevoLeadModal: React.FC<NuevoLeadModalProps> = ({
  isOpen,
  onClose,
  onSaveLead,
  projects,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Bogotá D.C.');
  const [housingInterest, setHousingInterest] = useState<HousingCategory>('VIS');
  const [budgetCOP, setBudgetCOP] = useState(180000000);
  const [colsubsidioAfiliado, setColsubsidioAfiliado] = useState(true);
  const [afiliacionCategoria, setAfiliacionCategoria] = useState<'Cat A' | 'Cat B' | 'Cat C' | 'No Afiliado'>('Cat B');
  const [recommendedProjectId, setRecommendedProjectId] = useState(projects[0]?.id || 'proj-1');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    onSaveLead({
      name,
      phone: phone.startsWith('+57') ? phone : `+57 ${phone}`,
      email: email || `${name.toLowerCase().replace(/\s+/g, '.')}@gmail.com`,
      city,
      channel: 'Captura Manual Asesor',
      campaign: 'Atención Directa Sala / Teléfono',
      status: 'Nuevo',
      temperature: 'Hot',
      housingInterest,
      budgetCOP: Number(budgetCOP),
      downPaymentCOP: Math.round(Number(budgetCOP) * 0.15),
      colsubsidioAfiliado,
      afiliacionCategoria: colsubsidioAfiliado ? afiliacionCategoria : 'No Afiliado',
      hasCajaSubsidio: colsubsidioAfiliado && housingInterest === 'VIS',
      hasMiCasaYa: housingInterest === 'VIS',
      recommendedProjectId,
      matchPercentage: 94,
      scores: {
        fit: 90,
        intent: 92,
        engagement: 88,
        conversion: 90,
        total: 90
      },
      priority: 'Muy Alta',
      priorityRationale: 'Lead registrado manualmente por asesor con interés inmediato en cotización de vivienda.',
      assignedAdvisor: 'Carlos Rodríguez',
      createdAt: 'Hace un momento',
      lastInteraction: 'Hace un momento',
      behaviorLogs: [
        {
          timestamp: 'Justo ahora',
          action: 'Registro Manual',
          details: 'Capturado por Asesor Comercial en Sala / Teléfono',
          device: 'CRM Desktop'
        }
      ]
    });

    // Reset and close
    setName('');
    setPhone('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-[#003DA5] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-[#FFD200]" />
            <h2 className="font-extrabold text-sm">Registrar Nuevo Lead • Colsubsidio Vivienda</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-800 block mb-1">Nombre Completo del Cliente *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Paula Andrea Bermúdez"
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-800 block mb-1">Teléfono Móvil (WhatsApp) *</label>
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ej. 312 456 7890"
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 font-medium"
              />
            </div>
          </div>

          {/* Email & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-800 block mb-1">Correo Electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@correo.com"
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 font-medium"
              />
            </div>

            <div>
              <label className="font-bold text-slate-800 block mb-1">Municipio de Residencia</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ej. Soacha / Bogotá / Cajicá"
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 font-medium"
              />
            </div>
          </div>

          {/* Colsubsidio Affiliation */}
          <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-[#003DA5] flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={colsubsidioAfiliado}
                  onChange={(e) => setColsubsidioAfiliado(e.target.checked)}
                  className="rounded border-blue-300 text-[#003DA5] focus:ring-[#003DA5]"
                />
                <span>¿Es afiliado a la Caja Colsubsidio?</span>
              </label>

              {colsubsidioAfiliado && (
                <select
                  value={afiliacionCategoria}
                  onChange={(e) => setAfiliacionCategoria(e.target.value as any)}
                  className="bg-white border border-blue-300 text-xs font-bold text-[#003DA5] rounded px-2 py-1"
                >
                  <option value="Cat A">Categoría A (&lt; 2 SMMLV)</option>
                  <option value="Cat B">Categoría B (2 a 4 SMMLV)</option>
                  <option value="Cat C">Categoría C (&gt; 4 SMMLV)</option>
                </select>
              )}
            </div>
          </div>

          {/* Housing Category & Project Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-800 block mb-1">Tipo de Vivienda de Interés</label>
              <select
                value={housingInterest}
                onChange={(e) => setHousingInterest(e.target.value as HousingCategory)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20"
              >
                <option value="VIS">VIS (Vivienda Interés Social)</option>
                <option value="No VIS">No VIS (Libre Inversión)</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-800 block mb-1">Proyecto Sugerido</label>
              <select
                value={recommendedProjectId}
                onChange={(e) => setRecommendedProjectId(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20"
              >
                {projects.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.type})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="font-bold text-slate-800 block mb-1">Presupuesto Estimado (COP)</label>
            <input
              type="number"
              step="5000000"
              value={budgetCOP}
              onChange={(e) => setBudgetCOP(Number(e.target.value))}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-extrabold text-emerald-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20"
            />
          </div>

          {/* Submit */}
          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-slate-600 hover:text-slate-800 font-bold rounded-lg cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-[#003DA5] hover:bg-[#002B75] text-white px-5 py-2 rounded-lg font-extrabold shadow-xs transition-colors cursor-pointer"
            >
              Guardar y Calcular Score 360°
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
