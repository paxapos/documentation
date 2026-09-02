const e=`# Reembolsos Payway

<div id="reembolsos-payway"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Medios de Pago** → **Reembolsos Payway**  
> **¿Quién lo usa?:** Encargados de Local y Contadores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite procesar devoluciones parciales o totales de cobros efectuados mediante tarjetas procesadas por Payway una vez cerrado el lote:

1. **Devolución de dinero:** Reembolsa el saldo correspondiente a la tarjeta del cliente.
2. **Historial de reembolsos:** Registro detallado de operaciones devueltas y sus motivos.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Contar con el permiso de **Procesamiento de Reembolsos y Devoluciones** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 🔄 **Solicitar Reembolso** | Al lado de la transacción elegida | Inicia el proceso de devolución electrónica del importe. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Procesar una devolución

<div id="paso-1-procesar-una-devolucion"></div>

1. Buscá la operación original en la tabla por número de cupón o fecha.
2. Tocá **Solicitar Reembolso**.
3. Ingresá el **Monto a Devolver** (puede ser parcial o total).
4. Tocá **Confirmar Reembolso**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Error al procesar el reembolso. | La tarjeta del cliente fue dada de baja o expiró. | Contactá con el soporte de Payway. |
`;export{e as default};
