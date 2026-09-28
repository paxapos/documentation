# Transacciones de Cobro

<div id="transacciones-de-cobro"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Finanzas** → **Ingresos y Cobros** → **Transacciones de Cobro**
> **¿Quién lo usa?:** Cajeros, encargados y contadores

> 🎯 **¿Para qué sirve esto?**
> Acá ves todos los cobros que entraron al comercio, uno por renglón. Podés buscar por fecha, por medio de pago o por mesa.
> También podés abrir un cobro para ver el detalle, o corregir con qué pagó el cliente.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso de cobros en [Permisos por Rol](/user-guide/permisos-por-rol).
- Para corregir el medio de un cobro, también necesitás el permiso de cajero.
- Esta pantalla **no reimprime tickets**. Para eso mirá [Histórico de Mesas](/user-guide/historico-de-mesas).

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Finanzas marcado en rojo](images/manual/70-finanzas/74-00a-menu-grupo-finanzas.png)

1. En el menú de la izquierda, tocá **Finanzas**.

![Opción Transacciones de Cobro marcada en rojo, debajo del título Ingresos y Cobros](images/manual/70-finanzas/74-00b-menu-opcion-transacciones-de-cobro.png)

2. Tocá **Transacciones de Cobro**. Está debajo del título **INGRESOS Y COBROS**.

![Pantalla Listado de Cobros con el panel de filtros arriba y la lista de cobros abajo](images/manual/70-finanzas/74-01-pantalla-lista-de-cobros.png)

Se abre el **Listado de Cobros**. Arriba tenés los filtros. Abajo, un renglón por cada cobro. Las columnas dicen:

- **Fecha**: cuándo se cobró.
- **Arqueo**: en qué caja quedó. Tocá el número para abrirla.
- **Mesa**: de qué mesa es. Tocá el número para verla.
- **Tipo de Pago**: con qué pagó el cliente. Por ejemplo: *Tarjeta Amex*.
- **Instrumento**, **Procesador** y **Canal**: datos técnicos del medio de pago.
- **Monto**: cuánto se cobró.
- **Estado**: por ejemplo, **Aprobado**.
- **Creado por**: quién cargó el cobro. Si lo hizo el sistema, dice *paxapos@paxapos.com*.
- **Acciones**: los botones del renglón (Paso 3 y Paso 5).

> 💡 **Consejo útil:** tocá el título de una columna para ordenar la lista por esa columna.

---

## 🔎 Paso 2: Buscá un cobro

<div id="paso-2-busca-un-cobro"></div>

![Panel de filtros completo con fechas, estado Aprobado, montos y los botones Filtrar y Limpiar](images/manual/70-finanzas/74-02-panel-de-filtros.png)

En el panel de arriba tenés estos casilleros:

- **Desde** y **Hasta** (las dos primeras fechas): elegí el período que querés ver.
- **Todos los estados**: mostrá solo los cobros **Aprobado**, **Rechazado**, **Pendiente**, etc.
- **ID Mesa**: escribí el número interno de la mesa.
- **Todos los instrumentos**: tarjeta, alias, efectivo, etc.
- **Todos los procesadores**: el banco o la empresa que procesó el pago.
- **Todos los canales**: por dónde entró el cobro (link de pago, QR, carga manual).
- **Todos los tipos de pago**: por ejemplo *Tarjeta Visa* o *Transferencia bancaria*.
- **Monto desde** y **Monto hasta**: buscá cobros entre dos importes. Por ejemplo, de *100* a *5000*.
- **Filtrar**: el botón azul. Aplica lo que completaste.
- **Limpiar**: borra todos los filtros y muestra todo otra vez.

1. Completá solo lo que necesites. Lo que dejás sin tocar no filtra.
2. Tocá **Filtrar**.
3. La lista muestra solo los cobros que coinciden.

---

## 👁 Paso 3: Abrí el detalle de un cobro

<div id="paso-3-abri-el-detalle-de-un-cobro"></div>

![Lista de cobros con los botones del ojo y del lápiz del primer renglón marcados en rojo, en la columna Acciones](images/manual/70-finanzas/74-03-donde-esta-botones-del-renglon.png)

A la derecha de cada cobro, en **Acciones**, hay dos botones:

- **Ojo** 👁: abre el detalle del cobro.
- **Lápiz** ✏️: corrige con qué pagó el cliente (Paso 5). Aparece solo en algunos cobros.

1. Tocá el **ojo** 👁 del cobro que querés ver.

![Detalle de la transacción con los recuadros de información general, monto, método de pago y relaciones](images/manual/70-finanzas/74-05-pantalla-detalle-del-cobro.png)

Se abre la pantalla **Transacción de Pago**. Arriba a la derecha tiene dos botones:

- **Corregir el medio**: el naranja. Corrige con qué pagó el cliente (Paso 5).
- **Volver al listado**: vuelve a la lista de cobros.

Y abajo, estos recuadros:

- **Información General**: el número del cobro, el estado, la fecha y la referencia.
- **Detalles de Monto**: el monto base, la comisión si hay y el monto total.
- **Método de Pago**: procesador, canal e instrumento.
- **Relaciones**: la mesa, la caja (arqueo) y quién cargó el cobro.
- **Correcciones del medio**: aparece solo si alguien ya cambió el medio de este cobro.

En cobros con tarjeta, QR o link de pago, abajo aparecen también dos recuadros con datos técnicos (**Datos de Request** y **Datos de Response**). Son para soporte técnico: no hace falta leerlos.

---

## 🔗 Paso 4: Andá a la mesa o a la caja del cobro

<div id="paso-4-anda-a-la-mesa-o-a-la-caja-del-cobro"></div>

Usá la misma pantalla del Paso 3.

1. En el recuadro **Relaciones**, tocá el botón azul de **Mesa**. Por ejemplo: **#13rf**.
2. Se abre la mesa con todo lo que se consumió.

3. Volvé y tocá el botón verde **Arqueo #99**. El número puede ser otro.
4. Se abre la caja donde quedó este cobro. Más en [Arqueos de Caja](/user-guide/arqueos-de-caja).

5. Para regresar a la lista, tocá **Volver al listado**, arriba a la derecha.

---

## ✏️ Paso 5: Corregí con qué pagó el cliente

<div id="paso-5-corregi-con-que-pago-el-cliente"></div>

Sirve cuando se cargó mal el medio. Por ejemplo, se anotó *Tarjeta Amex* y pagó con *Tarjeta Visa*.

Solo se puede corregir un cobro **cargado a mano** y cuya caja **sigue abierta**. Los cobros de Mercado Pago, QR o link de pago no se tocan: los fijó el procesador.

1. Si el cobro se puede corregir, en la lista ves un **lápiz** ✏️ al lado del ojo (Paso 3). Tocalo.
2. También podés abrir el detalle y tocar el botón naranja **Corregir el medio**, arriba a la derecha.
3. Se abre la pantalla **Corregir el medio de cobro**.

![Pantalla completa con los datos del cobro, la lista de medios y los botones Corregir el medio y Cancelar](images/manual/70-finanzas/74-11-formulario-corregir-el-medio.png)

- **Cobro a corregir**: repasá la fecha, el monto, la mesa, el medio actual y la caja.
- **¿Con qué pagó realmente?**: elegí el medio correcto. El que ya tiene está en gris y no se puede elegir.
- **Corregir el medio**: el botón azul que confirma el cambio.
- **Cancelar**: sale sin cambiar nada.

> ⚠️ **Atención:** al tocar **Corregir el medio** el cobro queda con el medio nuevo. El cambio se anota en el detalle y cambia lo que se espera en la caja. Verificá bien antes de confirmar.

4. Elegí el medio correcto.
5. Tocá **Corregir el medio** para guardar, o **Cancelar** para salir.

Si el cobro no se puede corregir, ves un aviso amarillo y solo el botón **Volver**.

---

## ⚠️ ¿Qué hacer si algo no sale bien?

<div id="que-hacer-si-algo-no-sale-bien"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| No veo el lápiz en un cobro. | El cobro es electrónico o su caja ya está cerrada. | Solo se corrigen cobros manuales con la caja abierta. |
| La pantalla dice que no se puede cambiar el medio. | El cobro lo procesó Mercado Pago, un QR o un link de pago. | Pedile ayuda a soporte si el dato está mal. |
| La lista sale vacía. | Los filtros no coinciden con ningún cobro. | Tocá **Limpiar** y probá con menos filtros. |
| Busco el botón **Reimprimir** y no está. | Esta pantalla no imprime. | Reimprimí el ticket desde [Histórico de Mesas](/user-guide/historico-de-mesas). |
| No encuentro un cobro por mesa. | En **ID Mesa** hay que escribir el número interno. | Buscá por fecha y monto, y fijate en la columna **Mesa**. |
