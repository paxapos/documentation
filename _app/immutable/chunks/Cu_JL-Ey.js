const e=`# Resumen de Deuda

<div id="resumen-de-deuda"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Finanzas** → **Gastos y Pagos** → **Resumen de Deuda**  
> **¿Quién lo usa?:** Tesoreros, Gerentes de Finanzas y Contadores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Muestra el estado consolida de deudas impagas y saldos pendientes con cada uno de los proveedores del comercio:

1. **Cuentas por pagar:** Resumen global de facturas vencidas y a vencer.
2. **Programación de pagos:** Facilita la planificación del flujo de fondos de la semana.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Consulta de Cuentas a Pagar a Proveedores** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Filtros: ¿Qué es cada cosa?

<div id="botones-y-filtros-que-es-cada-cosa"></div>

| Botón / Filtro | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 💳 **Registrar Pago** | Al lado del saldo del proveedor | Abre la pantalla de emisión de órdenes de pago o egresos. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Consultar cuánto se le debe a un proveedor

<div id="paso-1-consultar-cuanto-se-le-debe-a-un-proveedor"></div>

1. Buscá al proveedor en la lista.
2. Revisá el saldo en la columna **Deuda Total**.
3. Tocá **Registrar Pago** si se abonará la cuenta.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| La deuda no disminuyó tras hacer un pago. | El pago no fue vinculado a la factura correspondiente. | Imputá el comprobante de pago en la orden de egreso. |
`;export{e as default};
