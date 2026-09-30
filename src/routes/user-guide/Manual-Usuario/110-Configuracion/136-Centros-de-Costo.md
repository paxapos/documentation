# Centros de Costo

<div id="centros-de-costo"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Centros de Costo**. Está debajo del título **Tablas del Sistema**.
> **¿Quién lo usa?:** Dueños, gerentes y contadores

> 🎯 **¿Para qué sirve esto?**
> Un centro de costo es un área o un local de tu negocio. Por ejemplo: *Sucursal Centro*, *Cocina* o *Eventos*.
> Sirve para separar compras, gastos y ventas por área, y para que cada usuario vea solo lo suyo.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso de **Centros de costo** en [Permisos por Rol](/user-guide/permisos-por-rol).
- Si tu negocio es un solo local, probablemente no necesites ninguno.
- Pensá los nombres antes de crearlos. Cada centro nuevo agrega una pestaña en el Tablero General.

---

## 🧭 Para qué se usan los centros de costo en el resto del sistema

<div id="para-que-se-usan-los-centros-de-costo"></div>

- **Tablero General**: cuando hay centros, arriba aparece una pestaña por cada uno. Así ves los números de cada área por separado. Mirá [Tablero General](/user-guide/tablero-general).
- **Cargar una factura**: en [Factura Manual](/user-guide/factura-manual) podés elegir el **PDV / Centro de costo (opcional)** del gasto.
- **Historial de Facturas y deuda**: la pantalla de gastos muestra la deuda de cada centro y deja filtrar por uno. Mirá [Historial de Facturas](/user-guide/historial-de-facturas).
- **Usuarios**: cada centro tiene sus usuarios. Quien está asignado a un centro ve solo las compras y ventas de su área. Los usuarios con el permiso de ver todo siguen viendo todo.

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Configuración marcado en rojo](images/manual/110-configuracion/136-00a-menu-grupo-configuracion.png)

1. En el menú de la izquierda, tocá **Configuración**.

![Opción Centros de Costo marcada en rojo, debajo del título Tablas del Sistema](images/manual/110-configuracion/136-00b-menu-opcion-centros-de-costo.png)

2. Tocá **Centros de Costo**.

![Pantalla Centros de Costo con el botón Nuevo Centro de Costo y la tabla de centros activos](images/manual/110-configuracion/136-01-pantalla-centros-de-costo.png)

Así se ve la pantalla. La tabla **Centros de costo activos** tiene estas columnas:

- **Nombre**: cómo se llama el centro.
- **Descripción**: una nota opcional.
- **Usuarios**: cuántos usuarios tiene asignados.
- **Acciones**: los botones de cada renglón (Paso 4).

---

## ➕ Paso 2: Tocá el botón "Nuevo Centro de Costo"

<div id="paso-2-toca-el-boton-nuevo-centro-de-costo"></div>

![Botón azul Nuevo Centro de Costo marcado en rojo arriba a la izquierda de la tabla](images/manual/110-configuracion/136-02-donde-esta-boton-nuevo-centro-de-costo.png)

1. Buscá el botón azul **Nuevo Centro de Costo**. Está arriba de la tabla, a la izquierda.
2. Tocalo una vez.
3. Se abre la pantalla para cargar los datos.

---

## 📝 Paso 3: Completá los datos

<div id="paso-3-completa-los-datos"></div>

![Recuadro Datos del centro con Nombre Sucursal Prueba, Descripción y los botones Cancelar y Guardar](images/manual/110-configuracion/136-03-formulario-nuevo-centro-de-costo.png)

Usamos el ejemplo *Sucursal Prueba*. Los casilleros son:

- **Nombre**: escribí cómo se llama. Por ejemplo: *Sucursal Prueba*.
- **Descripción**: una nota para que todos entiendan de qué área se trata. Podés dejarla vacía.
- **Cancelar**: vuelve a la lista sin guardar nada.
- **Guardar**: el botón azul de la derecha. Crea el centro.

> ⚠️ **Atención:** cuando guardás, el centro nuevo aparece como pestaña en el Tablero General y en otros reportes. Creá solo los que vas a usar.

---

## 💾 Paso 4: Guardá y asigná usuarios

<div id="paso-4-guarda-y-asigna-usuarios"></div>

1. Tocá **Guardar**. Volvés a la tabla y ves el centro nuevo.

En la columna **Acciones** de cada renglón de la tabla del Paso 1:

- **Usuarios**: abre una lista con casilleros. Tildá quiénes trabajan en ese centro y guardá.
- **Lápiz**: edita el **Nombre** y la **Descripción**.
- **Papelera** (roja): elimina el centro. Antes te pide confirmación.

> ⚠️ **Atención:** al eliminar un centro, sus usuarios y sus compras dejan de estar separados por esa área. Hacelo solo si estás seguro.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| No aparece la pestaña del centro en el Tablero General. | Todavía no guardaste el centro. | Volvé a **Nuevo Centro de Costo** y tocá **Guardar**. |
| No podés elegir un centro al cargar una factura. | No hay centros creados. | Creá al menos uno en esta pantalla. |
| Un usuario no ve las compras de otra área. | Está asignado a un solo centro. | Tocá **Usuarios** en el otro centro y asignalo también. |
| No ves **Centros de Costo** en el menú. | Tu usuario no tiene permiso. | Pedile a un administrador que revise [Permisos por Rol](/user-guide/permisos-por-rol). |
