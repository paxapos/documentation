# Cómo ver lo que te cobraron tus proveedores (Gastos)

<div id="gastos"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Compras y pagos** → **Gastos** (debajo del título **Gastos y pagos**)
> **¿Quién lo usa?:** Administración, contadores, encargados y dueños

> 🎯 **¿Para qué sirve esto?**
> Es la lista de todo lo que te cobraron tus proveedores: facturas, notas de crédito y gastos sin comprobante, pagos y sin pagar.
> Buscás un gasto, ves cuánto falta pagar, lo corregís, lo pagás o lo ponés en un cierre.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso **Gastos** (módulo Finanzas) en [Permisos por Rol](/user-guide/permisos-por-rol).
- Los gastos se cargan en [Cargar gasto](/user-guide/cargar-gasto). Los que vienen de una orden de compra también aparecen acá.
- Las facturas que **emitís** a tus clientes no están en esta lista. Están en la mesa del [Salón de Ventas](/user-guide/salon-de-ventas#paso-8-emiti-la-factura).
- Para ver cuánto le debés a cada proveedor, mirá [Deuda con proveedores](/user-guide/deuda-con-proveedores).
- Desde PaxaPOS 3.18 esta lista reemplaza a **Historial de Facturas**, **Pendientes de pago** y las facturas por digitalizar. Hoy son chips de esta lista.

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

1. En el menú de la izquierda, tocá **Compras y pagos**.
2. Tocá **Gastos**. Está debajo del título **Gastos y pagos**.

Arriba dice **Gastos** y, al lado: _Lo que se compró y lo que se debe._ A la derecha están los botones:

- **Exportar**: baja la lista a Excel, con todas las columnas.
- **Cargar gasto**: abre [Cargar gasto](/user-guide/cargar-gasto). Al guardar, volvés a esta lista.

---

## 🏷️ Paso 2: Elegí un chip

<div id="paso-2-elegi-un-chip"></div>

Debajo del título hay una fila de botones, los **chips**. Cada uno muestra una parte de los gastos. El número del chip es cuántos gastos piden que hagas algo.

- **A pagar**: los que tienen saldo. Ordenados por vencimiento.
- **Vencidos**: pasó el vencimiento y todavía no se ordenó pagarlos.
- **Vence esta semana**: vencen hoy o en los próximos 6 días.
- **Por revisar**: tienen foto o PDF y la inteligencia artificial todavía no los leyó, o no pudo.
- **Recién cargadas**: las que se cargaron en los últimos 7 días, la más nueva primero, aunque la fecha de la factura sea vieja.
- **Leídos por IA, sin QR**: los datos los leyó la inteligencia artificial y la factura no tenía un QR de ARCA legible. Conviene revisarlos a mano.
- **Sin orden de compra**: solo aparece si tu comercio usa órdenes de compra.
- **Del mes**: los del mes en curso.
- **Todos**: todos los gastos. Sin otro filtro, muestra los de los últimos 3 meses.

Solo ves los chips que corresponden a tus permisos. Por ejemplo, **A pagar**, **Vencidos** y **Vence esta semana** aparecen si podés ver lo que hay que pagar.

> 💡 **Consejo útil:** si un proveedor sube hoy una factura con fecha del mes pasado, la encontrás en **Recién cargadas**.

---

## 🔎 Paso 3: Buscá una factura de un proveedor

<div id="paso-3-busca-una-factura-de-un-proveedor"></div>

Completá lo que sepas y tocá **Buscar**:

- **Buscar por proveedor o número de comprobante**: parte del nombre o del CUIT del proveedor, o del número de la factura. Por ejemplo: _557_ o _0001-00000557_.
- **Desde** y **Hasta**: el rango de fechas de la factura.
- **Cargada desde** y **Cargada hasta**: el rango de fechas en que se cargó en PaxaPOS, no la fecha que dice el papel. **Cargada hasta** incluye todo ese día.

Tocá **Más filtros** para ver el resto:

- **Clasificación**, **Tipo de comprobante** y **Cierre** (**Abiertos** o **Cerrados**).
- **N° de orden de compra**: aparece si tu comercio usa órdenes de compra.
- **Total** y **Neto (sin IVA)**: el importe exacto.
- **Bien de uso** y **Tipo de costo**.
- **Solo los que no tienen clasificación**.

Si no encuentra nada, dice **No hay gastos con estos filtros.** Tocá **Quitar los filtros** para volver a ver todo.

> 💡 **Consejo útil:** si entraste tocando un proveedor en [Deuda con proveedores](/user-guide/deuda-con-proveedores), arriba de la lista dice **Proveedor:** y su nombre. Tocá **Ver todos los proveedores** para sacar ese filtro.

---

## 📊 Paso 4: Leé los totales y la lista

<div id="paso-4-lee-los-totales-y-la-lista"></div>

Arriba de la lista, tres números suman **todos** los gastos que coinciden, no solo los de la página:

- **Total**: lo que suman con impuestos.
- **Sin IVA**: lo que suman sin IVA.
- **Falta pagar**: lo que todavía no pagaste. En rojo si hay deuda, en verde si no.

Las columnas de la lista son:

- **Casilla**: para elegir gastos (Paso 6). Un candado indica que el gasto está en un cierre.
- **Fecha**, **Proveedor** y **Comprobante**: cuándo, de quién y qué factura. Si es de una orden de compra, abajo dice el número de la orden.
- **Total** y **Falta pagar**.
- **Vence**: la fecha y, si todavía se debe, cuánto falta o cuánto pasó. Por ejemplo: _hace 3 días_, _hoy_, _mañana_ o _en 4 días_. En rojo si venció.
- **Estado**: **A pagar**, **Vencido**, **Pago en preparación**, **Pagado en parte**, **Pagado**, **Por revisar**, **Nota de crédito** o **Anulado por nota de crédito**.
- **Acción**: el botón de lo que hay que hacer con ese gasto (Paso 5).

Con **Columnas** podés sumar **Clasificación**, **Bien de uso**, **Imagen**, **Impuestos**, **Observación** y **Cargado el**. La elección queda guardada en tu navegador.

---

## ⚙️ Paso 5: Usá el botón de cada gasto

<div id="paso-5-usa-el-boton-de-cada-gasto"></div>

Cada renglón tiene un botón con lo que hay que hacer:

- **Pagar**: si falta pagar y tenés permiso. Abre el formulario de pago. Mirá [Pagar](/user-guide/pagar#paso-4-completa-el-pago).
- **Revisar**: si el gasto está **Por revisar**. Abre el gasto para completar los datos.
- **Ver**: si no hay nada pendiente. Abre el gasto.

Al lado, la flechita **▾** abre el resto de las opciones, según tus permisos:

- **Ver** y **Pagar**, si no son el botón principal.
- **Leer con IA** o **Volver a leer con IA**: en el chip **Por revisar**, si tu comercio tiene la lectura con IA.
- **Editar**: corrige los datos.
- **Duplicar**: hace una copia para cargar otro parecido.
- **Borrar**: elimina el gasto. Pregunta antes.
- **Añadir ítems** (o **Añadir o editar ítems**): carga lo que se compró en ese gasto.
- **Descargar el comprobante**: baja la foto o el PDF del gasto.
- **Adjuntar comprobante**: sube la foto o el PDF a un gasto que está en un cierre y no tiene archivo.

> ⚠️ **Atención:** **Borrar** saca el gasto y su deuda. Usalo solo si lo cargaste por error.

> 💡 **Consejo útil:** **Editar**, **Duplicar** y **Borrar** no aparecen en un gasto que está en un cierre. Un administrador siempre los ve.

En el chip **Por revisar** también está el botón **Leer con IA los que faltan (hasta 10)**.

---

## ☑️ Paso 6: Pagá o cerrá varias facturas de un proveedor juntas

<div id="paso-6-paga-o-cierra-varias-facturas-de-un-proveedor-juntas"></div>

1. Tildá la casilla de cada gasto. Para elegir todos los de la página, tildá la casilla de la fila de títulos.
2. Abajo aparece una barra con lo que elegiste.
3. Tocá **Pagar** para pagarlos juntos, o **Aplicar a un cierre** para ponerlos en un cierre.

> ⚠️ **Atención:** un pago tiene un solo destinatario. Para pagar juntos, elegí gastos de **un mismo proveedor**. Si mezclás proveedores, PaxaPOS te pide que pagues a cada uno por separado.

> 💡 **Consejo útil:** una nota de crédito del proveedor con saldo se puede tildar junto con su factura. Su saldo se descuenta del pago.

### Aplicar a un cierre

<div id="aplicar-a-un-cierre"></div>

Un cierre junta gastos de un período para que nadie los modifique. Por ejemplo, el mes que ya le pasaste al contador.

Al tocar **Aplicar a un cierre** se abre una ventanita:

- **Nombre del cierre nuevo**: por ejemplo, _Cierre de abril_.
- **Ponerlos en un cierre que ya existe**: solo para administradores. Elegí el cierre, o dejá **No, crear uno nuevo**.
- **Cancelar**: cierra la ventanita sin hacer nada.
- **Guardar**: aplica el cierre.

> ⚠️ **Atención:** un gasto en un cierre ya no se puede modificar. Un cierre solo lo deshace un administrador. Un gasto cerrado que todavía se debe se puede pagar igual.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema                                      | Causa más frecuente                                            | Solución recomendada                                                                                 |
| --------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **No encuentro una factura de un proveedor**  | Estás en un chip o hay un filtro que la esconde.               | Tocá **Todos**, vaciá el buscador y tocá **Buscar**. Probá con menos números.                        |
| **En Todos no aparecen gastos viejos**        | Sin filtros, **Todos** muestra los últimos 3 meses.            | Poné las fechas en **Desde** y **Hasta**, o buscá por proveedor.                                     |
| **No veo Editar ni Borrar**                   | El gasto está en un cierre, o tu usuario no tiene ese permiso. | El candado de la primera columna indica un cierre. Un administrador puede modificarlo.               |
| **"Un pago tiene un solo destinatario"**      | Elegiste gastos de más de un proveedor.                        | Pagá a cada proveedor por separado.                                                                  |
| **Falta pagar dice un importe pero ya pagué** | El pago fue por una parte, o todavía no se cargó.              | Abrí el gasto con **Ver** y revisá sus pagos. Mirá también [Pagos hechos](/user-guide/pagos-hechos). |
| **Los totales no coinciden con lo que veo**   | Los totales suman todas las páginas, no solo la que ves.       | Es normal. Usá los filtros para achicar el resultado.                                                |
| **Me equivoqué al aplicar un cierre**         | Se tocó **Guardar** con los gastos equivocados.                | Pedile a un administrador que los saque del cierre.                                                  |
