// Server-to-server client for the live Agente Sofía (WhatsApp) backend. Shared
// between server.ts (local dev, via `tsx server.ts`) and the Vercel serverless
// functions in api/ (production) so both environments hit the exact same proxy
// logic instead of two copies drifting apart.
//
// Runs server-to-server (no browser involved) so ngrok's browser-warning
// interstitial never triggers — that page only intercepts requests carrying a
// real browser User-Agent, and it blocks the CORS preflight a direct browser
// fetch with a custom header would need.
// If Iván's ngrok tunnel URL changes, update it here only.
const SOFIA_BASE_URL = "https://pyromania-oversweet-unburned.ngrok-free.dev";

const NGROK_HEADERS = { "ngrok-skip-browser-warning": "true" };

export async function fetchSofiaLeads(): Promise<{ status: number; data: unknown }> {
  const response = await fetch(`${SOFIA_BASE_URL}/api/leads`, { headers: NGROK_HEADERS });
  const data = await response.json();
  return { status: response.status, data };
}

export async function retomarConversacion(body: unknown): Promise<{ status: number; data: unknown }> {
  const response = await fetch(`${SOFIA_BASE_URL}/api/retomar-conversacion`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...NGROK_HEADERS },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return { status: response.status, data };
}

export async function enviarMensajeAsesor(body: unknown): Promise<{ status: number; data: unknown }> {
  const response = await fetch(`${SOFIA_BASE_URL}/api/enviar-mensaje-asesor`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...NGROK_HEADERS },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return { status: response.status, data };
}

// NOTE: not part of the documented contract yet — Iván only confirmed
// /api/retomar-conversacion (asesor toma el chat). This mirrors that same
// shape/naming for the opposite action (asesor devuelve el chat a Sofía) as a
// best guess; if the real endpoint differs, this will 404/502 and the UI
// surfaces that explicitly instead of pretending it worked.
export async function devolverAgente(body: unknown): Promise<{ status: number; data: unknown }> {
  const response = await fetch(`${SOFIA_BASE_URL}/api/devolver-agente`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...NGROK_HEADERS },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return { status: response.status, data };
}

export async function fetchConversacion(telefono: string): Promise<{ status: number; data: unknown }> {
  const response = await fetch(`${SOFIA_BASE_URL}/api/conversacion/${encodeURIComponent(telefono)}`, {
    headers: NGROK_HEADERS,
  });
  const data = await response.json();
  return { status: response.status, data };
}
