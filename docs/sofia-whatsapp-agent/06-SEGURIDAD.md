# 06 · Seguridad y protección de datos

| | |
|---|---|
| **Identificador** | SOFIA-DOC-06 |
| **Versión** | 1.0 |
| **Fecha** | 2026-07-26 |
| **Estado** | Vigente |
| **Audiencia** | Equipo técnico, evaluadores, responsable de datos |
| **Documentos relacionados** | [02 · Arquitectura](02-ARQUITECTURA.md) · [05 · Infraestructura](05-INFRAESTRUCTURA.md) · [08 · Operación](08-OPERACION.md) |

---

## 1. Alcance

Este documento describe los controles de acceso de la superficie HTTP del servidor, el tratamiento de datos personales y el procedimiento ante incidentes. Aplica a todos los entornos donde el servidor sea alcanzable desde una red pública.

No cubre la seguridad de los proveedores externos (Anthropic, Deepgram, Meta), regida por sus propios acuerdos.

---

## 2. Modelo de amenaza

### 2.1 Superficie expuesta

El servidor necesita ser alcanzable desde internet para que Meta pueda entregar los mensajes en el webhook. El túnel que lo permite **expone el servidor completo**, no solo esa ruta. Cualquier endpoint definido queda accesible para quien conozca o descubra la URL.

### 2.2 Activos a proteger

| Activo | Dónde vive | Sensibilidad |
|---|---|---|
| Datos personales de leads | `data/leads_perfilados.json` | Alta — nombre, teléfono, ingresos, composición familiar |
| Transcripciones de conversación | `data/conversaciones.json` | Alta — contenido íntegro, incluye audio transcrito |
| Capacidad de enviar WhatsApp | Token de Meta en `.env` | Crítica — permite suplantar a la caja |
| Credenciales de modelo | `ANTHROPIC_API_KEY`, `DEEPGRAM_API_KEY` | Alta — consumo facturable |

### 2.3 Escenarios considerados

| # | Escenario | Impacto |
|---|---|---|
| A-1 | Un tercero descarga el listado completo de leads | Fuga masiva de datos personales |
| A-2 | Un tercero envía mensajes desde el número oficial | Suplantación de la caja de compensación ante ciudadanos |
| A-3 | Un tercero inyecta mensajes falsos en el webhook | Consumo facturable y respuestas automáticas a números arbitrarios |
| A-4 | Un tercero toma el control de una conversación activa | Interferencia en una relación comercial en curso |
| A-5 | Credenciales publicadas en el repositorio | Compromiso total y persistente |

A-2 es el de mayor severidad: no afecta a la organización, afecta a terceros que confían en el remitente.

---

## 3. Controles implementados

Cuatro capas, aplicadas en orden por el servidor.

### 3.1 Cabeceras de endurecimiento

Se aplican a toda respuesta.

| Cabecera | Valor | Propósito |
|---|---|---|
| `X-Content-Type-Options` | `nosniff` | Impide reinterpretación del tipo de contenido |
| `X-Frame-Options` | `DENY` | Impide incrustación en marcos de terceros |
| `Referrer-Policy` | `no-referrer` | Evita filtrar la URL del túnel a sitios externos |
| `Cache-Control` | `no-store` | Impide que respuestas con datos personales queden en cachés intermedias |
| `X-Powered-By` | *(removida)* | Reduce información de versión disponible para un atacante |

### 3.2 CORS con lista blanca

Se reemplazó `Access-Control-Allow-Origin: *` por una lista declarada en `CORS_ORIGINS`.

Si la variable está vacía **no se emite cabecera CORS alguna**, que es el comportamiento correcto cuando el dashboard consume por proxy servidor-a-servidor: en ese caso no interviene ningún navegador y CORS no aplica.

> El comodín no era una debilidad por sí solo —CORS protege al navegador, no al servidor— pero indicaba la ausencia del control que sí faltaba: la autenticación.

### 3.3 Limitación de tasa

120 peticiones por minuto por dirección de origen. Excedido el umbral se responde `429` con cabecera `Retry-After`.

Mitiga fuerza bruta sobre la clave de servicio y limita el volumen extraíble ante una credencial comprometida. La implementación es en memoria: válida para una instancia única, requiere almacén compartido si se despliegan réplicas.

### 3.4 Autenticación por clave de servicio

Todo `/api/*` exige la cabecera `X-API-Key`.

```http
GET /api/leads HTTP/1.1
X-API-Key: <clave de 32 bytes en hexadecimal>
```

Características:

- **Comparación en tiempo constante.** Una comparación ordinaria termina en el primer carácter distinto, y esa diferencia de tiempo es medible: permite reconstruir la clave carácter por carácter. Se usa `crypto.timingSafeEqual`.
- **La clave nunca llega al navegador.** La custodia el backend del dashboard, que actúa como proxy. Si se enviara desde el frontend quedaría visible en el código del cliente y la protección sería decorativa.
- **Registro de intentos fallidos** con ruta y origen.

Generación:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3.5 Verificación de firma del webhook

El webhook no puede usar clave de servicio: Meta no la enviaría. Se valida con la firma HMAC-SHA256 que Meta incluye en `X-Hub-Signature-256`, calculada con el secreto de la aplicación.

La verificación se hace sobre el **cuerpo crudo** de la petición. Recalcularla sobre el JSON parseado y vuelto a serializar produce bytes distintos —por orden de claves o espaciado— y la firma nunca coincidiría.

Sin este control, cualquiera puede enviar mensajes falsos que el servidor procesa como reales: llama al modelo con costo asociado y responde por WhatsApp a números arbitrarios (escenario A-3).

### 3.6 Validación al arranque

El servidor verifica su configuración de seguridad **antes** de escuchar. Si falta `API_KEY` o `META_APP_SECRET`, imprime el diagnóstico y termina.

> Un servidor que arranca sin autenticación es peor que uno que no arranca: aparenta funcionar mientras expone datos personales.

Para desarrollo local sin exposición externa puede relajarse con `SEGURIDAD_ESTRICTA=false`, que continúa con advertencia.

---

## 4. Matriz de exposición

Estado después de aplicar los controles.

| Endpoint | Antes | Ahora | Justificación |
|---|---|---|---|
| `GET /webhook` | Token de verificación | Token de verificación | Requerido por Meta en el alta |
| `POST /webhook` | Abierto | Firma HMAC | Único remitente legítimo es Meta |
| `GET /api/leads` | Abierto + CORS `*` | Clave de servicio | Contiene datos personales |
| `GET /api/conversacion/:telefono` | Abierto + CORS `*` | Clave de servicio | Transcripciones completas |
| `POST /api/cotizar` | Abierto + CORS `*` | Clave de servicio | Sin datos personales, pero es cómputo |
| `POST /api/retomar-conversacion` | Abierto + CORS `*` | Clave de servicio | Altera el estado de una conversación |
| `POST /api/devolver-agente` | Abierto + CORS `*` | Clave de servicio | Altera el estado de una conversación |
| `POST /api/enviar-mensaje-asesor` | Abierto + CORS `*` | Clave de servicio | **Permite enviar mensajes desde el número oficial** |
| `GET /` | Abierto | Abierto | Solo estado del servicio |
| `GET /reporte` | Abierto | Abierto | Ver 4.1 |

### 4.1 Excepción documentada

`GET /reporte` sigue accesible sin autenticación porque se comparte por enlace directo durante la evaluación. Contiene datos agregados, no listados individuales.

**Es una decisión consciente con vigencia limitada al periodo de hackathon.** Antes de cualquier uso con datos reales de producción debe protegerse con el mismo control que el resto, o servirse desde un dominio distinto con autenticación propia.

---

## 5. Tratamiento de datos personales

### 5.1 Datos recolectados

Nombre, número de teléfono, rango de edad, composición familiar, rango de ingresos, zona de residencia u ocupación, y el contenido íntegro de la conversación —incluida la transcripción de las notas de voz.

En términos de la Ley 1581 de 2012, esto constituye tratamiento de datos personales y la organización que lo opere actúa como responsable del tratamiento.

### 5.2 Principios aplicados en el diseño

**Minimización.** El campo `datacredito` existe en el esquema del lead como marcador para una integración futura y **siempre es nulo**. No se consulta ni se infiere información crediticia. El modelo tiene instrucción explícita de no inventar su contenido.

**Sin categorías especiales.** El agente no pregunta ni infiere datos sensibles en el sentido del artículo 5 de la Ley 1581.

**Transparencia sobre la naturaleza del interlocutor.** El agente se identifica como asistente virtual. No simula ser una persona.

**El perfilamiento no se revela.** La clasificación estadística nunca se le comunica al lead. No se le informa a qué segmento pertenece ni se le mencionan porcentajes o arquetipos.

### 5.3 Persistencia

Los archivos con datos personales están excluidos del control de versiones mediante `.gitignore`:

```
data/conversaciones.json
data/leads_perfilados.json
data/*.backup.json
```

### 5.4 Pendientes para uso en producción

Este prototipo **no está listo** para operar con datos reales a escala. Faltan:

- Cifrado en reposo de los archivos de datos
- Política de retención y borrado automático
- Registro de auditoría de accesos al listado de leads
- Mecanismo para atender solicitudes de consulta, rectificación y supresión
- Aviso de privacidad y captura de autorización de tratamiento dentro del flujo conversacional

El último es el más relevante en términos de cumplimiento: el cotizador web actual solicita autorización explícita antes de recolectar datos de contacto, y el equivalente conversacional aún no está implementado.

---

## 6. Gestión de credenciales

### 6.1 Inventario

| Variable | Proveedor | Impacto si se filtra |
|---|---|---|
| `ANTHROPIC_API_KEY` | Anthropic | Consumo facturable |
| `DEEPGRAM_API_KEY` | Deepgram | Consumo facturable |
| `WHATSAPP_TOKEN` | Meta | Envío de mensajes desde el número oficial |
| `WHATSAPP_VERIFY_TOKEN` | Propio | Registro de webhooks falsos |
| `META_APP_SECRET` | Meta | Falsificación de firmas de webhook |
| `API_KEY` | Propio | Acceso completo a datos de leads |

### 6.2 Reglas

1. El archivo `.env` **nunca** se versiona. `.env.example` documenta las variables sin valores.
2. Ningún valor de credencial aparece en registros de consola, mensajes de error ni documentación.
3. Las claves propias se generan con `crypto.randomBytes(32)`, no manualmente.
4. Ante sospecha de exposición se rota de inmediato; no se espera confirmación.

### 6.3 Si una credencial llegó al repositorio

**Borrar el archivo en un commit posterior no lo elimina del historial.** Sigue siendo recuperable por cualquiera que clone el repositorio.

Procedimiento:

1. Rotar la credencial en el proveedor. Es el paso que efectivamente cierra la exposición.
2. Reescribir el historial con `git filter-repo` o equivalente.
3. Forzar la actualización del remoto.
4. Asumir que la credencial anterior está comprometida de forma permanente.

Verificación previa al primer envío:

```bash
git status --ignored | grep -E "\.env|conversaciones|leads_perfilados"
```

Los tres deben aparecer como ignorados. Si alguno aparece preparado para envío, detener el proceso.

---

## 7. Verificación

Los controles se validan con el siguiente conjunto de pruebas. Resultado de la última ejecución: **6 de 6 conformes**.

| # | Prueba | Esperado | Resultado |
|---|---|---|---|
| V-1 | `GET /api/leads` sin cabecera de clave | `401` | ✔ |
| V-2 | `GET /api/leads` con clave incorrecta | `401` | ✔ |
| V-3 | `GET /api/leads` con clave correcta | `200` | ✔ |
| V-4 | `POST /webhook` sin firma | `401` | ✔ |
| V-5 | `POST /webhook` con firma válida | `200` | ✔ |
| V-6 | Cabeceras de endurecimiento presentes y CORS ausente sin origen permitido | Presentes | ✔ |

---

## 8. Limitaciones conocidas

| Limitación | Riesgo residual | Mitigación propuesta |
|---|---|---|
| Clave de servicio única, sin rotación ni caducidad | Un compromiso obliga a rotación manual coordinada | Emisión de credenciales por consumidor con caducidad |
| Sin control de acceso por rol | Todo consumidor autenticado ve todos los leads | Autorización por asesor o por proyecto |
| Limitador de tasa en memoria | No funciona con múltiples réplicas | Almacén compartido |
| `GET /reporte` sin autenticación | Exposición de datos agregados | Ver sección 4.1 |
| Sin registro de auditoría | No hay trazabilidad de quién consultó qué | Bitácora de accesos al listado |
| Datos en reposo sin cifrar | Lectura directa con acceso al sistema de archivos | Cifrado a nivel de volumen o de aplicación |

Estas limitaciones son aceptables para un prototipo de hackathon operando con datos de prueba. **Se documentan explícitamente porque dejarían de serlo con datos reales de ciudadanos.**
