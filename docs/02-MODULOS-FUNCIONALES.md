# 📦 Módulos Funcionales

Descripción detallada de cada vista y módulo del CRM de asesores comerciales de Colsubsidio Vivienda.

---

## 1. 🏠 Inicio (`InicioView`)

**Ruta:** Vista principal al iniciar sesión  
**Archivo:** `src/advisor/components/views/InicioView.tsx`

### Descripción
Dashboard principal del asesor comercial, diseñado como "Tu día de un vistazo". Presenta en una sola pantalla toda la información necesaria para la gestión diaria.

### Funcionalidades
- **KPIs Animados**: Contadores con animación de leads nuevos, citas del día, conversiones del mes y tasa de respuesta
- **Buscador por Teléfono**: Búsqueda rápida de leads por número de teléfono con normalización automática
- **Tabla de Leads**: Lista de 200 leads con columnas de nombre, teléfono, ciudad, score 360 (con barra de batería visual), categoría y estado
- **Modal Flotante de Detalle**: Al hacer clic en un lead, se despliega un modal animado con:
  - Header con avatar, tags (categoría, ciudad, score), accesos directos a WhatsApp y Score 360
  - Grilla de 3 columnas: Previabilidad Financiera, Intención de Compra, Proyectos & Recomendación
  - Próxima Mejor Acción con tema WhatsApp
  - Información General del Lead
- **Botones Flotantes**: 
  - Operación Comercial del Día (tareas y acciones pendientes)
  - Alerta de Inventario de Vivienda (rotación de proyectos con gráfico de edificios)

---

## 2. 👥 Leads (`LeadsView`)

**Archivo:** `src/advisor/components/views/LeadsView.tsx`

### Descripción
Directorio maestro de todos los leads con herramientas avanzadas de filtrado, búsqueda y gestión de estados.

### Funcionalidades
- **Búsqueda Multi-campo**: Por nombre, email, teléfono, ciudad
- **Filtros Avanzados**: Por estado, temperatura (Hot/Warm/Cold), categoría de afiliación
- **Tabla Completa**: Nombre, contacto, canal de origen, campaña, presupuesto, Score 360 con barra de batería, estado
- **Gestión de Estados**: Cambio rápido de estado directamente desde la tabla
- **Acciones Rápidas**: Abrir WhatsApp, ver Score 360, exportar datos
- **Indicadores Visuales**: Colores por temperatura, badges por categoría

---

## 3. 💼 Negocios (`NegociosView`)

**Archivo:** `src/advisor/components/views/NegociosView.tsx`

### Descripción
Pipeline visual de negocios tipo Kanban con 5 etapas del proceso comercial.

### Etapas del Pipeline
1. **Prospección** — Lead calificado, primer contacto
2. **Cita en Sala de Ventas** — Visita agendada al proyecto
3. **Pre-Aprobado** — Crédito o subsidio en trámite
4. **Promesa Firmada** — Documento de compraventa firmado
5. **Cierre Exitoso** — Escrituración completada

### Funcionalidades
- Valor total del pipeline en COP
- Estado de validación de subsidio por negocio
- Porcentaje de probabilidad de cierre
- Drag & drop visual entre etapas

---

## 4. 🏢 Proyectos (`ProyectosView`)

**Archivo:** `src/advisor/components/views/ProyectosView.tsx`

### Descripción
Catálogo interactivo de proyectos de vivienda VIS y No VIS de Colsubsidio.

### Funcionalidades
- **Filtros**: Por tipo (VIS/No VIS), municipio, alertas de rotación
- **Tarjetas de Proyecto**: Precio, área, unidades disponibles, subsidios aplicables, fecha de entrega
- **Simulador de Subsidio**: Resumen rápido de subsidios disponibles según perfil
- **Modal de Mapa**: Visualización de ubicación del proyecto con Leaflet (coordenadas GPS)
- **Alertas de Rotación**: Identificación de proyectos con inventario de baja rotación

---

## 5. 🎯 Score 360 (`Score360View`)

**Archivo:** `src/advisor/components/views/Score360View.tsx`

### Descripción
Vista detallada del perfil de scoring de un lead individual con descomposición en 4 dimensiones.

### Dimensiones del Score
| Dimensión | Peso | Qué Mide |
|-----------|------|----------|
| **Fit** (Ajuste) | 25% | Coincidencia con perfil ideal de comprador |
| **Intent** (Intención) | 30% | Señales activas de compra |
| **Engagement** | 20% | Nivel de interacción con canales |
| **Conversion** | 25% | Probabilidad de cierre estimada |

### Funcionalidades
- Gauge visual del score total (0-100)
- Desglose por dimensión con indicadores de color
- Previabilidad financiera con señales positivas y alertas pendientes
- Historial de comportamiento digital (botón flotante)
- Intención de compra con timeline y motivación

---

## 6. 🧠 Buyer Personas IA (`BuyerPersonasView`)

**Archivo:** `src/advisor/components/views/BuyerPersonasView.tsx`

### Descripción
Clusters de buyer personas generados por IA (K-Means) a partir de 4,142+ registros históricos de compradores.

### Funcionalidades
- **Header**: Modelo de Clustering IA v3.2 con badge de versión
- **KPIs**: Clusters identificados, cobertura del universo, tendencia principal, uso recomendado
- **3 Columnas de Clusters**: Cada una con:
  - Nombre y porcentaje del universo
  - Rango de ingresos y edad promedio
  - Descripción demográfica
  - Pain Points (puntos de dolor) con bullets rojos
  - Triggers de compra con bullets verdes
  - Tags de proyectos recomendados
  - Script comercial IA con botón de copiar

---

## 7. 📢 Campañas (`CampanasView`)

**Archivo:** `src/advisor/components/views/CampanasView.tsx`

### Descripción
Dashboard de rendimiento de campañas de marketing digital con generador de copy por IA.

### Funcionalidades
- Métricas por campaña: gasto, leads, CPL, CTR, conversión
- Comparación entre canales (Meta, Google, TikTok)
- **Generador de Copy IA**: Herramienta interactiva con Google Gemini para crear copys publicitarios con variantes A/B

---

## 8. 🔄 Remarketing (`RemarketingView`)

**Archivo:** `src/advisor/components/views/RemarketingView.tsx`

### Descripción
Sistema de secuencias de remarketing automatizado organizado por temperatura de lead.

### Tracks de Nurturing
| Track | Objetivo | Frecuencia |
|-------|----------|------------|
| **Hot** (🔴) | Fast-track a cierre | Contacto diario |
| **Warm** (🟡) | Nurturing educativo | Cada 3-5 días |
| **Cold** (🔵) | Re-engagement y educación sobre afiliación | Semanal |

---

## 9. 📊 Paneles (`PanelesView`)

**Archivo:** `src/advisor/components/views/PanelesView.tsx`

### Descripción
Panel ejecutivo de analytics con 10 componentes de visualización Recharts.

### Componentes de Analytics
1. **Funnel de Conversión** — De lead a cierre
2. **Heatmap de Intención** — Mapa de calor de intención de compra
3. **Comparación de Canales** — Meta vs Google vs TikTok vs WhatsApp
4. **Matriz de Priorización** — Score vs probabilidad de cierre
5. **Evolución del Score** — Tendencia temporal del scoring
6. **Ranking de Score** — Top leads por puntuación
7. **Calidad de Campañas** — ROI y calidad de leads por campaña
8. **Diagrama Sankey** — Flujo de leads entre estados
9. **Próxima Mejor Acción** — Distribución de acciones recomendadas
10. **Customer Journey** — Timeline del recorrido del comprador

---

## 10. 🔬 Perfilamiento (`PerfilamientoView`)

**Archivo:** `src/advisor/components/views/PerfilamientoView.tsx`

### Descripción
Dashboard de machine learning que documenta la metodología de clustering estadístico K-Means utilizada para segmentar a los 4,142+ compradores históricos.

### Funcionalidades
- Visualización de silhouettes para k=3 a k=8
- Modelo de riesgo de desistimiento
- Perfiles estadísticos de compradores
- Métricas de validación del modelo

---

## 11. ⚙️ Configuración (`ConfiguracionView`)

**Archivo:** `src/advisor/components/views/ConfiguracionView.tsx`

### Descripción
Panel de administración del sistema CRM.

### Funcionalidades
- Ajuste de umbrales de Score para clasificación de leads Hot
- Reglas de auto-asignación comercial
- Configuración de integraciones API
- Parámetros del agente Sofía

---

## Componentes Compartidos

| Componente | Archivo | Descripción |
|------------|---------|-------------|
| **Header** | `Header.tsx` | Barra superior con estado del asesor y acciones rápidas |
| **Sidebar** | `Sidebar.tsx` | Navegación lateral con tabs y contadores en vivo |
| **WhatsAppModal** | `modals/WhatsAppModal.tsx` | Chat completo con historial de WhatsApp y handoff de Sofía |
| **NuevoLeadModal** | `modals/NuevoLeadModal.tsx` | Formulario para agregar leads manualmente |
| **ProjectLocationModal** | `modals/ProjectLocationModal.tsx` | Mapa Leaflet del proyecto |

---

> **Ver también:** [Arquitectura](./01-ARQUITECTURA.md) · [Modelo de Datos](./03-MODELO-DATOS.md)
