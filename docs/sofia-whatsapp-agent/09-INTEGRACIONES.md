# 09 · Integraciones

| | |
|---|---|
| **Identificador** | SOFIA-DOC-09 |
| **Versión** | 0.1 |
| **Fecha** | 2026-07-26 |
| **Estado** | En preparación |
| **Audiencia** | Equipo técnico, arquitectura de integración |
| **Documentos relacionados** | [02 · Arquitectura](02-ARQUITECTURA.md) · [06 · Seguridad](06-SEGURIDAD.md) |

---

## 1. Alcance previsto

Especificación de las interfaces entre el sistema y los sistemas corporativos:

| Integración | Propósito |
|---|---|
| **SAP S/4HANA** | Sincronización de inventario de unidades, precios vigentes y fechas de entrega; registro de separaciones |
| **Salesforce** | Publicación de leads calificados como registros de oportunidad, con perfil y trazabilidad de la conversación |
| **Meta Marketing API** | Consumo de métricas de campaña y atribución del lead a su anuncio de origen |

## 2. Estado

Documento en preparación. El sistema opera hoy con persistencia local y expone `GET /api/leads` para consumo del sistema comercial, lo que constituye el punto de anclaje sobre el que se construirán estas interfaces.

## 3. Control de versiones

| Versión | Fecha | Cambio |
|---|---|---|
| 0.1 | 2026-07-26 | Marcador de alcance |
