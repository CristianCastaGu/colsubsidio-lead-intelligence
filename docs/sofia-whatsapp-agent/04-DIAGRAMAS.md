# 04 · Diagramas

| | |
|---|---|
| **Identificador** | SOFIA-DOC-04 |
| **Versión** | 1.0 |
| **Fecha** | 2026-07-26 |
| **Estado** | Vigente |
| **Audiencia** | Equipo técnico, evaluadores |
| **Documentos relacionados** | [02 · Arquitectura](02-ARQUITECTURA.md) · [03 · Casos de uso](03-CASOS-DE-USO.md) |

---

## 1. Alcance

Representación gráfica de la estructura y el comportamiento del sistema. Los diagramas están escritos en Mermaid, que se renderiza de forma nativa en la vista de GitHub.

| Sección | Diagrama | Responde a |
|---|---|---|
| 2 | Contexto | Con qué se relaciona el sistema |
| 3 | Capas y componentes | Cómo está organizado por dentro |
| 4 | Flujo de un mensaje | Qué ocurre en cada turno |
| 5 | Secuencia: texto | Cómo colaboran los componentes |
| 6 | Secuencia: voz | Qué cambia en el canal hablado |
| 7 | Decisión: clasificación | Cómo se determina el arquetipo |
| 8 | Decisión: cotización | Cuándo se cotiza y cuándo no |
| 9 | Estados de conversación | Ciclo de vida de una conversación |
| 10 | Estados de un lead | Ciclo de vida de un lead |
| 11 | Modelo de datos | Qué se persiste |
| 12 | Controles de seguridad | Qué atraviesa cada petición |

---

## 2. Diagrama de contexto

```mermaid
graph TB
    subgraph EXT["Actores externos"]
        CIU([Interesado])
        ASE([Asesor comercial])
    end

    subgraph PLAT["Plataformas"]
        META[Meta<br/>WhatsApp Cloud API<br/>Meta Ads]
        ANT[Anthropic<br/>Claude Sonnet 4.6]
        DG[Deepgram<br/>Nova · Aura-2]
    end

    SOFIA[["SISTEMA SOFÍA<br/>Node.js + Express"]]
    CRM[Dashboard comercial]

    CIU -->|mensajes y notas de voz| META
    META <-->|webhook firmado| SOFIA
    SOFIA -->|prompt cacheado| ANT
    SOFIA -->|audio| DG
    SOFIA <-->|API con clave| CRM
    CRM -->|leads calificados| ASE
    ASE -->|toma de control| CRM

    style SOFIA fill:#1a4d8f,color:#fff
```

---

## 3. Capas y componentes

El sistema sigue una separación por capas que se corresponde con el patrón modelo–vista–controlador, con la particularidad de que la vista principal es una conversación y no una interfaz gráfica.

```mermaid
graph TB
    subgraph V["VISTA · presentación"]
        V1[WhatsApp<br/>texto y voz]
        V2[/reporte<br/>HTML de buyer personas/]
        V3[API JSON<br/>consumida por el CRM]
    end

    subgraph C["CONTROLADOR · orquestación"]
        C1[server.js<br/>rutas y orquestación del turno]
        C2[lib/seguridad.js<br/>autenticación y control de acceso]
        C3[lib/whatsapp.js<br/>adaptador de mensajería]
    end

    subgraph N["DOMINIO · reglas de negocio"]
        N1[lib/playbooks.js<br/>clasificación y guion]
        N2[lib/cotizador.js<br/>plan de pagos y viabilidad]
        N3[lib/normativa.js<br/>topes y subsidios]
        N4[lib/perfilamientoEstadistico.js<br/>clasificación final]
        N5[lib/systemPrompt.js<br/>construcción del contexto]
    end

    subgraph M["MODELO · datos y servicios"]
        M1[lib/store.js<br/>persistencia]
        M2[data/*.json<br/>catálogo, perfiles, normativa]
        M3[lib/claude.js<br/>servicio de lenguaje]
        M4[lib/audioSTT.js · audioTTS.js<br/>servicio de voz]
    end

    V1 --> C3 --> C1
    V2 --> C1
    V3 --> C2 --> C1
    C1 --> N1 & N2 & N5
    N2 --> N3
    C1 --> N4
    N1 --> M2
    N2 --> M2
    N5 --> M2
    C1 --> M1 & M3 & M4

    style C1 fill:#1a4d8f,color:#fff
```

### 3.1 Correspondencia con el patrón

| Capa | Responsabilidad | Módulos |
|---|---|---|
| **Vista** | Presentación al actor. La principal es la conversación de WhatsApp; existen además una vista HTML de reportes y una representación JSON para el sistema comercial. | WhatsApp, `/reporte`, `/api/*` |
| **Controlador** | Recibe la petición, aplica control de acceso, orquesta la secuencia del turno y decide qué se devuelve. No contiene reglas de negocio. | `server.js`, `seguridad.js`, `whatsapp.js` |
| **Dominio** | Reglas del negocio: cómo se clasifica un interesado, cómo se calcula un plan, qué normativa aplica. Independiente del transporte. | `playbooks.js`, `cotizador.js`, `normativa.js`, `perfilamientoEstadistico.js`, `systemPrompt.js` |
| **Modelo** | Datos persistidos y acceso a servicios externos. | `store.js`, `data/*.json`, `claude.js`, `audioSTT.js`, `audioTTS.js` |

### 3.2 Observación sobre la aplicación del patrón

La correspondencia es real pero no literal. Un sistema conversacional no tiene una vista renderizada por el servidor en el sentido clásico: la salida es texto o audio que interpreta una aplicación de terceros.

Lo que sí se preserva es la propiedad que hace útil al patrón: **el dominio no conoce el transporte.** `cotizador.js` calcula planes sin saber que existe WhatsApp, y `playbooks.js` clasifica sin saber que hay un modelo de lenguaje detrás. Ambos son verificables de forma aislada, y así se verificaron contra las cotizaciones oficiales.

---

## 4. Flujo de un mensaje

```mermaid
flowchart TD
    A[Mensaje entrante] --> B{¿Firma válida?}
    B -->|No| B1[401 · descartar] 
    B -->|Sí| C{¿Es nota de voz?}
    C -->|Sí| D[Descargar y transcribir]
    C -->|No| E[Usar el texto]
    D --> E
    E --> F[Recuperar historial]
    F --> G[Cruzar con base de afiliados]
    G --> H[Extraer señales<br/>edad · ingresos · composición · proyecto]
    H --> I[Clasificar arquetipo]
    I --> J{¿Cambió el perfil?}
    J -->|Sí| J1[Registrar cambio<br/>con turno y marca de tiempo]
    J -->|No| K
    J1 --> K{¿Datos suficientes<br/>para cotizar?}
    K -->|No| K1[Registrar qué falta] --> L
    K -->|Sí| K2[Calcular plan] --> K3{¿Carga dentro<br/>del umbral?}
    K3 -->|Sí| L
    K3 -->|No| K4[Marcar no viable<br/>e instruir alternativa] --> L
    L[Componer bloque dinámico] --> M[Solicitar respuesta<br/>al servicio de lenguaje]
    M --> N{¿Trae perfil<br/>estructurado?}
    N -->|Sí| N1[Extraer, remover del texto<br/>y persistir el lead]
    N -->|No| O
    N1 --> O{¿El mensaje entrante<br/>fue de voz?}
    O -->|No| P[Enviar texto]
    O -->|Sí| Q[Normalizar para síntesis]
    Q --> R[Sintetizar y enviar audio]
    R --> S{¿Había enlaces?}
    S -->|Sí| T[Enviar enlaces<br/>en mensaje aparte]
    S -->|No| U
    P --> U[Persistir conversación]
    T --> U

    style B1 fill:#8f1a1a,color:#fff
    style K4 fill:#8f6b1a,color:#fff
```

---

## 5. Secuencia · conversación por texto

```mermaid
sequenceDiagram
    autonumber
    actor I as Interesado
    participant M as Meta
    participant S as server.js
    participant SEC as seguridad.js
    participant P as playbooks.js
    participant CT as cotizador.js
    participant CL as claude.js
    participant ST as store.js

    I->>M: mensaje de WhatsApp
    M->>S: POST /webhook (firmado)
    S->>SEC: verificar firma HMAC
    SEC-->>S: válida
    S->>ST: recuperar historial
    ST-->>S: conversación
    S->>S: extraer señales del texto del interesado
    S->>P: clasificarProvisional(señales)
    P-->>S: arquetipo · confianza · motivo
    S->>CT: intentarCotizar(proyecto, ingresos)

    alt datos completos
        CT-->>S: plan · carga financiera · viabilidad
    else datos incompletos
        CT-->>S: null + motivo registrado
    end

    S->>S: componer bloque dinámico
    S->>CL: askSofia(prompt cacheado, historial, bloque)
    CL-->>S: respuesta + perfil estructurado
    S->>ST: persistir conversación y lead
    S->>M: enviar respuesta
    M->>I: mensaje de WhatsApp
```

---

## 6. Secuencia · conversación por voz

```mermaid
sequenceDiagram
    autonumber
    actor I as Interesado
    participant M as Meta
    participant S as server.js
    participant STT as audioSTT.js
    participant CL as claude.js
    participant TTS as audioTTS.js

    I->>M: nota de voz
    M->>S: POST /webhook (id de media)
    S->>M: descargar audio
    M-->>S: bytes
    S->>STT: transcribir
    STT-->>S: texto

    Note over S: flujo de clasificación y cotización (ver sección 5)

    S->>CL: solicitar respuesta<br/>+ instrucción "esto se va a escuchar"
    CL-->>S: texto sin emojis ni enlaces

    S->>TTS: generarAudio(texto)
    TTS->>TTS: limpiarTextoParaVoz()
    Note right of TTS: remueve emojis y símbolos<br/>m² → metros cuadrados<br/>$X → X pesos

    alt síntesis exitosa
        TTS-->>S: audio
        S->>M: subir y enviar audio
        opt la respuesta traía enlaces
            S->>M: enviar enlaces en texto aparte
        end
    else síntesis fallida
        TTS-->>S: error
        S->>M: enviar respuesta por texto
        Note over S,M: degradación correcta:<br/>la conversación no se interrumpe
    end

    M->>I: audio y, si aplica, enlaces
```

---

## 7. Decisión · clasificación en arquetipo

```mermaid
flowchart TD
    A[Señales del interesado] --> B{¿Precio del proyecto<br/>por encima del umbral<br/>de gama alta?}
    B -->|Sí| B1[Premium / No VIS<br/>confianza alta]
    B -->|No| C{¿Se conoce<br/>la edad?}
    C -->|No| C1[MODO NEUTRAL<br/>prohibido suponer<br/>hijos o pareja]
    C -->|Sí| D{¿Edad ≤ 45<br/>y grupo ≥ 3?}
    D -->|Sí| D1[Familia Joven<br/>Consolidada]
    D -->|No| E{¿Edad ≤ 35?}
    E -->|Sí| E1[Joven<br/>Independiente]
    E -->|No| F1[Adulto<br/>Establecido]

    style C1 fill:#5a5a5a,color:#fff
    style B1 fill:#8f6b1a,color:#fff
```

El orden de evaluación no es arbitrario: el precio prevalece sobre la edad porque un proyecto de gama alta define el comportamiento de compra con más fuerza que el rango etario. Y sin edad no se clasifica: es la variable que separa los conglomerados.

---

## 8. Decisión · cotización

```mermaid
flowchart TD
    A[Solicitud de cotización] --> B{¿Proyecto<br/>identificado?}
    B -->|No| X[Sin cotización<br/>remitir a asesor]
    B -->|Sí| C{¿Precio<br/>interpretable?}
    C -->|No| X
    C -->|Sí| D{¿Fecha de entrega<br/>en el catálogo?}
    D -->|No| X
    D -->|Sí| E{¿Ingresos<br/>declarados?}
    E -->|No| X
    E -->|Sí| F[Calcular plazo]
    F --> G{¿Plazo > 1 mes?}
    G -->|No| Y[Entrega vencida<br/>no cotizable]
    G -->|Sí| H[Determinar tope VIS<br/>según ubicación]
    H --> I{¿Precio dentro<br/>del tope?}
    I -->|No| J2[Sin subsidio]
    I -->|Sí| J{¿Ingresos ≤ 4 SMLV<br/>y sin vivienda propia<br/>ni subsidio previo?}
    J -->|No| J2
    J -->|Sí| J1[Subsidio<br/>30 o 20 SMLV]

    J1 --> K1["RÉGIMEN CON SUBSIDIO<br/>cuota = (precio − subsidio) / (plazo+1)<br/>todo antes de la entrega"]
    J2 --> K2["RÉGIMEN SIN SUBSIDIO<br/>separación $500.000<br/>30% cuota inicial · 70% financiación"]

    K1 --> L[Calcular carga financiera]
    K2 --> L
    L --> M{¿Carga ≤ umbral?}
    M -->|Sí| N[Plan viable<br/>el agente lo presenta]
    M -->|No| O[Plan NO viable<br/>ofrecer alternativa]

    style X fill:#5a5a5a,color:#fff
    style Y fill:#8f1a1a,color:#fff
    style O fill:#8f6b1a,color:#fff
    style N fill:#1a6b3a,color:#fff
```

---

## 9. Estados de una conversación

```mermaid
stateDiagram-v2
    [*] --> Nueva: primer mensaje desde el anuncio
    Nueva --> EnPerfilamiento: el agente responde

    EnPerfilamiento --> EnPerfilamiento: turnos sucesivos
    EnPerfilamiento --> ConCotizacion: datos completos
    ConCotizacion --> EnPerfilamiento: continúa la conversación

    EnPerfilamiento --> AtendidaPorHumano: UC-08
    ConCotizacion --> AtendidaPorHumano: UC-08
    AtendidaPorHumano --> EnPerfilamiento: UC-09

    EnPerfilamiento --> Cerrada: el agente emite el perfil
    ConCotizacion --> Cerrada: el agente emite el perfil
    Cerrada --> EnPerfilamiento: el interesado vuelve a escribir

    note right of AtendidaPorHumano
        El agente no responde.
        Los mensajes se siguen guardando.
    end note
```

---

## 10. Estados de un lead

```mermaid
stateDiagram-v2
    [*] --> SinRegistrar: conversación en curso
    SinRegistrar --> Perfilado: el agente emite el perfil estructurado
    Perfilado --> EnCRM: aparece en el listado
    EnCRM --> ConAgendamiento: registra intención de contacto
    SinRegistrar --> [*]: abandono sin registro

    note right of SinRegistrar
        LIMITACIÓN CONOCIDA
        Hoy el lead no entra al listado
        hasta que hay cierre natural.
        Los abandonos a medias no
        aparecen, y son los que más
        valdría rescatar.
    end note
```

---

## 11. Modelo de datos

```mermaid
erDiagram
    CONVERSACION ||--o{ MENSAJE : contiene
    CONVERSACION ||--|| LEAD_INFO : mantiene
    LEAD_INFO ||--o{ CAMBIO_PERFIL : registra
    LEAD_PERFILADO ||--|| ARQUETIPO : clasificado_como
    LEAD_PERFILADO ||--o| AGENDAMIENTO : declara
    PROYECTO ||--o{ TIPOLOGIA : ofrece
    ARQUETIPO ||--|| PLAYBOOK : define

    CONVERSACION {
        string telefono PK
        string estado
        datetime creada
        datetime actualizada
    }
    MENSAJE {
        string rol
        string contenido
        datetime marca_tiempo
    }
    LEAD_INFO {
        string nombre
        string proyecto_interes
        string perfil_actual
        number ingresos_declarados
    }
    CAMBIO_PERFIL {
        string arquetipo
        string confianza
        string motivo
        number turno
        datetime marca_tiempo
    }
    LEAD_PERFILADO {
        string lead_id PK
        string telefono
        string rango_edad
        string composicion_familiar
        string rango_salarial
        string timeline
        string score
        number score_numerico
        string playbook_aplicado
        object datacredito "siempre nulo · marcador"
    }
    AGENDAMIENTO {
        boolean solicitado
        string modalidad
        string dia_preferido
        string franja_horaria
    }
    PROYECTO {
        string nombre PK
        string ubicacion
        string precio
        string fecha_entrega
        boolean vis
    }
    ARQUETIPO {
        string id PK
        number participacion_historica
        number riesgo_desistimiento
    }
```

> `datacredito` existe como marcador de integración futura y **siempre es nulo**. No se consulta ni se infiere información crediticia. Ver [06 · Seguridad](06-SEGURIDAD.md), sección 5.2.

---

## 12. Controles de seguridad por petición

```mermaid
flowchart LR
    A[Petición HTTP] --> B[Cabeceras de<br/>endurecimiento]
    B --> C[CORS<br/>lista blanca]
    C --> D[Límite de tasa<br/>120/min]
    D --> E{¿Ruta bajo<br/>/api/?}
    E -->|Sí| F{¿X-API-Key<br/>válida?}
    F -->|No| F1[401]
    F -->|Sí| H[Controlador]
    E -->|No| G{¿Es POST<br/>/webhook?}
    G -->|Sí| G1{¿Firma HMAC<br/>válida?}
    G1 -->|No| F1
    G1 -->|Sí| H
    G -->|No| H

    style F1 fill:#8f1a1a,color:#fff
    style H fill:#1a6b3a,color:#fff
```

La comparación de la clave se hace en tiempo constante y la firma se verifica sobre el cuerpo crudo de la petición. El detalle y su justificación están en [06 · Seguridad](06-SEGURIDAD.md), sección 3.

---

## 13. Control de versiones

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0 | 2026-07-26 | Versión inicial |
