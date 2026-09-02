const e=`# Maestro de Productos

<div id="maestro-de-productos"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Productos** → **Gestión Avanzada** → **Maestro de Productos**  
> **¿Quién lo usa?:** Administradores y Encargados de Compras / Costos  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

El **Maestro de Productos** es la base de datos centralizada de todos los artículos, insumos y platos del establecimiento:

1. **Ficha técnica completa:** Nombre, código de barras, categoría, costo, precio de venta, alícuota de IVA e impresoras de destino.
2. **Definición de comportamiento:** Indica si el producto descuenta stock, si se vende por peso/unidad o si es un insumo de cocina.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener otorgado el permiso de **Administración de Maestro de Productos** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Nuevo Producto** | Esquina superior derecha | Abre el formulario para dar de alta un producto en el sistema. |
| 🔍 **Buscar** | Barra superior | Permite encontrar productos por código o descripción. |
| 🖨️ **Impresora de Destino** | Ficha del producto | Define en qué sector (Cocina, Barra, Parrilla) se imprime la comanda. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Crear un producto nuevo

<div id="paso-1-crear-un-producto-nuevo"></div>

1. Tocá el botón **Nuevo Producto**.
2. Completa los datos principales:
   - **Nombre:** Nombre descriptivo.
   - **Categoría:** Seleccioná el rubro.
   - **Precio de Venta:** Importe al público con IVA.
   - **Sector de Comanda:** Impresora donde debe salir la orden de preparación.
3. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El producto no descuenta stock al venderse. | La opción "Maneja Stock" no está activada. | Editá el producto y marcá la casilla de control de stock. |
`;export{e as default};
