# IA: Conectar PaxaPos con ChatGPT

> **¿Dónde está en el sistema?:** En **ChatGPT** (chatgpt.com o la app de escritorio) → **Plugins** → **Add** (Agregar)  
> **¿Quién lo usa?:** Propietario / Administrador del Comercio (o cualquier usuario de PaxaPos que quiera consultar su comercio desde ChatGPT)

---

## 🎯 ¿Qué es y para qué sirve esta guía?

<div id="que-es"></div>

PaxaPos tiene un **servidor MCP**: una "puerta" que permite que asistentes de inteligencia artificial como ChatGPT lean y operen los datos de tu comercio (ventas, stock, compras, caja, etc.).

Una vez conectado, podés pedirle a ChatGPT cosas como _"¿cuánto vendí ayer?"_ o _"pasame las órdenes de compra pendientes"_ y te responde con los datos reales de PaxaPos.

PaxaPos tiene **un conector por área** (salón, caja, compras, finanzas, RRHH, etc.) y uno con todo. Elegí el que corresponde en [¿Qué conector elijo?](#que-conector-elijo). El que tiene todo es:

```
https://api.paxapos.com/mcp
```

---

## ✅ Antes de empezar

<div id="requisitos"></div>

- **Un usuario de PaxaPos** con su email y contraseña. ChatGPT trabaja con **tu** usuario: ve solo lo que tu rol permite.
- **Una cuenta de ChatGPT que permita agregar apps MCP personalizadas.** Esto depende de tu plan y de cómo esté configurada tu cuenta. En algunos planes hay que activar antes el **modo desarrollador** (_Developer mode_) en los ajustes de ChatGPT, y en los planes de equipo o empresa lo habilita el **administrador** del espacio de trabajo. Si no ves la opción **Create MCP app** en el [paso 2](#paso-2), consultalo en la ayuda de ChatGPT o con tu administrador.
- La **dirección (URL) del conector** que vas a usar. La tabla está en [¿Qué conector elijo?](#que-conector-elijo).

---

## 📑 Guía Paso a Paso

<div id="paso-a-paso"></div>

### 1. Entrar a Plugins y tocar Add

<div id="paso-1"></div>

1. Entrá a **ChatGPT** con tu cuenta.
2. En el menú lateral, tocá **Plugins**.
3. Arriba a la derecha, tocá el botón **Add** (Agregar).

![Pantalla Plugins de ChatGPT con la opción Plugins del menú lateral y el botón Add señalados](images/manual/150-extra/ia/156-02-01-chatgpt-plugins-add.png)

### 2. Crear una app MCP

<div id="paso-2"></div>

En el menú que se despliega desde **Add**, elegí **Create MCP app** (Crear app MCP).

### 3. Cargar el nombre y la URL del MCP

<div id="paso-3"></div>

Se abre la ventana **New Plugin**:

1. En **Name** (Nombre) escribí un nombre que diga el área, por ejemplo `PaxaPos Compras`. Si vas a usar el conector con todo, `PaxaPos`.
2. En **Connection**, con la opción **Server URL** seleccionada, pegá la URL del conector que elegiste (ver [¿Qué conector elijo?](#que-conector-elijo)), por ejemplo:  
   `https://api.paxapos.com/mcp/compras`
3. Dejá **Authentication** en **OAuth**.
4. Marcá la casilla **I understand and want to continue** (Entiendo y quiero continuar) para aceptar los términos.
5. Tocá **Create** (Crear).

![Ventana New Plugin con los campos Name y Connection resaltados, la casilla I understand and want to continue y el botón Create](images/manual/150-extra/ia/156-02-02-chatgpt-new-plugin.png)

### 4. Continuar a PaxaPos

<div id="paso-4"></div>

Aparece la ventana **Connect paxapos**. Tocá **Continue to paxapos** (Continuar a PaxaPos).

![Ventana Connect paxapos con el botón Continue to paxapos](images/manual/150-extra/ia/156-02-03-chatgpt-connect-paxapos.png)

### 5. Iniciar sesión con tu usuario de PaxaPos

<div id="paso-5"></div>

ChatGPT te redirige a la pantalla de login de **PaxaPos**:

1. Ingresá el **Email** y la **Contraseña** con los que entrás a PaxaPos.
2. Tocá **Iniciar sesión y autorizar**.

![Pantalla de login de PaxaPos pidiendo email y contraseña con el botón Iniciar sesión y autorizar](images/manual/150-extra/ia/156-02-04-paxapos-login-autorizar.png)

✅ **¡Listo!** PaxaPos queda conectado a ChatGPT. Ya podés abrir un chat nuevo y preguntarle sobre tu comercio.

> 🔒 **Tranquilo:** ChatGPT solo puede operar sobre los comercios y con los permisos que tu usuario ya tiene en PaxaPos. Si tu usuario no puede ver la caja, ChatGPT tampoco.

> ⚠️ **Tu contraseña de PaxaPos se escribe solo en la pantalla de login de PaxaPos.** Nunca se la pegues a ChatGPT en el chat.

### 6. Usarlo en un chat

<div id="paso-6"></div>

Abrí un chat nuevo y pedile lo que necesites en lenguaje normal. Si ChatGPT no usa PaxaPos por su cuenta, nombralo en el pedido (_"Con PaxaPos, ¿cuánto vendí ayer?"_) y fijate de que la app esté activada para esa conversación, según te lo muestre tu versión de ChatGPT.

---

## 🧩 ¿Qué conector elijo?

<div id="que-conector-elijo"></div>

PaxaPos no tiene un solo conector: tiene **uno por trabajo**, con las herramientas de esa tarea. Así ChatGPT elige mejor qué hacer y cada conversación carga solo lo que necesita.

| Conector       | URL                                          | Para qué                                                                        |
| -------------- | -------------------------------------------- | ------------------------------------------------------------------------------- |
| Salón          | `https://api.paxapos.com/mcp/salon`          | Mesas, comandas, consulta del menú y reservas.                                  |
| Caja           | `https://api.paxapos.com/mcp/caja`           | Caja, cobros, facturación de ventas y controles.                                |
| Reportes       | `https://api.paxapos.com/mcp/reportes`       | Estadísticas de ventas, libro IVA, rentabilidad y flujo de fondos.              |
| Compras        | `https://api.paxapos.com/mcp/compras`        | Solicitudes y órdenes de compra, y recepción de mercadería.                     |
| Abastecimiento | `https://api.paxapos.com/mcp/abastecimiento` | Mercaderías, proveedores, stock y recetas.                                      |
| Finanzas       | `https://api.paxapos.com/mcp/finanzas`       | Gastos, pagos a proveedores, cierres y cheques.                                 |
| Catálogo       | `https://api.paxapos.com/mcp/catalogo`       | Productos, precios (también en lote) y administración del menú.                 |
| RRHH           | `https://api.paxapos.com/mcp/rrhh`           | Empleados, fichajes y liquidación de sueldos.                                   |
| Administración | `https://api.paxapos.com/mcp/admin`          | Usuarios y roles (solo lectura), impresoras, módulos, sucursales y auditoría.   |
| Todo           | `https://api.paxapos.com/mcp`                | Lo de todos los días en un solo conector, y busca el resto cuando lo necesitás. |

### ¿Cuál elijo?

- **Si no sabés cuál, usá el de Todo** (`https://api.paxapos.com/mcp`). Trae las herramientas de uso diario y, cuando le pedís algo que no está a mano, ChatGPT las busca y las usa por su cuenta.
- **Si tu plan de ChatGPT admite un solo conector**, también este: el de **Todo**.
- **Si vas a trabajar siempre en lo mismo**, el del área (por ejemplo, Compras para quien pide mercadería y recibe) hace que ChatGPT responda más rápido y con menos vueltas.
- **Podés agregar varios**, cada uno como una app aparte (repetí los pasos 1 a 5 con otra URL). Cada uno inicia sesión con tu mismo usuario.
- Si le pedís algo que no está en el conector que usás, ChatGPT puede avisarte en cuál está.
- **Los conectores de siempre siguen funcionando.** Si ya tenías cargado uno, no hace falta que hagas nada.

---

## 💬 Ejemplos de qué pedirle

<div id="ejemplos"></div>

**Consultas** (con cualquier conector que tenga esos datos):

- _"¿Cuánto vendí ayer?"_
- _"Mostrame el resumen de ventas de esta semana."_
- _"¿Cuáles fueron los productos más vendidos del mes?"_
- _"Pasame las órdenes de compra pendientes."_
- _"¿Qué proveedores tengo con deuda pendiente?"_
- _"¿Qué mercaderías me recomendás reponer?"_
- _"¿Qué mesas están abiertas ahora?"_

**Acciones** (según el conector y los permisos de tu usuario):

- _"Armá la orden de compra con las solicitudes de verdulería."_ (Compras)
- _"Llegó la mercadería de la OC 1234: faltaron 2 cajones de tomate."_ (Compras)
- _"Subí un 10% los precios de la categoría Bebidas."_ (Catálogo)

> 💡 **Tip:** si el pedido es amplio ("mostrame todas las compras del año"), ChatGPT puede traer los datos de a partes. Acotá con una fecha, un proveedor o un producto y la respuesta sale más completa y más rápida.

---

## 🛡️ Acciones que modifican datos

<div id="confirmaciones"></div>

ChatGPT **puede leer y también modificar** datos de PaxaPos, siempre dentro de los permisos de tu usuario. Para que no haya sorpresas:

- **Las consultas no cambian nada.** Ver ventas, stock o compras no modifica datos.
- **Las acciones que modifican datos se hacen solo cuando vos se lo pedís.**
- **Las que no se pueden deshacer** (por ejemplo, pagos o cierres) **piden confirmación explícita**: ChatGPT te cuenta qué va a hacer y espera tu "sí" antes de ejecutarlo.
- **ChatGPT también puede pedirte aprobación** antes de usar una herramienta que modifica datos. Leé lo que te muestra antes de aceptar.
- **Revisá siempre el resumen antes de confirmar**: importes, proveedor, fecha, cantidades.

---

## 🔎 Investigación profunda (_deep research_)

<div id="deep-research"></div>

ChatGPT tiene un modo de **investigación profunda** que junta información de varias fuentes y arma un informe con citas. PaxaPos está preparado para eso: ChatGPT puede **buscar** en tu comercio (productos, clientes, proveedores, órdenes de compra, facturas, gastos y mesas) y **abrir** cada registro para citarlo.

- **Solo lee**: la investigación profunda no modifica nada en PaxaPos.
- Si tu plan lo permite, activá la investigación profunda en ChatGPT y fijate de incluir **PaxaPos** entre las fuentes. Los pasos exactos cambian según la versión de ChatGPT.
- Ejemplos: _"Investigá cómo evolucionó el costo de las bebidas con mis tres proveedores principales."_ · _"Armá un informe de las órdenes de compra del último trimestre, por proveedor."_
- Como en cualquier consulta, solo ve lo que permite tu rol.

---

## 🚪 Cómo revocar el acceso

<div id="revocar"></div>

Podés cortar la conexión cuando quieras. Para dejar de usar un conector:

1. En **ChatGPT**, abrí la sección donde administrás tus apps o plugins (la misma desde la que agregaste PaxaPos: **Plugins**).
2. Elegí la app de **PaxaPos** y usá la opción para **desconectarla o eliminarla**.

Si querés volver a usarla, repetí los pasos de esta guía.

> 🔐 **Si sospechás que alguien más usó tu cuenta** o cambió de manos tu computadora o tu celular, además de desconectar la app **cambiá tu contraseña de PaxaPos** y escribinos por soporte (abajo) para que lo revisemos.

> 🧑‍💼 **Si una persona deja de trabajar en tu comercio**, desactivá o cambiá su usuario en PaxaPos como siempre: ChatGPT trabaja con ese usuario y sus permisos.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="problemas-comunes"></div>

| ¿Qué te pasa?                                                    | ¿Por qué puede ser?                                                                                             | ¿Cómo se soluciona?                                                                                                                                                  |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No veo la opción **Create MCP app** dentro de **Add**.           | Tu plan o tu cuenta de ChatGPT no tiene habilitadas las apps MCP personalizadas, o falta el modo desarrollador. | Revisá tu plan y los ajustes de ChatGPT, o consultá con el administrador de tu espacio de trabajo.                                                                   |
| El botón **Create** está deshabilitado.                          | Falta el nombre, la URL o marcar la casilla **I understand and want to continue**.                              | Completá los campos y marcá la casilla.                                                                                                                              |
| ChatGPT dice que la URL no es válida.                            | La dirección está mal escrita o no empieza con `https://`.                                                      | Copiá y pegá exactamente la URL del conector que elegiste (por ejemplo `https://api.paxapos.com/mcp/compras`).                                                       |
| El login de PaxaPos me da error.                                 | Email o contraseña incorrectos.                                                                                 | Usá los mismos datos con los que entrás a PaxaPos. Si no los recordás, recuperá la contraseña desde PaxaPos.                                                         |
| ChatGPT me vuelve a pedir que inicie sesión.                     | La conexión venció o se cortó.                                                                                  | Iniciá sesión de nuevo con tu usuario de PaxaPos. Si insiste, desconectá la app y conectala otra vez.                                                                |
| ChatGPT no usa PaxaPos en el chat.                               | La app no está activada en esa conversación, o el pedido no deja claro que es de tu comercio.                   | Activá la app en el chat si tu versión de ChatGPT lo pide, y nombrala en el pedido (_"Con PaxaPos, ..."_).                                                           |
| ChatGPT no encuentra datos de mi comercio.                       | Tu usuario no tiene permisos sobre ese comercio o esa sección.                                                  | Pedile al administrador del comercio que revise tu rol en PaxaPos.                                                                                                   |
| ChatGPT dice que no tiene una herramienta para lo que le pido.   | Estás usando el conector de otra área, o tu rol no incluye esa acción.                                          | Agregá el conector que corresponde (ver [¿Qué conector elijo?](#que-conector-elijo)), o usá el de **Todo**. Si igual no aparece, revisá tu rol con el administrador. |
| Cambié de usuario en PaxaPos pero ChatGPT sigue con el anterior. | La app quedó conectada con el primer usuario.                                                                   | Desconectá la app (ver [Cómo revocar el acceso](#revocar)) y conectala de nuevo iniciando sesión con el usuario correcto.                                            |
| Agregaron herramientas nuevas a PaxaPos y ChatGPT no las ve.     | ChatGPT guarda la lista de herramientas de cuando conectaste.                                                   | Actualizá la app desde Plugins o desconectala y volvela a conectar.                                                                                                  |
| La respuesta viene cortada o incompleta.                         | Pediste demasiados datos juntos.                                                                                | Acotá el pedido (fecha, proveedor, producto) o pedile que siga con la página siguiente.                                                                              |

---

## 📞 ¿Necesitás ayuda?

- 📱 **Soporte Directo WhatsApp**: <a href="{{WHATSAPP_URL}}?" target="_blank">{{WHATSAPP_DISPLAY}}</a>
