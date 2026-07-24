// Forma "de cable" (wire shape) del endpoint real del agente Sofía — snake_case,
// tal como lo manda el servidor de Iván. Verificado contra la respuesta en vivo:
// varios campos vienen ausentes por completo (no solo null) según qué alcanzó a
// preguntar la conversación, así que casi todo es opcional aquí a propósito.
// No confundir con `Lead` (src/advisor/types.ts) — ese es nuestro modelo de CRM.

export interface SofiaApiDataCredito {
  consultado: boolean;
  puntaje: number | null;
  nivel_riesgo: 'Bajo' | 'Medio' | 'Alto' | null;
  fecha_consulta: string | null;
}

export interface SofiaApiLead {
  lead_id: string;
  nombre: string;
  fuente?: string;
  proyecto_interes_original?: string;
  es_afiliado?: boolean | null;
  rango_edad?: string;
  segmento?: 'Básico' | 'Medio' | 'Joven' | 'Alto' | 'Desconocido' | string;
  categoria_afiliado?: 'A' | 'B' | 'C' | 'Desconocida';
  rango_salarial?: string;
  composicion_familiar?: string;
  profesion?: string;
  primera_vivienda?: boolean | null;
  motivacion?: string;
  zona_actual?: string;
  timeline?: string;
  credito_previo?: boolean | null;
  fuente_cuota_inicial?: string;
  proyecto_recomendado?: string[];
  score?: 'hot' | 'warm' | 'cold';
  score_numerico?: number;
  brief_asesor?: string;
  remarketing_track?: string;
  perfil_estadistico?: string | null;
  perfil_estadistico_riesgo_desistimiento?: number | null;
  datacredito?: SofiaApiDataCredito;
  brochure_enviado?: string | null;
  timestamp: string;
}

export interface SofiaApiResponse {
  total: number;
  leads: SofiaApiLead[];
}
