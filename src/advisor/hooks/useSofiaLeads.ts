import { useEffect, useRef, useState } from 'react';
import { SofiaApiLead, SofiaApiResponse } from '../data/sofiaApiTypes';

// Same-origin — our own server.ts proxies this to Iván's ngrok tunnel, which
// avoids ngrok's browser-warning interstitial (see server.ts for why a direct
// browser fetch to the ngrok URL doesn't work).
const LEADS_API_URL = '/api/sofia-leads';
const REFRESH_MS = 10_000;

export type SofiaConnectionStatus = 'connecting' | 'connected' | 'error';

/** Polls the live Agente Sofía (WhatsApp) endpoint every 10s. Returns the raw
 * feed as-is — deduping/merging into the CRM lead list happens in sofiaMapper. */
export function useSofiaLeads() {
  const [rawLeads, setRawLeads] = useState<SofiaApiLead[]>([]);
  const [status, setStatus] = useState<SofiaConnectionStatus>('connecting');
  const [error, setError] = useState<string | null>(null);
  const activeRef = useRef(true);

  useEffect(() => {
    activeRef.current = true;

    async function fetchLeads() {
      try {
        const res = await fetch(LEADS_API_URL);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data: SofiaApiResponse = await res.json();
        if (activeRef.current) {
          setRawLeads(data.leads || []);
          setStatus('connected');
          setError(null);
        }
      } catch (err) {
        if (activeRef.current) {
          setStatus('error');
          setError(err instanceof Error ? err.message : 'Error desconocido conectando con Sofía');
        }
      }
    }

    fetchLeads();
    const interval = setInterval(fetchLeads, REFRESH_MS);

    return () => {
      activeRef.current = false;
      clearInterval(interval);
    };
  }, []);

  return { rawLeads, status, error };
}
