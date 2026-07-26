# 🔐 Variables de Entorno

Configuración de variables de entorno requeridas para el funcionamiento del sistema.

**Archivo de referencia:** `.env.example`

---

## Variables Requeridas

| Variable | Requerida | Descripción |
|----------|-----------|-------------|
| `GEMINI_API_KEY` | Opcional* | API Key de Google Gemini para el asistente IA del portal del comprador |
| `APP_URL` | Opcional | URL base de la aplicación (para links autoreferenciales y callbacks) |

> **\*** Si `GEMINI_API_KEY` no está configurada, el sistema utiliza un motor de respuestas basado en reglas como fallback inteligente.

---

## Configuración

### 1. Copiar el archivo de ejemplo

```bash
cp .env.example .env
```

### 2. Editar `.env`

```env
# API Key de Google Gemini
# Obtener en: https://aistudio.google.com/app/apikey
GEMINI_API_KEY="tu-api-key-aqui"

# URL de la aplicación
# En desarrollo: http://localhost:3000
# En producción: URL del deployment
APP_URL="http://localhost:3000"
```

---

## Variables por Entorno

### Desarrollo Local
```env
GEMINI_API_KEY="tu-api-key-de-desarrollo"
APP_URL="http://localhost:3000"
```

### Google AI Studio
Las variables son inyectadas automáticamente por la plataforma:
- `GEMINI_API_KEY` → Desde los secretos del usuario
- `APP_URL` → URL del servicio Cloud Run

### Vercel (Producción)
Configurar en el dashboard de Vercel → Settings → Environment Variables:
- `GEMINI_API_KEY` → Encrypt (Sensitive)
- `APP_URL` → Plain text

---

## Configuración del Agente Sofía

La URL del backend de Sofía se configura directamente en el código fuente:

**Archivo:** `lib/sofiaClient.ts`

```typescript
const SOFIA_BASE_URL = "https://[tu-ngrok-url].ngrok-free.dev";
```

> **Nota:** La URL de Ngrok cambia cada vez que se reinicia el tunnel. En producción, reemplazar con una URL fija.

---

## Seguridad

> [!CAUTION]
> - **Nunca** incluir `.env` en el control de versiones
> - El archivo `.gitignore` ya excluye `.env` por defecto
> - En producción, usar gestores de secretos (Vercel Secrets, GCP Secret Manager)
> - La `GEMINI_API_KEY` tiene un costo asociado por uso

---

> **Ver también:** [Guía de Instalación](./06-GUIA-INSTALACION.md) · [Arquitectura](./01-ARQUITECTURA.md)
