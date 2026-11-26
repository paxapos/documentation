# Cómo ver lo que les pagaste a tus proveedores (Pagos hechos)

<div id="pagos-hechos"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Compras y pagos** → **Pagos hechos** (debajo del título **Gastos y pagos**)
> **¿Quién lo usa?:** Administración, tesorería, contadores y dueños

> 🎯 **¿Para qué sirve esto?**
> Es la lista de los pagos que les hiciste a tus proveedores: a quién, cuánto, cómo y qué facturas canceló cada uno.
> Podés buscar un pago, verlo como recibo, avisarle al proveedor y corregirlo si hizo falta.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso **Pagos** (módulo Finanzas) en [Permisos por Rol](/user-guide/permisos-por-rol).
- Los pagos no se crean acá. Se hacen desde [Pagar](/user-guide/pagar) o al guardar un gasto en [Cargar gasto](/user-guide/cargar-gasto).
- Lo que **cobrás** a tus clientes no está acá. Eso está en [Transacciones de Cobro](/user-guide/transacciones-de-cobro).
- Las pestañas **Pagos a autorizar** y **Cheques y pagarés** aparecen si tu comercio usa órdenes de pago. **Retenciones**, si tu comercio tiene retenciones.
- Antes de PaxaPOS 3.18 esta pantalla se llamaba **Pagos** y estaba en **Finanzas** → **Facturas y Pagos**.

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

1. En el menú de la izquierda, tocá **Compras y pagos**.
2. Tocá **Pagos hechos**. Está debajo del título **Gastos y pagos**.

Arriba dice **Pagos** y, al lado: _A quién se le pagó, cuánto y cómo._ A la derecha, **Exportar** baja la lista a Excel.

Debajo están las pestañas **Pagos hechos**, **Pagos a autorizar**, **Cheques y pagarés** y **Retenciones**. Se explican en el Paso 5.

---

## 🔎 Paso 2: Buscá un pago que le hiciste a un proveedor

<div id="paso-2-busca-un-pago-que-le-hiciste-a-un-proveedor"></div>

Completá lo que sepas y tocá **Buscar**:

- **Proveedor**: a quién se le pagó.
- **Año**: el año del pago.
- **Pago desde** y **Pago hasta**: el rango de fechas en que se hizo el pago.

Tocá **Más filtros** para ver el resto:

- **Importe**: cuánto se pagó. Escribí el número exacto.
- **Identificador del pago**: el número del cheque o de la transferencia.
- **Medio de pago**: por ejemplo, **Cheque**.
- **Estado**: **Preparado**, **Autorizado**, **Rechazado** o **Pagado**.
- **Clasificación del gasto**: el tipo de gasto que pagó.
- **Gasto desde** y **Gasto hasta**: el rango de fechas de la factura que se pagó.

Si no hay nada, dice **No hay pagos con estos filtros.** Tocá **Quitar los filtros** para ver todo otra vez.

---

## 📋 Paso 3: Leé la lista de pagos

<div id="paso-3-lee-la-lista-de-pagos"></div>

Cada renglón es un pago. Las columnas dicen:

- **Fecha**: cuándo se hizo. Si es un cheque o pagaré con fecha programada, abajo dice **para el** y esa fecha.
- **Proveedor**: a quién se le pagó.
- **Medio**: cómo se pagó.
- **Importe**: cuánto se pagó.
- **Qué canceló**: la factura que pagó, o cuántas. Tocala para ver la factura.
- **Estado**: **Preparado** (para autorizar), **Autorizado** (para hacer), **Rechazado** o **Pagado**.
- **Acción**: el botón **Ver** y la flechita **▾** (Paso 4).

Con **Columnas** podés sumar **Arqueo** (la caja de la que salió la plata), **Cargado por**, **Identificador del pago** y **Observación**.

---

## ⚙️ Paso 4: Usá el menú de un pago

<div id="paso-4-usa-el-menu-de-un-pago"></div>

- **Ver**: abre el pago como un recibo: a quién, cuánto, cómo, cuándo y qué gastos cancela.

La flechita **▾** abre el resto, según tus permisos y el estado del pago:

- **Aprobar orden** y **Rechazar orden**: en un pago **Preparado**.
- **Hacer el pago**: en un pago **Autorizado**.
- **Editar**: corrige los datos del pago.
- **Cambiar quién lo cargó**.
- **Cambiar de caja**: pasa el pago a otro arqueo de caja abierto.
- **Eliminar**: borra el pago. Pregunta antes.

> ⚠️ **Atención:** **Eliminar** saca el pago y la factura vuelve a figurar como deuda. Usalo solo si lo cargaste por error.

**Editar**, **Cambiar quién lo cargó**, **Cambiar de caja** y **Eliminar** no aparecen en un pago cargado antes del cierre del último arqueo de caja. Un administrador siempre los ve.

### Avisale al proveedor por WhatsApp

<div id="avisale-al-proveedor-por-whatsapp"></div>

Cuando le pagás a un proveedor, podés avisarle por WhatsApp con el mensaje ya escrito.

1. Tocá **Ver** en el pago.
2. Tocá el botón verde **Avisar por WhatsApp**.
3. Se abre WhatsApp con el mensaje listo. Revisalo y mandalo vos.

El mensaje dice cuánto se pagó, cómo, cuándo y por qué factura u orden de compra. Si hubo retenciones, también dice cuánto se retuvo y cuánto se transfirió.

> 💡 **Consejo útil:** si el proveedor no tiene teléfono cargado, WhatsApp te deja elegir a quién mandárselo.

> ⚠️ **Atención:** el botón aparece solo en pagos ya hechos. En un pago preparado o autorizado no aparece.

---

## 🗂️ Paso 5: Recorré las pestañas

<div id="paso-5-recorre-las-pestanas"></div>

### Pagos a autorizar

<div id="pagos-a-autorizar"></div>

Son los pagos que alguien preparó y todavía no se hicieron. Arriba hay tres pestañas más: **Para autorizar**, **Autorizados, para hacer** y **Rechazados**, cada una con su cantidad.

- En cada pago ves el proveedor, las facturas, el medio y el vencimiento.
- **Ver detalle** abre el pago.
- **Autorizar** y **Rechazar**: para quien autoriza pagos.
- **Hacer el pago**: en un pago autorizado. Recién ahí se paga de verdad.
- **Ir a Pagar**: te lleva a [Pagar](/user-guide/pagar).

Si hay cheques o pagarés que vencen en los próximos 7 días, arriba aparece el aviso **Cheques y pagarés próximos a vencer**.

> ⚠️ **Atención:** **Autorizar** deja el pago listo para hacer. Confirmá el importe y el proveedor antes de tocarlo. Un pago autorizado se paga con **Hacer el pago**.

Quien autoriza o hace estos pagos también la tiene en el menú: **Pagos a autorizar**, debajo de **Pagar**, con un número de los que esperan.

### Cheques y pagarés

<div id="cheques-y-pagares"></div>

Son los pagos que hacés más adelante: cheques y pagarés con fecha programada.

- Arriba hay una tarjeta por estado, con el total y la cantidad de **pagos diferidos**.
- Los botones **Todos**, **Preparado**, **Autorizado**, **Rechazado** y **Pagado** muestran solo los de ese estado.
- Cada renglón muestra el **Identificador**, el **Importe**, el **Proveedor**, la **Fecha Programada** y la **Fecha Pagado**.

Si no hay ninguno, dice **No hay compromisos de pago**.

### Retenciones

<div id="retenciones"></div>

Es el **Libro de Retenciones**: lo que les retuviste a tus proveedores al pagarles. Sirve para tu contador.

- **Desde**, **Hasta**, **Proveedor**, **Régimen** y **Estado**: los filtros. Tocá **Filtrar**.
- Tres recuadros dicen la **Base Imponible Total**, el **Total Retenido** y cuántas **Retenciones** hay.
- En la tabla, la columna **Pago** lleva al pago y **PDF** baja el certificado.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema                                                      | Causa más frecuente                                                | Solución recomendada                                                                      |
| ------------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| **No veo las pestañas Pagos a autorizar y Cheques y pagarés** | Tu comercio no usa órdenes de pago.                                | Consultá con un administrador.                                                            |
| **No veo la pestaña Retenciones**                             | Tu comercio no tiene activadas las retenciones.                    | Pedile a un administrador que las active.                                                 |
| **La flechita solo deja Ver**                                 | El pago es de antes del último cierre de caja, o no tenés permiso. | Pedile a un administrador que lo corrija.                                                 |
| **Pagué una factura y no aparece el pago**                    | Hay un filtro puesto.                                              | Tocá **Quitar los filtros** o vaciá los casilleros y tocá **Buscar**.                     |
| **Cargué un pago por error**                                  | Se eligió mal la factura o el importe.                             | Tocá **▾** → **Eliminar** y volvé a pagar desde [Pagar](/user-guide/pagar).               |
| **No encuentro un pago que preparé**                          | Espera que lo autoricen.                                           | Buscalo en la pestaña **Pagos a autorizar**.                                              |
| **Cheques y pagarés aparece vacío**                           | Ningún pago tiene fecha programada.                                | Al pagar con cheque o pagaré, completá **¿Cuándo se cobra el cheque o vence el pagaré?**. |
