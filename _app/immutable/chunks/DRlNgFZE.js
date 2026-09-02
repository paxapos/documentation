const e=`# Unidades de Medida

<div id="unidades-de-medida"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Tablas Sistema** → **Unidades de Medida**  
> **¿Quién lo usa?:** Compradores y Encargados de Recetas  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite administrar la tabla de unidades de pesaje, volumen y empaque usadas en el catálogo y recetas (ejemplo: *Kilogramos (Kg), Gramos (g), Litros (L), Mililitros (ml), Unidades (U), Cajas, Botellas*):

1. **Unidades de inventario:** Base para conversiones y descuentos en recetas y stock.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Configuración de Unidades de Medida** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Nueva Unidad** | Esquina superior | Registra una nueva unidad de medida. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Crear una unidad de medida

<div id="paso-1-crear-una-unidad-de-medida"></div>

1. Tocá **Nueva Unidad**.
2. Escribí el nombre y abreviatura (ejemplo: *Hormas - U*).
3. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Error en el descuento de recetas. | Incompatibilidad de magnitud (ejemplo: convertir litros en kilos sin densidad). | Asegurate de usar unidades compatibles o recetas con factor de conversión. |
`;export{e as default};
