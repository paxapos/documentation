const e=`# Descuentos y Promociones

<div id="descuentos-y-promociones"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Ventas** → **Descuentos**  
> **¿Quién lo usa?:** Encargados de Local y Administradores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

El módulo de **Descuentos** permite configurar promociones, bonificaciones y porcentajes de descuento predefinidos:

1. **Descuentos rápidos en caja:** Permite crear botones con porcentajes fijos (ejemplo: 10% Empleados, 15% Efectivo).
2. **Control de autorizaciones:** Define qué descuentos requieren clave o autorización del encargado al aplicarse en una mesa.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Aplicación y Configuración de Descuentos** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Nuevo Descuento** | Esquina superior | Abre el panel para dar de alta una bonificación. |
| 🏷️ **Porcentaje (%)** | En la grilla | Porcentaje que se descontará sobre el total de la cuenta. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Crear un descuento predefinido

<div id="paso-1-crear-un-descuento-predefinido"></div>

1. Tocá el botón **Nuevo Descuento**.
2. Escribí el **Nombre** (ejemplo: *Descuento Cliente VIP*).
3. Ingresá el valor en el campo **Porcentaje** (ejemplo: 15).
4. Tocá **Guardar**. Quedará disponible en la pantalla de cobro.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por me puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El cajero no puede aplicar el descuento. | El descuento requiere clave de supervisor. | Ingresá la clave de encargado o revisá los permisos de rol. |
`;export{e as default};
