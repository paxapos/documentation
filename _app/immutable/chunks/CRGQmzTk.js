const e=`# Resumen de Stock

<div id="resumen-de-stock"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Stock** → **Inventario** → **Resumen de Stock**  
> **¿Quién lo usa?:** Encargados de Depósito, Chefs y Administradores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Muestra el estado general consolidado del inventario de productos e insumos en todos los depósitos del local:

1. **Visión global de existencias:** Cantidades disponibles, punto de pedido y alertas de faltante.
2. **Alertas de stock crítico:** Destaca en rojo aquellos artículos cuyo stock está por debajo del mínimo establecido.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Poseer el permiso de **Consulta de Resumen de Inventario** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Filtros: ¿Qué es cada cosa?

<div id="botones-y-filtros-que-es-cada-cosa"></div>

| Botón / Filtro | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 🏢 **Filtro Depósito** | Encabezado | Muestra el stock correspondiente a un depósito en particular. |
| ⚠️ **Ver solo Críticos** | Barra superior | Filtra la pantalla mostrando únicamente los artículos que requieren compra urgente. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Controlar insumos faltantes

<div id="paso-1-controlar-insumos-faltantes"></div>

1. Tocá el filtro **Ver solo Críticos**.
2. Revisá la lista de productos destacados para preparar la orden de compra.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El stock físico en cocina no coincide con el del sistema. | Faltó registrar un movimiento, mermas o desperdicios. | Realizá un ajuste de inventario desde el módulo de **Movimientos de Stock**. |
`;export{e as default};
