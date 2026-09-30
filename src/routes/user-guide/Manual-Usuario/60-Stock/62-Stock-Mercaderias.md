# Stock de Mercaderías

<div id="stock-de-mercaderias"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Stock** → **Inventario** → **Stock Mercaderías**
> **¿Quién lo usa?:** Depósito y encargados de compras

> 🎯 **¿Para qué sirve esto?**
> Acá ves cuánto te queda de cada cosa que le comprás a un proveedor. Por ejemplo: cuántos kilos de *Harina 0000* hay en el depósito.
> También cargás qué mercaderías querés controlar, el mínimo que no querés perforar y los conteos del depósito.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso de **Stock** en [Permisos por Rol](/user-guide/permisos-por-rol).
- La mercadería tiene que estar cargada. Mirá [Mercaderías](/user-guide/mercaderias).

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Stock marcado en rojo](images/manual/60-stock/62-00a-menu-grupo-stock.png)

1. En el menú de la izquierda, tocá **Stock**.

![Opción Stock Mercaderías marcada en rojo, debajo de Inventario](images/manual/60-stock/62-00b-menu-opcion-stock-mercaderias.png)

2. Tocá **Stock Mercaderías**. Está debajo del título **INVENTARIO**.

![Pantalla Stock de Mercaderias con el buscador arriba y la lista con Harina 0000 y Levadura fresca](images/manual/60-stock/62-01-pantalla-stock-mercaderias.png)

Así se ve la pantalla. Cada renglón es una mercadería que tiene el stock controlado. Las columnas dicen:

- **Depósito**: dónde está guardada. Por ejemplo: *Depósito Central*.
- **Mercadería**: el nombre. Tocalo para ver la ficha del producto.
- **PU Ult. Compra** y **Fecha Ult. Compra**: cuánto la pagaste la última vez y cuándo.
- **U/M de Compra**: cómo te la vende el proveedor. Por ejemplo: *Bolsa*.
- **U/M de Stock**: cómo la contás en el depósito. Por ejemplo: *Kilo*.
- **fecha inicio** y **cantidad inicial**: cuándo empezaste a controlarla y cuánto había ese día.
- **cant en stock**: cuánto hay ahora. Es la cantidad inicial más lo que entró, menos lo que salió.
- **Nivel minimo de stock**: por debajo de ese número te conviene volver a comprar.
- **acciones**: los botones de cada renglón (Paso 5).

> 💡 **Consejo útil:** tocá el título de una columna para ordenar la lista. Por ejemplo, tocá **cant en stock** para ver primero lo que tiene menos.

---

## 🔎 Paso 2: Buscá una mercadería

<div id="paso-2-busca-una-mercaderia"></div>

![Recuadro de búsqueda con Harina escrito, los depósitos, los rubros, los proveedores y el botón azul Buscar](images/manual/60-stock/62-04-panel-busqueda.png)

En el recuadro de búsqueda tenés:

- **Buscar por Nombre**: escribí parte del nombre. Por ejemplo: *Harina*.
- **Seleccione Depósito**: mostrá solo lo que está en un depósito.
- **Seleccione Rubro**: mostrá solo un rubro. Por ejemplo: *Almacén*.
- **Seleccione Proveedor**: mostrá solo lo que le comprás a un proveedor.
- **Buscar**: el botón azul de abajo, que aplica la búsqueda.

1. Completá lo que necesites y tocá **Buscar**.

![Lista con un solo renglón: Harina 0000 x 25 kg, con 68 kilos en stock](images/manual/60-stock/62-05-resultado-busqueda.png)

2. La lista muestra solo las que coinciden.

> 💡 **Consejo útil:** la casilla **Search** de arriba de la lista busca al instante entre los renglones que ya ves, sin tocar **Buscar**.

---

## ➕ Paso 3: Empezá a controlar el stock de una mercadería

<div id="paso-3-empeza-a-controlar-el-stock-de-una-mercaderia"></div>

![Pantalla Stock de Mercaderias con el botón verde Stockear Mercaderia marcado en rojo arriba a la derecha](images/manual/60-stock/62-02-donde-esta-boton-stockear-mercaderia.png)

1. Tocá el botón verde **Stockear Mercaderia**, arriba a la derecha.
2. Se abre una ventanita con los datos para completar.

![Ventanita Formulario Stokear Producto completa con Harina 0000 x 25 kg, Depósito Central, 50, 10, la fecha y el botón Guardar](images/manual/60-stock/62-03-formulario-stockear.png)

- **Compras Mercaderia**: escribí parte del nombre y tocalo en la lista. Por ejemplo: *Harina 0000 x 25 kg*.
- **Deposito**: dónde la guardás. Por ejemplo: *Depósito Central*.
- **Cant Inicial**: cuánto hay hoy, contado en la unidad de stock. Por ejemplo: *50* kilos.
- **Stock Minimo**: el número que no querés perforar. Por ejemplo: *10*.
- **Fecha**: desde cuándo la controlás. Ya viene con la fecha y hora de hoy.

3. Tocá el botón verde **Guardar**.
4. La mercadería aparece en la lista.

> 💡 **Consejo útil:** antes de stockear, buscala en esta pantalla (Paso 2). Si ya está, no la cargues de nuevo: quedaría repetida.

---

## 🧰 Paso 4: Conocé los botones de cada renglón

<div id="paso-4-conoce-los-botones-de-cada-renglon"></div>

![Botones de un renglón: Reinicializar en azul y Acciones con una flechita](images/manual/60-stock/62-06-botones-del-renglon.png)

A la derecha de cada renglón hay dos botones:

- **Reinicializar**: cargá lo que contaste en el depósito (Paso 7).
- **Acciones**: abre una lista con más opciones.

![Lista Acciones abierta con Agregar Precio Unitario, Editar nivel minimo de Stock, Ver, Editar, Agregar Movimiento y Cerrar](images/manual/60-stock/62-07-menu-acciones.png)

Al tocar **Acciones** se abre esta lista:

- **Agregar Precio Unitario**: cargá el costo de la mercadería.
- **Editar nivel minimo de Stock**: cambiá el mínimo (Paso 6).
- **Ver**: mirá el stock y todo lo que entró y salió (Paso 5).
- **Editar**: corregí el depósito, la cantidad inicial o el mínimo.
- **Agregar Movimiento**: sumá o restá una cantidad a mano (Paso 5).
- **Cerrar**: deja de controlar el stock de esa mercadería.

> ⚠️ **Atención:** **Cerrar** saca la mercadería de esta lista. El sistema te pregunta si estás seguro. Usalo solo si ya no querés controlarla.

---

## 👁️ Paso 5: Mirá lo que entró y salió, y sumá o restá a mano

<div id="paso-5-mira-lo-que-entro-y-salio"></div>

1. Tocá **Acciones** y después **Ver**.

![Ventanita Ver de Harina 0000 x 25 kg: Stock Actual 68 kilos, Stock Inicial 50, Ubicación Depósito Central y el Historial de Movimientos](images/manual/60-stock/62-08-ventana-ver.png)

2. Se abre una ventanita con:
   - **Stock Actual**: lo que hay ahora. Por ejemplo: *68 Kilos*.
   - **Stock Inicial**: lo que había cuando empezaste a controlarla.
   - **Ubicación**: el depósito.
   - **Historial de Movimientos**: cada entrada (en verde, con **+**) y cada salida (en rojo, con **−**).

Si llegó mercadería sin factura o se rompió algo, cargalo a mano:

3. Tocá **Acciones** y después **Agregar Movimiento**.

![Ventanita Agregar Movimiento de Stock para Harina 0000 x 25 kg con 20, ALTA marcado, la descripción y el botón Guardar](images/manual/60-stock/62-09-ventana-agregar-movimiento.png)

- **Cant**: cuánto entra o sale, en la unidad de stock. Por ejemplo: *20* kilos.
- **ALTA**: marcalo si la mercadería **entra**.
- **BAJA**: marcalo si la mercadería **sale**. Por ejemplo: una bolsa rota.
- **Descripción**: contá qué pasó. Por ejemplo: *Llegaron 20 kilos sin factura*.

4. Tocá **Guardar**. El stock se actualiza al instante.

> 💡 **Consejo útil:** las compras recibidas y las ventas mueven el stock solas. Usá **Agregar Movimiento** solo para lo que no pasa por el sistema. Mirá [Movimientos de Stock](/user-guide/movimientos-de-stock).

---

## 🔔 Paso 6: Cambiá el nivel mínimo

<div id="paso-6-cambia-el-nivel-minimo"></div>

1. Tocá **Acciones** y después **Editar nivel minimo de Stock**.

![Ventanita Editar nivel minimo de Stock para Harina 0000 x 25 kg, con el casillero Stock Minimo en 10 y el botón Guardar](images/manual/60-stock/62-10-ventana-nivel-minimo.png)

2. En **Stock Minimo**, escribí el nuevo número. Por ejemplo: *10*.
3. Tocá **Guardar**.

---

## 🔢 Paso 7: Cargá lo que contaste en el depósito

<div id="paso-7-carga-lo-que-contaste-en-el-deposito"></div>

Hacelo cuando contás la mercadería a mano y el número no coincide con el sistema.

1. Tocá el botón azul **Reinicializar** del renglón.

![Ventanita Reinicializar de Harina 0000 x 25 kg con 63 escrito, el aviso rojo Faltante 5 Kilos, la observación y el botón Guardar](images/manual/60-stock/62-11-ventana-reinicializar.png)

2. Arriba ves la **Cantidad Inicial** y el **Movimiento Saldo** (lo que entró menos lo que salió).
3. En **Cantidad Actual en Stock**, escribí lo que contaste. Por ejemplo: *63*.
4. Mirá el aviso de abajo:
   - **Stock perfecto!** en verde: coincide con el sistema.
   - **Faltante** en rojo: contaste menos de lo que dice el sistema. Por ejemplo: *Faltante: 5 Kilos*.
   - **Sobrante** en amarillo: contaste más.
5. En **Observación**, escribí algo que te ayude a recordarlo. Por ejemplo: *Conteo del lunes*.
6. Tocá **Guardar**.

> ⚠️ **Atención:** al guardar, el stock pasa a ser el número que contaste. El anterior queda en **Stock Cerrados** y no se puede deshacer.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **La mercadería no aparece en la lista para stockear** | No está cargada en Compras. | Cargala en [Mercaderías](/user-guide/mercaderias) y volvé a tocar **Stockear Mercaderia**. |
| **La mercadería aparece dos veces** | Se stockeó dos veces. | Mirá cuál tiene los movimientos con **Ver** y cerrá la otra con **Acciones** → **Cerrar**. |
| **La cantidad en stock está en negativo** | Se vendió o se usó antes de cargar la compra. | Recibí la compra en [Órdenes de Compra](/user-guide/todas-las-ordenes-compra) o contá y usá **Reinicializar**. |
| **El stock sube 25 veces más de lo que compré** | La equivalencia entre la unidad de compra y la de stock está mal. | Revisá **Comprás por**, **Contás por** y **Equivalencia** en [Mercaderías](/user-guide/mercaderias). |
| **La lista está vacía** | Todavía no controlás ninguna mercadería, o la búsqueda es muy estricta. | Borrá lo escrito en el buscador y tocá **Buscar**. Si sigue vacía, usá **Stockear Mercaderia**. |
