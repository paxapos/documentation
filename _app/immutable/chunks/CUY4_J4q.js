const a=`# Desperdicios y Mermas

<div id="desperdicios-y-mermas"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Stock** → **Movimientos** → **Desperdicios**  
> **¿Quién lo usa?:** Chefs, Mozos y Encargados de Control  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite dar de baja mercadería o platos terminados que sufrieron pérdidas, roturas, vencimientos o errores de preparación:

1. **Baja por pérdidas:** Descuenta del stock los artículos perdidos indicando la causa (ejemplo: *Plato tirado al suelo, Insumo vencido, Error de comanda*).
2. **Control de costo de mermas:** Reporte de pérdidas económicas sufridas por desperdicios.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Poseer el permiso de **Registro de Mermas y Desperdicios** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Campos: ¿Qué es cada cosa?

<div id="botones-y-campos-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde me está? | ¿Qué hace al tocarlo / completarlo? |
|---|---|---|
| 🗑️ **Cargar Desperdicio** | Esquina superior | Abre el formulario para registrar un artículo mermado. |
| 📝 **Motivo de Baja** | Formulario | Especifica la causa (ejemplo: *Rotura, Vencimiento, Plato Quemado*). |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Registrar un insumo tirado o vencido

<div id="paso-1-registrar-un-insumo-tirado-o-vencido"></div>

1. Tocá el botón **Cargar Desperdicio**.
2. Seleccioná la mercadería o producto.
3. Indicá la cantidad tirada y elegí el **Motivo**.
4. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| No figura el motivo que necesitás. | El catálogo de motivos de baja no incluye la razón. | Contactá al administrador para dar de alta nuevos motivos en la configuración. |
`;export{a as default};
