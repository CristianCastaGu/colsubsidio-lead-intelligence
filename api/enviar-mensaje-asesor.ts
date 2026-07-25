// Vercel serverless function — production equivalent of the matching route in
// server.ts. See api/sofia-leads.ts for why this file needs to exist at all.
import { enviarMensajeAsesor } from "../lib/sofiaClient.js";

export default async function handler(req: any, res: any) {
  try {
    const { status, data } = await enviarMensajeAsesor(req.body);
    res.status(status).json(data);
  } catch (error) {
    console.error("Error enviando mensaje por WhatsApp vía Agente Sofía:", error);
    res.status(502).json({ ok: false, mensaje: "No se pudo conectar con el Agente Sofía (WhatsApp)." });
  }
}
