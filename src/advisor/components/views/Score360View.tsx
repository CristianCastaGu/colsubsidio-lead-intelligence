import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Target,
  Sparkles,
  Phone,
  MessageSquare,
  Building,
  CheckCircle2,
  Clock,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  AlertCircle,
  FileText,
  UserCheck,
  ChevronDown,
  Award,
  Bot,
  CreditCard,
  X
} from 'lucide-react';
import { Lead, HousingProject } from '../../types';

interface Score360ViewProps {
  leads: Lead[];
  selectedLeadId: string;
  onSelectLead: (leadId: string) => void;
  projects: HousingProject[];
  onOpenWhatsAppModal: (lead: Lead) => void;
}

/** Splits a rationale/brief paragraph into its individual sentences so it can render
 * as scannable bullets instead of one dense block of prose. */
function splitIntoFacts(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** One label/value tag for the Sofía profile grid — renders a muted "—" for anything not yet captured. */
const SofiaField: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => {
  const isEmpty = value === null || value === undefined || value === '';
  return (
    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
      <span className="text-[10px] text-slate-500 font-semibold block">{label}</span>
      <span className={isEmpty ? 'text-slate-400 italic' : 'font-bold text-slate-800'}>
        {isEmpty ? 'Sin dato aún' : value}
      </span>
    </div>
  );
};

export const Score360View: React.FC<Score360ViewProps> = ({
  leads,
  selectedLeadId,
  onSelectLead,
  projects,
  onOpenWhatsAppModal,
}) => {
  const currentLead = leads.find((l) => l.id === selectedLeadId) || leads[0];
  const recommendedProject = projects.find((p) => p.id === currentLead.recommendedProjectId);

  const [notesList, setNotesList] = useState<string[]>(currentLead.notes || []);
  const [newNote, setNewNote] = useState('');
  const [behaviorHistoryOpen, setBehaviorHistoryOpen] = useState(false);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setNotesList([`${newNote} (${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})`, ...notesList]);
    setNewNote('');
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER BAR WITH LEAD SELECTOR */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-[#003DA5]" />
            <h1 className="text-lg font-black text-slate-900 font-sans tracking-tight">Score 360° — Análisis Predictivo de Lead</h1>
          </div>
          <p className="text-xs text-slate-500">
            Ficha unificada de calificación con modelo de machine learning para ventas de vivienda Colsubsidio.
          </p>
        </div>

        {/* Lead Selector Dropdown */}
        <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200">
          <span className="text-xs font-semibold text-slate-600">Seleccionar Lead:</span>
          <select
            value={currentLead.id}
            onChange={(e) => onSelectLead(e.target.value)}
            className="bg-white text-xs font-bold text-slate-800 border border-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 cursor-pointer"
          >
            {leads.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name} — {l.scores.total}/100 ({l.housingInterest})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* LEAD PROFILE TOP CARD & PRIORITY BANNER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT 2 COLS: PROFILE SUMMARY & 4 SCORE GAUGES */}
        <div className="lg:col-span-2 space-y-6">
          {/* PROFILE SUMMARY CARD */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#003DA5] text-[#FFD200] font-extrabold text-lg flex items-center justify-center shrink-0 shadow-xs">
                  {currentLead.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-black text-slate-900 font-sans tracking-tight">{currentLead.name}</h2>
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        currentLead.temperature === 'Hot'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-blue-100 text-[#003DA5]'
                      }`}
                    >
                      {currentLead.temperature === 'Hot' ? '🔥 Hot Lead' : 'Warm Lead'}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mt-1">
                    <span>📱 {currentLead.phone}</span>
                    <span>•</span>
                    <span>✉️ {currentLead.email}</span>
                    <span>•</span>
                    <span>📍 {currentLead.city}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenWhatsAppModal(currentLead)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enviar WhatsApp</span>
                </button>
                <button
                  onClick={() => alert(`Llamando a ${currentLead.name} al ${currentLead.phone}`)}
                  className="bg-[#003DA5] hover:bg-[#002B75] text-white px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Llamar</span>
                </button>
              </div>
            </div>

            {/* Profile Data Tags Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-500 font-semibold block">Afiliación Colsubsidio</span>
                <span className="font-bold text-[#003DA5]">
                  {currentLead.colsubsidioAfiliado ? `Sí (${currentLead.afiliacionCategoria})` : 'No Afiliado'}
                </span>
              </div>

              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-500 font-semibold block">Subsidio Familiar</span>
                <span className="font-bold text-slate-800">
                  {currentLead.hasCajaSubsidio ? 'Aprobado ($39M COP)' : 'En Tramite'}
                </span>
              </div>

              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-500 font-semibold block">Interés Vivienda</span>
                <span className="font-bold text-emerald-700">{currentLead.housingInterest}</span>
              </div>

              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-[10px] text-slate-500 font-semibold block">Origen de Captura</span>
                <span className="font-bold text-slate-800 truncate block">{currentLead.channel}</span>
              </div>
            </div>

            {/* PRIORITY RECOMMENDATION BLOCK */}
            <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🔥</span>
                  <span className="font-bold text-amber-900 text-sm">
                    Recomendación de Prioridad: {currentLead.priority}
                  </span>
                </div>
                <span className="text-[10px] bg-amber-200 text-amber-900 font-extrabold px-2 py-0.5 rounded">
                  Contacto &lt; 15 min
                </span>
              </div>
              <ul className="space-y-1.5">
                {splitIntoFacts(currentLead.priorityRationale).map((fact, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FOUR INDICATORS GAUGE / PROGRESS BARS */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#003DA5]" />
                  <span>Desglose del Score 360°</span>
                </h3>
                <p className="text-xs text-slate-500">Evaluación algorítmica multidimensional</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-[#003DA5]">{currentLead.scores.total}</span>
                <span className="text-xs text-slate-400 font-bold">/100</span>
              </div>
            </div>

            {/* Grid of 4 Score Gauges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 1. FIT SCORE */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-blue-600" /> Fit Score (Perfil)
                  </span>
                  <span className="font-extrabold text-blue-700 text-sm">{currentLead.scores.fit}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full transition-all duration-500"
                    style={{ width: `${currentLead.scores.fit}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-slate-500">
                  Alineación de ingresos, categoría de afiliación a Colsubsidio y capacidad de pago.
                </p>
              </div>

              {/* 2. INTENT SCORE */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-emerald-600" /> Intent Score (Intención)
                  </span>
                  <span className="font-extrabold text-emerald-700 text-sm">{currentLead.scores.intent}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-600 h-full transition-all duration-500"
                    style={{ width: `${currentLead.scores.intent}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-slate-500">
                  Uso activo de simuladores de crédito, descarga de folletos y consultas de plano.
                </p>
              </div>

              {/* 3. ENGAGEMENT SCORE */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-purple-600" /> Engagement Score
                  </span>
                  <span className="font-extrabold text-purple-700 text-sm">{currentLead.scores.engagement}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-purple-600 h-full transition-all duration-500"
                    style={{ width: `${currentLead.scores.engagement}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-slate-500">
                  Frecuencia de visitas web, tiempo de permanencia y apertura de mails/mensajes.
                </p>
              </div>

              {/* 4. CONVERSION SCORE */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" /> Conversion Score (Cierre)
                  </span>
                  <span className="font-extrabold text-amber-700 text-sm">{currentLead.scores.conversion}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-500 h-full transition-all duration-500"
                    style={{ width: `${currentLead.scores.conversion}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-slate-500">
                  Probabilidad estadística de firmar promesa de compraventa en los próximos 30 días.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT 1 COL: RECOMMENDED PROJECT MATCH & ADVISOR NOTES */}
        <div className="space-y-6">
          {/* RECOMMENDED PROJECT MATCH CARD */}
          {recommendedProject && (
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-500 uppercase">Proyecto Recomendado</span>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-2.5 py-0.5 rounded-full">
                  {currentLead.matchPercentage}% Match
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden h-36 border border-slate-200">
                <img
                  src={recommendedProject.image}
                  alt={recommendedProject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-end text-white">
                  <span className="text-[10px] bg-[#FFD200] text-[#003DA5] font-extrabold px-2 py-0.5 rounded w-fit mb-1">
                    {recommendedProject.type}
                  </span>
                  <h4 className="font-bold text-sm leading-tight">{recommendedProject.name}</h4>
                  <p className="text-[11px] text-slate-200">{recommendedProject.municipality}</p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Precio desde:</span>
                  <span className="font-bold text-slate-900">
                    ${(recommendedProject.minPriceCOP / 1000000).toFixed(1)} Millones COP
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Disponibilidad:</span>
                  <span className="font-bold text-slate-900">
                    {recommendedProject.unitsAvailable} de {recommendedProject.unitsTotal} unidades
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Subsidio Colsubsidio:</span>
                  <span className="font-bold text-emerald-600">
                    {recommendedProject.subsidyApplicable ? 'Aplica ($39M COP)' : 'No aplica (No VIS)'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ADVISOR NOTES SECTION */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 border-b border-slate-100 pb-2">
              <FileText className="w-4 h-4 text-[#003DA5]" />
              <span>Notas de Seguimiento Comercial</span>
            </h3>

            {/* Add note form */}
            <form onSubmit={handleAddNote} className="space-y-2">
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Escribe una observación sobre la llamada o cita..."
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 h-20 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#003DA5] hover:bg-[#002B75] text-white text-xs font-bold py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                Guardar Nota
              </button>
            </form>

            {/* Notes List */}
            <div className="space-y-2 text-xs max-h-48 overflow-y-auto pt-2">
              {notesList.map((note, idx) => (
                <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700">
                  <p>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating "Historial de Comportamiento Digital" button — same pattern as the
          Home's floating panels (Operación Comercial / Alerta de Inventario): keeps
          this dense page uncluttered, opens the full timeline on demand instead of
          taking up permanent vertical space. Portaled to <body> for the same reason
          as those: this view's own animate-fadeIn wrapper has a transform, which
          would otherwise trap position:fixed to that ancestor instead of the viewport. */}
      {createPortal(
        <>
          <button
            onClick={() => setBehaviorHistoryOpen((v) => !v)}
            aria-label="Historial de Comportamiento Digital"
            title="Historial de Comportamiento Digital"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#003DA5] hover:bg-blue-700 text-white shadow-xl flex items-center justify-center cursor-pointer transition-all hover:scale-105"
          >
            <Clock className="w-6 h-6" />
            {currentLead.behaviorLogs.length > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#FFD200] text-[#003DA5] text-[10px] font-black ring-2 ring-white flex items-center justify-center">
                {currentLead.behaviorLogs.length}
              </span>
            )}
          </button>

          <AnimatePresence>
            {behaviorHistoryOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setBehaviorHistoryOpen(false)}
                />
                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, scale: 0.95, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 12 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="fixed bottom-24 right-6 left-6 sm:left-auto z-50 w-auto sm:w-96 max-h-[70vh] overflow-y-auto custom-scrollbar bg-white rounded-2xl border border-slate-200/80 shadow-2xl p-5 space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#003DA5]" />
                      <span>Historial de Comportamiento Digital</span>
                    </h3>
                    <button
                      onClick={() => setBehaviorHistoryOpen(false)}
                      className="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                      title="Cerrar"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {currentLead.behaviorLogs.length === 0 ? (
                    <p className="text-xs text-slate-400 italic">Sin actividad registrada todavía para este lead.</p>
                  ) : (
                    <div className="relative border-l-2 border-slate-200 ml-3 pl-4 space-y-4 text-xs">
                      {currentLead.behaviorLogs.map((log, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#003DA5] ring-4 ring-white"></div>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900">{log.action}</span>
                            <span className="text-[10px] text-slate-400">{log.timestamp}</span>
                          </div>
                          <p className="text-slate-600 mt-0.5">{log.details}</p>
                          <span className="inline-block mt-1 text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.2 rounded border border-slate-200">
                            💻 {log.device}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>,
        document.body
      )}
    </div>
  );
};
