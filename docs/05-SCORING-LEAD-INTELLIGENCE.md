# 🎯 Scoring & Lead Intelligence

Documentación del sistema de scoring Score 360, previabilidad financiera, intención de compra, escalación automática y Next Best Action.

**Archivo fuente:** `src/advisor/utils/leadIntelligence.ts`

---

## Score 360 — Modelo de Puntuación

El Score 360 es un puntaje compuesto de **0 a 100** que evalúa a cada lead en 4 dimensiones ponderadas para determinar su potencial de conversión.

### Dimensiones

| Dimensión | Peso | Descripción | Señales Clave |
|-----------|------|-------------|---------------|
| **Fit** (Ajuste) | 25% | Qué tan bien coincide el lead con el perfil ideal de comprador Colsubsidio | Categoría de afiliación, elegibilidad de subsidio, rango salarial, match con proyectos |
| **Intent** (Intención) | 30% | Nivel de intención activa de compra | Primera vivienda, timeline corto, crédito preaprobado, motivación declarada |
| **Engagement** | 20% | Nivel de interacción con los canales de Colsubsidio | Respuestas a WhatsApp, clics en campañas, visitas a sala de ventas, brochures descargados |
| **Conversion** | 25% | Probabilidad estimada de cierre basada en datos históricos | Similitud con perfiles de compradores exitosos, etapa del pipeline, velocidad de avance |

### Fórmula
```
Score 360 = (Fit × 0.25) + (Intent × 0.30) + (Engagement × 0.20) + (Conversion × 0.25)
```

### Clasificación por Temperatura

| Score | Temperatura | Color | Acción |
|-------|-------------|-------|--------|
| ≥ 60 | 🔴 Hot | Ámbar/Rojo | Prioridad máxima, contacto inmediato |
| 40–59 | 🟡 Warm | Azul | Nurturing activo, seguimiento programado |
| < 40 | 🔵 Cold | Gris | Remarketing, educación sobre beneficios |

### Visualización
El score se muestra con una **barra horizontal tipo batería** debajo del número, con color de relleno según el rango del puntaje.

---

## Previabilidad Financiera

Análisis automático que evalúa si el lead puede acceder financieramente a un proyecto de vivienda.

### Estados de Previabilidad

| Estado | Descripción |
|--------|-------------|
| `potencialmente_viable` | Todas las señales financieras son positivas |
| `viable_con_informacion_parcial` | Señales positivas pero con datos faltantes |
| `pendiente_validacion` | Requiere validación de documentos o DataCrédito |
| `informacion_insuficiente` | No hay datos financieros suficientes |
| `no_viable_para_proyecto` | El perfil financiero no coincide con ningún proyecto |

### Señales Evaluadas

**Señales Positivas:**
- ✅ Afiliado a Colsubsidio con categoría conocida
- ✅ Rango salarial compatible con proyectos VIS
- ✅ Primera vivienda (elegible para subsidios)
- ✅ Crédito preaprobado o en trámite
- ✅ Fuente de cuota inicial identificada
- ✅ DataCrédito con puntaje favorable (riesgo Bajo)

**Alertas Pendientes:**
- ⚠️ No se conoce categoría de afiliación
- ⚠️ No se ha consultado DataCrédito
- ⚠️ No se ha confirmado si es primera vivienda
- ⚠️ Presupuesto declarado inferior al precio mínimo de proyectos
- ⚠️ Rango salarial no compatible con financiación disponible

---

## Intención de Compra

Análisis de la intención real de compra del lead basado en señales comportamentales y declarativas.

### Niveles de Intención

| Nivel | Descripción | Indicadores |
|-------|-------------|-------------|
| `alta` | Intención confirmada y activa | Timeline < 6 meses, crédito tramitado, proyecto específico identificado |
| `media` | Interés real pero no inmediato | Timeline 6-12 meses, comparando opciones, ahorrando |
| `baja` | Exploratorio o informativo | Sin timeline definido, motivación no clara |
| `sin_informacion` | Sin datos suficientes | Sofía no ha perfilado o datos incompletos |

---

## Escalación Automática

Sistema de alertas para el asesor cuando un lead requiere atención especial.

### Niveles de Escalación

| Nivel | Descripción | Ejemplo |
|-------|-------------|---------|
| **0** | Sin escalación | Lead en gestión normal |
| **1** | Atención sugerida | Lead hot sin contacto en 48h |
| **2** | Acción requerida | Lead con cita agendada sin confirmar |
| **3** | Escalación crítica | Lead en riesgo de pérdida, competidor identificado |

### Razones de Escalación
- Lead con Score ≥ 70 sin contacto en las últimas 24 horas
- Lead con cita agendada que no se ha confirmado
- Lead que solicitó información pero no ha recibido brochure
- Lead con DataCrédito desfavorable que requiere opciones alternativas
- Lead que mencionó a un competidor en la conversación con Sofía

---

## Next Best Action (NBA)

Sistema de recomendación de la siguiente mejor acción para cada lead.

### Estructura de la NBA

```typescript
interface NextBestAction {
  action: string;        // Acción recomendada
  objective: string;     // Objetivo de la acción
  missingData: string[]; // Datos faltantes para mejorar el perfil
  followUpAction: string; // Acción de seguimiento
}
```

### Ejemplos de NBA

| Perfil del Lead | Acción Recomendada |
|----------------|-------------------|
| Hot, primera vivienda, sin cita | "Agendar cita en sala de ventas de Maiporé" |
| Warm, sin crédito, interesado | "Enviar simulación de crédito por WhatsApp" |
| Cold, afiliado, sin perfilar | "Asignar a Sofía para perfilamiento WhatsApp" |
| Hot, crédito preaprobado, cita completada | "Preparar promesa de compraventa" |

---

## Detección de Perfil Sofía

Función que determina si el Agente Sofía ha completado el perfilamiento de un lead.

```typescript
function isSofiaProfileComplete(lead: Lead): boolean {
  return Boolean(
    lead.sofia &&
    (lead.sofia.timestamp !== null ||
     lead.sofia.score !== null ||
     lead.sofia.fuente !== null ||
     lead.sofia.timeline !== null)
  );
}
```

**Uso:** Se utiliza para determinar si mostrar datos de Sofía en el Score 360, si asignar al lead a remarketing, y para el cálculo de Next Best Action.

---

> **Ver también:** [Modelo de Datos](./03-MODELO-DATOS.md) · [Módulos Funcionales](./02-MODULOS-FUNCIONALES.md) · [Agente Sofía](./sofia-whatsapp-agent/README.md)
