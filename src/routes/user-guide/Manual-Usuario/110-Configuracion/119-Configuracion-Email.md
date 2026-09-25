# Mensajería y Notificaciones

<div id="mensajeria-y-notificaciones"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Canales e IA** → **Mensajería**  
> **¿Quién lo usa?:** Dueños y administradores del comercio

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Reúne todos los canales por los que PaxaPOS se comunica con vos y con tus clientes: el **email** que envía facturas y comprobantes, el **WhatsApp** del asistente (Omnibot), y las **alertas por Telegram** de PaxaBot "El Buchón".

1. **Email:** remitente y servidor SMTP para enviar facturas electrónicas, notificaciones y comprobantes.
2. **WhatsApp (Omnibot):** conexión con el bot de WhatsApp.
3. **Templates por situación:** qué mensaje de WhatsApp se envía en cada caso (reserva confirmada, pedido listo, etc.).
4. **Alertas del Buchón:** qué eventos te avisa PaxaBot por Telegram.

![Pantalla de Mensajería](images/manual/configuracion-general/11-mensajeria.png)

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Configuración del comercio** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Para administrar templates de WhatsApp hace falta además el permiso de **CRM / Campañas**.

---

## 🎨 Campos: ¿Qué es cada cosa?

<div id="campos-que-es-cada-cosa"></div>

### Email

| Campo | ¿Qué es? |
|---|---|
| **Dirección de email (remitente)** | El remitente de los correos enviados. Con Resend, tiene que ser de un dominio verificado en su panel. |
| **API Key de Resend** | 🔒 Campo secreto. Se obtiene gratis en resend.com/api-keys. |
| **Servidor SMTP (host)** | Solo si usás SMTP en vez de Resend, ej. smtp.gmail.com. |
| **Puerto SMTP** | Ej. 587. |
| **Usuario SMTP** | Generalmente el mismo email. |
| **Contraseña / Contraseña de aplicación** | 🔒 Campo secreto. Para Gmail y Outlook, usar una **Contraseña de Aplicación**, no la contraseña normal de la cuenta. |
| **Usar TLS (encriptación)** | Recomendado: Sí. Requerido por Gmail, Outlook y la mayoría de los proveedores. |

Debajo del formulario tenés el selector de proveedor (presets) y un botón para **enviar un email de prueba** sin tener que guardar primero.

### WhatsApp (Omnibot)

| Campo | ¿Qué es? |
|---|---|
| **URL del bot** | URL base del backend del bot, ej. https://bot.midominio.com. |
| **API Key de servicio** | 🔒 Campo secreto. Se genera en la consola del bot — se muestra una sola vez al crearla. |
| **Bot ID (opcional)** | Solo hace falta si tu cuenta tiene varios bots de WhatsApp (ej. uno por sucursal). Con un solo bot, dejalo vacío. |
| **URL del backoffice de Omnibot** | A dónde te lleva el botón "Abrir Omnibot", con inicio de sesión automático. Tiene que empezar con `https://` — si no, no se guarda. |
| **API Key de agente (Omnibot → PaxaPos)** | 🔒 Campo secreto, distinto del de arriba. La usa Omnibot para llamar a la API de PaxaPos (por ejemplo, para crear o matchear clientes). |

Debajo hay un botón para **probar la conexión con Omnibot**.

### Templates por situación

Link a **Administrar templates de WhatsApp**: define qué mensaje se envía para cada situación (reserva confirmada, pedido listo, etc.).

### Alertas del Buchón

Tildá qué eventos te notifica PaxaBot "El Buchón" por Telegram: cierre de caja, mesa abierta, mesa eliminada, productos eliminados de una comanda, comanda eliminada, stock mínimo alcanzado, y órdenes de compra pendientes de aprobación (aprobadas/rechazadas). Algunas opciones solo aparecen si tenés el módulo correspondiente activo (arqueo, stock o compras).

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Configurar el email con Resend

<div id="paso-1-configurar-el-email-con-resend"></div>

1. Andá a **Configuración → Mensajería**.
2. Completá **Dirección de email** con un remitente de tu dominio verificado.
3. Pegá la **API Key de Resend**.
4. Tocá **Guardar** y después usá el botón de **enviar email de prueba** para confirmar que funciona.

### Paso 2: Conectar WhatsApp (Omnibot)

<div id="paso-2-conectar-whatsapp-omnibot"></div>

1. Completá **URL del bot** y **API Key de servicio** con los datos de tu cuenta de Omnibot.
2. Tocá **Guardar**.
3. Usá el botón **Probar conexión con Omnibot** para confirmar.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| No llegan los emails de facturas ni comprobantes. | El remitente no está verificado en Resend, o las credenciales SMTP son incorrectas. | Usá el botón de **enviar email de prueba** para confirmar el error exacto. |
| El botón "Abrir Omnibot" no lleva a ningún lado o da error. | La **URL del backoffice de Omnibot** no empieza con `https://` y no se guardó. | Volvé a cargarla asegurándote de que arranque con `https://`. |
| Cambié la API Key de Omnibot pero el bot sigue sin conectar. | Puede que hayas pegado la **API Key de agente** en el campo de **API Key de servicio**, o viceversa — son dos claves distintas con usos distintos. | Revisá cuál clave va en cada campo (mirá el texto de ayuda de cada uno) y volvé a probar la conexión. |
