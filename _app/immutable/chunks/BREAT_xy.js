const a=`# Caja Rápida (Registradora)

<div id="caja-rapida-registradora"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Ventas** → **Caja Rápida**  
> **¿Quién lo usa?:** Cajeros y Personal de Mostrador / Take-away  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

La **Caja Rápida** es una pantalla tipo registradora de paso rápido pensada para la venta inmediata en mostrador sin asignación de mesas:

1. **Venta exprés al paso:** Selección inmediata de productos y cobranza directa.
2. **Teclado numérico táctil:** Facilita la carga rápida de importes y cantidades.
3. **Impresión automática de ticket:** Imprime el comprobante al confirmar el cobro sin pasos intermedios.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener una caja abierta (Arqueo de caja iniciado).
- Tener asignado un perfil con el permiso de **Caja Rápida y Cobranzas** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Ícono | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 🛍️ **Productos** | Panel izquierdo | Muestra los botones de productos más vendidos. |
| ➕ **Agregar** | Debajo del teclado numérico | Agrega el producto seleccionado con la cantidad cargada. |
| 🗑️ **Vaciar** | Encabezado del carrito | Elimina todos los productos cargados en el carrito actual. |
| 💵 **Cobrar** | Barra inferior | Abre las opciones de pago (Efectivo, Tarjetas, QR). |
| 🔓 **Abrir Caja / Cerrar Caja** | Encabezado superior | Permite iniciar o finalizar la jornada de caja. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Seleccionar productos

<div id="paso-1-seleccionar-productos"></div>

1. Tocá sobre el botón del **Producto** deseado en la lista izquierda.
2. Usá el teclado numérico para escribir la cantidad o importe si no tiene precio fijo.
3. Tocá el botón **Agregar**. El producto aparecerá en el listado de la derecha.

### Paso 2: Finalizar la venta y cobrar

<div id="paso-2-finalizar-la-venta-y-cobrar"></div>

1. Revisá el **Total a Pagar** en el panel de la derecha.
2. Tocá el botón verde **Cobrar** en la parte inferior.
3. Seleccioná el medio de pago (Efectivo, Mercado Pago o Tarjeta).
4. El ticket fiscal se imprimirá automáticamente y el carrito quedará listo para la siguiente venta.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El botón Cobrar aparece desactivado. | No agregaste ningún producto al carrito. | Seleccioná al menos un producto antes de cobrar. |
| Te equivocaste de producto. | Se tocó un botón incorrecto. | Tocá el ícono de la papelera 🗑️ al lado del producto en la lista para quitarlo. |
`;export{a as default};
