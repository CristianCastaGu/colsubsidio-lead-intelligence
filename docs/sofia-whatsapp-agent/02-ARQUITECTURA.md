# 02 · Arquitectura

| | |
|---|---|
| **Identificador** | SOFIA-DOC-02 |
| **Versión** | 1.0 |
| **Fecha** | 2026-07-26 |
| **Estado** | Vigente |
| **Audiencia** | Equipo técnico, evaluadores |
| **Documentos relacionados** | [01 · Visión general](01-VISION-GENERAL.md) · [05 · Infraestructura](05-INFRAESTRUCTURA.md) · [06 · Seguridad](06-SEGURIDAD.md) |

---

## 1. Organización en capas

El sistema separa responsabilidades en cuatro capas, con una correspondencia deliberada al patrón modelo–vista–controlador.

| Capa | Responsabilidad | Módulos |
|---|---|---|
| **Vista** | Presentación al actor. La principal es la conversación de WhatsApp; existen además la vista HTML de reportes y la representación JSON para el sistema comercial. | WhatsApp, `/reporte`, `/api/*` |
| **Controlador** | Recibe la petición, aplica control de acceso, orquesta la secuencia del turno y decide qué devolver. No contiene reglas de negocio. | `server.js`, `lib/seguridad.js`, `lib/whatsapp.js` |
| **Dominio** | Reglas del negocio: clasificación, cálculo de planes, normativa aplicable. Independiente del transporte. | `lib/playbooks.js`, `lib/cotizador.js`, `lib/normativa.js`, `lib/perfilamientoEstadistico.js`, `lib/systemPrompt.js` |
| **Modelo** | Datos persistidos y acceso a servicios externos. | `lib/store.js`, `data/*.json`, `lib/claude.js`, `lib/audioSTT.js`, `lib/audioTTS.js` |

### 1.1 Sobre la aplicación del patrón

La correspondencia es real pero no literal. Un sistema conversacional no renderiza una vista en el sentido clásico: su salida es texto o audio que interpreta una aplicación de terceros.

Lo que sí se preserva es la propiedad que hace útil al patrón: **el dominio no conoce el transporte.** `cotizador.js` calcula planes sin saber que existe WhatsApp; `playbooks.js` clasifica sin saber que hay un modelo de lenguaje detrás.

Esa independencia tuvo una consecuencia práctica verificable: ambos módulos se probaron de forma aislada contra cotizaciones oficiales reales, sin levantar el servidor ni consumir ninguna API. Ver [07 · Hallazgos](07-HALLAZGOS.md), sección 2.

El diagrama de componentes está en [04 · Diagramas](04-DIAGRAMAS.md), sección 3.

---

## 2. Flujo de un mensaje

Cada mensaje entrante recorre la misma secuencia. El orden importa: la clasificación ocurre **antes** de llamar al modelo, para que el contexto del turno ya venga con el playbook adentro.

```
1.  Meta entrega el mensaje al webhook
2.  ¿Es nota de voz?  → Deepgram Nova transcribe
3.  Se recupera el historial de la conversación (por número de teléfono)
4.  Se cruza contra la base de afiliados
5.  Se recolectan señales del lead        ← edad, ingresos, composición, proyecto
6.  Clasificación provisional             ← determinística, sin IA
7.  Intento de cotización                 ← solo si están todos los datos
8.  Se arma el bloque de contexto dinámico
9.  Claude Sonnet 4.6 responde
10. Se extrae y remueve el JSON de perfil si viene
11. ¿El lead escribió por voz? → Deepgram Aura-2 sintetiza la respuesta
12. Se envía por WhatsApp; los enlaces van aparte en texto
13. Se persiste conversación y lead
```

---

> El diagrama de este flujo, con sus ramas de decisión, está en [04 · Diagramas](04-DIAGRAMAS.md), sección 4. La secuencia entre componentes está en las secciones 5 y 6.

---

## 3. Prompt caching

El prompt de Sofía pesa alrededor de 10.700 tokens: personalidad, catálogo de 18 proyectos, normativa vigente, perfiles estadísticos y esquema del JSON de salida. Enviarlo completo en cada turno sería caro y lento.

Se usa el caché de Anthropic con **dos bloques de sistema**:

```js
system: [
  { type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } },
  { type: 'text', text: contextoDinamico }   // sin cache_control
]
```

El primero es fijo y se cachea. El segundo cambia en cada turno —trae el playbook del perfil detectado, la cotización calculada y, si aplica, las instrucciones de voz— y va **después** del punto de corte del caché.

Si el bloque dinámico se pegara al final del prompt fijo, cada cambio de perfil invalidaría la caché completa. En la práctica esto se observa en el log:

```
💰 Tokens — input nuevo: 6209, caché creada: 0, caché reutilizada: 10683, output: 114
```

`caché reutilizada` alto significa que está funcionando.

---

## 4. Clasificación en vivo

Hay dos clasificadores y hacen cosas distintas.

| | `perfilamientoEstadistico.js` | `playbooks.js` |
|---|---|---|
| Cuándo corre | al final, con el JSON completo | en **cada turno** |
| Con qué datos | perfil cerrado | lo poco que se sepa hasta ahí |
| Para qué sirve | etiqueta que consume el dashboard | cambia lo que Sofía **dice** |

`clasificarProvisional()` decide con reglas explícitas:

```
precio del proyecto ≥ 400M              → Premium / No VIS
sin edad conocida                       → modo neutral
edad ≤ 45 y grupo familiar ≥ 3          → Familia Joven Consolidada
edad ≤ 35                               → Joven Independiente
edad ≥ 36                               → Adulto Establecido
```

El **modo neutral** es importante y no es un caso de borde: mientras no se conozca la edad, Sofía tiene prohibido asumir hijos o pareja. Es lo que hace cierta la tesis del proyecto — no se le habla de colegios a alguien que nunca dijo tener hijos.

Cada cambio de perfil se registra en `cambiosDePerfil` con turno y marca de tiempo. Eso permite mostrar el instante exacto en que Sofía cambió de guion.

---

## 5. Extracción de señales

El servidor necesita edad, ingresos y composición familiar para clasificar y cotizar. Los obtiene del texto del lead —nunca de lo que dijo Sofía— con extractores deliberadamente conservadores.

**Prefiere no saber antes que asumir mal.** *"Mi familia quiere que compre algo más grande"* no clasifica como perfil familiar: no dice que tenga hijos.

Los ingresos solo se leen cerca de un verbo de ingreso (`gano`, `ganamos`, `sueldo`, `salario`, `entre los dos`), en una ventana de 70 caracteres. Sin esa restricción, el precio del apartamento se confundiría con el sueldo del lead.

### 5.1 Lo que enseñó el canal de voz

La transcripción automática obligó a resolver casos que por texto nunca aparecen:

| Entrada | Problema | Solución |
|---|---|---|
| `"gano cuatro millones quinientos mil"` | los números llegan en palabras | parser de números hablados en español |
| `"gano 4500000."` | Deepgram cierra la frase con punto y queda pegado al número | se limpia la puntuación antes de interpretar |
| `"gano 2.5 millones"` | el punto decimal se leía como separador de miles → el doble | se decide por la forma del número, no por el símbolo |

El último era el más peligroso: no fallaba, calculaba mal en silencio.

El ingreso se busca del mensaje **más reciente al más viejo**, para que una corrección del lead gane sobre lo que dijo al principio.

### 5.2 Proyecto de la conversación

`leadInfo.proyecto_interes` se fija una sola vez, con el mensaje pre-escrito del anuncio, y nunca cambia. Pero la conversación sí se mueve: el lead entra por un proyecto y termina preguntando por otro.

`detectarProyectoMencionado()` recorre el historial de atrás hacia adelante y gana la mención más reciente, cotejando contra el nombre completo o la palabra distintiva del proyecto (`"guayacán"` → `AGRUPACIÓN DE VIVIENDA RESERVA DE GUAYACÁN`), con y sin tildes.

---

## 6. Cotizador

`lib/cotizador.js` replica la lógica oficial. Verificado al centavo contra tres cotizaciones reales del mismo inmueble con ingresos distintos.

**Hay dos regímenes.** Esto es lo que más se equivoca quien intenta replicarlo con una sola fórmula.

**Con subsidio** — el comprador paga `(precio − subsidio)` en `plazo + 1` cuotas iguales, todas antes de la entrega. No queda saldo a hipoteca. El subsidio se suma en la última cuota de cuota inicial.

**Sin subsidio** — separación fija de $500.000, cuota inicial hasta completar el 30% del precio repartida en `plazo − 1` cuotas, y 70% a financiación en el mes de entrega.

### 6.2 Subsidio

Tabla confirmada contra cotizaciones reales. SMLV 2026 = $1.750.905.

| Ingresos del hogar | Subsidio |
|---|---|
| ≤ 2 SMLV ($3.501.810) | 30 SMLV — $52.527.150 |
| \> 2 y ≤ 4 SMLV ($7.003.620) | 20 SMLV — $35.018.100 |
| \> 4 SMLV | no aplica |

Requiere además que ningún miembro del hogar sea propietario de vivienda, que no haya recibido subsidio antes, y que el inmueble esté bajo el tope VIS.

### 6.3 El tope VIS no es un solo número

| Ubicación | Tope |
|---|---|
| Bogotá y ciudades de más de un millón de habitantes | 150 SMLV — $262.635.750 |
| Resto del país, incluidos los municipios de Cundinamarca | 135 SMLV — $236.372.175 |
| Zonas de renovación urbana | 175 SMLV — $306.408.375 |
| VIP | 90 SMLV — $157.581.450 |

Un inmueble de $250 millones es VIS en Bogotá y no lo es en Soacha. Como Colsubsidio tiene proyectos en ambos, el cotizador resuelve el tope según la ubicación del proyecto.

### 6.4 Guardas

**Entrega vencida.** Si el plazo resultante es cero o negativo, no se cotiza. Es el caso que en el cotizador oficial produce cifras de trece dígitos.

**Capacidad de pago.** Se calcula `cuota / ingreso declarado`. Por encima del umbral configurado (`CARGA_MAXIMA_SANA`), el resultado se marca `planViable: false` y Sofía recibe instrucción de no presentarlo como plan cerrado.

**Datos incompletos.** Sin precio, sin fecha de entrega o sin ingresos, no se cotiza y se remite al asesor. El log indica exactamente qué falta:

```
💤 Sin cotización — falta: fecha de entrega ausente en el catálogo
```

---

## 7. Audio

**Entrada.** La nota de voz se descarga de Meta y se transcribe con Deepgram Nova. El texto entra al flujo normal.

**Salida.** Si el mensaje entrante fue voz, la respuesta se sintetiza con Deepgram Aura-2, voz `aura-2-celeste-es` (acento colombiano), y se envía como audio.

El texto se prepara en dos capas:

*Prevención* — cuando la respuesta va a ser escuchada, el bloque dinámico le indica a Sofía que no use emojis, enlaces ni viñetas, y que hable en frases más cortas. Así la oración queda bien construida desde el origen.

*Limpieza* — `limpiarTextoParaVoz()` remueve lo que se escape: emojis y modificadores Unicode, URLs, shortcodes, símbolos de markdown. Y convierte lo que el motor pronunciaría mal:

| Escrito | Hablado |
|---|---|
| `43.53 m²` | 43.53 metros cuadrados |
| `20 SMLV` | 20 salarios mínimos |
| `$175.400.000` | 175.400.000 pesos |

Sin esta capa, un 😊 al final de una frase se pronuncia como *"blush"*.

Los enlaces no se pueden escuchar: si la respuesta traía alguno, se envía aparte en un mensaje de texto justo después del audio.

---

## 8. Persistencia

| Archivo | Contenido |
|---|---|
| `data/conversaciones.json` | historial completo por número de teléfono |
| `data/leads_perfilados.json` | perfil estructurado de cada lead |

Ambos contienen datos personales y están excluidos del repositorio.

Si `DASHBOARD_WEBHOOK_URL` está configurado, cada lead perfilado se envía además por POST. Si no, el archivo local es la fuente de verdad y el dashboard lo consume por `GET /api/leads`.

### 8.1 Limitación conocida

Un lead entra al listado cuando Sofía emite el bloque JSON de perfil, y eso ocurre cuando ella considera que la conversación llegó a un cierre natural. Las conversaciones abandonadas a medias quedan guardadas en `conversaciones.json` pero no aparecen en la tabla del CRM.

Son justamente los leads que más valdría rescatar. La corrección es crear el registro desde el primer mensaje y actualizarlo en cada turno, con campos de estado y completitud.

---

## 9. Traspaso a asesor humano

Sofía puede ceder la conversación y recuperarla.

| Endpoint | Efecto |
|---|---|
| `POST /api/devolver-agente` | el asesor toma el control; Sofía deja de responder |
| `POST /api/enviar-mensaje-asesor` | envía un mensaje al lead como asesor |
| `POST /api/retomar-conversacion` | Sofía vuelve a responder |

Mientras el control es del asesor, los mensajes del lead se siguen guardando pero no generan respuesta automática.
