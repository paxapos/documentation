# Inteligencia Artificial

<div id="inteligencia-artificial"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Canales e IA** → **Inteligencia Artificial**  
> **¿Quién lo usa?:** Dueños y administradores del comercio

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Configura tu **asistente virtual**: el bot que atiende a tus clientes por WhatsApp y por el chat de pedimelo.online, responde consultas sobre el menú, toma pedidos y gestiona reservas.

1. **Activación y consumo:** prender/apagar el asistente y ver cuánto está consumiendo.
2. **Personalidad:** cómo se llama, qué tono usa y qué productos recomienda.
3. **Técnico — proveedores y modelos:** solo para quien sabe lo que cambia; los valores por defecto ya funcionan.
4. **API Key de Gemini:** la clave que usa el asistente para funcionar.

![Pantalla de Inteligencia Artificial](images/manual/configuracion-general/12-ia.png)

> 💡 No hace falta cargar el menú acá: el asistente ya lee el menú marcado como "default" en [Delivery y pedidos online](/user-guide/modulo-delivery). Las reglas de reservas se configuran en [Reservas](/user-guide/reservas).

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Configuración del comercio** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Campos: ¿Qué es cada cosa?

<div id="campos-que-es-cada-cosa"></div>

### Activación y consumo

Panel para activar o desactivar el asistente y ver su consumo. Al activarlo por primera vez se te pide un consentimiento (la IA usa una API externa de Google).

### Personalidad

| Campo | ¿Qué es? |
|---|---|
| **Nombre del asistente** | El nombre con el que se presenta a tus clientes (ej: "Carlitos", "Ana", "Bot de La Parrilla"). |
| **Tono de conversación** | **Casual y amigable** (recomendado para delivery/take away), **Formal y profesional** (restaurantes elegantes) o **Divertido y entusiasta** (pizzerías, hamburgueserías). |
| **Voz del asistente** | Solo aplica si tenés habilitado el asistente por voz. Opciones con distinto carácter: Puck (masculina, casual), Charon (masculina, calmada), Kore (femenina, cálida), Fenrir (masculina, autoritaria), Aoede (femenina, suave). |
| **Especialidades del local** | Una por línea — los productos que el asistente va a recomendar activamente (ej: "Pizza napolitana a la piedra"). |
| **Instrucciones adicionales** | Cualquier cosa que quieras que el asistente tenga en cuenta sobre tu negocio (ej: "Siempre sugerí bebida con la comida"). |

### Técnico — proveedores y modelos

Con los valores por defecto ya funciona: solo entrá acá si sabés lo que estás cambiando.

| Campo | ¿Qué es? |
|---|---|
| **Chat (texto)** | Qué proveedor procesa los mensajes escritos de los clientes. Por defecto, Gemini 2.5 Flash. |
| **Voz (audio en vivo) — EXPERIMENTAL** | Está en pruebas. Dejalo en "Desactivado" salvo que soporte te haya autorizado a usarlo. |
| **Nota de voz (micrófono) en pedimelo.online** | Deja que el cliente mande un audio corto en vez de escribir. Apagado por defecto; consume tokens de audio de tu propia key. |
| **Modelo para el chat (texto)** | El modelo de IA que atiende el chat y, por defecto, también el OCR de facturas. |
| **Modelo para el OCR de facturas (visión)** | Vacío = usa el mismo modelo del chat. |
| **Modelo para la voz (Live API)** | Tiene que soportar audio nativo. |
| **Máximo de tokens en respuesta** | Tope de longitud de cada respuesta (por defecto 8192). |

Más abajo hay un link para **ver los modelos disponibles** de Gemini en vivo.

### API Key de Gemini

Campo especial (no es un campo común del formulario): si tu comercio usa la **key de plataforma** de PaxaPOS, este bloque no es editable. Si pegás una key propia, el sistema pasa automáticamente a usar tu propia key en vez de la de plataforma — así el consumo de tu comercio se factura con tu clave y no con la compartida.

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Activar el asistente por primera vez

<div id="paso-1-activar-el-asistente-por-primera-vez"></div>

1. Andá a **Configuración → Inteligencia Artificial**.
2. En **Activación y consumo**, tocá **Activar**.
3. Aceptá el consentimiento que te muestra el sistema.

### Paso 2: Personalizar cómo se presenta el asistente

<div id="paso-2-personalizar-como-se-presenta-el-asistente"></div>

1. Completá **Nombre del asistente** y elegí el **Tono de conversación**.
2. Cargá las **Especialidades del local**, una por línea.
3. Agregá cualquier instrucción extra en **Instrucciones adicionales**.
4. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El asistente no responde a los clientes. | El asistente está desactivado, o hay un problema de conexión con la API. | Revisá **Activación y consumo** y confirmá que esté activo. Si sigue sin responder, contactá a soporte. |
| El asistente recomienda productos que ya no vendés. | Las **Especialidades del local** están desactualizadas. | Editá el bloque **Personalidad** y actualizá la lista. |
| Activé la voz pero no aparece el botón de micrófono. | **Voz (audio en vivo)** está en "Desactivado" — es el valor por defecto mientras la función está en pruebas. | Pedile a soporte que autorice la voz para tu comercio antes de activarla. |
| No sé si estoy usando mi propia API Key o la de PaxaPOS. | El origen de la key (plataforma o propia) se ve en el bloque **API Key de Gemini**. | Revisá ese bloque: si nunca pegaste una key propia, estás usando la de plataforma. |
