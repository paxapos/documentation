# Cómo Usar el Salón de Ventas (Adición)

<div id="salon-de-ventas"></div>

> 🎯 **¿Para qué sirve esto?**
> El Salón de Ventas es la pantalla principal donde gestionás todo lo que pasa con las mesas y los clientes en tu local. Desde acá podés abrir mesas, tomar pedidos, enviar comandas a cocina, imprimir la cuenta y cobrar.

---

## 📍 **Paso 1: Accedé al Salón de Ventas**

<div id="paso-1-accede-al-salon-de-ventas"></div>

1. Desde el menú principal, tocá **Ventas** → **Salón de Ventas**.
2. El sistema abrirá el listado de mesas agrupadas por mozo.

![Listado de mesas del salón con mesas abiertas en rojo y el botón Abrir Mesa](images/manual/20-ventas/01-salon-listado-mesas.png)

En esta pantalla vas a ver:
- El botón azul **"+ ABRIR MESA"** para crear una nueva mesa.
- Las mesas abiertas de cada mozo con su **número**, **importe** y **hora de apertura**.
- Arriba a la derecha, el contador de **Mesas** y **Cubiertos** activos.

> 💡 **Consejo útil:** Las mesas en **rojo** están ocupadas (abiertas). Tocá cualquier mesa para ver su detalle y agregar productos.

---

## 📝 **Paso 2: Abrí una mesa y cargá un pedido**

<div id="paso-2-abri-una-mesa-y-carga-un-pedido"></div>

1. Tocá el botón **"+ Abrir Mesa"** en la parte superior del listado.

![Botón + Abrir Mesa en la parte superior del listado](images/manual/20-ventas/16-salon-boton-abrir-mesa.png)

2. Completá la **descripción** (opcional) y la **cantidad de cubiertos**.

![Diálogo para abrir una mesa nueva con cantidad de cubiertos](images/manual/20-ventas/17-salon-dialogo-abrir-mesa.png)

3. Tocá **"Guardar"**. El sistema abre la mesa y te muestra su pantalla de detalle vacía.

![Mesa recién abierta, sin productos cargados](images/manual/20-ventas/18-salon-mesa-abierta.png)

4. Tocá el botón **"+"** para agregar productos a la comanda.

![Botón + para agregar productos a la comanda](images/manual/20-ventas/19-salon-boton-agregar-productos.png)

5. Se abre el catálogo: buscá o tocá los productos que pidieron los clientes. Cada uno se agrega a la lista de **"Productos Seleccionados"** con su precio.

![Catálogo de productos del menú activo](images/manual/20-ventas/20-salon-catalogo-productos.png)

6. Cuando terminás de cargar los productos, tocá el botón **"Comandar"** para enviarlos a cocina/barra.

![Botón Comandar para enviar la comanda](images/manual/20-ventas/22-salon-boton-comandar.png)

7. La mesa vuelve a su vista principal con la comanda ya cargada.

![Mesa con la comanda cargada tras comandar](images/manual/20-ventas/23-salon-comanda-cargada.png)

> ⚠️ **Atención:** Para poder cobrar, necesitás tener un **arqueo de caja abierto**. Si no tenés uno, el sistema te mostrará el botón **"Abrir Caja"** en el encabezado.

---

## 🔒 **Paso 3: Cerrá la mesa e imprimí el remito**

<div id="paso-3-cerra-la-mesa-e-imprimi-el-remito"></div>

1. Cuando el cliente pida la cuenta, tocá el botón **"🔒 Cerrar"** en la barra lateral izquierda.

![Botón Cerrar de la mesa](images/manual/20-ventas/24-salon-boton-cerrar-mesa.png)

2. El sistema cambia la vista a **"🧾 Remito"**, con el ticket de todos los productos consumidos, subtotal, IVA y total.

![Vista de Remito con el detalle de la mesa cerrada](images/manual/20-ventas/25-salon-remito.png)

3. Si necesitás entregarle un pré-ticket al cliente, tocá el botón **"Imprimir"** dentro de la sección Remito.

![Botón Imprimir del remito](images/manual/20-ventas/26-salon-boton-imprimir-remito.png)

---

## 💵 **Paso 4: Cobrá la mesa**

<div id="paso-4-cobra-la-mesa"></div>

1. Con la mesa cerrada, tocá el botón **"Cobrar"** en la barra lateral.
2. Seleccioná la forma de pago (Efectivo, Tarjeta, Mercado Pago, etc.) de la lista de medios de pago configurados.
3. Ingresá el **monto recibido** y tocá **"Confirmar"** para registrar el cobro.
4. La mesa vuelve a estar disponible en el listado.

> ⚠️ **Atención:** Tocar un medio de pago cobra la venta con un solo toque — no hay confirmación intermedia. Revisá el importe y la mesa antes de tocarlo.

> 💡 **Nota para quien capture pantallas de este paso:** el botón "Cobrar" no aparece si la mesa quedó en $0 (el sistema ya la trata como cobrada) — armar la mesa de prueba con al menos un producto real antes de repetir la receta `20-ventas`.

---

## ⚙️ **Más opciones dentro de una mesa**

<div id="mas-opciones-dentro-de-una-mesa"></div>

Dentro de la vista de una mesa, el botón **"⚙️ Opciones"** (arriba a la derecha) te da acceso a acciones adicionales:

- **🔄 Cambiar Mozo:** Reasigná la mesa a otro compañero de trabajo.
- **🔀 Dividir Mesa:** Separá consumos para que cada cliente pague su parte.
- **👤 Asignar Cliente:** Vinculá un cliente registrado a la mesa (necesario para delivery o factura A/B).
- **🔓 Reabrir Mesa:** Si ya cerraste la mesa por error, podés reabrirla.
- **📧 Enviar Factura por Email:** Enviá la factura fiscal al correo del cliente.

---

## ⚠️ **Resolución de Inconvenientes**

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **El sistema no te deja cobrar una mesa** | No hay ningún arqueo de caja abierto. | Abrí la caja desde el botón **"Abrir Caja"** o desde el módulo de Arqueos antes de realizar cobros. |
| **La comanda no sale impresa en cocina** | La impresora está apagada, sin papel o desconectada de la red. | Revisá el estado de la impresora y la conexión. Verificá la configuración en **Configuración → Impresoras**. |
| **Te equivocaste al cargar un producto** | El producto ya fue enviado a cocina. | Tocá el producto en la comanda y presioná **"Anular Item"** indicando el motivo de la anulación. |
| **La mesa aparece ocupada pero la gente ya se fue** | Faltó realizar el cobro y cierre de la mesa. | Abrí la mesa, tocá **"🔒 Cerrar"**, luego **"Cobrar"** y registrá el cierre. |
| **No aparece el botón "Cerrar"** | Tu usuario no tiene permiso para cerrar mesas. | Pedile al administrador que verifique tus permisos en **Configuración → Roles y Permisos**. |
