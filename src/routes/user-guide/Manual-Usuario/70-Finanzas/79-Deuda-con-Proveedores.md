# Cómo ver cuánto les debés a tus proveedores (Deuda con proveedores)

<div id="deuda-con-proveedores"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Compras y pagos** → **Deuda con proveedores** (debajo del título **Consultar**)
> **¿Quién lo usa?:** Administración, tesorería, contadores y dueños

> 🎯 **¿Para qué sirve esto?**
> Te muestra cuánta plata le debés a cada proveedor y hace cuánto venció.
> Desde acá llegás a las facturas que le faltan pagar a cada uno.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso **Gastos** (módulo Finanzas) en [Permisos por Rol](/user-guide/permisos-por-rol).
- La deuda sale de los gastos cargados que todavía no se pagaron. Se cargan en [Cargar gasto](/user-guide/cargar-gasto).
- Para pagar, usá [Pagar](/user-guide/pagar).
- Es lo que **vos les debés** a tus proveedores. Lo que te deben tus clientes no está acá.
- Antes de PaxaPOS 3.18 esta pantalla se llamaba **Resumen de Deuda** y estaba en **Finanzas** → **Facturas y Pagos**.

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

1. En el menú de la izquierda, tocá **Compras y pagos**.
2. Tocá **Deuda con proveedores**. Está debajo del título **Consultar**.

Arriba, al lado del título, está la deuda total. Por ejemplo: **Deuda con proveedores: $1.500,00**. Abajo dice _Lo que le debés a cada proveedor._

A la derecha, **Exportar** baja la tabla a Excel.

---

## 📊 Paso 2: Leé los números

<div id="paso-2-lee-los-numeros"></div>

Tres tarjetas dicen:

- **Proveedores con deuda**: a cuántos proveedores les debés hoy.
- **A quién más le debés**: el proveedor al que más le debés, y cuánto.
- **Vencida hace más de 30 días**: la deuda que venció hace más de 30 días, y qué parte del total es.

El recuadro **Antigüedad de la deuda** separa lo que debés según los **días desde el vencimiento**:

- **0-30**: venció hace 30 días o menos (o todavía no venció).
- **31-60**, **61-90** y **Más de 90**: venció hace más tiempo.

> 💡 **Consejo útil:** mientras más plata hay en **Más de 90**, más atrasado estás con tus proveedores.

### Deuda por local o sector

<div id="deuda-por-local-o-sector"></div>

![Recuadro Deuda por PDV / Centro de costo con un casillero por cada local y el monto de deuda de cada uno](images/manual/70-finanzas/77-03-deuda-por-centro-de-costo.png)

El recuadro **Deuda por PDV / Centro de costo** aparece si tu comercio reparte la deuda entre centros de costo. Muestra cuánto se debe en cada uno.

- Tocá un nombre para ver la tabla solo de ese local o sector.
- **Sin centro** junta los gastos que no tienen centro de costo asignado.
- Para volver a ver todo, tocá **Quitar filtro**.

---

## 📋 Paso 3: Mirá cuánto le debés a cada proveedor

<div id="paso-3-mira-cuanto-le-debes-a-cada-proveedor"></div>

Hay un renglón por cada proveedor con saldo. Las columnas dicen:

- **Proveedor**: el nombre. Si pasás el mouse por encima, ves el CUIT.
- **Total**: lo que suman sus gastos.
- **Pagado**: lo que ya le pagaste.
- **Debe**: lo que todavía le debés. En rojo.
- **0-30**, **31-60**, **61-90** y **Más de 90**: su deuda, según los días desde el vencimiento.

Si un proveedor tiene **saldo a favor** (por ejemplo, por una nota de crédito que te hizo o porque le pagaste de más), **Debe** sale en verde. Un proveedor sin saldo no aparece.

---

## 🧾 Paso 4: Abrí las facturas que le debés a un proveedor

<div id="paso-4-abri-las-facturas-que-le-debes-a-un-proveedor"></div>

1. Tocá el nombre del proveedor.
2. Se abre la lista de [Gastos](/user-guide/gastos) en el chip **A pagar**, solo con los gastos de ese proveedor.
3. Desde ahí lo pagás con el botón **Pagar** de cada gasto, o tildás varios y tocás **Pagar** en la barra de abajo.

El nombre es un link solo si tu usuario puede ver lo que hay que pagar (acción **ver_pendientes_pago** del permiso **Gastos**).

> 💡 **Consejo útil:** para ver todo lo que hay que pagar, de todos los proveedores y ordenado por vencimiento, usá [Pagar](/user-guide/pagar).

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema                                       | Causa más frecuente                                                       | Solución recomendada                                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **El proveedor no aparece en la tabla**        | No tiene saldo. Los proveedores saldados no se muestran.                  | Buscá sus facturas en [Gastos](/user-guide/gastos), chip **Todos**.                          |
| **La deuda total es $0,00**                    | Todos los gastos están pagos o no hay ninguno cargado.                    | Cargá uno en [Cargar gasto](/user-guide/cargar-gasto).                                       |
| **Cargué una factura y no suma deuda**         | Al guardarla elegiste **Sí, ya lo pagué**.                                | Mirala en [Gastos](/user-guide/gastos), columna **Falta pagar**.                             |
| **El nombre del proveedor no es un link**      | Tu usuario no puede ver lo que hay que pagar.                             | Pedile a un administrador que lo active en [Permisos por Rol](/user-guide/permisos-por-rol). |
| **No aparece el recuadro por centro de costo** | Toda la deuda está **Sin centro**, o tu comercio no usa centros de costo. | Es normal. Mirá [Centros de Costo](/user-guide/centros-de-costo).                            |
| **Quiero ver la deuda de un solo local**       | Estás mirando el total de todos.                                          | Tocá el nombre del local en el recuadro **Deuda por PDV / Centro de costo**.                 |
