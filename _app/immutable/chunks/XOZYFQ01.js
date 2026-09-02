const e=`# Pedir Mercadería

<div id="pedir-mercaderia"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Compras** → **Órdenes de Compra** → **Pedir Mercadería**  
> **¿Quién lo usa?:** Jefes de Cocina, Mozos y Personal de Depósito  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite a los sectores internos (ejemplo: *Cocina, Barra, Salón*) realizar notas de pedido de insumos al depósito central del local:

1. **Requerimiento interno de insumos:** Solicitud rápida de reposición de mercaderías para la jornada de trabajo.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Solicitud Interna de Mercadería** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Campos: ¿Qué es cada cosa?

<div id="botones-y-campos-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Agregar al Pedido** | Lista de insumos | Incluye el artículo en la nota de pedido interna. |
| 📤 **Enviar Pedido** | Pie de pantalla | Envía la nota al responsable de compras o depósito. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Enviar una solicitud de reposición

<div id="paso-1-enviar-una-solicitud-de-reposicion"></div>

1. Seleccioná tu **Sector** origen (ejemplo: *Barra*).
2. Elegí los insumos necesarios y la cantidad requerida.
3. Tocá **Enviar Pedido**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El depósito rechaza la solicitud. | Insumo agotado en depósito central. | Verificá el stock general en el módulo de Stock. |
`;export{e as default};
