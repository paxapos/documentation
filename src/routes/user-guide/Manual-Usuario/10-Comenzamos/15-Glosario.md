# Glosario: las palabras de PaxaPOS que se confunden

<div id="glosario"></div>

> **¿Dónde está en el sistema?:** No es una pantalla. Es una guía de palabras, con un link a dónde está cada cosa.
> **¿Quién lo usa?:** Dueños, encargados, cajeros y administración

> 🎯 **¿Para qué sirve esto?**
> Algunas palabras quieren decir dos cosas distintas según de qué lado está la plata. Por ejemplo, "factura" es la que emitís a tu cliente y también la que te hace un proveedor.
> Acá tenés cada una, cómo se llama en PaxaPOS y dónde está.

---

## 🧾 Factura emitida y factura de un proveedor

<div id="factura-emitida-y-factura-de-un-proveedor"></div>

- **Factura emitida (a tu cliente)**: la que **vos le hacés a tu cliente** por lo que te compró. Sale con CAE de ARCA. Se emite desde la mesa, en el [Salón de Ventas](/user-guide/salon-de-ventas#paso-8-emiti-la-factura), con **Imprimir Ticket Fiscal** en la [Caja Rápida](/user-guide/caja-rapida#el-aviso-venta-cobrada), o sola en los [pedidos desde asistentes](/user-guide/ia-pedidos-desde-asistentes#factura).
- **Factura de un proveedor**: la que **un proveedor te hace a vos**. En PaxaPOS se llama **gasto**. Se carga en **Compras y pagos** → [Cargar gasto](/user-guide/cargar-gasto) y se busca en **Compras y pagos** → [Gastos](/user-guide/gastos).

> 💡 **Consejo útil:** si alguien te dice "cargá la factura", preguntá de qué lado es. Si la hiciste vos, va por el Salón. Si te la dieron, va por **Cargar gasto**.

---

## 💵 Cobro y pago

<div id="cobro-y-pago"></div>

- **Cobro**: plata que **entra**. Es lo que te paga tu cliente. Se hace al cobrar la mesa o la venta, y se ve en [Transacciones de Cobro](/user-guide/transacciones-de-cobro).
- **Pago**: plata que **sale**. Es lo que le pagás a un proveedor. Se hace en **Compras y pagos** → [Pagar](/user-guide/pagar) y se ve en [Pagos hechos](/user-guide/pagos-hechos).
- Los medios (efectivo, transferencia, cheque) son los mismos para cobrar y para pagar. Se configuran en [Medios de cobro](/user-guide/medios-de-cobro).
- Lo que **vos le pagás a PaxaPOS** por el servicio está en [Facturación del Servicio](/user-guide/facturacion-del-servicio).

---

## ↩️ Nota de crédito emitida y nota de crédito recibida

<div id="nota-de-credito-emitida-y-recibida"></div>

- **Nota de crédito emitida**: la hacés **vos a tu cliente** para anular o corregir una factura que le emitiste. Por ejemplo, si una factura salió B y tenía que salir A. Mirá [Salón de Ventas](/user-guide/salon-de-ventas#como-hacer-una-factura-a).
- **Nota de crédito recibida**: te la hace **un proveedor** y te descuenta plata. Se carga como un gasto en [Cargar gasto](/user-guide/cargar-gasto#si-es-una-nota-de-credito-del-proveedor). En [Gastos](/user-guide/gastos) figura con el estado **Nota de crédito**.

---

## 📄 Remito

<div id="remito"></div>

"Remito" quiere decir tres cosas distintas:

- **El remito de la mesa (la cuenta)**: lo que imprimís al cerrar la mesa para que el cliente vea cuánto debe. Dice "Documento no válido como factura". Mirá [Salón de Ventas](/user-guide/salon-de-ventas#paso-6-cerra-la-mesa-e-imprimi-el-remito).
- **Remito R**: el comprobante para trasladar mercadería, con su propio punto de venta y CAI. Se configura en [Configuración General](/user-guide/configuracion-general#fiscal-y-arca).
- **El remito del proveedor**: el papel que trae el proveedor con la mercadería. Se adjunta en la orden de compra con **Subir Remito**. Mirá [Crear Orden de Compra](/user-guide/crear-orden-compra).

---

## 🏦 Caja, turno y arqueo

<div id="caja-turno-y-arqueo"></div>

- **Caja**: el lugar donde se cobra y se guarda la plata. Por ejemplo: _Caja Barra_. Se crean en [Listado de Cajas](/user-guide/listado-de-cajas).
- **Arqueo**: el turno de una caja, desde que la abrís con el fondo de cambio hasta que la cerrás contando la plata. Se le dice también **turno de caja**. Se abre y se cierra en [Arqueos de Caja](/user-guide/arqueos-de-caja).
- **Turno** (del local): las franjas del día en que trabaja tu local, como _Almuerzo_ o _Cena_. Le ponen nombre al turno de cada arqueo. Se definen en [Turnos de Mesa](/user-guide/turnos-mesa).
- Los turnos y horarios de los empleados son otra cosa. Están en [Turnos y Horarios](/user-guide/turnos-y-horarios-fichaje).

---

## 📍 Punto de venta

<div id="punto-de-venta"></div>

"Punto de venta" quiere decir tres cosas distintas:

- **El punto de venta de ARCA**: el número que ARCA le da a tu comercio para hacer facturas electrónicas. Se carga en [Puntos de Venta (PDVs)](/user-guide/puntos-de-venta-pdv), después del [trámite en ARCA](/user-guide/punto-de-venta).
- **PDV / Centro de costo**: un local o un sector de tu negocio, como _Sucursal Centro_ o _Cocina_. Separa gastos y deuda por área. Se crean en [Centros de Costo](/user-guide/centros-de-costo) y se ven en [Deuda con proveedores](/user-guide/deuda-con-proveedores#deuda-por-local-o-sector).
- **El punto de venta de la factura de un proveedor**: el primer número de esa factura. Por ejemplo, _0001_ en _0001-00000557_. Es del proveedor, no tuyo. Se escribe al [cargar el gasto](/user-guide/cargar-gasto#paso-3-completa-lo-esencial).

---

## 📊 "Facturado" en la caja y en el arqueo

<div id="facturado-en-la-caja-y-en-el-arqueo"></div>

- En la caja y en el arqueo, **Facturado Total Mesas** quiere decir **cobrado**: suma las mesas que se cobraron en esa caja, tengan factura de ARCA o no. El nombre de la pantalla no cambia.
- Por eso puede no coincidir con lo que facturaste ante ARCA. Mirá [la diferencia con Abiertas Por Usuario](/user-guide/faq-cajero-diferencia-facturado-vs-abiertas) y [Arqueos de Caja](/user-guide/arqueos-de-caja#paso-6-mira-el-detalle-de-un-arqueo).
- Para saber si una mesa tiene factura emitida, mirá la columna **CAE Factura** en [Historico de Mesas](/user-guide/historico-de-mesas).
