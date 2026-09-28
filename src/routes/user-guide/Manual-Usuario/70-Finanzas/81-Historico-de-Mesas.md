# Histórico de Mesas

<div id="historico-de-mesas"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Finanzas** → **Facturación AFIP** → **Historico de Mesas**
> **¿Quién lo usa?:** Encargados de salón, cajeros y auditores

> 🎯 **¿Para qué sirve esto?**
> Acá ves todas las mesas que ya pasaron, una por renglón, con su mozo, su total y cómo se cobraron.
> Podés buscar una mesa vieja, ver su detalle, bajar la lista a Excel o cargar a mano una mesa que faltó.

> 💡 **Ojo con los nombres:** el menú y los botones usan el nombre que tenga tu comercio. Si tu comercio usa "Pedido" en vez de "Mesa", vas a leer **Abrir Pedido**.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso de facturación AFIP en [Permisos por Rol](/user-guide/permisos-por-rol).
- Para ver los botones de cada renglón, también necesitás el permiso de anular mesas.
- Esta pantalla **no emite facturas**. La factura se emite desde la mesa, en el Salón.
- Para ver solo los cobros, mirá [Transacciones de Cobro](/user-guide/transacciones-de-cobro).

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Finanzas marcado en rojo](images/manual/70-finanzas/81-00a-menu-grupo-finanzas.png)

1. En el menú de la izquierda, tocá **Finanzas**.

![Opción Historico de Mesas marcada en rojo, debajo del título Facturación AFIP](images/manual/70-finanzas/81-00b-menu-opcion-historico-de-mesas.png)

2. Tocá **Historico de Mesas**. Está debajo del título **FACTURACIÓN AFIP**.

![Pantalla Mesas con el buscador arriba y la lista de mesas abajo](images/manual/70-finanzas/81-01-pantalla-historico-de-mesas.png)

Se abre la pantalla **Mesas**. Arriba tenés el buscador. Abajo, un renglón por mesa. Las columnas dicen:

- **#ID**: el número interno de la mesa.
- **Mesa**: el número o nombre que le pusieron.
- **Mozo**: quién la atendió.
- **Cubiertos**: cuántas personas había.
- **Cliente**: a quién se le asoció, si se cargó.
- **Estado**: por ejemplo **Facturada**, **Checkout** o **Pendiente**.
- **Total** y **Descuento**: lo que se cobró y el descuento aplicado.
- **Cobros**: con qué medio pagó y cuánto. Si la celda sale en rojo, lo cobrado no coincide con el total.
- **CAE Factura**: el número de la factura electrónica, si se emitió.
- **Checkin**, **Checkout** y **Tiempo de permanencia**: cuándo empezó, cuándo terminó y cuánto duró.
- **Creador**: quién la cargó.
- **Acciones**: los botones de cada renglón (Paso 4).

---

## 🔎 Paso 2: Buscá una mesa

<div id="paso-2-busca-una-mesa"></div>

![Buscador completo con Filtrar por fechas desplegado, los botones Excel y Buscar](images/manual/70-finanzas/81-03-buscador-completo.png)

En el recuadro **Filtros de Búsqueda** tenés estos casilleros:

- **Mesa**: escribí el número. Por ejemplo: *10*.
- **Importe**: escribí el total. Por ejemplo: *1500*.
- **Mozo**: elegí quién la atendió.
- **Estado**: elegí **Abierta**, **Facturada**, **Cobrada**, etc.
- **Cliente**: elegí un cliente.
- **Centro de Costo**: aparece solo si tu comercio los usa.
- **Filtrar por fechas**: tocalo para abrir los casilleros de fechas. Cada uno tiene **Desde** y **Hasta**:
  - **Creada**: cuándo se abrió la mesa.
  - **Checkin**: cuándo empezó.
  - **Checkout**: cuándo terminó.
  - **Cerrada**: cuándo se cerró.
  - **Cobrada**: cuándo se cobró.
- **Descuentos**: tildá uno para ver solo las mesas con ese descuento.
- **Incluir anuladas**: tildalo para buscar las mesas anuladas.
- **Excel**: baja la lista con lo que buscaste a un archivo de Excel.
- **Buscar**: el botón azul. Aplica lo que completaste.

1. Completá solo lo que necesites.
2. Tocá **Buscar**.
3. La lista muestra solo las mesas que coinciden.

![Lista con una sola mesa encontrada, con sus datos y los botones de la derecha](images/manual/70-finanzas/81-04-lista-filtrada.png)

> ⚠️ **Atención:** con **Incluir anuladas** la lista muestra solo las anuladas, no todas juntas. En nuestras pruebas la tabla salió vacía: si te pasa, destildalo.

---

## 👁 Paso 3: Mirá el detalle de una mesa

<div id="paso-3-mira-el-detalle-de-una-mesa"></div>

![Renglón de una mesa con el ojo, el lápiz y el menú de los tres puntos abierto: Reabrir, Imprimir Ticket, Ver detalles y Anular](images/manual/70-finanzas/81-05-renglon-con-menu-abierto.png)

En **Acciones** de cada renglón hay tres botones:

- **Ojo** 👁: abre el detalle de la mesa.
- **Lápiz** ✏️: abre la mesa para cambiar sus datos.
- **Tres puntos** ⋮: abre más opciones (Paso 4).

1. Tocá el **ojo** 👁 del renglón.

![Ventanita Detalles de Mesa con Estadía, Información General y Cliente](images/manual/70-finanzas/81-07-pantalla-ver-detalles.png)

Se abre la ventanita **Detalles de Mesa**. Bajando ves:

- **Estadía**: cuándo empezó, cuándo terminó y cuánto duró.
- **Información General**: cubiertos, mozo, creador, fechas y total.
- **Cliente**: quién es, si la mesa tiene uno.
- Más abajo: los pedidos, los cobros y el resumen de pagos.
- **Facturas AFIP**: solo aparece si la mesa ya tiene una factura.

![Botones Imprimir Ticket, Editar y Anular arriba a la derecha del detalle](images/manual/70-finanzas/81-08-botones-del-detalle.png)

Arriba a la derecha hay tres botones:

- **Imprimir Ticket**: imprime el ticket de la mesa.
- **Editar**: abre la mesa para cambiar sus datos.
- **Anular**: anula la mesa.

> ⚠️ **Atención:** **Imprimir Ticket** imprime de verdad. **Anular** saca la mesa de las estadísticas. No los toques si no estás seguro.

---

## ⋮ Paso 4: Usá el menú de tres puntos

<div id="paso-4-usa-el-menu-de-tres-puntos"></div>

1. En el renglón, tocá los **tres puntos** ⋮. Está a la derecha.

Se abre la lista que ves en la foto del Paso 3, con estas opciones:

- **Reabrir**: vuelve a abrir la mesa para seguir cargándole cosas. Solo aparece si la mesa no está abierta.
- **Imprimir Ticket**: imprime el ticket de la mesa.
- **Ver detalles**: abre el detalle, igual que el ojo.
- **Anular**: anula la mesa.

> ⚠️ **Atención:** **Reabrir**, **Imprimir Ticket** y **Anular** actúan al instante después de confirmar. Una mesa anulada deja de contar en las estadísticas.

Si anulás una mesa, la lista la muestra en rojo con un botón verde para **Restaurar** (las flechas 🔄). Al tocarlo, el sistema te pide confirmar.

---

## ➕ Paso 5: Abrí una mesa a mano

<div id="paso-5-abri-una-mesa-a-mano"></div>

Sirve para cargar una mesa que quedó sin registrar. Por ejemplo, una venta de días atrás.

![Pantalla Mesas con el botón verde Abrir Mesa marcado en rojo arriba a la derecha](images/manual/70-finanzas/81-02-donde-esta-boton-abrir-mesa.png)

1. Tocá el botón verde **Abrir Mesa**, arriba a la derecha.

![Pantalla Agregar Mesa vacía](images/manual/70-finanzas/81-09-pantalla-abrir-mesa.png)

Se abre la pantalla **Agregar Mesa**. Completala así:

![Pantalla Agregar Mesa completa con datos de ejemplo y los botones Agregar y Cancelar](images/manual/70-finanzas/81-10-formulario-abrir-mesa.png)

- **Listar Mesa**: el botón de arriba a la derecha. Vuelve a la lista sin guardar.
- **Número de Mesa**: escribí el número. Por ejemplo: *99*.
- **Mozo**: elegí quién la atendió.
- **Tipo Entrega**: elegí **En Salón**, **Es Delivery** o **Es Take Away**.
- **Es Pedimelo Online**: tildalo si vino de tu menú online.
- **Es Reserva**: tildalo si es una reserva.
- **Checkin** y **Checkout**: la fecha y hora de entrada y de salida.
- **Cliente**: elegí uno si querés. Puede quedar sin elegir.
- **Fecha de Facturación**: cuándo se cerró la cuenta.
- **Importe Total**: cuánto se cobró. Por ejemplo: *1500*.
- **Salon Mesa**: la mesa del salón donde estuvo.
- **Estado**: por ejemplo **Cobrada**. Al elegir **Cobrada** aparecen dos casilleros más.
- **Tipo De Pago**: con qué pagó. Por ejemplo: *Transferencia bancaria*.
- **Monto a Pagar**: cuánto pagó. Se completa solo con el importe.
- **Agregar**: el botón verde de abajo. Guarda la mesa.
- **Cancelar**: sale sin guardar nada.

> ⚠️ **Atención:** al tocar **Agregar** se crea la mesa y, si está **Cobrada**, también el cobro. Revisá los datos antes.

1. Completá los datos.
2. Tocá **Agregar** para guardar, o **Cancelar** para salir.

---

## ⚠️ ¿Qué hacer si algo no sale bien?

<div id="que-hacer-si-algo-no-sale-bien"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| Busco el botón **Facturar** y no está. | Esta pantalla no emite facturas. | Emití la factura desde la mesa, en el Salón. |
| No veo los botones del renglón. | Tu usuario no puede anular mesas. | Pedile el permiso a quien administra el sistema. |
| La lista sale vacía. | Los filtros no coinciden con ninguna mesa. | Borrá los filtros y tocá **Buscar** de nuevo. |
| Con **Incluir anuladas** la lista sale vacía. | La pantalla no muestra las anuladas en este caso. | Destildalo y buscá por número de mesa. |
| La celda de **Cobros** sale en rojo. | Lo cobrado no coincide con el total de la mesa. | Abrí el detalle y revisá los cobros. |
| No aparece **Reabrir**. | La mesa ya está abierta. | Solo se reabren mesas cerradas o cobradas. |
| Cambié un dato y la lista no cambia. | Falta tocar **Buscar**. | Tocá **Buscar** para actualizar la lista. |
