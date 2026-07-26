import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X, MessageSquare, Send, Copy, Loader2, AlertTriangle, UserCheck, Bot, Mic } from 'lucide-react';
import { Lead, HousingProject } from '../../types';
import { normalizePhoneForWhatsApp } from '../../data/phone';
import { useWhatsAppConversation } from '../../hooks/useWhatsAppConversation';
import { mapConversacionLeadInfoToLead } from '../../data/sofiaMapper';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead: Lead | null;
  projects: HousingProject[];
  advisorName: string;
  /** Fires once when a phone-lookup lead (id starts with "adhoc-") turns out to have
   * a real conversation with a real name — lets the parent register it as a proper
   * row in the leads table instead of it only existing inside this modal. */
  onLeadDiscovered?: (lead: Lead) => void;
}

const TEMPLATES: Record<string, (lead: Lead, project: HousingProject) => string> = {
  subsidio: (lead, project) =>
    `¡Hola ${lead.name}! 👋 Te habla un asesor de Vivienda Colsubsidio.\n\n` +
    `Validamos tu solicitud y confirmamos que como afiliado (${lead.afiliacionCategoria || 'Colsubsidio'}) tienes un beneficio potencial de hasta $39.000.000 COP en Subsidio Familiar de Vivienda para tu primer hogar en *${project.name}* (${project.municipality}). 🏠\n\n` +
    `¿Te gustaría que agendemos una llamada rápida de 5 minutos o te envíe la simulación en PDF a este número?`,
  cita: (lead, project) =>
    `Hola ${lead.name}, ¡excelente día! 🌞 Confirmo tu cita en nuestra Sala de Ventas de *${project.name}* en ${project.municipality}.\n\n` +
    `🗓️ *Ubicación:* ${project.address}\n\n` +
    `Favor confirmar si esta hora te queda perfecta o si prefieres reprogramar.`,
  credito: (lead, project) =>
    `Estimado(a) ${lead.name}, de parte de Colsubsidio Vivienda esperamos que estés teniendo un excelente día.\n\n` +
    `Te escribimos para dar seguimiento a la pre-aprobación del crédito para tu apartamento en *${project.name}*. Ya tenemos lista la proyección financiera.\n\n` +
    `¿Nos regalas un momento para revisar los detalles por aquí?`,
};

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose, lead, projects, advisorName, onLeadDiscovered }) => {
  const telefono = useMemo(() => (lead ? normalizePhoneForWhatsApp(lead.phone) : null), [lead]);
  const { history, modoHumano, asesorAsignado, leadInfo, loading, loadError, sending, sendMessage, retomarConversacion, devolverAgente } =
    useWhatsAppConversation(isOpen ? telefono : null);

  const [messageText, setMessageText] = useState('');
  const [sendError, setSendError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [switchingMode, setSwitchingMode] = useState(false);
  const [audioNotice, setAudioNotice] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const discoveredRef = useRef<string | null>(null);

  useEffect(() => {
    setMessageText('');
    setSendError(null);
    setAudioNotice(false);
  }, [lead?.id]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [history.length]);

  // A phone-lookup lead (not in the leads table yet) turned out to have a real
  // conversation — promote it to a real row instead of leaving it modal-only.
  useEffect(() => {
    if (!lead || !lead.id.startsWith('adhoc-') || !telefono || !leadInfo?.nombre || !onLeadDiscovered) return;
    const signature = `${leadInfo.lead_id || leadInfo.id || telefono}:${leadInfo.nombre}`;
    if (discoveredRef.current === signature) return;
    discoveredRef.current = signature;
    onLeadDiscovered(mapConversacionLeadInfoToLead(leadInfo, telefono, projects));
  }, [lead, telefono, leadInfo, projects, onLeadDiscovered]);

  if (!isOpen || !lead) return null;

  const project = projects.find((p) => p.id === lead.recommendedProjectId) || projects[0];

  const applyTemplate = (key: keyof typeof TEMPLATES) => {
    setMessageText(TEMPLATES[key](lead, project));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = async () => {
    if (!messageText.trim()) return;
    setSendError(null);
    const result = await sendMessage(messageText.trim(), advisorName);
    if (result.ok) {
      setMessageText('');
    } else {
      setSendError(result.mensaje || 'No se pudo enviar el mensaje.');
    }
  };

  const handleRetomar = async () => {
    setSendError(null);
    setSwitchingMode(true);
    const result = await retomarConversacion(advisorName);
    if (!result.ok) setSendError(result.mensaje || 'No se pudo retomar la conversación.');
    setSwitchingMode(false);
  };

  const handleDevolver = async () => {
    setSendError(null);
    setSwitchingMode(true);
    const result = await devolverAgente();
    if (!result.ok) setSendError(result.mensaje || 'No se pudo devolver la conversación a Sofía.');
    setSwitchingMode(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-[#075E54] text-white p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
              <MessageSquare className="w-4 h-4 fill-current" />
            </div>
            <div className="min-w-0">
              <h2 className="font-extrabold text-sm leading-tight truncate">{lead.name}</h2>
              <p className="text-[11px] text-emerald-100 truncate">
                {telefono ? lead.phone : 'Sin número de WhatsApp registrado'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!telefono ? (
          // Sin teléfono real — no fingir que el chat funciona
          <div className="p-6 text-center space-y-2 text-xs text-slate-600">
            <AlertTriangle className="w-6 h-6 text-amber-500 mx-auto" />
            <p className="font-bold text-slate-800">Este lead no tiene un número de WhatsApp registrado.</p>
            <p>
              Los leads capturados en vivo por el Agente Sofía todavía no incluyen el teléfono en el listado —
              pide a Iván que lo agregue a <code className="bg-slate-100 px-1 rounded">/api/leads</code> para poder retomar su chat real.
            </p>
          </div>
        ) : (
          <>
            {/* Status banner */}
            <div
              className={`px-4 py-2 text-[11px] font-semibold flex items-center justify-between gap-2 shrink-0 border-b ${
                modoHumano ? 'bg-blue-50 border-blue-100 text-[#003DA5]' : 'bg-amber-50 border-amber-100 text-amber-800'
              }`}
            >
              <span className="flex items-center gap-1.5">
                {modoHumano ? <UserCheck className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                {modoHumano ? `Modo humano — atendido por ${asesorAsignado || advisorName}` : 'Sofía está atendiendo esta conversación automáticamente'}
              </span>
              {modoHumano ? (
                <button
                  onClick={handleDevolver}
                  disabled={switchingMode}
                  title="Dejar que Sofía siga atendiendo automáticamente"
                  className="text-[10px] font-bold underline hover:no-underline cursor-pointer shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Devolver a Sofía
                </button>
              ) : (
                <button
                  onClick={handleRetomar}
                  disabled={switchingMode}
                  title="Tomar tú la conversación en vez de Sofía"
                  className="text-[10px] font-bold underline hover:no-underline cursor-pointer shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Retomar chat
                </button>
              )}
            </div>

            {/* Message history */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-2 bg-[#E5DDD5] min-h-[240px]">
              {loading ? (
                <div className="h-full flex items-center justify-center text-slate-500 text-xs gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" /> Cargando conversación…
                </div>
              ) : loadError ? (
                <div className="h-full flex items-center justify-center text-center text-xs text-red-600 px-4">{loadError}</div>
              ) : history.length === 0 ? (
                <div className="h-full flex items-center justify-center text-center text-xs text-slate-500 px-4">
                  Sofía todavía no ha hablado con este lead por WhatsApp.
                </div>
              ) : (
                history.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'assistant' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[80%] p-2.5 rounded-lg text-xs leading-relaxed shadow-xs whitespace-pre-wrap ${
                        msg.role === 'assistant' ? 'bg-[#DCF8C6] text-slate-900' : 'bg-white text-slate-900'
                      }`}
                    >
                      {msg.content}
                      {msg.timestamp && (
                        <p className="text-[9px] text-slate-500 text-right mt-1">
                          {new Date(msg.timestamp).toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Composer */}
            <div className="p-3 space-y-2 border-t border-slate-200 shrink-0">
              <div className="grid grid-cols-3 gap-1.5">
                {(['subsidio', 'cita', 'credito'] as const).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => applyTemplate(key)}
                    className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 font-bold text-[10px] hover:border-[#003DA5] transition-colors cursor-pointer"
                  >
                    {key === 'subsidio' ? 'Subsidio' : key === 'cita' ? 'Cita' : 'Pre-Aprobación'}
                  </button>
                ))}
              </div>

              {sendError && (
                <p className="text-[11px] text-red-600 font-semibold flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> {sendError}
                </p>
              )}

              {audioNotice && (
                <p className="text-[11px] text-amber-700 font-semibold flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> El envío de audio todavía no está conectado — pendiente de que Sofía/Iván habiliten un endpoint para recibir notas de voz.
                </p>
              )}

              <div className="flex items-end gap-2">
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Escribe tu mensaje…"
                  className="flex-1 text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003DA5]/20 h-16 resize-none"
                />
                <button
                  onClick={() => setAudioNotice(true)}
                  title="Enviar audio (próximamente)"
                  className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-300 transition-colors cursor-pointer shrink-0"
                >
                  <Mic className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCopy}
                  title="Copiar texto"
                  className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-300 transition-colors cursor-pointer shrink-0"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button
                  onClick={handleSend}
                  disabled={sending || !messageText.trim()}
                  className="p-2.5 bg-[#25D366] hover:bg-[#20bd5a] disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 rounded-lg shadow-md transition-colors cursor-pointer shrink-0"
                  title="Enviar por WhatsApp"
                >
                  {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 fill-current" />}
                </button>
              </div>
              {copied && <p className="text-[10px] text-emerald-600 font-bold">✓ Texto copiado</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
