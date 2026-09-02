const e=`# Perfiles de Impresión

<div id="perfiles-de-impresion"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Impresoras** → **Perfiles de Impresión**  
> **¿Quién lo usa?:** Administradores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite agrupar impresoras por comportamiento (ejemplo: *Perfil Cocina -> Imprime comanda sin precios; Perfil Caja -> Imprime pré-ticket y factura con precios*):

1. **Agrupación de comportamiento de salida:** Define el estilo visual y copias para cada tipo de documento.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Gestión de Perfiles de Impresión** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Nuevo Perfil** | Esquina superior | Crea un grupo de reglas de impresión. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Crear perfil de comanda

<div id="paso-1-crear-perfil-de-comanda"></div>

1. Tocá **Nuevo Perfil**.
2. Escribí el nombre y desmarcá la opción "Mostrar precios".
3. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| La comanda sale con los precios al cliente. | Se usó el perfil de caja en lugar del perfil de cocina. | Asigná el perfil de cocina al sector correspondiente. |
`;export{e as default};
