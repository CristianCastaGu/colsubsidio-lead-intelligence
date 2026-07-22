import React, { useState } from 'react';
import { Settings, ShieldCheck, Database, Sliders, Bell, UserCheck, Save } from 'lucide-react';

export const ConfiguracionView: React.FC = () => {
  const [minHotScore, setMinHotScore] = useState(85);
  const [autoAssignRules, setAutoAssignRules] = useState('Rotación Equitativa por Asesor');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6 animate-fadeIn max-w-4xl">
      {/* HEADER SECTION */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-[#003DA5]" />
            <h1 className="text-lg font-bold text-slate-900">Configuración del Motor de Inteligencia</h1>
          </div>
          <p className="text-xs text-slate-500">
            Ajusta los umbrales de scoring, reglas de asignación comercial e integración con APIs de Colsubsidio.
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* SCORING THRESHOLDS */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
          <h2 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#003DA5]" />
            <span>Umbral para Clasificación de Hot Leads</span>
          </h2>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center">
              <label className="font-semibold text-slate-700">Score mínimo para etiqueta "Hot Lead 🔥":</label>
              <span className="font-extrabold text-[#003DA5] text-sm bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                {minHotScore} / 100
              </span>
            </div>

            <input
              type="range"
              min="70"
              max="95"
              value={minHotScore}
              onChange={(e) => setMinHotScore(Number(e.target.value))}
              className="w-full accent-[#003DA5] cursor-pointer"
            />
            <p className="text-[11px] text-slate-500">
              Leads con un Score 360° igual o superior a {minHotScore} detonarán notificaciones push urgentes a los asesores comerciales.
            </p>
          </div>
        </div>

        {/* TEAM ASSIGNMENT RULES */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
          <h2 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-[#003DA5]" />
            <span>Reglas de Asignación Automática</span>
          </h2>

          <div className="space-y-3 text-xs">
            <label className="font-semibold text-slate-700 block">Estrategia de Distribución de Leads:</label>
            <select
              value={autoAssignRules}
              onChange={(e) => setAutoAssignRules(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 cursor-pointer"
            >
              <option value="Rotación Equitativa por Asesor">Rotación Equitativa (Round Robin)</option>
              <option value="Por Especialización VIS vs No VIS">Especialidad por Categoria (VIS / No VIS)</option>
              <option value="Por Proyecto Asignado">Por Ubicación de Sala de Ventas</option>
            </select>
          </div>
        </div>

        {/* INTEGRATIONS & API KEYS */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
          <h2 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2 flex items-center gap-2">
            <Database className="w-4 h-4 text-[#003DA5]" />
            <span>Estado de Integraciones Colsubsidio</span>
          </h2>

          <div className="space-y-2 text-xs">
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between">
              <span className="font-bold text-emerald-900">API Subsidio Familiar de Vivienda (Colsubsidio)</span>
              <span className="text-[10px] bg-emerald-200 text-emerald-900 font-bold px-2 py-0.5 rounded">
                Conectado (Live)
              </span>
            </div>

            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between">
              <span className="font-bold text-emerald-900">API Mi Casa Ya (Ministerio de Vivienda)</span>
              <span className="text-[10px] bg-emerald-200 text-emerald-900 font-bold px-2 py-0.5 rounded">
                Conectado (Live)
              </span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
              <span className="font-bold text-slate-800">WhatsApp Business Cloud API</span>
              <span className="text-[10px] bg-blue-100 text-[#003DA5] font-bold px-2 py-0.5 rounded">
                Configurado
              </span>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="bg-[#003DA5] hover:bg-[#002B75] text-white px-5 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Guardar Configuración</span>
          </button>

          {saved && (
            <span className="text-xs text-emerald-600 font-bold animate-fadeIn">
              ✓ Configuración guardada correctamente
            </span>
          )}
        </div>
      </form>
    </div>
  );
};
