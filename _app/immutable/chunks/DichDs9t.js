const a=`# Transacciones Macro Click de Pagos

<div id="transacciones-macro-click-de-pagos"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Medios de Pago** → **Transacciones MacroClick**  
> **¿Quién lo usa?:** Cajeros y Contadores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Muestra el detalle y control de las operaciones de pago realizadas mediante el botón o pasarela de pago **Macro Click de Pagos** (Banco Macro):

1. **Monitoreo de cobranza electrónica:** Verificación de pagos aprobados en tiempo real por canal MacroClick.
2. **Conciliación bancaria:** Número de transferencia, referencia y acreditación en cuenta.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Consulta de Transacciones MacroClick** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Filtros: ¿Qué es cada cosa?

<div id="botones-y-filtros-que-es-cada-cosa"></div>

| Botón / Filtro | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 🔍 **Buscar** | Barra de búsqueda | Busca transacciones por número de referencia o cliente. |
| 🔄 **Actualizar Estado** | Al lado de cada pago | Consulta con el servicio de Banco Macro si el cobro se acreditó. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Verificar un pago de MacroClick

<div id="paso-1-verificar-un-pago-de-macroclick"></div>

1. Ingresá el número de orden o referencia en la casilla de búsqueda.
2. Tocá **Actualizar Estado** si la venta aún figura en proceso.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El pago fue debitado al cliente pero figura pendiente en el sistema. | Demora en el webhook de notificación del banco. | Tocá **Actualizar Estado** para sincronizar con la pasarela. |
`;export{a as default};
