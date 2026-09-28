# Cómo Usar el Salón de Ventas (Adición)

<div id="salon-de-ventas"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Ventas** → **Salón de Ventas**  
> **¿Quién lo usa?:** Mozos, Cajeros y Encargados de Salón

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

El **Salón de Ventas** (también llamado **Adición**) es la pantalla donde se atiende cada mesa, de principio a fin:

1. **Abrir la mesa** y elegir el mozo que la atiende.
2. **Cargar los productos** que pide el cliente y **comandar** (mandar el pedido a cocina o barra).
3. **Cerrar la mesa** cuando piden la cuenta e imprimir el **remito** (la cuenta).
4. **Cobrar** con uno o varios medios de pago.
5. **Emitir la factura** con CAE cuando el cliente la necesita (por ejemplo, una **Factura A**).
6. Hacer el **Checkout** para **liberar la mesa**.

> 🧭 **El recorrido completo de una mesa es:**
> Abrir mesa → Cargar productos → **Comandar** → **Cerrar** → Imprimir remito → **Cobrar** → **Emitir** factura (solo si hace falta) → **Checkout**

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener al menos un **mozo** creado (ver [Antes de empezar: configurar los mozos](#antes-de-empezar-configurar-los-mozos)).
- Tener productos cargados en el menú (ver [Menú de Productos](/user-guide/menu)).
- Para cobrar en efectivo o con tarjeta cargada a mano, tener la **caja abierta** (ver [Paso 2: Abrí la caja](#paso-2-abri-la-caja)).
- Para imprimir comandas, remitos y facturas, tener **Fiscalberry** abierto en la computadora del local (ver [Gestión de Impresoras](/user-guide/impresoras)).
- Para facturar electrónicamente, tener el **punto de venta** cargado (ver [Puntos de Venta](/user-guide/puntos-de-venta-pdv)).

---

## 👥 Antes de empezar: configurar los mozos

<div id="antes-de-empezar-configurar-los-mozos"></div>

Cada mesa pertenece a un mozo. Hay que hacer dos cosas: **crear el mozo** y darle un **usuario con PIN** para que pueda entrar al sistema.

### Paso A: Crear el mozo

<div id="paso-a-crear-el-mozo"></div>

1. Andá a **Configuración** → **Tablas maestras** → **Mozos**.
<!-- FOTO: 21-01-menu-mozos -->
2. Tocá **Crear Mozo**.
<!-- FOTO: 21-02-boton-crear-mozo -->
3. Completá los datos:
   - **Alias / Identificador:** el número o nombre corto con el que se ve el mozo en el salón (ejemplo: *1* o *Juan*). Es obligatorio.
   - **Nombre** y **Apellido.**
   - **Foto** (opcional).
<!-- FOTO: 21-03-formulario-mozo -->
4. Tocá **Crear**.

### Paso B: Ajustes del mozo

<div id="paso-b-ajustes-del-mozo"></div>

Después de crearlo, tocá **Editar** en el mozo para ver todas sus opciones:

| Opción | ¿Qué hace? |
|---|---|
| **Punto de Venta** | El punto de venta con el que se facturan las mesas de este mozo. |
| **Servidor de Impresión (Paxaprinter)** | Qué Fiscalberry imprime las mesas de este mozo. Si lo dejás en **Usar el del comercio**, usa el general. |
| **Perfil de Impresión** | Qué impresoras usa este mozo. Si lo dejás en **Usar perfil default del comercio**, usa el general. |
| **Estado del Mozo (Activo)** | Si está apagado, el mozo **no aparece** en la lista para abrir mesas. |
| **Mozo Veloz** | Abre las mesas **al instante**, sin pedir descripción ni cantidad de cubiertos. |
| **Visibilidad por Usuarios** | Qué usuarios **pueden ver y usar** a este mozo. Si no marcás ninguno, lo ven **todos los usuarios**. |

<!-- FOTO: 21-04-formulario-editar-mozo -->

### Paso C: Crear el usuario con PIN

<div id="paso-c-crear-el-usuario-con-pin"></div>

Para que el mozo entre al sistema con un código numérico, creale un **usuario con PIN** en **Configuración** → **Usuarios y acceso** → **Usuarios con PIN**.

> 🔗 Guía completa: [Usuarios con PIN](/user-guide/usuarios-con-pin)

> 💡 **Consejo útil:** En **Visibilidad por Usuarios** (Paso B) marcá el usuario del mozo. Así cada mozo ve solo su columna de mesas.

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Entrá al Salón de Ventas

<div id="paso-1-entra-al-salon-de-ventas"></div>

![Grupo Ventas del menú lateral](images/manual/20-ventas/21-00a-menu-grupo-ventas.png)

1. En el menú de la izquierda, tocá **Ventas**. Se despliegan sus opciones.

![Opción Salón de Ventas dentro del grupo Ventas](images/manual/20-ventas/21-00b-menu-opcion-adicionar.png)

2. Tocá **Salón de Ventas**.
3. Vas a ver las mesas abiertas, agrupadas por mozo.

![Listado de mesas del salón con mesas abiertas en rojo y el botón Abrir Mesa](images/manual/20-ventas/01-salon-listado-mesas.png)

En esta pantalla vas a ver:
- El botón **"+ Abrir Mesa"** para crear una mesa nueva.
- Las mesas abiertas de cada mozo, con su **número**, **importe** y **hora de apertura**.
- Arriba a la derecha, cuántas **Mesas** y **Cubiertos** hay activos.

---

### Paso 2: Abrí la caja

<div id="paso-2-abri-la-caja"></div>

Para cobrar en efectivo necesitás la caja abierta. Si está cerrada, arriba aparece el botón **Abrir Caja**.

![Encabezado del Salón de Ventas con el botón Abrir Caja marcado en rojo](images/manual/20-ventas/21-205-donde-esta-boton-abrir-caja.png)

![Botón Abrir Caja](images/manual/20-ventas/21-206-boton-abrir-caja.png)

1. Tocá **Abrir Caja**. Está arriba, en el encabezado del salón.
2. Si tenés más de una caja, elegí cuál abrir y tocá **Continuar**.
3. Se abre la ventana **Iniciar Caja**.

![Ventana Iniciar Caja con la lista de billetes](images/manual/20-ventas/21-207-dialogo-iniciar-caja.png)

![Casillero para la cantidad de billetes](images/manual/20-ventas/21-208-campo-billetes.png)

4. Al lado de cada billete, escribí cuántos hay en la caja. Por ejemplo: *2* billetes de *$ 1.000*.
5. Arriba se suma solo el **Total en Caja**.

![Botón verde Abrir Caja para confirmar](images/manual/20-ventas/21-209-boton-confirmar-abrir-caja.png)

6. Tocá el botón verde **Abrir Caja**.
7. Vas a ver el mensaje **¡Caja Abierta!**. Ahora en el encabezado está el botón para cerrarla.

> 💡 Si no ves el botón **Abrir Caja**, la caja ya está abierta. Seguí con el paso siguiente.

---

### Paso 3: Abrí una mesa

<div id="paso-3-abri-una-mesa"></div>

![Listado de mesas con el botón Abrir Mesa marcado en rojo](images/manual/20-ventas/21-42-donde-esta-boton-abrir.png)

1. Tocá **"+ Abrir Mesa"**.

![Botón + Abrir Mesa en la parte superior del listado](images/manual/20-ventas/16-salon-boton-abrir-mesa.png)

2. Si te lo pide, elegí el **mozo** que va a atender la mesa.
<!-- FOTO: 21-05-elegir-mozo -->
3. Escribí la **descripción** de la mesa (por ejemplo, el número: *12*) y la **cantidad de cubiertos**.

![Diálogo para abrir una mesa nueva con cantidad de cubiertos](images/manual/20-ventas/17-salon-dialogo-abrir-mesa.png)

![Casillero Descripción de la mesa](images/manual/20-ventas/21-195-campo-descripcion-mesa.png)

![Casillero Cantidad de cubiertos](images/manual/20-ventas/21-196-campo-cubiertos.png)

![Botón Guardar de la ventana Abrir Mesa](images/manual/20-ventas/17b-salon-boton-guardar-mesa.png)

4. Tocá **Guardar**. Se abre la mesa, vacía.

![Mesa recién abierta, sin productos cargados](images/manual/20-ventas/18-salon-mesa-abierta.png)

> 💡 Si el mozo tiene activado **Mozo Veloz**, la mesa se abre directo, sin pedir descripción ni cubiertos.

---

### Paso 4: Cargá los productos y comandá

<div id="paso-4-carga-los-productos-y-comanda"></div>

![Mesa abierta con el botón Nueva Comanda marcado en rojo](images/manual/20-ventas/21-148-donde-esta-boton-nueva-comanda.png)

1. Dentro de la mesa, tocá **"+ Nueva Comanda"**.

![Botón + para agregar productos a la comanda](images/manual/20-ventas/19-salon-boton-agregar-productos.png)

2. Se abre el catálogo. Buscá o tocá los productos que pidió el cliente. Cada uno se suma a la lista con su precio.

![Catálogo de productos del menú activo](images/manual/20-ventas/20-salon-catalogo-productos.png)

![Casillero para buscar productos por nombre](images/manual/20-ventas/21-187-campo-buscar-por-nombre-abrev-o-codigo.png)

![Botón de un producto del catálogo](images/manual/20-ventas/21-197-boton-producto.png)

![Producto agregado a la lista de productos seleccionados](images/manual/20-ventas/21-salon-producto-agregado.png)

3. Si el producto tiene **variantes** (por ejemplo, gustos de helado), elegí las opciones que te pide.
<!-- FOTO: 21-06-elegir-variantes -->
![Catálogo con el botón Comandar marcado en rojo](images/manual/20-ventas/21-198-donde-esta-boton-comandar.png)

4. Cuando terminaste, tocá **Comandar**. El pedido sale impreso en cocina o barra.

![Botón Comandar para enviar la comanda](images/manual/20-ventas/22-salon-boton-comandar.png)

5. La mesa vuelve a su vista principal, con la comanda cargada.

![Mesa con la comanda cargada tras comandar](images/manual/20-ventas/23-salon-comanda-cargada.png)

> 💡 Si el cliente pide algo más, repetí este paso: cada vez que tocás **Comandar** sale una comanda nueva.

---

### Paso 5: Asigná un cliente (o creá uno nuevo)

<div id="paso-5-asigna-un-cliente-o-crea-uno-nuevo"></div>

Asignar un cliente es **opcional**, pero es **obligatorio para hacer una Factura A**. Lo podés hacer **en cualquier momento**, mientras la mesa esté abierta o después de cerrarla.

1. Dentro de la mesa, tocá **⚙️ Opciones** (arriba a la derecha).
![Mesa con el botón Opciones marcado en rojo](images/manual/20-ventas/21-115-donde-esta-boton-opciones.png)

![Botón Opciones](images/manual/20-ventas/21-116-boton-opciones.png)
2. Tocá **Cliente**.
<!-- FOTO: 21-08-opcion-cliente -->
3. Se abre la ventana **Seleccionar Cliente**. Escribí el nombre, teléfono o email en el buscador.
<!-- FOTO: 21-09-buscar-cliente -->
4. **Si el cliente aparece**, tocalo y queda asignado a la mesa.
5. **Si el cliente no existe**, tocá **Crear Cliente**. Se abre otra ventana con el formulario:
<!-- FOTO: 21-10-boton-crear-cliente -->

| Campo | ¿Qué poner? |
|---|---|
| **Teléfono (whatsapp)** | El teléfono del cliente. |
| **Nombre/Razón Social** | El nombre de la persona o de la empresa. |
| **Domicilio de Facturación** | La dirección que va en la factura. |
| **E-mail** | Para mandarle la factura por correo. |
| **Tipo de documento** y **Número** | Para una Factura A: elegí **CUIT** y escribí los 11 números. |
| **Descuento** | Si el cliente tiene un descuento fijo. Si no, dejá **Sin Descuento**. |
| **Fecha** | Cumpleaños o inicio de actividades (opcional). |
| **Condición IVA** | **Define si la factura sale A o B.** Para una Factura A elegí **Responsable Inscripto**. |
| **Observación** | Una nota sobre el cliente (opcional). |

<!-- FOTO: 21-11-formulario-crear-cliente -->

6. Guardá el cliente. Queda asignado a la mesa y su nombre aparece en el costado de la mesa.

> 🔗 Para ver y editar todos tus clientes: [Clientes](/user-guide/clientes)

---

### Paso 6: Cerrá la mesa e imprimí el remito

<div id="paso-6-cerra-la-mesa-e-imprimi-el-remito"></div>

Cuando el cliente pide la cuenta:

![Mesa con el botón Cerrar marcado en rojo](images/manual/20-ventas/21-119-donde-esta-boton-cerrar.png)

1. Tocá **🔒 Cerrar**, en la barra de la izquierda. La mesa se cierra y ya no se le pueden cargar productos.

![Botón Cerrar de la mesa](images/manual/20-ventas/24-salon-boton-cerrar-mesa.png)

2. La pantalla cambia a la vista **🧾 Remito**: el detalle de todo lo consumido, con el total.

![Vista de Remito con el detalle de la mesa cerrada](images/manual/20-ventas/25-salon-remito.png)

![Remito con el botón Imprimir marcado en rojo](images/manual/20-ventas/21-154-donde-esta-boton-imprimir.png)

3. Si el remito **no salió impreso solo**, tocá **Imprimir** en la sección **🖨️ Remito**.

![Botón Imprimir del remito](images/manual/20-ventas/26-salon-boton-imprimir-remito.png)

> 💡 El **remito** es la cuenta para el cliente: dice **"Documento no válido como factura"**. No es una factura.
> Desde la misma sección también podés **Descargar Img** o **Descargar PDF A4** para mandarlo por WhatsApp o mail.

![Mesa cerrada con el botón Reabrir marcado en rojo](images/manual/20-ventas/21-121-donde-esta-boton-reabrir.png)

![Botón Reabrir](images/manual/20-ventas/21-122-boton-reabrir.png)

> 🔓 ¿Cerraste por error? Tocá **🔓 Reabrir** y la mesa vuelve a estar abierta.

---

### Paso 7: Cobrá la mesa

<div id="paso-7-cobra-la-mesa"></div>

1. En la vista **Remito**, tocá **💰 Cobrar**.
![Remito con el botón Cobrar marcado en rojo](images/manual/20-ventas/21-150-donde-esta-boton-cobrar.png)

![Botón Cobrar](images/manual/20-ventas/27-salon-boton-cobrar.png)
2. Se abre la pantalla de cobro con el **Total a cobrar**. En **¿Cómo paga?** elegí el medio de pago (efectivo, tarjeta, Mercado Pago, etc.). Si no ves el que buscás, tocá **Más métodos de pago...**
![Pantalla de cobro con el total y los medios de pago](images/manual/20-ventas/28-salon-pantalla-cobro.png)

![Botón del medio de pago Efectivo](images/manual/20-ventas/21-200-boton-metodo-efectivo.png)
3. **Si paga en efectivo:** en **💵 ¿Con cuánto paga el cliente?** escribí el billete que te dio. El sistema te muestra el **Vuelto**. Si paga justo, tocá **✓ Monto exacto**.
![Casillero Con cuánto paga el cliente](images/manual/20-ventas/21-201-campo-con-cuanto-paga.png)

![Pantalla de cobro con Efectivo elegido y el vuelto calculado](images/manual/20-ventas/21-202-pantalla-cobro-efectivo.png)
![Botón verde para confirmar el cobro](images/manual/20-ventas/21-203-boton-confirmar-cobro.png)

4. Tocá el botón verde de abajo para confirmar el pago.

> ⚠️ **Atención:** El botón verde cobra de verdad. Revisá la mesa y el total antes de tocarlo. Si te equivocaste de mesa, tocá **← Volver a la mesa** y no se cobra nada.

![Botón Volver a la mesa](images/manual/20-ventas/21-204-boton-volver-a-la-mesa.png)

#### Si paga con varios medios

<div id="si-paga-con-varios-medios"></div>

Por ejemplo, una parte en efectivo y otra con tarjeta:

1. Cobrá la primera parte: elegí el medio y escribí **solo ese monto**.
2. La mesa queda con saldo pendiente y el botón cambia a **💰 Agregar Pago**.
<!-- FOTO: 21-15-boton-agregar-pago -->
3. Tocá **Agregar Pago** y cobrá lo que falta con el otro medio.
4. Repetí hasta que no falte nada.

> 💡 Si varias personas pagan su parte, en la pantalla de cobro podés usar **✂️ Dividir** para repartir el total y cargar un pago por cada uno (**➕ Agregar Otro Pago**).

#### ¿No aparece el medio de pago que necesitás?

<div id="no-aparece-el-medio-de-pago"></div>

Los medios de pago se dan de alta en **Configuración** → **Tablas maestras** → **Tipos de Pago**.

> 🔗 Guías completas: [Tipos de Pago](/user-guide/tipos-de-pago) · [Cobros y pagos](/user-guide/cobros-y-pagos)

---

### Paso 8: Emití la factura (solo si hace falta)

<div id="paso-8-emiti-la-factura"></div>

Si el cliente te pide factura, hacela desde la sección **🧾 Factura Fiscal** de la vista **Remito**:

- **Emitir:** hace la factura electrónica en ARCA (con **CAE**).
- **Imprimir:** hace la factura y además la imprime por **Fiscalberry**.

<!-- FOTO: 21-16-seccion-factura-fiscal -->

#### Cómo hacer una Factura A

<div id="como-hacer-una-factura-a"></div>

1. Asigná a la mesa un cliente con **Condición IVA: Responsable Inscripto** y su **CUIT** (ver [Paso 5](#paso-5-asigna-un-cliente-o-crea-uno-nuevo)).
2. En **🧾 Factura Fiscal**, tocá **Imprimir** o **Emitir**.
3. Como el cliente es **Responsable Inscripto**, la factura sale **A**. Si la mesa no tiene cliente, o el cliente no es Responsable Inscripto, la factura **no** sale A.

> ⚠️ **Atención:** Revisá bien el cliente antes de facturar. Una factura mal hecha no se borra: hay que anularla con una **Nota de Crédito**.

---

### Paso 9: Hacé el Checkout (liberá la mesa)

<div id="paso-9-hace-el-checkout"></div>

1. Cuando la mesa está **totalmente cobrada**, en la vista **Remito** aparece el botón **👋 Checkout**.
<!-- FOTO: 21-17-boton-checkout -->
2. Tocalo. La mesa se **libera** y sale del listado del salón.

> ⚠️ Si la mesa tiene **pagos pendientes de aprobación**, el sistema te avisa antes. Podés **✓ Aprobar pagos primero** o **⚠️ Checkout de todos modos** (en ese caso, esos pagos **no** se cuentan como cobrados).

---

## ⚙️ Más opciones dentro de una mesa

<div id="mas-opciones-dentro-de-una-mesa"></div>

El botón **⚙️ Opciones** (arriba a la derecha de la mesa) tiene más acciones. Algunas solo funcionan con la mesa **abierta**:

![Ventana Opciones de la mesa](images/manual/20-ventas/21-199-dialogo-opciones.png)

- **👤 Mozo:** cambiá el mozo de la mesa. Se abre una ventana para **Seleccionar** el nuevo mozo.
- **✏️ Número:** cambiá la descripción o número de la mesa.
- **🍽️ Cubiertos:** cambiá la cantidad de cubiertos.
- **Cliente:** asigná o cambiá el cliente (ver [Paso 5](#paso-5-asigna-un-cliente-o-crea-uno-nuevo)).
- **Observación:** una nota sobre la mesa.
- **💸 Descuento:** aplicá un descuento a la mesa.
- **✂️ Dividir Mesa:** separá consumos en otra mesa.
- **🗑️ Anular Mesa:** anula la mesa completa.

> ℹ️ Si no ves alguno de estos botones, tu usuario no tiene permiso para usarlo. Pedíselo al administrador.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El mozo no aparece para abrir la mesa. | El mozo está **inactivo**, o tu usuario no está en su **Visibilidad por Usuarios**. | Editá el mozo en **Configuración → Tablas maestras → Mozos** y revisá esas dos opciones. |
| No sale impresa la comanda ni el remito. | **Fiscalberry** está cerrado, o la impresora está apagada o sin papel. | Abrí Fiscalberry en la computadora del local y revisá la impresora. Ver [Gestión de Impresoras](/user-guide/impresoras). |
| El sistema no me deja cobrar en efectivo. | No hay un **arqueo de caja abierto**. | Tocá **Abrir Caja** arriba en el salón (ver [Paso 2](#paso-2-abri-la-caja)) y volvé a cobrar. |
| No aparece el botón **Cobrar**. | La mesa todavía está abierta, o ya está totalmente cobrada. | Primero tocá **🔒 Cerrar**. Si ya está cobrada, tocá **👋 Checkout**. |
| No aparece el botón **Checkout**. | Todavía falta cobrar una parte. | Tocá **💰 Agregar Pago** y cobrá lo que falta. |
| La factura no salió **A** y el cliente la quería A. | El cliente no tiene la **Condición IVA: Responsable Inscripto**, o no estaba asignado a la mesa. | Hay que anular esa factura con una Nota de Crédito. Antes de volver a facturar, corregí el cliente y asignalo a la mesa. |
| La mesa sigue ocupada pero la gente ya se fue. | Faltó cobrar o hacer el **Checkout**. | Abrí la mesa, cobrá lo que falte y tocá **👋 Checkout**. |
