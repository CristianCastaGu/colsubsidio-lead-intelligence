// AUTO-GENERADO por scripts/generate-analytics.cjs — cruza los datos reales
// compartidos para el hackathon (leads_meta_sim, afiliados_sim, proyectos_catalogo)
// con un modelo de scoring sintético. No editar a mano; volver a correr el script.
import type { AnalyticsData } from './analyticsTypes';

export const ANALYTICS_DATA: AnalyticsData = {
  "generatedAt": "2026-07-24",
  "totalLeads": 200,
  "leads": [
    {
      "id": "LEAD-1000",
      "nombre": "Camilo Rojas Castro",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "INARI",
      "ubicacion": "Chía",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T20:14:00-05:00",
      "capacidad": 15,
      "intencion": 48,
      "engagement": 44,
      "conversion": 31,
      "total": 34,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 20
        },
        {
          "date": "2026-07-22",
          "score": 27
        },
        {
          "date": "2026-07-23",
          "score": 31
        },
        {
          "date": "2026-07-24",
          "score": 34
        }
      ]
    },
    {
      "id": "LEAD-1001",
      "nombre": "Daniela Mora Reyes",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Samán",
      "ubicacion": "Ricaurte",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T15:19:00-05:00",
      "capacidad": 9,
      "intencion": 65,
      "engagement": 54,
      "conversion": 51,
      "total": 44,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 30
        },
        {
          "date": "2026-07-23",
          "score": 36
        },
        {
          "date": "2026-07-24",
          "score": 38
        },
        {
          "date": "2026-07-25",
          "score": 39
        }
      ]
    },
    {
      "id": "LEAD-1002",
      "nombre": "Ana Rincón Mora",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T15:23:00-05:00",
      "capacidad": 24,
      "intencion": 67,
      "engagement": 60,
      "conversion": 56,
      "total": 51,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 37
        },
        {
          "date": "2026-07-21",
          "score": 39
        },
        {
          "date": "2026-07-22",
          "score": 44
        },
        {
          "date": "2026-07-23",
          "score": 44
        },
        {
          "date": "2026-07-24",
          "score": 50
        }
      ]
    },
    {
      "id": "LEAD-1003",
      "nombre": "Santiago Rojas Vargas",
      "fuente": "Google Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Samán",
      "ubicacion": "Ricaurte",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T10:11:00-05:00",
      "capacidad": 14,
      "intencion": 70,
      "engagement": 67,
      "conversion": 52,
      "total": 49,
      "temperatura": "Warm",
      "status": "En Negociación",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 34
        },
        {
          "date": "2026-07-22",
          "score": 30
        },
        {
          "date": "2026-07-23",
          "score": 37
        },
        {
          "date": "2026-07-24",
          "score": 38
        },
        {
          "date": "2026-07-25",
          "score": 49
        },
        {
          "date": "2026-07-25",
          "score": 47
        }
      ]
    },
    {
      "id": "LEAD-1004",
      "nombre": "Miguel Ortiz Moreno",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Samán",
      "ubicacion": "Ricaurte",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T10:13:00-05:00",
      "capacidad": 6,
      "intencion": 75,
      "engagement": 40,
      "conversion": 40,
      "total": 41,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 26
        },
        {
          "date": "2026-07-23",
          "score": 37
        },
        {
          "date": "2026-07-24",
          "score": 32
        },
        {
          "date": "2026-07-25",
          "score": 42
        }
      ]
    },
    {
      "id": "LEAD-1005",
      "nombre": "Sebastián Pineda Díaz",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T13:28:00-05:00",
      "capacidad": 26,
      "intencion": 63,
      "engagement": 39,
      "conversion": 35,
      "total": 42,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 30
        },
        {
          "date": "2026-07-22",
          "score": 40
        },
        {
          "date": "2026-07-22",
          "score": 38
        }
      ]
    },
    {
      "id": "LEAD-1006",
      "nombre": "Paola Cruz Rincón",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T15:49:00-05:00",
      "capacidad": 18,
      "intencion": 52,
      "engagement": 48,
      "conversion": 48,
      "total": 41,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 25
        },
        {
          "date": "2026-07-24",
          "score": 27
        },
        {
          "date": "2026-07-24",
          "score": 40
        },
        {
          "date": "2026-07-25",
          "score": 37
        }
      ]
    },
    {
      "id": "LEAD-1007",
      "nombre": "Alejandro González Ríos",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Pamplona I",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T18:45:00-05:00",
      "capacidad": 23,
      "intencion": 44,
      "engagement": 27,
      "conversion": 34,
      "total": 33,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 18
        },
        {
          "date": "2026-07-22",
          "score": 29
        },
        {
          "date": "2026-07-23",
          "score": 27
        },
        {
          "date": "2026-07-24",
          "score": 31
        }
      ]
    },
    {
      "id": "LEAD-1008",
      "nombre": "Ángela Reyes Castro",
      "fuente": "Google Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Versalles",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T20:36:00-05:00",
      "capacidad": 54,
      "intencion": 59,
      "engagement": 50,
      "conversion": 51,
      "total": 54,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 30
        },
        {
          "date": "2026-07-22",
          "score": 34
        },
        {
          "date": "2026-07-23",
          "score": 41
        },
        {
          "date": "2026-07-24",
          "score": 43
        },
        {
          "date": "2026-07-24",
          "score": 48
        },
        {
          "date": "2026-07-25",
          "score": 52
        }
      ]
    },
    {
      "id": "LEAD-1009",
      "nombre": "Valentina Moreno Rincón",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T14:39:00-05:00",
      "capacidad": 25,
      "intencion": 68,
      "engagement": 37,
      "conversion": 48,
      "total": 46,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 33
        },
        {
          "date": "2026-07-20",
          "score": 30
        },
        {
          "date": "2026-07-21",
          "score": 33
        },
        {
          "date": "2026-07-22",
          "score": 46
        },
        {
          "date": "2026-07-22",
          "score": 46
        }
      ]
    },
    {
      "id": "LEAD-1010",
      "nombre": "Camila Hernández Jiménez",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T20:59:00-05:00",
      "capacidad": 25,
      "intencion": 48,
      "engagement": 27,
      "conversion": 29,
      "total": 33,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 22
        },
        {
          "date": "2026-07-22",
          "score": 27
        },
        {
          "date": "2026-07-23",
          "score": 29
        },
        {
          "date": "2026-07-24",
          "score": 33
        }
      ]
    },
    {
      "id": "LEAD-1011",
      "nombre": "Juan Hernández Ospina",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T17:38:00-05:00",
      "capacidad": 6,
      "intencion": 59,
      "engagement": 44,
      "conversion": 42,
      "total": 37,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 24
        },
        {
          "date": "2026-07-22",
          "score": 34
        },
        {
          "date": "2026-07-22",
          "score": 39
        }
      ]
    },
    {
      "id": "LEAD-1012",
      "nombre": "Javier Romero Ruiz",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T13:24:00-05:00",
      "capacidad": 39,
      "intencion": 76,
      "engagement": 49,
      "conversion": 54,
      "total": 56,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-26"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 38
        },
        {
          "date": "2026-07-24",
          "score": 42
        },
        {
          "date": "2026-07-24",
          "score": 46
        },
        {
          "date": "2026-07-25",
          "score": 46
        },
        {
          "date": "2026-07-26",
          "score": 55
        },
        {
          "date": "2026-07-26",
          "score": 53
        }
      ]
    },
    {
      "id": "LEAD-1013",
      "nombre": "Yolanda Cárdenas Cárdenas",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Pamplona I",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T11:46:00-05:00",
      "capacidad": 21,
      "intencion": 53,
      "engagement": 52,
      "conversion": 44,
      "total": 42,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 26
        },
        {
          "date": "2026-07-20",
          "score": 37
        },
        {
          "date": "2026-07-21",
          "score": 42
        },
        {
          "date": "2026-07-22",
          "score": 42
        }
      ]
    },
    {
      "id": "LEAD-1014",
      "nombre": "Adriana Herrera Vargas",
      "fuente": "Google Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T10:13:00-05:00",
      "capacidad": 23,
      "intencion": 90,
      "engagement": 66,
      "conversion": 62,
      "total": 60,
      "temperatura": "Hot",
      "status": "Ganado",
      "nextBestAction": "Activar postventa y seguro todo riesgo",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-25"
        },
        {
          "key": "cierre",
          "label": "Promesa de compraventa firmada",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 33
        },
        {
          "date": "2026-07-21",
          "score": 38
        },
        {
          "date": "2026-07-21",
          "score": 48
        },
        {
          "date": "2026-07-23",
          "score": 45
        },
        {
          "date": "2026-07-24",
          "score": 50
        },
        {
          "date": "2026-07-25",
          "score": 52
        },
        {
          "date": "2026-07-25",
          "score": 60
        }
      ]
    },
    {
      "id": "LEAD-1015",
      "nombre": "Santiago Cárdenas Gómez",
      "fuente": "Google Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T09:00:00-05:00",
      "capacidad": 27,
      "intencion": 70,
      "engagement": 59,
      "conversion": 60,
      "total": 54,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 34
        },
        {
          "date": "2026-07-24",
          "score": 33
        },
        {
          "date": "2026-07-24",
          "score": 44
        },
        {
          "date": "2026-07-25",
          "score": 41
        },
        {
          "date": "2026-07-25",
          "score": 48
        },
        {
          "date": "2026-07-26",
          "score": 58
        }
      ]
    },
    {
      "id": "LEAD-1016",
      "nombre": "Héctor Moreno Ruiz",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Versalles",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T19:36:00-05:00",
      "capacidad": 24,
      "intencion": 64,
      "engagement": 60,
      "conversion": 53,
      "total": 49,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-24"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-25"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-26"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-26"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-27"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-24",
          "score": 34
        },
        {
          "date": "2026-07-25",
          "score": 35
        },
        {
          "date": "2026-07-26",
          "score": 36
        },
        {
          "date": "2026-07-26",
          "score": 47
        },
        {
          "date": "2026-07-27",
          "score": 49
        }
      ]
    },
    {
      "id": "LEAD-1017",
      "nombre": "Daniel Ruiz Suárez",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Araucaria",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T15:35:00-05:00",
      "capacidad": 9,
      "intencion": 71,
      "engagement": 40,
      "conversion": 47,
      "total": 42,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 33
        },
        {
          "date": "2026-07-23",
          "score": 35
        },
        {
          "date": "2026-07-23",
          "score": 44
        }
      ]
    },
    {
      "id": "LEAD-1018",
      "nombre": "Juan García Álvarez",
      "fuente": "Google Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T18:42:00-05:00",
      "capacidad": 22,
      "intencion": 71,
      "engagement": 48,
      "conversion": 44,
      "total": 47,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 34
        },
        {
          "date": "2026-07-20",
          "score": 36
        },
        {
          "date": "2026-07-21",
          "score": 40
        },
        {
          "date": "2026-07-22",
          "score": 47
        },
        {
          "date": "2026-07-22",
          "score": 47
        }
      ]
    },
    {
      "id": "LEAD-1019",
      "nombre": "Diana Acosta Ortiz",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T17:30:00-05:00",
      "capacidad": 6,
      "intencion": 43,
      "engagement": 36,
      "conversion": 26,
      "total": 27,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 25
        },
        {
          "date": "2026-07-22",
          "score": 27
        }
      ]
    },
    {
      "id": "LEAD-1020",
      "nombre": "Santiago Cárdenas Gómez",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Versalles",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T13:32:00-05:00",
      "capacidad": 24,
      "intencion": 67,
      "engagement": 36,
      "conversion": 40,
      "total": 43,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 31
        },
        {
          "date": "2026-07-20",
          "score": 29
        },
        {
          "date": "2026-07-21",
          "score": 37
        },
        {
          "date": "2026-07-22",
          "score": 34
        },
        {
          "date": "2026-07-23",
          "score": 45
        }
      ]
    },
    {
      "id": "LEAD-1021",
      "nombre": "Javier Gómez Romero",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Pamplona I",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T13:10:00-05:00",
      "capacidad": 4,
      "intencion": 46,
      "engagement": 48,
      "conversion": 38,
      "total": 33,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 25
        },
        {
          "date": "2026-07-21",
          "score": 30
        },
        {
          "date": "2026-07-22",
          "score": 25
        },
        {
          "date": "2026-07-23",
          "score": 38
        }
      ]
    },
    {
      "id": "LEAD-1022",
      "nombre": "Yolanda Rojas Sánchez",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T12:18:00-05:00",
      "capacidad": 28,
      "intencion": 76,
      "engagement": 68,
      "conversion": 62,
      "total": 58,
      "temperatura": "Hot",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 35
        },
        {
          "date": "2026-07-21",
          "score": 41
        },
        {
          "date": "2026-07-22",
          "score": 49
        },
        {
          "date": "2026-07-23",
          "score": 48
        },
        {
          "date": "2026-07-24",
          "score": 59
        }
      ]
    },
    {
      "id": "LEAD-1023",
      "nombre": "Andrés Torres Pardo",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T20:06:00-05:00",
      "capacidad": 34,
      "intencion": 62,
      "engagement": 32,
      "conversion": 41,
      "total": 44,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 31
        },
        {
          "date": "2026-07-23",
          "score": 29
        },
        {
          "date": "2026-07-24",
          "score": 39
        },
        {
          "date": "2026-07-24",
          "score": 44
        }
      ]
    },
    {
      "id": "LEAD-1024",
      "nombre": "Mónica Ospina Castro",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T12:43:00-05:00",
      "capacidad": 21,
      "intencion": 75,
      "engagement": 54,
      "conversion": 56,
      "total": 52,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 31
        },
        {
          "date": "2026-07-22",
          "score": 37
        },
        {
          "date": "2026-07-23",
          "score": 44
        },
        {
          "date": "2026-07-24",
          "score": 48
        }
      ]
    },
    {
      "id": "LEAD-1025",
      "nombre": "Paola Ospina Mora",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "INARI",
      "ubicacion": "Chía",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T20:31:00-05:00",
      "capacidad": 8,
      "intencion": 75,
      "engagement": 44,
      "conversion": 43,
      "total": 43,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 24
        },
        {
          "date": "2026-07-23",
          "score": 33
        },
        {
          "date": "2026-07-24",
          "score": 36
        },
        {
          "date": "2026-07-24",
          "score": 40
        },
        {
          "date": "2026-07-25",
          "score": 41
        }
      ]
    },
    {
      "id": "LEAD-1026",
      "nombre": "Tatiana Herrera Rodríguez",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T11:50:00-05:00",
      "capacidad": 34,
      "intencion": 61,
      "engagement": 38,
      "conversion": 49,
      "total": 47,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 30
        },
        {
          "date": "2026-07-22",
          "score": 30
        },
        {
          "date": "2026-07-22",
          "score": 41
        },
        {
          "date": "2026-07-23",
          "score": 47
        },
        {
          "date": "2026-07-24",
          "score": 49
        }
      ]
    },
    {
      "id": "LEAD-1027",
      "nombre": "Nicolás Ríos González",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "INARI",
      "ubicacion": "Chía",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T10:52:00-05:00",
      "capacidad": 12,
      "intencion": 79,
      "engagement": 52,
      "conversion": 48,
      "total": 48,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 31
        },
        {
          "date": "2026-07-23",
          "score": 38
        },
        {
          "date": "2026-07-23",
          "score": 41
        },
        {
          "date": "2026-07-24",
          "score": 42
        },
        {
          "date": "2026-07-26",
          "score": 49
        }
      ]
    },
    {
      "id": "LEAD-1028",
      "nombre": "Daniel Moreno Medina",
      "fuente": "Google Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T19:19:00-05:00",
      "capacidad": 18,
      "intencion": 71,
      "engagement": 65,
      "conversion": 45,
      "total": 49,
      "temperatura": "Warm",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 29
        },
        {
          "date": "2026-07-22",
          "score": 41
        },
        {
          "date": "2026-07-23",
          "score": 39
        },
        {
          "date": "2026-07-23",
          "score": 54
        }
      ]
    },
    {
      "id": "LEAD-1029",
      "nombre": "Katherine Jiménez Ríos",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T19:14:00-05:00",
      "capacidad": 90,
      "intencion": 42,
      "engagement": 36,
      "conversion": 59,
      "total": 59,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 33
        },
        {
          "date": "2026-07-23",
          "score": 41
        },
        {
          "date": "2026-07-23",
          "score": 43
        },
        {
          "date": "2026-07-24",
          "score": 55
        },
        {
          "date": "2026-07-24",
          "score": 55
        },
        {
          "date": "2026-07-25",
          "score": 58
        }
      ]
    },
    {
      "id": "LEAD-1030",
      "nombre": "Diego Gutiérrez González",
      "fuente": "Google Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T09:01:00-05:00",
      "capacidad": 55,
      "intencion": 67,
      "engagement": 63,
      "conversion": 65,
      "total": 62,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 43
        },
        {
          "date": "2026-07-20",
          "score": 40
        },
        {
          "date": "2026-07-21",
          "score": 52
        },
        {
          "date": "2026-07-22",
          "score": 55
        },
        {
          "date": "2026-07-24",
          "score": 61
        },
        {
          "date": "2026-07-24",
          "score": 59
        }
      ]
    },
    {
      "id": "LEAD-1031",
      "nombre": "Ana Torres Díaz",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T12:02:00-05:00",
      "capacidad": 10,
      "intencion": 70,
      "engagement": 40,
      "conversion": 46,
      "total": 42,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 26
        },
        {
          "date": "2026-07-21",
          "score": 34
        },
        {
          "date": "2026-07-21",
          "score": 42
        },
        {
          "date": "2026-07-22",
          "score": 38
        }
      ]
    },
    {
      "id": "LEAD-1032",
      "nombre": "Lina Rincón Romero",
      "fuente": "Google Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "INARI",
      "ubicacion": "Chía",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T17:57:00-05:00",
      "capacidad": 22,
      "intencion": 74,
      "engagement": 65,
      "conversion": 55,
      "total": 53,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 33
        },
        {
          "date": "2026-07-21",
          "score": 42
        },
        {
          "date": "2026-07-21",
          "score": 40
        },
        {
          "date": "2026-07-22",
          "score": 51
        },
        {
          "date": "2026-07-23",
          "score": 58
        }
      ]
    },
    {
      "id": "LEAD-1033",
      "nombre": "Andrés Rincón Muñoz",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Pamplona I",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T17:22:00-05:00",
      "capacidad": 49,
      "intencion": 67,
      "engagement": 38,
      "conversion": 60,
      "total": 55,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 30
        },
        {
          "date": "2026-07-23",
          "score": 42
        },
        {
          "date": "2026-07-23",
          "score": 43
        },
        {
          "date": "2026-07-24",
          "score": 51
        },
        {
          "date": "2026-07-25",
          "score": 50
        },
        {
          "date": "2026-07-26",
          "score": 55
        }
      ]
    },
    {
      "id": "LEAD-1034",
      "nombre": "Tatiana Jiménez Álvarez",
      "fuente": "Google Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T16:36:00-05:00",
      "capacidad": 24,
      "intencion": 71,
      "engagement": 57,
      "conversion": 43,
      "total": 48,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 29
        },
        {
          "date": "2026-07-22",
          "score": 34
        },
        {
          "date": "2026-07-23",
          "score": 41
        },
        {
          "date": "2026-07-23",
          "score": 53
        }
      ]
    },
    {
      "id": "LEAD-1035",
      "nombre": "Sofía Castillo Vargas",
      "fuente": "Google Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Samán",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T19:12:00-05:00",
      "capacidad": 22,
      "intencion": 68,
      "engagement": 51,
      "conversion": 46,
      "total": 47,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 29
        },
        {
          "date": "2026-07-22",
          "score": 36
        },
        {
          "date": "2026-07-23",
          "score": 40
        },
        {
          "date": "2026-07-24",
          "score": 45
        }
      ]
    },
    {
      "id": "LEAD-1036",
      "nombre": "Héctor Ospina García",
      "fuente": "Google Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T19:37:00-05:00",
      "capacidad": 6,
      "intencion": 88,
      "engagement": 53,
      "conversion": 58,
      "total": 52,
      "temperatura": "Warm",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-27"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 29
        },
        {
          "date": "2026-07-23",
          "score": 36
        },
        {
          "date": "2026-07-24",
          "score": 40
        },
        {
          "date": "2026-07-25",
          "score": 50
        },
        {
          "date": "2026-07-27",
          "score": 50
        }
      ]
    },
    {
      "id": "LEAD-1037",
      "nombre": "Adriana Suárez Rojas",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T14:13:00-05:00",
      "capacidad": 55,
      "intencion": 61,
      "engagement": 41,
      "conversion": 52,
      "total": 54,
      "temperatura": "Hot",
      "status": "Ganado",
      "nextBestAction": "Activar postventa y seguro todo riesgo",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-26"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-27"
        },
        {
          "key": "cierre",
          "label": "Promesa de compraventa firmada",
          "date": "2026-07-28"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 35
        },
        {
          "date": "2026-07-23",
          "score": 39
        },
        {
          "date": "2026-07-24",
          "score": 44
        },
        {
          "date": "2026-07-25",
          "score": 46
        },
        {
          "date": "2026-07-26",
          "score": 46
        },
        {
          "date": "2026-07-27",
          "score": 52
        },
        {
          "date": "2026-07-28",
          "score": 58
        }
      ]
    },
    {
      "id": "LEAD-1038",
      "nombre": "Lorena López Rojas",
      "fuente": "Google Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T15:07:00-05:00",
      "capacidad": 38,
      "intencion": 78,
      "engagement": 51,
      "conversion": 58,
      "total": 57,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 38
        },
        {
          "date": "2026-07-20",
          "score": 37
        },
        {
          "date": "2026-07-21",
          "score": 40
        },
        {
          "date": "2026-07-22",
          "score": 46
        },
        {
          "date": "2026-07-23",
          "score": 49
        },
        {
          "date": "2026-07-23",
          "score": 59
        }
      ]
    },
    {
      "id": "LEAD-1039",
      "nombre": "Hernán Pardo Acosta",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T09:20:00-05:00",
      "capacidad": 15,
      "intencion": 72,
      "engagement": 49,
      "conversion": 53,
      "total": 47,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 35
        },
        {
          "date": "2026-07-20",
          "score": 32
        },
        {
          "date": "2026-07-21",
          "score": 38
        },
        {
          "date": "2026-07-22",
          "score": 41
        },
        {
          "date": "2026-07-23",
          "score": 46
        }
      ]
    },
    {
      "id": "LEAD-1040",
      "nombre": "Fernando Ospina Ruiz",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Versalles",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T18:53:00-05:00",
      "capacidad": 14,
      "intencion": 51,
      "engagement": 41,
      "conversion": 40,
      "total": 36,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 28
        },
        {
          "date": "2026-07-23",
          "score": 29
        },
        {
          "date": "2026-07-23",
          "score": 38
        }
      ]
    },
    {
      "id": "LEAD-1041",
      "nombre": "Mauricio Moreno Suárez",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T09:57:00-05:00",
      "capacidad": 99,
      "intencion": 70,
      "engagement": 61,
      "conversion": 85,
      "total": 80,
      "temperatura": "Hot",
      "status": "Ganado",
      "nextBestAction": "Activar postventa y seguro todo riesgo",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-25"
        },
        {
          "key": "cierre",
          "label": "Promesa de compraventa firmada",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 46
        },
        {
          "date": "2026-07-22",
          "score": 54
        },
        {
          "date": "2026-07-22",
          "score": 57
        },
        {
          "date": "2026-07-23",
          "score": 66
        },
        {
          "date": "2026-07-24",
          "score": 68
        },
        {
          "date": "2026-07-25",
          "score": 73
        },
        {
          "date": "2026-07-26",
          "score": 82
        }
      ]
    },
    {
      "id": "LEAD-1042",
      "nombre": "Mónica Peña Ruiz",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T09:09:00-05:00",
      "capacidad": 20,
      "intencion": 52,
      "engagement": 46,
      "conversion": 34,
      "total": 38,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 23
        },
        {
          "date": "2026-07-20",
          "score": 31
        },
        {
          "date": "2026-07-21",
          "score": 38
        }
      ]
    },
    {
      "id": "LEAD-1043",
      "nombre": "Mónica Ríos Mora",
      "fuente": "Google Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Samán",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T09:23:00-05:00",
      "capacidad": 99,
      "intencion": 68,
      "engagement": 54,
      "conversion": 84,
      "total": 78,
      "temperatura": "Hot",
      "status": "Ganado",
      "nextBestAction": "Activar postventa y seguro todo riesgo",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-25"
        },
        {
          "key": "cierre",
          "label": "Promesa de compraventa firmada",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 50
        },
        {
          "date": "2026-07-22",
          "score": 54
        },
        {
          "date": "2026-07-22",
          "score": 59
        },
        {
          "date": "2026-07-23",
          "score": 67
        },
        {
          "date": "2026-07-24",
          "score": 68
        },
        {
          "date": "2026-07-25",
          "score": 71
        },
        {
          "date": "2026-07-26",
          "score": 75
        }
      ]
    },
    {
      "id": "LEAD-1044",
      "nombre": "Sandra Delgado Medina",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Reserva de Guayacán",
      "ubicacion": "Girardot",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T20:45:00-05:00",
      "capacidad": 10,
      "intencion": 58,
      "engagement": 52,
      "conversion": 32,
      "total": 37,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 29
        },
        {
          "date": "2026-07-23",
          "score": 35
        },
        {
          "date": "2026-07-24",
          "score": 34
        }
      ]
    },
    {
      "id": "LEAD-1045",
      "nombre": "Tatiana Medina Rojas",
      "fuente": "Google Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Samán",
      "ubicacion": "Ricaurte",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T10:49:00-05:00",
      "capacidad": 6,
      "intencion": 77,
      "engagement": 51,
      "conversion": 45,
      "total": 45,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 31
        },
        {
          "date": "2026-07-22",
          "score": 32
        },
        {
          "date": "2026-07-23",
          "score": 32
        },
        {
          "date": "2026-07-24",
          "score": 38
        },
        {
          "date": "2026-07-25",
          "score": 43
        }
      ]
    },
    {
      "id": "LEAD-1046",
      "nombre": "Marcela Hernández Delgado",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Versalles",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T08:06:00-05:00",
      "capacidad": 49,
      "intencion": 66,
      "engagement": 64,
      "conversion": 68,
      "total": 61,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 36
        },
        {
          "date": "2026-07-21",
          "score": 41
        },
        {
          "date": "2026-07-22",
          "score": 52
        },
        {
          "date": "2026-07-23",
          "score": 53
        },
        {
          "date": "2026-07-23",
          "score": 52
        },
        {
          "date": "2026-07-25",
          "score": 58
        }
      ]
    },
    {
      "id": "LEAD-1047",
      "nombre": "Camilo Rodríguez Ruiz",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T20:04:00-05:00",
      "capacidad": 24,
      "intencion": 76,
      "engagement": 64,
      "conversion": 60,
      "total": 55,
      "temperatura": "Hot",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 40
        },
        {
          "date": "2026-07-22",
          "score": 38
        },
        {
          "date": "2026-07-23",
          "score": 42
        },
        {
          "date": "2026-07-23",
          "score": 52
        },
        {
          "date": "2026-07-24",
          "score": 58
        }
      ]
    },
    {
      "id": "LEAD-1048",
      "nombre": "Adriana Ríos Torres",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Araucaria",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T20:55:00-05:00",
      "capacidad": 9,
      "intencion": 59,
      "engagement": 50,
      "conversion": 48,
      "total": 41,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 27
        },
        {
          "date": "2026-07-23",
          "score": 38
        },
        {
          "date": "2026-07-24",
          "score": 38
        }
      ]
    },
    {
      "id": "LEAD-1049",
      "nombre": "Tatiana Reyes Moreno",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T14:28:00-05:00",
      "capacidad": 18,
      "intencion": 59,
      "engagement": 52,
      "conversion": 46,
      "total": 43,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 31
        },
        {
          "date": "2026-07-20",
          "score": 37
        },
        {
          "date": "2026-07-21",
          "score": 38
        },
        {
          "date": "2026-07-22",
          "score": 40
        }
      ]
    },
    {
      "id": "LEAD-1050",
      "nombre": "Paola Rodríguez Hernández",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Araucaria",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T16:42:00-05:00",
      "capacidad": 22,
      "intencion": 47,
      "engagement": 49,
      "conversion": 33,
      "total": 37,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 22
        },
        {
          "date": "2026-07-22",
          "score": 27
        },
        {
          "date": "2026-07-23",
          "score": 33
        },
        {
          "date": "2026-07-23",
          "score": 41
        }
      ]
    },
    {
      "id": "LEAD-1051",
      "nombre": "Johana Romero Acosta",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Versalles",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T17:43:00-05:00",
      "capacidad": 9,
      "intencion": 67,
      "engagement": 34,
      "conversion": 41,
      "total": 39,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 30
        },
        {
          "date": "2026-07-20",
          "score": 31
        },
        {
          "date": "2026-07-21",
          "score": 35
        }
      ]
    },
    {
      "id": "LEAD-1052",
      "nombre": "Mauricio Moreno Suárez",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T16:54:00-05:00",
      "capacidad": 99,
      "intencion": 70,
      "engagement": 56,
      "conversion": 69,
      "total": 75,
      "temperatura": "Hot",
      "status": "Ganado",
      "nextBestAction": "Activar postventa y seguro todo riesgo",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-27"
        },
        {
          "key": "cierre",
          "label": "Promesa de compraventa firmada",
          "date": "2026-07-28"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 45
        },
        {
          "date": "2026-07-23",
          "score": 55
        },
        {
          "date": "2026-07-24",
          "score": 51
        },
        {
          "date": "2026-07-24",
          "score": 64
        },
        {
          "date": "2026-07-25",
          "score": 63
        },
        {
          "date": "2026-07-27",
          "score": 67
        },
        {
          "date": "2026-07-28",
          "score": 73
        }
      ]
    },
    {
      "id": "LEAD-1053",
      "nombre": "Javier Romero Ruiz",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T17:43:00-05:00",
      "capacidad": 28,
      "intencion": 53,
      "engagement": 40,
      "conversion": 36,
      "total": 40,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 22
        },
        {
          "date": "2026-07-23",
          "score": 29
        },
        {
          "date": "2026-07-24",
          "score": 36
        },
        {
          "date": "2026-07-25",
          "score": 36
        }
      ]
    },
    {
      "id": "LEAD-1054",
      "nombre": "Yolanda Cárdenas Cárdenas",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Pamplona I",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T10:53:00-05:00",
      "capacidad": 20,
      "intencion": 60,
      "engagement": 56,
      "conversion": 49,
      "total": 45,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 34
        },
        {
          "date": "2026-07-20",
          "score": 29
        },
        {
          "date": "2026-07-21",
          "score": 39
        },
        {
          "date": "2026-07-22",
          "score": 36
        },
        {
          "date": "2026-07-23",
          "score": 44
        }
      ]
    },
    {
      "id": "LEAD-1055",
      "nombre": "David Muñoz Ruiz",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T14:06:00-05:00",
      "capacidad": 25,
      "intencion": 41,
      "engagement": 21,
      "conversion": 38,
      "total": 32,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 22
        },
        {
          "date": "2026-07-22",
          "score": 27
        },
        {
          "date": "2026-07-23",
          "score": 30
        },
        {
          "date": "2026-07-24",
          "score": 34
        }
      ]
    },
    {
      "id": "LEAD-1056",
      "nombre": "Camila López Cárdenas",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T11:15:00-05:00",
      "capacidad": 14,
      "intencion": 42,
      "engagement": 31,
      "conversion": 23,
      "total": 28,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 26
        },
        {
          "date": "2026-07-22",
          "score": 26
        }
      ]
    },
    {
      "id": "LEAD-1057",
      "nombre": "Germán González Castillo",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T15:42:00-05:00",
      "capacidad": 30,
      "intencion": 80,
      "engagement": 44,
      "conversion": 47,
      "total": 52,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 31
        },
        {
          "date": "2026-07-20",
          "score": 42
        },
        {
          "date": "2026-07-21",
          "score": 47
        },
        {
          "date": "2026-07-22",
          "score": 49
        }
      ]
    },
    {
      "id": "LEAD-1058",
      "nombre": "Claudia Rodríguez Rincón",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T20:31:00-05:00",
      "capacidad": 5,
      "intencion": 64,
      "engagement": 57,
      "conversion": 50,
      "total": 43,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 29
        },
        {
          "date": "2026-07-22",
          "score": 28
        },
        {
          "date": "2026-07-22",
          "score": 36
        },
        {
          "date": "2026-07-24",
          "score": 41
        }
      ]
    },
    {
      "id": "LEAD-1059",
      "nombre": "Claudia Torres García",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Bosque de Arrayán",
      "ubicacion": "Tocancipá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T10:39:00-05:00",
      "capacidad": 21,
      "intencion": 54,
      "engagement": 39,
      "conversion": 43,
      "total": 39,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 27
        },
        {
          "date": "2026-07-22",
          "score": 33
        },
        {
          "date": "2026-07-24",
          "score": 30
        },
        {
          "date": "2026-07-24",
          "score": 37
        }
      ]
    },
    {
      "id": "LEAD-1060",
      "nombre": "Diana Pineda González",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T16:13:00-05:00",
      "capacidad": 22,
      "intencion": 44,
      "engagement": 20,
      "conversion": 36,
      "total": 32,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 24
        },
        {
          "date": "2026-07-20",
          "score": 32
        },
        {
          "date": "2026-07-21",
          "score": 30
        }
      ]
    },
    {
      "id": "LEAD-1061",
      "nombre": "José Moreno Díaz",
      "fuente": "Google Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Versalles",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T17:47:00-05:00",
      "capacidad": 19,
      "intencion": 71,
      "engagement": 67,
      "conversion": 43,
      "total": 49,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 29
        },
        {
          "date": "2026-07-21",
          "score": 38
        },
        {
          "date": "2026-07-22",
          "score": 36
        },
        {
          "date": "2026-07-23",
          "score": 49
        },
        {
          "date": "2026-07-23",
          "score": 48
        }
      ]
    },
    {
      "id": "LEAD-1062",
      "nombre": "Fernando Reyes Sánchez",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T13:50:00-05:00",
      "capacidad": 5,
      "intencion": 68,
      "engagement": 42,
      "conversion": 33,
      "total": 37,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 20
        },
        {
          "date": "2026-07-21",
          "score": 27
        },
        {
          "date": "2026-07-21",
          "score": 28
        },
        {
          "date": "2026-07-22",
          "score": 41
        }
      ]
    },
    {
      "id": "LEAD-1063",
      "nombre": "Andrés Moreno Herrera",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Versalles",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T18:34:00-05:00",
      "capacidad": 15,
      "intencion": 79,
      "engagement": 52,
      "conversion": 46,
      "total": 48,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-25"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-26"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-27"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 32
        },
        {
          "date": "2026-07-23",
          "score": 35
        },
        {
          "date": "2026-07-25",
          "score": 41
        },
        {
          "date": "2026-07-26",
          "score": 48
        },
        {
          "date": "2026-07-27",
          "score": 48
        }
      ]
    },
    {
      "id": "LEAD-1064",
      "nombre": "Lina Cárdenas Pardo",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T18:48:00-05:00",
      "capacidad": 24,
      "intencion": 55,
      "engagement": 29,
      "conversion": 43,
      "total": 39,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 26
        },
        {
          "date": "2026-07-24",
          "score": 31
        },
        {
          "date": "2026-07-25",
          "score": 42
        }
      ]
    },
    {
      "id": "LEAD-1065",
      "nombre": "Lina Muñoz Vargas",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "INARI",
      "ubicacion": "Chía",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T17:31:00-05:00",
      "capacidad": 27,
      "intencion": 54,
      "engagement": 27,
      "conversion": 45,
      "total": 40,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 30
        },
        {
          "date": "2026-07-21",
          "score": 43
        }
      ]
    },
    {
      "id": "LEAD-1066",
      "nombre": "Juliana Díaz Herrera",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Reserva de Guayacán",
      "ubicacion": "Girardot",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T18:34:00-05:00",
      "capacidad": 27,
      "intencion": 74,
      "engagement": 57,
      "conversion": 59,
      "total": 54,
      "temperatura": "Hot",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 30
        },
        {
          "date": "2026-07-22",
          "score": 38
        },
        {
          "date": "2026-07-23",
          "score": 41
        },
        {
          "date": "2026-07-24",
          "score": 45
        },
        {
          "date": "2026-07-25",
          "score": 57
        }
      ]
    },
    {
      "id": "LEAD-1067",
      "nombre": "Martha Salazar López",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Araucaria",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T14:26:00-05:00",
      "capacidad": 4,
      "intencion": 56,
      "engagement": 43,
      "conversion": 41,
      "total": 35,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 22
        },
        {
          "date": "2026-07-22",
          "score": 29
        },
        {
          "date": "2026-07-24",
          "score": 38
        }
      ]
    },
    {
      "id": "LEAD-1068",
      "nombre": "Carlos Rojas Martínez",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T12:41:00-05:00",
      "capacidad": 33,
      "intencion": 70,
      "engagement": 67,
      "conversion": 64,
      "total": 58,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 38
        },
        {
          "date": "2026-07-22",
          "score": 40
        },
        {
          "date": "2026-07-23",
          "score": 44
        },
        {
          "date": "2026-07-24",
          "score": 49
        },
        {
          "date": "2026-07-25",
          "score": 50
        },
        {
          "date": "2026-07-26",
          "score": 59
        }
      ]
    },
    {
      "id": "LEAD-1069",
      "nombre": "Cristian Delgado Gutiérrez",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Samán",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T10:12:00-05:00",
      "capacidad": 24,
      "intencion": 71,
      "engagement": 63,
      "conversion": 46,
      "total": 50,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 32
        },
        {
          "date": "2026-07-20",
          "score": 37
        },
        {
          "date": "2026-07-21",
          "score": 46
        },
        {
          "date": "2026-07-22",
          "score": 49
        },
        {
          "date": "2026-07-23",
          "score": 52
        }
      ]
    },
    {
      "id": "LEAD-1070",
      "nombre": "Patricia Díaz Jiménez",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Reserva de Guayacán",
      "ubicacion": "Girardot",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T14:41:00-05:00",
      "capacidad": 19,
      "intencion": 58,
      "engagement": 57,
      "conversion": 42,
      "total": 43,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 31
        },
        {
          "date": "2026-07-23",
          "score": 34
        },
        {
          "date": "2026-07-24",
          "score": 40
        },
        {
          "date": "2026-07-25",
          "score": 44
        },
        {
          "date": "2026-07-25",
          "score": 39
        }
      ]
    },
    {
      "id": "LEAD-1071",
      "nombre": "Miguel Sánchez Muñoz",
      "fuente": "Google Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T18:54:00-05:00",
      "capacidad": 5,
      "intencion": 70,
      "engagement": 52,
      "conversion": 36,
      "total": 40,
      "temperatura": "Cold",
      "status": "Pre-Aprobado",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 24
        },
        {
          "date": "2026-07-22",
          "score": 29
        },
        {
          "date": "2026-07-22",
          "score": 29
        },
        {
          "date": "2026-07-23",
          "score": 41
        },
        {
          "date": "2026-07-23",
          "score": 43
        }
      ]
    },
    {
      "id": "LEAD-1072",
      "nombre": "Milena Mora Bernal",
      "fuente": "Google Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Araucaria",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T13:38:00-05:00",
      "capacidad": 19,
      "intencion": 65,
      "engagement": 38,
      "conversion": 36,
      "total": 40,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 22
        },
        {
          "date": "2026-07-21",
          "score": 33
        },
        {
          "date": "2026-07-21",
          "score": 40
        },
        {
          "date": "2026-07-22",
          "score": 39
        }
      ]
    },
    {
      "id": "LEAD-1073",
      "nombre": "Alejandro Salazar Torres",
      "fuente": "Google Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T14:53:00-05:00",
      "capacidad": 56,
      "intencion": 65,
      "engagement": 63,
      "conversion": 66,
      "total": 62,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-21"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-22"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 43
        },
        {
          "date": "2026-07-20",
          "score": 39
        },
        {
          "date": "2026-07-21",
          "score": 47
        },
        {
          "date": "2026-07-21",
          "score": 52
        },
        {
          "date": "2026-07-22",
          "score": 61
        },
        {
          "date": "2026-07-23",
          "score": 59
        }
      ]
    },
    {
      "id": "LEAD-1074",
      "nombre": "Luis Moreno Salazar",
      "fuente": "Google Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T15:56:00-05:00",
      "capacidad": 22,
      "intencion": 63,
      "engagement": 57,
      "conversion": 49,
      "total": 47,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 32
        },
        {
          "date": "2026-07-22",
          "score": 40
        },
        {
          "date": "2026-07-23",
          "score": 41
        },
        {
          "date": "2026-07-24",
          "score": 45
        }
      ]
    },
    {
      "id": "LEAD-1075",
      "nombre": "Julián Mora Ruiz",
      "fuente": "Google Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T17:47:00-05:00",
      "capacidad": 31,
      "intencion": 78,
      "engagement": 65,
      "conversion": 51,
      "total": 56,
      "temperatura": "Hot",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 39
        },
        {
          "date": "2026-07-22",
          "score": 39
        },
        {
          "date": "2026-07-23",
          "score": 42
        },
        {
          "date": "2026-07-23",
          "score": 56
        },
        {
          "date": "2026-07-25",
          "score": 58
        }
      ]
    },
    {
      "id": "LEAD-1076",
      "nombre": "Alejandro Ortiz García",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T10:06:00-05:00",
      "capacidad": 39,
      "intencion": 70,
      "engagement": 60,
      "conversion": 49,
      "total": 54,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 30
        },
        {
          "date": "2026-07-21",
          "score": 42
        },
        {
          "date": "2026-07-22",
          "score": 45
        },
        {
          "date": "2026-07-23",
          "score": 45
        },
        {
          "date": "2026-07-24",
          "score": 45
        },
        {
          "date": "2026-07-25",
          "score": 52
        }
      ]
    },
    {
      "id": "LEAD-1077",
      "nombre": "Diana Pineda González",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Versalles",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T15:34:00-05:00",
      "capacidad": 19,
      "intencion": 69,
      "engagement": 60,
      "conversion": 52,
      "total": 49,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 34
        },
        {
          "date": "2026-07-20",
          "score": 35
        },
        {
          "date": "2026-07-21",
          "score": 44
        },
        {
          "date": "2026-07-22",
          "score": 42
        },
        {
          "date": "2026-07-23",
          "score": 46
        }
      ]
    },
    {
      "id": "LEAD-1078",
      "nombre": "Natalia Ramírez Pardo",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T18:15:00-05:00",
      "capacidad": 65,
      "intencion": 58,
      "engagement": 57,
      "conversion": 67,
      "total": 62,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-25"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-27"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-28"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 41
        },
        {
          "date": "2026-07-24",
          "score": 47
        },
        {
          "date": "2026-07-25",
          "score": 47
        },
        {
          "date": "2026-07-25",
          "score": 50
        },
        {
          "date": "2026-07-27",
          "score": 60
        },
        {
          "date": "2026-07-28",
          "score": 65
        }
      ]
    },
    {
      "id": "LEAD-1079",
      "nombre": "Diego Rincón Peña",
      "fuente": "Google Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T19:42:00-05:00",
      "capacidad": 26,
      "intencion": 73,
      "engagement": 68,
      "conversion": 47,
      "total": 52,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 36
        },
        {
          "date": "2026-07-22",
          "score": 37
        },
        {
          "date": "2026-07-22",
          "score": 41
        },
        {
          "date": "2026-07-23",
          "score": 55
        }
      ]
    },
    {
      "id": "LEAD-1080",
      "nombre": "Julián Ortiz Gómez",
      "fuente": "Google Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T16:55:00-05:00",
      "capacidad": 20,
      "intencion": 93,
      "engagement": 54,
      "conversion": 49,
      "total": 55,
      "temperatura": "Hot",
      "status": "Ganado",
      "nextBestAction": "Activar postventa y seguro todo riesgo",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-24"
        },
        {
          "key": "cierre",
          "label": "Promesa de compraventa firmada",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 29
        },
        {
          "date": "2026-07-21",
          "score": 41
        },
        {
          "date": "2026-07-22",
          "score": 41
        },
        {
          "date": "2026-07-22",
          "score": 48
        },
        {
          "date": "2026-07-24",
          "score": 47
        },
        {
          "date": "2026-07-24",
          "score": 47
        },
        {
          "date": "2026-07-25",
          "score": 53
        }
      ]
    },
    {
      "id": "LEAD-1081",
      "nombre": "Juan Gómez Ramírez",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T12:05:00-05:00",
      "capacidad": 23,
      "intencion": 61,
      "engagement": 50,
      "conversion": 45,
      "total": 44,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 27
        },
        {
          "date": "2026-07-22",
          "score": 35
        },
        {
          "date": "2026-07-23",
          "score": 34
        },
        {
          "date": "2026-07-24",
          "score": 37
        },
        {
          "date": "2026-07-25",
          "score": 48
        }
      ]
    },
    {
      "id": "LEAD-1082",
      "nombre": "Pedro Ramírez Romero",
      "fuente": "Google Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Pamplona I",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T20:02:00-05:00",
      "capacidad": 9,
      "intencion": 64,
      "engagement": 47,
      "conversion": 42,
      "total": 40,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-24"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-26"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-24",
          "score": 27
        },
        {
          "date": "2026-07-24",
          "score": 31
        },
        {
          "date": "2026-07-26",
          "score": 31
        },
        {
          "date": "2026-07-26",
          "score": 36
        }
      ]
    },
    {
      "id": "LEAD-1083",
      "nombre": "Fabián Castro Suárez",
      "fuente": "Google Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Reserva de Guayacán",
      "ubicacion": "Girardot",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T19:26:00-05:00",
      "capacidad": 21,
      "intencion": 63,
      "engagement": 48,
      "conversion": 37,
      "total": 42,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-24"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-25"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-26"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-27"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-24",
          "score": 28
        },
        {
          "date": "2026-07-25",
          "score": 29
        },
        {
          "date": "2026-07-26",
          "score": 41
        },
        {
          "date": "2026-07-27",
          "score": 44
        }
      ]
    },
    {
      "id": "LEAD-1084",
      "nombre": "Katherine Pardo Díaz",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T15:44:00-05:00",
      "capacidad": 7,
      "intencion": 56,
      "engagement": 27,
      "conversion": 35,
      "total": 32,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 29
        },
        {
          "date": "2026-07-23",
          "score": 36
        }
      ]
    },
    {
      "id": "LEAD-1085",
      "nombre": "Viviana Pardo Pineda",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T20:41:00-05:00",
      "capacidad": 19,
      "intencion": 43,
      "engagement": 32,
      "conversion": 40,
      "total": 34,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-24"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-25"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-24",
          "score": 19
        },
        {
          "date": "2026-07-25",
          "score": 31
        },
        {
          "date": "2026-07-25",
          "score": 29
        }
      ]
    },
    {
      "id": "LEAD-1086",
      "nombre": "Diego Jiménez Torres",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Bosque de Arrayán",
      "ubicacion": "Tocancipá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T09:10:00-05:00",
      "capacidad": 20,
      "intencion": 64,
      "engagement": 53,
      "conversion": 54,
      "total": 47,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 34
        },
        {
          "date": "2026-07-20",
          "score": 38
        },
        {
          "date": "2026-07-21",
          "score": 46
        },
        {
          "date": "2026-07-22",
          "score": 45
        }
      ]
    },
    {
      "id": "LEAD-1087",
      "nombre": "Julián Romero López",
      "fuente": "Google Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T20:20:00-05:00",
      "capacidad": 25,
      "intencion": 84,
      "engagement": 56,
      "conversion": 57,
      "total": 56,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-24"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-26"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-27"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-24",
          "score": 40
        },
        {
          "date": "2026-07-24",
          "score": 40
        },
        {
          "date": "2026-07-24",
          "score": 41
        },
        {
          "date": "2026-07-25",
          "score": 46
        },
        {
          "date": "2026-07-26",
          "score": 54
        },
        {
          "date": "2026-07-27",
          "score": 55
        }
      ]
    },
    {
      "id": "LEAD-1088",
      "nombre": "Adriana Pardo Salazar",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T20:18:00-05:00",
      "capacidad": 41,
      "intencion": 77,
      "engagement": 61,
      "conversion": 66,
      "total": 61,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-26"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-27"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 42
        },
        {
          "date": "2026-07-23",
          "score": 47
        },
        {
          "date": "2026-07-24",
          "score": 52
        },
        {
          "date": "2026-07-25",
          "score": 54
        },
        {
          "date": "2026-07-26",
          "score": 57
        },
        {
          "date": "2026-07-27",
          "score": 58
        }
      ]
    },
    {
      "id": "LEAD-1089",
      "nombre": "Lina Cárdenas Pardo",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Pamplona I",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T08:01:00-05:00",
      "capacidad": 22,
      "intencion": 53,
      "engagement": 34,
      "conversion": 35,
      "total": 37,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 22
        },
        {
          "date": "2026-07-21",
          "score": 28
        },
        {
          "date": "2026-07-22",
          "score": 38
        },
        {
          "date": "2026-07-22",
          "score": 41
        }
      ]
    },
    {
      "id": "LEAD-1090",
      "nombre": "Germán Hernández Ríos",
      "fuente": "Google Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T17:27:00-05:00",
      "capacidad": 24,
      "intencion": 56,
      "engagement": 32,
      "conversion": 44,
      "total": 40,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 29
        },
        {
          "date": "2026-07-23",
          "score": 28
        },
        {
          "date": "2026-07-24",
          "score": 32
        },
        {
          "date": "2026-07-25",
          "score": 39
        }
      ]
    },
    {
      "id": "LEAD-1091",
      "nombre": "Andrés Peña Romero",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T09:14:00-05:00",
      "capacidad": 23,
      "intencion": 64,
      "engagement": 49,
      "conversion": 53,
      "total": 47,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 26
        },
        {
          "date": "2026-07-23",
          "score": 38
        },
        {
          "date": "2026-07-24",
          "score": 37
        },
        {
          "date": "2026-07-24",
          "score": 39
        },
        {
          "date": "2026-07-25",
          "score": 50
        }
      ]
    },
    {
      "id": "LEAD-1092",
      "nombre": "Javier Sánchez Vargas",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T12:46:00-05:00",
      "capacidad": 18,
      "intencion": 78,
      "engagement": 50,
      "conversion": 51,
      "total": 50,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 31
        },
        {
          "date": "2026-07-22",
          "score": 41
        },
        {
          "date": "2026-07-23",
          "score": 47
        },
        {
          "date": "2026-07-24",
          "score": 51
        }
      ]
    },
    {
      "id": "LEAD-1093",
      "nombre": "Diana Castro Álvarez",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Versalles",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T13:37:00-05:00",
      "capacidad": 12,
      "intencion": 65,
      "engagement": 57,
      "conversion": 46,
      "total": 44,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 26
        },
        {
          "date": "2026-07-22",
          "score": 29
        },
        {
          "date": "2026-07-22",
          "score": 35
        },
        {
          "date": "2026-07-23",
          "score": 37
        },
        {
          "date": "2026-07-23",
          "score": 43
        }
      ]
    },
    {
      "id": "LEAD-1094",
      "nombre": "Laura García Rincón",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T19:27:00-05:00",
      "capacidad": 20,
      "intencion": 54,
      "engagement": 46,
      "conversion": 44,
      "total": 41,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-24"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-25"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-24",
          "score": 30
        },
        {
          "date": "2026-07-24",
          "score": 34
        },
        {
          "date": "2026-07-25",
          "score": 37
        },
        {
          "date": "2026-07-25",
          "score": 37
        }
      ]
    },
    {
      "id": "LEAD-1095",
      "nombre": "Laura Díaz Pineda",
      "fuente": "Google Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Pamplona I",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T17:42:00-05:00",
      "capacidad": 22,
      "intencion": 76,
      "engagement": 39,
      "conversion": 48,
      "total": 48,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 32
        },
        {
          "date": "2026-07-22",
          "score": 35
        },
        {
          "date": "2026-07-24",
          "score": 43
        },
        {
          "date": "2026-07-25",
          "score": 45
        }
      ]
    },
    {
      "id": "LEAD-1096",
      "nombre": "Juan Gómez Gutiérrez",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T17:11:00-05:00",
      "capacidad": 4,
      "intencion": 68,
      "engagement": 54,
      "conversion": 35,
      "total": 39,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 29
        },
        {
          "date": "2026-07-20",
          "score": 30
        },
        {
          "date": "2026-07-21",
          "score": 43
        }
      ]
    },
    {
      "id": "LEAD-1097",
      "nombre": "Johana Suárez Rojas",
      "fuente": "Google Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Araucaria",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T09:20:00-05:00",
      "capacidad": 22,
      "intencion": 79,
      "engagement": 50,
      "conversion": 58,
      "total": 53,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 37
        },
        {
          "date": "2026-07-22",
          "score": 37
        },
        {
          "date": "2026-07-23",
          "score": 45
        },
        {
          "date": "2026-07-23",
          "score": 57
        }
      ]
    },
    {
      "id": "LEAD-1098",
      "nombre": "Carolina Gómez Moreno",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T14:18:00-05:00",
      "capacidad": 25,
      "intencion": 78,
      "engagement": 44,
      "conversion": 42,
      "total": 48,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 33
        },
        {
          "date": "2026-07-22",
          "score": 37
        },
        {
          "date": "2026-07-24",
          "score": 41
        },
        {
          "date": "2026-07-25",
          "score": 52
        }
      ]
    },
    {
      "id": "LEAD-1099",
      "nombre": "Lorena Gómez Bernal",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T16:54:00-05:00",
      "capacidad": 20,
      "intencion": 75,
      "engagement": 53,
      "conversion": 47,
      "total": 49,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 35
        },
        {
          "date": "2026-07-21",
          "score": 32
        },
        {
          "date": "2026-07-22",
          "score": 43
        },
        {
          "date": "2026-07-23",
          "score": 44
        },
        {
          "date": "2026-07-23",
          "score": 44
        }
      ]
    },
    {
      "id": "LEAD-1100",
      "nombre": "Ana Torres Álvarez",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T19:29:00-05:00",
      "capacidad": 29,
      "intencion": 75,
      "engagement": 43,
      "conversion": 46,
      "total": 49,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 30
        },
        {
          "date": "2026-07-22",
          "score": 34
        },
        {
          "date": "2026-07-23",
          "score": 40
        },
        {
          "date": "2026-07-23",
          "score": 41
        },
        {
          "date": "2026-07-25",
          "score": 52
        }
      ]
    },
    {
      "id": "LEAD-1101",
      "nombre": "Ángela Reyes Castro",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Araucaria",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T15:31:00-05:00",
      "capacidad": 19,
      "intencion": 72,
      "engagement": 58,
      "conversion": 48,
      "total": 49,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-25"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-26"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-27"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 29
        },
        {
          "date": "2026-07-23",
          "score": 33
        },
        {
          "date": "2026-07-25",
          "score": 37
        },
        {
          "date": "2026-07-26",
          "score": 45
        },
        {
          "date": "2026-07-27",
          "score": 54
        }
      ]
    },
    {
      "id": "LEAD-1102",
      "nombre": "Andrés Romero Reyes",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Reserva de Guayacán",
      "ubicacion": "Girardot",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T11:55:00-05:00",
      "capacidad": 20,
      "intencion": 76,
      "engagement": 68,
      "conversion": 54,
      "total": 53,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 39
        },
        {
          "date": "2026-07-20",
          "score": 42
        },
        {
          "date": "2026-07-21",
          "score": 42
        },
        {
          "date": "2026-07-23",
          "score": 49
        },
        {
          "date": "2026-07-23",
          "score": 58
        }
      ]
    },
    {
      "id": "LEAD-1103",
      "nombre": "William Pardo Pineda",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T17:00:00-05:00",
      "capacidad": 41,
      "intencion": 75,
      "engagement": 63,
      "conversion": 56,
      "total": 59,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 39
        },
        {
          "date": "2026-07-22",
          "score": 40
        },
        {
          "date": "2026-07-23",
          "score": 46
        },
        {
          "date": "2026-07-24",
          "score": 52
        },
        {
          "date": "2026-07-25",
          "score": 51
        },
        {
          "date": "2026-07-26",
          "score": 63
        }
      ]
    },
    {
      "id": "LEAD-1104",
      "nombre": "Yolanda Bernal Torres",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T20:31:00-05:00",
      "capacidad": 39,
      "intencion": 58,
      "engagement": 55,
      "conversion": 47,
      "total": 49,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 31
        },
        {
          "date": "2026-07-22",
          "score": 36
        },
        {
          "date": "2026-07-23",
          "score": 43
        },
        {
          "date": "2026-07-24",
          "score": 49
        },
        {
          "date": "2026-07-25",
          "score": 54
        }
      ]
    },
    {
      "id": "LEAD-1105",
      "nombre": "María Vargas Moreno",
      "fuente": "Google Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Samán",
      "ubicacion": "Ricaurte",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T10:01:00-05:00",
      "capacidad": 11,
      "intencion": 63,
      "engagement": 51,
      "conversion": 51,
      "total": 43,
      "temperatura": "Warm",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 26
        },
        {
          "date": "2026-07-22",
          "score": 31
        },
        {
          "date": "2026-07-23",
          "score": 37
        },
        {
          "date": "2026-07-25",
          "score": 47
        }
      ]
    },
    {
      "id": "LEAD-1106",
      "nombre": "Carlos Rojas Martínez",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T17:42:00-05:00",
      "capacidad": 26,
      "intencion": 54,
      "engagement": 37,
      "conversion": 42,
      "total": 40,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 28
        },
        {
          "date": "2026-07-23",
          "score": 36
        },
        {
          "date": "2026-07-24",
          "score": 37
        },
        {
          "date": "2026-07-25",
          "score": 42
        }
      ]
    },
    {
      "id": "LEAD-1107",
      "nombre": "Diana Pineda González",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "INARI",
      "ubicacion": "Chía",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T19:46:00-05:00",
      "capacidad": 28,
      "intencion": 56,
      "engagement": 37,
      "conversion": 33,
      "total": 39,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 25
        },
        {
          "date": "2026-07-23",
          "score": 30
        },
        {
          "date": "2026-07-24",
          "score": 43
        }
      ]
    },
    {
      "id": "LEAD-1108",
      "nombre": "Daniel López Vargas",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T09:25:00-05:00",
      "capacidad": 22,
      "intencion": 56,
      "engagement": 46,
      "conversion": 45,
      "total": 42,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 27
        },
        {
          "date": "2026-07-24",
          "score": 30
        },
        {
          "date": "2026-07-24",
          "score": 38
        },
        {
          "date": "2026-07-25",
          "score": 38
        }
      ]
    },
    {
      "id": "LEAD-1109",
      "nombre": "Diana Hernández Bernal",
      "fuente": "Google Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T11:10:00-05:00",
      "capacidad": 17,
      "intencion": 70,
      "engagement": 36,
      "conversion": 45,
      "total": 43,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 23
        },
        {
          "date": "2026-07-20",
          "score": 36
        },
        {
          "date": "2026-07-21",
          "score": 35
        },
        {
          "date": "2026-07-22",
          "score": 42
        },
        {
          "date": "2026-07-23",
          "score": 43
        }
      ]
    },
    {
      "id": "LEAD-1110",
      "nombre": "Lorena Ruiz Castillo",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Versalles",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T09:19:00-05:00",
      "capacidad": 24,
      "intencion": 42,
      "engagement": 29,
      "conversion": 35,
      "total": 33,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 26
        },
        {
          "date": "2026-07-22",
          "score": 33
        },
        {
          "date": "2026-07-22",
          "score": 32
        }
      ]
    },
    {
      "id": "LEAD-1111",
      "nombre": "David Jiménez Peña",
      "fuente": "Google Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T13:42:00-05:00",
      "capacidad": 19,
      "intencion": 83,
      "engagement": 72,
      "conversion": 60,
      "total": 57,
      "temperatura": "Hot",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 37
        },
        {
          "date": "2026-07-21",
          "score": 38
        },
        {
          "date": "2026-07-22",
          "score": 49
        },
        {
          "date": "2026-07-23",
          "score": 51
        },
        {
          "date": "2026-07-24",
          "score": 53
        }
      ]
    },
    {
      "id": "LEAD-1112",
      "nombre": "Sofía Muñoz Hernández",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T15:17:00-05:00",
      "capacidad": 19,
      "intencion": 56,
      "engagement": 32,
      "conversion": 36,
      "total": 37,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 29
        },
        {
          "date": "2026-07-23",
          "score": 27
        },
        {
          "date": "2026-07-24",
          "score": 36
        }
      ]
    },
    {
      "id": "LEAD-1113",
      "nombre": "Fernanda Rojas González",
      "fuente": "Google Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T14:40:00-05:00",
      "capacidad": 48,
      "intencion": 83,
      "engagement": 48,
      "conversion": 66,
      "total": 63,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 37
        },
        {
          "date": "2026-07-21",
          "score": 40
        },
        {
          "date": "2026-07-22",
          "score": 50
        },
        {
          "date": "2026-07-22",
          "score": 49
        },
        {
          "date": "2026-07-24",
          "score": 58
        },
        {
          "date": "2026-07-24",
          "score": 62
        }
      ]
    },
    {
      "id": "LEAD-1114",
      "nombre": "Carlos Gutiérrez Hernández",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T18:43:00-05:00",
      "capacidad": 16,
      "intencion": 66,
      "engagement": 60,
      "conversion": 41,
      "total": 45,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 33
        },
        {
          "date": "2026-07-22",
          "score": 37
        },
        {
          "date": "2026-07-23",
          "score": 44
        },
        {
          "date": "2026-07-24",
          "score": 46
        }
      ]
    },
    {
      "id": "LEAD-1115",
      "nombre": "Patricia Bernal Hernández",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T10:08:00-05:00",
      "capacidad": 12,
      "intencion": 55,
      "engagement": 46,
      "conversion": 46,
      "total": 39,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 29
        },
        {
          "date": "2026-07-23",
          "score": 28
        },
        {
          "date": "2026-07-23",
          "score": 42
        }
      ]
    },
    {
      "id": "LEAD-1116",
      "nombre": "Yolanda Ortiz Bernal",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Samán",
      "ubicacion": "Ricaurte",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T16:06:00-05:00",
      "capacidad": 8,
      "intencion": 43,
      "engagement": 26,
      "conversion": 20,
      "total": 25,
      "temperatura": "Cold",
      "status": "Nuevo",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 22
        },
        {
          "date": "2026-07-20",
          "score": 24
        }
      ]
    },
    {
      "id": "LEAD-1117",
      "nombre": "Paola Ortiz Castillo",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T13:16:00-05:00",
      "capacidad": 99,
      "intencion": 43,
      "engagement": 38,
      "conversion": 68,
      "total": 64,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 43
        },
        {
          "date": "2026-07-22",
          "score": 45
        },
        {
          "date": "2026-07-23",
          "score": 48
        },
        {
          "date": "2026-07-24",
          "score": 50
        },
        {
          "date": "2026-07-24",
          "score": 60
        },
        {
          "date": "2026-07-25",
          "score": 67
        }
      ]
    },
    {
      "id": "LEAD-1118",
      "nombre": "Johana Díaz Romero",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T10:50:00-05:00",
      "capacidad": 70,
      "intencion": 48,
      "engagement": 48,
      "conversion": 56,
      "total": 56,
      "temperatura": "Hot",
      "status": "Ganado",
      "nextBestAction": "Activar postventa y seguro todo riesgo",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-25"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-26"
        },
        {
          "key": "cierre",
          "label": "Promesa de compraventa firmada",
          "date": "2026-07-27"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 31
        },
        {
          "date": "2026-07-23",
          "score": 37
        },
        {
          "date": "2026-07-25",
          "score": 38
        },
        {
          "date": "2026-07-25",
          "score": 48
        },
        {
          "date": "2026-07-25",
          "score": 47
        },
        {
          "date": "2026-07-26",
          "score": 52
        },
        {
          "date": "2026-07-27",
          "score": 51
        }
      ]
    },
    {
      "id": "LEAD-1119",
      "nombre": "Diego Rodríguez Rincón",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "INARI",
      "ubicacion": "Chía",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T13:37:00-05:00",
      "capacidad": 18,
      "intencion": 45,
      "engagement": 36,
      "conversion": 34,
      "total": 33,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 25
        },
        {
          "date": "2026-07-23",
          "score": 26
        },
        {
          "date": "2026-07-24",
          "score": 31
        }
      ]
    },
    {
      "id": "LEAD-1120",
      "nombre": "Lorena Gómez Reyes",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T18:06:00-05:00",
      "capacidad": 19,
      "intencion": 45,
      "engagement": 31,
      "conversion": 26,
      "total": 31,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 21
        },
        {
          "date": "2026-07-23",
          "score": 28
        },
        {
          "date": "2026-07-24",
          "score": 29
        }
      ]
    },
    {
      "id": "LEAD-1121",
      "nombre": "Tatiana Reyes Moreno",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "INARI",
      "ubicacion": "Chía",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T18:30:00-05:00",
      "capacidad": 24,
      "intencion": 59,
      "engagement": 39,
      "conversion": 43,
      "total": 42,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 28
        },
        {
          "date": "2026-07-21",
          "score": 30
        },
        {
          "date": "2026-07-22",
          "score": 35
        },
        {
          "date": "2026-07-23",
          "score": 40
        }
      ]
    },
    {
      "id": "LEAD-1122",
      "nombre": "Daniela Delgado Muñoz",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Reserva de Guayacán",
      "ubicacion": "Girardot",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T12:39:00-05:00",
      "capacidad": 13,
      "intencion": 56,
      "engagement": 34,
      "conversion": 31,
      "total": 34,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 21
        },
        {
          "date": "2026-07-23",
          "score": 31
        },
        {
          "date": "2026-07-24",
          "score": 30
        }
      ]
    },
    {
      "id": "LEAD-1123",
      "nombre": "Katherine Medina Castillo",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T19:12:00-05:00",
      "capacidad": 27,
      "intencion": 47,
      "engagement": 40,
      "conversion": 29,
      "total": 36,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 28
        },
        {
          "date": "2026-07-21",
          "score": 28
        },
        {
          "date": "2026-07-23",
          "score": 28
        },
        {
          "date": "2026-07-24",
          "score": 34
        }
      ]
    },
    {
      "id": "LEAD-1124",
      "nombre": "Camilo Álvarez Ortiz",
      "fuente": "Google Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Reserva de Guayacán",
      "ubicacion": "Girardot",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T12:49:00-05:00",
      "capacidad": 4,
      "intencion": 76,
      "engagement": 61,
      "conversion": 53,
      "total": 48,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-20"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-21"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 34
        },
        {
          "date": "2026-07-20",
          "score": 33
        },
        {
          "date": "2026-07-20",
          "score": 38
        },
        {
          "date": "2026-07-21",
          "score": 48
        },
        {
          "date": "2026-07-22",
          "score": 44
        }
      ]
    },
    {
      "id": "LEAD-1125",
      "nombre": "Yolanda Ruiz Rodríguez",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T19:44:00-05:00",
      "capacidad": 24,
      "intencion": 78,
      "engagement": 49,
      "conversion": 43,
      "total": 49,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 27
        },
        {
          "date": "2026-07-23",
          "score": 40
        },
        {
          "date": "2026-07-24",
          "score": 44
        },
        {
          "date": "2026-07-25",
          "score": 40
        },
        {
          "date": "2026-07-26",
          "score": 46
        }
      ]
    },
    {
      "id": "LEAD-1126",
      "nombre": "Ana Rincón Bernal",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Araucaria",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T11:18:00-05:00",
      "capacidad": 20,
      "intencion": 64,
      "engagement": 56,
      "conversion": 55,
      "total": 48,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 34
        },
        {
          "date": "2026-07-21",
          "score": 39
        },
        {
          "date": "2026-07-22",
          "score": 35
        },
        {
          "date": "2026-07-22",
          "score": 42
        },
        {
          "date": "2026-07-23",
          "score": 52
        }
      ]
    },
    {
      "id": "LEAD-1127",
      "nombre": "Lorena Delgado Salazar",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T18:54:00-05:00",
      "capacidad": 22,
      "intencion": 41,
      "engagement": 20,
      "conversion": 38,
      "total": 31,
      "temperatura": "Cold",
      "status": "Nuevo",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 26
        },
        {
          "date": "2026-07-21",
          "score": 27
        }
      ]
    },
    {
      "id": "LEAD-1128",
      "nombre": "Lina Acosta Mora",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Araucaria",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T11:45:00-05:00",
      "capacidad": 16,
      "intencion": 56,
      "engagement": 57,
      "conversion": 37,
      "total": 40,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 32
        },
        {
          "date": "2026-07-23",
          "score": 38
        },
        {
          "date": "2026-07-24",
          "score": 41
        }
      ]
    },
    {
      "id": "LEAD-1129",
      "nombre": "Tatiana Reyes Moreno",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T12:57:00-05:00",
      "capacidad": 21,
      "intencion": 49,
      "engagement": 33,
      "conversion": 30,
      "total": 34,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 29
        },
        {
          "date": "2026-07-21",
          "score": 33
        },
        {
          "date": "2026-07-22",
          "score": 32
        }
      ]
    },
    {
      "id": "LEAD-1130",
      "nombre": "Paola Acosta Cárdenas",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T19:12:00-05:00",
      "capacidad": 19,
      "intencion": 70,
      "engagement": 44,
      "conversion": 41,
      "total": 44,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-25"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-26"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-27"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 26
        },
        {
          "date": "2026-07-23",
          "score": 32
        },
        {
          "date": "2026-07-25",
          "score": 34
        },
        {
          "date": "2026-07-26",
          "score": 40
        },
        {
          "date": "2026-07-27",
          "score": 47
        }
      ]
    },
    {
      "id": "LEAD-1131",
      "nombre": "Hernán Medina Vargas",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Bosque de Arrayán",
      "ubicacion": "Tocancipá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T17:54:00-05:00",
      "capacidad": 17,
      "intencion": 67,
      "engagement": 63,
      "conversion": 44,
      "total": 47,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 30
        },
        {
          "date": "2026-07-22",
          "score": 36
        },
        {
          "date": "2026-07-23",
          "score": 38
        },
        {
          "date": "2026-07-24",
          "score": 45
        },
        {
          "date": "2026-07-25",
          "score": 52
        }
      ]
    },
    {
      "id": "LEAD-1132",
      "nombre": "Carolina Vargas Suárez",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T17:13:00-05:00",
      "capacidad": 20,
      "intencion": 55,
      "engagement": 51,
      "conversion": 40,
      "total": 41,
      "temperatura": "Cold",
      "status": "Pre-Aprobado",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 24
        },
        {
          "date": "2026-07-21",
          "score": 25
        },
        {
          "date": "2026-07-23",
          "score": 33
        },
        {
          "date": "2026-07-24",
          "score": 36
        },
        {
          "date": "2026-07-25",
          "score": 38
        }
      ]
    },
    {
      "id": "LEAD-1133",
      "nombre": "Alejandro Ortiz García",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T11:10:00-05:00",
      "capacidad": 37,
      "intencion": 62,
      "engagement": 41,
      "conversion": 44,
      "total": 47,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 33
        },
        {
          "date": "2026-07-21",
          "score": 34
        },
        {
          "date": "2026-07-23",
          "score": 41
        },
        {
          "date": "2026-07-23",
          "score": 48
        }
      ]
    },
    {
      "id": "LEAD-1134",
      "nombre": "Cristian Castro Acosta",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Bosque de Arrayán",
      "ubicacion": "Tocancipá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T12:22:00-05:00",
      "capacidad": 26,
      "intencion": 48,
      "engagement": 34,
      "conversion": 46,
      "total": 39,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 25
        },
        {
          "date": "2026-07-23",
          "score": 33
        },
        {
          "date": "2026-07-23",
          "score": 31
        },
        {
          "date": "2026-07-24",
          "score": 34
        }
      ]
    },
    {
      "id": "LEAD-1135",
      "nombre": "Fabián Gutiérrez Martínez",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T16:14:00-05:00",
      "capacidad": 13,
      "intencion": 74,
      "engagement": 63,
      "conversion": 57,
      "total": 51,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 32
        },
        {
          "date": "2026-07-20",
          "score": 41
        },
        {
          "date": "2026-07-22",
          "score": 42
        },
        {
          "date": "2026-07-23",
          "score": 45
        },
        {
          "date": "2026-07-24",
          "score": 55
        }
      ]
    },
    {
      "id": "LEAD-1136",
      "nombre": "Ricardo Castro Castro",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T10:54:00-05:00",
      "capacidad": 25,
      "intencion": 46,
      "engagement": 22,
      "conversion": 36,
      "total": 34,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 27
        },
        {
          "date": "2026-07-22",
          "score": 28
        },
        {
          "date": "2026-07-23",
          "score": 31
        },
        {
          "date": "2026-07-24",
          "score": 37
        }
      ]
    },
    {
      "id": "LEAD-1137",
      "nombre": "Julián López Herrera",
      "fuente": "Google Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T16:02:00-05:00",
      "capacidad": 27,
      "intencion": 72,
      "engagement": 38,
      "conversion": 45,
      "total": 47,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 32
        },
        {
          "date": "2026-07-20",
          "score": 36
        },
        {
          "date": "2026-07-21",
          "score": 35
        },
        {
          "date": "2026-07-22",
          "score": 44
        },
        {
          "date": "2026-07-23",
          "score": 45
        }
      ]
    },
    {
      "id": "LEAD-1138",
      "nombre": "Mónica Ospina Castro",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T10:46:00-05:00",
      "capacidad": 48,
      "intencion": 67,
      "engagement": 46,
      "conversion": 64,
      "total": 57,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 40
        },
        {
          "date": "2026-07-22",
          "score": 40
        },
        {
          "date": "2026-07-23",
          "score": 47
        },
        {
          "date": "2026-07-24",
          "score": 44
        },
        {
          "date": "2026-07-25",
          "score": 53
        },
        {
          "date": "2026-07-26",
          "score": 54
        }
      ]
    },
    {
      "id": "LEAD-1139",
      "nombre": "Juan Gómez Ramírez",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T10:41:00-05:00",
      "capacidad": 19,
      "intencion": 50,
      "engagement": 51,
      "conversion": 39,
      "total": 39,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 24
        },
        {
          "date": "2026-07-20",
          "score": 25
        },
        {
          "date": "2026-07-21",
          "score": 33
        },
        {
          "date": "2026-07-22",
          "score": 37
        }
      ]
    },
    {
      "id": "LEAD-1140",
      "nombre": "Sofía Castillo Vargas",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T14:49:00-05:00",
      "capacidad": 39,
      "intencion": 79,
      "engagement": 67,
      "conversion": 58,
      "total": 61,
      "temperatura": "Hot",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 34
        },
        {
          "date": "2026-07-24",
          "score": 42
        },
        {
          "date": "2026-07-24",
          "score": 52
        },
        {
          "date": "2026-07-25",
          "score": 51
        },
        {
          "date": "2026-07-26",
          "score": 58
        }
      ]
    },
    {
      "id": "LEAD-1141",
      "nombre": "Fabián Rincón Reyes",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T13:40:00-05:00",
      "capacidad": 21,
      "intencion": 68,
      "engagement": 40,
      "conversion": 44,
      "total": 44,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 33
        },
        {
          "date": "2026-07-23",
          "score": 32
        },
        {
          "date": "2026-07-24",
          "score": 36
        },
        {
          "date": "2026-07-25",
          "score": 47
        }
      ]
    },
    {
      "id": "LEAD-1142",
      "nombre": "William Bernal Castro",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T16:50:00-05:00",
      "capacidad": 10,
      "intencion": 76,
      "engagement": 52,
      "conversion": 44,
      "total": 45,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 26
        },
        {
          "date": "2026-07-24",
          "score": 38
        },
        {
          "date": "2026-07-24",
          "score": 40
        },
        {
          "date": "2026-07-25",
          "score": 43
        }
      ]
    },
    {
      "id": "LEAD-1143",
      "nombre": "Sebastián Álvarez García",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Pamplona I",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T08:25:00-05:00",
      "capacidad": 21,
      "intencion": 76,
      "engagement": 62,
      "conversion": 54,
      "total": 53,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 34
        },
        {
          "date": "2026-07-23",
          "score": 39
        },
        {
          "date": "2026-07-23",
          "score": 46
        },
        {
          "date": "2026-07-25",
          "score": 52
        },
        {
          "date": "2026-07-25",
          "score": 52
        }
      ]
    },
    {
      "id": "LEAD-1144",
      "nombre": "Héctor Salazar López",
      "fuente": "Google Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T19:47:00-05:00",
      "capacidad": 8,
      "intencion": 67,
      "engagement": 41,
      "conversion": 36,
      "total": 38,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 20
        },
        {
          "date": "2026-07-24",
          "score": 34
        },
        {
          "date": "2026-07-24",
          "score": 38
        },
        {
          "date": "2026-07-25",
          "score": 33
        }
      ]
    },
    {
      "id": "LEAD-1145",
      "nombre": "Javier Reyes Castillo",
      "fuente": "Google Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "INARI",
      "ubicacion": "Chía",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T19:25:00-05:00",
      "capacidad": 19,
      "intencion": 62,
      "engagement": 54,
      "conversion": 37,
      "total": 42,
      "temperatura": "Cold",
      "status": "Pre-Aprobado",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 25
        },
        {
          "date": "2026-07-23",
          "score": 34
        },
        {
          "date": "2026-07-24",
          "score": 33
        },
        {
          "date": "2026-07-24",
          "score": 41
        },
        {
          "date": "2026-07-25",
          "score": 46
        }
      ]
    },
    {
      "id": "LEAD-1146",
      "nombre": "Luis Díaz Álvarez",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T19:22:00-05:00",
      "capacidad": 19,
      "intencion": 57,
      "engagement": 47,
      "conversion": 33,
      "total": 39,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-24"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-25"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-25"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-24",
          "score": 30
        },
        {
          "date": "2026-07-25",
          "score": 26
        },
        {
          "date": "2026-07-25",
          "score": 32
        },
        {
          "date": "2026-07-26",
          "score": 43
        }
      ]
    },
    {
      "id": "LEAD-1147",
      "nombre": "Tatiana Torres Castillo",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T16:34:00-05:00",
      "capacidad": 17,
      "intencion": 64,
      "engagement": 61,
      "conversion": 39,
      "total": 44,
      "temperatura": "Warm",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 29
        },
        {
          "date": "2026-07-22",
          "score": 39
        },
        {
          "date": "2026-07-22",
          "score": 47
        }
      ]
    },
    {
      "id": "LEAD-1148",
      "nombre": "Sofía Torres González",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T20:40:00-05:00",
      "capacidad": 18,
      "intencion": 66,
      "engagement": 60,
      "conversion": 48,
      "total": 47,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-25"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-26"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-28"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 29
        },
        {
          "date": "2026-07-24",
          "score": 38
        },
        {
          "date": "2026-07-25",
          "score": 40
        },
        {
          "date": "2026-07-26",
          "score": 39
        },
        {
          "date": "2026-07-28",
          "score": 47
        }
      ]
    },
    {
      "id": "LEAD-1149",
      "nombre": "Javier Reyes González",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T20:19:00-05:00",
      "capacidad": 34,
      "intencion": 66,
      "engagement": 36,
      "conversion": 48,
      "total": 47,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 33
        },
        {
          "date": "2026-07-22",
          "score": 34
        },
        {
          "date": "2026-07-23",
          "score": 38
        },
        {
          "date": "2026-07-23",
          "score": 52
        }
      ]
    },
    {
      "id": "LEAD-1150",
      "nombre": "Hernán López Peña",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T15:19:00-05:00",
      "capacidad": 8,
      "intencion": 47,
      "engagement": 27,
      "conversion": 27,
      "total": 28,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-20"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-21"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 19
        },
        {
          "date": "2026-07-20",
          "score": 19
        },
        {
          "date": "2026-07-20",
          "score": 20
        },
        {
          "date": "2026-07-21",
          "score": 26
        }
      ]
    },
    {
      "id": "LEAD-1151",
      "nombre": "Paola Hernández Suárez",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Araucaria",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T13:19:00-05:00",
      "capacidad": 24,
      "intencion": 77,
      "engagement": 62,
      "conversion": 49,
      "total": 53,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 29
        },
        {
          "date": "2026-07-21",
          "score": 42
        },
        {
          "date": "2026-07-22",
          "score": 48
        },
        {
          "date": "2026-07-23",
          "score": 51
        },
        {
          "date": "2026-07-24",
          "score": 48
        }
      ]
    },
    {
      "id": "LEAD-1152",
      "nombre": "Camilo Salazar López",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Reserva de Guayacán",
      "ubicacion": "Girardot",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T19:24:00-05:00",
      "capacidad": 15,
      "intencion": 60,
      "engagement": 43,
      "conversion": 35,
      "total": 38,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 22
        },
        {
          "date": "2026-07-22",
          "score": 29
        },
        {
          "date": "2026-07-23",
          "score": 33
        },
        {
          "date": "2026-07-24",
          "score": 39
        }
      ]
    },
    {
      "id": "LEAD-1153",
      "nombre": "Daniela Medina Herrera",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T20:23:00-05:00",
      "capacidad": 55,
      "intencion": 63,
      "engagement": 62,
      "conversion": 62,
      "total": 60,
      "temperatura": "Hot",
      "status": "Ganado",
      "nextBestAction": "Activar postventa y seguro todo riesgo",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-26"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-26"
        },
        {
          "key": "cierre",
          "label": "Promesa de compraventa firmada",
          "date": "2026-07-27"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 35
        },
        {
          "date": "2026-07-22",
          "score": 36
        },
        {
          "date": "2026-07-23",
          "score": 48
        },
        {
          "date": "2026-07-24",
          "score": 52
        },
        {
          "date": "2026-07-26",
          "score": 50
        },
        {
          "date": "2026-07-26",
          "score": 58
        },
        {
          "date": "2026-07-27",
          "score": 56
        }
      ]
    },
    {
      "id": "LEAD-1154",
      "nombre": "Johana Rodríguez Martínez",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T09:03:00-05:00",
      "capacidad": 17,
      "intencion": 57,
      "engagement": 37,
      "conversion": 42,
      "total": 39,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 30
        },
        {
          "date": "2026-07-21",
          "score": 27
        },
        {
          "date": "2026-07-22",
          "score": 35
        },
        {
          "date": "2026-07-23",
          "score": 38
        }
      ]
    },
    {
      "id": "LEAD-1155",
      "nombre": "Lorena Acosta Herrera",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Araucaria",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T18:33:00-05:00",
      "capacidad": 13,
      "intencion": 44,
      "engagement": 44,
      "conversion": 28,
      "total": 31,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 21
        },
        {
          "date": "2026-07-23",
          "score": 24
        },
        {
          "date": "2026-07-23",
          "score": 35
        }
      ]
    },
    {
      "id": "LEAD-1156",
      "nombre": "Héctor Jiménez Bernal",
      "fuente": "Google Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T18:27:00-05:00",
      "capacidad": 19,
      "intencion": 76,
      "engagement": 60,
      "conversion": 56,
      "total": 52,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 35
        },
        {
          "date": "2026-07-23",
          "score": 39
        },
        {
          "date": "2026-07-24",
          "score": 45
        },
        {
          "date": "2026-07-25",
          "score": 49
        }
      ]
    },
    {
      "id": "LEAD-1157",
      "nombre": "Milena Castro Romero",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T19:32:00-05:00",
      "capacidad": 21,
      "intencion": 68,
      "engagement": 63,
      "conversion": 45,
      "total": 48,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 31
        },
        {
          "date": "2026-07-22",
          "score": 32
        },
        {
          "date": "2026-07-23",
          "score": 40
        },
        {
          "date": "2026-07-23",
          "score": 46
        }
      ]
    },
    {
      "id": "LEAD-1158",
      "nombre": "Julián Ramírez Ríos",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T09:38:00-05:00",
      "capacidad": 23,
      "intencion": 67,
      "engagement": 34,
      "conversion": 38,
      "total": 42,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 32
        },
        {
          "date": "2026-07-23",
          "score": 33
        },
        {
          "date": "2026-07-24",
          "score": 33
        },
        {
          "date": "2026-07-24",
          "score": 38
        }
      ]
    },
    {
      "id": "LEAD-1159",
      "nombre": "David Peña Salazar",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": false,
      "fecha_ingreso": "2026-07-22T13:19:00-05:00",
      "capacidad": 11,
      "intencion": 82,
      "engagement": 63,
      "conversion": 45,
      "total": 50,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 33
        },
        {
          "date": "2026-07-23",
          "score": 32
        },
        {
          "date": "2026-07-23",
          "score": 46
        },
        {
          "date": "2026-07-24",
          "score": 50
        },
        {
          "date": "2026-07-26",
          "score": 48
        }
      ]
    },
    {
      "id": "LEAD-1160",
      "nombre": "Javier Reyes González",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T08:59:00-05:00",
      "capacidad": 37,
      "intencion": 57,
      "engagement": 30,
      "conversion": 52,
      "total": 46,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 32
        },
        {
          "date": "2026-07-23",
          "score": 38
        },
        {
          "date": "2026-07-24",
          "score": 38
        },
        {
          "date": "2026-07-25",
          "score": 47
        }
      ]
    },
    {
      "id": "LEAD-1161",
      "nombre": "Sandra Ruiz Acosta",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T15:36:00-05:00",
      "capacidad": 6,
      "intencion": 60,
      "engagement": 51,
      "conversion": 32,
      "total": 36,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-25"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 20
        },
        {
          "date": "2026-07-24",
          "score": 24
        },
        {
          "date": "2026-07-25",
          "score": 35
        },
        {
          "date": "2026-07-26",
          "score": 38
        }
      ]
    },
    {
      "id": "LEAD-1162",
      "nombre": "Marcela Gutiérrez Peña",
      "fuente": "Google Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Pamplona I",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T20:08:00-05:00",
      "capacidad": 19,
      "intencion": 71,
      "engagement": 49,
      "conversion": 54,
      "total": 48,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 29
        },
        {
          "date": "2026-07-22",
          "score": 34
        },
        {
          "date": "2026-07-22",
          "score": 38
        },
        {
          "date": "2026-07-24",
          "score": 49
        }
      ]
    },
    {
      "id": "LEAD-1163",
      "nombre": "Milena Cárdenas Ortiz",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T19:20:00-05:00",
      "capacidad": 23,
      "intencion": 65,
      "engagement": 33,
      "conversion": 37,
      "total": 41,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 29
        },
        {
          "date": "2026-07-22",
          "score": 30
        },
        {
          "date": "2026-07-23",
          "score": 38
        },
        {
          "date": "2026-07-23",
          "score": 38
        }
      ]
    },
    {
      "id": "LEAD-1164",
      "nombre": "Carlos Jiménez Suárez",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T14:21:00-05:00",
      "capacidad": 20,
      "intencion": 65,
      "engagement": 35,
      "conversion": 39,
      "total": 41,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 27
        },
        {
          "date": "2026-07-22",
          "score": 29
        },
        {
          "date": "2026-07-22",
          "score": 34
        },
        {
          "date": "2026-07-23",
          "score": 41
        }
      ]
    },
    {
      "id": "LEAD-1165",
      "nombre": "Andrés Castro Bernal",
      "fuente": "Google Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T18:05:00-05:00",
      "capacidad": 17,
      "intencion": 68,
      "engagement": 38,
      "conversion": 49,
      "total": 44,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 34
        },
        {
          "date": "2026-07-22",
          "score": 29
        },
        {
          "date": "2026-07-23",
          "score": 42
        },
        {
          "date": "2026-07-24",
          "score": 43
        }
      ]
    },
    {
      "id": "LEAD-1166",
      "nombre": "Fernando Castillo Pineda",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T17:33:00-05:00",
      "capacidad": 15,
      "intencion": 55,
      "engagement": 46,
      "conversion": 41,
      "total": 39,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 29
        },
        {
          "date": "2026-07-20",
          "score": 31
        },
        {
          "date": "2026-07-21",
          "score": 31
        },
        {
          "date": "2026-07-22",
          "score": 40
        }
      ]
    },
    {
      "id": "LEAD-1167",
      "nombre": "Fabián Cruz Muñoz",
      "fuente": "Google Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T08:17:00-05:00",
      "capacidad": 27,
      "intencion": 52,
      "engagement": 27,
      "conversion": 32,
      "total": 36,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 25
        },
        {
          "date": "2026-07-22",
          "score": 28
        },
        {
          "date": "2026-07-23",
          "score": 37
        }
      ]
    },
    {
      "id": "LEAD-1168",
      "nombre": "Fabián Mora Herrera",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Samán",
      "ubicacion": "Ricaurte",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T15:55:00-05:00",
      "capacidad": 11,
      "intencion": 51,
      "engagement": 35,
      "conversion": 27,
      "total": 31,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 21
        },
        {
          "date": "2026-07-21",
          "score": 31
        },
        {
          "date": "2026-07-21",
          "score": 27
        }
      ]
    },
    {
      "id": "LEAD-1169",
      "nombre": "Daniela Ruiz Castro",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Pamplona I",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T09:34:00-05:00",
      "capacidad": 28,
      "intencion": 40,
      "engagement": 39,
      "conversion": 43,
      "total": 37,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 23
        },
        {
          "date": "2026-07-20",
          "score": 31
        },
        {
          "date": "2026-07-22",
          "score": 36
        },
        {
          "date": "2026-07-23",
          "score": 34
        }
      ]
    },
    {
      "id": "LEAD-1170",
      "nombre": "Andrés Rincón Gómez",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T12:26:00-05:00",
      "capacidad": 35,
      "intencion": 48,
      "engagement": 42,
      "conversion": 48,
      "total": 43,
      "temperatura": "Warm",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 33
        },
        {
          "date": "2026-07-21",
          "score": 37
        },
        {
          "date": "2026-07-22",
          "score": 48
        }
      ]
    },
    {
      "id": "LEAD-1171",
      "nombre": "Eduardo Jiménez Ruiz",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Versalles",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T14:57:00-05:00",
      "capacidad": 4,
      "intencion": 76,
      "engagement": 42,
      "conversion": 41,
      "total": 41,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 24
        },
        {
          "date": "2026-07-22",
          "score": 28
        },
        {
          "date": "2026-07-22",
          "score": 32
        },
        {
          "date": "2026-07-23",
          "score": 45
        }
      ]
    },
    {
      "id": "LEAD-1172",
      "nombre": "Paola Rodríguez Hernández",
      "fuente": "Google Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Reserva de Guayacán",
      "ubicacion": "Girardot",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T11:48:00-05:00",
      "capacidad": 16,
      "intencion": 53,
      "engagement": 36,
      "conversion": 40,
      "total": 37,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 24
        },
        {
          "date": "2026-07-22",
          "score": 36
        },
        {
          "date": "2026-07-23",
          "score": 35
        }
      ]
    },
    {
      "id": "LEAD-1173",
      "nombre": "Laura Moreno Acosta",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Araucaria",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T09:17:00-05:00",
      "capacidad": 14,
      "intencion": 63,
      "engagement": 59,
      "conversion": 41,
      "total": 43,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 23
        },
        {
          "date": "2026-07-23",
          "score": 35
        },
        {
          "date": "2026-07-24",
          "score": 33
        },
        {
          "date": "2026-07-25",
          "score": 36
        },
        {
          "date": "2026-07-26",
          "score": 42
        }
      ]
    },
    {
      "id": "LEAD-1174",
      "nombre": "Nicolás Acosta López",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T14:40:00-05:00",
      "capacidad": 18,
      "intencion": 75,
      "engagement": 49,
      "conversion": 41,
      "total": 46,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-21"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 29
        },
        {
          "date": "2026-07-20",
          "score": 39
        },
        {
          "date": "2026-07-21",
          "score": 45
        },
        {
          "date": "2026-07-21",
          "score": 43
        }
      ]
    },
    {
      "id": "LEAD-1175",
      "nombre": "Yolanda Peña Castro",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "INARI",
      "ubicacion": "Chía",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T11:48:00-05:00",
      "capacidad": 24,
      "intencion": 49,
      "engagement": 33,
      "conversion": 29,
      "total": 34,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 24
        },
        {
          "date": "2026-07-20",
          "score": 34
        },
        {
          "date": "2026-07-22",
          "score": 31
        }
      ]
    },
    {
      "id": "LEAD-1176",
      "nombre": "Ricardo Cárdenas Bernal",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T09:54:00-05:00",
      "capacidad": 17,
      "intencion": 60,
      "engagement": 49,
      "conversion": 39,
      "total": 41,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 28
        },
        {
          "date": "2026-07-23",
          "score": 32
        },
        {
          "date": "2026-07-24",
          "score": 40
        },
        {
          "date": "2026-07-25",
          "score": 41
        }
      ]
    },
    {
      "id": "LEAD-1177",
      "nombre": "Cristian Álvarez Peña",
      "fuente": "Google Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Los Nogales",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T08:00:00-05:00",
      "capacidad": 10,
      "intencion": 58,
      "engagement": 55,
      "conversion": 42,
      "total": 40,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 32
        },
        {
          "date": "2026-07-23",
          "score": 31
        },
        {
          "date": "2026-07-24",
          "score": 45
        }
      ]
    },
    {
      "id": "LEAD-1178",
      "nombre": "Fernanda Romero García",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Versalles",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T13:53:00-05:00",
      "capacidad": 4,
      "intencion": 54,
      "engagement": 28,
      "conversion": 27,
      "total": 29,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 17
        },
        {
          "date": "2026-07-23",
          "score": 28
        },
        {
          "date": "2026-07-24",
          "score": 25
        }
      ]
    },
    {
      "id": "LEAD-1179",
      "nombre": "Ana Romero Ospina",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T19:35:00-05:00",
      "capacidad": 22,
      "intencion": 42,
      "engagement": 42,
      "conversion": 30,
      "total": 33,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 28
        },
        {
          "date": "2026-07-22",
          "score": 24
        },
        {
          "date": "2026-07-24",
          "score": 33
        }
      ]
    },
    {
      "id": "LEAD-1180",
      "nombre": "Sandra Cárdenas Gutiérrez",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T12:15:00-05:00",
      "capacidad": 20,
      "intencion": 52,
      "engagement": 38,
      "conversion": 31,
      "total": 35,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 25
        },
        {
          "date": "2026-07-24",
          "score": 28
        },
        {
          "date": "2026-07-25",
          "score": 38
        }
      ]
    },
    {
      "id": "LEAD-1181",
      "nombre": "Valentina Ramírez Ríos",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T08:57:00-05:00",
      "capacidad": 19,
      "intencion": 53,
      "engagement": 34,
      "conversion": 36,
      "total": 36,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 27
        },
        {
          "date": "2026-07-23",
          "score": 35
        }
      ]
    },
    {
      "id": "LEAD-1182",
      "nombre": "Fernando Ramírez Cruz",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T20:25:00-05:00",
      "capacidad": 17,
      "intencion": 55,
      "engagement": 44,
      "conversion": 38,
      "total": 38,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-24"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-24",
          "score": 24
        },
        {
          "date": "2026-07-24",
          "score": 31
        },
        {
          "date": "2026-07-25",
          "score": 40
        }
      ]
    },
    {
      "id": "LEAD-1183",
      "nombre": "Felipe Rojas Delgado",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T18:28:00-05:00",
      "capacidad": 32,
      "intencion": 52,
      "engagement": 25,
      "conversion": 43,
      "total": 40,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 29
        },
        {
          "date": "2026-07-21",
          "score": 27
        },
        {
          "date": "2026-07-21",
          "score": 32
        },
        {
          "date": "2026-07-23",
          "score": 40
        }
      ]
    },
    {
      "id": "LEAD-1184",
      "nombre": "Yolanda Suárez Delgado",
      "fuente": "Google Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T09:29:00-05:00",
      "capacidad": 21,
      "intencion": 66,
      "engagement": 36,
      "conversion": 44,
      "total": 43,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-21"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 23
        },
        {
          "date": "2026-07-20",
          "score": 33
        },
        {
          "date": "2026-07-21",
          "score": 32
        },
        {
          "date": "2026-07-21",
          "score": 38
        },
        {
          "date": "2026-07-22",
          "score": 46
        }
      ]
    },
    {
      "id": "LEAD-1185",
      "nombre": "Santiago Rodríguez Hernández",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Araucaria",
      "ubicacion": "Ciudadela Calle 80",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T20:17:00-05:00",
      "capacidad": 24,
      "intencion": 57,
      "engagement": 36,
      "conversion": 42,
      "total": 40,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 29
        },
        {
          "date": "2026-07-22",
          "score": 30
        },
        {
          "date": "2026-07-22",
          "score": 44
        }
      ]
    },
    {
      "id": "LEAD-1186",
      "nombre": "Sandra Hernández Cárdenas",
      "fuente": "Google Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Bosque de Arrayán",
      "ubicacion": "Tocancipá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T12:31:00-05:00",
      "capacidad": 20,
      "intencion": 93,
      "engagement": 54,
      "conversion": 61,
      "total": 58,
      "temperatura": "Hot",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 35
        },
        {
          "date": "2026-07-20",
          "score": 40
        },
        {
          "date": "2026-07-22",
          "score": 49
        },
        {
          "date": "2026-07-23",
          "score": 52
        },
        {
          "date": "2026-07-24",
          "score": 58
        }
      ]
    },
    {
      "id": "LEAD-1187",
      "nombre": "Juan Torres Medina",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Samán",
      "ubicacion": "Ricaurte",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T18:47:00-05:00",
      "capacidad": 6,
      "intencion": 59,
      "engagement": 43,
      "conversion": 29,
      "total": 34,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 25
        },
        {
          "date": "2026-07-21",
          "score": 35
        }
      ]
    },
    {
      "id": "LEAD-1188",
      "nombre": "Martha Delgado Pardo",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Samán",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T19:04:00-05:00",
      "capacidad": 20,
      "intencion": 51,
      "engagement": 54,
      "conversion": 39,
      "total": 40,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 24
        },
        {
          "date": "2026-07-23",
          "score": 32
        },
        {
          "date": "2026-07-23",
          "score": 32
        },
        {
          "date": "2026-07-24",
          "score": 41
        }
      ]
    },
    {
      "id": "LEAD-1189",
      "nombre": "Hernán Mora Cruz",
      "fuente": "Google Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Samán",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T11:54:00-05:00",
      "capacidad": 32,
      "intencion": 66,
      "engagement": 50,
      "conversion": 54,
      "total": 51,
      "temperatura": "Warm",
      "status": "En Negociación",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 33
        },
        {
          "date": "2026-07-22",
          "score": 40
        },
        {
          "date": "2026-07-24",
          "score": 43
        },
        {
          "date": "2026-07-24",
          "score": 45
        },
        {
          "date": "2026-07-25",
          "score": 46
        },
        {
          "date": "2026-07-26",
          "score": 56
        }
      ]
    },
    {
      "id": "LEAD-1190",
      "nombre": "Mónica Pineda Ríos",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T13:27:00-05:00",
      "capacidad": 24,
      "intencion": 54,
      "engagement": 39,
      "conversion": 46,
      "total": 41,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-21"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 29
        },
        {
          "date": "2026-07-20",
          "score": 28
        },
        {
          "date": "2026-07-21",
          "score": 37
        },
        {
          "date": "2026-07-21",
          "score": 43
        }
      ]
    },
    {
      "id": "LEAD-1191",
      "nombre": "Claudia Moreno Bernal",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "Pamplona I",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T08:17:00-05:00",
      "capacidad": 27,
      "intencion": 47,
      "engagement": 27,
      "conversion": 35,
      "total": 35,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 24
        },
        {
          "date": "2026-07-21",
          "score": 27
        },
        {
          "date": "2026-07-23",
          "score": 35
        },
        {
          "date": "2026-07-24",
          "score": 37
        }
      ]
    },
    {
      "id": "LEAD-1192",
      "nombre": "Valentina García Medina",
      "fuente": "Google Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": false,
      "fecha_ingreso": "2026-07-21T19:27:00-05:00",
      "capacidad": 30,
      "intencion": 63,
      "engagement": 53,
      "conversion": 47,
      "total": 48,
      "temperatura": "Warm",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 31
        },
        {
          "date": "2026-07-22",
          "score": 33
        },
        {
          "date": "2026-07-23",
          "score": 41
        },
        {
          "date": "2026-07-24",
          "score": 39
        },
        {
          "date": "2026-07-24",
          "score": 51
        }
      ]
    },
    {
      "id": "LEAD-1193",
      "nombre": "Daniel Romero Reyes",
      "fuente": "Meta Ads",
      "utm_campaign": "vivienda-vis-2026",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T14:51:00-05:00",
      "capacidad": 23,
      "intencion": 44,
      "engagement": 43,
      "conversion": 36,
      "total": 36,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 22
        },
        {
          "date": "2026-07-24",
          "score": 27
        },
        {
          "date": "2026-07-25",
          "score": 41
        }
      ]
    },
    {
      "id": "LEAD-1194",
      "nombre": "Patricia Díaz Jiménez",
      "fuente": "Google Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T09:30:00-05:00",
      "capacidad": 17,
      "intencion": 77,
      "engagement": 43,
      "conversion": 43,
      "total": 46,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 34
        },
        {
          "date": "2026-07-21",
          "score": 37
        },
        {
          "date": "2026-07-22",
          "score": 41
        },
        {
          "date": "2026-07-23",
          "score": 49
        }
      ]
    },
    {
      "id": "LEAD-1195",
      "nombre": "Ricardo Castro Castro",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Reserva de Guayacán",
      "ubicacion": "Girardot",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T09:49:00-05:00",
      "capacidad": 17,
      "intencion": 57,
      "engagement": 57,
      "conversion": 49,
      "total": 44,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 28
        },
        {
          "date": "2026-07-21",
          "score": 31
        },
        {
          "date": "2026-07-22",
          "score": 44
        },
        {
          "date": "2026-07-22",
          "score": 42
        }
      ]
    },
    {
      "id": "LEAD-1196",
      "nombre": "Hernán Medina Vargas",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T09:03:00-05:00",
      "capacidad": 20,
      "intencion": 60,
      "engagement": 40,
      "conversion": 48,
      "total": 42,
      "temperatura": "Cold",
      "status": "Perdido",
      "nextBestAction": "Reactivar con contenido educativo (nurture largo)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 26
        },
        {
          "date": "2026-07-20",
          "score": 33
        },
        {
          "date": "2026-07-21",
          "score": 40
        }
      ]
    },
    {
      "id": "LEAD-1197",
      "nombre": "Valentina González Muñoz",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "INARI",
      "ubicacion": "Chía",
      "afiliado": false,
      "fecha_ingreso": "2026-07-23T09:06:00-05:00",
      "capacidad": 10,
      "intencion": 50,
      "engagement": 51,
      "conversion": 28,
      "total": 33,
      "temperatura": "Cold",
      "status": "Cita Agendada",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 24
        },
        {
          "date": "2026-07-23",
          "score": 27
        },
        {
          "date": "2026-07-24",
          "score": 26
        },
        {
          "date": "2026-07-25",
          "score": 32
        }
      ]
    },
    {
      "id": "LEAD-1198",
      "nombre": "Pedro Suárez Medina",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "Bosque de Turpial",
      "ubicacion": "Tocancipá",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T15:24:00-05:00",
      "capacidad": 5,
      "intencion": 64,
      "engagement": 36,
      "conversion": 35,
      "total": 35,
      "temperatura": "Cold",
      "status": "En Calificación",
      "nextBestAction": "Nutrir con contenido educativo (newsletter quincenal)",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 21
        },
        {
          "date": "2026-07-21",
          "score": 28
        },
        {
          "date": "2026-07-21",
          "score": 38
        }
      ]
    },
    {
      "id": "LEAD-1199",
      "nombre": "Laura Peña Romero",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Samán",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T15:33:00-05:00",
      "capacidad": 15,
      "intencion": 76,
      "engagement": 62,
      "conversion": 59,
      "total": 52,
      "temperatura": "Warm",
      "status": "Cita Agendada",
      "nextBestAction": "Enviar simulador de crédito por WhatsApp",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 38
        },
        {
          "date": "2026-07-20",
          "score": 44
        },
        {
          "date": "2026-07-22",
          "score": 43
        },
        {
          "date": "2026-07-22",
          "score": 50
        }
      ]
    }
  ],
  "funnelData": [
    {
      "stage": "Nuevo",
      "count": 179
    },
    {
      "stage": "En Calificación",
      "count": 177
    },
    {
      "stage": "Cita Agendada",
      "count": 151
    },
    {
      "stage": "Pre-Aprobado",
      "count": 78
    },
    {
      "stage": "En Negociación",
      "count": 28
    },
    {
      "stage": "Ganado",
      "count": 8
    }
  ],
  "channelComparison": [
    {
      "canal": "Meta Ads",
      "leads": 153,
      "scorePromedio": 43,
      "intencionPromedio": 60,
      "tasaConversion": 3.3,
      "cplCOP": 28500
    },
    {
      "canal": "Google Ads",
      "leads": 47,
      "scorePromedio": 49,
      "intencionPromedio": 71,
      "tasaConversion": 6.4,
      "cplCOP": 41200
    }
  ],
  "campaignQuality": [
    {
      "campaign": "inversion-ricaurte",
      "leads": 38,
      "scorePromedio": 50,
      "tasaConversion": 5.3,
      "qualityIndex": 51
    },
    {
      "campaign": "jovenes-tocancipa",
      "leads": 31,
      "scorePromedio": 41,
      "tasaConversion": 6.5,
      "qualityIndex": 49
    },
    {
      "campaign": "primer-hogar-chia",
      "leads": 22,
      "scorePromedio": 50,
      "tasaConversion": 4.5,
      "qualityIndex": 49
    },
    {
      "campaign": "familia-maipore",
      "leads": 46,
      "scorePromedio": 46,
      "tasaConversion": 4.3,
      "qualityIndex": 45
    },
    {
      "campaign": "bogota-no-vis",
      "leads": 33,
      "scorePromedio": 43,
      "tasaConversion": 3,
      "qualityIndex": 38
    },
    {
      "campaign": "vivienda-vis-2026",
      "leads": 30,
      "scorePromedio": 38,
      "tasaConversion": 0,
      "qualityIndex": 25
    }
  ],
  "intentHeatmap": [
    {
      "ubicacion": "Tocancipá",
      "Meta Ads": 60,
      "Google Ads": 79,
      "leads": 21
    },
    {
      "ubicacion": "Ciudadela Maiporé",
      "Meta Ads": 61,
      "Google Ads": 71,
      "leads": 56
    },
    {
      "ubicacion": "Chía",
      "Meta Ads": 57,
      "Google Ads": 68,
      "leads": 11
    },
    {
      "ubicacion": "Girardot",
      "Meta Ads": 63,
      "Google Ads": 64,
      "leads": 10
    },
    {
      "ubicacion": "Ricaurte",
      "Meta Ads": 60,
      "Google Ads": 68,
      "leads": 31
    },
    {
      "ubicacion": "Ciudadela Calle 80",
      "Meta Ads": 61,
      "Google Ads": 70,
      "leads": 36
    },
    {
      "ubicacion": "Bogotá",
      "Meta Ads": 59,
      "Google Ads": 74,
      "leads": 20
    },
    {
      "ubicacion": "Ubaté",
      "Meta Ads": 60,
      "Google Ads": 76,
      "leads": 15
    }
  ],
  "nextBestActionDistribution": [
    {
      "action": "Nutrir con contenido educativo (newsletter quincenal)",
      "count": 75
    },
    {
      "action": "Enviar simulador de crédito por WhatsApp",
      "count": 71
    },
    {
      "action": "Enviar cotización formal y agendar firma",
      "count": 25
    },
    {
      "action": "Reactivar con contenido educativo (nurture largo)",
      "count": 21
    },
    {
      "action": "Activar postventa y seguro todo riesgo",
      "count": 8
    }
  ],
  "sankeyNodes": [
    {
      "name": "Meta Ads"
    },
    {
      "name": "Cold lead"
    },
    {
      "name": "En proceso"
    },
    {
      "name": "Warm lead"
    },
    {
      "name": "Google Ads"
    },
    {
      "name": "Hot lead"
    },
    {
      "name": "Ganado"
    },
    {
      "name": "Perdido"
    }
  ],
  "sankeyLinks": [
    {
      "source": 0,
      "target": 1,
      "value": 81
    },
    {
      "source": 1,
      "target": 2,
      "value": 75
    },
    {
      "source": 0,
      "target": 3,
      "value": 52
    },
    {
      "source": 3,
      "target": 2,
      "value": 71
    },
    {
      "source": 4,
      "target": 3,
      "value": 24
    },
    {
      "source": 4,
      "target": 5,
      "value": 13
    },
    {
      "source": 5,
      "target": 2,
      "value": 25
    },
    {
      "source": 0,
      "target": 5,
      "value": 20
    },
    {
      "source": 5,
      "target": 6,
      "value": 8
    },
    {
      "source": 1,
      "target": 7,
      "value": 16
    },
    {
      "source": 3,
      "target": 7,
      "value": 5
    },
    {
      "source": 4,
      "target": 1,
      "value": 10
    }
  ],
  "scoreTrend": [
    {
      "date": "2026-07-20",
      "scorePromedio": 44,
      "leads": 52
    },
    {
      "date": "2026-07-21",
      "scorePromedio": 46,
      "leads": 60
    },
    {
      "date": "2026-07-22",
      "scorePromedio": 44,
      "leads": 46
    },
    {
      "date": "2026-07-23",
      "scorePromedio": 45,
      "leads": 42
    }
  ],
  "priorityMatrix": [
    {
      "id": "LEAD-1000",
      "nombre": "Camilo Rojas Castro",
      "capacidad": 15,
      "intencion": 48,
      "total": 34,
      "temperatura": "Cold",
      "proyecto": "INARI"
    },
    {
      "id": "LEAD-1001",
      "nombre": "Daniela Mora Reyes",
      "capacidad": 9,
      "intencion": 65,
      "total": 44,
      "temperatura": "Warm",
      "proyecto": "Samán"
    },
    {
      "id": "LEAD-1002",
      "nombre": "Ana Rincón Mora",
      "capacidad": 24,
      "intencion": 67,
      "total": 51,
      "temperatura": "Warm",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1003",
      "nombre": "Santiago Rojas Vargas",
      "capacidad": 14,
      "intencion": 70,
      "total": 49,
      "temperatura": "Warm",
      "proyecto": "Samán"
    },
    {
      "id": "LEAD-1004",
      "nombre": "Miguel Ortiz Moreno",
      "capacidad": 6,
      "intencion": 75,
      "total": 41,
      "temperatura": "Cold",
      "proyecto": "Samán"
    },
    {
      "id": "LEAD-1005",
      "nombre": "Sebastián Pineda Díaz",
      "capacidad": 26,
      "intencion": 63,
      "total": 42,
      "temperatura": "Cold",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1006",
      "nombre": "Paola Cruz Rincón",
      "capacidad": 18,
      "intencion": 52,
      "total": 41,
      "temperatura": "Cold",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1007",
      "nombre": "Alejandro González Ríos",
      "capacidad": 23,
      "intencion": 44,
      "total": 33,
      "temperatura": "Cold",
      "proyecto": "Pamplona I"
    },
    {
      "id": "LEAD-1008",
      "nombre": "Ángela Reyes Castro",
      "capacidad": 54,
      "intencion": 59,
      "total": 54,
      "temperatura": "Hot",
      "proyecto": "Versalles"
    },
    {
      "id": "LEAD-1009",
      "nombre": "Valentina Moreno Rincón",
      "capacidad": 25,
      "intencion": 68,
      "total": 46,
      "temperatura": "Warm",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1010",
      "nombre": "Camila Hernández Jiménez",
      "capacidad": 25,
      "intencion": 48,
      "total": 33,
      "temperatura": "Cold",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1011",
      "nombre": "Juan Hernández Ospina",
      "capacidad": 6,
      "intencion": 59,
      "total": 37,
      "temperatura": "Cold",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1012",
      "nombre": "Javier Romero Ruiz",
      "capacidad": 39,
      "intencion": 76,
      "total": 56,
      "temperatura": "Hot",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1013",
      "nombre": "Yolanda Cárdenas Cárdenas",
      "capacidad": 21,
      "intencion": 53,
      "total": 42,
      "temperatura": "Cold",
      "proyecto": "Pamplona I"
    },
    {
      "id": "LEAD-1014",
      "nombre": "Adriana Herrera Vargas",
      "capacidad": 23,
      "intencion": 90,
      "total": 60,
      "temperatura": "Hot",
      "proyecto": "Verde Esperanza El Dorado"
    },
    {
      "id": "LEAD-1015",
      "nombre": "Santiago Cárdenas Gómez",
      "capacidad": 27,
      "intencion": 70,
      "total": 54,
      "temperatura": "Hot",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1016",
      "nombre": "Héctor Moreno Ruiz",
      "capacidad": 24,
      "intencion": 64,
      "total": 49,
      "temperatura": "Warm",
      "proyecto": "Versalles"
    },
    {
      "id": "LEAD-1017",
      "nombre": "Daniel Ruiz Suárez",
      "capacidad": 9,
      "intencion": 71,
      "total": 42,
      "temperatura": "Cold",
      "proyecto": "Araucaria"
    },
    {
      "id": "LEAD-1018",
      "nombre": "Juan García Álvarez",
      "capacidad": 22,
      "intencion": 71,
      "total": 47,
      "temperatura": "Warm",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1019",
      "nombre": "Diana Acosta Ortiz",
      "capacidad": 6,
      "intencion": 43,
      "total": 27,
      "temperatura": "Cold",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1020",
      "nombre": "Santiago Cárdenas Gómez",
      "capacidad": 24,
      "intencion": 67,
      "total": 43,
      "temperatura": "Warm",
      "proyecto": "Versalles"
    },
    {
      "id": "LEAD-1021",
      "nombre": "Javier Gómez Romero",
      "capacidad": 4,
      "intencion": 46,
      "total": 33,
      "temperatura": "Cold",
      "proyecto": "Pamplona I"
    },
    {
      "id": "LEAD-1022",
      "nombre": "Yolanda Rojas Sánchez",
      "capacidad": 28,
      "intencion": 76,
      "total": 58,
      "temperatura": "Hot",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1023",
      "nombre": "Andrés Torres Pardo",
      "capacidad": 34,
      "intencion": 62,
      "total": 44,
      "temperatura": "Warm",
      "proyecto": "La Macarena"
    },
    {
      "id": "LEAD-1024",
      "nombre": "Mónica Ospina Castro",
      "capacidad": 21,
      "intencion": 75,
      "total": 52,
      "temperatura": "Warm",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1025",
      "nombre": "Paola Ospina Mora",
      "capacidad": 8,
      "intencion": 75,
      "total": 43,
      "temperatura": "Warm",
      "proyecto": "INARI"
    },
    {
      "id": "LEAD-1026",
      "nombre": "Tatiana Herrera Rodríguez",
      "capacidad": 34,
      "intencion": 61,
      "total": 47,
      "temperatura": "Warm",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1027",
      "nombre": "Nicolás Ríos González",
      "capacidad": 12,
      "intencion": 79,
      "total": 48,
      "temperatura": "Warm",
      "proyecto": "INARI"
    },
    {
      "id": "LEAD-1028",
      "nombre": "Daniel Moreno Medina",
      "capacidad": 18,
      "intencion": 71,
      "total": 49,
      "temperatura": "Warm",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1029",
      "nombre": "Katherine Jiménez Ríos",
      "capacidad": 90,
      "intencion": 42,
      "total": 59,
      "temperatura": "Hot",
      "proyecto": "La Macarena"
    },
    {
      "id": "LEAD-1030",
      "nombre": "Diego Gutiérrez González",
      "capacidad": 55,
      "intencion": 67,
      "total": 62,
      "temperatura": "Hot",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1031",
      "nombre": "Ana Torres Díaz",
      "capacidad": 10,
      "intencion": 70,
      "total": 42,
      "temperatura": "Cold",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1032",
      "nombre": "Lina Rincón Romero",
      "capacidad": 22,
      "intencion": 74,
      "total": 53,
      "temperatura": "Warm",
      "proyecto": "INARI"
    },
    {
      "id": "LEAD-1033",
      "nombre": "Andrés Rincón Muñoz",
      "capacidad": 49,
      "intencion": 67,
      "total": 55,
      "temperatura": "Hot",
      "proyecto": "Pamplona I"
    },
    {
      "id": "LEAD-1034",
      "nombre": "Tatiana Jiménez Álvarez",
      "capacidad": 24,
      "intencion": 71,
      "total": 48,
      "temperatura": "Warm",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1035",
      "nombre": "Sofía Castillo Vargas",
      "capacidad": 22,
      "intencion": 68,
      "total": 47,
      "temperatura": "Warm",
      "proyecto": "Samán"
    },
    {
      "id": "LEAD-1036",
      "nombre": "Héctor Ospina García",
      "capacidad": 6,
      "intencion": 88,
      "total": 52,
      "temperatura": "Warm",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1037",
      "nombre": "Adriana Suárez Rojas",
      "capacidad": 55,
      "intencion": 61,
      "total": 54,
      "temperatura": "Hot",
      "proyecto": "La Macarena"
    },
    {
      "id": "LEAD-1038",
      "nombre": "Lorena López Rojas",
      "capacidad": 38,
      "intencion": 78,
      "total": 57,
      "temperatura": "Hot",
      "proyecto": "La Macarena"
    },
    {
      "id": "LEAD-1039",
      "nombre": "Hernán Pardo Acosta",
      "capacidad": 15,
      "intencion": 72,
      "total": 47,
      "temperatura": "Warm",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1040",
      "nombre": "Fernando Ospina Ruiz",
      "capacidad": 14,
      "intencion": 51,
      "total": 36,
      "temperatura": "Cold",
      "proyecto": "Versalles"
    },
    {
      "id": "LEAD-1041",
      "nombre": "Mauricio Moreno Suárez",
      "capacidad": 99,
      "intencion": 70,
      "total": 80,
      "temperatura": "Hot",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1042",
      "nombre": "Mónica Peña Ruiz",
      "capacidad": 20,
      "intencion": 52,
      "total": 38,
      "temperatura": "Cold",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1043",
      "nombre": "Mónica Ríos Mora",
      "capacidad": 99,
      "intencion": 68,
      "total": 78,
      "temperatura": "Hot",
      "proyecto": "Samán"
    },
    {
      "id": "LEAD-1044",
      "nombre": "Sandra Delgado Medina",
      "capacidad": 10,
      "intencion": 58,
      "total": 37,
      "temperatura": "Cold",
      "proyecto": "Reserva de Guayacán"
    },
    {
      "id": "LEAD-1045",
      "nombre": "Tatiana Medina Rojas",
      "capacidad": 6,
      "intencion": 77,
      "total": 45,
      "temperatura": "Warm",
      "proyecto": "Samán"
    },
    {
      "id": "LEAD-1046",
      "nombre": "Marcela Hernández Delgado",
      "capacidad": 49,
      "intencion": 66,
      "total": 61,
      "temperatura": "Hot",
      "proyecto": "Versalles"
    },
    {
      "id": "LEAD-1047",
      "nombre": "Camilo Rodríguez Ruiz",
      "capacidad": 24,
      "intencion": 76,
      "total": 55,
      "temperatura": "Hot",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1048",
      "nombre": "Adriana Ríos Torres",
      "capacidad": 9,
      "intencion": 59,
      "total": 41,
      "temperatura": "Cold",
      "proyecto": "Araucaria"
    },
    {
      "id": "LEAD-1049",
      "nombre": "Tatiana Reyes Moreno",
      "capacidad": 18,
      "intencion": 59,
      "total": 43,
      "temperatura": "Warm",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1050",
      "nombre": "Paola Rodríguez Hernández",
      "capacidad": 22,
      "intencion": 47,
      "total": 37,
      "temperatura": "Cold",
      "proyecto": "Araucaria"
    },
    {
      "id": "LEAD-1051",
      "nombre": "Johana Romero Acosta",
      "capacidad": 9,
      "intencion": 67,
      "total": 39,
      "temperatura": "Cold",
      "proyecto": "Versalles"
    },
    {
      "id": "LEAD-1052",
      "nombre": "Mauricio Moreno Suárez",
      "capacidad": 99,
      "intencion": 70,
      "total": 75,
      "temperatura": "Hot",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1053",
      "nombre": "Javier Romero Ruiz",
      "capacidad": 28,
      "intencion": 53,
      "total": 40,
      "temperatura": "Cold",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1054",
      "nombre": "Yolanda Cárdenas Cárdenas",
      "capacidad": 20,
      "intencion": 60,
      "total": 45,
      "temperatura": "Warm",
      "proyecto": "Pamplona I"
    },
    {
      "id": "LEAD-1055",
      "nombre": "David Muñoz Ruiz",
      "capacidad": 25,
      "intencion": 41,
      "total": 32,
      "temperatura": "Cold",
      "proyecto": "Verde Esperanza El Dorado"
    },
    {
      "id": "LEAD-1056",
      "nombre": "Camila López Cárdenas",
      "capacidad": 14,
      "intencion": 42,
      "total": 28,
      "temperatura": "Cold",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1057",
      "nombre": "Germán González Castillo",
      "capacidad": 30,
      "intencion": 80,
      "total": 52,
      "temperatura": "Warm",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1058",
      "nombre": "Claudia Rodríguez Rincón",
      "capacidad": 5,
      "intencion": 64,
      "total": 43,
      "temperatura": "Warm",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1059",
      "nombre": "Claudia Torres García",
      "capacidad": 21,
      "intencion": 54,
      "total": 39,
      "temperatura": "Cold",
      "proyecto": "Bosque de Arrayán"
    },
    {
      "id": "LEAD-1060",
      "nombre": "Diana Pineda González",
      "capacidad": 22,
      "intencion": 44,
      "total": 32,
      "temperatura": "Cold",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1061",
      "nombre": "José Moreno Díaz",
      "capacidad": 19,
      "intencion": 71,
      "total": 49,
      "temperatura": "Warm",
      "proyecto": "Versalles"
    },
    {
      "id": "LEAD-1062",
      "nombre": "Fernando Reyes Sánchez",
      "capacidad": 5,
      "intencion": 68,
      "total": 37,
      "temperatura": "Cold",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1063",
      "nombre": "Andrés Moreno Herrera",
      "capacidad": 15,
      "intencion": 79,
      "total": 48,
      "temperatura": "Warm",
      "proyecto": "Versalles"
    },
    {
      "id": "LEAD-1064",
      "nombre": "Lina Cárdenas Pardo",
      "capacidad": 24,
      "intencion": 55,
      "total": 39,
      "temperatura": "Cold",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1065",
      "nombre": "Lina Muñoz Vargas",
      "capacidad": 27,
      "intencion": 54,
      "total": 40,
      "temperatura": "Cold",
      "proyecto": "INARI"
    },
    {
      "id": "LEAD-1066",
      "nombre": "Juliana Díaz Herrera",
      "capacidad": 27,
      "intencion": 74,
      "total": 54,
      "temperatura": "Hot",
      "proyecto": "Reserva de Guayacán"
    },
    {
      "id": "LEAD-1067",
      "nombre": "Martha Salazar López",
      "capacidad": 4,
      "intencion": 56,
      "total": 35,
      "temperatura": "Cold",
      "proyecto": "Araucaria"
    },
    {
      "id": "LEAD-1068",
      "nombre": "Carlos Rojas Martínez",
      "capacidad": 33,
      "intencion": 70,
      "total": 58,
      "temperatura": "Hot",
      "proyecto": "La Macarena"
    },
    {
      "id": "LEAD-1069",
      "nombre": "Cristian Delgado Gutiérrez",
      "capacidad": 24,
      "intencion": 71,
      "total": 50,
      "temperatura": "Warm",
      "proyecto": "Samán"
    },
    {
      "id": "LEAD-1070",
      "nombre": "Patricia Díaz Jiménez",
      "capacidad": 19,
      "intencion": 58,
      "total": 43,
      "temperatura": "Warm",
      "proyecto": "Reserva de Guayacán"
    },
    {
      "id": "LEAD-1071",
      "nombre": "Miguel Sánchez Muñoz",
      "capacidad": 5,
      "intencion": 70,
      "total": 40,
      "temperatura": "Cold",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1072",
      "nombre": "Milena Mora Bernal",
      "capacidad": 19,
      "intencion": 65,
      "total": 40,
      "temperatura": "Cold",
      "proyecto": "Araucaria"
    },
    {
      "id": "LEAD-1073",
      "nombre": "Alejandro Salazar Torres",
      "capacidad": 56,
      "intencion": 65,
      "total": 62,
      "temperatura": "Hot",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1074",
      "nombre": "Luis Moreno Salazar",
      "capacidad": 22,
      "intencion": 63,
      "total": 47,
      "temperatura": "Warm",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1075",
      "nombre": "Julián Mora Ruiz",
      "capacidad": 31,
      "intencion": 78,
      "total": 56,
      "temperatura": "Hot",
      "proyecto": "La Macarena"
    },
    {
      "id": "LEAD-1076",
      "nombre": "Alejandro Ortiz García",
      "capacidad": 39,
      "intencion": 70,
      "total": 54,
      "temperatura": "Hot",
      "proyecto": "Verde Esperanza El Dorado"
    },
    {
      "id": "LEAD-1077",
      "nombre": "Diana Pineda González",
      "capacidad": 19,
      "intencion": 69,
      "total": 49,
      "temperatura": "Warm",
      "proyecto": "Versalles"
    },
    {
      "id": "LEAD-1078",
      "nombre": "Natalia Ramírez Pardo",
      "capacidad": 65,
      "intencion": 58,
      "total": 62,
      "temperatura": "Hot",
      "proyecto": "La Macarena"
    },
    {
      "id": "LEAD-1079",
      "nombre": "Diego Rincón Peña",
      "capacidad": 26,
      "intencion": 73,
      "total": 52,
      "temperatura": "Warm",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1080",
      "nombre": "Julián Ortiz Gómez",
      "capacidad": 20,
      "intencion": 93,
      "total": 55,
      "temperatura": "Hot",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1081",
      "nombre": "Juan Gómez Ramírez",
      "capacidad": 23,
      "intencion": 61,
      "total": 44,
      "temperatura": "Warm",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1082",
      "nombre": "Pedro Ramírez Romero",
      "capacidad": 9,
      "intencion": 64,
      "total": 40,
      "temperatura": "Cold",
      "proyecto": "Pamplona I"
    },
    {
      "id": "LEAD-1083",
      "nombre": "Fabián Castro Suárez",
      "capacidad": 21,
      "intencion": 63,
      "total": 42,
      "temperatura": "Cold",
      "proyecto": "Reserva de Guayacán"
    },
    {
      "id": "LEAD-1084",
      "nombre": "Katherine Pardo Díaz",
      "capacidad": 7,
      "intencion": 56,
      "total": 32,
      "temperatura": "Cold",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1085",
      "nombre": "Viviana Pardo Pineda",
      "capacidad": 19,
      "intencion": 43,
      "total": 34,
      "temperatura": "Cold",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1086",
      "nombre": "Diego Jiménez Torres",
      "capacidad": 20,
      "intencion": 64,
      "total": 47,
      "temperatura": "Warm",
      "proyecto": "Bosque de Arrayán"
    },
    {
      "id": "LEAD-1087",
      "nombre": "Julián Romero López",
      "capacidad": 25,
      "intencion": 84,
      "total": 56,
      "temperatura": "Hot",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1088",
      "nombre": "Adriana Pardo Salazar",
      "capacidad": 41,
      "intencion": 77,
      "total": 61,
      "temperatura": "Hot",
      "proyecto": "Verde Esperanza El Dorado"
    },
    {
      "id": "LEAD-1089",
      "nombre": "Lina Cárdenas Pardo",
      "capacidad": 22,
      "intencion": 53,
      "total": 37,
      "temperatura": "Cold",
      "proyecto": "Pamplona I"
    },
    {
      "id": "LEAD-1090",
      "nombre": "Germán Hernández Ríos",
      "capacidad": 24,
      "intencion": 56,
      "total": 40,
      "temperatura": "Cold",
      "proyecto": "Verde Esperanza El Dorado"
    },
    {
      "id": "LEAD-1091",
      "nombre": "Andrés Peña Romero",
      "capacidad": 23,
      "intencion": 64,
      "total": 47,
      "temperatura": "Warm",
      "proyecto": "Verde Esperanza El Dorado"
    },
    {
      "id": "LEAD-1092",
      "nombre": "Javier Sánchez Vargas",
      "capacidad": 18,
      "intencion": 78,
      "total": 50,
      "temperatura": "Warm",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1093",
      "nombre": "Diana Castro Álvarez",
      "capacidad": 12,
      "intencion": 65,
      "total": 44,
      "temperatura": "Warm",
      "proyecto": "Versalles"
    },
    {
      "id": "LEAD-1094",
      "nombre": "Laura García Rincón",
      "capacidad": 20,
      "intencion": 54,
      "total": 41,
      "temperatura": "Cold",
      "proyecto": "Verde Esperanza El Dorado"
    },
    {
      "id": "LEAD-1095",
      "nombre": "Laura Díaz Pineda",
      "capacidad": 22,
      "intencion": 76,
      "total": 48,
      "temperatura": "Warm",
      "proyecto": "Pamplona I"
    },
    {
      "id": "LEAD-1096",
      "nombre": "Juan Gómez Gutiérrez",
      "capacidad": 4,
      "intencion": 68,
      "total": 39,
      "temperatura": "Cold",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1097",
      "nombre": "Johana Suárez Rojas",
      "capacidad": 22,
      "intencion": 79,
      "total": 53,
      "temperatura": "Warm",
      "proyecto": "Araucaria"
    },
    {
      "id": "LEAD-1098",
      "nombre": "Carolina Gómez Moreno",
      "capacidad": 25,
      "intencion": 78,
      "total": 48,
      "temperatura": "Warm",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1099",
      "nombre": "Lorena Gómez Bernal",
      "capacidad": 20,
      "intencion": 75,
      "total": 49,
      "temperatura": "Warm",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1100",
      "nombre": "Ana Torres Álvarez",
      "capacidad": 29,
      "intencion": 75,
      "total": 49,
      "temperatura": "Warm",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1101",
      "nombre": "Ángela Reyes Castro",
      "capacidad": 19,
      "intencion": 72,
      "total": 49,
      "temperatura": "Warm",
      "proyecto": "Araucaria"
    },
    {
      "id": "LEAD-1102",
      "nombre": "Andrés Romero Reyes",
      "capacidad": 20,
      "intencion": 76,
      "total": 53,
      "temperatura": "Warm",
      "proyecto": "Reserva de Guayacán"
    },
    {
      "id": "LEAD-1103",
      "nombre": "William Pardo Pineda",
      "capacidad": 41,
      "intencion": 75,
      "total": 59,
      "temperatura": "Hot",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1104",
      "nombre": "Yolanda Bernal Torres",
      "capacidad": 39,
      "intencion": 58,
      "total": 49,
      "temperatura": "Warm",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1105",
      "nombre": "María Vargas Moreno",
      "capacidad": 11,
      "intencion": 63,
      "total": 43,
      "temperatura": "Warm",
      "proyecto": "Samán"
    },
    {
      "id": "LEAD-1106",
      "nombre": "Carlos Rojas Martínez",
      "capacidad": 26,
      "intencion": 54,
      "total": 40,
      "temperatura": "Cold",
      "proyecto": "Verde Esperanza El Dorado"
    },
    {
      "id": "LEAD-1107",
      "nombre": "Diana Pineda González",
      "capacidad": 28,
      "intencion": 56,
      "total": 39,
      "temperatura": "Cold",
      "proyecto": "INARI"
    },
    {
      "id": "LEAD-1108",
      "nombre": "Daniel López Vargas",
      "capacidad": 22,
      "intencion": 56,
      "total": 42,
      "temperatura": "Cold",
      "proyecto": "Verde Esperanza El Dorado"
    },
    {
      "id": "LEAD-1109",
      "nombre": "Diana Hernández Bernal",
      "capacidad": 17,
      "intencion": 70,
      "total": 43,
      "temperatura": "Warm",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1110",
      "nombre": "Lorena Ruiz Castillo",
      "capacidad": 24,
      "intencion": 42,
      "total": 33,
      "temperatura": "Cold",
      "proyecto": "Versalles"
    },
    {
      "id": "LEAD-1111",
      "nombre": "David Jiménez Peña",
      "capacidad": 19,
      "intencion": 83,
      "total": 57,
      "temperatura": "Hot",
      "proyecto": "Verde Esperanza El Dorado"
    },
    {
      "id": "LEAD-1112",
      "nombre": "Sofía Muñoz Hernández",
      "capacidad": 19,
      "intencion": 56,
      "total": 37,
      "temperatura": "Cold",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1113",
      "nombre": "Fernanda Rojas González",
      "capacidad": 48,
      "intencion": 83,
      "total": 63,
      "temperatura": "Hot",
      "proyecto": "La Macarena"
    },
    {
      "id": "LEAD-1114",
      "nombre": "Carlos Gutiérrez Hernández",
      "capacidad": 16,
      "intencion": 66,
      "total": 45,
      "temperatura": "Warm",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1115",
      "nombre": "Patricia Bernal Hernández",
      "capacidad": 12,
      "intencion": 55,
      "total": 39,
      "temperatura": "Cold",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1116",
      "nombre": "Yolanda Ortiz Bernal",
      "capacidad": 8,
      "intencion": 43,
      "total": 25,
      "temperatura": "Cold",
      "proyecto": "Samán"
    },
    {
      "id": "LEAD-1117",
      "nombre": "Paola Ortiz Castillo",
      "capacidad": 99,
      "intencion": 43,
      "total": 64,
      "temperatura": "Hot",
      "proyecto": "La Macarena"
    },
    {
      "id": "LEAD-1118",
      "nombre": "Johana Díaz Romero",
      "capacidad": 70,
      "intencion": 48,
      "total": 56,
      "temperatura": "Hot",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1119",
      "nombre": "Diego Rodríguez Rincón",
      "capacidad": 18,
      "intencion": 45,
      "total": 33,
      "temperatura": "Cold",
      "proyecto": "INARI"
    },
    {
      "id": "LEAD-1120",
      "nombre": "Lorena Gómez Reyes",
      "capacidad": 19,
      "intencion": 45,
      "total": 31,
      "temperatura": "Cold",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1121",
      "nombre": "Tatiana Reyes Moreno",
      "capacidad": 24,
      "intencion": 59,
      "total": 42,
      "temperatura": "Cold",
      "proyecto": "INARI"
    },
    {
      "id": "LEAD-1122",
      "nombre": "Daniela Delgado Muñoz",
      "capacidad": 13,
      "intencion": 56,
      "total": 34,
      "temperatura": "Cold",
      "proyecto": "Reserva de Guayacán"
    },
    {
      "id": "LEAD-1123",
      "nombre": "Katherine Medina Castillo",
      "capacidad": 27,
      "intencion": 47,
      "total": 36,
      "temperatura": "Cold",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1124",
      "nombre": "Camilo Álvarez Ortiz",
      "capacidad": 4,
      "intencion": 76,
      "total": 48,
      "temperatura": "Warm",
      "proyecto": "Reserva de Guayacán"
    },
    {
      "id": "LEAD-1125",
      "nombre": "Yolanda Ruiz Rodríguez",
      "capacidad": 24,
      "intencion": 78,
      "total": 49,
      "temperatura": "Warm",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1126",
      "nombre": "Ana Rincón Bernal",
      "capacidad": 20,
      "intencion": 64,
      "total": 48,
      "temperatura": "Warm",
      "proyecto": "Araucaria"
    },
    {
      "id": "LEAD-1127",
      "nombre": "Lorena Delgado Salazar",
      "capacidad": 22,
      "intencion": 41,
      "total": 31,
      "temperatura": "Cold",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1128",
      "nombre": "Lina Acosta Mora",
      "capacidad": 16,
      "intencion": 56,
      "total": 40,
      "temperatura": "Cold",
      "proyecto": "Araucaria"
    },
    {
      "id": "LEAD-1129",
      "nombre": "Tatiana Reyes Moreno",
      "capacidad": 21,
      "intencion": 49,
      "total": 34,
      "temperatura": "Cold",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1130",
      "nombre": "Paola Acosta Cárdenas",
      "capacidad": 19,
      "intencion": 70,
      "total": 44,
      "temperatura": "Warm",
      "proyecto": "Verde Esperanza El Dorado"
    },
    {
      "id": "LEAD-1131",
      "nombre": "Hernán Medina Vargas",
      "capacidad": 17,
      "intencion": 67,
      "total": 47,
      "temperatura": "Warm",
      "proyecto": "Bosque de Arrayán"
    },
    {
      "id": "LEAD-1132",
      "nombre": "Carolina Vargas Suárez",
      "capacidad": 20,
      "intencion": 55,
      "total": 41,
      "temperatura": "Cold",
      "proyecto": "Verde Esperanza El Dorado"
    },
    {
      "id": "LEAD-1133",
      "nombre": "Alejandro Ortiz García",
      "capacidad": 37,
      "intencion": 62,
      "total": 47,
      "temperatura": "Warm",
      "proyecto": "La Macarena"
    },
    {
      "id": "LEAD-1134",
      "nombre": "Cristian Castro Acosta",
      "capacidad": 26,
      "intencion": 48,
      "total": 39,
      "temperatura": "Cold",
      "proyecto": "Bosque de Arrayán"
    },
    {
      "id": "LEAD-1135",
      "nombre": "Fabián Gutiérrez Martínez",
      "capacidad": 13,
      "intencion": 74,
      "total": 51,
      "temperatura": "Warm",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1136",
      "nombre": "Ricardo Castro Castro",
      "capacidad": 25,
      "intencion": 46,
      "total": 34,
      "temperatura": "Cold",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1137",
      "nombre": "Julián López Herrera",
      "capacidad": 27,
      "intencion": 72,
      "total": 47,
      "temperatura": "Warm",
      "proyecto": "La Macarena"
    },
    {
      "id": "LEAD-1138",
      "nombre": "Mónica Ospina Castro",
      "capacidad": 48,
      "intencion": 67,
      "total": 57,
      "temperatura": "Hot",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1139",
      "nombre": "Juan Gómez Ramírez",
      "capacidad": 19,
      "intencion": 50,
      "total": 39,
      "temperatura": "Cold",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1140",
      "nombre": "Sofía Castillo Vargas",
      "capacidad": 39,
      "intencion": 79,
      "total": 61,
      "temperatura": "Hot",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1141",
      "nombre": "Fabián Rincón Reyes",
      "capacidad": 21,
      "intencion": 68,
      "total": 44,
      "temperatura": "Warm",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1142",
      "nombre": "William Bernal Castro",
      "capacidad": 10,
      "intencion": 76,
      "total": 45,
      "temperatura": "Warm",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1143",
      "nombre": "Sebastián Álvarez García",
      "capacidad": 21,
      "intencion": 76,
      "total": 53,
      "temperatura": "Warm",
      "proyecto": "Pamplona I"
    },
    {
      "id": "LEAD-1144",
      "nombre": "Héctor Salazar López",
      "capacidad": 8,
      "intencion": 67,
      "total": 38,
      "temperatura": "Cold",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1145",
      "nombre": "Javier Reyes Castillo",
      "capacidad": 19,
      "intencion": 62,
      "total": 42,
      "temperatura": "Cold",
      "proyecto": "INARI"
    },
    {
      "id": "LEAD-1146",
      "nombre": "Luis Díaz Álvarez",
      "capacidad": 19,
      "intencion": 57,
      "total": 39,
      "temperatura": "Cold",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1147",
      "nombre": "Tatiana Torres Castillo",
      "capacidad": 17,
      "intencion": 64,
      "total": 44,
      "temperatura": "Warm",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1148",
      "nombre": "Sofía Torres González",
      "capacidad": 18,
      "intencion": 66,
      "total": 47,
      "temperatura": "Warm",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1149",
      "nombre": "Javier Reyes González",
      "capacidad": 34,
      "intencion": 66,
      "total": 47,
      "temperatura": "Warm",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1150",
      "nombre": "Hernán López Peña",
      "capacidad": 8,
      "intencion": 47,
      "total": 28,
      "temperatura": "Cold",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1151",
      "nombre": "Paola Hernández Suárez",
      "capacidad": 24,
      "intencion": 77,
      "total": 53,
      "temperatura": "Warm",
      "proyecto": "Araucaria"
    },
    {
      "id": "LEAD-1152",
      "nombre": "Camilo Salazar López",
      "capacidad": 15,
      "intencion": 60,
      "total": 38,
      "temperatura": "Cold",
      "proyecto": "Reserva de Guayacán"
    },
    {
      "id": "LEAD-1153",
      "nombre": "Daniela Medina Herrera",
      "capacidad": 55,
      "intencion": 63,
      "total": 60,
      "temperatura": "Hot",
      "proyecto": "La Macarena"
    },
    {
      "id": "LEAD-1154",
      "nombre": "Johana Rodríguez Martínez",
      "capacidad": 17,
      "intencion": 57,
      "total": 39,
      "temperatura": "Cold",
      "proyecto": "Verde Esperanza El Dorado"
    },
    {
      "id": "LEAD-1155",
      "nombre": "Lorena Acosta Herrera",
      "capacidad": 13,
      "intencion": 44,
      "total": 31,
      "temperatura": "Cold",
      "proyecto": "Araucaria"
    },
    {
      "id": "LEAD-1156",
      "nombre": "Héctor Jiménez Bernal",
      "capacidad": 19,
      "intencion": 76,
      "total": 52,
      "temperatura": "Warm",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1157",
      "nombre": "Milena Castro Romero",
      "capacidad": 21,
      "intencion": 68,
      "total": 48,
      "temperatura": "Warm",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1158",
      "nombre": "Julián Ramírez Ríos",
      "capacidad": 23,
      "intencion": 67,
      "total": 42,
      "temperatura": "Cold",
      "proyecto": "Verde Esperanza El Dorado"
    },
    {
      "id": "LEAD-1159",
      "nombre": "David Peña Salazar",
      "capacidad": 11,
      "intencion": 82,
      "total": 50,
      "temperatura": "Warm",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1160",
      "nombre": "Javier Reyes González",
      "capacidad": 37,
      "intencion": 57,
      "total": 46,
      "temperatura": "Warm",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1161",
      "nombre": "Sandra Ruiz Acosta",
      "capacidad": 6,
      "intencion": 60,
      "total": 36,
      "temperatura": "Cold",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1162",
      "nombre": "Marcela Gutiérrez Peña",
      "capacidad": 19,
      "intencion": 71,
      "total": 48,
      "temperatura": "Warm",
      "proyecto": "Pamplona I"
    },
    {
      "id": "LEAD-1163",
      "nombre": "Milena Cárdenas Ortiz",
      "capacidad": 23,
      "intencion": 65,
      "total": 41,
      "temperatura": "Cold",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1164",
      "nombre": "Carlos Jiménez Suárez",
      "capacidad": 20,
      "intencion": 65,
      "total": 41,
      "temperatura": "Cold",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1165",
      "nombre": "Andrés Castro Bernal",
      "capacidad": 17,
      "intencion": 68,
      "total": 44,
      "temperatura": "Warm",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1166",
      "nombre": "Fernando Castillo Pineda",
      "capacidad": 15,
      "intencion": 55,
      "total": 39,
      "temperatura": "Cold",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1167",
      "nombre": "Fabián Cruz Muñoz",
      "capacidad": 27,
      "intencion": 52,
      "total": 36,
      "temperatura": "Cold",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1168",
      "nombre": "Fabián Mora Herrera",
      "capacidad": 11,
      "intencion": 51,
      "total": 31,
      "temperatura": "Cold",
      "proyecto": "Samán"
    },
    {
      "id": "LEAD-1169",
      "nombre": "Daniela Ruiz Castro",
      "capacidad": 28,
      "intencion": 40,
      "total": 37,
      "temperatura": "Cold",
      "proyecto": "Pamplona I"
    },
    {
      "id": "LEAD-1170",
      "nombre": "Andrés Rincón Gómez",
      "capacidad": 35,
      "intencion": 48,
      "total": 43,
      "temperatura": "Warm",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1171",
      "nombre": "Eduardo Jiménez Ruiz",
      "capacidad": 4,
      "intencion": 76,
      "total": 41,
      "temperatura": "Cold",
      "proyecto": "Versalles"
    },
    {
      "id": "LEAD-1172",
      "nombre": "Paola Rodríguez Hernández",
      "capacidad": 16,
      "intencion": 53,
      "total": 37,
      "temperatura": "Cold",
      "proyecto": "Reserva de Guayacán"
    },
    {
      "id": "LEAD-1173",
      "nombre": "Laura Moreno Acosta",
      "capacidad": 14,
      "intencion": 63,
      "total": 43,
      "temperatura": "Warm",
      "proyecto": "Araucaria"
    },
    {
      "id": "LEAD-1174",
      "nombre": "Nicolás Acosta López",
      "capacidad": 18,
      "intencion": 75,
      "total": 46,
      "temperatura": "Warm",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1175",
      "nombre": "Yolanda Peña Castro",
      "capacidad": 24,
      "intencion": 49,
      "total": 34,
      "temperatura": "Cold",
      "proyecto": "INARI"
    },
    {
      "id": "LEAD-1176",
      "nombre": "Ricardo Cárdenas Bernal",
      "capacidad": 17,
      "intencion": 60,
      "total": 41,
      "temperatura": "Cold",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1177",
      "nombre": "Cristian Álvarez Peña",
      "capacidad": 10,
      "intencion": 58,
      "total": 40,
      "temperatura": "Cold",
      "proyecto": "Los Nogales"
    },
    {
      "id": "LEAD-1178",
      "nombre": "Fernanda Romero García",
      "capacidad": 4,
      "intencion": 54,
      "total": 29,
      "temperatura": "Cold",
      "proyecto": "Versalles"
    },
    {
      "id": "LEAD-1179",
      "nombre": "Ana Romero Ospina",
      "capacidad": 22,
      "intencion": 42,
      "total": 33,
      "temperatura": "Cold",
      "proyecto": "La Macarena"
    },
    {
      "id": "LEAD-1180",
      "nombre": "Sandra Cárdenas Gutiérrez",
      "capacidad": 20,
      "intencion": 52,
      "total": 35,
      "temperatura": "Cold",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1181",
      "nombre": "Valentina Ramírez Ríos",
      "capacidad": 19,
      "intencion": 53,
      "total": 36,
      "temperatura": "Cold",
      "proyecto": "Verde Esperanza El Dorado"
    },
    {
      "id": "LEAD-1182",
      "nombre": "Fernando Ramírez Cruz",
      "capacidad": 17,
      "intencion": 55,
      "total": 38,
      "temperatura": "Cold",
      "proyecto": "Karakalí"
    },
    {
      "id": "LEAD-1183",
      "nombre": "Felipe Rojas Delgado",
      "capacidad": 32,
      "intencion": 52,
      "total": 40,
      "temperatura": "Cold",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1184",
      "nombre": "Yolanda Suárez Delgado",
      "capacidad": 21,
      "intencion": 66,
      "total": 43,
      "temperatura": "Warm",
      "proyecto": "Monguí"
    },
    {
      "id": "LEAD-1185",
      "nombre": "Santiago Rodríguez Hernández",
      "capacidad": 24,
      "intencion": 57,
      "total": 40,
      "temperatura": "Cold",
      "proyecto": "Araucaria"
    },
    {
      "id": "LEAD-1186",
      "nombre": "Sandra Hernández Cárdenas",
      "capacidad": 20,
      "intencion": 93,
      "total": 58,
      "temperatura": "Hot",
      "proyecto": "Bosque de Arrayán"
    },
    {
      "id": "LEAD-1187",
      "nombre": "Juan Torres Medina",
      "capacidad": 6,
      "intencion": 59,
      "total": 34,
      "temperatura": "Cold",
      "proyecto": "Samán"
    },
    {
      "id": "LEAD-1188",
      "nombre": "Martha Delgado Pardo",
      "capacidad": 20,
      "intencion": 51,
      "total": 40,
      "temperatura": "Cold",
      "proyecto": "Samán"
    },
    {
      "id": "LEAD-1189",
      "nombre": "Hernán Mora Cruz",
      "capacidad": 32,
      "intencion": 66,
      "total": 51,
      "temperatura": "Warm",
      "proyecto": "Samán"
    },
    {
      "id": "LEAD-1190",
      "nombre": "Mónica Pineda Ríos",
      "capacidad": 24,
      "intencion": 54,
      "total": 41,
      "temperatura": "Cold",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1191",
      "nombre": "Claudia Moreno Bernal",
      "capacidad": 27,
      "intencion": 47,
      "total": 35,
      "temperatura": "Cold",
      "proyecto": "Pamplona I"
    },
    {
      "id": "LEAD-1192",
      "nombre": "Valentina García Medina",
      "capacidad": 30,
      "intencion": 63,
      "total": 48,
      "temperatura": "Warm",
      "proyecto": "La Macarena"
    },
    {
      "id": "LEAD-1193",
      "nombre": "Daniel Romero Reyes",
      "capacidad": 23,
      "intencion": 44,
      "total": 36,
      "temperatura": "Cold",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1194",
      "nombre": "Patricia Díaz Jiménez",
      "capacidad": 17,
      "intencion": 77,
      "total": 46,
      "temperatura": "Warm",
      "proyecto": "La Arboleda"
    },
    {
      "id": "LEAD-1195",
      "nombre": "Ricardo Castro Castro",
      "capacidad": 17,
      "intencion": 57,
      "total": 44,
      "temperatura": "Warm",
      "proyecto": "Reserva de Guayacán"
    },
    {
      "id": "LEAD-1196",
      "nombre": "Hernán Medina Vargas",
      "capacidad": 20,
      "intencion": 60,
      "total": 42,
      "temperatura": "Cold",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1197",
      "nombre": "Valentina González Muñoz",
      "capacidad": 10,
      "intencion": 50,
      "total": 33,
      "temperatura": "Cold",
      "proyecto": "INARI"
    },
    {
      "id": "LEAD-1198",
      "nombre": "Pedro Suárez Medina",
      "capacidad": 5,
      "intencion": 64,
      "total": 35,
      "temperatura": "Cold",
      "proyecto": "Bosque de Turpial"
    },
    {
      "id": "LEAD-1199",
      "nombre": "Laura Peña Romero",
      "capacidad": 15,
      "intencion": 76,
      "total": 52,
      "temperatura": "Warm",
      "proyecto": "Samán"
    }
  ],
  "topLeadsRanking": [
    {
      "id": "LEAD-1041",
      "nombre": "Mauricio Moreno Suárez",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T09:57:00-05:00",
      "capacidad": 99,
      "intencion": 70,
      "engagement": 61,
      "conversion": 85,
      "total": 80,
      "temperatura": "Hot",
      "status": "Ganado",
      "nextBestAction": "Activar postventa y seguro todo riesgo",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-25"
        },
        {
          "key": "cierre",
          "label": "Promesa de compraventa firmada",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 46
        },
        {
          "date": "2026-07-22",
          "score": 54
        },
        {
          "date": "2026-07-22",
          "score": 57
        },
        {
          "date": "2026-07-23",
          "score": 66
        },
        {
          "date": "2026-07-24",
          "score": 68
        },
        {
          "date": "2026-07-25",
          "score": 73
        },
        {
          "date": "2026-07-26",
          "score": 82
        }
      ]
    },
    {
      "id": "LEAD-1043",
      "nombre": "Mónica Ríos Mora",
      "fuente": "Google Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Samán",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T09:23:00-05:00",
      "capacidad": 99,
      "intencion": 68,
      "engagement": 54,
      "conversion": 84,
      "total": 78,
      "temperatura": "Hot",
      "status": "Ganado",
      "nextBestAction": "Activar postventa y seguro todo riesgo",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-25"
        },
        {
          "key": "cierre",
          "label": "Promesa de compraventa firmada",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 50
        },
        {
          "date": "2026-07-22",
          "score": 54
        },
        {
          "date": "2026-07-22",
          "score": 59
        },
        {
          "date": "2026-07-23",
          "score": 67
        },
        {
          "date": "2026-07-24",
          "score": 68
        },
        {
          "date": "2026-07-25",
          "score": 71
        },
        {
          "date": "2026-07-26",
          "score": 75
        }
      ]
    },
    {
      "id": "LEAD-1052",
      "nombre": "Mauricio Moreno Suárez",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "La Arboleda",
      "ubicacion": "Bogotá",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T16:54:00-05:00",
      "capacidad": 99,
      "intencion": 70,
      "engagement": 56,
      "conversion": 69,
      "total": 75,
      "temperatura": "Hot",
      "status": "Ganado",
      "nextBestAction": "Activar postventa y seguro todo riesgo",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-27"
        },
        {
          "key": "cierre",
          "label": "Promesa de compraventa firmada",
          "date": "2026-07-28"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 45
        },
        {
          "date": "2026-07-23",
          "score": 55
        },
        {
          "date": "2026-07-24",
          "score": 51
        },
        {
          "date": "2026-07-24",
          "score": 64
        },
        {
          "date": "2026-07-25",
          "score": 63
        },
        {
          "date": "2026-07-27",
          "score": 67
        },
        {
          "date": "2026-07-28",
          "score": 73
        }
      ]
    },
    {
      "id": "LEAD-1117",
      "nombre": "Paola Ortiz Castillo",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T13:16:00-05:00",
      "capacidad": 99,
      "intencion": 43,
      "engagement": 38,
      "conversion": 68,
      "total": 64,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 43
        },
        {
          "date": "2026-07-22",
          "score": 45
        },
        {
          "date": "2026-07-23",
          "score": 48
        },
        {
          "date": "2026-07-24",
          "score": 50
        },
        {
          "date": "2026-07-24",
          "score": 60
        },
        {
          "date": "2026-07-25",
          "score": 67
        }
      ]
    },
    {
      "id": "LEAD-1113",
      "nombre": "Fernanda Rojas González",
      "fuente": "Google Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T14:40:00-05:00",
      "capacidad": 48,
      "intencion": 83,
      "engagement": 48,
      "conversion": 66,
      "total": 63,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 37
        },
        {
          "date": "2026-07-21",
          "score": 40
        },
        {
          "date": "2026-07-22",
          "score": 50
        },
        {
          "date": "2026-07-22",
          "score": 49
        },
        {
          "date": "2026-07-24",
          "score": 58
        },
        {
          "date": "2026-07-24",
          "score": 62
        }
      ]
    },
    {
      "id": "LEAD-1030",
      "nombre": "Diego Gutiérrez González",
      "fuente": "Google Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T09:01:00-05:00",
      "capacidad": 55,
      "intencion": 67,
      "engagement": 63,
      "conversion": 65,
      "total": 62,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-22"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-24"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 43
        },
        {
          "date": "2026-07-20",
          "score": 40
        },
        {
          "date": "2026-07-21",
          "score": 52
        },
        {
          "date": "2026-07-22",
          "score": 55
        },
        {
          "date": "2026-07-24",
          "score": 61
        },
        {
          "date": "2026-07-24",
          "score": 59
        }
      ]
    },
    {
      "id": "LEAD-1073",
      "nombre": "Alejandro Salazar Torres",
      "fuente": "Google Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "Karakalí",
      "ubicacion": "Ricaurte",
      "afiliado": true,
      "fecha_ingreso": "2026-07-20T14:53:00-05:00",
      "capacidad": 56,
      "intencion": 65,
      "engagement": 63,
      "conversion": 66,
      "total": 62,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-20"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-21"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-22"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-23"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 43
        },
        {
          "date": "2026-07-20",
          "score": 39
        },
        {
          "date": "2026-07-21",
          "score": 47
        },
        {
          "date": "2026-07-21",
          "score": 52
        },
        {
          "date": "2026-07-22",
          "score": 61
        },
        {
          "date": "2026-07-23",
          "score": 59
        }
      ]
    },
    {
      "id": "LEAD-1078",
      "nombre": "Natalia Ramírez Pardo",
      "fuente": "Meta Ads",
      "utm_campaign": "familia-maipore",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T18:15:00-05:00",
      "capacidad": 65,
      "intencion": 58,
      "engagement": 57,
      "conversion": 67,
      "total": 62,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-25"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-27"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-28"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 41
        },
        {
          "date": "2026-07-24",
          "score": 47
        },
        {
          "date": "2026-07-25",
          "score": 47
        },
        {
          "date": "2026-07-25",
          "score": 50
        },
        {
          "date": "2026-07-27",
          "score": 60
        },
        {
          "date": "2026-07-28",
          "score": 65
        }
      ]
    },
    {
      "id": "LEAD-1046",
      "nombre": "Marcela Hernández Delgado",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Versalles",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T08:06:00-05:00",
      "capacidad": 49,
      "intencion": 66,
      "engagement": 64,
      "conversion": 68,
      "total": 61,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-22"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-23"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 36
        },
        {
          "date": "2026-07-21",
          "score": 41
        },
        {
          "date": "2026-07-22",
          "score": 52
        },
        {
          "date": "2026-07-23",
          "score": 53
        },
        {
          "date": "2026-07-23",
          "score": 52
        },
        {
          "date": "2026-07-25",
          "score": 58
        }
      ]
    },
    {
      "id": "LEAD-1088",
      "nombre": "Adriana Pardo Salazar",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": true,
      "fecha_ingreso": "2026-07-22T20:18:00-05:00",
      "capacidad": 41,
      "intencion": 77,
      "engagement": 61,
      "conversion": 66,
      "total": 61,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-26"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-27"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 42
        },
        {
          "date": "2026-07-23",
          "score": 47
        },
        {
          "date": "2026-07-24",
          "score": 52
        },
        {
          "date": "2026-07-25",
          "score": 54
        },
        {
          "date": "2026-07-26",
          "score": 57
        },
        {
          "date": "2026-07-27",
          "score": 58
        }
      ]
    },
    {
      "id": "LEAD-1140",
      "nombre": "Sofía Castillo Vargas",
      "fuente": "Meta Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-23T14:49:00-05:00",
      "capacidad": 39,
      "intencion": 79,
      "engagement": 67,
      "conversion": 58,
      "total": 61,
      "temperatura": "Hot",
      "status": "Pre-Aprobado",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-23"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-24"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-24"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-25"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-23",
          "score": 34
        },
        {
          "date": "2026-07-24",
          "score": 42
        },
        {
          "date": "2026-07-24",
          "score": 52
        },
        {
          "date": "2026-07-25",
          "score": 51
        },
        {
          "date": "2026-07-26",
          "score": 58
        }
      ]
    },
    {
      "id": "LEAD-1014",
      "nombre": "Adriana Herrera Vargas",
      "fuente": "Google Ads",
      "utm_campaign": "primer-hogar-chia",
      "proyecto": "Verde Esperanza El Dorado",
      "ubicacion": "Ubaté",
      "afiliado": false,
      "fecha_ingreso": "2026-07-20T10:13:00-05:00",
      "capacidad": 23,
      "intencion": 90,
      "engagement": 66,
      "conversion": 62,
      "total": 60,
      "temperatura": "Hot",
      "status": "Ganado",
      "nextBestAction": "Activar postventa y seguro todo riesgo",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-20"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-21"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-21"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-23"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-25"
        },
        {
          "key": "cierre",
          "label": "Promesa de compraventa firmada",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-20",
          "score": 33
        },
        {
          "date": "2026-07-21",
          "score": 38
        },
        {
          "date": "2026-07-21",
          "score": 48
        },
        {
          "date": "2026-07-23",
          "score": 45
        },
        {
          "date": "2026-07-24",
          "score": 50
        },
        {
          "date": "2026-07-25",
          "score": 52
        },
        {
          "date": "2026-07-25",
          "score": 60
        }
      ]
    },
    {
      "id": "LEAD-1153",
      "nombre": "Daniela Medina Herrera",
      "fuente": "Meta Ads",
      "utm_campaign": "bogota-no-vis",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T20:23:00-05:00",
      "capacidad": 55,
      "intencion": 63,
      "engagement": 62,
      "conversion": 62,
      "total": 60,
      "temperatura": "Hot",
      "status": "Ganado",
      "nextBestAction": "Activar postventa y seguro todo riesgo",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-26"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-26"
        },
        {
          "key": "cierre",
          "label": "Promesa de compraventa firmada",
          "date": "2026-07-27"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 35
        },
        {
          "date": "2026-07-22",
          "score": 36
        },
        {
          "date": "2026-07-23",
          "score": 48
        },
        {
          "date": "2026-07-24",
          "score": 52
        },
        {
          "date": "2026-07-26",
          "score": 50
        },
        {
          "date": "2026-07-26",
          "score": 58
        },
        {
          "date": "2026-07-27",
          "score": 56
        }
      ]
    },
    {
      "id": "LEAD-1029",
      "nombre": "Katherine Jiménez Ríos",
      "fuente": "Meta Ads",
      "utm_campaign": "jovenes-tocancipa",
      "proyecto": "La Macarena",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T19:14:00-05:00",
      "capacidad": 90,
      "intencion": 42,
      "engagement": 36,
      "conversion": 59,
      "total": 59,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-22"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-23"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-24"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-25"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-22",
          "score": 33
        },
        {
          "date": "2026-07-23",
          "score": 41
        },
        {
          "date": "2026-07-23",
          "score": 43
        },
        {
          "date": "2026-07-24",
          "score": 55
        },
        {
          "date": "2026-07-24",
          "score": 55
        },
        {
          "date": "2026-07-25",
          "score": 58
        }
      ]
    },
    {
      "id": "LEAD-1103",
      "nombre": "William Pardo Pineda",
      "fuente": "Meta Ads",
      "utm_campaign": "inversion-ricaurte",
      "proyecto": "Monguí",
      "ubicacion": "Ciudadela Maiporé",
      "afiliado": true,
      "fecha_ingreso": "2026-07-21T17:00:00-05:00",
      "capacidad": 41,
      "intencion": 75,
      "engagement": 63,
      "conversion": 56,
      "total": 59,
      "temperatura": "Hot",
      "status": "En Negociación",
      "nextBestAction": "Enviar cotización formal y agendar firma",
      "journey": [
        {
          "key": "capturado",
          "label": "Lead capturado desde pauta",
          "date": "2026-07-21"
        },
        {
          "key": "formulario",
          "label": "Completó formulario de perfilamiento",
          "date": "2026-07-22"
        },
        {
          "key": "landing",
          "label": "Visitó landing del proyecto",
          "date": "2026-07-23"
        },
        {
          "key": "simulador",
          "label": "Usó simulador de subsidio/crédito",
          "date": "2026-07-24"
        },
        {
          "key": "contacto",
          "label": "Contactado por asesor (WhatsApp/llamada)",
          "date": "2026-07-25"
        },
        {
          "key": "cita",
          "label": "Cita agendada en sala de ventas",
          "date": "2026-07-26"
        }
      ],
      "scoreEvolution": [
        {
          "date": "2026-07-21",
          "score": 39
        },
        {
          "date": "2026-07-22",
          "score": 40
        },
        {
          "date": "2026-07-23",
          "score": 46
        },
        {
          "date": "2026-07-24",
          "score": 52
        },
        {
          "date": "2026-07-25",
          "score": 51
        },
        {
          "date": "2026-07-26",
          "score": 63
        }
      ]
    }
  ]
};
