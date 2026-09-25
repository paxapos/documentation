# Usuarios y Acceso

<div id="usuarios-y-acceso"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Sistema** → **Usuarios y acceso**  
> **¿Quién lo usa?:** Dueños y administradores del comercio

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Es el punto de entrada a todo lo relacionado con **quién puede entrar al sistema y qué puede hacer**: usuarios, roles, permisos, tus propias sesiones activas y un campo de seguridad para el PIN.

No repite el contenido de cada pantalla acá — son accesos directos a los CRUD reales, que ya tienen su propia página en el manual.

![Pantalla de Usuarios y acceso](images/manual/configuracion-general/14-usuarios-acceso.png)

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Usuarios del sistema** configurado en [Permisos por Rol](/user-guide/permisos-por-rol) para ver esta sección.
- Cada link de abajo puede pedir además su propio permiso específico.

---

## 🎨 Accesos y campos: ¿Qué es cada cosa?

<div id="accesos-y-campos-que-es-cada-cosa"></div>

### Usuarios y roles

| Acceso | ¿A dónde lleva? |
|---|---|
| **Usuarios del Sistema** | [Usuarios del Sistema](/user-guide/usuarios-del-sistema) — altas y bajas de usuarios con contraseña. |
| **Usuarios con PIN** | [Usuarios con PIN](/user-guide/usuarios-con-pin) — el acceso rápido con PIN numérico que usa el personal de salón. |
| **Roles** | [Roles](/user-guide/roles) — los perfiles que agrupan permisos. |
| **Permisos por Rol** | [Permisos por Rol](/user-guide/permisos-por-rol) — qué puede hacer cada rol. |

### Mi sesión

| Acceso | ¿A dónde lleva? |
|---|---|
| **Mis Sesiones Activas** | [Mis Sesiones Activas](/user-guide/mis-sesiones-activas) — todo usuario logueado ve las suyas, sin necesitar un permiso especial. |
| **Mi Token JWT API** | [Token JWT API](/user-guide/token-jwt-api) — para integraciones que necesiten autenticarse como vos. |

### Seguridad

| Campo | ¿Qué es? |
|---|---|
| **Autenticar por PIN solo en la misma IP que el printserver** | Si está activo, el login con PIN solo funciona desde la misma red donde corre tu servidor de impresión — una capa extra de seguridad para evitar accesos con PIN desde fuera del local. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Dar de alta un usuario nuevo

<div id="paso-1-dar-de-alta-un-usuario-nuevo"></div>

1. Andá a **Configuración → Usuarios y acceso**.
2. Tocá **Usuarios del Sistema** (o **Usuarios con PIN** si es para el salón).
3. Seguí los pasos de esa pantalla — ver [Usuarios del Sistema](/user-guide/usuarios-del-sistema).

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| No veo Roles ni Permisos por Rol, pero sí Usuarios. | Roles y Permisos tienen su propio permiso (**Roles del sistema**), distinto del permiso de Usuarios. | Pedile a un administrador que te asigne también ese permiso. |
| El PIN dejó de funcionar solo para los dispositivos fuera del local. | Está activo **Autenticar por PIN solo en la misma IP que el printserver** y ese dispositivo no está en la red del local. | Es el comportamiento esperado. Si necesitás loguearte con PIN fuera del local, desactivá esta opción (perdés esa capa extra de seguridad). |
