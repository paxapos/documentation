const e=`# Roles del Sistema

<div id="roles-del-sistema"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Acceso/Seguridad** → **Roles**  
> **¿Quién lo usa?:** Administradores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite administrar los perfiles o grupos de acceso del sistema (ejemplo: *Cajero, Mozo, Jefe de Cocina, Encargado, Contador, Administrador*):

1. **Definición de roles:** Creación de perfiles para luego asignarles permisos específicos por pantalla.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Administración de Roles de Sistema** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Nuevo Rol** | Esquina superior | Registra un nuevo perfil de usuario. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Crear un nuevo rol

<div id="paso-1-crear-un-nuevo-rol"></div>

1. Tocá **Nuevo Rol**.
2. Escribí el nombre (ejemplo: *Auditor Externo*).
3. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| No podés eliminar un rol. | Hay usuarios asociados a ese rol. | Reasigná los usuarios a otro rol antes de eliminarlo. |
`;export{e as default};
