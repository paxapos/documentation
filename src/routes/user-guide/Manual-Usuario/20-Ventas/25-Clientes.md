# Cómo Gestionar los Clientes

<div id="gestion-de-clientes"></div>

> 🎯 **¿Para qué sirve esto?**
> Desde la sección de Clientes podés crear, buscar, editar y eliminar la base de datos de clientes de tu comercio. Tener los clientes cargados te permite asociarlos a mesas, emitir facturas con sus datos fiscales, aplicar descuentos personalizados y enviar notificaciones.

---

## 📍 **Paso 1: Accedé al listado de Clientes**

<div id="paso-1-accede-al-listado-de-clientes"></div>

1. Desde el menú principal, tocá **Clientes** → **Clientes**.
2. Se abrirá el listado con todos los clientes cargados.

![Listado de clientes con formulario de búsqueda, tabla de resultados y botón Crear Nuevo Cliente](images/manual/20-ventas/10-clientes-listado.png)

En esta pantalla vas a encontrar:
- El botón verde **"Crear Nuevo Cliente"** arriba a la derecha.
- Un formulario de búsqueda con filtros por **Código**, **Nombre**, **Mail**, **Nº Documento**, **Teléfono**, **Domicilio**, **Tipo de Documento**, **Responsabilidad IVA**, **Descuento** y **Tag**.
- La tabla con las columnas: Codigo, Nombre, Mail, Tipo Documento, Nrodocumento, Telefono, Iva Responsabilidad, Descuento, Domicilio y las acciones (Ver, Editar, Borrar).

---

## ➕ **Paso 2: Creá un nuevo cliente**

<div id="paso-2-crea-un-nuevo-cliente"></div>

1. Tocá el botón verde **"Crear Nuevo Cliente"**.
2. Completá los campos del formulario, agrupados en tres secciones:

![Formulario de alta de nuevo cliente con las secciones Datos personales, Contacto y Comercial](images/manual/20-ventas/11-clientes-nuevo-formulario.png)

   - **Datos personales:** Nombre, Responsabilidad IVA (por defecto "Consumidor Final"), Tipo de Documento y Número de Documento.
   - **Contacto:** Correo Electrónico, Teléfono y Domicilio de facturación.
   - **Comercial:** Descuento asignado y Código interno del cliente.

3. Tocá **"Guardar"** para crear el cliente.

> 💡 **Consejo útil:** Si cargás al menos el **teléfono**, **mail** o **DNI**, el sistema podrá evitar que se creen clientes duplicados en futuras reservas o pedidos.

---

## 🔍 **Paso 3: Buscá un cliente existente**

<div id="paso-3-busca-un-cliente-existente"></div>

1. Usá los campos de búsqueda en la parte superior del listado.
2. Podés filtrar por cualquier combinación de campos: nombre, teléfono, mail, documento, etc.
3. Tocá **"Buscar"** para aplicar los filtros.
4. Tocá **"Limpiar"** para reiniciar la búsqueda.
5. También podés filtrar por **Tag** si tenés etiquetas asignadas a los clientes.

---

## ✏️ **Paso 4: Editá o eliminá un cliente**

<div id="paso-4-edita-o-elimina-un-cliente"></div>

En la columna de acciones de cada fila:

![Botones de acción Ver, Editar y Borrar de un cliente](images/manual/20-ventas/39-clientes-botones-accion.png)

- Tocá el ícono del **ojo** 👁️ para ver el detalle completo del cliente.
- Tocá el ícono del **lápiz** ✏️ para editar sus datos.
- Tocá el ícono de la **papelera** 🗑️ para eliminarlo (el sistema pedirá confirmación antes).

> ⚠️ **Atención:** Eliminar un cliente es irreversible. Si el cliente tiene historial de pedidos o facturas, considerá desactivarlo en lugar de borrarlo.

---

## ⚠️ **Resolución de Inconvenientes**

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **No encuentro al cliente en la lista** | El cliente no fue dado de alta o se aplicó un filtro de búsqueda. | Tocá **"Limpiar"** para resetear los filtros y buscá por teléfono o documento. |
| **Se crearon clientes duplicados** | Se cargó el mismo cliente sin teléfono ni DNI, y el sistema no pudo detectar la duplicación. | Editá o borrá el duplicado y completá los datos de contacto del cliente principal. |
| **No puedo asignar un descuento al cliente** | No hay descuentos creados en el sistema. | Creá primero un descuento desde **Clientes → Descuentos** (ver artículo 26). |
| **No me deja borrar un cliente** | Tu usuario no tiene permisos de eliminación. | Pedile al administrador que revise los permisos de tu rol en **Configuración → Roles y Permisos**. |
