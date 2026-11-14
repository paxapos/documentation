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

| Qué es                                     | Para qué sirve                                                                                          | Cómo se identifica      |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ----------------------- |
| **Portfolio comercial** (Business Manager) | Es tu empresa en Meta. Agrupa tus páginas, cuentas publicitarias y cuentas de WhatsApp.                 | Identificador del negocio |
| **Cuenta de WhatsApp Business (WABA)**     | Es el "contenedor" de tus números de WhatsApp para bots. Ahí viven los números, las plantillas y el medio de pago de Meta. | **WABA ID**             |
| **Número de teléfono**                     | El número por el que te escriben tus clientes, con su nombre visible.                                   | **Phone Number ID**     |

Con el botón **Conectar con Facebook**, Omnibot crea (o reutiliza) las tres cosas y guarda solo el **WABA ID**, el **Phone Number ID** y el permiso de acceso. Si ya tenías un portfolio comercial o una WABA, los elegís de la lista en lugar de crearlos de nuevo.

---

## ✅ Antes de empezar: qué necesitás

<div id="antes-de-empezar"></div>

- **Una cuenta de Facebook** personal, tuya o de quien administra el negocio. Meta la usa para saber quién sos; tus clientes no la ven.
- **Los datos del negocio**: nombre legal, dirección, sitio web o página de Facebook o Instagram, y rubro.
- **Un número de teléfono** que pueda recibir un **SMS o una llamada** en el momento. Puede ser celular o fijo.
- **El nombre visible** con el que querés aparecer en WhatsApp. Tiene que parecerse al nombre real de tu comercio: Meta lo revisa.

> ⚠️ **Importante sobre el número:** un número no puede estar al mismo tiempo en la app de WhatsApp del celular y en un bot. Si el número que querés usar ya tiene WhatsApp o WhatsApp Business, tenés dos caminos:
>
> - **Usar un número nuevo** para el bot (lo más simple y lo que recomendamos), o
> - **Eliminar la cuenta** de ese número en la app (WhatsApp → Ajustes → Cuenta → Eliminar cuenta) y recién después conectarlo. Vas a perder el historial de chats de ese celular.

---

## 📍 Paso 1: Creá el bot

<div id="paso-1-crea-el-bot"></div>

1. En Omnibot, entrá a **Configuración** → **Bots**.
2. Hacé clic en **Conectar un número nuevo**. Con esto se crea el bot y se abre directamente la ventana de Facebook del paso siguiente.

Si preferís crear primero el bot y conectar el número después, creá el bot con su nombre y entrá a la pestaña **WhatsApp** de su ficha.

![Pantalla Bots de Omnibot con la lista de bots y el botón para conectar un número nuevo](images/manual/120-omnibot/122-01-bots.png)

---

## 🔗 Paso 2: Conectá con Facebook

<div id="paso-2-conecta-con-facebook"></div>

En la pestaña **WhatsApp** del bot vas a ver el cuadro **Conectar un número de WhatsApp**, con los tres pasos resumidos.

![Pestaña WhatsApp de un bot sin número: cuadro Conectar un número de WhatsApp con los tres pasos y el botón Conectar con Facebook](images/manual/120-omnibot/122-02-conectar-whatsapp.png)

1. Hacé clic en **Conectar con Facebook**. Se abre una ventana emergente de Facebook.
2. **Iniciá sesión** con tu cuenta de Facebook y tocá **Continuar**.
3. **Portfolio comercial**: elegí el de tu negocio. Si no tenés, elegí **Crear un portfolio comercial** y completá nombre, sitio web y país.
4. **Cuenta de WhatsApp Business**: elegí **Crear una cuenta de WhatsApp Business** (o seleccioná una que ya tengas). En este momento Meta crea tu **WABA** y le asigna el **WABA ID**.
5. **Perfil de WhatsApp Business**: escribí el **nombre visible**, elegí la categoría del negocio y, si querés, una descripción.
6. **Número de teléfono**: escribí el número y elegí si querés recibir el código por **SMS** o por **llamada**.
7. Ingresá el **código de 6 dígitos** que te llega.
8. Revisá el resumen de permisos y tocá **Finalizar**.

La ventana se cierra sola y Omnibot hace el resto: guarda el número, lo registra en la API de WhatsApp y lo deja escuchando mensajes.

> 💡 **Consejo útil:** si al tocar el botón no aparece nada, tu navegador bloqueó la ventana emergente. Permití las ventanas emergentes para bot.paxapos.com y volvé a tocar el botón.

---

## 🟢 Paso 3: Verificá que quedó conectado

<div id="paso-3-verifica"></div>

La pestaña **WhatsApp** pasa a mostrar el cuadro **Número conectado**, con el número, el nombre con el que te ven los clientes y una etiqueta de estado.

![Cuadro Número conectado con el número de WhatsApp, el nombre visible y el mensaje Todo en orden](images/manual/120-omnibot/122-03-numero-conectado.png)

- **Todo en orden**: Meta confirma que el número está conectado y listo para atender.
- **Hay puntos para revisar**: Omnibot te dice cuáles y te lleva a **Diagnóstico** con el botón **Resolver en Diagnóstico**.

Para probarlo, mandá un WhatsApp a tu número desde otro teléfono. El mensaje tiene que aparecer en la **Bandeja** y el bot tiene que responder.

---

## 🩺 Paso 4: Si algo falla, usá Diagnóstico

<div id="paso-4-diagnostico"></div>

La pestaña **Diagnóstico** revisa la conexión punto por punto contra Meta y, cuando puede, la arregla con un botón:

![Pestaña Diagnóstico de un bot con la lista de comprobaciones y sus botones de corrección](images/manual/120-omnibot/122-04-diagnostico.png)

| Comprobación                         | Qué significa si falla                                           | Qué hacer                                                                 |
| ------------------------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Permiso de acceso**                | Venció o se revocó el permiso que diste en Facebook.             | En la pestaña WhatsApp, tocá **Cambiar o reconectar número**.             |
| **Suscripción de la cuenta (WABA)**  | Meta no le está avisando a Omnibot de los mensajes entrantes.    | Tocá **Suscribir app al WABA**.                                           |
| **Registro del número**              | El número está en Meta pero no quedó activo en la API.           | Tocá **Registrar número**.                                                |
| **Estado y calidad del número**      | Meta marcó el número o el nombre visible para revisión.          | Entrá al Administrador de WhatsApp de Meta y seguí lo que indica.         |
| **Mensaje de prueba**                | Envía un WhatsApp real a un número tuyo para probar la salida.   | Escribí tu celular y tocá **Enviar mensaje de prueba**.                   |

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

Después de guardar, entrá a **Diagnóstico** y tocá **Suscribir app al WABA** y **Registrar número**.

> ⚠️ **Importante:** este camino es para quien ya conoce Meta for Developers. Si no es tu caso, usá **Conectar con Facebook**: hace lo mismo sin copiar nada.

---

## 🔄 Cambiar o liberar el número

<div id="cambiar-o-liberar"></div>

- **Cambiar o reconectar número**: repite la ventana de Facebook. Sirve para pasar el bot a otro número o para renovar el permiso.
- **Liberar número**: desconecta el número del bot y de la API de WhatsApp. El bot deja de recibir y enviar mensajes hasta que conectes otro. Las conversaciones se conservan.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="problemas-comunes"></div>

| ¿Qué te pasa?                                                              | ¿Por qué puede ser?                                                        | ¿Cómo se soluciona?                                                                                   |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Toco **Conectar con Facebook** y no pasa nada.                             | El navegador bloqueó la ventana emergente.                                 | Permití las ventanas emergentes para el sitio y reintentá.                                            |
| Meta dice que **el número ya está registrado en WhatsApp**.                | El número tiene una cuenta activa en la app del celular.                   | Usá otro número, o eliminá la cuenta de ese número en la app y volvé a intentar.                      |
| **No me llega el código** de verificación.                                 | El número no recibe SMS (por ejemplo, es un fijo) o hubo muchos intentos.  | Elegí **llamada** en lugar de SMS. Si hiciste varios intentos, esperá unas horas.                     |
| Dice **"La conexión con Facebook todavía no está habilitada en la plataforma"**. | Falta la configuración general de Meta en esa instalación de Omnibot.   | En bot.paxapos.com no debería pasar: escribinos por [WhatsApp]({{WHATSAPP_URL}}).                     |
| El número figura conectado pero **no entran mensajes** a la Bandeja.       | La cuenta (WABA) no quedó suscripta.                                       | Pestaña **Diagnóstico** → **Suscribir app al WABA**.                                                  |
| Los mensajes entran pero **el bot no responde**.                           | La inteligencia artificial no está encendida, o llegaste al tope mensual.  | Mirá **Configuración → Facturación e IA**.                                                            |
| Meta **rechazó el nombre visible**.                                        | El nombre no coincide con el del negocio o usa palabras genéricas.         | Cambialo en el Administrador de WhatsApp por uno que coincida con tu marca y esperá la nueva revisión. |
