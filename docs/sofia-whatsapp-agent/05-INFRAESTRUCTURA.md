# 05 · Infraestructura

| | |
|---|---|
| **Identificador** | SOFIA-DOC-05 |
| **Versión** | 1.0 |
| **Fecha** | 2026-07-26 |
| **Estado** | Vigente |
| **Audiencia** | Equipo técnico, evaluadores |
| **Documentos relacionados** | [02 · Arquitectura](02-ARQUITECTURA.md) · [06 · Seguridad](06-SEGURIDAD.md) · [08 · Operación](08-OPERACION.md) |

---

## 1. Alcance

Describe los componentes de infraestructura sobre los que se ejecuta el sistema: servicios externos, topología de red, entornos, configuración, persistencia y dependencias. Cubre el estado actual de prototipo y señala qué cambiaría en un despliegue productivo.

---

## 2. Vista general

```
┌─────────────────────────────────────────────────────────────────────┐
│  PLANO DEL USUARIO                                                  │
│                                                                     │
│   Ciudadano ──► WhatsApp ──► Click-to-WhatsApp Ad (Meta Ads)         │
└──────────────────────────────┬──────────────────────────────────────┘
                               │  HTTPS
┌──────────────────────────────▼──────────────────────────────────────┐
│  PLANO DE PLATAFORMA (Meta)                                         │
│   WhatsApp Business Cloud API                                       │
│   · Número de negocio · Webhook de mensajes · Almacenamiento media   │
└──────────────────────────────┬──────────────────────────────────────┘
                               │  POST firmado (HMAC-SHA256)
┌──────────────────────────────▼──────────────────────────────────────┐
│  PLANO DE APLICACIÓN                                                │
│                                                                     │
│   Túnel HTTPS (ngrok, dominio fijo)                                  │
│              │                                                      │
│              ▼                                                      │
│   Node.js + Express  ·  puerto 3000                                 │
│   ┌──────────────────────────────────────────────────────────┐      │
│   │ Middleware: endurecimiento · CORS · tasa · autenticación  │      │
│   ├──────────────────────────────────────────────────────────┤      │
│   │ Orquestación (server.js)                                  │      │
│   │  ├─ Clasificación en vivo    playbooks.js                 │      │
│   │  ├─ Cotización               cotizador.js + normativa.js  │      │
│   │  ├─ Perfilamiento final      perfilamientoEstadistico.js  │      │
│   │  └─ Audio                    audioSTT.js · audioTTS.js    │      │
│   └──────────────────────────────────────────────────────────┘      │
└───────┬─────────────────────┬──────────────────────┬────────────────┘
        │                     │                      │
        ▼                     ▼                      ▼
┌───────────────┐   ┌──────────────────┐   ┌────────────────────┐
│  Anthropic    │   │    Deepgram      │   │  Persistencia      │
│  Sonnet 4.6   │   │  Nova · Aura-2   │   │  JSON en disco     │
│  con caché    │   │  STT      TTS    │   │                    │
└───────────────┘   └──────────────────┘   └─────────┬──────────┘
                                                     │
                                                     ▼
                                          ┌────────────────────┐
                                          │  Dashboard / CRM   │
                                          │  proxy servidor a  │
                                          │  servidor + clave  │
                                          └────────────────────┘
```

---

## 3. Componentes

### 3.1 Servicios externos

| Servicio | Proveedor | Función | Modelo o plan |
|---|---|---|---|
| Mensajería | Meta | Recepción y envío por WhatsApp, almacenamiento de audio | WhatsApp Business Cloud API |
| Modelo conversacional | Anthropic | Generación de respuesta y extracción de perfil | Claude Sonnet 4.6 |
| Voz a texto | Deepgram | Transcripción de notas de voz | Nova |
| Texto a voz | Deepgram | Síntesis de respuesta hablada | Aura-2, voz `aura-2-celeste-es` |
| Túnel HTTPS | ngrok | Exposición del servidor local a internet | Dominio fijo, plan gratuito |
| Publicidad | Meta Ads | Origen de los leads | Campaña Click-to-WhatsApp |

### 3.2 Selección de la voz

`aura-2-celeste-es` es la voz de acento colombiano del catálogo de Aura-2. La elección no es estética: una voz con acento distinto al del interlocutor introduce distancia en una conversación cuyo objetivo es generar confianza.

### 3.3 Componente de aplicación

| Módulo | Responsabilidad |
|---|---|
| `server.js` | Servidor HTTP, orquestación del turno, endpoints |
| `lib/seguridad.js` | Autenticación, CORS, límite de tasa, firma de webhook |
| `lib/systemPrompt.js` | Construcción del prompt del agente |
| `lib/claude.js` | Cliente de Anthropic con caché de prompt |
| `lib/playbooks.js` | Clasificación en vivo e inyección de guion |
| `lib/cotizador.js` | Plan de pagos y guardas de viabilidad |
| `lib/normativa.js` | Topes VIS/VIP y subsidios vigentes |
| `lib/perfilamientoEstadistico.js` | Clasificación final contra los centroides |
| `lib/audioSTT.js` · `lib/audioTTS.js` | Transcripción y síntesis |
| `lib/whatsapp.js` | Envío, subida de media y parseo de mensajes |
| `lib/store.js` | Persistencia en disco |

---

## 4. Topología de red

### 4.1 Estado actual

El servidor se ejecuta en una estación de trabajo local y se publica mediante un túnel con dominio fijo. El dominio fijo evita reconfigurar el webhook en Meta cada vez que se reinicia el túnel, que era la principal fuente de interrupciones con URLs efímeras.

### 4.2 Flujos

| Origen | Destino | Protocolo | Autenticación |
|---|---|---|---|
| Meta | `POST /webhook` | HTTPS | Firma HMAC-SHA256 |
| Meta | `GET /webhook` | HTTPS | Token de verificación |
| Servidor | Graph API de Meta | HTTPS | Token portador |
| Servidor | API de Anthropic | HTTPS | Clave de API |
| Servidor | API de Deepgram | HTTPS | Clave de API |
| Dashboard | `/api/*` | HTTPS | Clave de servicio en cabecera |

### 4.3 Restricciones observadas en el entorno

Estas condiciones se documentan porque afectan la reproducibilidad del despliegue:

| Condición | Efecto | Resolución aplicada |
|---|---|---|
| Antivirus del sistema pone el binario del túnel en cuarentena | El túnel no inicia | Exclusión declarada |
| Control de aplicaciones bloquea el ejecutable | El túnel no inicia | Control desactivado en la estación de desarrollo |
| Cortafuegos corporativo bloquea el dominio del túnel | Sin conectividad entrante | Uso de red móvil |
| Aviso de interstitial del túnel en rutas navegables | Pantalla intermedia antes del contenido | Aceptación válida por siete días |

En un despliegue productivo desaparecen: el servidor tendría dominio propio y certificado, sin túnel.

---

## 5. Entornos

| Entorno | Ejecución | Exposición | Datos | Seguridad |
|---|---|---|---|---|
| Desarrollo | Local, puerto 3000 | Ninguna | Pruebas | `SEGURIDAD_ESTRICTA=false` admisible |
| Demostración | Local + túnel | Pública por URL | Pruebas | Estricta obligatoria |
| Producción *(no implementado)* | Servicio administrado | Dominio propio | Reales | Estricta + controles de la sección 8 |

---

## 6. Configuración

Toda la configuración se inyecta por variables de entorno. No hay valores sensibles en el código.

### 6.1 Variables

| Variable | Obligatoria | Descripción |
|---|---|---|
| `ANTHROPIC_API_KEY` | Sí | Clave del modelo conversacional |
| `DEEPGRAM_API_KEY` | Sí | Clave de transcripción y síntesis |
| `DEEPGRAM_TTS_MODEL` | No | Voz de síntesis. Predeterminado `aura-2-celeste-es` |
| `WHATSAPP_TOKEN` | Sí | Token de acceso de la aplicación de Meta |
| `WHATSAPP_PHONE_NUMBER_ID` | Sí | Identificador del número de negocio |
| `WHATSAPP_VERIFY_TOKEN` | Sí | Cadena propia para el alta del webhook |
| `META_APP_SECRET` | Sí | Secreto de la aplicación, para verificar firmas |
| `API_KEY` | Sí | Clave de servicio de los endpoints internos |
| `CORS_ORIGINS` | No | Orígenes permitidos, separados por coma |
| `SEGURIDAD_ESTRICTA` | No | `false` permite arrancar con configuración incompleta |
| `PORT` | No | Puerto de escucha. Predeterminado `3000` |
| `DASHBOARD_WEBHOOK_URL` | No | Destino de notificación de leads perfilados |

### 6.2 Validación

El servidor verifica la configuración de seguridad antes de escuchar y termina si es insuficiente. Ver [06 · Seguridad](06-SEGURIDAD.md), sección 3.6.

---

## 7. Persistencia

### 7.1 Almacenes

| Archivo | Contenido | Versionado |
|---|---|---|
| `data/conversaciones.json` | Historial por número de teléfono | **No** — datos personales |
| `data/leads_perfilados.json` | Perfil estructurado por lead | **No** — datos personales |
| `data/proyectos_catalogo.json` | 18 proyectos con entorno enriquecido | Sí |
| `data/perfiles_estadisticos.json` | Centroides del análisis de segmentación | Sí |
| `data/playbooks_conversacionales.json` | Guiones por arquetipo | Sí |
| `data/normativa_vigente_2026.json` | Topes y subsidios | Sí |
| `data/afiliados_sim.json` | 500 afiliados simulados | Sí |

### 7.2 Justificación de JSON en disco

Elección deliberada para el alcance del prototipo: sin dependencia de servicio externo, sin migraciones, inspeccionable con cualquier editor y trivial de respaldar.

**Sus límites son conocidos.** Escritura completa del archivo en cada operación, sin transacciones ni control de concurrencia, y todo el conjunto en memoria. Adecuado para decenas o cientos de conversaciones; no para el volumen de una campaña real.

La ruta de migración natural es PostgreSQL: dos tablas —`conversaciones` y `leads`— con el perfil en una columna `jsonb`, lo que preserva la flexibilidad actual del esquema.

### 7.3 Utilidades de mantenimiento

| Script | Función |
|---|---|
| `preparar-catalogo.js` | Añade el campo de fecha de entrega a los proyectos que no lo tienen, con respaldo previo |
| `migrar-telefonos.js` | Recupera el número de teléfono en registros anteriores a la corrección del esquema |

Ambos generan respaldo antes de modificar y son idempotentes.

---

## 8. Consideraciones para producción

Lo que cambiaría al pasar de prototipo a operación real.

| Área | Estado actual | Requerido |
|---|---|---|
| Alojamiento | Estación local + túnel | Servicio administrado con reinicio automático |
| Dominio | Subdominio del túnel | Dominio propio con certificado gestionado |
| Persistencia | JSON en disco | Base de datos con transacciones y respaldo |
| Escalado | Instancia única | Múltiples réplicas tras balanceador |
| Límite de tasa | Contador en memoria | Almacén compartido entre réplicas |
| Secretos | Archivo `.env` | Gestor de secretos con rotación |
| Observabilidad | Consola | Registro estructurado, métricas y alertas |
| Respaldo | Manual | Automático con retención definida |
| Datos personales | Sin cifrar en reposo | Cifrado, retención y borrado |

### 8.1 Dependencia de instancia única

El estado de conversación vive en memoria y en disco local. Con varias réplicas, dos mensajes del mismo lead podrían atenderse en instancias distintas y perder contexto.

Resolverlo requiere externalizar el estado. Es la condición previa a cualquier escalado horizontal.

---

## 9. Dependencias

### 9.1 De ejecución

| Paquete | Uso |
|---|---|
| `express` | Servidor HTTP |
| `@anthropic-ai/sdk` | Cliente del modelo |
| `axios` | Peticiones a Meta y Deepgram |
| `form-data` | Subida de audio a Meta |
| `dotenv` | Carga de configuración |

Los controles de seguridad se implementaron con el módulo `crypto` de Node.js, sin dependencias adicionales.

### 9.2 Requisitos de plataforma

Node.js 18 o superior. El código usa `fetch` nativo y propiedades Unicode en expresiones regulares —necesarias para remover emojis antes de la síntesis de voz.

---

## 10. Puntos únicos de falla

| Componente | Efecto de su caída | Comportamiento actual |
|---|---|---|
| Túnel HTTPS | Meta no entrega mensajes | Los mensajes se pierden; Meta reintenta con límite |
| API de Anthropic | Sin generación de respuesta | Error registrado, sin respuesta al lead |
| Deepgram STT | Notas de voz no se transcriben | Se solicita al lead que escriba |
| Deepgram TTS | Sin respuesta hablada | **Degradación correcta**: responde por texto |
| Estación de trabajo | Servicio completo caído | Sin recuperación automática |

Solo la síntesis de voz tiene degradación implementada. El resto está identificado como pendiente y se documenta en [08 · Operación](08-OPERACION.md).
