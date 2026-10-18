# IA: Conectar PaxaPos con Claude

> **¿Dónde está en el sistema?:** En **Claude** (claude.ai o la app de escritorio) → **Settings** (Configuración) → **Connectors** (Conectores)  
> **¿Quién lo usa?:** Propietario / Administrador del Comercio (o cualquier usuario de PaxaPos que quiera consultar su comercio desde Claude)

---

## 🎯 ¿Qué es y para qué sirve esta guía?

<div id="que-es"></div>

PaxaPos tiene un **servidor MCP**: una "puerta" que permite que asistentes de inteligencia artificial como Claude lean y operen los datos de tu comercio (ventas, stock, compras, caja, etc.).

Una vez conectado, podés pedirle a Claude cosas como _"¿cuánto vendí ayer?"_ o _"¿qué mercaderías están por agotarse?"_ y te responde con los datos reales de PaxaPos.

PaxaPos tiene **un conector por área** (salón, clientes, caja, compras, finanzas, RRHH, etc.) y uno con todo. Elegí el que corresponde en [Conectores por área](#conectores-por-area). El que tiene todo es:

```
https://api.paxapos.com/mcp
```

---

## 📑 Guía Paso a Paso

<div id="paso-a-paso"></div>

### 1. Abrir la Configuración

<div id="paso-1"></div>

1. Entrá a **Claude** con tu cuenta.
2. Abajo a la izquierda, tocá tu **nombre de usuario** para abrir el menú.
3. Elegí **Settings** (Configuración).

![Menú de usuario de Claude abierto con la opción Settings señalada](images/manual/150-extra/ia/156-01-01-claude-menu-settings.png)

### 2. Ir a Conectores

<div id="paso-2"></div>

En el menú lateral de la configuración, dentro de **Customize**, tocá **Connectors** (Conectores).

![Configuración de Claude con la opción Connectors señalada en el menú lateral](images/manual/150-extra/ia/156-01-02-claude-settings-connectors.png)

### 3. Agregar un conector

<div id="paso-3"></div>

Arriba a la derecha, tocá el botón **+ Add** (Agregar) y elegí la opción para agregar un **conector personalizado** (_custom connector_).

![Pantalla Connectors con el botón Add señalado arriba a la derecha](images/manual/150-extra/ia/156-01-03-claude-connectors-add.png)

### 4. Cargar el nombre y la URL del MCP

<div id="paso-4"></div>

Se abre la ventana **Add custom connector**:

1. En **Name** (Nombre) escribí un nombre que diga el área, por ejemplo `PaxaPos Compras`.
2. En **MCP server URL** pegá la URL del conector que elegiste (ver [Conectores por área](#conectores-por-area)), por ejemplo:  
   `https://api.paxapos.com/mcp/compras`
3. Tocá **Continue** (Continuar).

![Ventana Add custom connector con los campos Name y MCP server URL](images/manual/150-extra/ia/156-01-04-claude-add-custom-connector.png)

### 5. Conectar

<div id="paso-5"></div>

El conector **PaxaPos** aparece en tu lista de conectores. Tocá **Connect** (Conectar) al lado del conector.

### 6. Iniciar sesión con tu usuario de PaxaPos

<div id="paso-6"></div>

Claude te redirige a la pantalla de login de **PaxaPos**:

1. Ingresá el **Email** y la **Contraseña** con los que entrás a PaxaPos.
2. Tocá **Iniciar sesión y autorizar**.

![Pantalla de login de PaxaPos pidiendo email y contraseña con el botón Iniciar sesión y autorizar](images/manual/150-extra/ia/156-01-05-paxapos-login-autorizar.png)

✅ **¡Listo!** PaxaPos queda conectado a Claude. Ya podés abrir un chat nuevo y preguntarle sobre tu comercio.

> 🔒 **Tranquilo:** Claude solo puede operar sobre los comercios y con los permisos que tu usuario ya tiene en PaxaPos. Si tu usuario no puede ver la caja, Claude tampoco.

---

## 🧩 Conectores por área

<div id="conectores-por-area"></div>

PaxaPos no tiene un solo conector: tiene **uno por trabajo**, con las herramientas de esa tarea. Así Claude elige mejor qué hacer y cada conversación carga solo lo que necesita.

| Conector       | URL                                          | Para qué                                                                                               |
| -------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Salón          | `https://api.paxapos.com/mcp/salon`          | Mesas, comandas, cobro en mesa y consulta del menú.                                                    |
| Clientes       | `https://api.paxapos.com/mcp/clientes`       | Reservas, pedidos online que entran (delivery y take away) y tus clientes.                             |
| Caja           | `https://api.paxapos.com/mcp/caja`           | Caja y cobros, facturación (AFIP) de ventas, y corrección o reapertura de mesas ya cobradas.           |
| Reportes       | `https://api.paxapos.com/mcp/reportes`       | Estadísticas de ventas, libro IVA, rentabilidad y flujo de fondos.                                     |
| Compras        | `https://api.paxapos.com/mcp/compras`        | Solicitudes y órdenes de compra, y recepción de mercadería.                                            |
| Abastecimiento | `https://api.paxapos.com/mcp/abastecimiento` | Mercaderías, proveedores, stock y recetas.                                                             |
| Finanzas       | `https://api.paxapos.com/mcp/finanzas`       | Gastos y facturas de proveedor, deudas, pagos y cierres contables.                                     |
| Catálogo       | `https://api.paxapos.com/mcp/catalogo`       | Productos, categorías, precios (también en lote), descuentos, cupones, sectores y salones.             |
| RRHH           | `https://api.paxapos.com/mcp/rrhh`           | Empleados, fichajes, liquidación de sueldos, vacaciones y licencias.                                   |
| Administración | `https://api.paxapos.com/mcp/admin`          | Datos del comercio, usuarios, roles y permisos, **solo para consultar**.                               |
| Todo           | `https://api.paxapos.com/mcp`                | Lo de todos los días en un solo conector; busca y usa el resto de las herramientas cuando se lo pedís. |

### ¿Cuál elijo?

- **Si no sabés cuál, usá el de Todo** (`https://api.paxapos.com/mcp`). Trae las herramientas de uso diario (ventas del día, mesas abiertas, caja, compras, gastos, proveedores, stock, menú, clientes y quién está trabajando) y, cuando le pedís algo que no está a mano, Claude lo busca, mira cómo se usa y lo ejecuta por su cuenta.
- **Plan Free de Claude:** admite **un solo** conector personalizado. Usá el de **Todo**.
- **Si vas a trabajar siempre en lo mismo**, el del área hace que Claude responda más rápido y con menos vueltas. Por ejemplo: **Salón** para el mozo o el encargado de turno, **Clientes** para quien atiende reservas y pedidos online, **Caja** para quien cobra y cierra, **Compras** para quien pide mercadería y recibe, **Finanzas** para quien carga facturas y paga a proveedores.
- **Podés agregar varios.** Cada uno es un conector aparte, y en cada chat activás los que necesites desde el menú **+**.
- **Cada usuario ve solo las herramientas que su rol permite**, en cualquier conector. Si tu rol no incluye una acción, esa herramienta no aparece.
- Si le pedís a Claude algo que no está en el conector que estás usando, PaxaPos le avisa en cuál está y con qué dirección agregarlo.

### Si ya tenías conectores cargados

Las direcciones de siempre (`/mcp`, `/mcp/salon`, `/mcp/caja`, `/mcp/compras`, `/mcp/catalogo` y `/mcp/rrhh`) **siguen funcionando**, pero ahora cada una trae las herramientas de su trabajo. Algunas se mudaron:

- Si usabas **Compras y pagos** (`/mcp/compras`) para cargar facturas de proveedor, ver stock o pagar, sumá **Finanzas** (facturas y pagos) y **Abastecimiento** (stock y proveedores).
- Si usabas **Caja y ventas** (`/mcp/caja`) para estadísticas, sumá **Reportes**; para pagos a proveedores, **Finanzas**.
- Si usabas **Salón** para reservas, pedidos online o clientes, sumá **Clientes**.
- Si usabas **Salón** para reabrir o corregir una mesa ya cobrada, sumá **Caja**.
- **Administración** pasó a ser de consulta (datos del comercio, usuarios, roles y permisos). Los clientes están en **Clientes**, y los descuentos, cupones y sectores en **Catálogo**.

### En equipos (Claude Team o Enterprise)

En un plan de equipo, los conectores personalizados **los agrega un Owner** de la organización, una sola vez, en **Organization settings** → **Connectors** (**Add** → **Custom** → **Web**, con la URL del conector).

Después, **cada miembro** entra a **Settings** → **Connectors**, toca **Connect** al lado del conector de PaxaPos e inicia sesión con **su** usuario de PaxaPos. Claude trabaja con los permisos de cada uno.

### Claude Code

```bash
claude mcp add --transport http paxapos-compras https://api.paxapos.com/mcp/compras
```

La primera vez se abre el navegador para iniciar sesión en PaxaPos. Cambiá `compras` por el área que necesites (`salon`, `clientes`, `caja`, `reportes`, `abastecimiento`, `finanzas`, `catalogo`, `rrhh` o `admin`), o usá `https://api.paxapos.com/mcp` para todo.

---

## 💬 Ejemplos de qué pedirle

<div id="ejemplos"></div>

- _"Mostrame el resumen de ventas de esta semana."_
- _"¿Cuáles fueron los productos más vendidos del mes?"_
- _"¿Qué proveedores tengo con deuda pendiente?"_
- _"¿Qué mercaderías me recomendás reponer?"_
- _"¿Qué mesas están abiertas ahora?"_
- _"¿Qué reservas tengo para el sábado a la noche?"_ (conector Clientes)
- _"Armá la orden de compra con las solicitudes de verdulería y mandásela al proveedor."_ (conector Compras)
- _"Llegó la mercadería de la OC 1234: faltaron 2 cajones de tomate."_ (conector Compras)
- _"Subí un 10% los precios de la categoría Bebidas."_ (conector Catálogo)
- _"La mesa 12 se cobró con el medio de pago equivocado: corregilo."_ (conector Caja)

> ⚠️ Las acciones que **modifican datos** (crear órdenes de compra, cerrar caja, etc.) se hacen solo cuando vos se lo pedís, y las que no se pueden deshacer (por ejemplo, pagos, cierres o reabrir una mesa cobrada) te piden confirmación antes. Leé el resumen (importes, proveedor, fecha, cantidades) antes de confirmar.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="problemas-comunes"></div>

| ¿Qué te pasa?                                                 | ¿Por qué puede ser?                                                   | ¿Cómo se soluciona?                                                                                                       |
| ------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| No puedo agregar un conector personalizado.                   | Tu plan de Claude no lo permite o alcanzaste el límite de conectores. | Revisá tu plan en **Settings** → **Billing**.                                                                             |
| Claude dice que la URL no es válida.                          | La dirección está mal escrita o no empieza con `https://`.            | Copiá y pegá exactamente la URL del conector que elegiste (por ejemplo `https://api.paxapos.com/mcp/compras`).            |
| El login de PaxaPos me da error.                              | Email o contraseña incorrectos.                                       | Usá los mismos datos con los que entrás a PaxaPos. Si no los recordás, recuperá la contraseña desde PaxaPos.              |
| Claude no usa PaxaPos en el chat.                             | El conector no está conectado o está desactivado en esa conversación. | Verificá en **Settings** → **Connectors** que PaxaPos figure como conectado, y que esté activo en el menú **+** del chat. |
| Claude no encuentra datos de mi comercio.                     | Tu usuario no tiene permisos sobre ese comercio o esa sección.        | Pedile al administrador del comercio que revise tu rol en PaxaPos.                                                        |
| Claude dice que la herramienta está en otro conector.         | Estás usando el conector de otra área: PaxaPos le avisa en cuál está. | Agregá ese conector con la URL que te indica (ver [Conectores por área](#conectores-por-area)), o usá el de **Todo**.     |
| Claude dice que no tiene una herramienta para lo que le pido. | Tu rol no incluye esa acción, o la herramienta no existe en PaxaPos.  | Revisá tu rol con el administrador del comercio. Si es algo que PaxaPos no hace todavía, escribinos por soporte.          |

---

## 📞 ¿Necesitás ayuda?

- 📱 **Soporte Directo WhatsApp**: <a href="{{WHATSAPP_URL}}?" target="_blank">{{WHATSAPP_DISPLAY}}</a>
