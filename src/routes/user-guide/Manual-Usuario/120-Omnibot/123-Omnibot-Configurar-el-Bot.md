# Omnibot: configurar el bot

<div id="omnibot-configurar-el-bot"></div>

> **¿Dónde está en el sistema?:** Omnibot → **Configuración** → **Bots** → tu bot.
> **¿Quién lo usa?:** Dueño o administrador del comercio.

> 🎯 **¿Para qué sirve esto?**
> Para decirle al bot **cómo tiene que atender** y **qué sabe de tu negocio**. Un bot bien configurado responde como lo haría tu mejor empleado; uno sin configurar contesta generalidades.

---

## 🧭 La ficha del bot

<div id="la-ficha-del-bot"></div>

Cada bot tiene una ficha con seis pestañas. Arriba, el cuadro **Puesta en marcha** te marca qué pasos te faltan y te lleva a cada uno.

![Ficha de un bot con el cuadro Puesta en marcha y las pestañas Instrucciones, Conocimiento, Herramientas, Probar, WhatsApp y Diagnóstico](images/manual/120-omnibot/123-01-ficha-del-bot.png)

| Pestaña           | Qué se configura                                             |
| ----------------- | ------------------------------------------------------------ |
| **Instrucciones** | Cómo se comporta: el tono, qué hace y qué no hace.           |
| **Conocimiento**  | Qué sabe del negocio: horarios, dirección, menú, políticas.  |
| **Herramientas**  | Qué puede consultar en otros sistemas.                       |
| **Probar**        | Un chat de prueba para ver cómo responde, sin usar WhatsApp. |
| **WhatsApp**      | Por qué número atiende.                                      |
| **Diagnóstico**   | Qué revisar si algo no funciona.                             |

---

## ✍️ Paso 1: Escribí las instrucciones

<div id="paso-1-instrucciones"></div>

En la pestaña **Instrucciones** le explicás al bot, con tus palabras, quién es y cómo tiene que atender. Escribilo como si se lo explicaras a un empleado nuevo en su primer día.

Un buen punto de partida:

```
Sos el asistente de La Parrilla de Juan, una parrilla familiar de Mar del Plata.
Atendé con buena onda, tuteando, en mensajes cortos.
Podés informar horarios, dirección, menú y precios, y tomar reservas.
Si te piden algo que no sabés, o el cliente está enojado, pasale la conversación a una persona.
Nunca inventes precios ni promociones.
```

> 💡 **Consejo útil:** decile también lo que **no** tiene que hacer. "Nunca confirmes un pedido sin repetirle al cliente el detalle y el total" evita más problemas que diez párrafos de buenas intenciones.

En **Opciones avanzadas** está el modo **Un agente externo**. Con ese modo el bot no razona por su cuenta: le pasa cada mensaje al **agente de PaxaPOS**, que conoce tu menú, tus precios y tus reservas en tiempo real. Lo configura el soporte.

---

## 📚 Paso 2: Cargá el conocimiento

<div id="paso-2-conocimiento"></div>

En la pestaña **Conocimiento** cargás la información del local que el bot tiene que saber de memoria:

- Horarios de atención y días que cerrás.
- Dirección, cómo llegar y dónde estacionar.
- Formas de pago que aceptás.
- Zona y costo de envío.
- Preguntas que te hacen siempre, con su respuesta.

Cuanto más concreto, mejor. "Abrimos de martes a domingo de 12 a 15:30 y de 20 a 00:30" sirve; "abrimos todos los días" trae problemas el primer lunes.

---

## 🧰 Paso 3: Herramientas (opcional)

<div id="paso-3-herramientas"></div>

Una **herramienta** le permite al bot consultar un sistema en el momento, por ejemplo el estado de un pedido. Es una función avanzada: en la mayoría de los comercios alcanza con las instrucciones y el conocimiento, o con el agente de PaxaPOS.

---

## 🧪 Paso 4: Probalo antes de salir a la cancha

<div id="paso-4-probar"></div>

En la pestaña **Probar** tenés un chat para hablar con el bot sin que salga ningún WhatsApp. Hacele las preguntas que te hacen tus clientes:

- "¿Hasta qué hora abren hoy?"
- "¿Tienen opciones sin TACC?"
- "Quiero reservar para 6 el sábado."
- "Quiero hablar con una persona."

Si una respuesta no te gusta, volvé a **Instrucciones** o a **Conocimiento**, corregí y probá de nuevo.

---

## 👥 Paso 5: Sumá a tu equipo

<div id="paso-5-equipo"></div>

Cuando el bot deriva una conversación, alguien de tu equipo la tiene que tomar desde la **Bandeja**.

- Tu equipo entra a Omnibot igual que vos: desde la tarjeta **Omnibot (WhatsApp)** de PaxaPOS, con su usuario de siempre.
- Dueños y administradores de PaxaPOS quedan como **administradores** de Omnibot. El resto queda como **operador**: ve la Bandeja, pero no la Configuración.
- Si en PaxaPOS usás **Centros de costo**, cada operador ve las conversaciones de su área.

En **Configuración → Respuestas rápidas** podés guardar textos de uso frecuente ("Ya te paso el link de pago", "En 20 minutos sale tu pedido") para responder con un clic.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="problemas-comunes"></div>

| ¿Qué te pasa?                                         | ¿Por qué puede ser?                                              | ¿Cómo se soluciona?                                                                              |
| ----------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| El bot **inventa** datos (precios, horarios).         | Esa información no está en Conocimiento.                         | Cargala en **Conocimiento** y agregá en Instrucciones "si no lo sabés, derivá a una persona".    |
| El bot responde **muy largo** o muy formal.           | Las instrucciones no dicen el tono.                              | Agregá "respondé en mensajes cortos, tuteando".                                                  |
| En **Probar** funciona pero por WhatsApp no responde. | El número no está bien conectado, o la IA no está encendida.     | Revisá la pestaña **Diagnóstico** y **Configuración → Facturación e IA**.                        |
| El bot **no deriva** nunca a una persona.             | No se lo indicaste.                                              | Decile en Instrucciones en qué casos tiene que pasar la conversación.                            |
| Un operador **no ve** una conversación.               | Pertenece a otra área.                                           | Revisá las áreas en **Configuración → Equipo**.                                                  |
