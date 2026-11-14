# Omnibot: tu bot de WhatsApp con inteligencia artificial

<div id="omnibot-primeros-pasos"></div>

> **¿Dónde está en el sistema?:** Pantalla de inicio de PaxaPOS → tarjeta **Omnibot (WhatsApp)**. También podés entrar directo a **https://bot.paxapos.com**.
> **¿Quién lo usa?:** Dueños y administradores para configurarlo; el equipo de atención para responder desde la bandeja.

---

## 🎯 ¿Qué es y para qué sirve?

<div id="que-es"></div>

**Omnibot** es el módulo de PaxaPOS que atiende el WhatsApp de tu comercio. Un bot con inteligencia artificial responde a tus clientes las 24 horas con la información de tu negocio, y cuando hace falta le pasa la conversación a una persona de tu equipo.

Con Omnibot podés:

- **Responder solo** las consultas de siempre: horarios, dirección, menú, precios, formas de pago.
- **Tomar pedidos y reservas** conectado a tu PaxaPOS.
- **Derivar a una persona** cuando el cliente lo pide o el bot no sabe: la conversación aparece en la **Bandeja** y tu equipo la sigue desde ahí.
- **Enviar avisos** por WhatsApp (reserva confirmada, pedido listo) y campañas a tus clientes.

![Ícono del módulo Omnibot: un globo de chat verde con la cara de un bot](images/manual/120-omnibot/121-00-icono-omnibot.png)

---

## 🗺️ El camino completo, de cero a atendiendo

<div id="el-camino-completo"></div>

Son cuatro pasos. Los tres primeros se hacen una sola vez.

| Paso | Qué hacés                                               | Dónde se explica                                                                |
| ---- | ------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 1    | Entrás a Omnibot desde PaxaPOS y **encendés la IA**     | En esta página, más abajo                                                       |
| 2    | **Conectás tu número de WhatsApp** con Meta             | [Conectar tu WhatsApp con Meta](/user-guide/omnibot-conectar-whatsapp-con-meta) |
| 3    | Le enseñás al bot **cómo atender** y qué sabe del local | [Configurar el bot](/user-guide/omnibot-configurar-el-bot)                      |
| 4    | Atendés desde la **Bandeja** y mirás el consumo         | [Facturación e inteligencia artificial](/user-guide/omnibot-facturacion-e-ia)   |

---

## 📍 Paso 1: Entrá a Omnibot desde PaxaPOS

<div id="paso-1-entra-a-omnibot"></div>

1. Iniciá sesión en PaxaPOS como siempre.
2. En la pantalla de inicio, en **Aplicaciones del Comercio**, hacé clic en la tarjeta **Omnibot (WhatsApp)**.
3. Se abre Omnibot en una pestaña nueva, **ya con tu usuario**: no tenés que crear otra cuenta ni recordar otra contraseña.

> 💡 **Consejo útil:** la primera vez tiene que entrar el **dueño** o un **administrador** del comercio. Con ese primer ingreso el comercio queda dado de alta en Omnibot. Después, el resto del equipo entra de la misma manera y queda como operador de la bandeja.

Si trabajás en más de un comercio, Omnibot te pregunta con cuál querés entrar.

**¿No ves la tarjeta?** La ven los usuarios con permiso de **Configuración del sistema**, de **Bot** o de **Campañas**. Pedile al dueño que te lo habilite en **Configuración → Usuarios y Roles**.

---

## ⚡ Paso 2: Encendé Omnibot

<div id="paso-2-encende-omnibot"></div>

El bot piensa con inteligencia artificial, y esa inteligencia artificial tiene que estar encendida en tu comercio. Si todavía no lo está, la primera vez que entrás PaxaPOS te muestra la pantalla **Encendé Omnibot**:

1. Leé el cuadro **Cómo se cobra**. Omnibot **no tiene abono**: solo se cobra lo que el bot usa de inteligencia artificial, y ese importe se suma a tu liquidación mensual de PaxaPOS.
2. Leé los **términos y condiciones**.
3. Tildá **"Leí y acepto los términos, y entiendo que se me va a facturar el consumo de IA según lo descripto arriba."**
4. Hacé clic en **Encender Omnibot**.

Listo: quedó encendida la inteligencia artificial de tu comercio y entrás a Omnibot.

> 💡 **Consejo útil:** es el mismo interruptor que está en **Configuración → Inteligencia artificial**. Si ya lo habías encendido para otra función de PaxaPOS (por ejemplo, leer facturas por foto), esta pantalla no aparece y entrás directo.

> ⚠️ **Importante:** solo puede encenderla quien tiene permiso para editar la **Configuración del sistema**. Queda registrado quién aceptó los términos, cuándo y desde dónde. Para poner un límite mensual al gasto, mirá [Facturación e inteligencia artificial](/user-guide/omnibot-facturacion-e-ia).

---

## 🧭 Paso 3: Conocé la pantalla de Omnibot

<div id="paso-3-conoce-la-pantalla"></div>

En el menú de la izquierda tenés:

- **Dashboard**: cuántas conversaciones hubo, cuántas atendió el bot y cuántas una persona.
- **Bandeja**: todas las conversaciones de WhatsApp. Acá tu equipo lee, responde y toma las que el bot derivó.
- **Configuración**: todo lo demás.

![Portada de Configuración de Omnibot con las tarjetas Facturación e IA, Bots, Datos del tenant y Gemini, Respuestas rápidas, Equipo y áreas e Integraciones](images/manual/120-omnibot/121-01-configuracion.png)

| Tarjeta de Configuración      | Para qué sirve                                                                   |
| ----------------------------- | -------------------------------------------------------------------------------- |
| **Facturación e IA**          | Ver si la inteligencia artificial está encendida, cómo se cobra y dónde se paga. |
| **Bots**                      | Crear el bot, conectarle el número de WhatsApp y enseñarle a atender.            |
| **Datos del tenant y Gemini** | El nombre del comercio y la clave de Gemini que usan los bots para responder.    |
| **Respuestas rápidas**        | Textos guardados para que tu equipo responda con un clic.                        |
| **Equipo y áreas**            | Quiénes atienden la bandeja y a qué áreas se derivan las conversaciones.         |
| **Integraciones**             | La clave para que PaxaPOS u otro sistema envíe avisos por WhatsApp.              |

Si todavía no tenés ningún bot, arriba aparece el aviso **"Para empezar: creá tu primer bot conectando un número de WhatsApp"**. Ese es el paso siguiente: [Conectar tu WhatsApp con Meta](/user-guide/omnibot-conectar-whatsapp-con-meta).

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="problemas-comunes"></div>

| ¿Qué te pasa?                                                    | ¿Por qué puede ser?                                                        | ¿Cómo se soluciona?                                                                                           |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| No veo la tarjeta **Omnibot (WhatsApp)**.                        | Tu usuario no tiene ninguno de los permisos que la muestran.               | Pedile al dueño el permiso de Bot, Campañas o Configuración del sistema.                                      |
| Dice **"Tu comercio todavía no abrió Omnibot"**.                 | Nadie con rol de dueño o administrador entró todavía.                      | Que entre primero el dueño o un administrador desde la tarjeta de PaxaPOS.                                    |
| No aparece la pantalla **Encendé Omnibot** y el bot no responde. | Tu usuario no puede editar la configuración, así que entró sin encenderla. | Que el dueño entre a Omnibot desde PaxaPOS, o que la encienda en **Configuración → Inteligencia artificial**. |
| Dice **"No hay términos de IA publicados todavía"**.             | Falta publicar el documento de términos en la plataforma.                  | Escribinos por [WhatsApp]({{WHATSAPP_URL}}) y lo resolvemos.                                                  |
| Entré a bot.paxapos.com directo y me pide usuario y contraseña.  | Entraste sin pasar por PaxaPOS.                                            | Entrá desde la tarjeta **Omnibot (WhatsApp)** de PaxaPOS: te lleva ya con tu sesión.                          |
