# Transacciones MercadoPago

<div id="transacciones-mercadopago"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Medios de Pago** → **Transacciones MercadoPago**
> **¿Quién lo usa?:** Cajeros, encargados y contadores

> 🎯 **¿Para qué sirve esto?**
> Acá ves todos los cobros que entraron por MercadoPago: con QR, con link de pago o con la terminal Point.
> Te sirve para controlar que un cliente pagó y para cuadrar la caja con lo que te depositó MercadoPago.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- MercadoPago tiene que estar elegido en alguna forma de cobro. Mirá [Configuración de Procesadores de Pago](/user-guide/configuracion-procesadores).
- Tu usuario tiene que tener el permiso **Contabilidad** de Finanzas en [Permisos por Rol](/user-guide/permisos-por-rol).

> 💡 **Consejo útil:** esta pantalla es la misma que [Transacciones de Cobro](/user-guide/transacciones-de-cobro), pero ya viene filtrada para mostrar solo MercadoPago.

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Medios de Pago marcado en rojo](images/manual/30-medios-de-pago/32-00a-menu-grupo-payments.png)

1. En el menú de la izquierda, tocá **Medios de Pago**.

![Opción Transacciones MercadoPago marcada en rojo en el menú lateral](images/manual/30-medios-de-pago/32-00b-menu-opcion-mercadopago-transacciones.png)

2. Tocá **Transacciones MercadoPago**. Está debajo del título **MERCADOPAGO**.

![Pantalla Listado de Cobros con los filtros arriba y dos cobros de MercadoPago abajo](images/manual/30-medios-de-pago/32-01-pantalla-index.png)

Así se ve la pantalla. Arriba están los filtros. Abajo, la lista de cobros, del más nuevo al más viejo.

---

## 📋 Paso 2: Leé la lista de cobros

<div id="paso-2-lee-la-lista-de-cobros"></div>

![Un cobro de MercadoPago en la lista: fecha, arqueo, mesa, tipo de pago, canal, monto y estado](images/manual/30-medios-de-pago/32-33-fila-cobro-mercadopago.png)

Cada renglón es un cobro. De izquierda a derecha:

1. **Fecha**: el día y la hora del cobro.
2. **Arqueo**: el número de la caja donde quedó anotado.
3. **Mesa**: la mesa o el pedido que se cobró.
4. **Tipo de Pago**: dice **MercadoPago** y cómo pagó el cliente.
5. **Canal**: **QR** (escaneó el código), **PAY_LINK** (link de pago) o la terminal Point.
6. **Monto**: cuánto pagó el cliente. Por ejemplo: *$ 1.500*.
7. **Estado**: **Aprobado** quiere decir que la plata entró.

---

## 🔎 Paso 3: Buscá un cobro con los filtros

<div id="paso-3-busca-un-cobro-con-los-filtros"></div>

Completá solo los casilleros que necesites. Los demás dejalos como están.

![Casillero de fecha Desde](images/manual/30-medios-de-pago/32-02-campo-desde.png)

1. En el primer casillero de fecha, elegí el día **desde** el que querés ver.

![Casillero de fecha Hasta](images/manual/30-medios-de-pago/32-03-campo-hasta.png)

2. En el segundo, elegí el día **hasta** el que querés ver.

![Lista Todos los estados](images/manual/30-medios-de-pago/32-04-campo-status.png)

3. En **Todos los estados** podés elegir, por ejemplo, solo los **Aprobado**.

![Casillero ID Mesa](images/manual/30-medios-de-pago/32-05-campo-mesa-id.png)

4. En **ID Mesa** podés escribir el número de una mesa.

![Lista Todos los instrumentos](images/manual/30-medios-de-pago/32-06-campo-instrument.png)

5. En **Todos los instrumentos** elegís con qué pagó: tarjeta, dinero en cuenta, etc.

![Lista de procesador con MercadoPago elegido](images/manual/30-medios-de-pago/32-07-campo-acquirer.png)

6. Este casillero ya dice **MercadoPago**. No lo cambies: si lo cambiás, vas a ver cobros de otras empresas.

![Lista Todos los canales](images/manual/30-medios-de-pago/32-08-campo-channel.png)

7. En **Todos los canales** elegís si fue por QR, link o terminal.

![Lista Todos los tipos de pago](images/manual/30-medios-de-pago/32-09-campo-tipo-de-pago.png)

8. En **Todos los tipos de pago** podés elegir un medio de cobro del comercio.

![Casillero Monto desde](images/manual/30-medios-de-pago/32-10-campo-monto-desde.png)

![Casillero Monto hasta](images/manual/30-medios-de-pago/32-11-campo-monto-hasta.png)

9. En los dos casilleros **Monto** escribí el importe mínimo y el máximo. Por ejemplo: *1000* y *2000*.

![Pantalla con el botón azul Filtrar marcado en rojo](images/manual/30-medios-de-pago/32-12-donde-esta-boton-filtrar.png)

10. Tocá el botón azul **Filtrar**.
11. La lista de abajo muestra solo los cobros que coinciden.

---

## 🧹 Paso 4: Borrá los filtros

<div id="paso-4-borra-los-filtros"></div>

![Pantalla con el botón Limpiar marcado en rojo al lado de Filtrar](images/manual/30-medios-de-pago/32-14-donde-esta-boton-limpiar.png)

1. Tocá el botón **Limpiar**. Está al lado de **Filtrar**.
2. Se borran todos los filtros.

> ⚠️ **Atención:** **Limpiar** también saca el filtro de MercadoPago y vas a ver los cobros de todos los medios. Para volver a ver solo MercadoPago, entrá de nuevo desde el menú (Paso 1).

---

## 👁️ Paso 5: Mirá el detalle de un cobro

<div id="paso-5-mira-el-detalle-de-un-cobro"></div>

![Lista de cobros con el botón del ojo marcado en rojo, a la derecha del renglón](images/manual/30-medios-de-pago/32-16-donde-esta-boton-icono.png)

1. Buscá el cobro en la lista.
2. Tocá el botón del ojo 👁️. Está a la derecha del renglón, en **Acciones**.
3. Se abre la pantalla con todos los datos de ese cobro.

![Pantalla Transacción de Pago con Información General, Detalles de Monto, Método de Pago y Relaciones](images/manual/30-medios-de-pago/32-34-pantalla-detalle.png)

En esta pantalla ves:

- **Información General**: el estado y los números con los que MercadoPago identifica el cobro.
- **Detalles de Monto**: cuánto se cobró.
- **Método de Pago**: el procesador (**MPAGO**), el canal (QR o link) y con qué pagó el cliente.
- **Relaciones**: la mesa y la caja donde quedó anotado.

> 💡 **Consejo útil:** si un cliente dice que pagó y no lo encontrás, compará el **ID Pago Externo** con el número de operación que le figura en su MercadoPago.

---

## 🍽️ Paso 6: Abrí la mesa o la caja del cobro

<div id="paso-6-abri-la-mesa-o-la-caja-del-cobro"></div>

![Detalle del cobro con el botón azul de la mesa marcado en rojo](images/manual/30-medios-de-pago/32-22-donde-esta-boton-icono-mesa.png)

1. Para ver qué se consumió, tocá el botón azul con el número de la mesa.
2. Se abre la mesa con sus productos.

![Detalle del cobro con el botón verde Arqueo marcado en rojo](images/manual/30-medios-de-pago/32-24-donde-esta-boton-arqueo.png)

3. Para ver la caja donde entró el cobro, tocá el botón verde **Arqueo**.
4. Se abre el arqueo de esa caja.

---

## ↩️ Paso 7: Volvé a la lista

<div id="paso-7-volve-a-la-lista"></div>

![Detalle del cobro con el botón Volver al listado marcado en rojo, arriba a la derecha](images/manual/30-medios-de-pago/32-20-donde-esta-boton-volver-al-listado.png)

1. Tocá **Volver al listado**. Está arriba a la derecha.
2. Volvés a la lista de cobros.

> 💡 **Consejo útil:** si tocás **Volver al listado** se sale del filtro de MercadoPago. Para ver solo MercadoPago otra vez, entrá desde el menú.

---

## ❓ ¿Puedo cambiar el medio de un cobro de MercadoPago?

<div id="puedo-cambiar-el-medio-de-un-cobro-de-mercadopago"></div>

No. Los cobros de MercadoPago los anota MercadoPago solo, y ya coinciden con lo que te deposita.
Por eso no vas a ver el botón del lápiz ✏️ ni el botón **Corregir el medio** en estos cobros.
Ese botón solo aparece en los cobros cargados a mano. Mirá [Transacciones de Cobro](/user-guide/transacciones-de-cobro).

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **No aparece Transacciones MercadoPago en el menú** | MercadoPago no está elegido en ninguna forma de cobro, o tu usuario no tiene el permiso **Contabilidad**. | Elegilo en [Configuración de Procesadores de Pago](/user-guide/configuracion-procesadores), o pedile al dueño el permiso. |
| **Sale "No se encontraron transacciones"** | No hubo cobros de MercadoPago en esas fechas, o hay un filtro puesto. | Tocá **Limpiar** y entrá de nuevo desde el menú. |
| **Veo cobros de Payway o de otros medios** | Se borró el filtro de MercadoPago. | Entrá de nuevo desde el menú **Medios de Pago** → **Transacciones MercadoPago**. |
| **Un cobro dice Pendiente o Rechazado** | El cliente no terminó de pagar, o MercadoPago no aprobó el pago. | No entregues el pedido hasta ver **Aprobado**. Pedile al cliente que pague de nuevo. |
