# Registro de cambios

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [1.1.0] — 2026-07-26

### Añadido
- Controles de acceso sobre la superficie HTTP: autenticación por clave de servicio en `/api/*`, verificación de firma HMAC del webhook de Meta, limitación de tasa y cabeceras de endurecimiento (`lib/seguridad.js`).
- Validación de configuración de seguridad al arranque. El servidor no inicia sin `API_KEY` ni `META_APP_SECRET`.
- Endpoint `POST /api/cotizar` para simulación de planes de pago desde el sistema comercial.
- Conocimiento normativo vigente 2026: topes VIS/VIP por ubicación, tabla de subsidio y programas distritales (`lib/normativa.js`).
- Documentación formal del sistema en siete documentos numerados.

### Cambiado
- Reemplazado `Access-Control-Allow-Origin: *` por lista blanca configurable.
- El tope VIS se resuelve según la ubicación del proyecto en lugar de un valor único.
- El proyecto a cotizar se determina por la mención más reciente del interesado, no por el mensaje de origen del anuncio.

### Corregido
- El motor de síntesis pronunciaba los emojis por su nombre Unicode.
- Los ingresos declarados en palabras no se interpretaban.
- El separador decimal se leía como separador de miles, duplicando el ingreso interpretado.
- La puntuación de fin de frase adherida a una cifra invalidaba su interpretación.
- Una corrección posterior del ingreso no reemplazaba al valor inicial.

## [1.0.0] — 2026-07-25

### Añadido
- Conversación por WhatsApp en texto y voz.
- Perfilamiento en vivo con adaptación del discurso por arquetipo.
- Cotización con verificación de capacidad de pago.
- Traspaso a asesor humano y retorno al agente.
