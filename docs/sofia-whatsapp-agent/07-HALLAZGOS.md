# 07 · Hallazgos

| | |
|---|---|
| **Identificador** | SOFIA-DOC-07 |
| **Versión** | 1.0 |
| **Fecha** | 2026-07-26 |
| **Estado** | Vigente |
| **Audiencia** | Equipo técnico, evaluadores, área comercial |
| **Documentos relacionados** | [01 · Visión general](01-VISION-GENERAL.md) · [02 · Arquitectura](02-ARQUITECTURA.md) |

---

## 1. Segmentación de compradores

**Fuente:** 4.142 registros de compradores históricos (`hackathon_VIVIENDAv2.xlsx`).
**Método:** K-Means, `k = 5` elegido por coeficiente de silueta.

| Perfil | Participación | Edad típica | Vivienda típica | Desistimiento |
|---|---|---|---|---|
| Joven Independiente | 34,0% | 20-35 | ~199M | 13,1% |
| Sin edad registrada | 22,6% | — | — | — |
| Adulto Establecido | 21,2% | 36-45 | — | 10,6% |
| Familia Joven Consolidada | 14,8% | 28-42 | — | 11,4% |
| Comprador Premium / No VIS | 7,3% | — | ~621M | 20,4% |

El perfil "sin edad registrada" es un artefacto de campos incompletos, no un segmento real. No se usa.

### El clúster más grande no es la familia

Uno de cada tres compradores históricos es un joven de 20 a 35 años comprando alrededor de 199 millones. La familia con hijos consolidada es el 14,8%.

Es una conclusión sobre los datos de Colsubsidio, no una opinión de mercado. Si la comunicación comercial se dirige principalmente a la familia, le está hablando a la séptima parte de sus compradores mientras el tercio más grande no se ve representado.

De ahí sale la tesis del proyecto: **no se vende solo a familias, se vende a quien necesite un hogar donde vivir.**

### El comprador premium se retracta al doble

Con 20,4% de desistimiento, el perfil premium casi duplica al que mejor retiene (Adulto Establecido, 10,6%).

**Esto es una correlación, no una causa comprobada.** El clustering muestra la asociación entre perfil y desistimiento; no explica el porqué. La hipótesis de trabajo es fricción con el crédito hipotecario alto, apoyada en que el 17,8% de ese segmento paga de contado y ese subgrupo prácticamente no se cae.

La implicación comercial es contraintuitiva: con ese perfil no hay que vender más fuerte, hay que **quitar fricción financiera antes de enamorar**. Averiguar temprano si va con crédito o de contado, y hablar de preaprobación antes del storytelling. La presión y la urgencia lo espantan.

### El perfil que más retiene

El Adulto Establecido (36-45 años) tiene la mejor retención del histórico. Vale más que un lead promedio no solo por intención de compra, sino porque la venta sobrevive. Debería pesar hacia arriba en cualquier score de priorización.

---

## 2. Lógica del cotizador oficial

Se reconstruyó a partir de cotizaciones reales del proyecto Agrupación de Vivienda Reserva de Guayacán, ejecutadas con tres niveles de ingreso distintos. El resultado calza al centavo con los PDF emitidos.

### Dos regímenes, no uno

**Con subsidio.** El comprador paga `(precio − subsidio)` repartido en `plazo + 1` cuotas iguales, todas antes de la entrega. No queda saldo a hipoteca. El subsidio se suma en la última cuota de cuota inicial.

**Sin subsidio.** Separación fija de $500.000, cuota inicial hasta completar el 30% del precio repartida en `plazo − 1` cuotas mensuales, y 70% a financiación hipotecaria en el mes de entrega.

### Verificación

Inmueble APT-T2, Tipo B1, $175.400.000, entrega enero 2028, plazo de 18 meses.

| Ingresos | Régimen | Subsidio | Cuota mensual | Coincide con PDF |
|---|---|---|---|---|
| $2.500.000 | con subsidio | $52.527.150 | $6.466.992 | ✔ |
| $4.500.000 | con subsidio | $35.018.100 | $7.388.521 | ✔ |
| $8.000.000 | sin subsidio | $0 | $3.065.882 | ✔ |

En el primer caso, la cuota 18 del cronograma es de $58.994.142,11 — exactamente la cuota base más el subsidio.

En el tercero, las 17 cuotas suman $52.120.000, que con la separación de $500.000 da $52.620.000: el 30% exacto del precio. La financiación de $122.780.000 es el 70% restante.

### Tabla de subsidio

SMLV 2026 = $1.750.905. Los tres puntos observados caen en múltiplos exactos de SMLV.

| Ingresos del hogar | Subsidio |
|---|---|
| ≤ 2 SMLV | 30 SMLV — $52.527.150 |
| \> 2 y ≤ 4 SMLV | 20 SMLV — $35.018.100 |
| \> 4 SMLV | no aplica |

Circulan en prensa cifras ligeramente distintas para el tramo alto. La correcta es `30 × SMLV = $52.527.150`, que es la que arroja el cotizador oficial.

---

## 3. Dos comportamientos que vale la pena revisar

Se documentan aquí porque afectan a personas que están decidiendo sobre montos grandes. Ambos son reproducibles.

### 3.1 Entrega vencida produce cifras imposibles

Un inmueble cuya fecha estimada de entrega ya pasó genera un plazo negativo. En una cotización real de Los Nogales ET1 —precio $573.281.000, entrega estimada primer semestre de 2026— el resultado fue:

```
Plazo de cuota inicial:  -1 meses
Valor de la cuota:       $17.199.003.281.000
```

Diecisiete billones de pesos. Un interesado que ve eso no llama a preguntar: se va.

**Cómo lo maneja Sofía.** Si el plazo calculado es cero o negativo, no cotiza. Devuelve el caso a un asesor con el motivo explícito. Replicar la fórmula con fidelidad habría significado heredar el comportamiento.

### 3.2 En el régimen con subsidio, a menor ingreso mayor cuota

Este es más difícil de ver porque las cifras parecen razonables. Solo se nota al compararlas contra el ingreso de quien las recibe.

| Ingresos | Régimen | Cuota mensual | % del ingreso |
|---|---|---|---|
| $2.500.000 | con subsidio | $6.466.992 | **259%** |
| $4.500.000 | con subsidio | $7.388.521 | **164%** |
| $8.000.000 | sin subsidio | $3.065.882 | 38% |

Quien gana menos recibe la cuota más alta.

La causa es estructural: el régimen con subsidio reparte el precio completo antes de la entrega y no ofrece componente hipotecario. Y ese régimen se activa precisamente cuando los ingresos son bajos, porque es el rango donde aplica el subsidio.

El efecto neto es que **la persona a quien el subsidio busca ayudar es la que recibe el plan de pagos más difícil de pagar.** Dentro del rango de ingresos que da derecho a subsidio, no existe un nivel de ingreso que produzca una cuota por debajo del 100% del sueldo mensual.

**Cómo lo maneja Sofía.** Calcula la carga financiera de todo plan cotizado. Si la cuota supera el umbral configurado del ingreso declarado, marca el plan como no viable y recibe instrucción de no presentarlo como cerrado: ofrece una tipología de menor valor o pasa a un asesor.

Fue una decisión deliberada apartarse de la lógica original en este punto. Reproducirla con fidelidad total habría significado decirle a alguien que gana dos millones y medio que puede pagar seis y medio al mes.

---

## 4. Contexto normativo 2026

Verificado con fuentes públicas en julio de 2026. **Los montos cambian con el SMLV y las convocatorias distritales abren y cierran: revisar antes de usar.**

### Topes de precio

| Categoría | Tope |
|---|---|
| VIP | 90 SMLV — $157.581.450 |
| VIS, resto del país | 135 SMLV — $236.372.175 |
| VIS, ciudades de más de un millón de habitantes | 150 SMLV — $262.635.750 |
| VIS en renovación urbana | 175 SMLV — $306.408.375 |

Ciudades con el tope alto: Bogotá, Medellín, Cali, Barranquilla, Bucaramanga, Cartagena, Cúcuta y Pereira.

Como Colsubsidio tiene proyectos en Bogotá y en municipios de Cundinamarca, un mismo precio puede ser VIS o no según dónde esté el proyecto.

**Alerta.** En enero de 2026 el Ministerio de Vivienda abrió consulta pública sobre un decreto que unificaría el tope en 135 SMLV para todo el país y desindexaría los precios del salario mínimo. Al momento de esta investigación seguía en borrador. Si se aprueba, los proyectos de Bogotá entre 135 y 150 SMLV dejarían de ser VIS.

### Mi Casa Ya

**Suspendido.** Tras la Circular 012 del 16 de diciembre de 2024, las postulaciones y nuevas asignaciones quedaron detenidas. En 2026 no hay nuevas asignaciones; la concurrencia solo aplica a hogares con subsidio preasignado antes de la suspensión.

Sofía tiene instrucción de no mencionarlo como opción activa.

### Programas distritales de Bogotá

Cuando Mi Casa Ya se detuvo, Bogotá reforzó su oferta propia bajo el plan *Mi Casa en Bogotá* de la Secretaría Distrital del Hábitat. La mayoría de los interesados no sabe que existen.

| Programa | Qué hace |
|---|---|
| Oferta Preferente | subsidio para cuota inicial sobre unidades previamente separadas por la Secretaría |
| Reactiva tu Compra | auxilio para hogares a los que les falta el último tramo para escriturar |
| Reduce tu Cuota | alivio sobre la **cuota mensual** del crédito; el Distrito paga directo a la entidad financiera |

**Reduce tu Cuota es el único que ataca la cuota mensual** y no la inicial. Para un interesado cuya barrera es el flujo de caja mes a mes —el caso descrito en 3.2— es el que mueve la aguja.

Un subsidio distrital puede sumarse a uno de caja de compensación. Oferta Preferente y Reactiva tu Compra no son concurrentes entre sí.

**Cómo los usa Sofía.** Dependen de convocatorias con cupos limitados, así que nunca se presentan como algo que el interesado ya tiene: se mencionan como una posibilidad a verificar con el asesor. Tampoco se suman montos de varios programas para dar una cifra final más atractiva — la concurrencia tiene condiciones y no todas las combinaciones aplican.

---

## 5. Nota sobre nomenclatura

La web pública de Colsubsidio, a julio de 2026, sigue llamando **PerteneSer** al programa de acompañamiento social, mientras que internamente se referencia como **Convive**.

Si el agente usa solo el nombre nuevo y el interesado lo busca, no encuentra nada. Sofía dice *"PerteneSer, ahora Convive"* hasta que se confirme cuál es el nombre vigente de cara al público.
