# 📚 Documentación — Colsubsidio Lead Intelligence

Bienvenido al centro de documentación del proyecto. Aquí encontrarás toda la información técnica, funcional y operativa del ecosistema **Colsubsidio Lead Intelligence**.

---

## 📁 Estructura de Documentación

```
docs/
├── README.md                          ← Este archivo (índice general)
├── 01-ARQUITECTURA.md                 ← Arquitectura técnica del sistema
├── 02-MODULOS-FUNCIONALES.md          ← Descripción de módulos y vistas
├── 03-MODELO-DATOS.md                 ← Modelos de datos y tipos TypeScript
├── 04-API-ENDPOINTS.md                ← Documentación de API del servidor
├── 05-SCORING-LEAD-INTELLIGENCE.md    ← Algoritmo de scoring y previabilidad
├── 06-GUIA-INSTALACION.md             ← Guía de instalación y despliegue
├── 07-VARIABLES-ENTORNO.md            ← Variables de entorno requeridas
│
└── sofia-whatsapp-agent/              ← Documentación del Agente Sofía (WhatsApp IA)
    ├── README.md                      ← Visión general del agente Sofía
    ├── CHANGELOG.md                   ← Historial de cambios de Sofía
    ├── 01-VISION-GENERAL.md           ← Propósito y alcance
    ├── 02-ARQUITECTURA.md             ← Arquitectura n8n + Baileys + GPT-4o
    ├── 03-CASOS-DE-USO.md             ← Flujos conversacionales
    ├── 04-DIAGRAMAS.md                ← Diagramas de flujo y arquitectura
    ├── 05-INFRAESTRUCTURA.md          ← Infraestructura de despliegue
    ├── 06-SEGURIDAD.md                ← Políticas de seguridad
    ├── 07-HALLAZGOS.md                ← Hallazgos y aprendizajes
    ├── 08-OPERACION.md                ← Manual de operación
    ├── 09-INTEGRACIONES.md            ← Integraciones con CRM y APIs
    └── data/
        ├── normativa_vigente_2026.json
        └── playbooks_conversacionales.json
```

---

## 🗺️ Mapa de Documentación

| Documento | Descripción | Audiencia |
|-----------|-------------|-----------|
| [Arquitectura](./01-ARQUITECTURA.md) | Stack tecnológico, diagrama de componentes, flujo de datos | Desarrolladores |
| [Módulos Funcionales](./02-MODULOS-FUNCIONALES.md) | Descripción detallada de cada vista y módulo del CRM | Producto / Desarrolladores |
| [Modelo de Datos](./03-MODELO-DATOS.md) | Interfaces TypeScript, estructuras de datos, contratos | Desarrolladores |
| [API Endpoints](./04-API-ENDPOINTS.md) | Rutas del servidor, request/response, proxy de Sofía | Desarrolladores / DevOps |
| [Scoring & Lead Intelligence](./05-SCORING-LEAD-INTELLIGENCE.md) | Algoritmo Score 360, previabilidad financiera, escalación | Producto / Data Science |
| [Guía de Instalación](./06-GUIA-INSTALACION.md) | Instalación local, build de producción, despliegue | Desarrolladores / DevOps |
| [Variables de Entorno](./07-VARIABLES-ENTORNO.md) | Configuración de API keys y URLs | DevOps |
| [Agente Sofía (WhatsApp)](./sofia-whatsapp-agent/README.md) | Documentación completa del agente IA conversacional | Todo el equipo |

---

## 🔗 Enlaces Rápidos

- **Repositorio:** `colsubsidio-lead-intelligence`
- **Stack:** React 19 · TypeScript 5.8 · Vite 6 · Tailwind CSS 4 · Express · Google Gemini
- **Agente IA:** Sofía (WhatsApp) — n8n + Baileys + GPT-4o / Claude

---

> **Última actualización:** Julio 2026
