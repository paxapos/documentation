const a=`# Sectores de Comanda

<div id="sectores-de-comanda"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Comandero** → **General** → **Sectores de Comanda**  
> **¿Quién lo usa?:** Encargados de Operación y Administradores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite administrar los sectores geográficos de preparación de alimentos dentro del local (ejemplo: *Cocina Caliente, Cocina Fría, Parrilla, Barra de Tragos, Postres*):

1. **Ruteo de comandas:** Define hacia qué sector se enviará a imprimir o mostrar digitalmente cada producto del menú.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Configuración de Sectores de Comanda** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Nuevo Sector** | Esquina superior | Registra un nuevo sector de preparación. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Crear un sector de comanda

<div id="paso-1-crear-un-sector-de-comanda"></div>

1. Tocá el botón **Nuevo Sector**.
2. Escribí el nombre (ejemplo: *Parrilla Exterior*).
3. Asigná la impresora o pantalla KDS asociada.
4. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Las bebidas salen impresas en la cocina. | Los productos no están vinculados al sector *Barra*. | Editá la categoría o producto en el Maestro de Productos y asigná el sector correcto. |
`;export{a as default};
