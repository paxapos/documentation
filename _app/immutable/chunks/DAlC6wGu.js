const e=`# Instrumentos de Pago Manual

<div id="instrumentos-de-pago-manual"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Medios de Pago** → **Instrumentos de Pago Manual**  
> **¿Quién lo usa?:** Administradores y Encargados de Finanzas  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite definir los medios de pago no integrados electrónicamente que los cajeros pueden seleccionar durante la venta:

1. **Gestión de formas de cobro tradicionales:** Efectivo, Transferencia Bancaria, Cheques, Vouchers.
2. **Definición de cuentas contables:** Vinculación de cada instrumento con la caja o cuenta destino.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Contar con el permiso de **Administración de Medios de Pago** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Nuevo Instrumento** | Esquina superior | Agrega un nuevo medio de pago (ejemplo: *App de Delivery Y*). |
| ✏️ **Editar** | Al lado de cada instrumento | Permite cambiar el nombre o el ícono asociado. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Agregar una forma de pago

<div id="paso-1-agregar-una-forma-de-pago"></div>

1. Tocá el botón **Nuevo Instrumento**.
2. Escribí el **Nombre** (ejemplo: *Transferencia Bancaria Mercado Pago*).
3. Seleccioná el tipo de comprobante que exige (ejemplo: *Pedir N° de Comprobante*).
4. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El cajero no ve el nuevo medio de pago. | Está marcado como deshabilitado. | Verificá que la casilla **Activo** esté marcada. |
`;export{e as default};
