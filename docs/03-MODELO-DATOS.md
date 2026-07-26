# 📐 Modelo de Datos

Documentación de las interfaces TypeScript principales que definen la estructura de datos del sistema.

**Archivo fuente:** `src/advisor/types.ts`

---

## Tipos de Vista

```typescript
type ViewType = 
  | 'inicio'
  | 'leads'
  | 'negocios'
  | 'proyectos'
  | 'buyer_personas'
  | 'score360'
  | 'campanas'
  | 'remarketing'
  | 'paneles'
  | 'perfilamiento'
  | 'configuracion';
```

---

## Lead

Estructura principal que representa un prospecto de vivienda.

```typescript
interface Lead {
  id: string;                    // Identificador único
  name: string;                  // Nombre completo
  email: string;                 // Correo electrónico
  phone: string;                 // Teléfono (formato colombiano)
  channel: string;               // Canal de captura (Meta, Google, TikTok, WhatsApp)
  campaign: string;              // Campaña de origen
  status: LeadStatus;            // Estado en el pipeline
  temperature: 'Hot' | 'Warm' | 'Cold';  // Temperatura del lead
  city: string;                  // Ciudad de interés
  budget: number;                // Presupuesto en COP
  downPayment: number;           // Cuota inicial disponible en COP
  
  // Afiliación Colsubsidio
  affiliationCategory: 'Cat A' | 'Cat B' | 'Cat C' | 'No afiliado';
  subsidyEligible: boolean;      // Elegible para subsidio VIS
  projectMatchPercentage: number; // % de match con proyectos
  
  // Score 360 (4 dimensiones)
  scores: {
    fit: number;                 // Ajuste al perfil ideal (0-100)
    intent: number;              // Intención de compra (0-100)
    engagement: number;          // Nivel de interacción (0-100)
    conversion: number;          // Probabilidad de conversión (0-100)
    total: number;               // Score ponderado total (0-100)
  };
  
  priorityRationale: string;     // Justificación IA de la prioridad
  behaviorLog: BehaviorEntry[];  // Historial de comportamiento digital
  sofia: SofiaProfile;           // Perfil generado por Agente Sofía
}
```

---

## LeadStatus

Estados del ciclo de vida del lead:

```typescript
type LeadStatus = 
  | 'Nuevo'              // Recién ingresado, sin contactar
  | 'Contactado'         // Primera interacción realizada
  | 'En seguimiento'     // En proceso de nurturing
  | 'Cita agendada'      // Visita a sala de ventas programada
  | 'Negociación'        // En proceso de negociación activa
  | 'Cerrado ganado'     // Compra exitosa
  | 'Cerrado perdido'    // Lead descartado o perdido
  | 'No contactado';     // Sin respuesta a intentos de contacto
```

---

## SofiaProfile

Perfil completo generado por el Agente Sofía (WhatsApp IA):

```typescript
interface SofiaProfile {
  // Origen y timestamp
  fuente: string | null;                    // Canal (WhatsApp Directo, etc.)
  timestamp: string | null;                 // Fecha/hora de perfilamiento
  proyectoInteresOriginal: string | null;   // Proyecto del anuncio original
  
  // Perfil sociodemográfico
  esAfiliado: boolean | null;               // Afiliado a Colsubsidio
  categoriaAfiliado: string;                // Cat A, B, C o Desconocida
  segmento: string;                         // Segmento de mercado
  rangoSalarial: string;                    // Rango de ingresos familiares
  rangoEdad: string | null;                 // Rango de edad
  composicionFamiliar: string | null;       // Estructura del hogar
  profesion: string | null;                 // Ocupación declarada
  zonaActual: string | null;                // Zona de residencia actual
  
  // Intención de compra
  primeraVivienda: boolean | null;          // ¿Es primera vivienda?
  motivacion: string | null;                // Motivo de compra
  timeline: string | null;                  // Plazo para comprar
  creditoPrevio: boolean | null;            // ¿Tiene crédito preaprobado?
  fuenteCuotaInicial: string;               // Origen de la cuota inicial
  
  // Resultado del agente
  score: 'hot' | 'warm' | 'cold' | null;   // Clasificación cualitativa
  scoreNumerico: number | null;             // Puntuación 0-100
  proyectoRecomendado: string[] | null;     // Proyectos recomendados
  briefAsesor: string | null;               // Brief ejecutivo para el asesor
  remarketingTrack: string | null;          // Track de remarketing sugerido
  
  // Perfil estadístico ML
  perfilEstadistico: string | null;         // Arquetipo de buyer persona
  perfilEstadisticoRiesgoDesistimiento: number | null; // % riesgo deserción
  
  // DataCrédito
  datacredito: {
    consultado: boolean;
    puntaje: number | null;
    nivelRiesgo: 'Bajo' | 'Medio' | 'Alto' | null;
    fechaConsulta: string | null;
  };
  
  brochureEnviado: string | null;           // Brochure PDF enviado
}
```

---

## HousingProject

Proyecto de vivienda en el catálogo:

```typescript
interface HousingProject {
  id: string;
  name: string;                  // Nombre del proyecto
  type: 'VIS' | 'No VIS';       // Clasificación por precio
  municipality: string;          // Municipio
  priceFrom: number;             // Precio desde (COP)
  priceTo: number;               // Precio hasta (COP)
  priceSmmlv: number;            // Precio en SMMLV
  areaFrom: number;              // Área desde (m²)
  areaTo: number;                // Área hasta (m²)
  availableUnits: number;        // Unidades disponibles
  totalUnits: number;            // Unidades totales
  subsidies: string[];           // Subsidios aplicables
  deliveryDate: string;          // Fecha estimada de entrega
  rotationAlert: boolean;        // Alerta de baja rotación
  lat: number;                   // Latitud GPS
  lng: number;                   // Longitud GPS
  features: string[];            // Características del proyecto
  image: string;                 // URL de imagen
}
```

---

## BuyerPersona

Cluster de buyer persona generado por IA:

```typescript
interface BuyerPersona {
  id: string;
  name: string;                  // Nombre del cluster
  percentage: number;            // % del universo de leads
  description: string;           // Descripción demográfica
  incomeRange: string;           // Rango de ingresos
  averageAge: number;            // Edad promedio
  painPoints: string[];          // Puntos de dolor
  buyingTriggers: string[];      // Disparadores de compra
  preferredChannels: string[];   // Canales preferidos
  projects: string[];            // Proyectos recomendados
  commercialScript: string;      // Script IA para asesores
}
```

---

## Campaign

Campaña de marketing digital:

```typescript
interface Campaign {
  id: string;
  name: string;                  // Nombre de la campaña
  channel: 'Meta' | 'Google' | 'TikTok'; // Canal publicitario
  status: 'active' | 'paused' | 'completed';
  budget: number;                // Presupuesto total (COP)
  spent: number;                 // Gasto ejecutado (COP)
  leads: number;                 // Leads capturados
  cpl: number;                   // Costo por lead (COP)
  ctr: number;                   // Click-Through Rate (%)
  conversionRate: number;        // Tasa de conversión (%)
  copyVariants: {                // Variantes de copy A/B
    a: string;
    b: string;
  };
}
```

---

## Deal

Negocio en el pipeline comercial:

```typescript
interface Deal {
  id: string;
  leadId: string;                // Lead asociado
  leadName: string;              // Nombre del lead
  project: string;               // Proyecto de vivienda
  unit: string;                  // Unidad específica
  stage: DealStage;              // Etapa del pipeline
  value: number;                 // Valor del negocio (COP)
  probability: number;           // Probabilidad de cierre (%)
  closingDate: string;           // Fecha estimada de cierre
  subsidyStatus: string;         // Estado del subsidio
}

type DealStage = 
  | 'Prospección'
  | 'Cita Sala'
  | 'Pre-Aprobado'
  | 'Promesa Firmada'
  | 'Cierre Exitoso';
```

---

## Task

Tarea comercial diaria del asesor:

```typescript
interface Task {
  id: string;
  type: string;                  // Tipo de tarea
  title: string;                 // Título descriptivo
  leadId: string;                // Lead asociado
  leadName: string;              // Nombre del lead
  priority: 'alta' | 'media' | 'baja';
  dueDate: string;               // Fecha límite
  dueTime: string;               // Hora límite
  completed: boolean;            // Estado de completitud
  description: string;           // Descripción detallada
}
```

---

## BehaviorEntry

Entrada del historial de comportamiento digital:

```typescript
interface BehaviorEntry {
  date: string;                  // Fecha del evento
  action: string;                // Tipo de acción
  detail: string;                // Detalle descriptivo
  source: string;                // Fuente del evento
}
```

---

> **Ver también:** [Arquitectura](./01-ARQUITECTURA.md) · [API Endpoints](./04-API-ENDPOINTS.md) · [Scoring](./05-SCORING-LEAD-INTELLIGENCE.md)
