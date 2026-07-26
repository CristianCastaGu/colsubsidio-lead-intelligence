# Sofía — Agente conversacional de vivienda para Colsubsidio

**Reto Vivienda · Hackathon Colsubsidio × 30X · 2026**

Sofía es un agente que conversa por WhatsApp con personas interesadas en comprar vivienda, las perfila mientras habla, cotiza dentro del chat y le entrega al asesor comercial un lead ya calificado con contexto real.

No es un chatbot de preguntas frecuentes. Es un vendedor que adapta su forma de vender según con quién esté hablando — y que se frena cuando el plan de pagos no le sirve a la persona.

---

## El problema

Para cotizar una vivienda hoy, un interesado debe completar un formulario de **cinco pasos**: elegir piso y unidad, entregar correo, nombre, apellidos y teléfono, aceptar la política de datos, declarar sus ingresos y responder el cuestionario de subsidio. Solo entonces ve un número.

Cada paso es una puerta por donde se pierde gente. Y quien abandona en el paso dos no deja rastro: no hay lead, no hay contexto, no hay a quién llamar.

Sofía entrega lo mismo dentro de una conversación de WhatsApp, sin un solo formulario. Y quien abandona a mitad de camino igual queda registrado con lo que alcanzó a contar.

## La tesis

> **No vendemos solo a familias. Vendemos a quien necesite un hogar donde vivir.**

Esto no es un eslogan. Salió de los datos de Colsubsidio.

Un clustering K-Means sobre **4.142 compradores históricos reales** muestra que el grupo más grande no es la familia con hijos:

| Perfil | % de compradores | Desistimiento |
|---|---|---|
| Joven Independiente (20-35, ~199M) | **34,0%** | 13,1% |
| Adulto Establecido (36-45) | 21,2% | **10,6%** |
| Familia Joven Consolidada | 14,8% | 11,4% |
| Comprador Premium / No VIS (~621M) | 7,3% | **20,4%** |

*(Un 22,6% adicional quedó sin edad registrada — es un artefacto de datos incompletos y no se usa como perfil.)*

Dos lecturas que cambian la conversación comercial:

1. **El clúster más grande es el joven que quiere dejar de pagar arriendo.** Si la comunicación le habla a la familia, le está hablando al 15% mientras el 34% se va sin decir por qué.

2. **El comprador premium se retracta al doble que cualquier otro.** La hipótesis que probamos es fricción con el crédito hipotecario alto. Con ese perfil la estrategia se invierte: no se empuja, se baja la ansiedad financiera antes de enamorar.

## Cómo Sofía usa esto

En cada turno de la conversación, el servidor clasifica al lead de forma **determinística** —con edad, composición familiar y rango de precio— y le inyecta a Sofía un *playbook* con qué resaltar, qué callar, cuál es la objeción real de ese perfil y con qué tono hablarle.

El lead nunca se entera de que fue clasificado. Solo nota que le están hablando a él.

**Ejemplo del mismo mensaje, dos leads distintos:**

| | Joven Independiente | Familia Joven Consolidada |
|---|---|---|
| Resalta | cuota vs. arriendo actual, cesantías, coworking, movilidad | tercera habitación, zona infantil, colegios, seguridad |
| Calla | zona infantil, colegios, "para cuando tengas hijos" | discurso de inversión, urgencia agresiva |
| Objeción real | *"no creo que me lo aprueben"* | el desarraigo, cambiar de colegio a los niños |
| Tono | rápido, cifras concretas, tuteo | cálido, proyectivo, "ustedes" |

Mismo anuncio, mismo número, mismo mensaje inicial. Conversaciones completamente distintas.

---

## Lo que encontramos replicando el cotizador oficial

Para que Sofía cotizara sin inventar cifras, replicamos la lógica del cotizador de Colsubsidio a partir de cotizaciones reales. El resultado calza **al centavo** con los PDF oficiales.

En el proceso aparecieron dos comportamientos que vale la pena revisar. Se documentan en detalle en [`docs/HALLAZGOS.md`](docs/HALLAZGOS.md).

**1. Proyectos con fecha de entrega vencida producen cifras imposibles.**
Un inmueble con entrega estimada ya cumplida arroja un plazo negativo y una cuota de trece dígitos. Sofía detecta el caso y no cotiza: pasa a asesor.

**2. En el régimen con subsidio, a menor ingreso la cuota mensual es más alta.**
El plan reparte el precio completo antes de la entrega y no deja saldo a hipoteca. Con ingresos de $2.500.000 la cuota resultante supera el 250% del ingreso mensual. La persona a quien el subsidio busca ayudar es la que recibe el plan más difícil de pagar.

Sofía calcula la carga financiera y **no presenta como cerrado** un plan cuya cuota supera el umbral configurado del ingreso declarado. Ofrece una tipología de menor valor o pasa a un asesor.

> Esa decisión es deliberada. Replicar la lógica con fidelidad total habría significado decirle a alguien que gana dos millones y medio que puede pagar seis y medio al mes.

---

## Arquitectura

```
Click-to-WhatsApp Ad
        │
        ▼
WhatsApp Business Cloud API ──► webhook ──► server.js (Express)
                                              │
              ┌───────────────────────────────┼───────────────────────────┐
              ▼                               ▼                           ▼
      Deepgram (voz)              Clasificación en vivo            Cotizador
   Nova STT · Aura-2 TTS           playbooks.js                   cotizador.js
   voz colombiana Celeste          perfilamiento K-Means       lógica oficial + guardas
              │                               │                           │
              └───────────────────────────────┼───────────────────────────┘
                                              ▼
                                    Claude Sonnet 4.6
                              prompt cacheado + bloque dinámico
                                              │
                                              ▼
                              data/leads_perfilados.json ──► Dashboard CRM
```

El detalle técnico está en [`docs/ARQUITECTURA.md`](docs/ARQUITECTURA.md).

### Decisiones que vale la pena explicar

**Perfilamiento determinístico, no inferido por la IA.** La clasificación la hace el servidor con reglas sobre edad y composición familiar. La IA no decide a qué clúster pertenece nadie. Así el perfilamiento es auditable y reproducible, y no cambia entre ejecuciones.

**Prompt caching con bloque dinámico separado.** El prompt fijo (personalidad, catálogo, normativa) va cacheado; el playbook y la cotización viajan en un segundo bloque de sistema sin caché. El contexto cambia en cada turno sin invalidar la caché.

**Click-to-WhatsApp en vez de Lead Ads.** Con Lead Ads el agente inicia el contacto, y Meta exige plantilla pre-aprobada. Con Click-to-WhatsApp el usuario manda el primer mensaje y Sofía responde con texto libre desde el primer segundo.

**Voz en ambos sentidos.** El lead puede mandar notas de voz y Sofía responde hablando, con acento colombiano. Cuando la respuesta va a audio, se limpia el texto: el motor de voz pronuncia los emojis por su nombre Unicode y deletrea las URLs.

---

## Stack

| Componente | Tecnología |
|---|---|
| Runtime | Node.js + Express |
| Modelo conversacional | Claude Sonnet 4.6 (Anthropic) |
| Voz a texto | Deepgram Nova |
| Texto a voz | Deepgram Aura-2 (`aura-2-celeste-es`) |
| Mensajería | WhatsApp Business Cloud API (Meta) |
| Persistencia | JSON local |
| Análisis de datos | K-Means sobre 4.142 registros históricos |

---

## Cómo correrlo

**Requisitos:** Node.js 18+, cuenta de Meta Business, API key de Anthropic, API key de Deepgram.

```bash
git clone <este-repo>
cd whatsapp-server
npm install
cp .env.example .env    # y llenar las credenciales
```

Exponer el servidor a internet para que Meta pueda alcanzarlo:

```bash
ngrok http 3000
```

Configurar el webhook en Meta (**WhatsApp → Configuration → Webhook**) con la URL de ngrok terminada en `/webhook`, el mismo `WHATSAPP_VERIFY_TOKEN` del `.env`, y suscribirse al campo `messages`.

```bash
node preparar-catalogo.js   # una sola vez: prepara los campos de fecha de entrega
npm start
```

Escribirle al número de prueba de Meta. La consola muestra en vivo el perfil detectado, el ingreso registrado y el resultado de cada cotización.

### Endpoints

Todos los endpoints bajo `/api/` exigen la cabecera `X-API-Key`. El webhook se valida con la firma HMAC de Meta. Ver [06 · Seguridad](docs/06-SEGURIDAD.md).


| Método | Ruta | Para qué |
|---|---|---|
| `GET` | `/` | Salud del servidor |
| `GET/POST` | `/webhook` | Verificación y recepción de mensajes de Meta |
| `GET` | `/reporte` | Reporte visual de buyer personas |
| `GET` | `/api/leads` | Listado de leads perfilados (lo consume el CRM) |
| `GET` | `/api/conversacion/:telefono` | Historial completo de una conversación |
| `POST` | `/api/cotizar` | Simulador de plan de pagos |
| `POST` | `/api/retomar-conversacion` | Devolver el control a Sofía |
| `POST` | `/api/devolver-agente` | Pasar la conversación a un asesor humano |
| `POST` | `/api/enviar-mensaje-asesor` | Enviar un mensaje como asesor |

---

## Estructura

```
whatsapp-server/
├── server.js                  Servidor Express y orquestación
├── preparar-catalogo.js       Utilidad de mantenimiento del catálogo
├── lib/
│   ├── systemPrompt.js        Construye el prompt de Sofía
│   ├── claude.js              Cliente de Anthropic con prompt caching
│   ├── playbooks.js           Clasificación en vivo e inyección de playbook
│   ├── cotizador.js           Lógica de plan de pagos y guardas de seguridad
│   ├── normativa.js           Topes VIS/VIP y subsidios vigentes 2026
│   ├── perfilamientoEstadistico.js   Clasificación final contra los clústeres
│   ├── audioSTT.js            Transcripción de notas de voz
│   ├── audioTTS.js            Síntesis de voz y limpieza de texto
│   ├── whatsapp.js            Envío y parseo de mensajes
│   └── store.js               Persistencia local
└── data/
    ├── proyectos_catalogo.json        18 proyectos con entorno enriquecido
    ├── perfiles_estadisticos.json     Centroides del clustering
    ├── playbooks_conversacionales.json
    └── normativa_vigente_2026.json
```

---

## Estado actual y limitaciones

Esto se construyó en un sprint de cuatro días. Lo que sigue es honesto sobre dónde está.

**Funciona hoy**
- Conversación por texto y por voz en ambos sentidos
- Perfilamiento en vivo con cambio de guion a mitad de conversación
- Cotización dentro del chat, verificada al centavo contra cotizaciones oficiales
- Detección de capacidad de pago y freno cuando el plan no es viable
- Traspaso a asesor humano y retorno al bot
- Consumo del listado de leads desde el dashboard

**Pendiente**
- Las fechas de entrega del catálogo se están llenando proyecto por proyecto; sin ese dato Sofía remite al asesor en vez de cotizar.
- Los leads entran al listado del CRM cuando la conversación llega a un cierre natural. Las conversaciones abandonadas a medias quedan guardadas pero no aparecen en la tabla. Está identificado y documentado.
- La integración con SAP S/4HANA, Salesforce y Meta está en especificación.
- El agendamiento captura la intención del lead; no escribe todavía en la agenda real de los asesores.

**Consideraciones**
- Los montos de subsidio son orientativos y dependen de convocatorias con cupos. Sofía tiene instrucción explícita de nunca prometerlos.
- El plan de pagos es una estimación. El asesor confirma el número final.
- El perfilamiento nunca se le revela al lead.

---

## Sobre datos personales

Las conversaciones contienen nombres, teléfonos, ingresos y composición familiar de personas reales. Los archivos `data/conversaciones.json` y `data/leads_perfilados.json` están excluidos del repositorio mediante `.gitignore` y **no deben subirse nunca**.

Antes del primer push, verificar:

```bash
git status --ignored | grep -E "\.env|conversaciones|leads_perfilados"
```

Esos archivos deben aparecer como ignorados. Si alguno aparece como *staged*, detener el push.

---

## Documentación

La documentación sigue la estructura de los estándares de documentación de software: cada documento declara identificador, versión, audiencia y documentos relacionados, y las decisiones son trazables desde los requisitos.

| Documento | Contenido |
|---|---|
| [01 · Visión general](docs/01-VISION-GENERAL.md) | Alcance, partes interesadas, requisitos y glosario |
| [02 · Arquitectura](docs/02-ARQUITECTURA.md) | Capas MVC, flujo del turno, módulos y decisiones |
| [03 · Casos de uso](docs/03-CASOS-DE-USO.md) | Once casos de uso detallados con trazabilidad a requisitos |
| [04 · Diagramas](docs/04-DIAGRAMAS.md) | Contexto, componentes, secuencia, decisión, estados y datos |
| [05 · Infraestructura](docs/05-INFRAESTRUCTURA.md) | Componentes, red, entornos, persistencia y producción |
| [06 · Seguridad](docs/06-SEGURIDAD.md) | Modelo de amenaza, controles y datos personales |
| [07 · Hallazgos](docs/07-HALLAZGOS.md) | Segmentación y análisis del cotizador oficial |
| [08 · Operación](docs/08-OPERACION.md) | Puesta en marcha, verificación y diagnóstico |
| [09 · Integraciones](docs/09-INTEGRACIONES.md) | Interfaces con SAP S/4HANA, Salesforce y Meta *(en preparación)* |

---

*Construido para el Reto Vivienda del Hackathon Colsubsidio × 30X, julio de 2026.*
