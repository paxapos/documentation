# IA: Conectar PaxaPos con Gemini

> **¿Dónde está en el sistema?:** En **Gemini** (gemini.google.com) → **Spark** → **Aplicaciones conectadas**  
> **¿Quién lo usa?:** Propietario / Administrador del Comercio (o cualquier usuario de PaxaPos que quiera consultar su comercio desde Gemini)

---

## 🎯 ¿Qué es y para qué sirve esta guía?

<div id="que-es"></div>

PaxaPos tiene un **servidor MCP**: una "puerta" que permite que asistentes de inteligencia artificial como Gemini lean y operen los datos de tu comercio (ventas, stock, compras, caja, etc.).

Una vez conectado, podés pedirle a Gemini cosas como *"¿cuánto vendí ayer?"* o *"¿qué mercaderías están por agotarse?"* y te responde con los datos reales de PaxaPos.

La dirección del servidor MCP de PaxaPos es:

```
https://api.paxapos.com/mcp
```

---

## 📑 Guía Paso a Paso

<div id="paso-a-paso"></div>

### 1. Entrar a Spark → Aplicaciones conectadas

<div id="paso-1"></div>

1. Entrá a **Gemini** con tu cuenta de Google.
2. Arriba a la izquierda, pasá de **Chat** a **Spark**.
3. En el menú lateral, dentro de **Personalizar**, tocá **Aplicaciones conectadas**.

![Gemini con la solapa Spark y la opción Aplicaciones conectadas señaladas con flechas](images/manual/150-extra/ia/156-03-01-gemini-spark-aplicaciones-conectadas.png)

### 2. Cargar la URL del MCP de PaxaPos

<div id="paso-2"></div>

1. Bajá hasta el final de la pantalla, a la sección **Aplicaciones personalizadas para Spark**.
2. En el campo *"Añade un enlace de aplicación personalizado para empezar"* pegá la URL:  
   `https://api.paxapos.com/mcp`
3. Tocá **Siguiente**.

![Sección Aplicaciones personalizadas para Spark con el campo de URL y el botón Siguiente señalados](images/manual/150-extra/ia/156-03-02-gemini-url-personalizada.png)

### 3. Confirmar la conexión al servidor MCP

<div id="paso-3"></div>

Se abre la ventana **Conectarse a un servidor de MCP**:

1. Verificá que la **URL del servidor de MCP** sea `https://api.paxapos.com/mcp`.
2. Leé el aviso *"Acerca de las aplicaciones conectadas personalizadas"*.
3. Tocá **Siguiente** para aceptar y continuar.

![Ventana Conectarse a un servidor de MCP con la URL de PaxaPos cargada y el botón Siguiente](images/manual/150-extra/ia/156-03-03-gemini-modal-servidor-mcp.png)

### 4. Iniciar sesión con tu usuario de PaxaPos

<div id="paso-4"></div>

Gemini te redirige a la pantalla de login de **PaxaPos**:

1. Ingresá el **Email** y la **Contraseña** con los que entrás a PaxaPos.
2. Tocá **Iniciar sesión y autorizar**.

![Pantalla de login de PaxaPos pidiendo email y contraseña con el botón Iniciar sesión y autorizar](images/manual/150-extra/ia/156-03-04-paxapos-login-autorizar.png)

✅ **¡Listo!** PaxaPos queda conectado a Gemini. Ya podés ir a Spark y pedirle tareas sobre tu comercio.

> 🔒 **Tranquilo:** Gemini solo puede operar sobre los comercios y con los permisos que tu usuario ya tiene en PaxaPos. Si tu usuario no puede ver la caja, Gemini tampoco.

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
| No veo la opción **Spark** o **Aplicaciones conectadas**. | La función está en beta y puede no estar habilitada para tu cuenta o región. | Verificá que estés usando una cuenta de Google con acceso a Gemini Spark. |
| Gemini dice que la URL no es válida. | La dirección está mal escrita o no empieza con `https://`. | Copiá y pegá exactamente `https://api.paxapos.com/mcp`. |
| El login de PaxaPos me da error. | Email o contraseña incorrectos. | Usá los mismos datos con los que entrás a PaxaPos. Si no los recordás, recuperá la contraseña desde PaxaPos. |
| Gemini no encuentra datos de mi comercio. | Tu usuario no tiene permisos sobre ese comercio o esa sección. | Pedile al administrador del comercio que revise tu rol en PaxaPos. |

---

## 📞 ¿Necesitás ayuda?

- 📱 **Soporte Directo WhatsApp**: <a href="{{WHATSAPP_URL}}?" target="_blank">{{WHATSAPP_DISPLAY}}</a>
