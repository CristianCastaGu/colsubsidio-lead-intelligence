// Vercel serverless function — production equivalent of the matching route in
// server.ts. See api/sofia-leads.ts for why this file needs to exist at all.
import { fetchConversacion } from "../../lib/sofiaClient.js";

export default async function handler(req: any, res: any) {
  try {
    const telefono = String(req.query.telefono);
    const { status, data } = await fetchConversacion(telefono);
    res.status(status).json(data);
  } catch (error) {
    console.error("Error consultando la conversación de WhatsApp:", error);
    res.status(502).json({ ok: false, history: [], modoHumano: false, asesorAsignado: null, ultimaActividad: null });
  }
}
