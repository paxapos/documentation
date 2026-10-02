# IA: Conectar PaxaPos con Claude

> **¿Dónde está en el sistema?:** En **Claude** (claude.ai o la app de escritorio) → **Settings** (Configuración) → **Connectors** (Conectores)  
> **¿Quién lo usa?:** Propietario / Administrador del Comercio (o cualquier usuario de PaxaPos que quiera consultar su comercio desde Claude)

---

## 🎯 ¿Qué es y para qué sirve esta guía?

<div id="que-es"></div>

PaxaPos tiene un **servidor MCP**: una "puerta" que permite que asistentes de inteligencia artificial como Claude lean y operen los datos de tu comercio (ventas, stock, compras, caja, etc.).

Una vez conectado, podés pedirle a Claude cosas como *"¿cuánto vendí ayer?"* o *"¿qué mercaderías están por agotarse?"* y te responde con los datos reales de PaxaPos.

La dirección del servidor MCP de PaxaPos es:

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

Arriba a la derecha, tocá el botón **+ Add** (Agregar) y elegí la opción para agregar un **conector personalizado** (*custom connector*).

![Pantalla Connectors con el botón Add señalado arriba a la derecha](images/manual/150-extra/ia/156-01-03-claude-connectors-add.png)

### 4. Cargar el nombre y la URL del MCP

<div id="paso-4"></div>

Se abre la ventana **Add custom connector**:

1. En **Name** (Nombre) escribí `PaxaPos`.
2. En **MCP server URL** pegá:  
   `https://api.paxapos.com/mcp`
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

## 💬 Ejemplos de qué pedirle

<div id="ejemplos"></div>

- *"Mostrame el resumen de ventas de esta semana."*
- *"¿Cuáles fueron los productos más vendidos del mes?"*
- *"¿Qué proveedores tengo con deuda pendiente?"*
- *"¿Qué mercaderías me recomendás reponer?"*

> ⚠️ Las acciones que **modifican datos** (crear órdenes de compra, cerrar caja, etc.) se hacen solo cuando vos se lo pedís, y las que no se pueden deshacer te piden confirmación antes.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| No puedo agregar un conector personalizado. | Tu plan de Claude no lo permite o alcanzaste el límite de conectores. | Revisá tu plan en **Settings** → **Billing**. |
| Claude dice que la URL no es válida. | La dirección está mal escrita o no empieza con `https://`. | Copiá y pegá exactamente `https://api.paxapos.com/mcp`. |
| El login de PaxaPos me da error. | Email o contraseña incorrectos. | Usá los mismos datos con los que entrás a PaxaPos. Si no los recordás, recuperá la contraseña desde PaxaPos. |
| Claude no usa PaxaPos en el chat. | El conector no está conectado o está desactivado en esa conversación. | Verificá en **Settings** → **Connectors** que PaxaPos figure como conectado, y que esté activo en el menú **+** del chat. |
| Claude no encuentra datos de mi comercio. | Tu usuario no tiene permisos sobre ese comercio o esa sección. | Pedile al administrador del comercio que revise tu rol en PaxaPos. |

---

## 📞 ¿Necesitás ayuda?

- 📱 **Soporte Directo WhatsApp**: <a href="{{WHATSAPP_URL}}?" target="_blank">{{WHATSAPP_DISPLAY}}</a>
