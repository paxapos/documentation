# Clasificación de Gastos

<div id="clasificacion-de-gastos"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Clasificación de Gastos**. Está debajo del título **Tablas del Sistema**.
> **¿Quién lo usa?:** Dueños, contadores y administradores

> 🎯 **¿Para qué sirve esto?**
> Es la lista de rubros en los que ordenás lo que gastás. Por ejemplo: *Mano de obra*, *Mercaderías* o *Gastos operativos*.
> Cuando cargás una factura elegís uno de estos rubros. Después los reportes suman cuánto gastaste en cada uno.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso de **Clasificaciones** en [Permisos por Rol](/user-guide/permisos-por-rol).
- La lista es un árbol. Un rubro puede tener sub-rubros. Los sub-rubros se ven con un guion bajo adelante (_) por cada nivel.
- El sistema ya trae una lista armada. Antes de crear un rubro nuevo, fijate si ya existe uno parecido.

---

## 🧭 Para qué se usan las clasificaciones en el resto del sistema

<div id="para-que-se-usan-las-clasificaciones"></div>

- **Cargar una factura**: en [Factura Manual](/user-guide/factura-manual) elegís la **Clasificación (opcional)** del gasto. Si no elegís, queda como *Sin clasificar*.
- **Ver y filtrar gastos**: en [Historial de Facturas](/user-guide/historial-de-facturas) y en los reportes de gastos, el total se reparte por clasificación.
- **Tablero General**: el gráfico de gastos y la *Contribución Marginal* usan la clasificación. Mirá [Tablero General](/user-guide/tablero-general).
- **Mercadería**: las facturas clasificadas como *MERCADERIAS* tratan sus renglones como mercadería.

> 💡 **Consejo útil:** cuanto mejor clasificás las facturas, más claros salen los reportes.

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Configuración marcado en rojo](images/manual/110-configuracion/134-00a-menu-grupo-configuracion.png)

1. En el menú de la izquierda, tocá **Configuración**.

![Opción Clasificación de Gastos marcada en rojo, debajo del título Tablas del Sistema](images/manual/110-configuracion/134-00b-menu-opcion-clasificacion-de-gastos.png)

2. Tocá **Clasificación de Gastos**.

![Pantalla Listado de Clasificaciones con los botones Nueva Clasificación y Reordenar y los primeros renglones](images/manual/110-configuracion/134-01-pantalla-clasificaciones.png)

Así se ve el **Listado de Clasificaciones**. Cada renglón es un rubro.

- Algunos rubros tienen una etiqueta celeste: **Variable** o **Fijo**. Es el tipo de costo (Paso 3).
- A la derecha de cada renglón hay un botón **Editar** y una flechita (Paso 4).
- Arriba a la derecha están **Nueva Clasificación** y **Reordenar**.

---

## ➕ Paso 2: Tocá el botón "Nueva Clasificación"

<div id="paso-2-toca-el-boton-nueva-clasificacion"></div>

![Botón verde Nueva Clasificación marcado en rojo arriba a la derecha](images/manual/110-configuracion/134-02-donde-esta-boton-nueva-clasificacion.png)

1. Buscá el botón verde **Nueva Clasificación**. Está arriba a la derecha.
2. Tocalo una vez.
3. Se abre la pantalla con los datos del rubro nuevo.

> ⚠️ **Atención:** al lado está **Reordenar**. No lo toques para probar. Ordena todo el árbol por nombre en el momento, sin preguntar.

---

## 📝 Paso 3: Completá los datos

<div id="paso-3-completa-los-datos"></div>

![Datos de la nueva clasificación: Clasificación padre GASTOS OPERATIVOS, Nombre Limpieza Prueba y Tipo de costo No aplica](images/manual/110-configuracion/134-03-formulario-nueva-clasificacion.png)

Usamos el ejemplo *Limpieza Prueba*. Los casilleros son:

- **Clasificación padre**: elegí de qué rubro cuelga. Por ejemplo: *GASTOS OPERATIVOS*. Dejalo en *Seleccionar* si es un rubro principal.
- **Nombre**: escribí el nombre. Por ejemplo: *Limpieza Prueba*.
- **Tipo de costo**: elegí **Costo fijo** (no cambia con las ventas, como el alquiler) o **Costo variable** (crece con las ventas, como la mercadería). *No aplica* lo deja sin tipo.
- **Guardar**: el botón azul abajo a la derecha. Guarda el rubro y vuelve a la pantalla anterior.

> 💡 **Consejo útil:** el tipo de costo alimenta la *Contribución Marginal* del [Tablero General](/user-guide/tablero-general). Sin tipo, ese dato no se calcula.

---

## 💾 Paso 4: Guardá, editá o borrá

<div id="paso-4-guarda-edita-o-borra"></div>

1. Tocá **Guardar**. Ves un mensaje que dice que la clasificación se guardó.

En cada renglón del listado del Paso 1:

- **Editar**: abre los mismos casilleros del Paso 3. Cambiá lo que necesites y tocá **Guardar**. Dentro de la edición también aparece **- eliminar -**.
- **La flechita** (al lado de Editar): abre un menú con la opción **Borrar**.

> ⚠️ **Atención:** **Borrar** elimina el rubro y te pide confirmación. Las facturas que lo usaban quedan sin ese rubro. No borres rubros que ya usás.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| No encontrás la clasificación al cargar una factura. | Todavía no la creaste. | Creala acá y volvé a cargar la factura. |
| **"Error al guardar la clasificación"** | Dejaste el **Nombre** vacío. | Escribí un nombre y guardá de nuevo. |
| El rubro quedó en un lugar equivocado. | Elegiste otra **Clasificación padre**. | Tocá **Editar** y cambiá el padre. |
| La *Contribución Marginal* no aparece en el Tablero. | Los rubros no tienen **Tipo de costo**. | Editá los rubros y elegí **Costo fijo** o **Costo variable**. |
| No ves **Clasificación de Gastos** en el menú. | Tu usuario no tiene permiso. | Pedile a un administrador que revise [Permisos por Rol](/user-guide/permisos-por-rol). |
