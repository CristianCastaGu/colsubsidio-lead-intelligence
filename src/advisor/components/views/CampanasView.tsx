import React, { useState } from 'react';
import {
  Megaphone,
  Sparkles,
  Copy,
  Check,
  TrendingUp,
  BarChart2,
  DollarSign,
  Play,
  RefreshCw,
  Eye
} from 'lucide-react';
import { Campaign } from '../../types';

interface CampanasViewProps {
  campaigns: Campaign[];
}

export const CampanasView: React.FC<CampanasViewProps> = ({ campaigns }) => {
  const [copiedVariant, setCopiedVariant] = useState<string | null>(null);
  const [generatingAiCopy, setGeneratingAiCopy] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('Anuncio Meta para proyecto VIS en Mosquera resaltando subsidio $39M Colsubsidio');
  const [generatedOutput, setGeneratedOutput] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedVariant(id);
    setTimeout(() => setCopiedVariant(null), 2000);
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneratingAiCopy(true);
    setTimeout(() => {
      setGeneratedOutput(
        `🚀 ¡Atención Afiliados a Colsubsidio! 👋\n\n¿Sabías que puedes estrenar tu departamento VIS de 3 alcobas en Altos de Mosquera uniendo tu Subsidio de Vivienda Colsubsidio ($39.000.000 COP) con Mi Casa Ya?\n\n✨ Paga tu cuota inicial en plazos flexibles mientras se construye tu hogar.\n📍 Ubicación privilegiada a 20 min de Bogotá.\n\n📲 Da clic en 'Más Información' para realizar tu simulación de subsidio gratis por WhatsApp.`
      );
      setGeneratingAiCopy(false);
    }, 1200);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER SECTION */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-[#003DA5]" />
            <h1 className="text-lg font-bold text-slate-900">Campañas & Contenido Generado con IA</h1>
          </div>
          <p className="text-xs text-slate-500">
            Rendimiento de pauta digital y generador de copys optimizados para proyectos de vivienda Colsubsidio.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#003DA5] text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs">
          <Sparkles className="w-4 h-4 text-[#FFD200]" />
          <span>Generador de Contenido Activo</span>
        </div>
      </div>

      {/* AI GENERATOR BOX */}
      <div className="bg-gradient-to-r from-[#003DA5] to-[#0B192C] text-white p-5 rounded-xl shadow-md space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#FFD200]" />
          <h2 className="font-extrabold text-sm text-white">Generador Comercial de Copys e Imágenes para Pauta</h2>
        </div>

        <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={aiPrompt}
            onChange={(e) => setAiPrompt(e.target.value)}
            placeholder="Escribe lo que deseas promocionar (ej. Proyecto VIS Soacha, Subsidios...)"
            className="flex-1 bg-white/10 text-white placeholder-slate-300 text-xs p-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FFD200]"
          />
          <button
            type="submit"
            disabled={generatingAiCopy}
            className="bg-[#FFD200] hover:bg-amber-400 text-[#003DA5] font-extrabold text-xs px-5 py-3 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0"
          >
            {generatingAiCopy ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Generando con IA...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generar Copy Meta / TikTok</span>
              </>
            )}
          </button>
        </form>

        {generatedOutput && (
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-xs space-y-2 animate-fadeIn">
            <div className="flex justify-between items-center">
              <span className="font-bold text-[#FFD200]">Variante de Copy Generada por IA:</span>
              <button
                onClick={() => handleCopy('gen-output', generatedOutput)}
                className="text-slate-200 hover:text-white flex items-center gap-1 cursor-pointer font-bold"
              >
                {copiedVariant === 'gen-output' ? '✓ Copiado' : 'Copiar Texto'}
              </button>
            </div>
            <p className="whitespace-pre-line text-slate-100 font-sans leading-relaxed">{generatedOutput}</p>
          </div>
        )}
      </div>

      {/* CAMPAIGNS METRICS & A/B TESTING RESULTS */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
        <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
          Rendimiento de Campañas Activas (A/B Testing)
        </h3>

        <div className="space-y-4">
          {campaigns.map((camp) => (
            <div key={camp.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-slate-900 text-sm">{camp.name}</span>
                  <span className="bg-[#003DA5]/10 text-[#003DA5] font-bold px-2 py-0.5 rounded text-[10px]">
                    {camp.channel}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-bold">
                  <span className="text-slate-600">Generados: {camp.leadsGenerated} leads</span>
                  <span className="text-emerald-700">CPL: ${camp.costPerLeadCOP.toLocaleString('es-CO')} COP</span>
                  <span className="text-[#003DA5]">Conv: {camp.conversionRate}%</span>
                </div>
              </div>

              {/* Variants Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                  <div className="flex justify-between items-center font-bold text-slate-800">
                    <span>Variante A (Ganadora)</span>
                    <button
                      onClick={() => handleCopy(`${camp.id}-a`, camp.aiCopyVariantA)}
                      className="text-[#003DA5] hover:underline cursor-pointer text-[10px]"
                    >
                      Copiar
                    </button>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">"{camp.aiCopyVariantA}"</p>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-1 opacity-80">
                  <div className="flex justify-between items-center font-bold text-slate-800">
                    <span>Variante B</span>
                    <button
                      onClick={() => handleCopy(`${camp.id}-b`, camp.aiCopyVariantB)}
                      className="text-[#003DA5] hover:underline cursor-pointer text-[10px]"
                    >
                      Copiar
                    </button>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">"{camp.aiCopyVariantB}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
