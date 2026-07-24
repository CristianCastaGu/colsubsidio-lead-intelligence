import { Lead, HousingProject, BuyerPersona, Campaign, Task, Deal } from '../types';
import { REAL_LEADS, REAL_PROJECTS, REAL_DEALS, REAL_TASKS } from './realAdvisorData';

// Leads, proyectos, negocios y tareas provienen del cruce real de
// leads_meta_sim + afiliados_sim + proyectos_catalogo (ver scripts/generate-analytics.cjs).
export const MOCK_PROJECTS: HousingProject[] = REAL_PROJECTS;

export const MOCK_LEADS: Lead[] = REAL_LEADS;

export const MOCK_BUYER_PERSONAS: BuyerPersona[] = [
  {
    id: 'bp-1',
    title: 'Familia Joven - Mi Primer Hogar VIS',
    clusterName: 'Cluster 1: Afiliados Cat A/B con Subsidio Aprobado',
    percentageOfLeads: 42,
    targetHousing: 'VIS',
    incomeRangeCOP: '$2.6M - $5.2M COP (2 a 4 SMMLV)',
    averageAge: '26 - 36 años',
    demographics: 'Parejas jóvenes con 1 hijo o en planes, asalariados de empresas colombianas afiliadas a Colsubsidio.',
    keyPainPoints: [
      'Incertidumbre en la asignación del subsidio Mi Casa Ya y tiempos de desembolso.',
      'Miedo a no completar la cuota inicial acumulada durante la construcción.',
      'Poca claridad en la combinación del subsidio de la Caja con el crédito hipotecario.'
    ],
    buyingTriggers: [
      'Confirmación de asignación directa del Subsidio Familiar de Vivienda Colsubsidio.',
      'Proyectos cerca a rutas de transporte principal (TransMilenio / Regiotram).',
      'Cuota mensual de crédito inferior o equivalente al valor del arriendo actual.'
    ],
    preferredChannels: ['WhatsApp (90%)', 'Pauta Instagram/Facebook', 'Asesoría presencial'],
    recommendedProjects: ['Ciudadela Verde - Soacha', 'Altos de Mosquera', 'Bosques de Tocancipá'],
    aiCommercialScript: '¡Hola [Nombre]! Como afiliado a Colsubsidio en Categoría B, tienes derecho a recibir hasta $39.000.000 COP en subsidio directo de vivienda para tu primer hogar. En Ciudadela Verde puedes separar tu apto de 3 alcobas con cuotas mensuales muy ajustadas. ¿Te gustaría que hagamos la simulación exacta por WhatsApp?'
  },
  {
    id: 'bp-2',
    title: 'Profesional Independiente No VIS - Sabana Centro',
    clusterName: 'Cluster 2: Compradores de Valorización Sabana',
    percentageOfLeads: 28,
    targetHousing: 'No VIS',
    incomeRangeCOP: '$7.5M - $15M COP',
    averageAge: '32 - 45 años',
    demographics: 'Profesionales, consultores o emprendedores que buscan calidad de vida fuera de Bogotá (Chía, Cajicá, Sopó).',
    keyPainPoints: [
      'Tráfico de ingreso a Bogotá durante horas pico.',
      'Exigencia de acabados de alta calidad y conectividad para teletrabajo.',
      'Comparación rigurosa de precio por metro cuadrado frente a la competencia.'
    ],
    buyingTriggers: [
      'Zonas comunes enfocadas en bienestar (Club House, gimnasio, piscina, coworking).',
      'Descuentos por pago rápido de cuota inicial.',
      'Vistas a la montaña y entorno seguro y silencioso.'
    ],
    preferredChannels: ['Email Marketing', 'Google Search', 'Cita agendada en Sala de Ventas'],
    recommendedProjects: ['Reservas de Cajicá', 'Metrópolis Suba'],
    aiCommercialScript: 'Estimado [Nombre], sabemos que buscas tranquilidad y valorización en la Sabana de Bogotá. Reservas de Cajicá cuenta con diseño de vanguardia, zonas de coworking y club house completo. Te invitamos a una experiencia VIP en nuestra Sala de Ventas este fin de semana con parqueadero reservado.'
  },
  {
    id: 'bp-3',
    title: 'Inversionista de Renta & Vacacional',
    clusterName: 'Cluster 3: Inversión Patrimonio Colsubsidio',
    percentageOfLeads: 18,
    targetHousing: 'No VIS',
    incomeRangeCOP: '$10M+ COP',
    averageAge: '40 - 60 años',
    demographics: 'Inversionistas que buscan renta corta/larga o segunda vivienda en zonas cálidas de Cundinamarca (Girardot, Ricaurte).',
    keyPainPoints: ['Retorno de inversión (ROI) incierto.', 'Mantenimiento y administración a distancia.'],
    buyingTriggers: ['Alta demanda de alquiler vacacional.', 'Proyectos entregados con acabados o tipo resort.'],
    preferredChannels: ['Llamada directa', 'Email institucional', 'Feria de Vivienda'],
    recommendedProjects: ['Portal de Girardot - Sol y Agua'],
    aiCommercialScript: 'Hola [Nombre], Portal de Girardot es el proyecto de inversión con mayor proyección de rentabilidad por alquiler vacacional de Colsubsidio. Cuenta con acabados listos y gestión simplificada. ¿Revisamos la proyección de rentabilidad anual?'
  }
];

export const MOCK_TASKS: Task[] = REAL_TASKS;

export const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: 'camp-1',
    name: 'Mi Casa Ya + Subsidio Colsubsidio 2026',
    channel: 'Meta Ads',
    status: 'Activa',
    targetProject: 'Ciudadela Verde - Soacha',
    budgetCOP: 15000000,
    spentCOP: 8400000,
    leadsGenerated: 248,
    costPerLeadCOP: 33870,
    ctr: 3.82,
    aiCopyVariantA: '🏡 ¡Tu primer hogar en Soacha con hasta $39 Millones de Subsidio Colsubsidio! Aplica con tu subsidio de vivienda y estrena apto de 3 alcobas. Da clic aquí.',
    aiCopyVariantB: '🔑 Dejas de pagar arriendo HOY. Con la concurrencia de Subsidio Colsubsidio + Mi Casa Ya, tu cuota inicial es mucho más baja de lo que piensas. Descubre cómo aquí.',
    conversionRate: 14.2
  },
  {
    id: 'camp-2',
    name: 'Búsqueda Proyectos Sabana No VIS',
    channel: 'Google Search',
    status: 'Activa',
    targetProject: 'Reservas de Cajicá',
    budgetCOP: 20000000,
    spentCOP: 12100000,
    leadsGenerated: 112,
    costPerLeadCOP: 108035,
    ctr: 5.15,
    aiCopyVariantA: 'Apartamentos Campestres en Cajicá | Colsubsidio Vivienda. Club House, Piscina y Coworking. Agenda tu visita guiada este fin de semana.',
    aiCopyVariantB: 'Vive rodeado de naturaleza en Cajicá. Proyectos de vivienda No VIS con el respaldo y confianza de Colsubsidio. Conoce más.',
    conversionRate: 18.5
  },
  {
    id: 'camp-3',
    name: 'TikTok Jóvenes Afiliados Colsubsidio',
    channel: 'TikTok',
    status: 'Activa',
    targetProject: 'Bosques de Tocancipá',
    budgetCOP: 8000000,
    spentCOP: 4200000,
    leadsGenerated: 185,
    costPerLeadCOP: 22702,
    ctr: 4.10,
    aiCopyVariantA: ' POV: Tienes 25 años y te das cuenta que el Subsidio de Vivienda Colsubsidio te paga casi la mitad de tu departamento 😱. Mira el tutorial aquí.',
    aiCopyVariantB: '3 pasos para comprar apartamento propio en Cundinamarca antes de los 30. Respaldo Colsubsidio.',
    conversionRate: 9.8
  }
];

export const MOCK_DEALS: Deal[] = REAL_DEALS;
