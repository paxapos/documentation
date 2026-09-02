const a=`# Producción de Subproductos

<div id="produccion-de-subproductos"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Stock** → **Movimientos** → **Producción Subproductos**  
> **¿Quién lo usa?:** Chefs y Encargados de Cocina  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite declarar lotes de producción elaborados en la cocina (ejemplo: *Cocinados 10 Litros de Tuco*):

1. **Transformación de insumos:** Descuenta automáticamente del stock las materias primas utilizadas e incrementa el stock del subproducto terminado.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener armadas las recetas de subproductos en el módulo de Productos.
- Tener el permiso de **Declaración de Producción en Cocina** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Campos: ¿Qué es cada cosa?

<div id="botones-y-campos-que-es-cada-cosa"></div>

| Campo / Botón | ¿Dónde está? | ¿Qué hace al tocarlo / completarlo? |
|---|---|---|
| 🍳 **Registrar Tanda** | Formulario principal | Inicia la declaración de elaboración de un preparado. |
| 🔢 **Cantidad Elaborada** | Campo de formulario | Especifica las unidades, kilos o litros producidos. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Declarar una tanda de cocina

<div id="paso-1-declarar-una-tanda-de-cocina"></div>

1. Seleccioná el **Subproducto** preparado (ejemplo: *Salsa Boloñesa*).
2. Ingresá la **Cantidad Elaborada** (ejemplo: 5 Litros).
3. Tocá **Confirmar Producción**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Da error de materias primas insuficientes. | No hay suficiente stock de insumos básicos en la cocina. | Ingresá la compra o realiza el traspaso de insumos faltantes antes de producir. |
`;export{a as default};
