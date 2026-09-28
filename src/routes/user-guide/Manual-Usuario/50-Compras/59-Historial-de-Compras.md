# Historial de Compras

<div id="historial-de-compras"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Compras** → **Seguimiento** → **Historial de compras**
> **¿Quién lo usa?:** Compradores, encargados de costos y administradores

> 🎯 **¿Para qué sirve esto?**
> Acá ves cada mercadería que pediste, renglón por renglón, con su precio y cuánto recibiste.
> Te sirve para ver cómo cambió el precio de algo o a quién se lo compraste.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso de **Compras** en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Compras marcado en rojo](images/manual/50-compras/59-00a-menu-grupo-compras.png)

1. En el menú de la izquierda, tocá **Compras**.

![Opción Historial de compras marcada en rojo, debajo de Seguimiento](images/manual/50-compras/59-00b-menu-opcion-historial.png)

2. Tocá **Historial de compras**. Está debajo del título **SEGUIMIENTO**.

![Pantalla Historial de Órdenes de Compra con los renglones de Distribuidora Ejemplo](images/manual/50-compras/59-01-pantalla-historial.png)

Así se ve la pantalla. Cada renglón es una mercadería de una orden de compra.

---

## 🔎 Paso 2: Filtrá lo que buscás

<div id="paso-2-filtra-lo-que-buscas"></div>

![Recuadro de filtros: número de orden, mercadería y proveedor](images/manual/50-compras/59-02-panel-filtros.png)

En el recuadro de filtros podés elegir:

- **Nº Orden de Compra**: el número de una orden.
- **Seleccionar**: una mercadería. Por ejemplo: *Harina 0000 x 25 kg*.
- **Todos**: un proveedor. Por ejemplo: *Distribuidora Ejemplo*.

![Pantalla con el botón azul Filtrar marcado en rojo](images/manual/50-compras/59-05-donde-esta-boton-filtrar.png)

1. Elegí lo que necesites y tocá el botón azul **Filtrar**.
2. La lista muestra solo lo que coincide.

---

## 📋 Paso 3: Leé cada renglón

<div id="paso-3-lee-cada-renglon"></div>

![Renglón de la orden con Harina 0000 x 25 kg, su precio y el proveedor](images/manual/50-compras/59-07-renglon-compra.png)

De izquierda a derecha:

1. **#Orden**: el número de la orden de compra.
2. **Fecha** y **Usuario**: cuándo y quién la hizo.
3. **Cantidad** y **Precio de Compra**: cuánto pediste y el total del renglón.
4. **Mercadería** y **Costo Unitario**: qué es y cuánto te sale cada unidad. Por ejemplo: *$ 480 el kilo*.
5. **Fecha Recepción** y **Cantidad Recibida**: cuándo y cuánto llegó.
6. **Proveedor** y **Rubro**.

![Lista con el número de orden marcado en rojo](images/manual/50-compras/59-10-donde-esta-boton-orden.png)

- Tocá el **número de orden** para abrir la orden completa. Mirá [Órdenes de Compra](/user-guide/todas-las-ordenes-compra).

![Lista con el nombre de la mercadería marcado en rojo](images/manual/50-compras/59-08-donde-esta-boton-mercaderia.png)

- Tocá el **nombre de la mercadería** para ver su detalle.

![Lista con el botón editar marcado en rojo](images/manual/50-compras/59-09-donde-esta-boton-editar.png)

- Tocá **editar** para corregir ese renglón.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **La lista sale vacía** | Hay un filtro que no coincide con nada. | Dejá los filtros en **Seleccionar** y **Todos** y tocá **Filtrar**. |
| **Cantidad Recibida no coincide con lo pedido** | Se cuenta en la unidad de stock (por ejemplo, kilos y no bolsas). | Revisá la **Equivalencia** en [Mercaderías](/user-guide/mercaderias). |
| **Falta la Fecha Recepción** | La mercadería todavía no se recibió. | Recibila desde [Órdenes de Compra](/user-guide/todas-las-ordenes-compra). |
