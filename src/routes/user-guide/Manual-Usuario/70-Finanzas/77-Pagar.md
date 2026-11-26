# Cómo pagar a tus proveedores (Pagar)

<div id="pagar"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Compras y pagos** → **Pagar** (debajo del título **Gastos y pagos**)
> **¿Quién lo usa?:** Administración, tesorería, encargados y dueños

> 🎯 **¿Para qué sirve esto?**
> Te muestra lo que tenés que pagarles a tus proveedores, ordenado por fecha de vencimiento.
> Elegís qué pagar y registrás el pago. La deuda con ese proveedor baja.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Para ver la pantalla, tu usuario tiene que tener el permiso **Pagos** (módulo Finanzas) con la acción **crear_egreso**, o el permiso **Gastos** con la acción **ver_pendientes_pago**. Se activan en [Permisos por Rol](/user-guide/permisos-por-rol).
- Para pagar, hace falta **crear_egreso**. Sin ese permiso ves la lista pero no las casillas ni el botón **Pagar**.
- Acá aparecen los gastos con saldo. Se cargan en [Cargar gasto](/user-guide/cargar-gasto).
- Si pagás en efectivo con la plata del cajón, abrí antes tu caja. Mirá [Cuál de las tres formas usar](#cual-de-las-tres-formas-usar).

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

1. En el menú de la izquierda, tocá **Compras y pagos**.
2. Tocá **Pagar**. Está debajo del título **Gastos y pagos**. El número al lado son los gastos vencidos.

Arriba dice **Pagar** y, al lado: _lo que hay que pagar, por fecha de vencimiento_. A la derecha está **Exportar a Excel**.

También llegás a pagar desde el botón **Pagar** de un gasto en la lista de [Gastos](/user-guide/gastos).

---

## 📊 Paso 2: Mirá cuánto tenés que pagar

<div id="paso-2-mira-cuanto-tenes-que-pagar"></div>

Tres recuadros te dicen lo importante:

- **Vencido**: lo que ya venció. Va en rojo si hay algo.
- **Vencen esta semana**: lo que vence hoy o en los próximos 6 días. Abajo dice hasta qué fecha cuenta.
- **Total a pagar**: todo lo que se debe, con la cantidad de gastos.

Si no se debe nada, dice **No hay nada para pagar** y _Estás al día con los proveedores._

---

## 📅 Paso 3: Elegí qué facturas de proveedores pagar

<div id="paso-3-elegi-que-facturas-de-proveedores-pagar"></div>

Hay dos formas de ver la lista. Cambiás con los botones **Por vencimiento** y **Por proveedor**.

### Por vencimiento

<div id="por-vencimiento"></div>

Los gastos están agrupados en **Vencidos**, **Vencen esta semana**, **Próximos** y **Sin vencimiento**. Cada renglón dice cuándo vence, el proveedor, el comprobante y lo que **Falta pagar**.

1. Tildá la casilla de cada gasto que querés pagar.
2. Abajo aparece una barra con el total. Tocá **Pagar**.

Si un gasto ya tiene un pago preparado, lo dice debajo. Por ejemplo: **Pago preparado · para autorizar**.

Si tu comercio usa los controles de compras, algunos gastos dicen **Todavía no se puede pagar:** y el motivo. No tienen casilla.

### Por proveedor

<div id="por-proveedor"></div>

Hay un renglón por proveedor, con lo **Vencido**, el **Total a pagar** y el **Primer vencimiento**.

- **Pagar todo lo de este proveedor**: abre el pago de todos sus gastos juntos.
- **Elegir gastos**: muestra los gastos de ese proveedor, uno por uno, para tildar solo algunos.

Tocá el nombre del proveedor para ver solo lo suyo. Arriba dice **Mostrando solo los gastos de** y su nombre. **Ver todos los proveedores** saca ese filtro.

> ⚠️ **Atención:** un pago tiene un solo destinatario. Si tildás gastos de dos proveedores, PaxaPOS te pide que pagues a cada uno por separado.

---

## 💸 Paso 4: Completá el pago

<div id="paso-4-completa-el-pago"></div>

Se abre la pantalla **Pagar**. Arriba dice a quién le pagás, por ejemplo **Vas a pagarle a Distribuidora Ejemplo**, con cada gasto, su importe y el **Total**.

- **¿Cómo se paga?**: el medio. Por ejemplo: _Efectivo_ o _Transferencia_. Son los medios de [Medios de cobro](/user-guide/medios-de-cobro).
- **Fecha de pago**: cuándo pagaste. Si tu comercio usa **Pagos a autorizar**, dice **Fecha de pago (solo si ya lo pagaste)**.
- **¿Cuándo se cobra el cheque o vence el pagaré?**: solo con cheque o pagaré.
- **Número de operación o de cheque (opcional)**.
- **Comprobante (opcional)**: la foto o el PDF de la transferencia o del recibo.
- **Más datos**: la **Cuenta bancaria**, el **Número de operación bancaria** y las **Observaciones**.
- **Importe a pagar**: viene con todo lo que se debe. Para pagar una parte, tildá **Pagar otro importe** y escribí cuánto.

Si tu comercio tiene retenciones, aparece el recuadro **Retenciones** con cada régimen, el **Bruto (cancela deuda)**, el **Total Retenciones** y el **Neto a transferir**: lo que le pasás de verdad al proveedor.

Para terminar:

- **Registrar pago**: registra el pago. Si tu comercio usa **Pagos a autorizar**, en su lugar ves **Preparar pago** (queda para que otra persona lo autorice) y **Registrar como ya pagado**.
- **Cancelar**: sale sin pagar.

> ⚠️ **Atención:** **Registrar pago** y **Registrar como ya pagado** registran un pago de verdad y bajan la deuda. Revisá el medio y el importe antes de tocarlos.

Después, el pago aparece en [Pagos hechos](/user-guide/pagos-hechos). Ahí podés avisarle al proveedor por WhatsApp.

---

## 🧭 Cuál de las tres formas usar

<div id="cual-de-las-tres-formas-usar"></div>

Hay tres lugares donde parece que podés anotar que le pagaste a un proveedor. No hacen lo mismo:

| Forma                                                                                                                                                         | ¿Baja la deuda con el proveedor?                                  | ¿Resta del efectivo de la caja?                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Pago desde el gasto**: esta pantalla, el botón **Pagar** de [Gastos](/user-guide/gastos) o **Sí, ya lo pagué** en [Cargar gasto](/user-guide/cargar-gasto). | Sí.                                                               | Sí, si pagás en **Efectivo** y tenés tu caja abierta: el pago queda en tu arqueo. Con otro medio, no toca el efectivo. |
| **Retiro** en el arqueo. Mirá [Arqueos de Caja](/user-guide/arqueos-de-caja#retiro).                                                                          | **No.** El retiro no queda vinculado a ningún gasto ni proveedor. | Sí.                                                                                                                    |
| **Retiro** (o egreso) del cajón desde la pantalla de ventas. Mirá [Entradas y salidas del cajón](/user-guide/faq-cajero-ingreso-egreso-cajon).                | **No.** Es el mismo retiro de caja.                               | Sí.                                                                                                                    |

**Para pagarle a un proveedor, usá siempre el pago desde el gasto.** Si la plata sale del cajón, pagá con tu caja abierta y elegí **Efectivo**: el pago ya resta del efectivo de tu arqueo.

> ⚠️ **Atención:** no lo cargues dos veces. Si además hacés un **Retiro** por el mismo pago, el arqueo descuenta esa plata dos veces y al cerrar te da un sobrante. Y si solo hacés el **Retiro**, la deuda con el proveedor sigue igual.

Usá el **Retiro** para lo que no es un pago a un proveedor: pasar plata a otra caja o sacar la recaudación para depositarla.

> 💡 **Consejo útil:** si pagaste en efectivo sin tener la caja abierta, el pago queda sin caja. Quien tenga permiso lo puede pasar a una caja abierta con **Cambiar de caja**, en [Pagos hechos](/user-guide/pagos-hechos).

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema                                                          | Causa más frecuente                                                                                    | Solución recomendada                                                                                                      |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| **No veo las casillas ni el botón Pagar**                         | Tu usuario puede ver lo que hay que pagar, pero no pagar.                                              | Pedile a un administrador el permiso **Pagos** con **crear_egreso**, en [Permisos por Rol](/user-guide/permisos-por-rol). |
| **"Un pago tiene un solo destinatario"**                          | Elegiste gastos de más de un proveedor.                                                                | Pagá a cada proveedor por separado.                                                                                       |
| **"Este gasto ya tiene un pago en preparación o ya está pagado"** | Ya hay un pago preparado para ese gasto.                                                               | Buscalo en [Pagos hechos](/user-guide/pagos-hechos), pestaña **Pagos a autorizar**.                                       |
| **Un gasto dice "Todavía no se puede pagar"**                     | Tu comercio no deja pagar sin la recepción de la mercadería, o si la factura no coincide con la orden. | Completá la recepción o revisá la orden de compra.                                                                        |
| **Una factura que cargué no aparece**                             | Ya está pagada.                                                                                        | Buscala en [Gastos](/user-guide/gastos), chip **Todos**.                                                                  |
| **La caja me da un sobrante después de pagarle a un proveedor**   | El pago se cargó desde el gasto y además como **Retiro**.                                              | Consultá con tu encargado para corregir el retiro. Mirá [Cuál de las tres formas usar](#cual-de-las-tres-formas-usar).    |
