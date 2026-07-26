# 01 · Visión general

| | |
|---|---|
| **Identificador** | SOFIA-DOC-01 |
| **Versión** | 1.0 |
| **Fecha** | 2026-07-26 |
| **Estado** | Vigente |
| **Audiencia** | Todos los perfiles |
| **Documentos relacionados** | [02 · Arquitectura](02-ARQUITECTURA.md) · [07 · Hallazgos](07-HALLAZGOS.md) |

---

## 1. Propósito del documento

Establece el alcance del sistema, identifica a las partes interesadas y sus preocupaciones, define la terminología usada en el resto de la documentación y enumera los requisitos que el sistema atiende.

Es el punto de entrada para quien no conoce el proyecto.

---

## 2. Propósito del sistema

Sofía es un agente conversacional que atiende por WhatsApp a personas interesadas en adquirir vivienda con Colsubsidio. Durante la conversación las perfila, adapta su forma de vender según el perfil detectado, cotiza planes de pago y entrega al asesor comercial un lead calificado con contexto.

### 2.1 Problema que atiende

El proceso vigente para obtener una cotización exige completar un formulario de cinco pasos. Cada paso introduce una probabilidad de abandono, y quien abandona no deja registro aprovechable: no hay lead, no hay contexto y no hay a quién contactar.

### 2.2 Propuesta

Trasladar el proceso a una conversación de WhatsApp, sin formularios, donde el perfilamiento ocurre de forma implícita y quien abandona a mitad de camino queda igualmente registrado con la información que alcanzó a compartir.

### 2.3 Hipótesis central

> No se vende únicamente a familias. Se vende a quien necesite un hogar donde vivir.

Sustentada en el análisis de 4.142 compradores históricos: el segmento más numeroso no es la familia con hijos, sino el adulto joven que busca independizarse. Ver [07 · Hallazgos](07-HALLAZGOS.md), sección 1.

---

## 3. Alcance

### 3.1 Incluido

- Conversación bidireccional por WhatsApp, en texto y en voz
- Perfilamiento progresivo durante la conversación
- Adaptación del discurso comercial según el perfil detectado
- Cotización de planes de pago con verificación de capacidad de pago
- Registro de intención de agendamiento
- Traspaso a asesor humano y retorno al agente
- Exposición de leads para consumo del sistema comercial

### 3.2 Excluido

- Escrituración, separación de unidades o cualquier transacción financiera
- Consulta a centrales de riesgo
- Escritura en la agenda real de los asesores
- Gestión posterior a la entrega del lead
- Atención de posventa

---

## 4. Partes interesadas

Conforme a la práctica de descripción de arquitecturas, se identifican los actores y las preocupaciones que cada documento atiende.

| Parte interesada | Preocupación principal | Documento que la atiende |
|---|---|---|
| Ciudadano interesado | Obtener información clara sin fricción ni compromiso | 02, 04 |
| Asesor comercial | Recibir leads calificados con contexto suficiente | 01, 03 |
| Área de mercadeo | Entender qué segmentos responden y cómo hablarles | 07 |
| Área de tecnología | Operar, mantener y extender el sistema | 02, 03, 04, 05, 08 |
| Responsable de datos | Cumplimiento en el tratamiento de datos personales | 06 |
| Jurado evaluador | Comprender qué se construyó y con qué criterio | 01, 03, 07 |

---

## 5. Requisitos

Identificados para permitir trazabilidad desde el diseño y las pruebas.

### 5.1 Funcionales

| ID | Requisito |
|---|---|
| RF-01 | Recibir y responder mensajes de texto por WhatsApp |
| RF-02 | Recibir notas de voz, transcribirlas y responder en voz |
| RF-03 | Perfilar al interesado durante la conversación, sin formularios |
| RF-04 | Clasificar al interesado en un arquetipo de comprador de forma determinística |
| RF-05 | Adaptar el discurso comercial según el arquetipo detectado |
| RF-06 | Calcular planes de pago replicando la lógica oficial |
| RF-07 | Evaluar la capacidad de pago y abstenerse de ofrecer planes inviables |
| RF-08 | Registrar la intención de agendamiento del interesado |
| RF-09 | Permitir el traspaso a un asesor humano y el retorno al agente |
| RF-10 | Exponer los leads perfilados para consumo del sistema comercial |

### 5.2 No funcionales

| ID | Requisito | Verificación |
|---|---|---|
| RNF-01 | Los cálculos financieros deben coincidir con la fuente oficial | Contraste con cotizaciones reales: conforme al centavo |
| RNF-02 | La clasificación debe ser reproducible y auditable | Implementada con reglas explícitas, sin intervención del modelo |
| RNF-03 | Los datos personales no deben quedar accesibles sin autenticación | Ver 04, sección 7 |
| RNF-04 | El sistema no debe afirmar cifras que no pueda sustentar | Sin datos completos, remite a asesor |
| RNF-05 | La respuesta hablada debe ser inteligible en español colombiano | Voz regional y normalización de texto previa a la síntesis |
| RNF-06 | El costo por conversación debe mantenerse acotado | Caché de prompt: reutilización verificada en operación |

---

## 6. Principios de diseño

**Determinismo donde importa.** La clasificación y los cálculos financieros los realiza el servidor con reglas explícitas. El modelo conversa; no decide a qué segmento pertenece nadie ni cuánto debe pagar.

**Abstenerse antes que aproximar.** Ante datos insuficientes el sistema no estima: remite a un asesor. Una cifra equivocada sobre una compra de vivienda tiene consecuencias que una respuesta incompleta no tiene.

**El interés del interesado por encima de la conversión.** Cuando el plan calculado excede la capacidad de pago declarada, el agente no lo presenta como cerrado aunque eso reduzca la conversión. Ver [07 · Hallazgos](07-HALLAZGOS.md), sección 3.2.

**Transparencia sobre la naturaleza del interlocutor.** El agente se identifica como asistente virtual y no simula ser una persona.

**El perfilamiento no se revela.** La clasificación orienta el discurso, nunca se le comunica al interesado.

---

## 7. Glosario

| Término | Definición |
|---|---|
| **Arquetipo** | Perfil de comprador derivado del análisis de segmentación. Cuatro operativos más un modo neutral. |
| **Carga financiera** | Cociente entre la cuota mensual y el ingreso mensual declarado del hogar. |
| **Click-to-WhatsApp** | Formato publicitario donde el usuario abre WhatsApp con un mensaje predefinido y lo envía. |
| **Cuota inicial** | Porción del precio pagada antes de la entrega, en cuotas mensuales. |
| **Desistimiento** | Retracto de la compra después de haberla iniciado. |
| **Financiación** | Saldo cubierto con crédito hipotecario, exigible en el mes de entrega. |
| **Lead** | Persona interesada registrada en el sistema. |
| **Modo neutral** | Estado del agente mientras no conoce la edad ni la composición familiar. Prohíbe suponer situación de vida. |
| **Playbook** | Guion comercial asociado a un arquetipo: qué resaltar, qué omitir, objeción real y tono. |
| **Separación** | Pago inicial que reserva la unidad. |
| **SMLV** | Salario mínimo legal vigente. En 2026, $1.750.905. |
| **Subsidio familiar de vivienda** | Aporte de la caja de compensación, expresado en múltiplos de SMLV. |
| **VIS / VIP** | Vivienda de Interés Social / Prioritario. Categorías con tope de precio regulado. |

---

## 8. Documentación del sistema

| Documento | Contenido |
|---|---|
| [01 · Visión general](01-VISION-GENERAL.md) | Alcance, partes interesadas, requisitos y glosario |
| [02 · Arquitectura](02-ARQUITECTURA.md) | Capas MVC, flujo del turno, módulos y decisiones |
| [03 · Casos de uso](03-CASOS-DE-USO.md) | Once casos de uso detallados con trazabilidad a requisitos |
| [04 · Diagramas](04-DIAGRAMAS.md) | Contexto, componentes, secuencia, decisión, estados y datos |
| [05 · Infraestructura](05-INFRAESTRUCTURA.md) | Componentes, red, entornos, persistencia y producción |
| [06 · Seguridad](06-SEGURIDAD.md) | Modelo de amenaza, controles y datos personales |
| [07 · Hallazgos](07-HALLAZGOS.md) | Segmentación y análisis del cotizador oficial |
| [08 · Operación](08-OPERACION.md) | Puesta en marcha, verificación y diagnóstico |
| [09 · Integraciones](09-INTEGRACIONES.md) | Interfaces con SAP S/4HANA, Salesforce y Meta *(en preparación)* |

---

## 9. Control de versiones

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0 | 2026-07-26 | Versión inicial |
