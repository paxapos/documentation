# Cómo cargar una factura de un proveedor (Cargar gasto)

<div id="cargar-gasto"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Compras y pagos** → **Cargar gasto** (debajo del título **Gastos y pagos**)
> **¿Quién lo usa?:** Administración, encargados y dueños

> 🎯 **¿Para qué sirve esto?**
> Sirve para cargar lo que te cobró un proveedor: una factura de mercadería, la luz, el alquiler o un gasto sin comprobante.
> Si ya lo pagaste, registrás el pago en el mismo paso. Si no, queda como deuda con ese proveedor.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- ¿Buscás **emitir** una factura a tu cliente? Mirá [Emití la factura a tu cliente](/user-guide/salon-de-ventas#paso-8-emiti-la-factura) en el Salón de Ventas. Esta pantalla es para las facturas que **te hacen** tus proveedores.
- Tu usuario tiene que tener el permiso **Gastos** (módulo Finanzas) con la acción **cargar_gasto**, en [Permisos por Rol](/user-guide/permisos-por-rol). El rol **Compras: administración (carga gastos y paga)** ya lo trae.
- Para registrar el pago en el mismo paso, también necesitás el permiso **Pagos** (módulo Finanzas) con la acción **crear_egreso**. Sin ese permiso, la pregunta **¿Ya lo pagaste?** no aparece y el gasto queda a pagar.
- Tené a mano la factura de papel, la foto o el PDF.
- Lo único obligatorio es el **proveedor**, la **fecha** y el **total**. Lo demás lo podés completar después.
- Desde PaxaPOS 3.18 esta pantalla reemplaza a **Factura Manual**, **Subir factura** y **Nuevo gasto**, que estaban en **Finanzas** → **Facturas y Pagos**.

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

1. En el menú de la izquierda, tocá **Compras y pagos**.
2. Tocá **Cargar gasto**. Está debajo del título **Gastos y pagos**.

También llegás con el botón verde **Cargar gasto** de la lista de [Gastos](/user-guide/gastos).

Arriba dice **Cargar gasto** y, abajo del título: _Lo esencial es el proveedor, la fecha y el total. El resto se puede completar después._

---

## 🧾 Paso 2: Elegí si tenés el comprobante

<div id="paso-2-elegi-si-tenes-el-comprobante"></div>

La pantalla pregunta **¿Tenés el comprobante?** y ofrece tres botones:

- **Subir foto o PDF**: tenés la foto o el PDF de la factura. Aparece un recuadro para adjuntarla.
- **Cargar a mano**: tenés la factura de papel y copiás los datos.
- **Sin comprobante**: el gasto no tiene factura. No te pide el tipo ni el número.

Recién al elegir uno aparecen los demás casilleros.

### Si elegiste Subir foto o PDF

<div id="si-elegiste-subir-foto-o-pdf"></div>

- Arrastrá la foto o el PDF hasta el recuadro que dice **Arrastrá la foto o el PDF, o hacé clic**, o tocalo y elegí el archivo.
- Sirve un PDF, JPG o PNG de hasta 10 MB.
- Si tu comercio tiene la lectura con inteligencia artificial, PaxaPOS puede leer los datos de la factura. Si no, los completás vos.

> 💡 **Consejo útil:** el archivo queda guardado con el gasto. Después no tenés que buscar el papel.

---

## 📝 Paso 3: Completá lo esencial

<div id="paso-3-completa-lo-esencial"></div>

- **Proveedor**: escribí parte del nombre o el CUIT y elegí el proveedor de la lista. Por ejemplo: _Distribuidora Ejemplo_.
- **Fecha**: la fecha de la factura. Viene con la de hoy.
- **Total**: el total que dice la factura. Por ejemplo: _1500_.
- **Comprobante**: el tipo. Por ejemplo: **Factura B**. No aparece si elegiste **Sin comprobante**.
- **Punto de venta** y **Número**: los dos números de la factura del proveedor. El punto de venta es el primero (por ejemplo _0001_) y el número, el segundo (por ejemplo _00000557_). Es el punto de venta **del proveedor**, no el tuyo.
- **Vence**: hasta cuándo tenés para pagarla. Si no la completás, vence el mismo día.

> 💡 **Consejo útil:** si el número ya está cargado para ese proveedor, PaxaPOS no la guarda dos veces. Te avisa: **Este número de factura ya esta cargada para este mismo proveedor**.

### Si es una nota de crédito del proveedor

<div id="si-es-una-nota-de-credito-del-proveedor"></div>

Una **nota de crédito del proveedor** es la que **te hace** él para descontarte plata, por ejemplo por mercadería que le devolviste. No es la nota de crédito que **emitís** vos a tu cliente desde el Salón.

1. En **Comprobante**, elegí la nota de crédito que corresponde. Por ejemplo: **Nota de crédito B**.
2. Aparece **Factura que ajusta esta nota**. Elegí la factura del proveedor que descuenta. Si no corresponde a ninguna, dejá **Sin vincular (nota suelta)**.

La nota descuenta (crédito) o suma (débito) al saldo de esa factura.

Si el proveedor te reconoce un saldo a favor sin una nota de crédito fiscal, elegí **Comprobante X** (la "nota de crédito X"). Cargá el importe en negativo y contá en **Observaciones**, dentro de **Más datos**, de dónde sale. No va al libro de IVA.

---

## 💸 Paso 4: Contestá si ya lo pagaste

<div id="paso-4-contesta-si-ya-lo-pagaste"></div>

La pantalla pregunta **¿Ya lo pagaste?**:

- **No, queda a pagar**: se guarda como deuda con el proveedor. Después la pagás desde [Pagar](/user-guide/pagar).
- **Sí, ya lo pagué**: registra el pago junto con el gasto.
- **Preparar el pago para que lo autorice otra persona**: solo aparece si tu comercio usa **Pagos a autorizar**. El pago queda esperando que alguien lo autorice.

Si elegiste **Sí, ya lo pagué** o **Preparar el pago**, completá:

- **¿Cómo lo pagaste?**: el medio. Por ejemplo: _Efectivo_ o _Transferencia_.
- **¿Qué día?**: la fecha del pago. Viene con la de hoy.
- **¿Cuándo se cobra el cheque o vence el pagaré?**: solo aparece si pagás con cheque o pagaré.
- **Número de operación o de cheque (opcional)**.
- **Comprobante del pago (opcional)**: la foto o el PDF de la transferencia, del recibo o del cheque. Tocá **Adjuntar foto o PDF**.
- **Pagar otro importe**: tildalo solo si pagaste una parte. Escribí cuánto en **Importe**. El resto del gasto queda a pagar.
- **Más datos del pago**: la cuenta bancaria, el número de operación bancaria y las observaciones.

> ⚠️ **Atención:** si pagaste en efectivo con el cajón de la caja, registrá el pago **acá** (o en [Pagar](/user-guide/pagar)) y no hagas además un **Retiro** en el arqueo. El pago ya resta del efectivo de tu caja abierta. Mirá [Cuál de las tres formas usar](/user-guide/pagar#cual-de-las-tres-formas-usar).

> 💡 **Consejo útil:** si al proveedor le corresponden retenciones, se calculan solas al guardar el pago y se descuentan de lo que se le transfiere.

---

## 🗂️ Paso 5: Completá Más datos (opcional)

<div id="paso-5-completa-mas-datos-opcional"></div>

Tocá **Más datos** para abrir el resto: impuestos, clasificación, centro de costo, moneda e ítems.

### Impuestos del proveedor

<div id="impuestos-del-proveedor"></div>

![Columna Impuestos del proveedor con retenciones de Ganancias, IIBB, IVA y SUSS, y el botón Agregar Otros Impuestos](images/manual/70-finanzas/76-04-impuestos-del-proveedor.png)

Al elegir el proveedor aparecen sus impuestos. Si todavía no lo elegiste, dice **Elegí un proveedor para ver sus impuestos.**

- **Casillero de cada impuesto**: tildalo si la factura lo lleva. Después completá el importe.
- **Agregar Otros Impuestos**: abre la lista de los demás impuestos, como **IVA 21%**.

![Impuesto IVA 21% tildado, con el neto 1239.67 y el IVA calculado 260,33](images/manual/70-finanzas/76-05-agregar-iva.png)

Ejemplo con **IVA 21%**:

1. Tocá **Agregar Otros Impuestos** y tildá **IVA 21%**.
2. Escribí el importe sin IVA en **Neto**. Por ejemplo: _1239.67_.
3. PaxaPOS calcula el **Impuesto** solo: _260,33_.

### Neto gravado y comprobantes B

<div id="neto-gravado-y-comprobantes-b"></div>

- **Neto gravado**: se calcula con los impuestos que tildaste.
- En una factura **B** el total ya trae el IVA adentro. Aparece la lista **IVA contenido** con **21 %**, **10,5 %**, **27 %** y **Exento (0 %)**, y el neto es el total sin ese IVA. Por ejemplo, con un total de _1500_ y 21 %, el neto es _1239,67_. Lo podés corregir a mano.
- En las facturas **C** y en los comprobantes sin IVA, el neto es igual al total.

> 💡 **Consejo útil:** el neto sin IVA se usa para la retención de Ganancias y para controlar la factura contra la orden de compra. Conviene que quede bien.

### Clasificación, centro de costo y moneda

<div id="clasificacion-centro-de-costo-y-moneda"></div>

- **Clasificación**: para qué es el gasto. Por ejemplo: _MANO DE OBRA_. Si no elegís, queda **Sin clasificar**. Mirá [Clasificación de Gastos](/user-guide/clasificacion-de-gastos).
- **PDV / Centro de costo**: a qué local o sector pertenece el gasto. Solo aparece si tu comercio tiene centros de costo. Mirá [Centros de Costo](/user-guide/centros-de-costo).
- **Es un bien de uso (equipo, mueble, obra)**: tildalo si es una inversión. Solo aparece si tu comercio usa CAPEX/OPEX.
- **Moneda**: dejá la de tu comercio. Si elegís otra, aparece **Cotización**.
- **Observaciones**: un texto libre. Por ejemplo: _Factura de prueba del manual_.

### Ítems: lo que compraste

<div id="items-lo-que-compraste"></div>

![Panel Ítems de la factura con un renglón Harina 0000 x 25 kg, cantidad 1 e importe 1500, y el botón Agregar ítem](images/manual/70-finanzas/76-08-items-de-la-factura.png)

En el panel **Ítems de la factura** cargás el detalle de lo que compraste. Sirve si querés que cuente para el stock.

- **Mercadería**: escribí el nombre y elegí de la lista. Por ejemplo: _Harina 0000 x 25 kg_.
- **Cantidad**, **Unidad** e **Importe de línea**: lo que dice ese renglón de la factura.
- **Quitar**: tildalo para sacar el renglón.
- **Agregar ítem**: suma un renglón nuevo.
- **Suma de los ítems**: PaxaPOS la compara con el neto y avisa si no coinciden.

> 💡 **Consejo útil:** si no elegís una mercadería de la lista, el renglón se guarda igual y queda **pendiente de vincular**. Desde una factura nunca se crea una mercadería nueva.

---

## 💾 Paso 6: Guardá

<div id="paso-6-guarda"></div>

El botón azul de abajo cambia según lo que contestaste en **¿Ya lo pagaste?**:

- **Guardar gasto**: queda como deuda con el proveedor.
- **Guardar y registrar el pago**: guarda el gasto y el pago juntos.
- **Guardar y preparar el pago**: guarda el gasto y deja el pago para que lo autoricen.

Al guardar se abre el gasto que cargaste. Si entraste desde la lista de [Gastos](/user-guide/gastos), volvés a la lista.

**Cancelar** sale sin guardar nada.

> ⚠️ **Atención:** **Guardar y registrar el pago** registra un pago de verdad y baja la deuda. Revisá el medio y el importe antes de tocarlo.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema                                                               | Causa más frecuente                                                              | Solución recomendada                                                                         |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **"Este número de factura ya esta cargada para este mismo proveedor"** | Esa factura ya se cargó antes.                                                   | Buscala en [Gastos](/user-guide/gastos) con el número. Si es otra, revisá el número.         |
| **Dice "Falta el proveedor.", "Falta la fecha." o "Falta el total."**  | Falta uno de los tres datos obligatorios.                                        | Completalo y volvé a guardar.                                                                |
| **No aparece Cargar gasto en el menú**                                 | Tu usuario no tiene el permiso de cargar gastos.                                 | Pedile a un administrador que lo active en [Permisos por Rol](/user-guide/permisos-por-rol). |
| **No aparece la pregunta ¿Ya lo pagaste?**                             | Tu usuario no tiene permiso de pagos.                                            | Guardá el gasto como deuda. Lo paga alguien con permiso desde [Pagar](/user-guide/pagar).    |
| **"Un saldo a favor no se paga al cargarlo"**                          | Cargaste una nota de crédito o un total negativo y elegiste **Sí, ya lo pagué**. | Elegí **No, queda a pagar**. Se descuenta cuando le pagues otra factura a ese proveedor.     |
| **Me equivoqué en un dato**                                            | Se guardó con un error.                                                          | En [Gastos](/user-guide/gastos), abrí el menú del gasto y tocá **Editar**.                   |
