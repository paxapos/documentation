const e=`# Movimientos de Stock

<div id="movimientos-de-stock"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Stock** → **Movimientos** → **Movimientos**  
> **¿Quién lo usa?:** Depósito, Encargados de Salón y Cocina  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite registrar traspasos de mercadería entre depósitos (ejemplo: *del Depósito Central a la Barra*) o realizar ajustes de inventario manuales:

1. **Traspasos internos:** Transferencia de productos e insumos entre diferentes depósitos o sectores del local.
2. **Ajustes manuales:** Correcciones por inventario físico o roturas.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Poseer el permiso de **Registro de Traspasos y Ajustes de Stock** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Campos: ¿Qué es cada cosa?

<div id="botones-y-campos-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo / completarlo? |
|---|---|---|
| 🔄 **Nuevo Movimiento** | Esquina superior | Abre el panel para registrar un movimiento de mercadería. |
| ➡️ **Depósito Origen / Destino** | Formulario de movimiento | Selecciona los depósitos entre los cuales se transfiere la mercadería. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Hacer un traspaso de depósito a barra

<div id="paso-1-hacer-un-traspaso-de-deposito-a-barra"></div>

1. Tocá **Nuevo Movimiento**.
2. Seleccioná **Depósito Origen** (*Depósito General*) y **Depósito Destino** (*Barra*).
3. Agregá los productos y cantidades enviadas (ejemplo: *12 Botellas de Vino*).
4. Tocá **Confirmar Movimiento**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El depósito origen no tiene suficiente stock. | El saldo no fue ingresado previamente al depósito origen. | Verificá que el insumo esté cargado en el depósito de origen antes de traspasarlo. |
`;export{e as default};
