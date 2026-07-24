import { useCallback, useEffect, useRef, useState } from 'react';
import { ConversacionResponse, ConversationMessage } from '../data/sofiaApiTypes';

const POLL_MS = 7000;
const JSON_HEADERS = { 'Content-Type': 'application/json' };

interface SendResult {
  ok: boolean;
  mensaje?: string;
}

/**
 * Drives the real WhatsApp handoff: loads the conversation Sofía already had
 * with the lead, polls for new incoming messages while the panel is open, and
 * lets the advisor send a message through the real WhatsApp Business number
 * (not a wa.me link to the advisor's personal number).
 *
 * `telefono` must already be normalized (see data/phone.ts) — pass null to
 * disable everything (e.g. the lead has no phone on file yet).
 */
export function useWhatsAppConversation(telefono: string | null) {
  const [history, setHistory] = useState<ConversationMessage[]>([]);
  const [modoHumano, setModoHumano] = useState(false);
  const [asesorAsignado, setAsesorAsignado] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const activeRef = useRef(true);

  const loadConversation = useCallback(async (isFirstLoad: boolean) => {
    if (!telefono) return;
    if (isFirstLoad) setLoading(true);
    try {
      const res = await fetch(`/api/conversacion/${encodeURIComponent(telefono)}`);
      const data: ConversacionResponse = await res.json();
      if (!activeRef.current) return;
      if (data.ok) {
        setHistory(data.history || []);
        setModoHumano(Boolean(data.modoHumano));
        setAsesorAsignado(data.asesorAsignado ?? null);
        setLoadError(null);
      } else {
        setLoadError('No se pudo cargar la conversación de WhatsApp.');
      }
    } catch {
      if (activeRef.current) setLoadError('No se pudo conectar con el Agente Sofía (WhatsApp).');
    } finally {
      if (activeRef.current && isFirstLoad) setLoading(false);
    }
  }, [telefono]);

  useEffect(() => {
    activeRef.current = true;
    setHistory([]);
    setModoHumano(false);
    setAsesorAsignado(null);
    setLoadError(null);

    if (!telefono) return;

    loadConversation(true);
    const interval = setInterval(() => loadConversation(false), POLL_MS);
    return () => {
      activeRef.current = false;
      clearInterval(interval);
    };
  }, [telefono, loadConversation]);

  const retomarConversacion = useCallback(
    async (asesor: string): Promise<SendResult> => {
      if (!telefono) return { ok: false, mensaje: 'Este lead no tiene un número de WhatsApp registrado.' };
      try {
        const res = await fetch('/api/retomar-conversacion', {
          method: 'POST',
          headers: JSON_HEADERS,
          body: JSON.stringify({ telefono, asesor }),
        });
        const data = await res.json();
        if (data.ok) {
          setModoHumano(true);
          setAsesorAsignado(asesor);
        }
        return data;
      } catch {
        return { ok: false, mensaje: 'No se pudo conectar con el Agente Sofía (WhatsApp).' };
      }
    },
    [telefono]
  );

  const sendMessage = useCallback(
    async (mensaje: string, asesor: string): Promise<SendResult> => {
      if (!telefono) return { ok: false, mensaje: 'Este lead no tiene un número de WhatsApp registrado.' };
      setSending(true);
      try {
        const res = await fetch('/api/enviar-mensaje-asesor', {
          method: 'POST',
          headers: JSON_HEADERS,
          body: JSON.stringify({ telefono, mensaje, asesor }),
        });
        const data: SendResult = await res.json();
        if (data.ok) {
          setModoHumano(true);
          setAsesorAsignado(asesor);
          setHistory((prev) => [...prev, { role: 'assistant', content: mensaje, timestamp: new Date().toISOString() }]);
        }
        return data;
      } catch {
        return { ok: false, mensaje: 'No se pudo conectar con el Agente Sofía (WhatsApp).' };
      } finally {
        setSending(false);
      }
    },
    [telefono]
  );

  return { history, modoHumano, asesorAsignado, loading, loadError, sending, sendMessage, retomarConversacion };
}
