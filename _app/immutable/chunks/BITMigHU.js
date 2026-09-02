const a=`# Salón de Ventas (Adición)

<div id="salon-de-ventas-adicion"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Ventas** → **Salón de Ventas**  
> **¿Quién lo usa?:** Cajeros, Mozos y Encargados de Salón  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

El **Salón de Ventas** es la pantalla principal de atención donde se gestiona todo lo que ocurre con las mesas y los clientes en el local:

1. **Abrir mesas y tomar pedidos:** Podés seleccionar la mesa ocupada, asignar un mozo y cargar los productos pedidos.
2. **Imprimir comandas a cocina y barra:** Envía automáticamente las órdenes a los sectores de preparación.
3. **Emitir pré-ticket y cobrar:** Podés cobrar en efectivo, tarjeta o Mercado Pago, aplicar descuentos y cerrar la mesa.
4. **Gestionar Delivery y Mostrador:** Permite tomar pedidos para llevar o entregas a domicilio con datos del cliente.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener abierto un arqueo de caja activo para poder registrar cobranzas.
- Contar con el permiso de **Operación de Salón y Adición** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Ícono | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 🟩 **Mesa Libre** | Panel principal de mesas | Abre una mesa para comenzar a cargar productos. |
| 🟥 **Mesa Abierta** | Panel principal de mesas | Muestra los productos cargados y permite adicionar o cobrar. |
| 🖨️ **Adición / Pré-Ticket** | Dentro de la mesa abierta | Imprime la cuenta preliminar para entregar al cliente. |
| 💵 **Cobrar** | Dentro de la mesa abierta | Abre la pantalla de cobro para seleccionar la forma de pago. |
| 🔄 **Cambiar Mozo** | Menú de opciones de la mesa | Reasigna la mesa a otro compañero de trabajo. |
| 🔀 **Dividir Mesa** | Menú de opciones de la mesa | Separa consumos para que cada cliente pague su parte. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Abrir una mesa y cargar un pedido

<div id="paso-1-abrir-una-mesa-y-cargar-un-pedido"></div>

1. En la grilla principal, tocá el número de la mesa que se acaba de ocupar.
2. Seleccioná el **Mozo** a cargo en la lista desplegable.
3. En el catálogo de productos, tocá los productos que los clientes pidieron (ejemplo: Empanadas, Cerveza).
4. Tocá **Enviar Comanda** para que se imprima la orden en la cocina o barra.

### Paso 2: Imprimir la cuenta y cobrar

<div id="paso-2-imprimir-la-cuenta-y-cobrar"></div>

1. Cuando el cliente pida la cuenta, abrí la mesa y tocá **Adición** para imprimir el pré-ticket.
2. Una vez que el cliente entrega el dinero o tarjeta, tocá **Cobrar**.
3. Seleccioná la forma de pago (Efectivo, Tarjeta de Débito/Crédito, Mercado Pago).
4. Escribí el monto recibido en la casilla **Importe**.
5. Tocá **Cerrar y Facturar**. La mesa volverá a quedar de color verde (disponible).

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El sistema no te deja cobrar una mesa. | No hay ningún arqueo de caja abierto. | Abrí la caja desde el módulo de Arqueos antes de realizar cobros. |
| La comanda no sale impresa en cocina. | La impresora está apagada o sin papel. | Revisá el estado de la impresora o la conexión de red. |
| Te equivocaste al cargar un producto. | El producto ya fue enviado a cocina. | Tocá el producto en la mesa y presioná **Anular Item** indicando el motivo. |
`;export{a as default};
