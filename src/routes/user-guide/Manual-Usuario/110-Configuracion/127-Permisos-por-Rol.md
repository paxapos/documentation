# Permisos por Rol (Matriz de Seguridad)

<div id="permisos-por-rol-matriz-de-seguridad"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Acceso/Seguridad** → **Permisos por Rol**  
> **¿Quién lo usa?:** Administradores del Sistema  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

La pantalla de **Permisos por Rol** es la matriz central de control de seguridad del sistema PaxaPOS:

1. **Control de acceso por módulo:** Permite activar o desactivar casilla por casilla qué módulos y pantallas puede ver o usar cada rol (ejemplo: *impedir que un mozo vea el resumen de caja o que un cajero modifique precios del menú*).
2. **Autorización de acciones críticas:** Define quiénes pueden anular productos, hacer descuentos, cerrar cajas o anular facturas.
3. **Seguridad del local:** Garantiza la confidencialidad de la información financiera ajustando los niveles de visibilidad para cada puesto de trabajo.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener la sesión iniciada con una cuenta que posea perfil **Administrador Principal**.
- Tener creados los roles de usuario en el módulo de [Roles](/user-guide/roles).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo / cambiarlo? |
|---|---|---|
| 👥 **Selector de Rol** | Encabezado superior | Selecciona el perfil al que se le ajustarán los permisos (ejemplo: *Cajero, Mozo, Cocinero*). |
| ☑️ **Casilla de Verificación (Checkbox)** | En la matriz de módulos | Activa (permitido) o desactiva (bloqueado) el acceso a una pantalla específica. |
| 🟩 **Marcar Todo** | Encabezado de columna | Concede acceso completo a todas las pantallas de una categoría. |
| 🟥 **Desmarcar Todo** | Encabezado de columna | Quita todos los accesos del rol seleccionado. |
| 💾 **Guardar Matriz de Permisos** | Botón flotante inferior | Aplica y guarda los cambios de permisos inmediatamente. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Seleccionar el rol a configurar

<div id="paso-1-seleccionar-el-rol-a-configurar"></div>

1. En la parte superior de la pantalla, elegí el **Rol** que querés editar en el listado desplegable (ejemplo: *Mozo*).
2. La matriz mostrará todas las secciones del sistema (Ventas, Compras, Stock, Finanzas, Reportes, Configuración).

### Paso 2: Activar o desactivar permisos específicos

<div id="paso-2-activar-o-desactivar-permisos-especificos"></div>

1. Navegá por los módulos de la matriz.
2. Marcá la casilla ☑️ en los módulos donde querés dar acceso.
3. Desmarcá la casilla ☐ en las funciones restringidas (ejemplo: desmarcar *Anulaciones de Venta* para el mozo).

### Paso 3: Guardar y aplicar los cambios

<div id="paso-3-guardar-y-aplicar-los-cambios"></div>

1. Tocá el botón verde **Guardar Matriz de Permisos** en el pie de la pantalla.
2. Los cambios se aplicarán de inmediato para todos los usuarios pertenecientes a ese rol.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Un usuario sigue viendo un módulo desmarcado. | El usuario tiene la sesión abierta en su dispositivo. | Solicitale al usuario que cierre la sesión y vuelva a ingresar para refrescar sus permisos. |
| Ningún usuario puede ingresar a una pantalla. | Se desmarcó por error la casilla para el rol Administrador. | Ingresá con la cuenta principal y volvé a marcar el permiso en la matriz. |
