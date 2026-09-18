# Cómo Configurar Descuentos

<div id="descuentos"></div>

> 🎯 **¿Para qué sirve esto?**
> Desde Descuentos podés crear porcentajes de bonificación predefinidos (ej: "10% Empleados", "Cliente VIP") para aplicarlos rápido sobre una mesa o una venta, sin tener que calcular el importe a mano cada vez.

---

## 📍 **Paso 1: Accedé al listado de Descuentos**

<div id="paso-1-accede-al-listado-de-descuentos"></div>

1. Desde el menú principal, tocá **Ventas** → **Descuentos**.
2. Se abrirá el listado con todos los descuentos ya creados.

![Listado de descuentos con formulario de búsqueda por nombre y tabla de resultados](images/manual/20-ventas/12-descuentos-listado.png)

En esta pantalla vas a encontrar:
- El botón verde **"Crear Descuento"** arriba a la derecha.
- Un campo de búsqueda por **Nombre del Descuento**.
- La tabla con las columnas: Nombre, Descripción, Porcentaje, Creado y las acciones (Editar, Borrar).

> 💡 **Consejo útil:** El porcentaje máximo que un mozo puede aplicar sin autorización se define en **Configuración → Parámetros del Sistema** (umbral de descuento). Por encima de ese valor, se necesita el permiso **"Aplicación y Configuración de Descuentos"**.

---

## ➕ **Paso 2: Creá un nuevo descuento**

<div id="paso-2-crea-un-nuevo-descuento"></div>

1. Tocá el botón verde **"Crear Descuento"**.
2. Completá el formulario:

![Formulario de alta de un nuevo descuento con nombre, descripción y porcentaje](images/manual/20-ventas/13-descuentos-nuevo-formulario.png)

   - **Nombre:** Un título corto para identificarlo (ej: "10%").
   - **Descripción:** Un detalle opcional (ej: "Descuento para empleados").
   - **Porcentaje:** Solo el número, sin el signo `%` (ej: `10`).
3. Tocá **"Agregar"** para guardarlo, o **"Cancelar"** para volver sin guardar.

> ⚠️ **Atención:** El porcentaje se descuenta sobre el total de la cuenta al aplicarlo desde el Salón de Ventas o la Caja Rápida.

---

## ✏️ **Paso 3: Editá o eliminá un descuento**

<div id="paso-3-edita-o-elimina-un-descuento"></div>

En la columna de acciones de cada fila del listado:

![Botones de acción Editar y Borrar de un descuento](images/manual/20-ventas/40-descuentos-botones-accion.png)

- Tocá **"Editar"** para modificar el nombre, la descripción o el porcentaje.
- Tocá **"Borrar"** para eliminarlo. El sistema te pedirá confirmación antes de hacerlo.

---

## ⚠️ **Resolución de Inconvenientes**

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **No veo el botón "Crear Descuento"** | Tu usuario no tiene el permiso de gestión de clientes/descuentos. | Pedile al administrador que revise tus permisos en **Configuración → Roles y Permisos**. |
| **El mozo no puede aplicar el descuento** | El porcentaje supera el umbral máximo permitido para su rol. | Pedile a un encargado con el permiso **"Aplicación y Configuración de Descuentos"** que lo aplique. |
| **El listado solo muestra algunos descuentos** | Tu rol tiene un tope de porcentaje configurado y los descuentos mayores quedan ocultos. | Iniciá sesión con un usuario que tenga el permiso de aplicar descuentos sin tope. |

