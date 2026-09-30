# Cómo configurar los Permisos por Rol

<div id="permisos-por-rol"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → debajo del título **Acceso y Seguridad** → **Permisos por Rol**
> **¿Quién lo usa?:** El dueño del comercio.

> 🎯 **¿Para qué sirve esto?**
> Elegís un rol, por ejemplo Cajero o Mozo, y marcás qué puede hacer en el sistema. Así controlás quién anula, quién cobra y quién ve los reportes.

> ⚠️ **Atención:** esta pantalla cambia el acceso de todas las personas con ese rol. Los cambios recién valen cuando tocás **Guardar**.

---

## 📍 **Paso 1: Entrá a la pantalla**

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Configuración marcado en rojo](images/manual/110-configuracion/127-00a-menu-grupo-configuracion.png)

1. En el menú de la izquierda, tocá **Configuración**.

![Opción Permisos por Rol marcada en rojo debajo del título Acceso y Seguridad](images/manual/110-configuracion/127-00b-menu-opcion-permisos-por-rol.png)

2. Debajo del título **Acceso y Seguridad**, tocá **Permisos por Rol**.

![Pantalla Permisos por Rol sin ningún rol elegido](images/manual/110-configuracion/127-01-pantalla-permisos-por-rol.png)

Arriba ves la lista para elegir el rol y los botones **Guardar**, **Defaults**, **Clonar** y el tacho. Están apagados hasta que elegís un rol.

---

## ❓ **Paso 2: Conocé qué puede hacer cada rol**

<div id="paso-2-conoce-que-puede-hacer-cada-rol"></div>

Tocá la barra gris **¿Qué puede hacer cada rol?** para desplegarla.

![Ayuda desplegada con la explicación de los roles Dueño, Encargado y Cajero / Mozo / otros](images/manual/110-configuracion/127-02-ayuda-que-puede-hacer-cada-rol.png)

- **Dueño**: acceso total. Es el único que puede asignar el rol Dueño.
- **Encargado**: gestiona el día a día y el equipo, pero no crea dueños.
- **Cajero / Mozo / otros**: acceso acotado a su función.

---

## 👥 **Paso 3: Elegí el rol**

<div id="paso-3-elegi-el-rol"></div>

1. Tocá el desplegable que dice **Seleccione un rol...**.
2. Elegí el rol que querés revisar. Por ejemplo: *dueño*.
3. Aparecen los permisos de ese rol.

![Pantalla con el rol dueño elegido, la barra de botones activa y los permisos de Ventas](images/manual/110-configuracion/127-05-pantalla-permisos-del-rol.png)

Qué ves en la pantalla:

- **Permisos — dueño** y, a la derecha, cuántas **acciones activas** tiene el rol.
- Las pestañas **Todos**, **Ventas**, **Finanzas**, **Operaciones**, **Personal**, **Reportes**, **Sistema**, **Organizacion** y **Crm**. Tocá una para ver solo ese grupo.
- Por cada grupo, los botones **Todo** (activa todos sus permisos) y **Ninguno** (los apaga).
- Cada tarjeta es una función, como **Salón** o **Cajero**. El interruptor verde la enciende o la apaga.
- El número verde, como **23/23**, dice cuántas acciones de esa función están activas.

Estos son los botones de la barra de arriba:

- **Guardar**: guarda los cambios de este rol.
- **Defaults**: carga los permisos que trae el sistema para ese rol. Pide confirmar y recién se guarda con **Guardar**.
- **Clonar**: copia los permisos de otro rol. Se explica en el Paso 5.
- **Tacho rojo**: destilda todos los permisos del rol. Pide confirmar y recién se guarda con **Guardar**.

---

## 🔎 **Paso 4: Mirá las acciones de una función**

<div id="paso-4-mira-las-acciones-de-una-funcion"></div>

1. En la tarjeta de una función, tocá la flecha redonda de la derecha.
2. Se despliegan todas las acciones posibles.

![Tarjeta Salón abierta con sus acciones, como read, crear_mesa, editar_mesa y anular_mesa](images/manual/110-configuracion/127-06-tarjeta-de-permiso-abierta.png)

- Cada botoncito es una acción. Verde y con tilde: el rol la puede hacer.
- Tocá una acción para tildarla o destildarla. Por ejemplo, destildá **anular_mesa** para que el rol no anule mesas.
- Las acciones con el muñeco violeta, como **own_...**, alcanzan solo a lo propio de cada persona.

> 💡 **Consejo útil:** para dar o quitar todo de una función, usá su interruptor. Para ajustes finos, abrí la tarjeta.

Después de cambiar algo, tocá **Guardar**. El cambio vale para todos los usuarios de ese rol. Quien ya está conectado debe cerrar sesión y volver a entrar.

---

## 📋 **Paso 5: Copiá los permisos de otro rol**

<div id="paso-5-copia-los-permisos-de-otro-rol"></div>

1. Elegí el rol que querés cambiar.
2. Tocá **Clonar**.
3. Se abre esta ventanita.

![Ventanita Clonar Permisos con el desplegable Copiar permisos desde y los botones Cancelar y Clonar](images/manual/110-configuracion/127-07-ventanita-clonar-permisos.png)

- **Copiar permisos desde**: elegí el rol que te sirve de modelo.
- **Cancelar**: cierra sin hacer nada.
- **Clonar** (naranja): copia los permisos.

> ⚠️ **Atención:** **Clonar** reemplaza todos los permisos del rol elegido con los del rol modelo. Se aplica al instante, sin tocar **Guardar**.

---

## 🔄 **Paso 6: Volvé a los valores originales de todos los roles**

<div id="paso-6-vuelve-a-los-valores-originales"></div>

![Pantalla con el botón naranja Restablecer permisos por defecto marcado en rojo](images/manual/110-configuracion/127-03-donde-esta-boton-restablecer-permisos.png)

El botón naranja **Restablecer permisos por defecto** está arriba, debajo de la ayuda de roles.

> ⚠️ **Atención:** este botón revierte los permisos de **todos** los roles a los valores del sistema. No se puede deshacer. Usalo solo si queda todo mal configurado.

Al tocarlo, te pide confirmar antes de cambiar nada.

---

## ⚠️ **Resolución de Inconvenientes**

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| Los botones **Guardar**, **Defaults**, **Clonar** y el tacho están apagados. | Todavía no elegiste un rol. | Elegí un rol en el desplegable. |
| Cambié un permiso y una persona lo sigue viendo. | Tiene la sesión abierta con los permisos viejos. | Pedile que cierre sesión y vuelva a entrar. |
| Destildé algo y al volver a entrar está como antes. | No tocaste **Guardar**. | Volvé a hacer el cambio y tocá **Guardar**. |
| Nadie puede abrir una pantalla. | Se apagó esa función para un rol clave. | Elegí el rol, encendé la función y tocá **Guardar**. También podés usar **Defaults**. |
| Un rol quedó con permisos de otro. | Se usó **Clonar** por error. | Elegí el rol y tocá **Defaults**, revisá y **Guardar**. |
| No veo esta pantalla en el menú. | Tu rol no tiene acceso a la configuración. | Pedile al dueño que la abra o que te dé el permiso. |
