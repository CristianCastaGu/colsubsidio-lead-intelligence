import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client server-side
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  try {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  } catch (err) {
    console.warn("Failed to initialize GoogleGenAI with provided key:", err);
  }
}

// System Knowledge Base Prompt for Colsubsidio Asistente
const COLSUBSIDIO_SYSTEM_INSTRUCTION = `
Eres el "Asistente de Vivienda Colsubsidio", una IA experta, empática y servicial de la Caja de Compensación Familiar Colsubsidio en Colombia.
Tu objetivo es ayudar a afiliados y usuarios a encontrar su vivienda ideal en Bogotá y Cundinamarca, informar sobre el Subsidio Familiar de Vivienda (VIS), créditos hipotecarios y proyectos destacados.

DATOS CLAVE DE COLSUBSIDIO VIVIENDA:
1. Subsidio VIS (Vivienda de Interés Social):
   - Aplica para familias o personas con ingresos de hasta 4 SMMLV (Salarios Mínimos Mensuales Legales Vigentes).
   - Monto del subsidio:
     * De 0 a 2 SMMLV de ingresos: hasta 30 SMMLV ($39.000.000 - $43.000.000 COP aprox. según vigencia).
     * De 2 a 4 SMMLV de ingresos: hasta 20 SMMLV ($26.000.000 COP aprox.).
   - Requisitos principales: Estar afiliado a Colsubsidio, no ser propietario de vivienda en el territorio nacional, no haber recibido subsidio previo, contar con ahorro previo o crédito preaprobado.

2. Proyectos Destacados Colsubsidio:
   - Ciudadela Maiporé (Soacha - Cundinamarca): Precios desde $149.182.800 COP, Área desde 34.94 m². Subsidio VIS disponible.
   - Calia (Bogotá - Occidente / Fontibón): Precios desde $175.500.000 COP, Área desde 38 m². Proyecto moderno con amplias zonas verdes.
   - Nuva Park (Bogotá - Norte / Suba): Precios desde $195.000.000 COP, Área desde 42 m². Excelente conectividad.
   - Lúmina 77 (Bogotá - Chapinero/Barrios Unidos): Precios desde $210.000.000 COP, Área desde 45 m².
   - Reserva de Guayacán (Girardot - Cundinamarca): Precios desde $138.000.000 COP, Área desde 40 m². Clima cálido, piscinas y zonas de descanso.
   - Senderos de Sopó (Sopó - Cundinamarca): Precios desde $165.000.000 COP, Área desde 44 m².
   - Torres de Cundinamarca (Cajicá / Tocancipá / Villeta): Múltiples opciones para vivir o invertir fuera de la ciudad.

3. Créditos de Vivienda y Financiación:
   - Colsubsidio ofrece tasas preferenciales de crédito de vivienda para afiliados con aprobación ágil.
   - Opción de Ahorro Programado y Leasing Habitacional.

4. Tono y Estilo:
   - Cálido, familiar, colombiano, claro y formal pero cercano ("¡Hola! Claro que sí...", "Con gusto te oriento...").
   - Utiliza viñetas, negritas para montos y precios en Pesos Colombianos (COP).
   - Si la consulta menciona una ciudad, presupuesto o número de personas, recomienda 1 o 2 proyectos específicos de la lista.
   - Mantén respuestas concisas de 2-4 párrafos máximo con viñetas para facilitar lectura en móvil.
`;

// Helper fallback rule-based answers
function generateFallbackResponse(userPrompt: string): string {
  const lower = userPrompt.toLowerCase();

  if (lower.includes("vis") || lower.includes("subsidio") || lower.includes("requisito")) {
    return `¡Con gusto te informo sobre el **Subsidio Familiar de Vivienda VIS Colsubsidio**! 🏠✨

Para acceder al subsidio de vivienda VIS debes cumplir con estos requisitos principales:
1. **Afiliación:** Estar afiliado a la Caja de Compensación Colsubsidio.
2. **Ingresos:** Tener ingresos familiares menores a **4 SMMLV** (hasta aprox. $5.200.000 COP).
3. **Propiedad:** No poseer vivienda propia en ningún municipio de Colombia.
4. **Subsidio previo:** No haber sido beneficiario anteriormente de subsidio de vivienda.

💡 **Monto del Subsidio:**
- Ingresos 0 a 2 SMMLV: Hasta **30 SMMLV** (aprox. $39.000.000 - $43.000.000 COP).
- Ingresos 2 a 4 SMMLV: Hasta **20 SMMLV** (aprox. $26.000.000 COP).

¿Te gustaría consultar proyectos disponibles que apliquen a subsidio VIS en Bogotá o Cundinamarca?`;
  }

  if (lower.includes("bogota") || lower.includes("bogotá") || lower.includes("calia") || lower.includes("nuva")) {
    return `¡En **Bogotá** tenemos más de 31 proyectos disponibles! 🏙️

Nuestros proyectos más solicitados son:
• **Calia (Occidente / Fontibón):** Desde **$175.500.000 COP** | Área desde 38 m² (Aplica Subsidio VIS).
• **Nuva Park (Norte / Suba):** Desde **$195.000.000 COP** | Área desde 42 m².
• **Lúmina 77 (Barrios Unidos):** Desde **$210.000.000 COP** | Área desde 45 m².

Puedes explorar el listado completo filtrando por zona en nuestra sección de **Proyectos de Vivienda**. ¿Quieres asesoría para la compra de alguno en específico?`;
  }

  if (lower.includes("cundinamarca") || lower.includes("girardot") || lower.includes("maipore") || lower.includes("soacha") || lower.includes("cajica") || lower.includes("villeta")) {
    return `¡Cundinamarca cuenta con espectaculares opciones para estrenar casa o invertir! 🌿☀️

Destacados en municipios:
• **Ciudadela Maiporé (Soacha):** Desde **$149.182.800 COP** | Área 34.94 m² (Subsidio VIS inmediato).
• **Reserva de Guayacán (Girardot):** Desde **$138.000.000 COP** | Área 40 m² con piscinas y clima cálido.
• **Senderos de Sopó (Sopó):** Desde **$165.000.000 COP** | Entorno natural y tranquilo.
• **Torres de Cajicá / Villeta:** Opciones VIS y NO VIS con facilidades de pago.

¿Buscas para vivir en familia o como inversión para renta/descanso?`;
  }

  if (lower.includes("credito") || lower.includes("crédito") || lower.includes("simula") || lower.includes("banco") || lower.includes("cuota") || lower.includes("financi")) {
    return `¡En Colsubsidio te ayudamos a financiar tu casa propia con tasas preferenciales! 💳💰

**Opciones de Crédito de Vivienda Colsubsidio:**
- **Crédito Hipotecario VIS:** Financiación de hasta el 70% del valor del inmueble a plazos de 5 a 20 años.
- **Tasa especial afiliados:** Descuento en la tasa de interés según la categoría de afiliación (A, B o C).
- **Ahorro programado + Cesantías:** Puedes sumar tus cesantías y el subsidio VIS para la cuota inicial.

📌 *Ejemplo estimado:* Para un proyecto de **$150.000.000 COP** con subsidio de **$39.000.000 COP**, tu crédito requerido sería de aprox. $111.000.000 COP con cuotas estimadas desde $890.000 COP/mes.

¿Te gustaría que evaluemos tu perfil para un preaprobado?`;
  }

  return `¡Hola! Soy tu Asistente Virtual de Vivienda Colsubsidio. 🏡✨

Puedo ayudarte con:
1. **Consultar proyectos VIS** en Bogotá, Soacha, Girardot, Cajicá y Cundinamarca.
2. **Requisitos para el Subsidio de Vivienda Colsubsidio** (montos de hasta 30 SMMLV).
3. **Simular tu crédito hipotecario** y cuota inicial estimada.
4. **Guía paso a paso** para comprar tu vivienda nueva.

¿Qué te gustaría averiguar hoy? Puedes hacerme cualquier pregunta o seleccionar una de las opciones sugeridas.`;
}

// Chat API Route
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "El mensaje es requerido." });
      return;
    }

    // Try Gemini API if client initialized
    if (aiClient) {
      try {
        const chat = aiClient.chats.create({
          model: "gemini-3.6-flash",
          config: {
            systemInstruction: COLSUBSIDIO_SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });

        // Add history if present
        if (Array.isArray(history) && history.length > 0) {
          for (const item of history.slice(-6)) {
            if (item.sender === "user" && item.text) {
              await chat.sendMessage({ message: item.text });
            }
          }
        }

        const response = await chat.sendMessage({ message });
        const replyText = response.text || generateFallbackResponse(message);

        res.json({ reply: replyText });
        return;
      } catch (geminiError) {
        console.warn("Gemini API error, serving intelligent domain fallback:", geminiError);
      }
    }

    // Smart Domain Fallback
    const fallbackText = generateFallbackResponse(message);
    res.json({ reply: fallbackText });
  } catch (error) {
    console.error("Chat endpoint error:", error);
    res.status(500).json({ error: "Ocurrió un error al procesar tu solicitud." });
  }
});

// Vite middleware / Production static serve
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
