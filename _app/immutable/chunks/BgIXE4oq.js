const e=`# Recetas y Escandallos

<div id="recetas-y-escandallos"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Productos** → **Gestión Avanzada** → **Recetas**  
> **¿Quién lo usa?:** Chefs, Administradores y Encargados de Costos  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

El módulo de **Recetas** (escandallo) permite relacionar cada plato del menú con sus insumos o mercaderías constituyentes:

1. **Descuento automático por receta:** Al vender un plato (ejemplo: *Hamburguesa Completa*), el sistema descuenta automáticamente la hamburguesa, el pan y la feta de queso del inventario de insumos.
2. **Costo de plato (Costeo):** Muestra el margen de ganancia real calculando la diferencia entre el costo de la receta y el precio de venta.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener cargados previamente los insumos en Compras/Mercaderías.
- Tener el permiso de **Escandallo y Edición de Recetas** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Asignar Ingrediente** | Dentro de la ficha de receta | Agrega una mercadería indicando la cantidad exacta que lleva el plato. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Armar la receta de un plato

<div id="paso-1-armar-la-receta-de-un-plato"></div>

1. Seleccioná el producto en el listado de recetas.
2. Tocá **Asignar Ingrediente**.
3. Elegí el insumo (ejemplo: *Queso Mozzarella*).
4. Indicá la cantidad por porción (ejemplo: *0.200 Kg*).
5. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| La receta descuenta más stock de lo debido. | La unidad de medida o cantidad cargada en la receta es incorrecta. | Verificá si la cantidad está expresada en gramos, kilos o gramos unitarios. |
`;export{e as default};
