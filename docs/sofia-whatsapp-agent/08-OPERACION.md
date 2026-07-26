# 08 · Operación

| | |
|---|---|
| **Identificador** | SOFIA-DOC-08 |
| **Versión** | 1.0 |
| **Fecha** | 2026-07-26 |
| **Estado** | Vigente |
| **Audiencia** | Equipo técnico, evaluadores que desplieguen el sistema |
| **Documentos relacionados** | [05 · Infraestructura](05-INFRAESTRUCTURA.md) · [06 · Seguridad](06-SEGURIDAD.md) |

---

## 1. Alcance

Procedimientos de instalación, puesta en marcha, verificación y diagnóstico. Dirigido a quien necesite ejecutar el sistema por primera vez o resolver una incidencia durante su operación.

---

## 2. Requisitos previos

| Elemento | Detalle |
|---|---|
| Node.js | Versión 18 o superior |
| Cuenta de Meta Business | Verificada, con aplicación creada |
| Clave de Anthropic | De `console.anthropic.com` |
| Clave de Deepgram | Con acceso a Nova y Aura-2 |
| Túnel HTTPS | ngrok u equivalente, preferiblemente con dominio fijo |

---

## 3. Instalación

```bash
git clone <repositorio>
cd whatsapp-server
npm install
cp .env.example .env
```

### 3.1 Generar la clave de servicio

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

El valor resultante va en `API_KEY`. Debe compartirse con el equipo del dashboard por un canal seguro —nunca por el repositorio ni por mensajería no cifrada.

### 3.2 Obtener el secreto de aplicación de Meta

En `developers.facebook.com` → aplicación → **Configuración → Básico** → *Clave secreta de la app*. Va en `META_APP_SECRET`.

Sin este valor el webhook no puede verificar que el remitente sea Meta. Ver [06 · Seguridad](06-SEGURIDAD.md), sección 3.5.

### 3.3 Preparar el catálogo

```bash
node preparar-catalogo.js
```

Añade el campo de fecha de entrega a los proyectos que no lo tengan, con respaldo previo. El campo debe completarse manualmente con el dato del cotizador oficial de cada proyecto, paso 1.

**Sin fecha de entrega el agente no cotiza ese proyecto y remite a un asesor.** Es el comportamiento previsto: el plazo determina el régimen completo del plan de pagos y no se infiere.

Formatos aceptados: `enero 2028`, `1er semestre 2028`, `2028-01`.

---

## 4. Puesta en marcha

### 4.1 Exponer el servidor

```bash
ngrok http 3000
```

### 4.2 Registrar el webhook en Meta

En **WhatsApp → Configuration → Webhook**:

| Campo | Valor |
|---|---|
| Callback URL | `https://<dominio-del-túnel>/webhook` |
| Verify Token | El mismo valor de `WHATSAPP_VERIFY_TOKEN` |
| Webhook fields | Suscribir `messages` |

El servidor debe estar en ejecución al pulsar **Verify and Save**.

### 4.3 Iniciar

```bash
npm start
```

Salida esperada:

```
🔒 Configuración de seguridad verificada
🚀 Servidor de Sofía escuchando en el puerto 3000
   Catálogo cargado: 18 proyectos
```

Si aparece el recuadro de configuración incompleta, el servidor no arranca. Ver sección 6.1.

---

## 5. Verificación

### 5.1 Prueba funcional

Enviar al número de negocio:

> *Hola, tengo 34 años, vivo con mi pareja y gano cuatro millones quinientos mil. ¿Puedes cotizarme Guayacán?*

Trazas esperadas en consola:

```
🎤 Nota de voz recibida de <número>, transcribiendo...
🔀 El lead cambió de proyecto: entró por X, ahora pregunta por Y
💵 Ingreso del lead registrado: $4.500.000
🔎 Evaluando cotización de: Reserva de Guayacán
🎯 Perfil detectado: familia-joven-consolidada (alta)
💰 Tokens — input nuevo: …, caché reutilizada: …
```

### 5.2 Prueba de seguridad

```bash
curl -i https://<dominio>/api/leads
# esperado: 401

curl -i -H "X-API-Key: <clave>" https://<dominio>/api/leads
# esperado: 200
```

Si la primera devuelve `200`, el sistema está exponiendo datos personales sin autenticación. Detener el servicio.

---

## 6. Guía de diagnóstico

### 6.1 El servidor no arranca

| Mensaje | Causa | Acción |
|---|---|---|
| `API_KEY ausente` | Falta la clave de servicio | Generarla según 3.1 |
| `META_APP_SECRET ausente` | Falta el secreto de aplicación | Obtenerlo según 3.2 |
| `API_KEY demasiado corta` | Clave escrita manualmente | Regenerar con el comando indicado |

Para desarrollo local sin exposición externa: `SEGURIDAD_ESTRICTA=false npm start`. **No usar así con datos reales.**

### 6.2 El agente no responde

| Síntoma | Causa probable | Acción |
|---|---|---|
| Sin trazas en consola | Meta no alcanza el webhook | Verificar túnel activo y URL registrada |
| `🔒 Webhook sin firma` | `META_APP_SECRET` incorrecto | Confirmar el valor en Meta |
| Error de autenticación al enviar | Token de WhatsApp caducado | El token temporal dura 24 h; generar uno permanente |
| Error del modelo | Clave inválida o sin saldo | Verificar en la consola del proveedor |

### 6.3 El agente no cotiza

La traza indica exactamente qué falta:

```
💤 Sin cotización — falta: fecha de entrega ausente en el catálogo
💤 Sin cotización — falta: ingresos del lead
```

| Falta | Acción |
|---|---|
| Fecha de entrega | Completar el campo en el catálogo y reiniciar |
| Ingresos | El interesado no los ha declarado, o la formulación no se interpretó |
| Proyecto no encontrado | El nombre mencionado no coincide con el catálogo |
| Precio no interpretable | Revisar el formato del campo en el catálogo |

El catálogo se lee al arrancar: cualquier edición requiere reinicio.

### 6.4 Problemas de audio

| Síntoma | Causa | Acción |
|---|---|---|
| El agente pronuncia nombres de emoji | Texto sin normalizar llegó a la síntesis | Verificar que la limpieza previa esté activa |
| Sin respuesta hablada | Fallo de síntesis | Degradación prevista: responde por texto. Revisar la clave de Deepgram |
| Acento no colombiano | Voz mal configurada | `DEEPGRAM_TTS_MODEL=aura-2-celeste-es` |
| El audio llega como archivo adjunto | Formato distinto a OGG/Opus | Cosmético; ver [02 · Arquitectura](02-ARQUITECTURA.md) |

### 6.5 Costo por conversación elevado

Revisar la traza de tokens. `caché reutilizada` debe crecer a partir del segundo turno de una conversación:

```
💰 Tokens — input nuevo: 6209, caché creada: 0, caché reutilizada: 10683, output: 114
```

Si permanece en cero, algo está alterando el prompt fijo en cada turno y se paga el precio completo. El bloque dinámico debe ir **después** del punto de corte de la caché.

### 6.6 Interrupciones del túnel

| Situación | Resolución |
|---|---|
| El antivirus pone el binario en cuarentena | Declarar exclusión |
| El control de aplicaciones bloquea el ejecutable | Desactivar en la estación de desarrollo |
| Un cortafuegos corporativo bloquea el dominio | Usar red alterna |
| Aviso interstitial en rutas navegables | Aceptar; válido siete días |
| La URL cambia al reiniciar | Usar dominio fijo; de lo contrario, reconfigurar el webhook |

---

## 7. Operaciones de mantenimiento

| Tarea | Comando | Frecuencia |
|---|---|---|
| Preparar campos del catálogo | `node preparar-catalogo.js` | Una vez |
| Recuperar teléfonos en registros antiguos | `node migrar-telefonos.js` | Una vez |
| Respaldar datos | Copiar `data/*.json` | Antes de cada demostración |

Ambos scripts generan respaldo previo y son idempotentes.

---

## 8. Lista de verificación previa a una demostración

- [ ] El túnel está activo y la URL registrada en Meta coincide
- [ ] El servidor arrancó con `🔒 Configuración de seguridad verificada`
- [ ] `curl` sin clave a `/api/leads` devuelve `401`
- [ ] Los proyectos de la demostración tienen fecha de entrega
- [ ] Una conversación de prueba completa el ciclo, incluida la cotización
- [ ] La respuesta hablada suena con acento colombiano y sin nombres de emoji
- [ ] `data/*.json` respaldados
- [ ] El token de WhatsApp es permanente, no el temporal de 24 horas
