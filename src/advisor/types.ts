export type ViewType =
  | 'inicio'
  | 'leads'
  | 'negocios'
  | 'proyectos'
  | 'buyer_personas'
  | 'score360'
  | 'campanas'
  | 'remarketing'
  | 'paneles'
  | 'configuracion';

export type LeadStatus = 'Nuevo' | 'En Calificación' | 'Cita Agendada' | 'Pre-Aprobado' | 'En Negociación' | 'Ganado' | 'Perdido';

export type LeadTemperature = 'Hot' | 'Warm' | 'Cold';

export type HousingCategory = 'VIS' | 'No VIS' | 'VIP';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  channel: string;
  campaign: string;
  status: LeadStatus;
  temperature: LeadTemperature;
  housingInterest: HousingCategory;
  budgetCOP: number;
  downPaymentCOP: number;
  colsubsidioAfiliado: boolean;
  afiliacionCategoria?: 'Cat A' | 'Cat B' | 'Cat C' | 'No Afiliado';
  hasCajaSubsidio: boolean;
  hasMiCasaYa: boolean;
  recommendedProjectId: string;
  matchPercentage: number;
  scores: {
    fit: number;
    intent: number;
    engagement: number;
    conversion: number;
    total: number;
  };
  priority: 'Muy Alta' | 'Alta' | 'Media' | 'Baja';
  priorityRationale: string;
  assignedAdvisor: string;
  createdAt: string;
  lastInteraction: string;
  behaviorLogs: {
    timestamp: string;
    action: string;
    details: string;
    device: string;
  }[];
  notes?: string[];
  /** Perfilamiento del agente conversacional Sofía (WhatsApp) — ver CONTRATO DE DATOS.
   *  Siempre presente, pero viaja con valores "pendiente" hasta que Sofía perfile al lead. */
  sofia: SofiaProfile;
}

export interface DataCreditoInfo {
  consultado: boolean;
  puntaje: number | null; // escala DataCrédito 150-950
  nivelRiesgo: 'Bajo' | 'Medio' | 'Alto' | null;
  fechaConsulta: string | null;
}

export interface SofiaProfile {
  fuente: string | null; // "Meta Ads (Click to WhatsApp)" | "WhatsApp directo"
  proyectoInteresOriginal: string | null;
  esAfiliado: boolean | null;
  rangoEdad: string | null;
  segmento: 'Básico' | 'Medio' | 'Joven' | 'Alto' | 'Desconocido';
  categoriaAfiliado: 'A' | 'B' | 'C' | 'Desconocida';
  rangoSalarial: string;
  composicionFamiliar: string | null;
  profesion: string | null;
  primeraVivienda: boolean | null;
  motivacion: string | null;
  zonaActual: string | null;
  timeline: '0-3 meses' | '3-6 meses' | '6-12 meses' | '+12 meses' | 'explorando' | null;
  creditoPrevio: boolean | null;
  fuenteCuotaInicial: 'ahorro' | 'cesantías' | 'ayuda familiar' | 'ninguno mencionado' | 'no preguntado';
  proyectoRecomendado: string[];
  score: 'hot' | 'warm' | 'cold' | null;
  scoreNumerico: number | null;
  briefAsesor: string | null;
  remarketingTrack: 'none — hot lead, pasa directo a asesor' | 'warm_nurturing' | 'cold_educacion' | 'cold_afiliacion' | null;
  perfilEstadistico: string;
  perfilEstadisticoRiesgoDesistimiento: number | null;
  datacredito: DataCreditoInfo;
  brochureEnviado: string | null;
  timestamp: string | null;
}

export interface HousingProject {
  id: string;
  name: string;
  type: HousingCategory;
  municipality: string;
  address: string;
  lat: number;
  lng: number;
  minPriceCOP: number;
  maxPriceCOP: number;
  smmlvPrice?: string;
  unitsTotal: number;
  unitsAvailable: number;
  subsidyApplicable: boolean;
  cajaSubsidioAmountCOP: number;
  image: string;
  deliveryDate: string;
  description: string;
  features: string[];
  rotationAlert?: boolean;
}

export interface BuyerPersona {
  id: string;
  title: string;
  clusterName: string;
  percentageOfLeads: number;
  targetHousing: HousingCategory;
  incomeRangeCOP: string;
  averageAge: string;
  demographics: string;
  keyPainPoints: string[];
  buyingTriggers: string[];
  preferredChannels: string[];
  recommendedProjects: string[];
  aiCommercialScript: string;
}

export interface Campaign {
  id: string;
  name: string;
  channel: 'Meta Ads' | 'Google Search' | 'TikTok' | 'Email Marketing' | 'WhatsApp Push';
  status: 'Activa' | 'Pausada' | 'Borrador';
  targetProject: string;
  budgetCOP: number;
  spentCOP: number;
  leadsGenerated: number;
  costPerLeadCOP: number;
  ctr: number;
  aiCopyVariantA: string;
  aiCopyVariantB: string;
  conversionRate: number;
}

export interface Task {
  id: string;
  title: string;
  leadName: string;
  leadPhone: string;
  type: 'Llamada' | 'WhatsApp' | 'Cita Presencial' | 'Enviar Cotización';
  dueDate: string;
  dueTime: string;
  completed: boolean;
  priority: 'Alta' | 'Media' | 'Baja';
}

export interface Deal {
  id: string;
  leadId: string;
  leadName: string;
  projectName: string;
  unitCode: string;
  valueCOP: number;
  stage: 'Prospección' | 'Cita Sala' | 'Pre-Aprobado' | 'Promesa Firmada' | 'Cierre Exitoso';
  probability: number;
  closingDate: string;
  subsidyStatus: 'En Verificación' | 'Aprobado Caja' | 'Aprobado Mi Casa Ya' | 'Sin Subsidio';
}
