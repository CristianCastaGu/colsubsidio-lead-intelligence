// Vercel serverless function — production equivalent of the /api/sofia-leads
// route in server.ts (which only runs locally via `tsx server.ts`). Without
// this file, Vercel deploys the app as a static site with no backend at all,
// so this endpoint 404s and the advisor CRM shows "Sofía WhatsApp: Sin Conexión".
import { fetchSofiaLeads } from "../lib/sofiaClient.js";

export default async function handler(req: any, res: any) {
  try {
    const { status, data } = await fetchSofiaLeads();
    res.status(status).json(data);
  } catch (error) {
    console.error("Error consultando el Agente Sofía:", error);
    res.status(502).json({ error: "No se pudo conectar con el Agente Sofía (WhatsApp)." });
  }
}
