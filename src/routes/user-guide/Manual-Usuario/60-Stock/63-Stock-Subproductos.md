# Stock de Subproductos

<div id="stock-de-subproductos"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Stock** → **Inventario** → **Stock Subproductos**
> **¿Quién lo usa?:** Cocina y encargados de producción

> 🎯 **¿Para qué sirve esto?**
> Acá ves cuánto te queda de lo que preparás en tu cocina. Por ejemplo: cuántas *Medialunas* o *Empanadas de carne* hay listas.
> También cargás qué preparaciones querés controlar y el mínimo que no querés perforar.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso de **Stock** en [Permisos por Rol](/user-guide/permisos-por-rol).
- El producto tiene que estar cargado. Mirá [Maestro de Productos](/user-guide/maestro-de-productos) y [Subproductos Elaborados](/user-guide/subproductos-elaborados).
- Lo que le comprás a un proveedor (harina, levadura) va en [Stock de Mercaderías](/user-guide/stock-mercaderias).

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Stock marcado en rojo](images/manual/60-stock/63-00a-menu-grupo-stock.png)

1. En el menú de la izquierda, tocá **Stock**.

![Opción Stock Subproductos marcada en rojo, debajo de Stock Mercaderías](images/manual/60-stock/63-00b-menu-opcion-stock-subproductos.png)

2. Tocá **Stock Subproductos**. Está debajo del título **INVENTARIO**.

![Pantalla Stock de Subproductos con el buscador y la lista: Empanadas de carne en rojo y Medialuna](images/manual/60-stock/63-01-pantalla-stock-subproductos.png)

Así se ve la pantalla. Cada renglón es una preparación que tiene el stock controlado. Las columnas dicen:

- **Depósito**: dónde está guardada. Por ejemplo: *Depósito Central*.
- **Subproducto**: el nombre. Tocalo para ver la ficha del producto.
- **Costo Elaboración**: cuánto te cuesta prepararla, según su receta.
- **U/M de Stock**: cómo la contás. Por ejemplo: *Unidad*.
- **fecha inicio** y **cantidad inicial**: cuándo empezaste a controlarla y cuánto había ese día.
- **cant en stock**: cuánto hay ahora. Es la cantidad inicial más lo que entró, menos lo que salió.
- **Nivel minimo de stock**: por debajo de ese número te conviene preparar más.
- **acciones**: los botones de cada renglón (Paso 4).

Los colores del renglón te avisan:

- **Rojo**: no hay nada, o hay menos que el mínimo. Por ejemplo: *Empanadas de carne* en *0*.
- **Amarillo**: hay justo el mínimo.
- **Blanco**: hay más que el mínimo.

> 💡 **Consejo útil:** cuando vendés un producto que tiene el stock controlado, el sistema lo descuenta solo.

---

## 🔎 Paso 2: Buscá una preparación

<div id="paso-2-busca-una-preparacion"></div>

![Recuadro de búsqueda con Medialuna escrito, los depósitos y el botón azul Buscar](images/manual/60-stock/63-04-panel-busqueda.png)

En el recuadro de búsqueda tenés:

- **Buscar por Nombre**: escribí parte del nombre. Por ejemplo: *Medialuna*.
- **Seleccione Depósito**: mostrá solo lo que está en un depósito.
- **Buscar**: el botón azul de abajo, que aplica la búsqueda.

1. Completá lo que necesites y tocá **Buscar**.
2. La lista muestra solo las que coinciden.

---

## ➕ Paso 3: Empezá a controlar el stock de una preparación

<div id="paso-3-empeza-a-controlar-el-stock-de-una-preparacion"></div>

![Pantalla Stock de Subproductos con el botón verde Stockear Subproducto marcado en rojo arriba a la derecha](images/manual/60-stock/63-02-donde-esta-boton-stockear-subproducto.png)

1. Tocá el botón verde **Stockear Subproducto**, arriba a la derecha.
2. Se abre una ventanita con los datos para completar.

![Ventanita Formulario Stokear Producto completa con Café, Depósito Central, 10, 5, la fecha y el botón Guardar](images/manual/60-stock/63-03-formulario-stockear.png)

- **Producto**: escribí parte del nombre y tocalo en la lista. Por ejemplo: *Café*.
- **Deposito**: dónde lo guardás. Por ejemplo: *Depósito Central*.
- **Cant Inicial**: cuánto hay hoy. Por ejemplo: *10*.
- **Stock Minimo**: el número que no querés perforar. Por ejemplo: *5*.
- **Fecha**: desde cuándo lo controlás. Ya viene con la fecha y hora de hoy.

3. Tocá el botón verde **Guardar**.
4. La preparación aparece en la lista.

> 💡 **Consejo útil:** en la lista de **Producto** no aparecen los que ya tienen el stock controlado ni lo que le comprás a un proveedor.

---

## 🧰 Paso 4: Conocé los botones de cada renglón

<div id="paso-4-conoce-los-botones-de-cada-renglon"></div>

![Botones de un renglón: Agregar Precio Unitario, Editar nivel minimo de Stock, reinicializar, Agregar Movimiento y eliminar en rojo](images/manual/60-stock/63-05-botones-del-renglon.png)

A la derecha de cada renglón hay cinco botones:

- **Agregar Precio Unitario**: cargá el costo del producto.
- **Editar nivel minimo de Stock**: cambiá el mínimo. Escribí el número nuevo y tocá **Guardar**.
- **reinicializar**: cargá lo que contaste (Paso 5).
- **Agregar Movimiento**: sumá o restá una cantidad a mano. Por ejemplo: *se quemaron 3 medialunas*. Marcá **ALTA** si entra o **BAJA** si sale, escribí qué pasó y tocá **Guardar**.
- **eliminar**: el botón rojo. Deja de controlar el stock de esa preparación.

> ⚠️ **Atención:** **eliminar** saca la preparación de esta lista. El sistema te pregunta si estás seguro. Usalo solo si ya no querés controlarla.

Estos botones funcionan igual que en [Stock de Mercaderías](/user-guide/stock-mercaderias).

---

## 🔢 Paso 5: Cargá lo que contaste

<div id="paso-5-carga-lo-que-contaste"></div>

Hacelo cuando contás las preparaciones a mano y el número no coincide con el sistema.

1. Tocá el botón **reinicializar** del renglón.

![Ventanita reinicializar de Medialuna con 23 escrito, el aviso amarillo Sobrante 2 Unidades, la observación y el botón Guardar](images/manual/60-stock/63-06-ventana-reinicializar.png)

2. Arriba ves la **Cantidad Inicial** y el **Movimiento Saldo** (lo que entró menos lo que salió).
3. En **Cantidad Actual en Stock**, escribí lo que contaste. Por ejemplo: *23*.
4. Mirá el aviso de abajo:
   - **Stock perfecto!** en verde: coincide con el sistema.
   - **Faltante** en rojo: contaste menos de lo que dice el sistema.
   - **Sobrante** en amarillo: contaste más. Por ejemplo: *Sobrante: 2 Unidades*.
5. En **Observación**, escribí algo que te ayude a recordarlo. Por ejemplo: *Conteo de la mañana*.
6. Tocá **Guardar**.

> ⚠️ **Atención:** al guardar, el stock pasa a ser el número que contaste. No se puede deshacer.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **El producto no aparece en la lista para stockear** | Ya tiene el stock controlado, o es algo que le comprás a un proveedor. | Buscalo en esta pantalla. Si lo comprás, usá [Stock de Mercaderías](/user-guide/stock-mercaderias). |
| **No coincide lo que hay en la heladera con el sistema** | Se preparó una tanda o se tiró algo sin cargarlo. | Usá **Agregar Movimiento** para lo que falta, o contá y usá **reinicializar**. |
| **El renglón está en rojo** | No hay nada, o hay menos que el mínimo. | Prepará más, o bajá el mínimo con **Editar nivel minimo de Stock**. |
| **Al lado del nombre sale "()" sin unidad** | El producto no tiene cargada su unidad de stock. | Cargala en la ficha del producto, en [Maestro de Productos](/user-guide/maestro-de-productos). |
