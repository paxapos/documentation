# IA: Pedidos desde asistentes de IA

> **¿Dónde está en el sistema?:** **Configuración** → grupo **Canales e IA** → **Inteligencia Artificial** → bloque **Pedidos desde asistentes de IA**  
> **¿Quién lo usa?:** Propietario / Administrador del Comercio

---

## 🎯 ¿Qué es?

<div id="que-es"></div>

Tus clientes te pueden hacer pedidos **desde su asistente de inteligencia artificial** (Claude o ChatGPT). Le escriben, por ejemplo, _"quiero 2 muzzas para retirar a las 21"_, y el asistente arma el pedido con tu menú real.

- El pedido entra a PaxaPos como cualquier pedido online, con los precios de tu menú.
- El cliente recibe el **total que calcula PaxaPos** y, si cobrás online, el **link de pago o el QR**.
- Cuando paga, la **factura sale sola** (si tenés factura electrónica) y el cliente la ve en la misma conversación.

Cada comercio tiene **su propia dirección**. El cliente la agrega una sola vez como conector en su asistente, y desde ahí ve solo **tu** comercio.

No hay que instalar nada ni pedírselo a soporte: se activa con un tilde.

---

## ✅ Cómo activarlo

<div id="activar"></div>

1. Entrá a **Configuración** y, en el grupo **Canales e IA**, elegí **Inteligencia Artificial**.
2. En el bloque **Pedidos desde asistentes de IA**, tildá **Permitir pedidos desde asistentes de IA**.
3. Opcional: completá **Localidad** y **Rubro**. Ayudan al asistente a encontrarte.
4. Dejá tildado **Aparecer en el buscador de comercios de PaxaPos** si querés que te encuentren clientes que todavía no te conocen. Si lo destildás, te pueden pedir solo quienes tengan tu dirección.
5. Tocá **Guardar**.

> ⏱️ El cambio puede tardar **unos minutos** en verse en los asistentes y en tu página para clientes.

Para dejar de recibir pedidos por IA, destildá **Permitir pedidos desde asistentes de IA** y guardá.

---

## 🔗 Cómo compartirlo con tus clientes

<div id="compartir"></div>

Con el canal activo, debajo de las opciones aparece **URL para tus clientes**. Por ejemplo:

```
https://api.paxapos.com/mcp/publico/tu_comercio
```

- **Copiar** la copia para que la mandes por WhatsApp, redes o mail.
- **Ver la página "Pedí con tu IA" para compartir** abre la página pública de tu comercio en pedimelo (`…/tu_comercio/ia`). Tiene:
    - la dirección, con un botón para copiarla;
    - los pasos para Claude y para ChatGPT;
    - ejemplos de qué pedir;
    - un **QR para imprimir** que lleva a esa misma página. Podés pegarlo en el mostrador o en las mesas.

En tu menú de pedimelo también aparece el acceso **Pedí con tu IA** mientras el canal esté activo.

---

## 📱 Qué ve el cliente

<div id="cliente"></div>

1. Agrega tu dirección como conector en su asistente, con el nombre **Pedidos a** y el de tu comercio.
2. La primera vez verifica su celular con un **código por SMS**. No necesita usuario de PaxaPos.
3. Le pide al asistente lo que quiere. El asistente le muestra el **detalle, el total y el envío**.
4. Si cobrás online, recibe el **link de pago** (o el QR) y paga desde su celular.
5. En Claude, la tarjeta del pedido pasa sola a **Pagado** y después muestra la **factura** con el link al PDF. En otros asistentes alcanza con preguntar _"¿ya está mi factura?"_.

Si el cliente quiere **Factura A** o una factura a su nombre, le pasa al asistente su **CUIT** (o su DNI) y su condición frente al IVA cuando hace el pedido. Se guardan en su ficha cuando es un cliente nuevo o cuando ya pidió antes con esa misma cuenta del asistente. Si el cliente ya estaba en tus **Clientes** por otra vía (por ejemplo, lo cargaste vos o pidió por la web con el mismo teléfono), los datos del asistente no pisan su ficha: cargaselos vos en **Clientes**.

---

## 🍳 Cómo te llegan los pedidos

<div id="como-llegan"></div>

- Entran como **pedido online**, igual que los de pedimelo, y siguen el mismo camino en el salón y en la cocina.
- En el detalle del pedido aparece la etiqueta **Pedido vía asistente de IA**, y la observación dice _"Pedido desde asistente de IA (MCP)"_.
- El cliente (nombre y celular verificado) queda en **Clientes**.

---

## 🧾 La factura

<div id="factura"></div>

- Si tenés **factura electrónica** activa, la factura se emite **sola** cuando se aprueba el pago online, igual que en pedimelo. No tenés que hacer nada.
- Sin datos fiscales del cliente, sale a **Consumidor Final**. Con el CUIT de un responsable inscripto o de un monotributista, sale **Factura A**.
- Si no tenés factura electrónica, el asistente le dice al cliente que el comercio no la emite automáticamente.

> ⚠️ La factura sale con el **primer pago aprobado**. Si después agregás el envío u otro ítem, ese importe no queda facturado: cobralo y facturalo aparte.

---

## 🛵 El envío

<div id="envio"></div>

El asistente no calcula el costo del envío. Si el pedido es a domicilio y todavía no cargaste el envío, le dice al cliente **"envío a confirmar por el comercio"**, igual que pedimelo web. Cargalo en el pedido como siempre: el cliente ve el total actualizado cuando consulta su pedido.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="problemas-comunes"></div>

| ¿Qué te pasa?                                              | ¿Por qué puede ser?                                                      | ¿Cómo se soluciona?                                                                                                   |
| ---------------------------------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| No veo la URL para mis clientes.                           | El canal no está activo o no guardaste.                                  | Tildá **Permitir pedidos desde asistentes de IA** y tocá **Guardar**.                                                 |
| El cliente dice que la página "Pedí con tu IA" no existe.  | El canal está apagado, o lo activaste hace muy poco.                     | Revisá el tilde y esperá unos minutos.                                                                                |
| El cliente no me encuentra en el buscador de su asistente. | Destildaste **Aparecer en el buscador** o el canal está apagado.         | Pasale tu URL directa: con ella te pide igual.                                                                        |
| El pedido no trae link de pago.                            | No tenés cobros online configurados.                                     | Configurá el cobro online en **Configuración** → **Cobros**. Mientras tanto, el cliente paga al retirar o al recibir. |
| Pidió Factura A y salió a Consumidor Final.                | El cliente ya estaba en tus Clientes por otra vía y su ficha no se pisa. | Cargale el CUIT y la condición de IVA en **Clientes**.                                                                |
| No salió la factura.                                       | No tenés factura electrónica activa, o el pago no fue online.            | Revisá la configuración fiscal. Podés emitirla a mano desde el pedido.                                                |

---

## 📞 ¿Necesitás ayuda?

- 📱 **Soporte Directo WhatsApp**: <a href="{{WHATSAPP_URL}}?" target="_blank">{{WHATSAPP_DISPLAY}}</a>
