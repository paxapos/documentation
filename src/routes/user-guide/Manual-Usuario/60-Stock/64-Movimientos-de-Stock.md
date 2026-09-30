# Movimientos de Stock

<div id="movimientos-de-stock"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Stock** → **Movimientos** → **Movimientos**
> **¿Quién lo usa?:** Depósito, encargados y administradores

> 🎯 **¿Para qué sirve esto?**
> Es la lista de todo lo que entró y salió del stock: compras recibidas, ventas, roturas y conteos.
> Te sirve para entender por qué el stock de algo subió o bajó.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso de **Stock** en [Permisos por Rol](/user-guide/permisos-por-rol).
- Solo aparecen movimientos de lo que tiene el stock controlado. Mirá [Stock de Mercaderías](/user-guide/stock-mercaderias) y [Stock de Subproductos](/user-guide/stock-subproductos).

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Stock marcado en rojo](images/manual/60-stock/64-00a-menu-grupo-stock.png)

1. En el menú de la izquierda, tocá **Stock**.

![Opción Movimientos marcada en rojo, debajo del título Movimientos](images/manual/60-stock/64-00b-menu-opcion-movimientos.png)

2. Tocá **Movimientos**. Está debajo del título **MOVIMIENTOS**.

![Pantalla Movimientos de Stock con el buscador, el botón Descargar Excel y la lista de movimientos](images/manual/60-stock/64-01-pantalla-movimientos.png)

Así se ve la pantalla. Arriba está el buscador y abajo, la lista. Lo más nuevo aparece primero.

---

## 📖 Paso 2: Leé un movimiento

<div id="paso-2-lee-un-movimiento"></div>

![Lista con tres movimientos: menos 3 Medialuna, menos 2 y más 20 de Harina 0000 x 25 kg](images/manual/60-stock/64-02-tabla-movimientos.png)

Cada renglón es una entrada o una salida. Las columnas dicen:

- **#**: el código del movimiento. Por ejemplo: *59A3B1*.
- **StockId**: el número del renglón en la pantalla de stock.
- **Depósito**: de qué depósito entró o salió.
- **Modelo** y **Modelo Id**: de dónde viene el movimiento (mirá la tabla de abajo).
- **Subproducto** o **Mercaderia**: qué se movió. Se completa una de las dos.
- **UM**: la unidad. Por ejemplo: *Kilo* o *Unidad*.
- **Cant**: cuánto se movió.
- **Descripción**: qué pasó, si alguien lo escribió.
- **Creado** y **Creador**: cuándo y quién.

La columna **Cant** te dice si entró o salió:

- **Verde con +**: entró. Por ejemplo: *+20* kilos de harina que llegaron.
- **Rojo con −**: salió. Por ejemplo: *−2* por una bolsa rota.

La columna **Modelo** te dice de dónde viene:

| Modelo | Qué significa |
|---|---|
| **PedidoMercaderia** o **Pedido** | Una compra que recibiste. Suma. |
| **DetalleComanda** o **DetalleSabor** | Una venta. Resta. |
| **Desperdicio** | Algo que se tiró o se echó a perder. Resta. |
| **Stock** | Un conteo cargado con **Reinicializar**. |
| **Movimiento** | Algo cargado a mano con **Agregar Movimiento**. |

> 💡 **Consejo útil:** si un número no te cierra, buscá el producto (Paso 3) y leé sus movimientos de abajo hacia arriba, del más viejo al más nuevo.

> ⚠️ **Atención:** los links **editar** y **borrar** cambian el stock. Usalos solo para corregir un movimiento cargado a mano por error.

---

## 🔎 Paso 3: Buscá los movimientos de un producto

<div id="paso-3-busca-los-movimientos-de-un-producto"></div>

![Recuadro de búsqueda con Harina escrito en el casillero Buscar y el botón azul Buscar a la derecha](images/manual/60-stock/64-03-panel-busqueda.png)

En el recuadro de búsqueda tenés:

- **Buscar**: escribí parte del nombre del producto. Por ejemplo: *Harina*. También podés escribir el **StockId**.
- **Buscar**: el botón azul de la derecha, que aplica la búsqueda.

1. Escribí el nombre y tocá **Buscar**.

![Lista con los dos movimientos de Harina 0000 x 25 kg: menos 2 y más 20](images/manual/60-stock/64-04-resultado-busqueda.png)

2. La lista muestra solo los movimientos de ese producto.

---

## 📥 Paso 4: Bajá los movimientos a una planilla

<div id="paso-4-baja-los-movimientos-a-una-planilla"></div>

![Pantalla Movimientos de Stock con el botón verde Descargar Excel marcado en rojo, debajo del buscador](images/manual/60-stock/64-05-donde-esta-boton-descargar-excel.png)

1. Si querés solo los de un producto, primero buscalo (Paso 3).
2. Tocá el botón verde **Descargar Excel**, debajo del buscador.
3. Se baja una planilla con los movimientos, lista para abrir en Excel.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **La lista está vacía** | Nada tiene el stock controlado todavía. | Empezá a controlarlo en [Stock de Mercaderías](/user-guide/stock-mercaderias) o [Stock de Subproductos](/user-guide/stock-subproductos). |
| **Recibí una compra y no aparece el movimiento** | La mercadería no tenía el stock controlado cuando la recibiste. | Stockeala en [Stock de Mercaderías](/user-guide/stock-mercaderias). Las próximas compras van a sumar solas. |
| **Vendí un producto y no bajó el stock** | El producto no tiene el stock controlado, ni una receta con ingredientes controlados. | Stockealo en [Stock de Subproductos](/user-guide/stock-subproductos) o revisá su [receta](/user-guide/recetas). |
| **No encuentro un movimiento** | La búsqueda tiene un nombre distinto. | Escribí menos letras. Por ejemplo: *Harin* en vez de *Harina 0000 x 25 kg*. |
