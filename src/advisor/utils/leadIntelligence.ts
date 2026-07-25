import { Lead } from '../types';

export interface LeadEscalation {
  active: boolean;
  level: 0 | 1 | 2 | 3;
  reasons: string[];
  resolutionAction: string;
}

export interface FinancialPreviabilityResult {
  status:
    | 'potencialmente_viable'
    | 'viable_con_informacion_parcial'
    | 'pendiente_validacion'
    | 'informacion_insuficiente'
    | 'no_viable_para_proyecto';
  label: string;
  positiveSignals: string[];
  pendingAlerts: string[];
}

export interface PurchaseIntentResult {
  status: 'alta' | 'media' | 'baja' | 'sin_informacion';
  label: string;
  signals: string[];
  alerts: string[];
}

export interface NextBestAction {
  action: string;
  objective: string;
  missingData: string[];
  followUpAction: string;
}

/** Check if Sofía has actively profiled this lead */
export function isSofiaProfileComplete(lead: Lead): boolean {
  return Boolean(
    lead.sofia &&
      (lead.sofia.timestamp !== null ||
        lead.sofia.score !== null ||
        lead.sofia.fuente !== null ||
        lead.sofia.timeline !== null)
  );
}

/** Pure automatic escalation logic for InicioView (No "Prioridad" visible label) */
export function getLeadEscalation(lead: Lead): LeadEscalation {
  const sofia = lead.sofia;
  const isProfiled = isSofiaProfileComplete(lead);
  const reasons: string[] = [];

  if (!isProfiled) {
    return {
      active: false,
      level: 0,
      reasons: ['Perfilamiento por Sofía pendiente'],
      resolutionAction: 'Iniciar conversación en WhatsApp para perfilar el lead',
    };
  }

  let points = 0;

  // Hot score from Sofía
  if (sofia.score === 'hot' || lead.temperature === 'Hot') {
    points += 3;
    reasons.push('Clasificado como lead Hot por Sofía');
  }

  // Short purchase timeline
  if (sofia.timeline === '0-3 meses') {
    points += 3;
    reasons.push('Horizonte de compra a corto plazo (0-3 meses)');
  }

  // Pass direct to advisor
  if (
    sofia.remarketingTrack?.includes('pasa directo a asesor') ||
    sofia.remarketingTrack?.startsWith('none')
  ) {
    points += 2;
    reasons.push('Escalado directo a asesor por Sofía');
  }

  // Brief mentions visit or ready to buy
  if (
    sofia.briefAsesor &&
    (sofia.briefAsesor.toLowerCase().includes('visita') ||
      sofia.briefAsesor.toLowerCase().includes('listo') ||
      sofia.briefAsesor.toLowerCase().includes('compra'))
  ) {
    points += 2;
    reasons.push('Brief de Sofía indica intención de visita inmediata');
  }

  // Project interest defined
  if (sofia.proyectoInteresOriginal || lead.recommendedProjectId) {
    points += 1;
    reasons.push('Proyecto de interés específico identificado');
  }

  // Initial deposit source informed
  if (
    sofia.fuenteCuotaInicial &&
    sofia.fuenteCuotaInicial !== 'no preguntado' &&
    sofia.fuenteCuotaInicial !== 'ninguno mencionado'
  ) {
    points += 1;
    reasons.push(`Cuenta con fuente de cuota inicial (${sofia.fuenteCuotaInicial})`);
  }

  // Recent update
  if (sofia.timestamp) {
    points += 1;
  }

  // Deductions for long timeline or cold
  if (sofia.timeline === 'explorando' || sofia.timeline === '+12 meses') {
    points -= 2;
  }

  let level: 0 | 1 | 2 | 3 = 0;
  if (points >= 7) level = 3;
  else if (points >= 4) level = 2;
  else if (points >= 2) level = 1;

  const active = level >= 2;

  let resolutionAction = 'Contactar al lead para agendar visita al proyecto';
  if (sofia.timeline === '0-3 meses' && sofia.creditoPrevio === false) {
    resolutionAction = 'Realizar simulación de crédito y validar preaprobación';
  } else if (!lead.colsubsidioAfiliado && sofia.esAfiliado === false) {
    resolutionAction = 'Orientar sobre afiliación a Colsubsidio y opciones de subsidio';
  }

  return {
    active,
    level,
    reasons,
    resolutionAction,
  };
}

/** Previabilidad financiera basada estrictamente en datos conocidos de Sofía */
export function getFinancialPreviability(lead: Lead): FinancialPreviabilityResult {
  const sofia = lead.sofia;
  const isProfiled = isSofiaProfileComplete(lead);

  const positiveSignals: string[] = [];
  const pendingAlerts: string[] = [];

  // Afiliación
  if (sofia.esAfiliado === true || lead.colsubsidioAfiliado) {
    const cat = sofia.categoriaAfiliado && sofia.categoriaAfiliado !== 'Desconocida' 
      ? `Categoría ${sofia.categoriaAfiliado}` 
      : lead.afiliacionCategoria || 'Afiliado Colsubsidio';
    positiveSignals.push(`Afiliado Colsubsidio (${cat}) - Aplica a subsidios de vivienda`);
  } else if (sofia.esAfiliado === false) {
    pendingAlerts.push('No es afiliado a Colsubsidio (requiere validar alternativas de crédito)');
  } else {
    pendingAlerts.push('Estado de afiliación a Colsubsidio no confirmado');
  }

  // Cuota inicial
  if (
    sofia.fuenteCuotaInicial &&
    sofia.fuenteCuotaInicial !== 'no preguntado' &&
    sofia.fuenteCuotaInicial !== 'ninguno mencionado'
  ) {
    positiveSignals.push(`Fuente de cuota inicial informada: ${sofia.fuenteCuotaInicial}`);
  } else {
    pendingAlerts.push('No se conoce el origen de la cuota inicial (ahorro/cesantías)');
  }

  // Primera vivienda
  if (sofia.primeraVivienda === true) {
    positiveSignals.push('Busca primera vivienda (aplica a concurrencia Mi Casa Ya + Caja)');
  } else if (sofia.primeraVivienda === false) {
    pendingAlerts.push('No es su primera vivienda (no aplica a subsidio Mi Casa Ya)');
  }

  // Rango salarial
  if (sofia.rangoSalarial && sofia.rangoSalarial !== 'Desconocido') {
    positiveSignals.push(`Rango salarial declarado: ${sofia.rangoSalarial}`);
  } else {
    pendingAlerts.push('Rango salarial exacto sin confirmar');
  }

  // Crédito previo
  if (sofia.creditoPrevio === true) {
    positiveSignals.push('Ha consultado crédito hipotecario previamente');
  } else if (sofia.creditoPrevio === false) {
    pendingAlerts.push('No ha iniciado consulta o trámite de crédito hipotecario');
  } else {
    pendingAlerts.push('Experiencia crediticia previa no informada');
  }

  // DataCrédito status
  if (sofia.datacredito && sofia.datacredito.consultado) {
    positiveSignals.push(
      `DataCrédito consultado: ${sofia.datacredito.puntaje ?? 'N/A'} pts (Riesgo ${sofia.datacredito.nivelRiesgo ?? 'Desconocido'})`
    );
  } else {
    pendingAlerts.push('DataCrédito: No consultado');
  }

  if (!isProfiled) {
    return {
      status: 'informacion_insuficiente',
      label: 'Información insuficiente',
      positiveSignals,
      pendingAlerts,
    };
  }

  if (positiveSignals.length >= 3 && sofia.rangoSalarial !== 'Desconocido') {
    return {
      status: 'potencialmente_viable',
      label: 'Potencialmente viable',
      positiveSignals,
      pendingAlerts,
    };
  }

  return {
    status: 'pendiente_validacion',
    label: 'Pendiente de validar',
    positiveSignals,
    pendingAlerts,
  };
}

/** Evaluation of Purchase Intent */
export function getPurchaseIntent(lead: Lead): PurchaseIntentResult {
  const sofia = lead.sofia;
  const isProfiled = isSofiaProfileComplete(lead);

  const signals: string[] = [];
  const alerts: string[] = [];

  if (!isProfiled) {
    return {
      status: 'sin_informacion',
      label: 'Sin información',
      signals: [],
      alerts: ['Perfilamiento conversacional pendiente en WhatsApp'],
    };
  }

  if (sofia.timeline) {
    signals.push(`Horizonte de compra: ${sofia.timeline}`);
  }

  if (sofia.motivacion) {
    signals.push(`Motivación declarada: ${sofia.motivacion}`);
  }

  if (sofia.proyectoInteresOriginal) {
    signals.push(`Interés específico en proyecto: ${sofia.proyectoInteresOriginal}`);
  }

  if (sofia.timeline === '0-3 meses' || sofia.score === 'hot' || lead.temperature === 'Hot') {
    return {
      status: 'alta',
      label: 'Alta',
      signals,
      alerts,
    };
  }

  if (sofia.timeline === '3-6 meses' || sofia.timeline === '6-12 meses' || sofia.score === 'warm') {
    return {
      status: 'media',
      label: 'Media',
      signals,
      alerts,
    };
  }

  alerts.push('Horizonte de compra lejano o en etapa exploratoria');
  return {
    status: 'baja',
    label: 'Baja',
    signals,
    alerts,
  };
}

/** Next Best Action logic strictly derived from current lead fields */
export function getNextBestAction(lead: Lead): NextBestAction {
  const sofia = lead.sofia;
  const isProfiled = isSofiaProfileComplete(lead);

  if (!isProfiled) {
    return {
      action: 'Iniciar conversación en WhatsApp con Sofía',
      objective: 'Perfilar capacidad financiera, horizonte de compra y proyecto de interés.',
      missingData: ['Rango salarial', 'Afiliación', 'Horizonte de compra'],
      followUpAction: 'Enviar plantilla de bienvenida vía WhatsApp',
    };
  }

  if (sofia.esAfiliado === false && !lead.colsubsidioAfiliado) {
    return {
      action: 'Orientar sobre afiliación a Colsubsidio y opciones de subsidio',
      objective: 'Explicar vías de acceso a subsidio de vivienda para independientes o no afiliados.',
      missingData: ['Estado de afiliación empleador'],
      followUpAction: 'Enviar guía de afiliación a Caja de Compensación',
    };
  }

  if (!sofia.rangoSalarial || sofia.rangoSalarial === 'Desconocido') {
    return {
      action: 'Completar información de ingresos y presupuesto',
      objective: 'Verificar si los ingresos familiares cubren el valor de la cuota inicial.',
      missingData: ['Rango salarial exacto', 'Obligaciones mensuales'],
      followUpAction: 'Llamada comercial breve para perfilamiento financiero',
    };
  }

  if (sofia.timeline === '0-3 meses' && sofia.creditoPrevio === false) {
    return {
      action: 'Validar capacidad financiera y realizar simulación de crédito',
      objective: 'Calcular cuota inicial y proyectar crédito hipotecario o leasing.',
      missingData: ['Monto exacto de cesantías/ahorros', 'Consulta DataCrédito'],
      followUpAction: 'Enviar simulador financiero por WhatsApp',
    };
  }

  if (sofia.timeline === '0-3 meses' || sofia.score === 'hot' || lead.temperature === 'Hot') {
    return {
      action: 'Contactar al lead y agendar visita presencial a Sala de Ventas',
      objective: 'Aprovechar la alta intención de compra y cerrar separación de unidad.',
      missingData: ['Disponibilidad de agenda del lead'],
      followUpAction: 'Agendar cita en el calendario del CRM y enviar ubicación',
    };
  }

  if (sofia.score === 'warm') {
    return {
      action: 'Completar perfil de interés y enviar material del proyecto',
      objective: 'Resolver dudas sobre acabados, zonas comunes y opciones de pago.',
      missingData: ['Preferencia de parqueadero/bodega'],
      followUpAction: 'Enviar brochure digital e invitar a recorrido virtual',
    };
  }

  return {
    action: 'Activar ruta de nutrición y educación sobre vivienda',
    objective: 'Mantener el engagement con el lead para su decisión de compra futura.',
    missingData: ['Horizonte de decisión final'],
    followUpAction: 'Programar mensaje de seguimiento automatizado en 15 días',
  };
}

/** Critical pending data for advisor verification */
export function getPendingData(lead: Lead): string[] {
  const sofia = lead.sofia;
  const pending: string[] = [];

  if (!isSofiaProfileComplete(lead)) {
    return ['Perfilamiento conversacional completo por Sofía'];
  }

  if (!sofia.rangoSalarial || sofia.rangoSalarial === 'Desconocido') {
    pending.push('Rango salarial / Ingresos familiares');
  }

  if (sofia.fuenteCuotaInicial === 'no preguntado' || sofia.fuenteCuotaInicial === 'ninguno mencionado') {
    pending.push('Fuente de cuota inicial (ahorros/cesantías)');
  }

  if (sofia.creditoPrevio === null) {
    pending.push('Experiencia o consulta crediticia previa');
  }

  if (!sofia.datacredito || !sofia.datacredito.consultado) {
    pending.push('Consulta de scoring DataCrédito');
  }

  if (sofia.esAfiliado === null) {
    pending.push('Categoría y estado de afiliación Colsubsidio');
  }

  if (!sofia.motivacion) {
    pending.push('Motivación principal de compra');
  }

  if (!sofia.timeline || sofia.timeline === 'explorando') {
    pending.push('Horizonte temporal de compra definitivo');
  }

  return pending;
}

/** Stable Lead sorting algorithm for InicioView
 * Priorities:
 * 1. Escalated leads (level 3 -> level 2)
 * 2. Recent Sofía timestamp
 * 3. High purchase intent
 * 4. Hot score leads
 * 5. Warm score leads
 * 6. Leads with pending Sofía profiles at bottom
 */
export function sortLeadsForInicio(leads: Lead[]): Lead[] {
  return [...leads].sort((a, b) => {
    const escA = getLeadEscalation(a);
    const escB = getLeadEscalation(b);

    // 1. Escalation level descending
    if (escA.level !== escB.level) {
      return escB.level - escA.level;
    }

    // 2. Active Sofía profile vs unprofiled
    const profA = isSofiaProfileComplete(a);
    const profB = isSofiaProfileComplete(b);
    if (profA !== profB) {
      return profA ? -1 : 1;
    }

    // 3. Sofía Timestamp descending
    const timeA = a.sofia?.timestamp ? new Date(a.sofia.timestamp).getTime() : 0;
    const timeB = b.sofia?.timestamp ? new Date(b.sofia.timestamp).getTime() : 0;
    if (timeA !== timeB) {
      return timeB - timeA;
    }

    // 4. Intent status (alta > media > baja > sin_informacion)
    const intentOrder = { alta: 3, media: 2, baja: 1, sin_informacion: 0 };
    const intentA = intentOrder[getPurchaseIntent(a).status];
    const intentB = intentOrder[getPurchaseIntent(b).status];
    if (intentA !== intentB) {
      return intentB - intentA;
    }

    // 5. Total Score descending
    return (b.scores?.total ?? 0) - (a.scores?.total ?? 0);
  });
}
