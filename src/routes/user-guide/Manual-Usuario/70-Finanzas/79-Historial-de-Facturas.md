# Historial de Facturas

<div id="historial-de-facturas"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Finanzas** → **Facturas y Pagos** → **Historial de Facturas**
> **¿Quién lo usa?:** Contadores, Encargados de Cuentas a Pagar y Administradores

> 🎯 **¿Para qué sirve esto?**
> Es la lista de todas las facturas de tus proveedores, pagas y sin pagar.
> Buscás una factura, ves cuánto falta pagar, la corregís, la pagás o la cerrás.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso **Contabilidad / Gastos** en [Permisos por Rol](/user-guide/permisos-por-rol).
- Las facturas llegan desde [Factura Manual](/user-guide/factura-manual) o desde **Nueva Factura**.
- Para ver la deuda por proveedor, mirá [Resumen de Deuda](/user-guide/resumen-de-deuda).

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Finanzas marcado en rojo](images/manual/70-finanzas/79-00a-menu-grupo-finanzas.png)

1. En el menú de la izquierda, tocá **Finanzas**.

![Opción Historial de Facturas marcada en rojo, debajo del título Facturas y Pagos](images/manual/70-finanzas/79-00b-menu-opcion-historial-de-facturas.png)

2. Tocá **Historial de Facturas**. Está debajo del título **FACTURAS Y PAGOS**.

![Pantalla Historial de Facturas con los botones de arriba, el buscador, el resumen y la lista](images/manual/70-finanzas/79-01-pantalla-historial-de-facturas.png)

Así se ve la pantalla. Arriba están los botones, después el buscador, el resumen de la búsqueda y la lista de facturas.

---

## 🔘 Paso 2: Conocé los botones de arriba

<div id="paso-2-conoce-los-botones-de-arriba"></div>

![Cinco botones juntos: Nueva Factura en verde, Factura Manual, Facturas directas, CAPEX y Exportar XLSX](images/manual/70-finanzas/79-02-botones-de-arriba.png)

- **Nueva Factura**: para subir la foto de una factura y cargar sus datos.
- **Factura Manual**: abre [Factura Manual](/user-guide/factura-manual), para escribir los datos a mano.
- **Facturas directas**: deja solo las facturas sin orden de compra.
- **CAPEX**: deja solo las facturas de inversión (bienes de uso). Aparece si tu comercio usa CAPEX/OPEX.
- **Exportar XLSX**: baja la lista, con los filtros que hayas puesto, en una planilla de Excel.

Si elegís **Facturas directas** o **CAPEX**, arriba de la lista aparece un aviso. Tocá **Quitar filtro** para volver a ver todo.

> 💡 **Consejo útil:** si tu comercio tiene lectura con IA, aparece también un recuadro para arrastrar una factura y digitalizarla.

---

## 🔎 Paso 3: Buscá una factura

<div id="paso-3-busca-una-factura"></div>

![Panel de búsqueda con todos los filtros, el número 123 escrito en Num Factura y los botones Descargar Excel y Buscar](images/manual/70-finanzas/79-03-buscador.png)

Completá lo que sepas y tocá **Buscar**. Los casilleros son:

- **Estado**: **Abierto** (se puede modificar) o **Cerrado** (ya está en un cierre).
- **Con Deuda**: tildalo para ver solo las que faltan pagar.
- **Proveedor**: escribí el nombre y elegí uno. Usá el casillero de arriba (abajo hay otro **Proveedor** que hoy no filtra).
- **Clasificacion**: el tipo de gasto.
- **Sin Clasificar**: solo las que no tienen clasificación.
- **Sin OC**: solo las que no vienen de una orden de compra.
- **CAPEX/OPEX**: inversión o gasto operativo.
- **Tipo Costo**: costo fijo o variable.
- **Tipo Factura**: la letra. Por ejemplo: **"B"**.
- **Num Factura**: escribí parte del número. Por ejemplo: *123*.
- **Neto** y **Total**: el importe exacto.
- **N° de OC**: el número de la orden de compra.
- **Desde** y **Hasta**: el rango de fechas de la factura.
- **Descargar Excel**: baja el resultado en una planilla.
- **Buscar**: aplica los filtros.

> 💡 **Consejo útil:** para ver todo un mes, poné el primer día en **Desde** y el último en **Hasta**.

![Lista con una sola factura, la número 51 de Distribuidora Ejemplo, tipo B, por 1.500 pesos](images/manual/70-finanzas/79-05-resultado-busqueda.png)

La lista muestra solo lo que coincide. Arriba dice cuántas facturas encontró. Por ejemplo: **Se encontraron 1 Facturas en el historial**.

---

## 📊 Paso 4: Leé el resumen y la lista

<div id="paso-4-lee-el-resumen-y-la-lista"></div>

![Resumen de Búsqueda con Total General 1.500, Total Sin IVA 1.239,67 y Saldo o Falta de pagar 1.500](images/manual/70-finanzas/79-04-resumen-de-busqueda.png)

El **Resumen de Búsqueda** suma **todas** las facturas que encontró, no solo las de la pantalla:

- **Total General**: lo que suman con impuestos.
- **Total Sin IVA**: lo que suman sin impuestos.
- **Saldo / Falta de pagar**: lo que todavía no pagaste. En rojo si hay deuda, en verde si no.

Las columnas de la lista dicen:

- **Casilla**: para elegir la factura (Paso 7). Si la factura está cerrada, ves un candado.
- **#**: el número interno. Debajo dice **Directa** (sin orden de compra) o el número de la orden.
- **Clasificación** y **CAPEX/OPEX**: para qué gasto es.
- **Fecha**, **Proveedor**, **Imagen** y **Tipo**: cuándo, de quién, si tiene foto y qué letra.
- **N° Comprobante**: punto de venta y número.
- **Total Sin IVA** y **Total**: los importes.
- **Falta pagar**: naranja si hay deuda. Una tilde verde si está paga.
- **Observación** y **Creado**: la nota y cuándo se cargó.

Abajo de la lista, la línea **Resumen** cuenta las facturas, el total y lo pendiente.

---

## ⚙️ Paso 5: Usá el menú de cada factura

<div id="paso-5-usa-el-menu-de-cada-factura"></div>

![Menú de la rueda abierto con Pagar, Ver, Añadir items, Editar, Duplicar y Borrar, marcado en rojo](images/manual/70-finanzas/79-06-menu-engranaje-abierto.png)

1. Al final del renglón, tocá el botón con la rueda ⚙. Es azul si la factura tiene deuda.
2. Se abre una lista con las opciones:

- **Pagar**: abre la ventanita para pagar. Solo aparece si falta pagar. Mirá [Resumen de Deuda](/user-guide/resumen-de-deuda).
- **Ver**: muestra el detalle de la factura. También podés tocar cualquier lugar vacío del renglón.
- **Añadir items**: carga lo que compraste en esa factura.
- **Editar**: corrige los datos.
- **Duplicar**: hace una copia para cargar otra parecida.
- **Borrar**: elimina la factura.
- **Descargar Archivo** o **Subir Archivo**: bajan o suben la foto de la factura, si corresponde.

> ⚠️ **Atención:** **Pagar** registra un pago de verdad. **Borrar** elimina la factura. Tocalos solo si estás seguro.

> 💡 **Consejo útil:** **Editar**, **Duplicar** y **Borrar** no aparecen en facturas cerradas ni en las pagadas antes del último arqueo de caja. Un administrador siempre las ve.

---

## 🧾 Paso 6: Mostrá los impuestos

<div id="paso-6-mostra-los-impuestos"></div>

![Pantalla con el botón Mostrar Impuestos marcado en rojo, arriba a la derecha de la lista](images/manual/70-finanzas/79-07-donde-esta-boton-mostrar-impuestos.png)

1. Tocá **Mostrar Impuestos**, arriba a la derecha de la lista.
2. Aparecen las columnas de impuestos de cada factura.

![Lista con las columnas IVA 21% con neto 1.239,67 e impuesto 260,33](images/manual/70-finanzas/79-08-tabla-con-impuestos.png)

Cada impuesto muestra dos números: **Neto** (el importe sobre el que se calcula) e **Imp.** (el impuesto). El botón pasa a decir **Ocultar Impuestos**: tocalo para volver.

> 💡 **Consejo útil:** este botón solo aparece si alguna de las facturas de la lista tiene impuestos.

---

## ☑️ Paso 7: Pagá o cerrá varias facturas juntas

<div id="paso-7-paga-o-cierra-varias-facturas-juntas"></div>

![Panel Gastos Seleccionados con un gasto elegido, Total de Facturas 1.500, Total a Pagar 1.500 y los botones Pagar y Aplicar Cierre](images/manual/70-finanzas/79-09-factura-seleccionada.png)

1. Tildá la casilla de cada factura. Para elegir todas, tildá la de la fila de títulos.
2. Arriba de la lista aparece el panel **Gastos Seleccionados**.
3. Ahí ves cuántas elegiste, el **Total de Facturas** y el **Total a Pagar**.

Tenés dos botones:

- **Pagar Facturas**: abre el pago de todas las que tildaste. El botón muestra el total. Por ejemplo: **Pagar 1.500,00**.
- **Aplicar Cierre**: junta las facturas en un cierre, para que nadie las modifique.

> ⚠️ **Atención:** revisá qué facturas tildaste antes de tocar **Pagar Facturas**. El pago es por la suma de todas.

### Aplicar un cierre

![Ventanita con Crear Nuevo Cierre, Asignar a uno de los últimos cierres, y los botones Cancelar y Guardar](images/manual/70-finanzas/79-10-ventanita-aplicar-cierre.png)

Al tocar **Aplicar Cierre** se abre esta ventanita:

- **breve descripción del periodo**: escribí un nombre. Por ejemplo: *Cierre de Abril*.
- **Selecccione un cierre** (así está escrito en pantalla): si sos administrador, tildalo para sumar las facturas a un cierre que ya existe. Después elegí cuál en la lista.
- **Cancelar**: cierra la ventanita sin hacer nada.
- **Guardar**: aplica el cierre.

> ⚠️ **Atención:** al **Guardar**, las facturas quedan cerradas y ya no se pueden modificar. Un cierre solo se deshace con permiso de administrador.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **No encuentro una factura** | Hay un filtro puesto que la esconde. | Vaciá los casilleros y tocá **Buscar**. Probá con menos del número. |
| **No aparece el botón Mostrar Impuestos** | Ninguna factura de la lista tiene impuestos. | Es normal. Aparece solo si alguna los tiene. |
| **No veo Editar ni Borrar** | La factura está en un cierre o se pagó antes del último arqueo de caja. | Un administrador puede modificarla. Un candado en la primera columna indica un cierre. |
| **Falta pagar dice $ pero ya pagué** | El pago se hizo por menos, o todavía no se cargó. | Abrí la rueda ⚙ → **Ver** y revisá los pagos. Mirá también [Pagos (Egresos)](/user-guide/pagos). |
| **El Saldo del resumen no coincide con mi lista** | El resumen suma todas las páginas, no solo la que ves. | Es normal. Usá los filtros para achicar el resultado. |
| **Necesito la lista en Excel** | — | Tocá **Exportar XLSX** arriba, o **Descargar Excel** en el buscador. |
| **Me equivoqué al aplicar un cierre** | Se tocó **Guardar** con las facturas equivocadas. | Pedile a un administrador que las saque del cierre. |
