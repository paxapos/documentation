# Omnibot: conectar tu WhatsApp con Meta

<div id="omnibot-conectar-whatsapp"></div>

> **¿Dónde está en el sistema?:** Omnibot → **Configuración** → **Bots** → tu bot → pestaña **WhatsApp**.
> **¿Quién lo usa?:** Dueño o administrador del comercio. Necesitás una cuenta de Facebook y el teléfono del número que vas a conectar a mano.

> 🎯 **¿Para qué sirve esto?**
> Para que el bot atienda por **tu** número de WhatsApp. WhatsApp es de Meta (la empresa de Facebook), así que la conexión se hace con una ventana de Facebook. En esa misma ventana se crea todo lo que Meta pide, incluida tu **cuenta de WhatsApp Business (WABA)**. No tenés que copiar ningún dato a mano.

---

## 🧩 Qué se crea en Meta (y qué es el WABA ID)

<div id="que-se-crea-en-meta"></div>

Para que un bot pueda usar WhatsApp, Meta exige tres cosas, una dentro de la otra:

| Qué es                                     | Para qué sirve                                                                                                             | Cómo se identifica        |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| **Portfolio comercial** (Business Manager) | Es tu empresa en Meta. Agrupa tus páginas, cuentas publicitarias y cuentas de WhatsApp.                                    | Identificador del negocio |
| **Cuenta de WhatsApp Business (WABA)**     | Es el "contenedor" de tus números de WhatsApp para bots. Ahí viven los números, las plantillas y el medio de pago de Meta. | **WABA ID**               |
| **Número de teléfono**                     | El número por el que te escriben tus clientes, con su nombre visible.                                                      | **Phone Number ID**       |

Con el botón **Conectar con Facebook**, Omnibot crea (o reutiliza) las tres cosas y guarda solo el **WABA ID**, el **Phone Number ID** y el permiso de acceso. Si ya tenías un portfolio comercial o una WABA, los elegís de la lista en lugar de crearlos de nuevo.

---

## ✅ Antes de empezar: qué necesitás

<div id="antes-de-empezar"></div>

- **Una cuenta de Facebook** personal, tuya o de quien administra el negocio. Meta la usa para saber quién sos; tus clientes no la ven.
- **Los datos del negocio**: nombre legal, dirección, sitio web o página de Facebook o Instagram, y rubro.
- **Un número de teléfono** que pueda recibir un **SMS o una llamada** en el momento. Puede ser celular o fijo.
- **El nombre visible** con el que querés aparecer en WhatsApp. Tiene que parecerse al nombre real de tu comercio: Meta lo revisa.

> 💡 **¿El número ya lo usás en la app WhatsApp Business del celular?** Podés conectarlo igual y **seguir usando la app**. El bot contesta por el mismo número, y lo que vos respondas desde el celular también queda en la Bandeja. Está explicado en [Conectar el número que ya usás en el celular](#numero-del-celular).

> ⚠️ **Importante:** esto vale para la app **WhatsApp Business**. Si el número está en el WhatsApp común (el personal), primero pasalo a WhatsApp Business desde el celular, o usá un número nuevo para el bot.

---

## 📍 Paso 1: Creá el bot

<div id="paso-1-crea-el-bot"></div>

1. En Omnibot, entrá a **Configuración** → **Bots**.
2. En la tarjeta **Conectar un número de WhatsApp**, hacé clic en **Conectar con Facebook**. Se abre la ventana de Facebook del paso siguiente y, cuando terminás, el bot se crea solo, ya conectado.

Si preferís crear primero el bot y conectar el número después, tocá **Crear bot** (en la tarjeta **Crear un bot sin número**), escribí el nombre y hacé clic en **Crear y configurar**. Después entrás a la pestaña **WhatsApp** de su ficha.

![Pantalla Bots de Omnibot con la tarjeta Crear un bot (Conectar con Facebook y Crear bot) y la lista con el bot Asistente de La Parrilla](images/manual/120-omnibot/122-01-bots.png)

---

## 🔗 Paso 2: Conectá con Facebook

<div id="paso-2-conecta-con-facebook"></div>

En la pestaña **WhatsApp** del bot vas a ver el cuadro **Conectar un número de WhatsApp**, con los tres pasos resumidos.

![Ficha de un bot sin número, pestaña WhatsApp: cuadro Conectar un número de WhatsApp con los tres pasos y el botón Conectar con Facebook](images/manual/120-omnibot/122-02-conectar-whatsapp.png)

1. Hacé clic en **Conectar con Facebook**. Se abre una ventana emergente de Facebook.
2. **Iniciá sesión** con tu cuenta de Facebook y aceptá los datos a los que Omnibot va a poder acceder.
3. **Número de teléfono**: es lo primero que pide Meta. Escribí el número y elegí si querés recibir el código por **SMS** o por **llamada**.
4. Ingresá el **código** que te llega para verificar que el número es tuyo.
5. **Tu negocio y tu cuenta de WhatsApp**: elegí el portfolio comercial y la cuenta de WhatsApp que ya tengas, o creá los nuevos. Si los creás, Meta te pide el nombre del negocio, un email, el sitio web y el país. En este momento Meta crea tu **WABA** y le asigna el **WABA ID**.
6. Revisá el resumen de permisos.
7. En la pantalla final, tocá **Finalizar**.

> ⚠️ **Importante:** terminá siempre con el botón **Finalizar**. Si cerrás la ventana con la X en la última pantalla, Meta crea tu cuenta pero no le avisa a Omnibot, y vas a tener que tocar **Conectar con Facebook** otra vez.

La ventana se cierra sola y Omnibot hace el resto: guarda el número, lo registra en la API de WhatsApp y lo deja escuchando mensajes.

> 💡 **Consejo útil:** si al tocar el botón no aparece nada, tu navegador bloqueó la ventana emergente. Permití las ventanas emergentes para bot.paxapos.com y volvé a tocar el botón.

---

## 📱 Conectar el número que ya usás en el celular

<div id="numero-del-celular"></div>

Si tu comercio ya atiende por la app **WhatsApp Business**, no hace falta cambiar de número ni perder los chats. El número queda en los dos lados a la vez: el bot responde solo, y vos seguís viendo y contestando todo desde el celular.

**Qué necesitás:** el celular con la app WhatsApp Business **actualizada** y a mano, porque parte del trámite se hace desde el teléfono.

1. En Omnibot, tocá **Conectar con Facebook** como en el paso anterior.
2. En la ventana de Facebook, cuando te pida el número, escribí **el número que usás en la app**. Meta detecta que ya está en WhatsApp Business y te ofrece **conectar tu cuenta existente**.
3. Meta te muestra un **código**. Copialo.
4. En el celular te llega un mensaje de la cuenta oficial de Facebook Business. Tocá **Conectar** y seguí los pasos en la app; ahí pegás el código.
5. La app te pregunta si querés **compartir el historial de chats**. Es opcional.
6. Volvé a la ventana de Facebook, terminá los pasos y tocá **Finalizar**.
7. Dejá la app WhatsApp Business **abierta unos minutos** mientras Omnibot termina de sincronizar.

**Cómo conviven el bot y el celular**

- Cuando un cliente escribe, **responde el bot**.
- Si **vos contestás desde el celular**, ese mensaje aparece en la Bandeja de Omnibot y el bot **se frena en esa conversación**, para no pisarte. Después de un rato sin actividad vuelve a atender solo.
- Lo que el bot responde también lo ves en la app del celular.

**Qué cambia en la app del celular**

| En la app                                    | Qué pasa después de conectar                                    |
| -------------------------------------------- | --------------------------------------------------------------- |
| Chats individuales                           | Siguen igual. Se ven en la app y en Omnibot.                    |
| Grupos                                       | Siguen funcionando en la app. El bot no los ve ni responde ahí. |
| Listas de difusión                           | Quedan solo para leer; no se pueden crear nuevas.               |
| Mensajes temporales y de "ver una sola vez"  | Se desactivan en los chats individuales.                        |
| WhatsApp Web y otros dispositivos vinculados | Se desvinculan al conectar. Después los volvés a vincular.      |
| Catálogo, respuestas rápidas, etiquetas      | Siguen igual en la app.                                         |

> ⚠️ **Importante:** abrí la app del celular seguido. Si pasan unas dos semanas sin que el teléfono se conecte, Meta desconecta el número del bot y hay que volver a conectarlo.

---

## 🟢 Paso 3: Verificá que quedó conectado

<div id="paso-3-verifica"></div>

La pestaña **WhatsApp** pasa a mostrar el cuadro **Número conectado**, con el número, el nombre con el que te ven los clientes y una etiqueta de estado.

![Pestaña WhatsApp de un bot con número: cuadro Número conectado con el número +54 9 223 555-0100, el nombre visible, la etiqueta Funcionando y el mensaje Todo en orden](images/manual/120-omnibot/122-03-numero-conectado.png)

- **Funcionando** y el mensaje **Todo en orden**: Meta confirma que el número está conectado y listo para atender.
- **Con avisos** o **Con problemas**: aparece el cuadro **Hay un punto para revisar** (o **Hay N puntos para revisar**), con cada control afectado, y el botón **Resolver en Diagnóstico**.

Para probarlo, mandá un WhatsApp a tu número desde otro teléfono. El mensaje tiene que aparecer en la **Bandeja** y el bot tiene que responder.

---

## 🩺 Paso 4: Si algo falla, usá Diagnóstico

<div id="paso-4-diagnostico"></div>

La pestaña **Diagnóstico** revisa la conexión punto por punto contra Meta. Cada control aparece como **Bien**, **Revisar**, **Falla** o **No aplica** y, cuando se puede arreglar desde Omnibot, trae su botón. Con **Volver a verificar** repetís la revisión:

![Pestaña Diagnóstico de un bot con el estado de la conexión Funcionando y la lista de controles en Bien](images/manual/120-omnibot/122-04-diagnostico.png)

| Control                        | Qué significa si falla                                         | Qué hacer                                                                       |
| ------------------------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Token válido**               | Venció o se revocó el permiso que diste en Facebook.           | Tocá **Reconectar** (o **Cambiar o reconectar número** en la pestaña WhatsApp). |
| **Permisos de la app omnibot** | El permiso no incluye mensajería y administración de WhatsApp. | Tocá **Reconectar** y aceptá todos los permisos.                                |
| **Número activo en Cloud API** | El número no figura como conectado en la API de WhatsApp.      | Seguí lo que indica el control en Meta.                                         |
| **Número registrado**          | El número está en Meta pero no quedó activo en la API.         | Tocá **Registrar número** e ingresá el PIN de 6 dígitos.                        |
| **Nombre y calidad**           | Meta marcó el número o el nombre visible para revisión.        | Entrá al Administrador de WhatsApp de Meta y seguí lo que indica.               |
| **Número pertenece al WABA**   | El Phone Number ID y el WABA ID no son del mismo negocio.      | Revisalos en **Carga manual (avanzado)**.                                       |
| **App suscripta al WABA**      | Meta no le está avisando a Omnibot de los mensajes entrantes.  | Tocá **Re-suscribir**.                                                          |
| **WABA habilitado**            | La cuenta de WhatsApp Business está en revisión o bloqueada.   | Resolvelo en Meta Business.                                                     |
| **Webhook recibiendo**         | Todavía nunca entró un mensaje a este bot.                     | Mandá un WhatsApp al número y tocá **Volver a verificar**.                      |
| **Envío funcionando**          | El último mensaje que mandó el bot no se entregó.              | Tocá **Enviar prueba**.                                                         |
| **Responde (IA)**              | No hay clave de Gemini, así que el bot no contesta solo.       | Tocá **Configurar Gemini**.                                                     |

Abajo del todo está el botón **Enviar mensaje de prueba**: manda un WhatsApp real a un número tuyo (con código de país) para confirmar que el envío funciona.

---

## 🏢 Después de conectar: lo que conviene hacer en Meta

<div id="despues-de-conectar"></div>

Con lo anterior el bot ya atiende. Estas tres cosas se hacen en Meta y te sacan los límites de una cuenta nueva:

1. **Verificá tu negocio.** En [business.facebook.com](https://business.facebook.com) → **Configuración** → **Centro de seguridad** → **Verificación del negocio**. Meta pide documentación (constancia de CUIT, un servicio a nombre del comercio). Mientras no esté verificado, Meta limita cuántas conversaciones **iniciadas por vos** podés mandar por día. Responderle a quien te escribe no tiene ese límite.
2. **Cargá un medio de pago en Meta** si vas a mandar avisos o campañas. Responder dentro de las 24 horas desde que el cliente te escribió es gratis para Meta. Los mensajes que iniciás vos (plantillas de avisos y de marketing) los cobra **Meta**, aparte de PaxaPOS, al medio de pago que cargues en el **Administrador de WhatsApp** → **Configuración de pagos**.
3. **Revisá el nombre visible.** En el Administrador de WhatsApp → **Números de teléfono**, fijate que el nombre figure como **Aprobado**.

**¿Dónde veo mi WABA ID?** En [business.facebook.com](https://business.facebook.com) → **Configuración** → **Cuentas** → **Cuentas de WhatsApp**: al elegir tu cuenta, el identificador aparece debajo del nombre. En Omnibot lo ves en la pestaña **WhatsApp** del bot, dentro de **Carga manual (avanzado)**.

---

## 🛠️ Carga manual (solo casos especiales)

<div id="carga-manual"></div>

Si ya tenés una WABA creada por otro medio, o estás usando el número de prueba que da Meta, podés cargar los datos a mano en **Carga manual (avanzado)**, al pie de la pestaña **WhatsApp**:

- **WhatsApp Phone Number ID**: Administrador de WhatsApp → **Configuración de la API**.
- **WhatsApp WABA ID**: el identificador de la cuenta de WhatsApp Business.
- **WhatsApp Access Token**: un token permanente de un **usuario del sistema** de tu portfolio comercial, con los permisos `whatsapp_business_management` y `whatsapp_business_messaging`.

Después de guardar, entrá a **Diagnóstico** y, si aparecen, tocá **Re-suscribir** y **Registrar número**.

> ⚠️ **Importante:** este camino es para quien ya conoce Meta for Developers. Si no es tu caso, usá **Conectar con Facebook**: hace lo mismo sin copiar nada.

---

## 🔄 Cambiar o liberar el número

<div id="cambiar-o-liberar"></div>

- **Cambiar o reconectar número**: repite la ventana de Facebook. Sirve para pasar el bot a otro número o para renovar el permiso.
- **Liberar número**: desconecta el número del bot y de la API de WhatsApp. El bot deja de recibir y enviar mensajes hasta que conectes otro. Las conversaciones se conservan.
- **Si el número también está en la app del celular**, se desconecta desde el teléfono: WhatsApp Business → **Ajustes** → **Cuenta** → **Plataforma para empresas** → **Desconectar cuenta**. El número sigue funcionando en la app como siempre.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="problemas-comunes"></div>

| ¿Qué te pasa?                                                                    | ¿Por qué puede ser?                                                                  | ¿Cómo se soluciona?                                                                                                                                              |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Toco **Conectar con Facebook** y no pasa nada.                                   | El navegador bloqueó la ventana emergente.                                           | Permití las ventanas emergentes para el sitio y reintentá.                                                                                                       |
| Meta dice que **el número ya está registrado en WhatsApp**.                      | El número está en el WhatsApp común, o la app WhatsApp Business está desactualizada. | Actualizá WhatsApp Business y seguí [Conectar el número que ya usás en el celular](#numero-del-celular). Si es WhatsApp común, pasalo antes a WhatsApp Business. |
| **No me llega el código** de verificación.                                       | El número no recibe SMS (por ejemplo, es un fijo) o hubo muchos intentos.            | Elegí **llamada** en lugar de SMS. Si hiciste varios intentos, esperá unas horas.                                                                                |
| Dice **"La conexión con Facebook todavía no está habilitada en la plataforma"**. | Falta la configuración general de Meta en esa instalación de Omnibot.                | En bot.paxapos.com no debería pasar: escribinos por [WhatsApp]({{WHATSAPP_URL}}).                                                                                |
| El número figura conectado pero **no entran mensajes** a la Bandeja.             | La cuenta (WABA) no quedó suscripta.                                                 | Pestaña **Diagnóstico** → **Re-suscribir**.                                                                                                                      |
| Los mensajes entran pero **el bot no responde**.                                 | La inteligencia artificial no está encendida, o llegaste al tope mensual.            | Mirá **Configuración → Facturación e IA**.                                                                                                                       |
| Meta **rechazó el nombre visible**.                                              | El nombre no coincide con el del negocio o usa palabras genéricas.                   | Cambialo en el Administrador de WhatsApp por uno que coincida con tu marca y esperá la nueva revisión.                                                           |
