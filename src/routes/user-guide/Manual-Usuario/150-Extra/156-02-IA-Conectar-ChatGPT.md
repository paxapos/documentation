# IA: Conectar PaxaPos con ChatGPT

> **¿Dónde está en el sistema?:** En **ChatGPT** (chatgpt.com o la app de escritorio) → **Plugins** → **Add** (Agregar)  
> **¿Quién lo usa?:** Propietario / Administrador del Comercio (o cualquier usuario de PaxaPos que quiera consultar su comercio desde ChatGPT)

---

## 🎯 ¿Qué es y para qué sirve esta guía?

<div id="que-es"></div>

PaxaPos tiene un **servidor MCP**: una "puerta" que permite que asistentes de inteligencia artificial como ChatGPT lean y operen los datos de tu comercio (ventas, stock, compras, caja, etc.).

Una vez conectado, podés pedirle a ChatGPT cosas como *"¿cuánto vendí ayer?"* o *"¿qué mercaderías están por agotarse?"* y te responde con los datos reales de PaxaPos.

La dirección del servidor MCP de PaxaPos es:

```
https://api.paxapos.com/mcp
```

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

1. En **Name** (Nombre) escribí `PaxaPos`.
2. En **Connection**, con la opción **Server URL** seleccionada, pegá:  
   `https://api.paxapos.com/mcp`
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
| No veo la opción **Create MCP app** dentro de **Add**. | Tu plan o tu cuenta de ChatGPT no tiene habilitadas las apps MCP personalizadas. | Revisá tu plan de ChatGPT o consultá con el administrador de tu espacio de trabajo. |
| El botón **Create** está deshabilitado. | Falta el nombre, la URL o marcar la casilla **I understand and want to continue**. | Completá los campos y marcá la casilla. |
| ChatGPT dice que la URL no es válida. | La dirección está mal escrita o no empieza con `https://`. | Copiá y pegá exactamente `https://api.paxapos.com/mcp`. |
| El login de PaxaPos me da error. | Email o contraseña incorrectos. | Usá los mismos datos con los que entrás a PaxaPos. Si no los recordás, recuperá la contraseña desde PaxaPos. |
| ChatGPT no encuentra datos de mi comercio. | Tu usuario no tiene permisos sobre ese comercio o esa sección. | Pedile al administrador del comercio que revise tu rol en PaxaPos. |

---

## 📞 ¿Necesitás ayuda?

- 📱 **Soporte Directo WhatsApp**: <a href="{{WHATSAPP_URL}}?" target="_blank">{{WHATSAPP_DISPLAY}}</a>
