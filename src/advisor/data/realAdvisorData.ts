// AUTO-GENERADO por scripts/generate-analytics.cjs — los mismos 200 leads
// reales (leads_meta_sim + afiliados_sim + proyectos_catalogo), en la forma nativa
// de la app del asesor (Lead / HousingProject / Deal / Task de ../types.ts).
// No editar a mano; volver a correr el script.
import type { Lead, HousingProject, Deal, Task } from '../types';

export const REAL_LEADS: Lead[] = [
  {
    "id": "LEAD-1000",
    "name": "Camilo Rojas Castro",
    "email": "camilo.rojas@hotmail.com",
    "phone": "+57 359 652 8081",
    "city": "Chía",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 256300000,
    "downPaymentCOP": 20504000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "inari",
    "matchPercentage": 40,
    "scores": {
      "fit": 15,
      "intent": 48,
      "engagement": 44,
      "conversion": 31,
      "total": 34
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (48/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1001",
    "name": "Daniela Mora Reyes",
    "email": "daniela.mora@hotmail.com",
    "phone": "+57 327 524 9732",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 253300000,
    "downPaymentCOP": 20264000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "saman",
    "matchPercentage": 40,
    "scores": {
      "fit": 9,
      "intent": 65,
      "engagement": 54,
      "conversion": 51,
      "total": 44
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (65/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 21 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1002",
    "name": "Ana Rincón Mora",
    "email": "ana.rincon@outlook.com",
    "phone": "+57 304 849 5745",
    "city": "Ubaté",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 222720000,
    "downPaymentCOP": 17817600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 46,
    "scores": {
      "fit": 24,
      "intent": 67,
      "engagement": 60,
      "conversion": 56,
      "total": 51
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (67/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1003",
    "name": "Santiago Rojas Vargas",
    "email": "santiago.rojas@hotmail.com",
    "phone": "+57 353 232 8873",
    "city": "Ricaurte",
    "channel": "Google Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "En Negociación",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 253300000,
    "downPaymentCOP": 20264000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "saman",
    "matchPercentage": 42,
    "scores": {
      "fit": 14,
      "intent": 70,
      "engagement": 67,
      "conversion": 52,
      "total": 49
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (70/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 2 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1004",
    "name": "Miguel Ortiz Moreno",
    "email": "miguel.ortiz@hotmail.com",
    "phone": "+57 305 249 6800",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 253300000,
    "downPaymentCOP": 20264000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "saman",
    "matchPercentage": 41,
    "scores": {
      "fit": 6,
      "intent": 75,
      "engagement": 40,
      "conversion": 40,
      "total": 41
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (75/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 2 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1005",
    "name": "Sebastián Pineda Díaz",
    "email": "sebastian.pineda@gmail.com",
    "phone": "+57 304 172 6318",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 184020000,
    "downPaymentCOP": 14721600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 45,
    "scores": {
      "fit": 26,
      "intent": 63,
      "engagement": 39,
      "conversion": 35,
      "total": 42
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (63/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1006",
    "name": "Paola Cruz Rincón",
    "email": "paola.cruz@gmail.com",
    "phone": "+57 329 188 3846",
    "city": "Fusagasugá",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 530200000,
    "downPaymentCOP": 106040000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 40,
    "scores": {
      "fit": 18,
      "intent": 52,
      "engagement": 48,
      "conversion": 48,
      "total": 41
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (52/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 20 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1007",
    "name": "Alejandro González Ríos",
    "email": "alejandro.gonzalez@outlook.com",
    "phone": "+57 322 159 4468",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 191340000,
    "downPaymentCOP": 15307200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "pamplona",
    "matchPercentage": 40,
    "scores": {
      "fit": 23,
      "intent": 44,
      "engagement": 27,
      "conversion": 34,
      "total": 33
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (44/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1008",
    "name": "Ángela Reyes Castro",
    "email": "angela.reyes@outlook.com",
    "phone": "+57 323 248 2565",
    "city": "Chía",
    "channel": "Google Ads",
    "campaign": "Bogota No Vis",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 215820000,
    "downPaymentCOP": 17265600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "versalles",
    "matchPercentage": 57,
    "scores": {
      "fit": 54,
      "intent": 59,
      "engagement": 50,
      "conversion": 51,
      "total": 54
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (59/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1009",
    "name": "Valentina Moreno Rincón",
    "email": "valentina.moreno@outlook.com",
    "phone": "+57 302 871 3077",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 183250000,
    "downPaymentCOP": 14660000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 47,
    "scores": {
      "fit": 25,
      "intent": 68,
      "engagement": 37,
      "conversion": 48,
      "total": 46
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (68/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1010",
    "name": "Camila Hernández Jiménez",
    "email": "camila.hernandez@outlook.com",
    "phone": "+57 309 162 4673",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 183250000,
    "downPaymentCOP": 14660000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 40,
    "scores": {
      "fit": 25,
      "intent": 48,
      "engagement": 27,
      "conversion": 29,
      "total": 33
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (48/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1011",
    "name": "Juan Hernández Ospina",
    "email": "juan.hernandez@gmail.com",
    "phone": "+57 352 172 7533",
    "city": "Ciudadela Calle 80",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 529000000,
    "downPaymentCOP": 105800000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 40,
    "scores": {
      "fit": 6,
      "intent": 59,
      "engagement": 44,
      "conversion": 42,
      "total": 37
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (59/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1012",
    "name": "Javier Romero Ruiz",
    "email": "javier.romero@gmail.com",
    "phone": "+57 359 991 3412",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 194030000,
    "downPaymentCOP": 15522400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat C",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 58,
    "scores": {
      "fit": 39,
      "intent": 76,
      "engagement": 49,
      "conversion": 54,
      "total": 56
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría C con subsidio VIS aplicable. Su señal más fuerte es intención de compra (76/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 23 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1013",
    "name": "Yolanda Cárdenas Cárdenas",
    "email": "yolanda.cardenas@gmail.com",
    "phone": "+57 325 551 1258",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 190180000,
    "downPaymentCOP": 15214400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "pamplona",
    "matchPercentage": 40,
    "scores": {
      "fit": 21,
      "intent": 53,
      "engagement": 52,
      "conversion": 44,
      "total": 42
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (53/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1014",
    "name": "Adriana Herrera Vargas",
    "email": "adriana.herrera@outlook.com",
    "phone": "+57 316 688 5794",
    "city": "Ubaté",
    "channel": "Google Ads",
    "campaign": "Primer Hogar Chia",
    "status": "Ganado",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 161140000,
    "downPaymentCOP": 12891200,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "verde-esperanza",
    "matchPercentage": 57,
    "scores": {
      "fit": 23,
      "intent": 90,
      "engagement": 66,
      "conversion": 62,
      "total": 60
    },
    "priority": "Muy Alta",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (90/100). Ya completó 7 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Promesa de compraventa firmada",
        "details": "Firmó promesa de compraventa.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1015",
    "name": "Santiago Cárdenas Gómez",
    "email": "santiago.cardenas@outlook.com",
    "phone": "+57 327 083 8623",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "No VIS",
    "budgetCOP": 533800000,
    "downPaymentCOP": 106760000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 49,
    "scores": {
      "fit": 27,
      "intent": 70,
      "engagement": 59,
      "conversion": 60,
      "total": 54
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (70/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1016",
    "name": "Héctor Moreno Ruiz",
    "email": "hector.moreno@outlook.com",
    "phone": "+57 354 709 5573",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 205920000,
    "downPaymentCOP": 16473600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "versalles",
    "matchPercentage": 44,
    "scores": {
      "fit": 24,
      "intent": 64,
      "engagement": 60,
      "conversion": 53,
      "total": 49
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (64/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 16 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1017",
    "name": "Daniel Ruiz Suárez",
    "email": "daniel.ruiz@outlook.com",
    "phone": "+57 328 433 8760",
    "city": "Ciudadela Calle 80",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 608000000,
    "downPaymentCOP": 121600000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "araucaria",
    "matchPercentage": 40,
    "scores": {
      "fit": 9,
      "intent": 71,
      "engagement": 40,
      "conversion": 47,
      "total": 42
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (71/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1018",
    "name": "Juan García Álvarez",
    "email": "juan.garcia@gmail.com",
    "phone": "+57 325 028 8055",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Familia Maipore",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 180940000,
    "downPaymentCOP": 14475200,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 47,
    "scores": {
      "fit": 22,
      "intent": 71,
      "engagement": 48,
      "conversion": 44,
      "total": 47
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (71/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1019",
    "name": "Diana Acosta Ortiz",
    "email": "diana.acosta@gmail.com",
    "phone": "+57 302 601 9511",
    "city": "Tocancipá",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 217950000,
    "downPaymentCOP": 17436000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 40,
    "scores": {
      "fit": 6,
      "intent": 43,
      "engagement": 36,
      "conversion": 26,
      "total": 27
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (43/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1020",
    "name": "Santiago Cárdenas Gómez",
    "email": "santiago.cardenas@hotmail.com",
    "phone": "+57 327 083 8623",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 205920000,
    "downPaymentCOP": 16473600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "versalles",
    "matchPercentage": 46,
    "scores": {
      "fit": 24,
      "intent": 67,
      "engagement": 36,
      "conversion": 40,
      "total": 43
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (67/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1021",
    "name": "Javier Gómez Romero",
    "email": "javier.gomez@gmail.com",
    "phone": "+57 302 961 4192",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 186700000,
    "downPaymentCOP": 14936000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "pamplona",
    "matchPercentage": 40,
    "scores": {
      "fit": 4,
      "intent": 46,
      "engagement": 48,
      "conversion": 38,
      "total": 33
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (46/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1022",
    "name": "Yolanda Rojas Sánchez",
    "email": "yolanda.rojas@hotmail.com",
    "phone": "+57 358 583 3309",
    "city": "Soacha",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 238520000,
    "downPaymentCOP": 19081600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 52,
    "scores": {
      "fit": 28,
      "intent": 76,
      "engagement": 68,
      "conversion": 62,
      "total": 58
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (76/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1023",
    "name": "Andrés Torres Pardo",
    "email": "andres.torres@hotmail.com",
    "phone": "+57 322 621 3828",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 141820000,
    "downPaymentCOP": 11345600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat C",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-macarena",
    "matchPercentage": 48,
    "scores": {
      "fit": 34,
      "intent": 62,
      "engagement": 32,
      "conversion": 41,
      "total": 44
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría C con subsidio VIS aplicable. Su señal más fuerte es intención de compra (62/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1024",
    "name": "Mónica Ospina Castro",
    "email": "monica.ospina@outlook.com",
    "phone": "+57 307 567 9047",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "No VIS",
    "budgetCOP": 531400000,
    "downPaymentCOP": 106280000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 48,
    "scores": {
      "fit": 21,
      "intent": 75,
      "engagement": 54,
      "conversion": 56,
      "total": 52
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría B con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (75/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1025",
    "name": "Paola Ospina Mora",
    "email": "paola.ospina@gmail.com",
    "phone": "+57 322 928 9438",
    "city": "Chía",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 256300000,
    "downPaymentCOP": 20504000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "inari",
    "matchPercentage": 42,
    "scores": {
      "fit": 8,
      "intent": 75,
      "engagement": 44,
      "conversion": 43,
      "total": 43
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (75/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1026",
    "name": "Tatiana Herrera Rodríguez",
    "email": "tatiana.herrera@outlook.com",
    "phone": "+57 309 920 1885",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 172280000,
    "downPaymentCOP": 13782400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 48,
    "scores": {
      "fit": 34,
      "intent": 61,
      "engagement": 38,
      "conversion": 49,
      "total": 47
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (61/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1027",
    "name": "Nicolás Ríos González",
    "email": "nicolas.rios@outlook.com",
    "phone": "+57 302 761 3681",
    "city": "Chía",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 256300000,
    "downPaymentCOP": 20504000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "inari",
    "matchPercentage": 46,
    "scores": {
      "fit": 12,
      "intent": 79,
      "engagement": 52,
      "conversion": 48,
      "total": 48
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (79/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 2 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1028",
    "name": "Daniel Moreno Medina",
    "email": "daniel.moreno@outlook.com",
    "phone": "+57 322 446 4073",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Perdido",
    "temperature": "Warm",
    "housingInterest": "No VIS",
    "budgetCOP": 530200000,
    "downPaymentCOP": 106040000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 45,
    "scores": {
      "fit": 18,
      "intent": 71,
      "engagement": 65,
      "conversion": 45,
      "total": 49
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría B con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (71/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1029",
    "name": "Katherine Jiménez Ríos",
    "email": "katherine.jimenez@outlook.com",
    "phone": "+57 355 199 6390",
    "city": "Soacha",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 154700000,
    "downPaymentCOP": 12376000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": false,
    "recommendedProjectId": "la-macarena",
    "matchPercentage": 66,
    "scores": {
      "fit": 90,
      "intent": 42,
      "engagement": 36,
      "conversion": 59,
      "total": 59
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es capacidad de pago (90/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1030",
    "name": "Diego Gutiérrez González",
    "email": "diego.gutierrez@hotmail.com",
    "phone": "+57 324 853 0827",
    "city": "Soacha",
    "channel": "Google Ads",
    "campaign": "Familia Maipore",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 181100000,
    "downPaymentCOP": 14488000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 61,
    "scores": {
      "fit": 55,
      "intent": 67,
      "engagement": 63,
      "conversion": 65,
      "total": 62
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (67/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1031",
    "name": "Ana Torres Díaz",
    "email": "ana.torres@outlook.com",
    "phone": "+57 309 855 5359",
    "city": "Ciudadela Calle 80",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 529000000,
    "downPaymentCOP": 105800000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 40,
    "scores": {
      "fit": 10,
      "intent": 70,
      "engagement": 40,
      "conversion": 46,
      "total": 42
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (70/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1032",
    "name": "Lina Rincón Romero",
    "email": "lina.rincon@outlook.com",
    "phone": "+57 319 364 6063",
    "city": "Fusagasugá",
    "channel": "Google Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 259240000,
    "downPaymentCOP": 20739200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "inari",
    "matchPercentage": 48,
    "scores": {
      "fit": 22,
      "intent": 74,
      "engagement": 65,
      "conversion": 55,
      "total": 53
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (74/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1033",
    "name": "Andrés Rincón Muñoz",
    "email": "andres.rincon@gmail.com",
    "phone": "+57 358 006 7590",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 206420000,
    "downPaymentCOP": 16513600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "pamplona",
    "matchPercentage": 58,
    "scores": {
      "fit": 49,
      "intent": 67,
      "engagement": 38,
      "conversion": 60,
      "total": 55
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (67/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1034",
    "name": "Tatiana Jiménez Álvarez",
    "email": "tatiana.jimenez@gmail.com",
    "phone": "+57 313 753 9747",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Bogota No Vis",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "No VIS",
    "budgetCOP": 532600000,
    "downPaymentCOP": 106520000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 48,
    "scores": {
      "fit": 24,
      "intent": 71,
      "engagement": 57,
      "conversion": 43,
      "total": 48
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría B con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (71/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1035",
    "name": "Sofía Castillo Vargas",
    "email": "sofia.castillo@outlook.com",
    "phone": "+57 317 222 0513",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Bogota No Vis",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 253440000,
    "downPaymentCOP": 20275200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "saman",
    "matchPercentage": 45,
    "scores": {
      "fit": 22,
      "intent": 68,
      "engagement": 51,
      "conversion": 46,
      "total": 47
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (68/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1036",
    "name": "Héctor Ospina García",
    "email": "hector.ospina@hotmail.com",
    "phone": "+57 303 872 4658",
    "city": "Ciudadela Calle 80",
    "channel": "Google Ads",
    "campaign": "Familia Maipore",
    "status": "Perdido",
    "temperature": "Warm",
    "housingInterest": "No VIS",
    "budgetCOP": 529000000,
    "downPaymentCOP": 105800000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 47,
    "scores": {
      "fit": 6,
      "intent": 88,
      "engagement": 53,
      "conversion": 58,
      "total": 52
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (88/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1037",
    "name": "Adriana Suárez Rojas",
    "email": "adriana.suarez@hotmail.com",
    "phone": "+57 352 796 9486",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Ganado",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 146650000,
    "downPaymentCOP": 11732000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-macarena",
    "matchPercentage": 58,
    "scores": {
      "fit": 55,
      "intent": 61,
      "engagement": 41,
      "conversion": 52,
      "total": 54
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (61/100). Ya completó 7 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 22 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Promesa de compraventa firmada",
        "details": "Firmó promesa de compraventa.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1038",
    "name": "Lorena López Rojas",
    "email": "lorena.lopez@hotmail.com",
    "phone": "+57 358 537 4270",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Inversion Ricaurte",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 142740000,
    "downPaymentCOP": 11419200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-macarena",
    "matchPercentage": 58,
    "scores": {
      "fit": 38,
      "intent": 78,
      "engagement": 51,
      "conversion": 58,
      "total": 57
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (78/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1039",
    "name": "Hernán Pardo Acosta",
    "email": "hernan.pardo@outlook.com",
    "phone": "+57 323 996 2391",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 217950000,
    "downPaymentCOP": 17436000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 44,
    "scores": {
      "fit": 15,
      "intent": 72,
      "engagement": 49,
      "conversion": 53,
      "total": 47
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (72/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1040",
    "name": "Fernando Ospina Ruiz",
    "email": "fernando.ospina@hotmail.com",
    "phone": "+57 316 884 8427",
    "city": "Girardot",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 202950000,
    "downPaymentCOP": 16236000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "versalles",
    "matchPercentage": 40,
    "scores": {
      "fit": 14,
      "intent": 51,
      "engagement": 41,
      "conversion": 40,
      "total": 36
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (51/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1041",
    "name": "Mauricio Moreno Suárez",
    "email": "mauricio.moreno@hotmail.com",
    "phone": "+57 313 688 3353",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Ganado",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 244100000,
    "downPaymentCOP": 19528000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": false,
    "recommendedProjectId": "karakali",
    "matchPercentage": 85,
    "scores": {
      "fit": 99,
      "intent": 70,
      "engagement": 61,
      "conversion": 85,
      "total": 80
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es capacidad de pago (99/100). Ya completó 7 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Promesa de compraventa firmada",
        "details": "Firmó promesa de compraventa.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1042",
    "name": "Mónica Peña Ruiz",
    "email": "monica.pena@outlook.com",
    "phone": "+57 307 598 7927",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 179400000,
    "downPaymentCOP": 14352000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 40,
    "scores": {
      "fit": 20,
      "intent": 52,
      "engagement": 46,
      "conversion": 34,
      "total": 38
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (52/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 3 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1043",
    "name": "Mónica Ríos Mora",
    "email": "monica.rios@outlook.com",
    "phone": "+57 306 136 1533",
    "city": "Girardot",
    "channel": "Google Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Ganado",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 254800000,
    "downPaymentCOP": 20384000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": false,
    "recommendedProjectId": "saman",
    "matchPercentage": 84,
    "scores": {
      "fit": 99,
      "intent": 68,
      "engagement": 54,
      "conversion": 84,
      "total": 78
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es capacidad de pago (99/100). Ya completó 7 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Promesa de compraventa firmada",
        "details": "Firmó promesa de compraventa.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1044",
    "name": "Sandra Delgado Medina",
    "email": "sandra.delgado@outlook.com",
    "phone": "+57 304 125 5233",
    "city": "Girardot",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 236000000,
    "downPaymentCOP": 18880000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "reserva-guayacan",
    "matchPercentage": 40,
    "scores": {
      "fit": 10,
      "intent": 58,
      "engagement": 52,
      "conversion": 32,
      "total": 37
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (58/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1045",
    "name": "Tatiana Medina Rojas",
    "email": "tatiana.medina@hotmail.com",
    "phone": "+57 359 947 9873",
    "city": "Ricaurte",
    "channel": "Google Ads",
    "campaign": "Familia Maipore",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 253300000,
    "downPaymentCOP": 20264000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "saman",
    "matchPercentage": 42,
    "scores": {
      "fit": 6,
      "intent": 77,
      "engagement": 51,
      "conversion": 45,
      "total": 45
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (77/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 2 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1046",
    "name": "Marcela Hernández Delgado",
    "email": "marcela.hernandez@gmail.com",
    "phone": "+57 321 347 1527",
    "city": "Soacha",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 214170000,
    "downPaymentCOP": 17133600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "versalles",
    "matchPercentage": 58,
    "scores": {
      "fit": 49,
      "intent": 66,
      "engagement": 64,
      "conversion": 68,
      "total": 61
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (66/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1047",
    "name": "Camilo Rodríguez Ruiz",
    "email": "camilo.rodriguez@hotmail.com",
    "phone": "+57 359 114 5880",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 182480000,
    "downPaymentCOP": 14598400,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 50,
    "scores": {
      "fit": 24,
      "intent": 76,
      "engagement": 64,
      "conversion": 60,
      "total": 55
    },
    "priority": "Muy Alta",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (76/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1048",
    "name": "Adriana Ríos Torres",
    "email": "adriana.rios@outlook.com",
    "phone": "+57 329 886 4649",
    "city": "Ciudadela Calle 80",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 608000000,
    "downPaymentCOP": 121600000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "araucaria",
    "matchPercentage": 40,
    "scores": {
      "fit": 9,
      "intent": 59,
      "engagement": 50,
      "conversion": 48,
      "total": 41
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (59/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1049",
    "name": "Tatiana Reyes Moreno",
    "email": "tatiana.reyes@gmail.com",
    "phone": "+57 327 718 7530",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 219540000,
    "downPaymentCOP": 17563200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 40,
    "scores": {
      "fit": 18,
      "intent": 59,
      "engagement": 52,
      "conversion": 46,
      "total": 43
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (59/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1050",
    "name": "Paola Rodríguez Hernández",
    "email": "paola.rodriguez@outlook.com",
    "phone": "+57 351 165 6329",
    "city": "Chía",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 608000000,
    "downPaymentCOP": 121600000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "araucaria",
    "matchPercentage": 40,
    "scores": {
      "fit": 22,
      "intent": 47,
      "engagement": 49,
      "conversion": 33,
      "total": 37
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (47/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1051",
    "name": "Johana Romero Acosta",
    "email": "johana.romero@hotmail.com",
    "phone": "+57 352 805 0706",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 202950000,
    "downPaymentCOP": 16236000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "versalles",
    "matchPercentage": 40,
    "scores": {
      "fit": 9,
      "intent": 67,
      "engagement": 34,
      "conversion": 41,
      "total": 39
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (67/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 3 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1052",
    "name": "Mauricio Moreno Suárez",
    "email": "mauricio.moreno@gmail.com",
    "phone": "+57 313 688 3353",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Ganado",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 233300000,
    "downPaymentCOP": 18664000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": false,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 85,
    "scores": {
      "fit": 99,
      "intent": 70,
      "engagement": 56,
      "conversion": 69,
      "total": 75
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es capacidad de pago (99/100). Ya completó 7 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 19 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Promesa de compraventa firmada",
        "details": "Firmó promesa de compraventa.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1053",
    "name": "Javier Romero Ruiz",
    "email": "javier.romero@hotmail.com",
    "phone": "+57 359 991 3412",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 238520000,
    "downPaymentCOP": 19081600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat C",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 41,
    "scores": {
      "fit": 28,
      "intent": 53,
      "engagement": 40,
      "conversion": 36,
      "total": 40
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría C con subsidio VIS aplicable. Su señal más fuerte es intención de compra (53/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 18 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1054",
    "name": "Yolanda Cárdenas Cárdenas",
    "email": "yolanda.cardenas@hotmail.com",
    "phone": "+57 325 551 1258",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 189600000,
    "downPaymentCOP": 15168000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "pamplona",
    "matchPercentage": 40,
    "scores": {
      "fit": 20,
      "intent": 60,
      "engagement": 56,
      "conversion": 49,
      "total": 45
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (60/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1055",
    "name": "David Muñoz Ruiz",
    "email": "david.munoz@gmail.com",
    "phone": "+57 319 004 2177",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 161500000,
    "downPaymentCOP": 12920000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "verde-esperanza",
    "matchPercentage": 40,
    "scores": {
      "fit": 25,
      "intent": 41,
      "engagement": 21,
      "conversion": 38,
      "total": 32
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (41/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1056",
    "name": "Camila López Cárdenas",
    "email": "camila.lopez@hotmail.com",
    "phone": "+57 351 211 1482",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 237350000,
    "downPaymentCOP": 18988000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 40,
    "scores": {
      "fit": 14,
      "intent": 42,
      "engagement": 31,
      "conversion": 23,
      "total": 28
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (42/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1057",
    "name": "Germán González Castillo",
    "email": "german.gonzalez@gmail.com",
    "phone": "+57 305 531 1134",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 170600000,
    "downPaymentCOP": 13648000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 55,
    "scores": {
      "fit": 30,
      "intent": 80,
      "engagement": 44,
      "conversion": 47,
      "total": 52
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (80/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1058",
    "name": "Claudia Rodríguez Rincón",
    "email": "claudia.rodriguez@gmail.com",
    "phone": "+57 305 248 1834",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 237350000,
    "downPaymentCOP": 18988000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 40,
    "scores": {
      "fit": 5,
      "intent": 64,
      "engagement": 57,
      "conversion": 50,
      "total": 43
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (64/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1059",
    "name": "Claudia Torres García",
    "email": "claudia.torres@hotmail.com",
    "phone": "+57 307 976 1254",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 184980000,
    "downPaymentCOP": 14798400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-arrayan",
    "matchPercentage": 40,
    "scores": {
      "fit": 21,
      "intent": 54,
      "engagement": 39,
      "conversion": 43,
      "total": 39
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (54/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 2 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1060",
    "name": "Diana Pineda González",
    "email": "diana.pineda@outlook.com",
    "phone": "+57 324 202 8739",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 237980000,
    "downPaymentCOP": 19038400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 40,
    "scores": {
      "fit": 22,
      "intent": 44,
      "engagement": 20,
      "conversion": 36,
      "total": 32
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (44/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 3 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1061",
    "name": "José Moreno Díaz",
    "email": "jose.moreno@hotmail.com",
    "phone": "+57 315 602 0613",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Familia Maipore",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 204270000,
    "downPaymentCOP": 16341600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "versalles",
    "matchPercentage": 45,
    "scores": {
      "fit": 19,
      "intent": 71,
      "engagement": 67,
      "conversion": 43,
      "total": 49
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (71/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1062",
    "name": "Fernando Reyes Sánchez",
    "email": "fernando.reyes@outlook.com",
    "phone": "+57 308 602 4718",
    "city": "Tocancipá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 217950000,
    "downPaymentCOP": 17436000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 40,
    "scores": {
      "fit": 5,
      "intent": 68,
      "engagement": 42,
      "conversion": 33,
      "total": 37
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (68/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1063",
    "name": "Andrés Moreno Herrera",
    "email": "andres.moreno@outlook.com",
    "phone": "+57 316 082 5385",
    "city": "Fusagasugá",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 202950000,
    "downPaymentCOP": 16236000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "versalles",
    "matchPercentage": 47,
    "scores": {
      "fit": 15,
      "intent": 79,
      "engagement": 52,
      "conversion": 46,
      "total": 48
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (79/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 17 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1064",
    "name": "Lina Cárdenas Pardo",
    "email": "lina.cardenas@gmail.com",
    "phone": "+57 311 796 6873",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 238160000,
    "downPaymentCOP": 19052800,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 40,
    "scores": {
      "fit": 24,
      "intent": 55,
      "engagement": 29,
      "conversion": 43,
      "total": 39
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (55/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 17 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1065",
    "name": "Lina Muñoz Vargas",
    "email": "lina.munoz@outlook.com",
    "phone": "+57 308 516 5988",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 261340000,
    "downPaymentCOP": 20907200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "inari",
    "matchPercentage": 41,
    "scores": {
      "fit": 27,
      "intent": 54,
      "engagement": 27,
      "conversion": 45,
      "total": 40
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (54/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 3 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1066",
    "name": "Juliana Díaz Herrera",
    "email": "juliana.diaz@hotmail.com",
    "phone": "+57 353 926 0335",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Pre-Aprobado",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 236000000,
    "downPaymentCOP": 18880000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "reserva-guayacan",
    "matchPercentage": 51,
    "scores": {
      "fit": 27,
      "intent": 74,
      "engagement": 57,
      "conversion": 59,
      "total": 54
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (74/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1067",
    "name": "Martha Salazar López",
    "email": "martha.salazar@gmail.com",
    "phone": "+57 315 889 2118",
    "city": "Ciudadela Calle 80",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 608000000,
    "downPaymentCOP": 121600000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "araucaria",
    "matchPercentage": 40,
    "scores": {
      "fit": 4,
      "intent": 56,
      "engagement": 43,
      "conversion": 41,
      "total": 35
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (56/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1068",
    "name": "Carlos Rojas Martínez",
    "email": "carlos.rojas@gmail.com",
    "phone": "+57 322 177 1255",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 141590000,
    "downPaymentCOP": 11327200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-macarena",
    "matchPercentage": 52,
    "scores": {
      "fit": 33,
      "intent": 70,
      "engagement": 67,
      "conversion": 64,
      "total": 58
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (70/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1069",
    "name": "Cristian Delgado Gutiérrez",
    "email": "cristian.delgado@outlook.com",
    "phone": "+57 305 828 3485",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 253480000,
    "downPaymentCOP": 20278400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "saman",
    "matchPercentage": 48,
    "scores": {
      "fit": 24,
      "intent": 71,
      "engagement": 63,
      "conversion": 46,
      "total": 50
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (71/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1070",
    "name": "Patricia Díaz Jiménez",
    "email": "patricia.diaz@gmail.com",
    "phone": "+57 313 669 2577",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 236000000,
    "downPaymentCOP": 18880000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "reserva-guayacan",
    "matchPercentage": 40,
    "scores": {
      "fit": 19,
      "intent": 58,
      "engagement": 57,
      "conversion": 42,
      "total": 43
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (58/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 21 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1071",
    "name": "Miguel Sánchez Muñoz",
    "email": "miguel.sanchez@gmail.com",
    "phone": "+57 304 468 1437",
    "city": "Tocancipá",
    "channel": "Google Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Pre-Aprobado",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 217950000,
    "downPaymentCOP": 17436000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 40,
    "scores": {
      "fit": 5,
      "intent": 70,
      "engagement": 52,
      "conversion": 36,
      "total": 40
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (70/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1072",
    "name": "Milena Mora Bernal",
    "email": "milena.mora@outlook.com",
    "phone": "+57 302 678 2572",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 608000000,
    "downPaymentCOP": 121600000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "araucaria",
    "matchPercentage": 42,
    "scores": {
      "fit": 19,
      "intent": 65,
      "engagement": 38,
      "conversion": 36,
      "total": 40
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría B con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (65/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1073",
    "name": "Alejandro Salazar Torres",
    "email": "alejandro.salazar@gmail.com",
    "phone": "+57 315 888 4978",
    "city": "Soacha",
    "channel": "Google Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 241040000,
    "downPaymentCOP": 19283200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 61,
    "scores": {
      "fit": 56,
      "intent": 65,
      "engagement": 63,
      "conversion": 66,
      "total": 62
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (65/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1074",
    "name": "Luis Moreno Salazar",
    "email": "luis.moreno@outlook.com",
    "phone": "+57 308 005 5957",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Bogota No Vis",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 180940000,
    "downPaymentCOP": 14475200,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 43,
    "scores": {
      "fit": 22,
      "intent": 63,
      "engagement": 57,
      "conversion": 49,
      "total": 47
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (63/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1075",
    "name": "Julián Mora Ruiz",
    "email": "julian.mora@hotmail.com",
    "phone": "+57 327 766 0514",
    "city": "Fusagasugá",
    "channel": "Google Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 141130000,
    "downPaymentCOP": 11290400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat C",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-macarena",
    "matchPercentage": 55,
    "scores": {
      "fit": 31,
      "intent": 78,
      "engagement": 65,
      "conversion": 51,
      "total": 56
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría C con subsidio VIS aplicable. Su señal más fuerte es intención de compra (78/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1076",
    "name": "Alejandro Ortiz García",
    "email": "alejandro.ortiz@hotmail.com",
    "phone": "+57 315 984 8284",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 164020000,
    "downPaymentCOP": 13121600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "verde-esperanza",
    "matchPercentage": 55,
    "scores": {
      "fit": 39,
      "intent": 70,
      "engagement": 60,
      "conversion": 49,
      "total": 54
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (70/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1077",
    "name": "Diana Pineda González",
    "email": "diana.pineda@gmail.com",
    "phone": "+57 324 202 8739",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 204270000,
    "downPaymentCOP": 16341600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "versalles",
    "matchPercentage": 44,
    "scores": {
      "fit": 19,
      "intent": 69,
      "engagement": 60,
      "conversion": 52,
      "total": 49
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (69/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1078",
    "name": "Natalia Ramírez Pardo",
    "email": "natalia.ramirez@gmail.com",
    "phone": "+57 302 401 5162",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 148950000,
    "downPaymentCOP": 11916000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": false,
    "recommendedProjectId": "la-macarena",
    "matchPercentage": 62,
    "scores": {
      "fit": 65,
      "intent": 58,
      "engagement": 57,
      "conversion": 67,
      "total": 62
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es capacidad de pago (65/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 18 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1079",
    "name": "Diego Rincón Peña",
    "email": "diego.rincon@gmail.com",
    "phone": "+57 321 282 8532",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Bogota No Vis",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 184020000,
    "downPaymentCOP": 14721600,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 50,
    "scores": {
      "fit": 26,
      "intent": 73,
      "engagement": 68,
      "conversion": 47,
      "total": 52
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (73/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1080",
    "name": "Julián Ortiz Gómez",
    "email": "julian.ortiz@outlook.com",
    "phone": "+57 355 150 9315",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Ganado",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 179400000,
    "downPaymentCOP": 14352000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 57,
    "scores": {
      "fit": 20,
      "intent": 93,
      "engagement": 54,
      "conversion": 49,
      "total": 55
    },
    "priority": "Muy Alta",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (93/100). Ya completó 7 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Promesa de compraventa firmada",
        "details": "Firmó promesa de compraventa.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1081",
    "name": "Juan Gómez Ramírez",
    "email": "juan.gomez@gmail.com",
    "phone": "+57 329 436 5330",
    "city": "Chía",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 238070000,
    "downPaymentCOP": 19045600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 42,
    "scores": {
      "fit": 23,
      "intent": 61,
      "engagement": 50,
      "conversion": 45,
      "total": 44
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (61/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1082",
    "name": "Pedro Ramírez Romero",
    "email": "pedro.ramirez@gmail.com",
    "phone": "+57 359 473 8725",
    "city": "Ciudadela Maiporé",
    "channel": "Google Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 186700000,
    "downPaymentCOP": 14936000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "pamplona",
    "matchPercentage": 40,
    "scores": {
      "fit": 9,
      "intent": 64,
      "engagement": 47,
      "conversion": 42,
      "total": 40
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (64/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 16 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1083",
    "name": "Fabián Castro Suárez",
    "email": "fabian.castro@hotmail.com",
    "phone": "+57 357 401 9136",
    "city": "Ubaté",
    "channel": "Google Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 236000000,
    "downPaymentCOP": 18880000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "reserva-guayacan",
    "matchPercentage": 42,
    "scores": {
      "fit": 21,
      "intent": 63,
      "engagement": 48,
      "conversion": 37,
      "total": 42
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (63/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 17 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1084",
    "name": "Katherine Pardo Díaz",
    "email": "katherine.pardo@gmail.com",
    "phone": "+57 314 502 6810",
    "city": "Ciudadela Calle 80",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 529000000,
    "downPaymentCOP": 105800000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 40,
    "scores": {
      "fit": 7,
      "intent": 56,
      "engagement": 27,
      "conversion": 35,
      "total": 32
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (56/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1085",
    "name": "Viviana Pardo Pineda",
    "email": "viviana.pardo@gmail.com",
    "phone": "+57 305 955 5330",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 178630000,
    "downPaymentCOP": 14290400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 40,
    "scores": {
      "fit": 19,
      "intent": 43,
      "engagement": 32,
      "conversion": 40,
      "total": 34
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (43/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 15 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1086",
    "name": "Diego Jiménez Torres",
    "email": "diego.jimenez@hotmail.com",
    "phone": "+57 329 012 4068",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 184600000,
    "downPaymentCOP": 14768000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-arrayan",
    "matchPercentage": 42,
    "scores": {
      "fit": 20,
      "intent": 64,
      "engagement": 53,
      "conversion": 54,
      "total": 47
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (64/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1087",
    "name": "Julián Romero López",
    "email": "julian.romero@hotmail.com",
    "phone": "+57 355 491 6840",
    "city": "Fusagasugá",
    "channel": "Google Ads",
    "campaign": "Primer Hogar Chia",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 223250000,
    "downPaymentCOP": 17860000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 55,
    "scores": {
      "fit": 25,
      "intent": 84,
      "engagement": 56,
      "conversion": 57,
      "total": 56
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (84/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 16 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1088",
    "name": "Adriana Pardo Salazar",
    "email": "adriana.pardo@hotmail.com",
    "phone": "+57 319 893 4311",
    "city": "Ubaté",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 164380000,
    "downPaymentCOP": 13150400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "verde-esperanza",
    "matchPercentage": 59,
    "scores": {
      "fit": 41,
      "intent": 77,
      "engagement": 61,
      "conversion": 66,
      "total": 61
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (77/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1089",
    "name": "Lina Cárdenas Pardo",
    "email": "lina.cardenas@gmail.com",
    "phone": "+57 311 796 6873",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 190760000,
    "downPaymentCOP": 15260800,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "pamplona",
    "matchPercentage": 40,
    "scores": {
      "fit": 22,
      "intent": 53,
      "engagement": 34,
      "conversion": 35,
      "total": 37
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (53/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1090",
    "name": "Germán Hernández Ríos",
    "email": "german.hernandez@hotmail.com",
    "phone": "+57 314 513 5941",
    "city": "Ubaté",
    "channel": "Google Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 161320000,
    "downPaymentCOP": 12905600,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "verde-esperanza",
    "matchPercentage": 40,
    "scores": {
      "fit": 24,
      "intent": 56,
      "engagement": 32,
      "conversion": 44,
      "total": 40
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (56/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 19 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1091",
    "name": "Andrés Peña Romero",
    "email": "andres.pena@gmail.com",
    "phone": "+57 301 189 4470",
    "city": "Ubaté",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 161140000,
    "downPaymentCOP": 12891200,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "verde-esperanza",
    "matchPercentage": 44,
    "scores": {
      "fit": 23,
      "intent": 64,
      "engagement": 49,
      "conversion": 53,
      "total": 47
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (64/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1092",
    "name": "Javier Sánchez Vargas",
    "email": "javier.sanchez@gmail.com",
    "phone": "+57 356 128 1039",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 165560000,
    "downPaymentCOP": 13244800,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 48,
    "scores": {
      "fit": 18,
      "intent": 78,
      "engagement": 50,
      "conversion": 51,
      "total": 50
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (78/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1093",
    "name": "Diana Castro Álvarez",
    "email": "diana.castro@gmail.com",
    "phone": "+57 304 894 9039",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 202950000,
    "downPaymentCOP": 16236000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "versalles",
    "matchPercentage": 40,
    "scores": {
      "fit": 12,
      "intent": 65,
      "engagement": 57,
      "conversion": 46,
      "total": 44
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (65/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1094",
    "name": "Laura García Rincón",
    "email": "laura.garcia@hotmail.com",
    "phone": "+57 315 338 5340",
    "city": "Ubaté",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 160600000,
    "downPaymentCOP": 12848000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "verde-esperanza",
    "matchPercentage": 40,
    "scores": {
      "fit": 20,
      "intent": 54,
      "engagement": 46,
      "conversion": 44,
      "total": 41
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (54/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 17 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1095",
    "name": "Laura Díaz Pineda",
    "email": "laura.diaz@hotmail.com",
    "phone": "+57 301 699 4436",
    "city": "Ciudadela Maiporé",
    "channel": "Google Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 190760000,
    "downPaymentCOP": 15260800,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "pamplona",
    "matchPercentage": 49,
    "scores": {
      "fit": 22,
      "intent": 76,
      "engagement": 39,
      "conversion": 48,
      "total": 48
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (76/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1096",
    "name": "Juan Gómez Gutiérrez",
    "email": "juan.gomez@gmail.com",
    "phone": "+57 355 060 1849",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 237350000,
    "downPaymentCOP": 18988000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 40,
    "scores": {
      "fit": 4,
      "intent": 68,
      "engagement": 54,
      "conversion": 35,
      "total": 39
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (68/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 3 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1097",
    "name": "Johana Suárez Rojas",
    "email": "johana.suarez@outlook.com",
    "phone": "+57 313 183 1387",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "No VIS",
    "budgetCOP": 608000000,
    "downPaymentCOP": 121600000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "araucaria",
    "matchPercentage": 51,
    "scores": {
      "fit": 22,
      "intent": 79,
      "engagement": 50,
      "conversion": 58,
      "total": 53
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (79/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1098",
    "name": "Carolina Gómez Moreno",
    "email": "carolina.gomez@hotmail.com",
    "phone": "+57 321 592 7344",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 168500000,
    "downPaymentCOP": 13480000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 52,
    "scores": {
      "fit": 25,
      "intent": 78,
      "engagement": 44,
      "conversion": 42,
      "total": 48
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (78/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1099",
    "name": "Lorena Gómez Bernal",
    "email": "lorena.gomez@outlook.com",
    "phone": "+57 326 848 8779",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 166400000,
    "downPaymentCOP": 13312000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 48,
    "scores": {
      "fit": 20,
      "intent": 75,
      "engagement": 53,
      "conversion": 47,
      "total": 49
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (75/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1100",
    "name": "Ana Torres Álvarez",
    "email": "ana.torres@hotmail.com",
    "phone": "+57 304 085 1360",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 170180000,
    "downPaymentCOP": 13614400,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 52,
    "scores": {
      "fit": 29,
      "intent": 75,
      "engagement": 43,
      "conversion": 46,
      "total": 49
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (75/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1101",
    "name": "Ángela Reyes Castro",
    "email": "angela.reyes@hotmail.com",
    "phone": "+57 323 248 2565",
    "city": "Chía",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "No VIS",
    "budgetCOP": 608000000,
    "downPaymentCOP": 121600000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "araucaria",
    "matchPercentage": 46,
    "scores": {
      "fit": 19,
      "intent": 72,
      "engagement": 58,
      "conversion": 48,
      "total": 49
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (72/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 20 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1102",
    "name": "Andrés Romero Reyes",
    "email": "andres.romero@hotmail.com",
    "phone": "+57 329 125 3395",
    "city": "Girardot",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 236000000,
    "downPaymentCOP": 18880000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "reserva-guayacan",
    "matchPercentage": 48,
    "scores": {
      "fit": 20,
      "intent": 76,
      "engagement": 68,
      "conversion": 54,
      "total": 53
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (76/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1103",
    "name": "William Pardo Pineda",
    "email": "william.pardo@outlook.com",
    "phone": "+57 325 418 5620",
    "city": "Soacha",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 175220000,
    "downPaymentCOP": 14017600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 58,
    "scores": {
      "fit": 41,
      "intent": 75,
      "engagement": 63,
      "conversion": 56,
      "total": 59
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (75/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1104",
    "name": "Yolanda Bernal Torres",
    "email": "yolanda.bernal@gmail.com",
    "phone": "+57 308 356 9939",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 174380000,
    "downPaymentCOP": 13950400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 49,
    "scores": {
      "fit": 39,
      "intent": 58,
      "engagement": 55,
      "conversion": 47,
      "total": 49
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (58/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1105",
    "name": "María Vargas Moreno",
    "email": "maria.vargas@hotmail.com",
    "phone": "+57 356 013 8147",
    "city": "Ricaurte",
    "channel": "Google Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Perdido",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 253300000,
    "downPaymentCOP": 20264000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "saman",
    "matchPercentage": 40,
    "scores": {
      "fit": 11,
      "intent": 63,
      "engagement": 51,
      "conversion": 51,
      "total": 43
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (63/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 2 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1106",
    "name": "Carlos Rojas Martínez",
    "email": "carlos.rojas@hotmail.com",
    "phone": "+57 322 177 1255",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 161680000,
    "downPaymentCOP": 12934400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "verde-esperanza",
    "matchPercentage": 40,
    "scores": {
      "fit": 26,
      "intent": 54,
      "engagement": 37,
      "conversion": 42,
      "total": 40
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (54/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1107",
    "name": "Diana Pineda González",
    "email": "diana.pineda@outlook.com",
    "phone": "+57 324 202 8739",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 261760000,
    "downPaymentCOP": 20940800,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "inari",
    "matchPercentage": 42,
    "scores": {
      "fit": 28,
      "intent": 56,
      "engagement": 37,
      "conversion": 33,
      "total": 39
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (56/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1108",
    "name": "Daniel López Vargas",
    "email": "daniel.lopez@outlook.com",
    "phone": "+57 321 745 3784",
    "city": "Ubaté",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 160960000,
    "downPaymentCOP": 12876800,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "verde-esperanza",
    "matchPercentage": 40,
    "scores": {
      "fit": 22,
      "intent": 56,
      "engagement": 46,
      "conversion": 45,
      "total": 42
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (56/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1109",
    "name": "Diana Hernández Bernal",
    "email": "diana.hernandez@outlook.com",
    "phone": "+57 306 240 5812",
    "city": "Facatativá",
    "channel": "Google Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 219010000,
    "downPaymentCOP": 17520800,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat C",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 44,
    "scores": {
      "fit": 17,
      "intent": 70,
      "engagement": 36,
      "conversion": 45,
      "total": 43
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría C con subsidio VIS aplicable. Su señal más fuerte es intención de compra (70/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1110",
    "name": "Lorena Ruiz Castillo",
    "email": "lorena.ruiz@hotmail.com",
    "phone": "+57 322 581 9123",
    "city": "Chía",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 205920000,
    "downPaymentCOP": 16473600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "versalles",
    "matchPercentage": 40,
    "scores": {
      "fit": 24,
      "intent": 42,
      "engagement": 29,
      "conversion": 35,
      "total": 33
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (42/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1111",
    "name": "David Jiménez Peña",
    "email": "david.jimenez@outlook.com",
    "phone": "+57 311 918 2050",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 160420000,
    "downPaymentCOP": 12833600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "verde-esperanza",
    "matchPercentage": 51,
    "scores": {
      "fit": 19,
      "intent": 83,
      "engagement": 72,
      "conversion": 60,
      "total": 57
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (83/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1112",
    "name": "Sofía Muñoz Hernández",
    "email": "sofia.munoz@outlook.com",
    "phone": "+57 306 866 4992",
    "city": "Tocancipá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 530600000,
    "downPaymentCOP": 106120000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 40,
    "scores": {
      "fit": 19,
      "intent": 56,
      "engagement": 32,
      "conversion": 36,
      "total": 37
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (56/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 21 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1113",
    "name": "Fernanda Rojas González",
    "email": "fernanda.rojas@outlook.com",
    "phone": "+57 317 639 9516",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Inversion Ricaurte",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 145040000,
    "downPaymentCOP": 11603200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-macarena",
    "matchPercentage": 66,
    "scores": {
      "fit": 48,
      "intent": 83,
      "engagement": 48,
      "conversion": 66,
      "total": 63
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (83/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1114",
    "name": "Carlos Gutiérrez Hernández",
    "email": "carlos.gutierrez@hotmail.com",
    "phone": "+57 316 419 3837",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "No VIS",
    "budgetCOP": 529400000,
    "downPaymentCOP": 105880000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 41,
    "scores": {
      "fit": 16,
      "intent": 66,
      "engagement": 60,
      "conversion": 41,
      "total": 45
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (66/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1115",
    "name": "Patricia Bernal Hernández",
    "email": "patricia.bernal@outlook.com",
    "phone": "+57 327 284 3313",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 237350000,
    "downPaymentCOP": 18988000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 40,
    "scores": {
      "fit": 12,
      "intent": 55,
      "engagement": 46,
      "conversion": 46,
      "total": 39
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (55/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 2 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1116",
    "name": "Yolanda Ortiz Bernal",
    "email": "yolanda.ortiz@hotmail.com",
    "phone": "+57 354 965 8873",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Nuevo",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 253300000,
    "downPaymentCOP": 20264000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "saman",
    "matchPercentage": 40,
    "scores": {
      "fit": 8,
      "intent": 43,
      "engagement": 26,
      "conversion": 20,
      "total": 25
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (43/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 4 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1117",
    "name": "Paola Ortiz Castillo",
    "email": "paola.ortiz@hotmail.com",
    "phone": "+57 322 167 4661",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 154700000,
    "downPaymentCOP": 12376000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": false,
    "recommendedProjectId": "la-macarena",
    "matchPercentage": 71,
    "scores": {
      "fit": 99,
      "intent": 43,
      "engagement": 38,
      "conversion": 68,
      "total": 64
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es capacidad de pago (99/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1118",
    "name": "Johana Díaz Romero",
    "email": "johana.diaz@outlook.com",
    "phone": "+57 329 825 2435",
    "city": "Fusagasugá",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Ganado",
    "temperature": "Hot",
    "housingInterest": "No VIS",
    "budgetCOP": 551000000,
    "downPaymentCOP": 110200000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 59,
    "scores": {
      "fit": 70,
      "intent": 48,
      "engagement": 48,
      "conversion": 56,
      "total": 56
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con proyecto No VIS (sin subsidio). Su señal más fuerte es capacidad de pago (70/100). Ya completó 7 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Promesa de compraventa firmada",
        "details": "Firmó promesa de compraventa.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1119",
    "name": "Diego Rodríguez Rincón",
    "email": "diego.rodriguez@outlook.com",
    "phone": "+57 302 901 5320",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 257560000,
    "downPaymentCOP": 20604800,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "inari",
    "matchPercentage": 40,
    "scores": {
      "fit": 18,
      "intent": 45,
      "engagement": 36,
      "conversion": 34,
      "total": 33
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (45/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1120",
    "name": "Lorena Gómez Reyes",
    "email": "lorena.gomez@gmail.com",
    "phone": "+57 313 832 9117",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 165980000,
    "downPaymentCOP": 13278400,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 40,
    "scores": {
      "fit": 19,
      "intent": 45,
      "engagement": 31,
      "conversion": 26,
      "total": 31
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (45/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1121",
    "name": "Tatiana Reyes Moreno",
    "email": "tatiana.reyes@outlook.com",
    "phone": "+57 327 718 7530",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 260080000,
    "downPaymentCOP": 20806400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "inari",
    "matchPercentage": 42,
    "scores": {
      "fit": 24,
      "intent": 59,
      "engagement": 39,
      "conversion": 43,
      "total": 42
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (59/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1122",
    "name": "Daniela Delgado Muñoz",
    "email": "daniela.delgado@gmail.com",
    "phone": "+57 318 447 9105",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 236000000,
    "downPaymentCOP": 18880000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "reserva-guayacan",
    "matchPercentage": 40,
    "scores": {
      "fit": 13,
      "intent": 56,
      "engagement": 34,
      "conversion": 31,
      "total": 34
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (56/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 23 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1123",
    "name": "Katherine Medina Castillo",
    "email": "katherine.medina@gmail.com",
    "phone": "+57 302 678 9227",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 169340000,
    "downPaymentCOP": 13547200,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 40,
    "scores": {
      "fit": 27,
      "intent": 47,
      "engagement": 40,
      "conversion": 29,
      "total": 36
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (47/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1124",
    "name": "Camilo Álvarez Ortiz",
    "email": "camilo.alvarez@gmail.com",
    "phone": "+57 359 402 8236",
    "city": "Girardot",
    "channel": "Google Ads",
    "campaign": "Primer Hogar Chia",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 236000000,
    "downPaymentCOP": 18880000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "reserva-guayacan",
    "matchPercentage": 40,
    "scores": {
      "fit": 4,
      "intent": 76,
      "engagement": 61,
      "conversion": 53,
      "total": 48
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (76/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1125",
    "name": "Yolanda Ruiz Rodríguez",
    "email": "yolanda.ruiz@outlook.com",
    "phone": "+57 312 271 3811",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 238160000,
    "downPaymentCOP": 19052800,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 51,
    "scores": {
      "fit": 24,
      "intent": 78,
      "engagement": 49,
      "conversion": 43,
      "total": 49
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (78/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1126",
    "name": "Ana Rincón Bernal",
    "email": "ana.rincon@outlook.com",
    "phone": "+57 312 343 9803",
    "city": "Girardot",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "No VIS",
    "budgetCOP": 608000000,
    "downPaymentCOP": 121600000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "araucaria",
    "matchPercentage": 42,
    "scores": {
      "fit": 20,
      "intent": 64,
      "engagement": 56,
      "conversion": 55,
      "total": 48
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (64/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1127",
    "name": "Lorena Delgado Salazar",
    "email": "lorena.delgado@hotmail.com",
    "phone": "+57 321 481 0369",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Nuevo",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 237980000,
    "downPaymentCOP": 19038400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 40,
    "scores": {
      "fit": 22,
      "intent": 41,
      "engagement": 20,
      "conversion": 38,
      "total": 31
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (41/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 3 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1128",
    "name": "Lina Acosta Mora",
    "email": "lina.acosta@gmail.com",
    "phone": "+57 321 496 8366",
    "city": "Ciudadela Calle 80",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 608000000,
    "downPaymentCOP": 121600000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "araucaria",
    "matchPercentage": 40,
    "scores": {
      "fit": 16,
      "intent": 56,
      "engagement": 57,
      "conversion": 37,
      "total": 40
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (56/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1129",
    "name": "Tatiana Reyes Moreno",
    "email": "tatiana.reyes@gmail.com",
    "phone": "+57 327 718 7530",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 237890000,
    "downPaymentCOP": 19031200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 40,
    "scores": {
      "fit": 21,
      "intent": 49,
      "engagement": 33,
      "conversion": 30,
      "total": 34
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (49/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1130",
    "name": "Paola Acosta Cárdenas",
    "email": "paola.acosta@gmail.com",
    "phone": "+57 327 017 3215",
    "city": "Ubaté",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 160420000,
    "downPaymentCOP": 12833600,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "verde-esperanza",
    "matchPercentage": 45,
    "scores": {
      "fit": 19,
      "intent": 70,
      "engagement": 44,
      "conversion": 41,
      "total": 44
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (70/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1131",
    "name": "Hernán Medina Vargas",
    "email": "hernan.medina@hotmail.com",
    "phone": "+57 356 179 2685",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 183460000,
    "downPaymentCOP": 14676800,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-arrayan",
    "matchPercentage": 42,
    "scores": {
      "fit": 17,
      "intent": 67,
      "engagement": 63,
      "conversion": 44,
      "total": 47
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (67/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1132",
    "name": "Carolina Vargas Suárez",
    "email": "carolina.vargas@hotmail.com",
    "phone": "+57 359 757 7092",
    "city": "Ubaté",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Pre-Aprobado",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 160600000,
    "downPaymentCOP": 12848000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "verde-esperanza",
    "matchPercentage": 40,
    "scores": {
      "fit": 20,
      "intent": 55,
      "engagement": 51,
      "conversion": 40,
      "total": 41
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (55/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1133",
    "name": "Alejandro Ortiz García",
    "email": "alejandro.ortiz@outlook.com",
    "phone": "+57 315 984 8284",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 142510000,
    "downPaymentCOP": 11400800,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-macarena",
    "matchPercentage": 50,
    "scores": {
      "fit": 37,
      "intent": 62,
      "engagement": 41,
      "conversion": 44,
      "total": 47
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (62/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1134",
    "name": "Cristian Castro Acosta",
    "email": "cristian.castro@outlook.com",
    "phone": "+57 324 150 3438",
    "city": "Tocancipá",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 186880000,
    "downPaymentCOP": 14950400,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-arrayan",
    "matchPercentage": 40,
    "scores": {
      "fit": 26,
      "intent": 48,
      "engagement": 34,
      "conversion": 46,
      "total": 39
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (48/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1135",
    "name": "Fabián Gutiérrez Martínez",
    "email": "fabian.gutierrez@outlook.com",
    "phone": "+57 305 532 9991",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 237350000,
    "downPaymentCOP": 18988000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 44,
    "scores": {
      "fit": 13,
      "intent": 74,
      "engagement": 63,
      "conversion": 57,
      "total": 51
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (74/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1136",
    "name": "Ricardo Castro Castro",
    "email": "ricardo.castro@outlook.com",
    "phone": "+57 323 729 1394",
    "city": "Ubaté",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 223250000,
    "downPaymentCOP": 17860000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 40,
    "scores": {
      "fit": 25,
      "intent": 46,
      "engagement": 22,
      "conversion": 36,
      "total": 34
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (46/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 2 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1137",
    "name": "Julián López Herrera",
    "email": "julian.lopez@gmail.com",
    "phone": "+57 352 488 8885",
    "city": "Ciudadela Maiporé",
    "channel": "Google Ads",
    "campaign": "Bogota No Vis",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 140210000,
    "downPaymentCOP": 11216800,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-macarena",
    "matchPercentage": 50,
    "scores": {
      "fit": 27,
      "intent": 72,
      "engagement": 38,
      "conversion": 45,
      "total": 47
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (72/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1138",
    "name": "Mónica Ospina Castro",
    "email": "monica.ospina@hotmail.com",
    "phone": "+57 307 567 9047",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "En Negociación",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 200960000,
    "downPaymentCOP": 16076800,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 58,
    "scores": {
      "fit": 48,
      "intent": 67,
      "engagement": 46,
      "conversion": 64,
      "total": 57
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (67/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 2 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1139",
    "name": "Juan Gómez Ramírez",
    "email": "juan.gomez@outlook.com",
    "phone": "+57 329 436 5330",
    "city": "Chía",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 220070000,
    "downPaymentCOP": 17605600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 40,
    "scores": {
      "fit": 19,
      "intent": 50,
      "engagement": 51,
      "conversion": 39,
      "total": 39
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (50/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1140",
    "name": "Sofía Castillo Vargas",
    "email": "sofia.castillo@hotmail.com",
    "phone": "+57 317 222 0513",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "Pre-Aprobado",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 174380000,
    "downPaymentCOP": 13950400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 59,
    "scores": {
      "fit": 39,
      "intent": 79,
      "engagement": 67,
      "conversion": 58,
      "total": 61
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (79/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 21 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1141",
    "name": "Fabián Rincón Reyes",
    "email": "fabian.rincon@gmail.com",
    "phone": "+57 327 778 3003",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 166820000,
    "downPaymentCOP": 13345600,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 45,
    "scores": {
      "fit": 21,
      "intent": 68,
      "engagement": 40,
      "conversion": 44,
      "total": 44
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (68/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 22 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1142",
    "name": "William Bernal Castro",
    "email": "william.bernal@gmail.com",
    "phone": "+57 312 852 1285",
    "city": "Tocancipá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 217950000,
    "downPaymentCOP": 17436000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 43,
    "scores": {
      "fit": 10,
      "intent": 76,
      "engagement": 52,
      "conversion": 44,
      "total": 45
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (76/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 19 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1143",
    "name": "Sebastián Álvarez García",
    "email": "sebastian.alvarez@outlook.com",
    "phone": "+57 302 137 8739",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 190180000,
    "downPaymentCOP": 15214400,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "pamplona",
    "matchPercentage": 49,
    "scores": {
      "fit": 21,
      "intent": 76,
      "engagement": 62,
      "conversion": 54,
      "total": 53
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (76/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1144",
    "name": "Héctor Salazar López",
    "email": "hector.salazar@hotmail.com",
    "phone": "+57 326 627 8204",
    "city": "Ricaurte",
    "channel": "Google Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 237350000,
    "downPaymentCOP": 18988000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 40,
    "scores": {
      "fit": 8,
      "intent": 67,
      "engagement": 41,
      "conversion": 36,
      "total": 38
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (67/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1145",
    "name": "Javier Reyes Castillo",
    "email": "javier.reyes@gmail.com",
    "phone": "+57 307 427 9671",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Bogota No Vis",
    "status": "Pre-Aprobado",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 257980000,
    "downPaymentCOP": 20638400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat C",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "inari",
    "matchPercentage": 41,
    "scores": {
      "fit": 19,
      "intent": 62,
      "engagement": 54,
      "conversion": 37,
      "total": 42
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría C con subsidio VIS aplicable. Su señal más fuerte es intención de compra (62/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1146",
    "name": "Luis Díaz Álvarez",
    "email": "luis.diaz@outlook.com",
    "phone": "+57 303 377 6150",
    "city": "Tocancipá",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 530600000,
    "downPaymentCOP": 106120000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat C",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 40,
    "scores": {
      "fit": 19,
      "intent": 57,
      "engagement": 47,
      "conversion": 33,
      "total": 39
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría C con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (57/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 17 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1147",
    "name": "Tatiana Torres Castillo",
    "email": "tatiana.torres@gmail.com",
    "phone": "+57 301 496 2052",
    "city": "Ciudadela Calle 80",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Perdido",
    "temperature": "Warm",
    "housingInterest": "No VIS",
    "budgetCOP": 529800000,
    "downPaymentCOP": 105960000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 41,
    "scores": {
      "fit": 17,
      "intent": 64,
      "engagement": 61,
      "conversion": 39,
      "total": 44
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (64/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1148",
    "name": "Sofía Torres González",
    "email": "sofia.torres@gmail.com",
    "phone": "+57 305 047 7742",
    "city": "Girardot",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "No VIS",
    "budgetCOP": 530200000,
    "downPaymentCOP": 106040000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat C",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 42,
    "scores": {
      "fit": 18,
      "intent": 66,
      "engagement": 60,
      "conversion": 48,
      "total": 47
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría C con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (66/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1149",
    "name": "Javier Reyes González",
    "email": "javier.reyes@hotmail.com",
    "phone": "+57 318 237 4753",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 228020000,
    "downPaymentCOP": 18241600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 50,
    "scores": {
      "fit": 34,
      "intent": 66,
      "engagement": 36,
      "conversion": 48,
      "total": 47
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (66/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1150",
    "name": "Hernán López Peña",
    "email": "hernan.lopez@gmail.com",
    "phone": "+57 329 415 3110",
    "city": "Ciudadela Calle 80",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 529000000,
    "downPaymentCOP": 105800000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 40,
    "scores": {
      "fit": 8,
      "intent": 47,
      "engagement": 27,
      "conversion": 27,
      "total": 28
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (47/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 3 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 3 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1151",
    "name": "Paola Hernández Suárez",
    "email": "paola.hernandez@hotmail.com",
    "phone": "+57 307 166 2963",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "No VIS",
    "budgetCOP": 608000000,
    "downPaymentCOP": 121600000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "araucaria",
    "matchPercentage": 51,
    "scores": {
      "fit": 24,
      "intent": 77,
      "engagement": 62,
      "conversion": 49,
      "total": 53
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (77/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1152",
    "name": "Camilo Salazar López",
    "email": "camilo.salazar@hotmail.com",
    "phone": "+57 352 749 8659",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 236000000,
    "downPaymentCOP": 18880000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "reserva-guayacan",
    "matchPercentage": 40,
    "scores": {
      "fit": 15,
      "intent": 60,
      "engagement": 43,
      "conversion": 35,
      "total": 38
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (60/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1153",
    "name": "Daniela Medina Herrera",
    "email": "daniela.medina@outlook.com",
    "phone": "+57 357 677 6459",
    "city": "Girardot",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Ganado",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 146650000,
    "downPaymentCOP": 11732000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-macarena",
    "matchPercentage": 59,
    "scores": {
      "fit": 55,
      "intent": 63,
      "engagement": 62,
      "conversion": 62,
      "total": 60
    },
    "priority": "Muy Alta",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (63/100). Ya completó 7 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Promesa de compraventa firmada",
        "details": "Firmó promesa de compraventa.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1154",
    "name": "Johana Rodríguez Martínez",
    "email": "johana.rodriguez@gmail.com",
    "phone": "+57 326 780 5802",
    "city": "Soacha",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 160060000,
    "downPaymentCOP": 12804800,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "verde-esperanza",
    "matchPercentage": 40,
    "scores": {
      "fit": 17,
      "intent": 57,
      "engagement": 37,
      "conversion": 42,
      "total": 39
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (57/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1155",
    "name": "Lorena Acosta Herrera",
    "email": "lorena.acosta@gmail.com",
    "phone": "+57 314 865 8617",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 608000000,
    "downPaymentCOP": 121600000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "araucaria",
    "matchPercentage": 40,
    "scores": {
      "fit": 13,
      "intent": 44,
      "engagement": 44,
      "conversion": 28,
      "total": 31
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (44/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1156",
    "name": "Héctor Jiménez Bernal",
    "email": "hector.jimenez@outlook.com",
    "phone": "+57 315 621 7844",
    "city": "Soacha",
    "channel": "Google Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "No VIS",
    "budgetCOP": 530600000,
    "downPaymentCOP": 106120000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 48,
    "scores": {
      "fit": 19,
      "intent": 76,
      "engagement": 60,
      "conversion": 56,
      "total": 52
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (76/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 18 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1157",
    "name": "Milena Castro Romero",
    "email": "milena.castro@hotmail.com",
    "phone": "+57 317 788 5433",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 166820000,
    "downPaymentCOP": 13345600,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 45,
    "scores": {
      "fit": 21,
      "intent": 68,
      "engagement": 63,
      "conversion": 45,
      "total": 48
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (68/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1158",
    "name": "Julián Ramírez Ríos",
    "email": "julian.ramirez@hotmail.com",
    "phone": "+57 351 437 6489",
    "city": "Ubaté",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 161140000,
    "downPaymentCOP": 12891200,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "verde-esperanza",
    "matchPercentage": 45,
    "scores": {
      "fit": 23,
      "intent": 67,
      "engagement": 34,
      "conversion": 38,
      "total": 42
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (67/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 2 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1159",
    "name": "David Peña Salazar",
    "email": "david.pena@hotmail.com",
    "phone": "+57 321 540 6577",
    "city": "Ciudadela Calle 80",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "No VIS",
    "budgetCOP": 529000000,
    "downPaymentCOP": 105800000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 47,
    "scores": {
      "fit": 11,
      "intent": 82,
      "engagement": 63,
      "conversion": 45,
      "total": 50
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (82/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1160",
    "name": "Javier Reyes González",
    "email": "javier.reyes@outlook.com",
    "phone": "+57 318 237 4753",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 229610000,
    "downPaymentCOP": 18368800,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 47,
    "scores": {
      "fit": 37,
      "intent": 57,
      "engagement": 30,
      "conversion": 52,
      "total": 46
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (57/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1161",
    "name": "Sandra Ruiz Acosta",
    "email": "sandra.ruiz@hotmail.com",
    "phone": "+57 302 641 8573",
    "city": "Ciudadela Calle 80",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 529000000,
    "downPaymentCOP": 105800000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 40,
    "scores": {
      "fit": 6,
      "intent": 60,
      "engagement": 51,
      "conversion": 32,
      "total": 36
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (60/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 20 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1162",
    "name": "Marcela Gutiérrez Peña",
    "email": "marcela.gutierrez@gmail.com",
    "phone": "+57 323 111 3788",
    "city": "Soacha",
    "channel": "Google Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 189020000,
    "downPaymentCOP": 15121600,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "pamplona",
    "matchPercentage": 45,
    "scores": {
      "fit": 19,
      "intent": 71,
      "engagement": 49,
      "conversion": 54,
      "total": 48
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (71/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1163",
    "name": "Milena Cárdenas Ortiz",
    "email": "milena.cardenas@outlook.com",
    "phone": "+57 318 335 7939",
    "city": "Fusagasugá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 222190000,
    "downPaymentCOP": 17775200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 44,
    "scores": {
      "fit": 23,
      "intent": 65,
      "engagement": 33,
      "conversion": 37,
      "total": 41
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (65/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1164",
    "name": "Carlos Jiménez Suárez",
    "email": "carlos.jimenez@hotmail.com",
    "phone": "+57 328 250 9424",
    "city": "Ubaté",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 179400000,
    "downPaymentCOP": 14352000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 43,
    "scores": {
      "fit": 20,
      "intent": 65,
      "engagement": 35,
      "conversion": 39,
      "total": 41
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (65/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1165",
    "name": "Andrés Castro Bernal",
    "email": "andres.castro@gmail.com",
    "phone": "+57 354 746 9681",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 177090000,
    "downPaymentCOP": 14167200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 43,
    "scores": {
      "fit": 17,
      "intent": 68,
      "engagement": 38,
      "conversion": 49,
      "total": 44
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (68/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1166",
    "name": "Fernando Castillo Pineda",
    "email": "fernando.castillo@hotmail.com",
    "phone": "+57 309 642 4699",
    "city": "Ciudadela Calle 80",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 529000000,
    "downPaymentCOP": 105800000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 40,
    "scores": {
      "fit": 15,
      "intent": 55,
      "engagement": 46,
      "conversion": 41,
      "total": 39
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (55/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1167",
    "name": "Fabián Cruz Muñoz",
    "email": "fabian.cruz@gmail.com",
    "phone": "+57 322 006 4609",
    "city": "Girardot",
    "channel": "Google Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 533800000,
    "downPaymentCOP": 106760000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 40,
    "scores": {
      "fit": 27,
      "intent": 52,
      "engagement": 27,
      "conversion": 32,
      "total": 36
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (52/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1168",
    "name": "Fabián Mora Herrera",
    "email": "fabian.mora@gmail.com",
    "phone": "+57 308 161 1045",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 253300000,
    "downPaymentCOP": 20264000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "saman",
    "matchPercentage": 40,
    "scores": {
      "fit": 11,
      "intent": 51,
      "engagement": 35,
      "conversion": 27,
      "total": 31
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (51/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 3 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1169",
    "name": "Daniela Ruiz Castro",
    "email": "daniela.ruiz@outlook.com",
    "phone": "+57 308 085 3774",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 194240000,
    "downPaymentCOP": 15539200,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "pamplona",
    "matchPercentage": 40,
    "scores": {
      "fit": 28,
      "intent": 40,
      "engagement": 39,
      "conversion": 43,
      "total": 37
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (40/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1170",
    "name": "Andrés Rincón Gómez",
    "email": "andres.rincon@outlook.com",
    "phone": "+57 328 162 1574",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Perdido",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 172700000,
    "downPaymentCOP": 13816000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 42,
    "scores": {
      "fit": 35,
      "intent": 48,
      "engagement": 42,
      "conversion": 48,
      "total": 43
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (48/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1171",
    "name": "Eduardo Jiménez Ruiz",
    "email": "eduardo.jimenez@hotmail.com",
    "phone": "+57 301 785 1976",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 202950000,
    "downPaymentCOP": 16236000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "versalles",
    "matchPercentage": 40,
    "scores": {
      "fit": 4,
      "intent": 76,
      "engagement": 42,
      "conversion": 41,
      "total": 41
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (76/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1172",
    "name": "Paola Rodríguez Hernández",
    "email": "paola.rodriguez@hotmail.com",
    "phone": "+57 351 165 6329",
    "city": "Chía",
    "channel": "Google Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 236000000,
    "downPaymentCOP": 18880000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "reserva-guayacan",
    "matchPercentage": 40,
    "scores": {
      "fit": 16,
      "intent": 53,
      "engagement": 36,
      "conversion": 40,
      "total": 37
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (53/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1173",
    "name": "Laura Moreno Acosta",
    "email": "laura.moreno@outlook.com",
    "phone": "+57 312 927 0557",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "No VIS",
    "budgetCOP": 608000000,
    "downPaymentCOP": 121600000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "araucaria",
    "matchPercentage": 40,
    "scores": {
      "fit": 14,
      "intent": 63,
      "engagement": 59,
      "conversion": 41,
      "total": 43
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (63/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1174",
    "name": "Nicolás Acosta López",
    "email": "nicolas.acosta@hotmail.com",
    "phone": "+57 301 589 2193",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "No VIS",
    "budgetCOP": 530200000,
    "downPaymentCOP": 106040000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat C",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 47,
    "scores": {
      "fit": 18,
      "intent": 75,
      "engagement": 49,
      "conversion": 41,
      "total": 46
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría C con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (75/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 3 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 3 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1175",
    "name": "Yolanda Peña Castro",
    "email": "yolanda.pena@gmail.com",
    "phone": "+57 311 155 7295",
    "city": "Soacha",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 260080000,
    "downPaymentCOP": 20806400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "inari",
    "matchPercentage": 40,
    "scores": {
      "fit": 24,
      "intent": 49,
      "engagement": 33,
      "conversion": 29,
      "total": 34
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (49/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1176",
    "name": "Ricardo Cárdenas Bernal",
    "email": "ricardo.cardenas@hotmail.com",
    "phone": "+57 328 731 1859",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 165140000,
    "downPaymentCOP": 13211200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 40,
    "scores": {
      "fit": 17,
      "intent": 60,
      "engagement": 49,
      "conversion": 39,
      "total": 41
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (60/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1177",
    "name": "Cristian Álvarez Peña",
    "email": "cristian.alvarez@gmail.com",
    "phone": "+57 314 290 5017",
    "city": "Ciudadela Calle 80",
    "channel": "Google Ads",
    "campaign": "Bogota No Vis",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 529000000,
    "downPaymentCOP": 105800000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "los-nogales",
    "matchPercentage": 40,
    "scores": {
      "fit": 10,
      "intent": 58,
      "engagement": 55,
      "conversion": 42,
      "total": 40
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (58/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1178",
    "name": "Fernanda Romero García",
    "email": "fernanda.romero@outlook.com",
    "phone": "+57 307 471 7944",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 202950000,
    "downPaymentCOP": 16236000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "versalles",
    "matchPercentage": 40,
    "scores": {
      "fit": 4,
      "intent": 54,
      "engagement": 28,
      "conversion": 27,
      "total": 29
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (54/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 22 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1179",
    "name": "Ana Romero Ospina",
    "email": "ana.romero@hotmail.com",
    "phone": "+57 305 035 0996",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 139060000,
    "downPaymentCOP": 11124800,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-macarena",
    "matchPercentage": 40,
    "scores": {
      "fit": 22,
      "intent": 42,
      "engagement": 42,
      "conversion": 30,
      "total": 33
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (42/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1180",
    "name": "Sandra Cárdenas Gutiérrez",
    "email": "sandra.cardenas@outlook.com",
    "phone": "+57 325 598 7725",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 179400000,
    "downPaymentCOP": 14352000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 40,
    "scores": {
      "fit": 20,
      "intent": 52,
      "engagement": 38,
      "conversion": 31,
      "total": 35
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (52/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 24 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1181",
    "name": "Valentina Ramírez Ríos",
    "email": "valentina.ramirez@outlook.com",
    "phone": "+57 321 213 0654",
    "city": "Ubaté",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 160420000,
    "downPaymentCOP": 12833600,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "verde-esperanza",
    "matchPercentage": 40,
    "scores": {
      "fit": 19,
      "intent": 53,
      "engagement": 34,
      "conversion": 36,
      "total": 36
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (53/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1182",
    "name": "Fernando Ramírez Cruz",
    "email": "fernando.ramirez@outlook.com",
    "phone": "+57 322 941 9691",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 237530000,
    "downPaymentCOP": 19002400,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat C",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "karakali",
    "matchPercentage": 40,
    "scores": {
      "fit": 17,
      "intent": 55,
      "engagement": 44,
      "conversion": 38,
      "total": 38
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría C con subsidio VIS aplicable. Su señal más fuerte es intención de compra (55/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 16 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1183",
    "name": "Felipe Rojas Delgado",
    "email": "felipe.rojas@outlook.com",
    "phone": "+57 329 270 7781",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 188640000,
    "downPaymentCOP": 15091200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat B",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 42,
    "scores": {
      "fit": 32,
      "intent": 52,
      "engagement": 25,
      "conversion": 43,
      "total": 40
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría B con subsidio VIS aplicable. Su señal más fuerte es intención de compra (52/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1184",
    "name": "Yolanda Suárez Delgado",
    "email": "yolanda.suarez@hotmail.com",
    "phone": "+57 326 190 8845",
    "city": "Ciudadela Maiporé",
    "channel": "Google Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 166820000,
    "downPaymentCOP": 13345600,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "mongui",
    "matchPercentage": 44,
    "scores": {
      "fit": 21,
      "intent": 66,
      "engagement": 36,
      "conversion": 44,
      "total": 43
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (66/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1185",
    "name": "Santiago Rodríguez Hernández",
    "email": "santiago.rodriguez@gmail.com",
    "phone": "+57 355 575 4284",
    "city": "Tocancipá",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "No VIS",
    "budgetCOP": 608000000,
    "downPaymentCOP": 121600000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": false,
    "recommendedProjectId": "araucaria",
    "matchPercentage": 41,
    "scores": {
      "fit": 24,
      "intent": 57,
      "engagement": 36,
      "conversion": 42,
      "total": 40
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con proyecto No VIS (sin subsidio). Su señal más fuerte es intención de compra (57/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1186",
    "name": "Sandra Hernández Cárdenas",
    "email": "sandra.hernandez@outlook.com",
    "phone": "+57 323 968 1939",
    "city": "Tocancipá",
    "channel": "Google Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Pre-Aprobado",
    "temperature": "Hot",
    "housingInterest": "VIS",
    "budgetCOP": 184600000,
    "downPaymentCOP": 14768000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-arrayan",
    "matchPercentage": 57,
    "scores": {
      "fit": 20,
      "intent": 93,
      "engagement": 54,
      "conversion": 61,
      "total": 58
    },
    "priority": "Muy Alta",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (93/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1187",
    "name": "Juan Torres Medina",
    "email": "juan.torres@gmail.com",
    "phone": "+57 304 722 4958",
    "city": "Ricaurte",
    "channel": "Meta Ads",
    "campaign": "Primer Hogar Chia",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 253300000,
    "downPaymentCOP": 20264000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "saman",
    "matchPercentage": 40,
    "scores": {
      "fit": 6,
      "intent": 59,
      "engagement": 43,
      "conversion": 29,
      "total": 34
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (59/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 3 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1188",
    "name": "Martha Delgado Pardo",
    "email": "martha.delgado@outlook.com",
    "phone": "+57 309 174 2470",
    "city": "Soacha",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 253400000,
    "downPaymentCOP": 20272000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "saman",
    "matchPercentage": 40,
    "scores": {
      "fit": 20,
      "intent": 51,
      "engagement": 54,
      "conversion": 39,
      "total": 40
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (51/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1189",
    "name": "Hernán Mora Cruz",
    "email": "hernan.mora@hotmail.com",
    "phone": "+57 359 775 5782",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Bogota No Vis",
    "status": "En Negociación",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 253640000,
    "downPaymentCOP": 20291200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "saman",
    "matchPercentage": 49,
    "scores": {
      "fit": 32,
      "intent": 66,
      "engagement": 50,
      "conversion": 54,
      "total": 51
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (66/100). Ya completó 6 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 2 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Cita agendada en sala de ventas",
        "details": "Se agendó cita presencial en sala de ventas.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1190",
    "name": "Mónica Pineda Ríos",
    "email": "monica.pineda@hotmail.com",
    "phone": "+57 306 732 6334",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 182480000,
    "downPaymentCOP": 14598400,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 40,
    "scores": {
      "fit": 24,
      "intent": 54,
      "engagement": 39,
      "conversion": 46,
      "total": 41
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (54/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 3 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 3 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1191",
    "name": "Claudia Moreno Bernal",
    "email": "claudia.moreno@outlook.com",
    "phone": "+57 357 651 4912",
    "city": "Ciudadela Maiporé",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 193660000,
    "downPaymentCOP": 15492800,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "pamplona",
    "matchPercentage": 40,
    "scores": {
      "fit": 27,
      "intent": 47,
      "engagement": 27,
      "conversion": 35,
      "total": 35
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (47/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1192",
    "name": "Valentina García Medina",
    "email": "valentina.garcia@outlook.com",
    "phone": "+57 315 492 3454",
    "city": "Ciudadela Maiporé",
    "channel": "Google Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Pre-Aprobado",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 140900000,
    "downPaymentCOP": 11272000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-macarena",
    "matchPercentage": 47,
    "scores": {
      "fit": 30,
      "intent": 63,
      "engagement": 53,
      "conversion": 47,
      "total": 48
    },
    "priority": "Media",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (63/100). Ya completó 5 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Contactado por asesor (WhatsApp/llamada)",
        "details": "El asesor comercial estableció el primer contacto.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Ayer",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1193",
    "name": "Daniel Romero Reyes",
    "email": "daniel.romero@outlook.com",
    "phone": "+57 321 843 4795",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Vivienda Vis 2026",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 181710000,
    "downPaymentCOP": 14536800,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 40,
    "scores": {
      "fit": 23,
      "intent": 44,
      "engagement": 43,
      "conversion": 36,
      "total": 36
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (44/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 21 horas",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "iPhone"
      }
    ]
  },
  {
    "id": "LEAD-1194",
    "name": "Patricia Díaz Jiménez",
    "email": "patricia.diaz@gmail.com",
    "phone": "+57 313 669 2577",
    "city": "Bogotá",
    "channel": "Google Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 177090000,
    "downPaymentCOP": 14167200,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "la-arboleda",
    "matchPercentage": 47,
    "scores": {
      "fit": 17,
      "intent": 77,
      "engagement": 43,
      "conversion": 43,
      "total": 46
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (77/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Ayer",
    "behaviorLogs": [
      {
        "timestamp": "Ayer",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "iPhone"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Android"
      }
    ]
  },
  {
    "id": "LEAD-1195",
    "name": "Ricardo Castro Castro",
    "email": "ricardo.castro@hotmail.com",
    "phone": "+57 323 729 1394",
    "city": "Ubaté",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 236000000,
    "downPaymentCOP": 18880000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "reserva-guayacan",
    "matchPercentage": 40,
    "scores": {
      "fit": 17,
      "intent": 57,
      "engagement": 57,
      "conversion": 49,
      "total": 44
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (57/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 3 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  },
  {
    "id": "LEAD-1196",
    "name": "Hernán Medina Vargas",
    "email": "hernan.medina@gmail.com",
    "phone": "+57 356 179 2685",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Familia Maipore",
    "status": "Perdido",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 220600000,
    "downPaymentCOP": 17648000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 40,
    "scores": {
      "fit": 20,
      "intent": 60,
      "engagement": 40,
      "conversion": 48,
      "total": 42
    },
    "priority": "Baja",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (60/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 3 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Android"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1197",
    "name": "Valentina González Muñoz",
    "email": "valentina.gonzalez@hotmail.com",
    "phone": "+57 306 931 3284",
    "city": "Chía",
    "channel": "Meta Ads",
    "campaign": "Jovenes Tocancipa",
    "status": "Cita Agendada",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 256300000,
    "downPaymentCOP": 20504000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "inari",
    "matchPercentage": 40,
    "scores": {
      "fit": 10,
      "intent": 50,
      "engagement": 51,
      "conversion": 28,
      "total": 33
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (50/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Ayer",
    "lastInteraction": "Hace 1 min",
    "behaviorLogs": [
      {
        "timestamp": "Hace 1 min",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 1 min",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Ayer",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "iPhone"
      },
      {
        "timestamp": "Ayer",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Desktop Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1198",
    "name": "Pedro Suárez Medina",
    "email": "pedro.suarez@hotmail.com",
    "phone": "+57 309 285 2868",
    "city": "Tocancipá",
    "channel": "Meta Ads",
    "campaign": "Bogota No Vis",
    "status": "En Calificación",
    "temperature": "Cold",
    "housingInterest": "VIS",
    "budgetCOP": 217950000,
    "downPaymentCOP": 17436000,
    "colsubsidioAfiliado": false,
    "afiliacionCategoria": "No Afiliado",
    "hasCajaSubsidio": false,
    "hasMiCasaYa": true,
    "recommendedProjectId": "bosque-turpial",
    "matchPercentage": 40,
    "scores": {
      "fit": 5,
      "intent": 64,
      "engagement": 36,
      "conversion": 35,
      "total": 35
    },
    "priority": "Baja",
    "priorityRationale": "No afiliado, con subsidio VIS aplicable. Su señal más fuerte es intención de compra (64/100).",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 3 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 3 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 3 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "Móvil Chrome"
      }
    ]
  },
  {
    "id": "LEAD-1199",
    "name": "Laura Peña Romero",
    "email": "laura.pena@outlook.com",
    "phone": "+57 359 797 7738",
    "city": "Bogotá",
    "channel": "Meta Ads",
    "campaign": "Inversion Ricaurte",
    "status": "Cita Agendada",
    "temperature": "Warm",
    "housingInterest": "VIS",
    "budgetCOP": 253300000,
    "downPaymentCOP": 20264000,
    "colsubsidioAfiliado": true,
    "afiliacionCategoria": "Cat A",
    "hasCajaSubsidio": true,
    "hasMiCasaYa": true,
    "recommendedProjectId": "saman",
    "matchPercentage": 46,
    "scores": {
      "fit": 15,
      "intent": 76,
      "engagement": 62,
      "conversion": 59,
      "total": 52
    },
    "priority": "Media",
    "priorityRationale": "Afiliado Categoría A con subsidio VIS aplicable. Su señal más fuerte es intención de compra (76/100). Ya completó 4 interacciones en su recorrido.",
    "assignedAdvisor": "Carlos Rodríguez",
    "createdAt": "Hace 4 días",
    "lastInteraction": "Hace 2 días",
    "behaviorLogs": [
      {
        "timestamp": "Hace 2 días",
        "action": "Usó simulador de subsidio/crédito",
        "details": "Usó el simulador de subsidio y crédito hipotecario.",
        "device": "Desktop Chrome"
      },
      {
        "timestamp": "Hace 2 días",
        "action": "Visitó landing del proyecto",
        "details": "Visitó la página del proyecto y revisó precios y disponibilidad.",
        "device": "WhatsApp Web"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Completó formulario de perfilamiento",
        "details": "Completó los datos de perfilamiento inicial (ingresos, composición familiar, afiliación).",
        "device": "Móvil Chrome"
      },
      {
        "timestamp": "Hace 4 días",
        "action": "Lead capturado desde pauta",
        "details": "Ingresó por formulario de campaña paga.",
        "device": "WhatsApp Web"
      }
    ]
  }
] as Lead[];

export const REAL_PROJECTS: HousingProject[] = [
  {
    "id": "bosque-arrayan",
    "name": "Bosque de Arrayán",
    "type": "VIS",
    "municipality": "Tocancipá",
    "address": "Tocancipá, Cundinamarca",
    "minPriceCOP": 177000000,
    "maxPriceCOP": 215000000,
    "unitsTotal": 252,
    "unitsAvailable": 65,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Entrega 2026",
    "description": "Proyecto VIS en Tocancipá, ideal para jóvenes y familias pequeñas que trabajan en zona norte de Bogotá. Buena valorización.",
    "features": [
      "Zonas verdes",
      "Salón comunal",
      "Parqueadero",
      "Zona infantil"
    ],
    "rotationAlert": false
  },
  {
    "id": "bosque-turpial",
    "name": "Bosque de Turpial",
    "type": "VIS",
    "municipality": "Tocancipá",
    "address": "Tocancipá, Cundinamarca",
    "minPriceCOP": 210000000,
    "maxPriceCOP": 263000000,
    "unitsTotal": 95,
    "unitsAvailable": 40,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Q1 2027",
    "description": "Proyecto VIS en Tocancipá con alta concentración de compradores jóvenes sin grupo familiar. Perfecto para primer hogar.",
    "features": [
      "Zonas verdes",
      "Salón comunal",
      "Parqueadero"
    ],
    "rotationAlert": false
  },
  {
    "id": "la-macarena",
    "name": "La Macarena",
    "type": "VIS",
    "municipality": "Ciudadela Maiporé",
    "address": "Ciudadela Maiporé, Cundinamarca",
    "minPriceCOP": 134000000,
    "maxPriceCOP": 157000000,
    "unitsTotal": 207,
    "unitsAvailable": 88,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Q2 2027",
    "description": "El más económico de Maiporé. Ideal para familias de ingresos básicos. Alta concentración de compradores desde Soacha y sur de Bogotá.",
    "features": [
      "Zonas verdes",
      "Salón comunal",
      "Zona infantil",
      "Zona BBQ"
    ],
    "rotationAlert": false
  },
  {
    "id": "mongui",
    "name": "Monguí",
    "type": "VIS",
    "municipality": "Ciudadela Maiporé",
    "address": "Ciudadela Maiporé, Cundinamarca",
    "minPriceCOP": 158000000,
    "maxPriceCOP": 200000000,
    "unitsTotal": 251,
    "unitsAvailable": 70,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Q2 2027",
    "description": "Proyecto VIS en Maiporé con buen balance de familias monoparentales. Compradores principalmente desde Bogotá y Soacha.",
    "features": [
      "Zonas verdes",
      "Salón comunal",
      "Parqueadero",
      "Zona infantil"
    ],
    "rotationAlert": false
  },
  {
    "id": "pamplona",
    "name": "Pamplona I",
    "type": "VIS",
    "municipality": "Ciudadela Maiporé",
    "address": "Ciudadela Maiporé, Cundinamarca",
    "minPriceCOP": 178000000,
    "maxPriceCOP": 236000000,
    "unitsTotal": 182,
    "unitsAvailable": 13,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Q4 2026",
    "description": "Proyecto VIS en Maiporé con familias más establecidas. Compradores desde Soacha (13%) y Bogotá.",
    "features": [
      "Zonas verdes",
      "Salón comunal",
      "Parqueadero",
      "Zona infantil"
    ],
    "rotationAlert": true
  },
  {
    "id": "versalles",
    "name": "Versalles",
    "type": "VIS",
    "municipality": "Ciudadela Maiporé",
    "address": "Ciudadela Maiporé, Cundinamarca",
    "minPriceCOP": 198000000,
    "maxPriceCOP": 231000000,
    "unitsTotal": 83,
    "unitsAvailable": 32,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Entrega Inmediata",
    "description": "Proyecto VIS en Maiporé. 100% de compradores ganan hasta 2 SMLV. Alto porcentaje de afiliados (71%). Ideal para madres cabeza de hogar.",
    "features": [
      "Zonas verdes",
      "Salón comunal",
      "Parqueadero",
      "Zona infantil"
    ],
    "rotationAlert": false
  },
  {
    "id": "inari",
    "name": "INARI",
    "type": "VIS",
    "municipality": "Chía",
    "address": "Chía, Cundinamarca",
    "minPriceCOP": 250000000,
    "maxPriceCOP": 292000000,
    "unitsTotal": 206,
    "unitsAvailable": 58,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Q3 2026",
    "description": "Proyecto en Chía, zona de alta valorización. Mayoría de compradores jóvenes sin grupo familiar. Cercanía a Bogotá por Autopista Norte.",
    "features": [
      "Zonas verdes",
      "Salón comunal",
      "Parqueadero",
      "Zona BBQ",
      "Gimnasio"
    ],
    "rotationAlert": false
  },
  {
    "id": "reserva-guayacan",
    "name": "Reserva de Guayacán",
    "type": "VIS",
    "municipality": "Girardot",
    "address": "Girardot, Cundinamarca",
    "minPriceCOP": 236000000,
    "maxPriceCOP": 236000000,
    "unitsTotal": 141,
    "unitsAvailable": 9,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Q2 2027",
    "description": "Proyecto en Girardot con amenities de clima cálido (piscina). Ideal para inversión o segunda vivienda. Alta proporción de familias ampliadas.",
    "features": [
      "Piscina",
      "Zonas verdes",
      "Salón comunal",
      "Zona BBQ",
      "Zona infantil"
    ],
    "rotationAlert": true
  },
  {
    "id": "saman",
    "name": "Samán",
    "type": "VIS",
    "municipality": "Ricaurte",
    "address": "Ricaurte, Cundinamarca",
    "minPriceCOP": 253000000,
    "maxPriceCOP": 255000000,
    "unitsTotal": 111,
    "unitsAvailable": 45,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Entrega 2026",
    "description": "Proyecto en Ricaurte (tierra caliente). El más alto % de afiliados (77%). Perfil de familias establecidas. Clima cálido con piscina.",
    "features": [
      "Piscina",
      "Zonas verdes",
      "Salón comunal",
      "Zona BBQ"
    ],
    "rotationAlert": false
  },
  {
    "id": "payande",
    "name": "Payandé",
    "type": "VIS",
    "municipality": "Ricaurte",
    "address": "Ricaurte, Cundinamarca",
    "minPriceCOP": 128000000,
    "maxPriceCOP": 202000000,
    "unitsTotal": 116,
    "unitsAvailable": 14,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Q2 2027",
    "description": "Proyecto económico en Ricaurte. Clima cálido. Compradores mayoritariamente desde Bogotá (50%). Opción de inversión.",
    "features": [
      "Piscina",
      "Zonas verdes",
      "Salón comunal",
      "Zona infantil"
    ],
    "rotationAlert": true
  },
  {
    "id": "karakali",
    "name": "Karakalí",
    "type": "VIS",
    "municipality": "Ricaurte",
    "address": "Ricaurte, Cundinamarca",
    "minPriceCOP": 236000000,
    "maxPriceCOP": 245000000,
    "unitsTotal": 149,
    "unitsAvailable": 23,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Entrega Inmediata",
    "description": "Proyecto premium en Ricaurte. Mayoría jóvenes sin grupo familiar con ingresos sobre 2 SMLV. Alta proporción de no afiliados.",
    "features": [
      "Piscina",
      "Zonas verdes",
      "Salón comunal",
      "Zona BBQ",
      "Gimnasio"
    ],
    "rotationAlert": false
  },
  {
    "id": "araucaria",
    "name": "Araucaria",
    "type": "No VIS",
    "municipality": "Ciudadela Calle 80",
    "address": "Ciudadela Calle 80, Cundinamarca",
    "minPriceCOP": 608000000,
    "maxPriceCOP": 608000000,
    "unitsTotal": 193,
    "unitsAvailable": 40,
    "subsidyApplicable": false,
    "cajaSubsidioAmountCOP": 0,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Q1 2027",
    "description": "Proyecto No VIS en Bogotá (Calle 80). El más costoso. Perfil de ingresos altos, muchos no afiliados (62%). Zona urbana consolidada.",
    "features": [
      "Zonas verdes",
      "Salón comunal",
      "Parqueadero",
      "Gimnasio",
      "Zona infantil",
      "Coworking"
    ],
    "rotationAlert": false
  },
  {
    "id": "los-nogales",
    "name": "Los Nogales",
    "type": "No VIS",
    "municipality": "Ciudadela Calle 80",
    "address": "Ciudadela Calle 80, Cundinamarca",
    "minPriceCOP": 523000000,
    "maxPriceCOP": 563000000,
    "unitsTotal": 132,
    "unitsAvailable": 11,
    "subsidyApplicable": false,
    "cajaSubsidioAmountCOP": 0,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Q3 2026",
    "description": "Proyecto No VIS en Bogotá (Calle 80). Perfil de familias establecidas con buenos ingresos. Mayoría no afiliados (60%). Zona Engativá.",
    "features": [
      "Zonas verdes",
      "Salón comunal",
      "Parqueadero",
      "Gimnasio",
      "Zona infantil"
    ],
    "rotationAlert": true
  },
  {
    "id": "la-arboleda",
    "name": "La Arboleda",
    "type": "VIS",
    "municipality": "Bogotá",
    "address": "Bogotá, Cundinamarca",
    "minPriceCOP": 164000000,
    "maxPriceCOP": 241000000,
    "unitsTotal": 157,
    "unitsAvailable": 40,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Q4 2026",
    "description": "Proyecto VIS en Bogotá (San Cristóbal). 90% gana hasta 2 SMLV. Alto % de madres cabeza de hogar. El proyecto más accesible en Bogotá.",
    "features": [
      "Zonas verdes",
      "Salón comunal",
      "Parqueadero",
      "Zona infantil"
    ],
    "rotationAlert": false
  },
  {
    "id": "verde-esperanza",
    "name": "Verde Esperanza El Dorado",
    "type": "VIS",
    "municipality": "Ubaté",
    "address": "Ubaté, Cundinamarca",
    "minPriceCOP": 157000000,
    "maxPriceCOP": 175000000,
    "unitsTotal": 109,
    "unitsAvailable": 25,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Q1 2027",
    "description": "Proyecto VIS en Ubaté. 99% financia con Colsubsidio. Compradores de empresas locales (flores, minas). Perfil muy básico.",
    "features": [
      "Zonas verdes",
      "Salón comunal",
      "Zona infantil"
    ],
    "rotationAlert": false
  },
  {
    "id": "vibo-once",
    "name": "VIBO Once",
    "type": "VIS",
    "municipality": "Ricaurte",
    "address": "Ricaurte, Cundinamarca",
    "minPriceCOP": 281000000,
    "maxPriceCOP": 281000000,
    "unitsTotal": 144,
    "unitsAvailable": 24,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Q1 2027",
    "description": "Proyecto nuevo en Ricaurte. Pocos datos aún. Perfil joven. Clima cálido con piscina.",
    "features": [
      "Piscina",
      "Zonas verdes",
      "Salón comunal"
    ],
    "rotationAlert": false
  },
  {
    "id": "villa-fiorita",
    "name": "Villa Fiorita",
    "type": "VIS",
    "municipality": "Ciudadela Maiporé",
    "address": "Ciudadela Maiporé, Cundinamarca",
    "minPriceCOP": 198000000,
    "maxPriceCOP": 213000000,
    "unitsTotal": 232,
    "unitsAvailable": 20,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Q4 2026",
    "description": "Proyecto VIS en Maiporé. Perfil medio, familias mixtas.",
    "features": [
      "Zonas verdes",
      "Salón comunal",
      "Parqueadero"
    ],
    "rotationAlert": true
  },
  {
    "id": "zarzal",
    "name": "Zarzal",
    "type": "VIS",
    "municipality": "Ciudadela Maiporé",
    "address": "Ciudadela Maiporé, Cundinamarca",
    "minPriceCOP": 180000000,
    "maxPriceCOP": 220000000,
    "unitsTotal": 255,
    "unitsAvailable": 72,
    "subsidyApplicable": true,
    "cajaSubsidioAmountCOP": 39000000,
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "deliveryDate": "Q2 2027",
    "description": "Proyecto VIS en Maiporé. Nuevo lanzamiento.",
    "features": [
      "Zonas verdes",
      "Salón comunal",
      "Parqueadero",
      "Zona infantil"
    ],
    "rotationAlert": false
  }
] as HousingProject[];

export const REAL_DEALS: Deal[] = [
  {
    "id": "deal-LEAD-1000",
    "leadId": "LEAD-1000",
    "leadName": "Camilo Rojas Castro",
    "projectName": "INARI",
    "unitCode": "Torre Norte - Apt 214",
    "valueCOP": 271000000,
    "stage": "Cita Sala",
    "probability": 31,
    "closingDate": "22 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1001",
    "leadId": "LEAD-1001",
    "leadName": "Daniela Mora Reyes",
    "projectName": "Samán",
    "unitCode": "Torre 2 - Apt 312",
    "valueCOP": 254000000,
    "stage": "Cita Sala",
    "probability": 51,
    "closingDate": "6 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1002",
    "leadId": "LEAD-1002",
    "leadName": "Ana Rincón Mora",
    "projectName": "Bosque de Turpial",
    "unitCode": "Torre 1 - Apt 271",
    "valueCOP": 236500000,
    "stage": "Pre-Aprobado",
    "probability": 56,
    "closingDate": "19 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1003",
    "leadId": "LEAD-1003",
    "leadName": "Santiago Rojas Vargas",
    "projectName": "Samán",
    "unitCode": "Torre 1 - Apt 272",
    "valueCOP": 254000000,
    "stage": "Promesa Firmada",
    "probability": 52,
    "closingDate": "25 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1004",
    "leadId": "LEAD-1004",
    "leadName": "Miguel Ortiz Moreno",
    "projectName": "Samán",
    "unitCode": "Torre B - Apt 140",
    "valueCOP": 254000000,
    "stage": "Cita Sala",
    "probability": 40,
    "closingDate": "13 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1006",
    "leadId": "LEAD-1006",
    "leadName": "Paola Cruz Rincón",
    "projectName": "Los Nogales",
    "unitCode": "Torre A - Apt 349",
    "valueCOP": 543000000,
    "stage": "Cita Sala",
    "probability": 48,
    "closingDate": "16 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1007",
    "leadId": "LEAD-1007",
    "leadName": "Alejandro González Ríos",
    "projectName": "Pamplona I",
    "unitCode": "Torre Norte - Apt 491",
    "valueCOP": 207000000,
    "stage": "Cita Sala",
    "probability": 34,
    "closingDate": "27 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1008",
    "leadId": "LEAD-1008",
    "leadName": "Ángela Reyes Castro",
    "projectName": "Versalles",
    "unitCode": "Torre 2 - Apt 352",
    "valueCOP": 214500000,
    "stage": "Promesa Firmada",
    "probability": 51,
    "closingDate": "9 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1009",
    "leadId": "LEAD-1009",
    "leadName": "Valentina Moreno Rincón",
    "projectName": "La Arboleda",
    "unitCode": "Torre 2 - Apt 476",
    "valueCOP": 202500000,
    "stage": "Pre-Aprobado",
    "probability": 48,
    "closingDate": "8 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1010",
    "leadId": "LEAD-1010",
    "leadName": "Camila Hernández Jiménez",
    "projectName": "La Arboleda",
    "unitCode": "Torre 2 - Apt 118",
    "valueCOP": 202500000,
    "stage": "Cita Sala",
    "probability": 29,
    "closingDate": "7 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1012",
    "leadId": "LEAD-1012",
    "leadName": "Javier Romero Ruiz",
    "projectName": "La Arboleda",
    "unitCode": "Torre Norte - Apt 193",
    "valueCOP": 202500000,
    "stage": "Promesa Firmada",
    "probability": 54,
    "closingDate": "8 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1013",
    "leadId": "LEAD-1013",
    "leadName": "Yolanda Cárdenas Cárdenas",
    "projectName": "Pamplona I",
    "unitCode": "Torre A - Apt 120",
    "valueCOP": 207000000,
    "stage": "Cita Sala",
    "probability": 44,
    "closingDate": "24 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1014",
    "leadId": "LEAD-1014",
    "leadName": "Adriana Herrera Vargas",
    "projectName": "Verde Esperanza El Dorado",
    "unitCode": "Torre A - Apt 319",
    "valueCOP": 166000000,
    "stage": "Cierre Exitoso",
    "probability": 62,
    "closingDate": "1 de Septiembre 2026",
    "subsidyStatus": "Aprobado Mi Casa Ya"
  },
  {
    "id": "deal-LEAD-1015",
    "leadId": "LEAD-1015",
    "leadName": "Santiago Cárdenas Gómez",
    "projectName": "Los Nogales",
    "unitCode": "Torre Norte - Apt 348",
    "valueCOP": 543000000,
    "stage": "Promesa Firmada",
    "probability": 60,
    "closingDate": "16 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1016",
    "leadId": "LEAD-1016",
    "leadName": "Héctor Moreno Ruiz",
    "projectName": "Versalles",
    "unitCode": "Torre B - Apt 217",
    "valueCOP": 214500000,
    "stage": "Pre-Aprobado",
    "probability": 53,
    "closingDate": "11 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1018",
    "leadId": "LEAD-1018",
    "leadName": "Juan García Álvarez",
    "projectName": "La Arboleda",
    "unitCode": "Torre 3 - Apt 360",
    "valueCOP": 202500000,
    "stage": "Pre-Aprobado",
    "probability": 44,
    "closingDate": "16 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1020",
    "leadId": "LEAD-1020",
    "leadName": "Santiago Cárdenas Gómez",
    "projectName": "Versalles",
    "unitCode": "Torre A - Apt 306",
    "valueCOP": 214500000,
    "stage": "Pre-Aprobado",
    "probability": 40,
    "closingDate": "8 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1021",
    "leadId": "LEAD-1021",
    "leadName": "Javier Gómez Romero",
    "projectName": "Pamplona I",
    "unitCode": "Torre Norte - Apt 261",
    "valueCOP": 207000000,
    "stage": "Cita Sala",
    "probability": 38,
    "closingDate": "11 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1022",
    "leadId": "LEAD-1022",
    "leadName": "Yolanda Rojas Sánchez",
    "projectName": "Karakalí",
    "unitCode": "Torre A - Apt 348",
    "valueCOP": 240500000,
    "stage": "Pre-Aprobado",
    "probability": 62,
    "closingDate": "14 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1023",
    "leadId": "LEAD-1023",
    "leadName": "Andrés Torres Pardo",
    "projectName": "La Macarena",
    "unitCode": "Torre A - Apt 210",
    "valueCOP": 145500000,
    "stage": "Cita Sala",
    "probability": 41,
    "closingDate": "26 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1024",
    "leadId": "LEAD-1024",
    "leadName": "Mónica Ospina Castro",
    "projectName": "Los Nogales",
    "unitCode": "Torre 3 - Apt 138",
    "valueCOP": 543000000,
    "stage": "Cita Sala",
    "probability": 56,
    "closingDate": "14 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1025",
    "leadId": "LEAD-1025",
    "leadName": "Paola Ospina Mora",
    "projectName": "INARI",
    "unitCode": "Torre 2 - Apt 419",
    "valueCOP": 271000000,
    "stage": "Pre-Aprobado",
    "probability": 43,
    "closingDate": "31 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1026",
    "leadId": "LEAD-1026",
    "leadName": "Tatiana Herrera Rodríguez",
    "projectName": "Monguí",
    "unitCode": "Torre 1 - Apt 420",
    "valueCOP": 179000000,
    "stage": "Pre-Aprobado",
    "probability": 49,
    "closingDate": "28 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1027",
    "leadId": "LEAD-1027",
    "leadName": "Nicolás Ríos González",
    "projectName": "INARI",
    "unitCode": "Torre 1 - Apt 320",
    "valueCOP": 271000000,
    "stage": "Pre-Aprobado",
    "probability": 48,
    "closingDate": "26 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1029",
    "leadId": "LEAD-1029",
    "leadName": "Katherine Jiménez Ríos",
    "projectName": "La Macarena",
    "unitCode": "Torre 2 - Apt 165",
    "valueCOP": 145500000,
    "stage": "Promesa Firmada",
    "probability": 59,
    "closingDate": "12 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1030",
    "leadId": "LEAD-1030",
    "leadName": "Diego Gutiérrez González",
    "projectName": "Monguí",
    "unitCode": "Torre B - Apt 303",
    "valueCOP": 179000000,
    "stage": "Promesa Firmada",
    "probability": 65,
    "closingDate": "29 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1031",
    "leadId": "LEAD-1031",
    "leadName": "Ana Torres Díaz",
    "projectName": "Los Nogales",
    "unitCode": "Torre B - Apt 417",
    "valueCOP": 543000000,
    "stage": "Cita Sala",
    "probability": 46,
    "closingDate": "2 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1032",
    "leadId": "LEAD-1032",
    "leadName": "Lina Rincón Romero",
    "projectName": "INARI",
    "unitCode": "Torre 1 - Apt 424",
    "valueCOP": 271000000,
    "stage": "Pre-Aprobado",
    "probability": 55,
    "closingDate": "26 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1033",
    "leadId": "LEAD-1033",
    "leadName": "Andrés Rincón Muñoz",
    "projectName": "Pamplona I",
    "unitCode": "Torre A - Apt 415",
    "valueCOP": 207000000,
    "stage": "Promesa Firmada",
    "probability": 60,
    "closingDate": "22 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1034",
    "leadId": "LEAD-1034",
    "leadName": "Tatiana Jiménez Álvarez",
    "projectName": "Los Nogales",
    "unitCode": "Torre 1 - Apt 308",
    "valueCOP": 543000000,
    "stage": "Cita Sala",
    "probability": 43,
    "closingDate": "18 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1035",
    "leadId": "LEAD-1035",
    "leadName": "Sofía Castillo Vargas",
    "projectName": "Samán",
    "unitCode": "Torre Norte - Apt 108",
    "valueCOP": 254000000,
    "stage": "Cita Sala",
    "probability": 46,
    "closingDate": "29 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1037",
    "leadId": "LEAD-1037",
    "leadName": "Adriana Suárez Rojas",
    "projectName": "La Macarena",
    "unitCode": "Torre A - Apt 368",
    "valueCOP": 145500000,
    "stage": "Cierre Exitoso",
    "probability": 52,
    "closingDate": "14 de Agosto 2026",
    "subsidyStatus": "Aprobado Mi Casa Ya"
  },
  {
    "id": "deal-LEAD-1038",
    "leadId": "LEAD-1038",
    "leadName": "Lorena López Rojas",
    "projectName": "La Macarena",
    "unitCode": "Torre 2 - Apt 267",
    "valueCOP": 145500000,
    "stage": "Promesa Firmada",
    "probability": 58,
    "closingDate": "18 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1039",
    "leadId": "LEAD-1039",
    "leadName": "Hernán Pardo Acosta",
    "projectName": "Bosque de Turpial",
    "unitCode": "Torre 1 - Apt 217",
    "valueCOP": 236500000,
    "stage": "Pre-Aprobado",
    "probability": 53,
    "closingDate": "27 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1041",
    "leadId": "LEAD-1041",
    "leadName": "Mauricio Moreno Suárez",
    "projectName": "Karakalí",
    "unitCode": "Torre A - Apt 130",
    "valueCOP": 240500000,
    "stage": "Cierre Exitoso",
    "probability": 85,
    "closingDate": "24 de Agosto 2026",
    "subsidyStatus": "Aprobado Mi Casa Ya"
  },
  {
    "id": "deal-LEAD-1043",
    "leadId": "LEAD-1043",
    "leadName": "Mónica Ríos Mora",
    "projectName": "Samán",
    "unitCode": "Torre 2 - Apt 246",
    "valueCOP": 254000000,
    "stage": "Cierre Exitoso",
    "probability": 84,
    "closingDate": "11 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1045",
    "leadId": "LEAD-1045",
    "leadName": "Tatiana Medina Rojas",
    "projectName": "Samán",
    "unitCode": "Torre 1 - Apt 378",
    "valueCOP": 254000000,
    "stage": "Pre-Aprobado",
    "probability": 45,
    "closingDate": "21 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1046",
    "leadId": "LEAD-1046",
    "leadName": "Marcela Hernández Delgado",
    "projectName": "Versalles",
    "unitCode": "Torre A - Apt 163",
    "valueCOP": 214500000,
    "stage": "Promesa Firmada",
    "probability": 68,
    "closingDate": "6 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1047",
    "leadId": "LEAD-1047",
    "leadName": "Camilo Rodríguez Ruiz",
    "projectName": "La Arboleda",
    "unitCode": "Torre A - Apt 339",
    "valueCOP": 202500000,
    "stage": "Pre-Aprobado",
    "probability": 60,
    "closingDate": "8 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1049",
    "leadId": "LEAD-1049",
    "leadName": "Tatiana Reyes Moreno",
    "projectName": "Bosque de Turpial",
    "unitCode": "Torre 2 - Apt 250",
    "valueCOP": 236500000,
    "stage": "Cita Sala",
    "probability": 46,
    "closingDate": "14 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1050",
    "leadId": "LEAD-1050",
    "leadName": "Paola Rodríguez Hernández",
    "projectName": "Araucaria",
    "unitCode": "Torre B - Apt 228",
    "valueCOP": 608000000,
    "stage": "Cita Sala",
    "probability": 33,
    "closingDate": "8 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1052",
    "leadId": "LEAD-1052",
    "leadName": "Mauricio Moreno Suárez",
    "projectName": "La Arboleda",
    "unitCode": "Torre B - Apt 181",
    "valueCOP": 202500000,
    "stage": "Cierre Exitoso",
    "probability": 69,
    "closingDate": "31 de Agosto 2026",
    "subsidyStatus": "Aprobado Mi Casa Ya"
  },
  {
    "id": "deal-LEAD-1053",
    "leadId": "LEAD-1053",
    "leadName": "Javier Romero Ruiz",
    "projectName": "Karakalí",
    "unitCode": "Torre 2 - Apt 333",
    "valueCOP": 240500000,
    "stage": "Cita Sala",
    "probability": 36,
    "closingDate": "5 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1054",
    "leadId": "LEAD-1054",
    "leadName": "Yolanda Cárdenas Cárdenas",
    "projectName": "Pamplona I",
    "unitCode": "Torre 3 - Apt 179",
    "valueCOP": 207000000,
    "stage": "Pre-Aprobado",
    "probability": 49,
    "closingDate": "9 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1055",
    "leadId": "LEAD-1055",
    "leadName": "David Muñoz Ruiz",
    "projectName": "Verde Esperanza El Dorado",
    "unitCode": "Torre 1 - Apt 143",
    "valueCOP": 166000000,
    "stage": "Cita Sala",
    "probability": 38,
    "closingDate": "27 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1057",
    "leadId": "LEAD-1057",
    "leadName": "Germán González Castillo",
    "projectName": "Monguí",
    "unitCode": "Torre Norte - Apt 488",
    "valueCOP": 179000000,
    "stage": "Cita Sala",
    "probability": 47,
    "closingDate": "13 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1058",
    "leadId": "LEAD-1058",
    "leadName": "Claudia Rodríguez Rincón",
    "projectName": "Karakalí",
    "unitCode": "Torre 1 - Apt 250",
    "valueCOP": 240500000,
    "stage": "Cita Sala",
    "probability": 50,
    "closingDate": "20 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1059",
    "leadId": "LEAD-1059",
    "leadName": "Claudia Torres García",
    "projectName": "Bosque de Arrayán",
    "unitCode": "Torre 3 - Apt 431",
    "valueCOP": 196000000,
    "stage": "Cita Sala",
    "probability": 43,
    "closingDate": "11 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1061",
    "leadId": "LEAD-1061",
    "leadName": "José Moreno Díaz",
    "projectName": "Versalles",
    "unitCode": "Torre B - Apt 460",
    "valueCOP": 214500000,
    "stage": "Pre-Aprobado",
    "probability": 43,
    "closingDate": "4 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1062",
    "leadId": "LEAD-1062",
    "leadName": "Fernando Reyes Sánchez",
    "projectName": "Bosque de Turpial",
    "unitCode": "Torre 2 - Apt 499",
    "valueCOP": 236500000,
    "stage": "Cita Sala",
    "probability": 33,
    "closingDate": "18 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1063",
    "leadId": "LEAD-1063",
    "leadName": "Andrés Moreno Herrera",
    "projectName": "Versalles",
    "unitCode": "Torre 2 - Apt 237",
    "valueCOP": 214500000,
    "stage": "Pre-Aprobado",
    "probability": 46,
    "closingDate": "6 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1066",
    "leadId": "LEAD-1066",
    "leadName": "Juliana Díaz Herrera",
    "projectName": "Reserva de Guayacán",
    "unitCode": "Torre 3 - Apt 288",
    "valueCOP": 236000000,
    "stage": "Pre-Aprobado",
    "probability": 59,
    "closingDate": "18 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1068",
    "leadId": "LEAD-1068",
    "leadName": "Carlos Rojas Martínez",
    "projectName": "La Macarena",
    "unitCode": "Torre 2 - Apt 255",
    "valueCOP": 145500000,
    "stage": "Promesa Firmada",
    "probability": 64,
    "closingDate": "23 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1069",
    "leadId": "LEAD-1069",
    "leadName": "Cristian Delgado Gutiérrez",
    "projectName": "Samán",
    "unitCode": "Torre 2 - Apt 242",
    "valueCOP": 254000000,
    "stage": "Pre-Aprobado",
    "probability": 46,
    "closingDate": "15 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1070",
    "leadId": "LEAD-1070",
    "leadName": "Patricia Díaz Jiménez",
    "projectName": "Reserva de Guayacán",
    "unitCode": "Torre 1 - Apt 296",
    "valueCOP": 236000000,
    "stage": "Pre-Aprobado",
    "probability": 42,
    "closingDate": "10 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1071",
    "leadId": "LEAD-1071",
    "leadName": "Miguel Sánchez Muñoz",
    "projectName": "Bosque de Turpial",
    "unitCode": "Torre Norte - Apt 269",
    "valueCOP": 236500000,
    "stage": "Pre-Aprobado",
    "probability": 36,
    "closingDate": "22 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1072",
    "leadId": "LEAD-1072",
    "leadName": "Milena Mora Bernal",
    "projectName": "Araucaria",
    "unitCode": "Torre Norte - Apt 345",
    "valueCOP": 608000000,
    "stage": "Cita Sala",
    "probability": 36,
    "closingDate": "17 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1073",
    "leadId": "LEAD-1073",
    "leadName": "Alejandro Salazar Torres",
    "projectName": "Karakalí",
    "unitCode": "Torre B - Apt 182",
    "valueCOP": 240500000,
    "stage": "Promesa Firmada",
    "probability": 66,
    "closingDate": "13 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1074",
    "leadId": "LEAD-1074",
    "leadName": "Luis Moreno Salazar",
    "projectName": "La Arboleda",
    "unitCode": "Torre 2 - Apt 484",
    "valueCOP": 202500000,
    "stage": "Cita Sala",
    "probability": 49,
    "closingDate": "27 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1075",
    "leadId": "LEAD-1075",
    "leadName": "Julián Mora Ruiz",
    "projectName": "La Macarena",
    "unitCode": "Torre 2 - Apt 385",
    "valueCOP": 145500000,
    "stage": "Pre-Aprobado",
    "probability": 51,
    "closingDate": "23 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1076",
    "leadId": "LEAD-1076",
    "leadName": "Alejandro Ortiz García",
    "projectName": "Verde Esperanza El Dorado",
    "unitCode": "Torre 1 - Apt 111",
    "valueCOP": 166000000,
    "stage": "Promesa Firmada",
    "probability": 49,
    "closingDate": "13 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1077",
    "leadId": "LEAD-1077",
    "leadName": "Diana Pineda González",
    "projectName": "Versalles",
    "unitCode": "Torre 1 - Apt 169",
    "valueCOP": 214500000,
    "stage": "Pre-Aprobado",
    "probability": 52,
    "closingDate": "27 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1078",
    "leadId": "LEAD-1078",
    "leadName": "Natalia Ramírez Pardo",
    "projectName": "La Macarena",
    "unitCode": "Torre A - Apt 119",
    "valueCOP": 145500000,
    "stage": "Promesa Firmada",
    "probability": 67,
    "closingDate": "18 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1079",
    "leadId": "LEAD-1079",
    "leadName": "Diego Rincón Peña",
    "projectName": "La Arboleda",
    "unitCode": "Torre 1 - Apt 458",
    "valueCOP": 202500000,
    "stage": "Cita Sala",
    "probability": 47,
    "closingDate": "10 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1080",
    "leadId": "LEAD-1080",
    "leadName": "Julián Ortiz Gómez",
    "projectName": "La Arboleda",
    "unitCode": "Torre B - Apt 441",
    "valueCOP": 202500000,
    "stage": "Cierre Exitoso",
    "probability": 49,
    "closingDate": "26 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1081",
    "leadId": "LEAD-1081",
    "leadName": "Juan Gómez Ramírez",
    "projectName": "Karakalí",
    "unitCode": "Torre 2 - Apt 141",
    "valueCOP": 240500000,
    "stage": "Pre-Aprobado",
    "probability": 45,
    "closingDate": "21 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1082",
    "leadId": "LEAD-1082",
    "leadName": "Pedro Ramírez Romero",
    "projectName": "Pamplona I",
    "unitCode": "Torre 2 - Apt 459",
    "valueCOP": 207000000,
    "stage": "Cita Sala",
    "probability": 42,
    "closingDate": "6 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1083",
    "leadId": "LEAD-1083",
    "leadName": "Fabián Castro Suárez",
    "projectName": "Reserva de Guayacán",
    "unitCode": "Torre A - Apt 284",
    "valueCOP": 236000000,
    "stage": "Cita Sala",
    "probability": 37,
    "closingDate": "28 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1086",
    "leadId": "LEAD-1086",
    "leadName": "Diego Jiménez Torres",
    "projectName": "Bosque de Arrayán",
    "unitCode": "Torre A - Apt 157",
    "valueCOP": 196000000,
    "stage": "Cita Sala",
    "probability": 54,
    "closingDate": "12 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1087",
    "leadId": "LEAD-1087",
    "leadName": "Julián Romero López",
    "projectName": "Bosque de Turpial",
    "unitCode": "Torre B - Apt 422",
    "valueCOP": 236500000,
    "stage": "Promesa Firmada",
    "probability": 57,
    "closingDate": "3 de Septiembre 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1088",
    "leadId": "LEAD-1088",
    "leadName": "Adriana Pardo Salazar",
    "projectName": "Verde Esperanza El Dorado",
    "unitCode": "Torre Norte - Apt 490",
    "valueCOP": 166000000,
    "stage": "Promesa Firmada",
    "probability": 66,
    "closingDate": "12 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1089",
    "leadId": "LEAD-1089",
    "leadName": "Lina Cárdenas Pardo",
    "projectName": "Pamplona I",
    "unitCode": "Torre 3 - Apt 116",
    "valueCOP": 207000000,
    "stage": "Cita Sala",
    "probability": 35,
    "closingDate": "18 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1090",
    "leadId": "LEAD-1090",
    "leadName": "Germán Hernández Ríos",
    "projectName": "Verde Esperanza El Dorado",
    "unitCode": "Torre 1 - Apt 196",
    "valueCOP": 166000000,
    "stage": "Cita Sala",
    "probability": 44,
    "closingDate": "5 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1091",
    "leadId": "LEAD-1091",
    "leadName": "Andrés Peña Romero",
    "projectName": "Verde Esperanza El Dorado",
    "unitCode": "Torre Norte - Apt 328",
    "valueCOP": 166000000,
    "stage": "Pre-Aprobado",
    "probability": 53,
    "closingDate": "7 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1092",
    "leadId": "LEAD-1092",
    "leadName": "Javier Sánchez Vargas",
    "projectName": "Monguí",
    "unitCode": "Torre B - Apt 372",
    "valueCOP": 179000000,
    "stage": "Cita Sala",
    "probability": 51,
    "closingDate": "4 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1093",
    "leadId": "LEAD-1093",
    "leadName": "Diana Castro Álvarez",
    "projectName": "Versalles",
    "unitCode": "Torre A - Apt 215",
    "valueCOP": 214500000,
    "stage": "Pre-Aprobado",
    "probability": 46,
    "closingDate": "26 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1094",
    "leadId": "LEAD-1094",
    "leadName": "Laura García Rincón",
    "projectName": "Verde Esperanza El Dorado",
    "unitCode": "Torre 2 - Apt 394",
    "valueCOP": 166000000,
    "stage": "Cita Sala",
    "probability": 44,
    "closingDate": "22 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1095",
    "leadId": "LEAD-1095",
    "leadName": "Laura Díaz Pineda",
    "projectName": "Pamplona I",
    "unitCode": "Torre A - Apt 212",
    "valueCOP": 207000000,
    "stage": "Cita Sala",
    "probability": 48,
    "closingDate": "13 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1097",
    "leadId": "LEAD-1097",
    "leadName": "Johana Suárez Rojas",
    "projectName": "Araucaria",
    "unitCode": "Torre 3 - Apt 291",
    "valueCOP": 608000000,
    "stage": "Cita Sala",
    "probability": 58,
    "closingDate": "26 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1098",
    "leadId": "LEAD-1098",
    "leadName": "Carolina Gómez Moreno",
    "projectName": "Monguí",
    "unitCode": "Torre 2 - Apt 293",
    "valueCOP": 179000000,
    "stage": "Cita Sala",
    "probability": 42,
    "closingDate": "29 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1099",
    "leadId": "LEAD-1099",
    "leadName": "Lorena Gómez Bernal",
    "projectName": "Monguí",
    "unitCode": "Torre 1 - Apt 464",
    "valueCOP": 179000000,
    "stage": "Pre-Aprobado",
    "probability": 47,
    "closingDate": "5 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1100",
    "leadId": "LEAD-1100",
    "leadName": "Ana Torres Álvarez",
    "projectName": "Monguí",
    "unitCode": "Torre Norte - Apt 167",
    "valueCOP": 179000000,
    "stage": "Pre-Aprobado",
    "probability": 46,
    "closingDate": "27 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1101",
    "leadId": "LEAD-1101",
    "leadName": "Ángela Reyes Castro",
    "projectName": "Araucaria",
    "unitCode": "Torre 2 - Apt 279",
    "valueCOP": 608000000,
    "stage": "Pre-Aprobado",
    "probability": 48,
    "closingDate": "21 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1102",
    "leadId": "LEAD-1102",
    "leadName": "Andrés Romero Reyes",
    "projectName": "Reserva de Guayacán",
    "unitCode": "Torre 3 - Apt 433",
    "valueCOP": 236000000,
    "stage": "Pre-Aprobado",
    "probability": 54,
    "closingDate": "1 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1103",
    "leadId": "LEAD-1103",
    "leadName": "William Pardo Pineda",
    "projectName": "Monguí",
    "unitCode": "Torre 1 - Apt 278",
    "valueCOP": 179000000,
    "stage": "Promesa Firmada",
    "probability": 56,
    "closingDate": "21 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1104",
    "leadId": "LEAD-1104",
    "leadName": "Yolanda Bernal Torres",
    "projectName": "Monguí",
    "unitCode": "Torre 1 - Apt 269",
    "valueCOP": 179000000,
    "stage": "Pre-Aprobado",
    "probability": 47,
    "closingDate": "19 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1106",
    "leadId": "LEAD-1106",
    "leadName": "Carlos Rojas Martínez",
    "projectName": "Verde Esperanza El Dorado",
    "unitCode": "Torre A - Apt 234",
    "valueCOP": 166000000,
    "stage": "Cita Sala",
    "probability": 42,
    "closingDate": "24 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1108",
    "leadId": "LEAD-1108",
    "leadName": "Daniel López Vargas",
    "projectName": "Verde Esperanza El Dorado",
    "unitCode": "Torre 1 - Apt 309",
    "valueCOP": 166000000,
    "stage": "Cita Sala",
    "probability": 45,
    "closingDate": "7 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1109",
    "leadId": "LEAD-1109",
    "leadName": "Diana Hernández Bernal",
    "projectName": "Bosque de Turpial",
    "unitCode": "Torre 3 - Apt 141",
    "valueCOP": 236500000,
    "stage": "Pre-Aprobado",
    "probability": 45,
    "closingDate": "8 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1111",
    "leadId": "LEAD-1111",
    "leadName": "David Jiménez Peña",
    "projectName": "Verde Esperanza El Dorado",
    "unitCode": "Torre 1 - Apt 448",
    "valueCOP": 166000000,
    "stage": "Pre-Aprobado",
    "probability": 60,
    "closingDate": "13 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1113",
    "leadId": "LEAD-1113",
    "leadName": "Fernanda Rojas González",
    "projectName": "La Macarena",
    "unitCode": "Torre B - Apt 455",
    "valueCOP": 145500000,
    "stage": "Promesa Firmada",
    "probability": 66,
    "closingDate": "7 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1114",
    "leadId": "LEAD-1114",
    "leadName": "Carlos Gutiérrez Hernández",
    "projectName": "Los Nogales",
    "unitCode": "Torre 1 - Apt 397",
    "valueCOP": 543000000,
    "stage": "Cita Sala",
    "probability": 41,
    "closingDate": "31 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1117",
    "leadId": "LEAD-1117",
    "leadName": "Paola Ortiz Castillo",
    "projectName": "La Macarena",
    "unitCode": "Torre A - Apt 469",
    "valueCOP": 145500000,
    "stage": "Promesa Firmada",
    "probability": 68,
    "closingDate": "27 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1118",
    "leadId": "LEAD-1118",
    "leadName": "Johana Díaz Romero",
    "projectName": "Los Nogales",
    "unitCode": "Torre 1 - Apt 243",
    "valueCOP": 543000000,
    "stage": "Cierre Exitoso",
    "probability": 56,
    "closingDate": "5 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1121",
    "leadId": "LEAD-1121",
    "leadName": "Tatiana Reyes Moreno",
    "projectName": "INARI",
    "unitCode": "Torre A - Apt 236",
    "valueCOP": 271000000,
    "stage": "Cita Sala",
    "probability": 43,
    "closingDate": "7 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1123",
    "leadId": "LEAD-1123",
    "leadName": "Katherine Medina Castillo",
    "projectName": "Monguí",
    "unitCode": "Torre B - Apt 423",
    "valueCOP": 179000000,
    "stage": "Cita Sala",
    "probability": 29,
    "closingDate": "11 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1124",
    "leadId": "LEAD-1124",
    "leadName": "Camilo Álvarez Ortiz",
    "projectName": "Reserva de Guayacán",
    "unitCode": "Torre A - Apt 336",
    "valueCOP": 236000000,
    "stage": "Pre-Aprobado",
    "probability": 53,
    "closingDate": "24 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1125",
    "leadId": "LEAD-1125",
    "leadName": "Yolanda Ruiz Rodríguez",
    "projectName": "Karakalí",
    "unitCode": "Torre 2 - Apt 289",
    "valueCOP": 240500000,
    "stage": "Pre-Aprobado",
    "probability": 43,
    "closingDate": "22 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1126",
    "leadId": "LEAD-1126",
    "leadName": "Ana Rincón Bernal",
    "projectName": "Araucaria",
    "unitCode": "Torre 3 - Apt 363",
    "valueCOP": 608000000,
    "stage": "Pre-Aprobado",
    "probability": 55,
    "closingDate": "6 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1130",
    "leadId": "LEAD-1130",
    "leadName": "Paola Acosta Cárdenas",
    "projectName": "Verde Esperanza El Dorado",
    "unitCode": "Torre Norte - Apt 219",
    "valueCOP": 166000000,
    "stage": "Pre-Aprobado",
    "probability": 41,
    "closingDate": "20 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1131",
    "leadId": "LEAD-1131",
    "leadName": "Hernán Medina Vargas",
    "projectName": "Bosque de Arrayán",
    "unitCode": "Torre 3 - Apt 467",
    "valueCOP": 196000000,
    "stage": "Pre-Aprobado",
    "probability": 44,
    "closingDate": "16 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1132",
    "leadId": "LEAD-1132",
    "leadName": "Carolina Vargas Suárez",
    "projectName": "Verde Esperanza El Dorado",
    "unitCode": "Torre Norte - Apt 189",
    "valueCOP": 166000000,
    "stage": "Pre-Aprobado",
    "probability": 40,
    "closingDate": "25 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1133",
    "leadId": "LEAD-1133",
    "leadName": "Alejandro Ortiz García",
    "projectName": "La Macarena",
    "unitCode": "Torre B - Apt 446",
    "valueCOP": 145500000,
    "stage": "Cita Sala",
    "probability": 44,
    "closingDate": "18 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1134",
    "leadId": "LEAD-1134",
    "leadName": "Cristian Castro Acosta",
    "projectName": "Bosque de Arrayán",
    "unitCode": "Torre Norte - Apt 387",
    "valueCOP": 196000000,
    "stage": "Cita Sala",
    "probability": 46,
    "closingDate": "19 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1135",
    "leadId": "LEAD-1135",
    "leadName": "Fabián Gutiérrez Martínez",
    "projectName": "Karakalí",
    "unitCode": "Torre Norte - Apt 402",
    "valueCOP": 240500000,
    "stage": "Pre-Aprobado",
    "probability": 57,
    "closingDate": "26 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1136",
    "leadId": "LEAD-1136",
    "leadName": "Ricardo Castro Castro",
    "projectName": "Bosque de Turpial",
    "unitCode": "Torre B - Apt 179",
    "valueCOP": 236500000,
    "stage": "Cita Sala",
    "probability": 36,
    "closingDate": "14 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1137",
    "leadId": "LEAD-1137",
    "leadName": "Julián López Herrera",
    "projectName": "La Macarena",
    "unitCode": "Torre 1 - Apt 328",
    "valueCOP": 145500000,
    "stage": "Pre-Aprobado",
    "probability": 45,
    "closingDate": "23 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1138",
    "leadId": "LEAD-1138",
    "leadName": "Mónica Ospina Castro",
    "projectName": "La Arboleda",
    "unitCode": "Torre 3 - Apt 329",
    "valueCOP": 202500000,
    "stage": "Promesa Firmada",
    "probability": 64,
    "closingDate": "13 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1139",
    "leadId": "LEAD-1139",
    "leadName": "Juan Gómez Ramírez",
    "projectName": "Bosque de Turpial",
    "unitCode": "Torre B - Apt 282",
    "valueCOP": 236500000,
    "stage": "Cita Sala",
    "probability": 39,
    "closingDate": "13 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1140",
    "leadId": "LEAD-1140",
    "leadName": "Sofía Castillo Vargas",
    "projectName": "Monguí",
    "unitCode": "Torre 1 - Apt 410",
    "valueCOP": 179000000,
    "stage": "Pre-Aprobado",
    "probability": 58,
    "closingDate": "26 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1141",
    "leadId": "LEAD-1141",
    "leadName": "Fabián Rincón Reyes",
    "projectName": "Monguí",
    "unitCode": "Torre 3 - Apt 102",
    "valueCOP": 179000000,
    "stage": "Cita Sala",
    "probability": 44,
    "closingDate": "17 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1142",
    "leadId": "LEAD-1142",
    "leadName": "William Bernal Castro",
    "projectName": "Bosque de Turpial",
    "unitCode": "Torre 3 - Apt 335",
    "valueCOP": 236500000,
    "stage": "Cita Sala",
    "probability": 44,
    "closingDate": "23 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1143",
    "leadId": "LEAD-1143",
    "leadName": "Sebastián Álvarez García",
    "projectName": "Pamplona I",
    "unitCode": "Torre 3 - Apt 175",
    "valueCOP": 207000000,
    "stage": "Pre-Aprobado",
    "probability": 54,
    "closingDate": "16 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1144",
    "leadId": "LEAD-1144",
    "leadName": "Héctor Salazar López",
    "projectName": "Karakalí",
    "unitCode": "Torre 3 - Apt 313",
    "valueCOP": 240500000,
    "stage": "Cita Sala",
    "probability": 36,
    "closingDate": "6 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1145",
    "leadId": "LEAD-1145",
    "leadName": "Javier Reyes Castillo",
    "projectName": "INARI",
    "unitCode": "Torre B - Apt 322",
    "valueCOP": 271000000,
    "stage": "Pre-Aprobado",
    "probability": 37,
    "closingDate": "21 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1146",
    "leadId": "LEAD-1146",
    "leadName": "Luis Díaz Álvarez",
    "projectName": "Los Nogales",
    "unitCode": "Torre A - Apt 440",
    "valueCOP": 543000000,
    "stage": "Cita Sala",
    "probability": 33,
    "closingDate": "29 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1148",
    "leadId": "LEAD-1148",
    "leadName": "Sofía Torres González",
    "projectName": "Los Nogales",
    "unitCode": "Torre 3 - Apt 220",
    "valueCOP": 543000000,
    "stage": "Pre-Aprobado",
    "probability": 48,
    "closingDate": "8 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1149",
    "leadId": "LEAD-1149",
    "leadName": "Javier Reyes González",
    "projectName": "Bosque de Turpial",
    "unitCode": "Torre 1 - Apt 388",
    "valueCOP": 236500000,
    "stage": "Cita Sala",
    "probability": 48,
    "closingDate": "11 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1150",
    "leadId": "LEAD-1150",
    "leadName": "Hernán López Peña",
    "projectName": "Los Nogales",
    "unitCode": "Torre 1 - Apt 321",
    "valueCOP": 543000000,
    "stage": "Cita Sala",
    "probability": 27,
    "closingDate": "27 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1151",
    "leadId": "LEAD-1151",
    "leadName": "Paola Hernández Suárez",
    "projectName": "Araucaria",
    "unitCode": "Torre 1 - Apt 494",
    "valueCOP": 608000000,
    "stage": "Pre-Aprobado",
    "probability": 49,
    "closingDate": "3 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1152",
    "leadId": "LEAD-1152",
    "leadName": "Camilo Salazar López",
    "projectName": "Reserva de Guayacán",
    "unitCode": "Torre 1 - Apt 197",
    "valueCOP": 236000000,
    "stage": "Cita Sala",
    "probability": 35,
    "closingDate": "2 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1153",
    "leadId": "LEAD-1153",
    "leadName": "Daniela Medina Herrera",
    "projectName": "La Macarena",
    "unitCode": "Torre 2 - Apt 181",
    "valueCOP": 145500000,
    "stage": "Cierre Exitoso",
    "probability": 62,
    "closingDate": "12 de Agosto 2026",
    "subsidyStatus": "Aprobado Mi Casa Ya"
  },
  {
    "id": "deal-LEAD-1154",
    "leadId": "LEAD-1154",
    "leadName": "Johana Rodríguez Martínez",
    "projectName": "Verde Esperanza El Dorado",
    "unitCode": "Torre 2 - Apt 291",
    "valueCOP": 166000000,
    "stage": "Cita Sala",
    "probability": 42,
    "closingDate": "19 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1156",
    "leadId": "LEAD-1156",
    "leadName": "Héctor Jiménez Bernal",
    "projectName": "Los Nogales",
    "unitCode": "Torre 2 - Apt 320",
    "valueCOP": 543000000,
    "stage": "Cita Sala",
    "probability": 56,
    "closingDate": "1 de Septiembre 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1157",
    "leadId": "LEAD-1157",
    "leadName": "Milena Castro Romero",
    "projectName": "Monguí",
    "unitCode": "Torre A - Apt 323",
    "valueCOP": 179000000,
    "stage": "Cita Sala",
    "probability": 45,
    "closingDate": "4 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1158",
    "leadId": "LEAD-1158",
    "leadName": "Julián Ramírez Ríos",
    "projectName": "Verde Esperanza El Dorado",
    "unitCode": "Torre B - Apt 394",
    "valueCOP": 166000000,
    "stage": "Cita Sala",
    "probability": 38,
    "closingDate": "21 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1159",
    "leadId": "LEAD-1159",
    "leadName": "David Peña Salazar",
    "projectName": "Los Nogales",
    "unitCode": "Torre A - Apt 470",
    "valueCOP": 543000000,
    "stage": "Pre-Aprobado",
    "probability": 45,
    "closingDate": "6 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1160",
    "leadId": "LEAD-1160",
    "leadName": "Javier Reyes González",
    "projectName": "Bosque de Turpial",
    "unitCode": "Torre 1 - Apt 464",
    "valueCOP": 236500000,
    "stage": "Cita Sala",
    "probability": 52,
    "closingDate": "29 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1161",
    "leadId": "LEAD-1161",
    "leadName": "Sandra Ruiz Acosta",
    "projectName": "Los Nogales",
    "unitCode": "Torre B - Apt 454",
    "valueCOP": 543000000,
    "stage": "Cita Sala",
    "probability": 32,
    "closingDate": "31 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1162",
    "leadId": "LEAD-1162",
    "leadName": "Marcela Gutiérrez Peña",
    "projectName": "Pamplona I",
    "unitCode": "Torre B - Apt 335",
    "valueCOP": 207000000,
    "stage": "Cita Sala",
    "probability": 54,
    "closingDate": "25 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1163",
    "leadId": "LEAD-1163",
    "leadName": "Milena Cárdenas Ortiz",
    "projectName": "Bosque de Turpial",
    "unitCode": "Torre 1 - Apt 381",
    "valueCOP": 236500000,
    "stage": "Cita Sala",
    "probability": 37,
    "closingDate": "24 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1164",
    "leadId": "LEAD-1164",
    "leadName": "Carlos Jiménez Suárez",
    "projectName": "La Arboleda",
    "unitCode": "Torre A - Apt 290",
    "valueCOP": 202500000,
    "stage": "Cita Sala",
    "probability": 39,
    "closingDate": "22 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1165",
    "leadId": "LEAD-1165",
    "leadName": "Andrés Castro Bernal",
    "projectName": "La Arboleda",
    "unitCode": "Torre 1 - Apt 376",
    "valueCOP": 202500000,
    "stage": "Cita Sala",
    "probability": 49,
    "closingDate": "5 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1166",
    "leadId": "LEAD-1166",
    "leadName": "Fernando Castillo Pineda",
    "projectName": "Los Nogales",
    "unitCode": "Torre 2 - Apt 344",
    "valueCOP": 543000000,
    "stage": "Cita Sala",
    "probability": 41,
    "closingDate": "28 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1169",
    "leadId": "LEAD-1169",
    "leadName": "Daniela Ruiz Castro",
    "projectName": "Pamplona I",
    "unitCode": "Torre 1 - Apt 240",
    "valueCOP": 207000000,
    "stage": "Cita Sala",
    "probability": 43,
    "closingDate": "15 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1171",
    "leadId": "LEAD-1171",
    "leadName": "Eduardo Jiménez Ruiz",
    "projectName": "Versalles",
    "unitCode": "Torre A - Apt 330",
    "valueCOP": 214500000,
    "stage": "Cita Sala",
    "probability": 41,
    "closingDate": "30 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1173",
    "leadId": "LEAD-1173",
    "leadName": "Laura Moreno Acosta",
    "projectName": "Araucaria",
    "unitCode": "Torre Norte - Apt 413",
    "valueCOP": 608000000,
    "stage": "Pre-Aprobado",
    "probability": 41,
    "closingDate": "21 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1174",
    "leadId": "LEAD-1174",
    "leadName": "Nicolás Acosta López",
    "projectName": "Los Nogales",
    "unitCode": "Torre 1 - Apt 451",
    "valueCOP": 543000000,
    "stage": "Cita Sala",
    "probability": 41,
    "closingDate": "7 de Agosto 2026",
    "subsidyStatus": "Sin Subsidio"
  },
  {
    "id": "deal-LEAD-1176",
    "leadId": "LEAD-1176",
    "leadName": "Ricardo Cárdenas Bernal",
    "projectName": "Monguí",
    "unitCode": "Torre 3 - Apt 488",
    "valueCOP": 179000000,
    "stage": "Cita Sala",
    "probability": 39,
    "closingDate": "26 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1183",
    "leadId": "LEAD-1183",
    "leadName": "Felipe Rojas Delgado",
    "projectName": "La Arboleda",
    "unitCode": "Torre A - Apt 194",
    "valueCOP": 202500000,
    "stage": "Cita Sala",
    "probability": 43,
    "closingDate": "2 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1184",
    "leadId": "LEAD-1184",
    "leadName": "Yolanda Suárez Delgado",
    "projectName": "Monguí",
    "unitCode": "Torre Norte - Apt 482",
    "valueCOP": 179000000,
    "stage": "Pre-Aprobado",
    "probability": 44,
    "closingDate": "25 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1186",
    "leadId": "LEAD-1186",
    "leadName": "Sandra Hernández Cárdenas",
    "projectName": "Bosque de Arrayán",
    "unitCode": "Torre 3 - Apt 102",
    "valueCOP": 196000000,
    "stage": "Pre-Aprobado",
    "probability": 61,
    "closingDate": "29 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1188",
    "leadId": "LEAD-1188",
    "leadName": "Martha Delgado Pardo",
    "projectName": "Samán",
    "unitCode": "Torre 1 - Apt 309",
    "valueCOP": 254000000,
    "stage": "Cita Sala",
    "probability": 39,
    "closingDate": "17 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1189",
    "leadId": "LEAD-1189",
    "leadName": "Hernán Mora Cruz",
    "projectName": "Samán",
    "unitCode": "Torre 1 - Apt 179",
    "valueCOP": 254000000,
    "stage": "Promesa Firmada",
    "probability": 54,
    "closingDate": "1 de Septiembre 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1190",
    "leadId": "LEAD-1190",
    "leadName": "Mónica Pineda Ríos",
    "projectName": "La Arboleda",
    "unitCode": "Torre B - Apt 432",
    "valueCOP": 202500000,
    "stage": "Cita Sala",
    "probability": 46,
    "closingDate": "28 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1191",
    "leadId": "LEAD-1191",
    "leadName": "Claudia Moreno Bernal",
    "projectName": "Pamplona I",
    "unitCode": "Torre Norte - Apt 171",
    "valueCOP": 207000000,
    "stage": "Cita Sala",
    "probability": 35,
    "closingDate": "11 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1192",
    "leadId": "LEAD-1192",
    "leadName": "Valentina García Medina",
    "projectName": "La Macarena",
    "unitCode": "Torre Norte - Apt 428",
    "valueCOP": 145500000,
    "stage": "Pre-Aprobado",
    "probability": 47,
    "closingDate": "9 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1194",
    "leadId": "LEAD-1194",
    "leadName": "Patricia Díaz Jiménez",
    "projectName": "La Arboleda",
    "unitCode": "Torre 2 - Apt 375",
    "valueCOP": 202500000,
    "stage": "Cita Sala",
    "probability": 43,
    "closingDate": "21 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1195",
    "leadId": "LEAD-1195",
    "leadName": "Ricardo Castro Castro",
    "projectName": "Reserva de Guayacán",
    "unitCode": "Torre 3 - Apt 283",
    "valueCOP": 236000000,
    "stage": "Cita Sala",
    "probability": 49,
    "closingDate": "10 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  },
  {
    "id": "deal-LEAD-1197",
    "leadId": "LEAD-1197",
    "leadName": "Valentina González Muñoz",
    "projectName": "INARI",
    "unitCode": "Torre A - Apt 226",
    "valueCOP": 271000000,
    "stage": "Cita Sala",
    "probability": 28,
    "closingDate": "23 de Agosto 2026",
    "subsidyStatus": "En Verificación"
  },
  {
    "id": "deal-LEAD-1199",
    "leadId": "LEAD-1199",
    "leadName": "Laura Peña Romero",
    "projectName": "Samán",
    "unitCode": "Torre Norte - Apt 153",
    "valueCOP": 254000000,
    "stage": "Cita Sala",
    "probability": 59,
    "closingDate": "12 de Agosto 2026",
    "subsidyStatus": "Aprobado Caja"
  }
] as Deal[];

export const REAL_TASKS: Task[] = [
  {
    "id": "task-LEAD-1008",
    "title": "Enviar cotización formal y agendar firma",
    "leadName": "Ángela Reyes Castro",
    "leadPhone": "+57 323 248 2565",
    "type": "Enviar Cotización",
    "dueDate": "Hoy",
    "dueTime": "08:30 AM",
    "completed": false,
    "priority": "Alta"
  },
  {
    "id": "task-LEAD-1012",
    "title": "Enviar cotización formal y agendar firma",
    "leadName": "Javier Romero Ruiz",
    "leadPhone": "+57 359 991 3412",
    "type": "Enviar Cotización",
    "dueDate": "Hoy",
    "dueTime": "09:15 AM",
    "completed": false,
    "priority": "Alta"
  },
  {
    "id": "task-LEAD-1015",
    "title": "Enviar cotización formal y agendar firma",
    "leadName": "Santiago Cárdenas Gómez",
    "leadPhone": "+57 327 083 8623",
    "type": "Enviar Cotización",
    "dueDate": "Hoy",
    "dueTime": "10:00 AM",
    "completed": false,
    "priority": "Alta"
  },
  {
    "id": "task-LEAD-1022",
    "title": "Enviar cotización formal y agendar firma",
    "leadName": "Yolanda Rojas Sánchez",
    "leadPhone": "+57 358 583 3309",
    "type": "Enviar Cotización",
    "dueDate": "Hoy",
    "dueTime": "11:30 AM",
    "completed": false,
    "priority": "Alta"
  },
  {
    "id": "task-LEAD-1029",
    "title": "Enviar cotización formal y agendar firma",
    "leadName": "Katherine Jiménez Ríos",
    "leadPhone": "+57 355 199 6390",
    "type": "Enviar Cotización",
    "dueDate": "Hoy",
    "dueTime": "02:00 PM",
    "completed": false,
    "priority": "Alta"
  },
  {
    "id": "task-LEAD-1030",
    "title": "Enviar cotización formal y agendar firma",
    "leadName": "Diego Gutiérrez González",
    "leadPhone": "+57 324 853 0827",
    "type": "Enviar Cotización",
    "dueDate": "Hoy",
    "dueTime": "03:15 PM",
    "completed": true,
    "priority": "Alta"
  },
  {
    "id": "task-LEAD-1033",
    "title": "Enviar cotización formal y agendar firma",
    "leadName": "Andrés Rincón Muñoz",
    "leadPhone": "+57 358 006 7590",
    "type": "Enviar Cotización",
    "dueDate": "Hoy",
    "dueTime": "04:00 PM",
    "completed": false,
    "priority": "Alta"
  },
  {
    "id": "task-LEAD-1038",
    "title": "Enviar cotización formal y agendar firma",
    "leadName": "Lorena López Rojas",
    "leadPhone": "+57 358 537 4270",
    "type": "Enviar Cotización",
    "dueDate": "Hoy",
    "dueTime": "04:45 PM",
    "completed": false,
    "priority": "Alta"
  },
  {
    "id": "task-LEAD-1046",
    "title": "Enviar cotización formal y agendar firma",
    "leadName": "Marcela Hernández Delgado",
    "leadPhone": "+57 321 347 1527",
    "type": "Enviar Cotización",
    "dueDate": "Hoy",
    "dueTime": "08:30 AM",
    "completed": false,
    "priority": "Alta"
  },
  {
    "id": "task-LEAD-1047",
    "title": "Enviar cotización formal y agendar firma",
    "leadName": "Camilo Rodríguez Ruiz",
    "leadPhone": "+57 359 114 5880",
    "type": "Enviar Cotización",
    "dueDate": "Hoy",
    "dueTime": "09:15 AM",
    "completed": false,
    "priority": "Alta"
  }
] as Task[];
