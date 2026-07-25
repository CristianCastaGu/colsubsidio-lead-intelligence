// Vercel serverless function — production equivalent of the matching route in
// server.ts. See api/sofia-leads.ts for why this file needs to exist at all.
//
// Endpoint not yet confirmed by Iván — see lib/sofiaClient.ts for details.
import { devolverAgente } from "../lib/sofiaClient.js";

export default async function handler(req: any, res: any) {
  try {
    const { status, data } = await devolverAgente(req.body);
    res.status(status).json(data);
  } catch (error) {
    console.error("Error devolviendo la conversación al Agente Sofía:", error);
    res.status(502).json({ ok: false, mensaje: "No se pudo conectar con el Agente Sofía (WhatsApp)." });
  }
}
