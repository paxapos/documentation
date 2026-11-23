# IA: Consultar el manual desde tu asistente

> **¿Dónde está en el sistema?:** En tu asistente de IA (**Claude**, **ChatGPT**, **Gemini CLI** o **Claude Code**), agregando la dirección del manual como conector  
> **¿Quién lo usa?:** Cualquier persona que use PaxaPos y quiera preguntarle a su asistente cómo se hace algo (no hace falta usuario de PaxaPos)

---

## 🎯 ¿Qué es y para qué sirve esta guía?

<div id="que-es"></div>

Este manual tiene un **servidor MCP**: una "puerta" que permite que asistentes de inteligencia artificial como Claude o ChatGPT **busquen y lean el manual de PaxaPos**.

Una vez agregado, le preguntás a tu asistente cómo se hace algo en PaxaPos, por ejemplo _"¿cómo hago el arqueo de caja?"_, y te responde con lo que dice el manual **vigente**, con el link al artículo para que lo abras y lo sigas paso a paso.

La dirección es:

```
https://doc.paxapos.com/mcp
```

- **Es público:** no pide usuario ni contraseña, ni de PaxaPos ni de ningún otro lado.
- **Solo lee el manual:** no ve los datos de tu comercio y no puede cambiar nada.
- **Siempre al día:** cuando se actualiza el manual, el asistente lee la versión nueva.

---

## 🔀 En qué se diferencia del conector de tu comercio

<div id="diferencia"></div>

PaxaPos tiene **dos tipos de conectores** para asistentes de IA. Son distintos y podés tener los dos agregados a la vez:

|                           | Manual de PaxaPos (esta guía)           | Datos de tu comercio                                                                                                             |
| ------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Dirección                 | `https://doc.paxapos.com/mcp`           | `https://api.paxapos.com/mcp` (y uno por área)                                                                                   |
| Para qué sirve            | Saber **cómo se hace** algo en PaxaPos. | Consultar y operar **tus datos**: ventas, stock, compras, caja, etc.                                                             |
| ¿Pide usuario de PaxaPos? | No.                                     | Sí, iniciás sesión con tu email y contraseña de PaxaPos.                                                                         |
| ¿Puede modificar datos?   | No, solo lee el manual.                 | Sí, según los permisos de tu usuario y siempre que vos se lo pidas.                                                              |
| Guía                      | Esta.                                   | [Claude](/user-guide/ia-conectar-claude), [ChatGPT](/user-guide/ia-conectar-chatgpt) o [Gemini](/user-guide/ia-conectar-gemini). |

Ejemplo: con el del manual le preguntás _"¿cómo cargo una factura de proveedor?"_; con el de tu comercio le pedís _"¿qué facturas de proveedor tengo sin pagar?"_.

---

## 📑 Guía Paso a Paso

<div id="paso-a-paso"></div>

Elegí tu asistente. En todos los casos la dirección es la misma: `https://doc.paxapos.com/mcp`.

### 1. Claude

<div id="claude"></div>

1. Entrá a **Claude** (claude.ai o la app de escritorio) con tu cuenta.
2. Abajo a la izquierda, tocá tu **nombre de usuario** y elegí **Settings** (Configuración).
3. En el menú lateral, dentro de **Customize**, tocá **Connectors** (Conectores).
4. Arriba a la derecha, tocá **+ Add** (Agregar) y elegí la opción para agregar un **conector personalizado** (_custom connector_).
5. En la ventana **Add custom connector**:
    1. En **Name** (Nombre) escribí `Manual de PaxaPos`.
    2. En **MCP server URL** pegá `https://doc.paxapos.com/mcp`.
    3. Tocá **Continue** (Continuar).
6. Si al lado del conector aparece **Connect** (Conectar), tocalo. **No te pide iniciar sesión**: el manual es público.

✅ **¡Listo!** Abrí un chat nuevo y preguntale cómo se hace algo en PaxaPos.

> 💡 **Plan Free de Claude:** admite **un solo** conector personalizado. Si ya usás el de tu comercio, revisá tu plan en **Settings** → **Billing** antes de agregar este.

> 🧑‍💼 **En equipos (Claude Team o Enterprise):** los conectores personalizados los agrega un **Owner** de la organización en **Organization settings** → **Connectors** (**Add** → **Custom** → **Web**, con la URL `https://doc.paxapos.com/mcp`). Después cada miembro lo activa desde **Settings** → **Connectors**.

### 2. ChatGPT

<div id="chatgpt"></div>

Necesitás una cuenta de ChatGPT que permita agregar apps MCP personalizadas. Es el mismo requisito que para el conector de tu comercio: lo explica [Antes de empezar](/user-guide/ia-conectar-chatgpt#requisitos) en la guía de ChatGPT.

1. Entrá a **ChatGPT** con tu cuenta.
2. En el menú lateral, tocá **Plugins** y, arriba a la derecha, el botón **Add** (Agregar).
3. Elegí **Create MCP app** (Crear app MCP).
4. En la ventana **New Plugin**:
    1. En **Name** (Nombre) escribí `Manual de PaxaPos`.
    2. En **Connection**, con la opción **Server URL** seleccionada, pegá `https://doc.paxapos.com/mcp`.
    3. En **Authentication**, elegí la opción **sin autenticación**, no **OAuth**: el manual no pide usuario ni contraseña.
    4. Marcá la casilla **I understand and want to continue** (Entiendo y quiero continuar).
    5. Tocá **Create** (Crear).

✅ **¡Listo!** Abrí un chat nuevo y preguntale cómo se hace algo en PaxaPos. Si no usa el manual por su cuenta, nombralo en el pedido (_"Según el manual de PaxaPos, ¿cómo...?"_).

### 3. Gemini CLI

<div id="gemini-cli"></div>

En la terminal, corré:

```bash
gemini mcp add --scope user --transport http paxapos-manual https://doc.paxapos.com/mcp
```

Con `--scope user` queda disponible en cualquier carpeta. Para ver que quedó conectado, corré `gemini mcp list`.

### 4. Claude Code

<div id="claude-code"></div>

En la terminal, corré:

```bash
claude mcp add --transport http paxapos-manual https://doc.paxapos.com/mcp
```

No abre el navegador ni pide iniciar sesión.

---

## 💬 Ejemplos de qué preguntarle

<div id="ejemplos"></div>

- _"¿Cómo hago el arqueo de caja en PaxaPos?"_
- _"¿Cómo configuro una impresora de comandas?"_
- _"¿Qué necesito para emitir factura electrónica?"_
- _"Según el manual de PaxaPos, ¿cómo reabro una mesa que cerré por error?"_
- _"¿Cómo conecto la carta digital de Pedimelo?"_
- _"¿Cómo le doy permisos a un cajero para que no pueda anular mesas?"_

> 💡 **Tip:** el asistente te contesta con un resumen y el **link al artículo** del manual. Si un paso no te queda claro, abrí el link: ahí están las capturas de pantalla.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="problemas-comunes"></div>

| ¿Qué te pasa?                                            | ¿Por qué puede ser?                                                                                 | ¿Cómo se soluciona?                                                                                                    |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| El asistente dice que la URL no es válida.               | La dirección está mal escrita o no empieza con `https://`.                                          | Copiá y pegá exactamente `https://doc.paxapos.com/mcp`.                                                                |
| Me pide usuario y contraseña.                            | Pegaste la dirección del conector de tu comercio (`api.paxapos.com`), o en ChatGPT quedó **OAuth**. | Revisá que la dirección sea `https://doc.paxapos.com/mcp` y, en ChatGPT, elegí la opción sin autenticación.            |
| El asistente responde sin usar el manual o sin link.     | El conector no está activo en esa conversación, o el pedido no deja claro que es sobre PaxaPos.     | Activalo en el chat (en Claude, desde el menú **+**) y nombralo en el pedido: _"Según el manual de PaxaPos, ..."_.     |
| Le pregunto cuánto vendí y no sabe.                      | El manual explica cómo se usa PaxaPos, pero no tiene los datos de tu comercio.                      | Para tus datos, agregá el conector de tu comercio (ver [En qué se diferencia](#diferencia)).                           |
| No encuentra el tema que busco.                          | El manual todavía no lo cubre, o el asistente lo buscó con otras palabras.                          | Preguntale de otra forma, con el nombre de la pantalla o del menú. Si no está en el manual, escribinos por soporte.    |
| No puedo agregar otro conector personalizado en Claude.  | Tu plan de Claude no lo permite o alcanzaste el límite de conectores.                               | Revisá tu plan en **Settings** → **Billing**.                                                                          |
| Abrí la dirección en el navegador y me muestra un error. | Es normal: la dirección es para el asistente, no para abrirla en el navegador.                      | Pegala en el asistente como se explica en el [Paso a paso](#paso-a-paso). El manual para leer está en doc.paxapos.com. |

---

## 📞 ¿Necesitás ayuda?

<div id="ayuda"></div>

- 📱 **Soporte Directo WhatsApp**: <a href="{{WHATSAPP_URL}}?" target="_blank">{{WHATSAPP_DISPLAY}}</a>
