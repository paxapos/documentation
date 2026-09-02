const a=`# Traspasos de Caja

<div id="traspasos-de-caja"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Finanzas** → **Caja** → **Traspasos**  
> **¿Quién lo usa?:** Cajeros, Tesoreros y Encargados  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite transferir fondos en efectivo entre distintas cajas o tesorería (ejemplo: *de Caja Salón a Caja Fuerte / Banco*):

1. **Movimiento entre cuentas internas:** Movimiento seguro de valores de una cuenta o caja a otra sin alterar los totales de ventas.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Transferencias y Traspasos entre Cajas** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Campos: ¿Qué es cada cosa?

<div id="botones-y-campos-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo / completarlo? |
|---|---|---|
| 🔄 **Nuevo Traspaso** | Esquina superior | Inicia el registro de una transferencia de dinero. |
| 💸 **Monto** | Campo de formulario | Especifica el valor exacto a transferir. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Traspasar efectivo a Tesorería

<div id="paso-1-traspasar-efectivo-a-tesoreria"></div>

1. Tocá **Nuevo Traspaso**.
2. Elegí **Caja Origen** (*Caja Salón*) y **Caja Destino** (*Tesorería Central*).
3. Ingresá el **Monto**.
4. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| La caja receptora no ve el saldo. | El traspaso quedó en estado pendiente de aceptación. | El cajero receptor debe tocar **Aceptar Traspaso** en su pantalla. |
`;export{a as default};
