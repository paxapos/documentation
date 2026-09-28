# Órdenes de Compra

<div id="ordenes-de-compra"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Compras** → **Seguimiento** → **Órdenes de compra**
> **¿Quién lo usa?:** Compradores, encargados de depósito y administradores

> 🎯 **¿Para qué sirve esto?**
> Acá están todas las órdenes de compra, con el estado de cada una: si se aprobó, si se mandó, si llegó, si se facturó y si se pagó.
> Desde acá recibís la mercadería y seguís cada compra hasta el final.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso de **Compras** en [Permisos por Rol](/user-guide/permisos-por-rol).
- Para crear una orden nueva, mirá [Crear una Orden de Compra](/user-guide/crear-orden-compra).

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Compras marcado en rojo](images/manual/50-compras/52-00a-menu-grupo-compras.png)

1. En el menú de la izquierda, tocá **Compras**.

![Opción Órdenes de compra marcada en rojo, debajo de Seguimiento](images/manual/50-compras/52-00b-menu-opcion-pedidos.png)

2. Tocá **Órdenes de compra**. Está debajo del título **SEGUIMIENTO**.

![Pantalla Órdenes de Compra con los filtros y la lista de órdenes](images/manual/50-compras/52-01-pantalla-index.png)

Así se ve la pantalla.

![Título Órdenes de Compra con los botones de vista, Pedir Ítem, Nueva OC y Aprobaciones](images/manual/50-compras/52-113-encabezado.png)

Arriba tenés:

- Los tres botones al lado del título cambian la vista: **lista**, **tablero de compras** y **carrito de pedidos**.
- **Pedir Ítem**: para pedir una mercadería que falta.
- **Nueva OC**: abre [Crear una Orden de Compra](/user-guide/crear-orden-compra).
- **Aprobaciones**: abre [Órdenes a aprobar](/user-guide/ordenes-a-aprobar).

---

## 🔎 Paso 2: Buscá una orden

<div id="paso-2-busca-una-orden"></div>

![Recuadro de filtros: proveedor, número de OC, número de factura, fechas, centro de costo y el botón Buscar](images/manual/50-compras/52-02-panel-filtros.png)

En el recuadro de filtros podés completar:

- **Proveedor**: parte del nombre. Por ejemplo: *Distribuidora Ejemplo*.
- **N° de OC**: el número de la orden.
- **N° de Factura**: el número de la factura del proveedor.
- Las dos fechas: **desde** y **hasta** qué día se creó.
- **Centro de Costo**: si separás las compras por sector.
- **Buscar**: el botón azul de la derecha, que aplica los filtros.

1. Completá lo que necesites y tocá **Buscar**.

---

## 🚦 Paso 3: Entendé el estado de cada orden

<div id="paso-3-entende-el-estado-de-cada-orden"></div>

![Lista de órdenes: una rechazada, una aprobada y enviada, y una pendiente](images/manual/50-compras/52-114-columna-estado.png)

En la columna **Estado**, cada orden muestra una fila de círculos. El primero dice cómo está la orden:

- ✖ rojo: **rechazada**.
- ✔ verde: **aprobada** (o no necesitaba aprobación).
- 🕓 naranja: **esperando aprobación**.

Los círculos que siguen se pintan a medida que avanza: **Enviado**, **Recibido**, **Facturado** y **Pagado**.

A la derecha, en **Acciones**, cada orden tiene un botón con el paso que sigue y una flechita **▾** con más opciones:

- **Enviar (por mail)**: la orden todavía no se le mandó al proveedor (Paso 4).
- **Recepcionar** (verde): ya se mandó y falta recibir la mercadería (Paso 5).
- **▾**: abre más acciones (Paso 6).

---

## 📤 Paso 4: Mandale la orden al proveedor

<div id="paso-4-mandale-la-orden-al-proveedor"></div>

1. Tocá **Enviar (por mail)** en la orden.
2. El proveedor recibe un mail con un link para ver la orden.

> ⚠️ **Atención:** el mail le llega de verdad al proveedor. Revisá la orden antes de tocarlo.

> 💡 **Consejo útil:** si el proveedor no tiene mail, el botón dice **Enviar (por whatsapp)** o **Enviar (manualmente)**.

---

## 📦 Paso 5: Recibí la mercadería

<div id="paso-5-recibi-la-mercaderia"></div>

1. Cuando llega el pedido, tocá el botón verde **Recepcionar** de esa orden.

![Pantalla de recepción: botones Recepcionar y Recepcionar y Generar Gasto, fecha de recepción y lo que llegó](images/manual/50-compras/52-123-formulario-recepcion.png)

2. Se abre la pantalla **Recepcionar Mercadería**:
   - **Fecha Recepción**: dejá la de hoy o poné el día en que llegó.
   - Cada renglón es lo que pediste. Si llegó otra cantidad o a otro precio, cambialo. La **✖** roja saca un renglón, y en el renglón vacío de abajo podés sumar algo que vino de más.
   - **Recepcionar** (verde): recibís la mercadería y entra al stock.
   - **Recepcionar y Generar Gasto** (naranja): además cargás la factura, en un solo paso.
3. Revisá todo y tocá el botón que corresponda.

---

## ⚙️ Paso 6: Usá el botón de más acciones

<div id="paso-6-usa-el-boton-de-mas-acciones"></div>

1. Tocá la flechita **▾** a la derecha de la orden.

![Menú de más acciones abierto](images/manual/50-compras/52-115-menu-mas-acciones.png)

2. Se abre una lista:
   - **Ver OC**: abre la orden completa (Paso 7).
   - **Editar**: cambia la orden.
   - **Imprimir**: la imprime.
   - **Completar factura manualmente** y **Subir factura con archivo**: cargan la factura del proveedor.
   - **Reenviar a proveedor**: la vuelve a mandar por mail.
   - **Unificar con otra OC**: junta dos órdenes del mismo proveedor en una.
   - **Marcar observación**: avisa que hubo un problema (ver abajo).
   - **Finalizar OC**: la cierra, aunque falte algo.
   - **Eliminar OC**: la borra.

> ⚠️ **Atención:** **Finalizar OC** y **Eliminar OC** no se pueden deshacer fácil. Usalos solo si estás seguro.

### Marcar una observación

<div id="marcar-una-observacion"></div>

![Ventana Observar OC con el motivo escrito y los botones Cancelar y Marcar Observación](images/manual/50-compras/52-116-ventana-marcar-observacion.png)

3. Si llegó algo mal (por ejemplo, bolsas rotas), tocá **Marcar observación**.
4. En **Motivo de la observación**, escribí qué pasó y tocá **Marcar Observación**.
5. La orden queda marcada hasta que alguien la resuelva. Si te arrepentiste, tocá **Cancelar**.

---

## 📄 Paso 7: Mirá la orden completa

<div id="paso-7-mira-la-orden-completa"></div>

![Orden de Compra con su estado, botones, totales y link para el proveedor](images/manual/50-compras/52-119-pantalla-ver-oc.png)

Arriba ves el proveedor, la observación y el estado de la orden.

![Botones de la orden: Recepcionar, Editar, Imprimir, Observación, Finalizar y el tacho](images/manual/50-compras/52-124-botones-de-la-oc.png)

Los botones de la orden:

- **Recepcionar**: recibís la mercadería (Paso 5).
- **Editar**: cambiás la orden.
- **Imprimir**: la imprimís.
- **Observación**: marcás un problema, igual que en el Paso 6.
- **Finalizar**: cerrás la orden, aunque falte algo.
- El tacho 🗑️ borra la orden.

### Link para el proveedor

<div id="link-para-el-proveedor"></div>

![Link público de la orden, con el botón Copiar](images/manual/50-compras/52-78-campo-publicurlinput.png)

- El proveedor puede ver la orden con este link. Tocá **Copiar** para pegarlo en un mensaje.

![Botones Reenviar por mail, Enviar por WhatsApp y Guía para proveedor](images/manual/50-compras/52-121-botones-envio.png)

- **Reenviar por mail** y **Enviar por WhatsApp** le mandan el link. **Guía para proveedor** explica cómo lo usa el proveedor.

### Facturas, pagos e ítems

<div id="facturas-pagos-e-items"></div>

![Solapas Facturas, Pagos e Ítems, con los botones Cargar Factura y Digitalizar factura](images/manual/50-compras/52-125-solapas-y-facturas.png)

- Las solapas muestran las **Facturas**, los **Pagos** y los **Ítems** de la orden.
- **Cargar Factura**: cargás la factura del proveedor a mano.
- **Digitalizar factura**: subís la foto y el sistema lee los datos.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **No aparece el botón Recepcionar** | La orden todavía no se le mandó al proveedor. | Mandala primero (Paso 4). |
| **No puedo mandar la orden** | Está esperando aprobación o fue rechazada. | Revisala en [Órdenes a aprobar](/user-guide/ordenes-a-aprobar). |
| **La columna Estado sale vacía** | Las columnas del flujo de compras están apagadas en la configuración. | Pedile a soporte que las active. |
| **No encuentro una orden** | Tiene filtros puestos. | Borrá los filtros y tocá **Buscar**. |
