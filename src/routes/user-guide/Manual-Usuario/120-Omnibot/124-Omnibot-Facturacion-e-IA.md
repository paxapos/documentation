# Omnibot: facturación e inteligencia artificial

<div id="omnibot-facturacion-e-ia"></div>

> **¿Dónde está en el sistema?:** Omnibot → **Configuración** → **Facturación e IA**.
> **¿Quién lo usa?:** Dueño o administrador del comercio.

> 🎯 **¿Para qué sirve esto?**
> Para saber si la inteligencia artificial de tu bot está encendida, cómo se cobra, dónde ves lo que llevás gastado y cómo se paga.

---

## 💵 Cómo se cobra Omnibot

<div id="como-se-cobra"></div>

- Omnibot **no tiene abono mensual**.
- Se cobra **solo lo que el bot usa de inteligencia artificial**: cada respuesta que piensa tiene un costo chico, y se suman a lo largo del mes.
- Ese importe aparece en tu **liquidación mensual de PaxaPOS**, en el renglón **Inteligencia artificial**, junto con el resto de tus consumos.
- La liquidación se paga con **MercadoPago**: te llega por mail un link de pago, igual que el resto del servicio.

> ⚠️ **Importante:** los mensajes que **vos iniciás** por WhatsApp (avisos y campañas con plantillas) los cobra **Meta** por separado, al medio de pago que cargues en Meta. Está explicado en [Conectar tu WhatsApp con Meta](/user-guide/omnibot-conectar-whatsapp-con-meta#despues-de-conectar).

---

## 🚦 Qué te dice la pantalla

<div id="que-te-dice-la-pantalla"></div>

Arriba de todo, la pantalla muestra en qué estado está la inteligencia artificial de tu comercio.

### IA apagada: hay que encenderla

<div id="ia-apagada"></div>

![Pantalla Facturación e IA con el cuadro Encendé la IA para que tu bot responda y el botón Encender la IA en PaxaPOS](images/manual/120-omnibot/124-01-ia-apagada.png)

1. Hacé clic en **Encender la IA en PaxaPOS**. Se abre PaxaPOS en otra pestaña, en la pantalla **Encendé Omnibot**.
2. Leé cómo se cobra y los términos y condiciones, tildá la aceptación y tocá **Encender Omnibot**.
3. Volvé a la pestaña de Omnibot. La pantalla se actualiza sola; si no, tocá **Ya la encendí, actualizar**.

### IA encendida

<div id="ia-encendida"></div>

![Pantalla Facturación e IA con la etiqueta IA encendida y los botones Ver consumo y tope mensual y Ver liquidaciones y pagar](images/manual/120-omnibot/124-02-ia-encendida.png)

Tu bot ya puede responder. Desde acá tenés dos accesos a PaxaPOS:

- **Ver consumo y tope mensual**: abre tu **Cuenta de facturación**, con lo que llevás gastado en el mes.
- **Ver liquidaciones y pagar**: abre el listado de liquidaciones, con el link de pago de MercadoPago de cada una.

### Tope mensual alcanzado

<div id="tope-alcanzado"></div>

Si le pusiste un tope mensual a la inteligencia artificial y lo alcanzaste, el bot deja de responder solo y las conversaciones quedan en la **Bandeja** para que las atienda una persona. El día 1 vuelve a encenderse solo. Para seguir antes, tocá **Cambiar el tope**.

### Clave propia

<div id="clave-propia"></div>

Si tu comercio usa su propia clave de Gemini, PaxaPOS no te cobra el uso: lo paga tu cuenta de Google directamente.

---

## 🧯 Poné un tope al gasto (recomendado)

<div id="pone-un-tope"></div>

Para que nunca te sorprenda una cifra a fin de mes:

1. En PaxaPOS, hacé clic en tu nombre de usuario (arriba a la derecha) → **Cuenta de facturación**.
2. En el cuadro de inteligencia artificial, cargá tu **tope mensual en pesos**.
3. Elegí qué pasa al llegar: **cortar** la IA hasta el mes siguiente o **solo avisarte**.

El paso a paso completo está en [Consumos del mes y tope de inteligencia artificial](/user-guide/facturacion-del-servicio).

---

## 💳 MercadoPago

<div id="mercadopago"></div>

MercadoPago aparece en dos lugares distintos. Conviene no confundirlos:

| Para qué                                   | Dónde se hace                                                                                                 |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| **Pagarle a PaxaPOS** tu liquidación       | Con el link de pago que llega por mail, o desde **Ver liquidaciones y pagar**. No hace falta configurar nada. |
| **Cobrarles a tus clientes** con tu cuenta | En PaxaPOS → **Cuenta de facturación** → **Conectar MercadoPago**. Es tu cuenta, y la plata entra a vos.      |

---

## 🔌 Apagar la IA

<div id="apagar-la-ia"></div>

En PaxaPOS → **Configuración** → **Inteligencia artificial** → **Apagar**. Desde ese momento no se factura más consumo. El bot deja de responder solo y todo lo que entra queda en la **Bandeja** para tu equipo.

> ⚠️ **Importante:** ese interruptor es de todo el comercio. Si lo apagás, también se apagan las otras funciones de PaxaPOS que usan inteligencia artificial, como la lectura de facturas por foto.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="problemas-comunes"></div>

| ¿Qué te pasa?                                                                            | ¿Por qué puede ser?                                                        | ¿Cómo se soluciona?                                                               |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Encendí la IA y la pantalla sigue diciendo que está apagada.                             | La pantalla todavía no volvió a consultar.                                 | Tocá **Ya la encendí, actualizar**.                                               |
| Dice **"No pudimos consultar a PaxaPOS"**.                                               | Un corte momentáneo entre los dos sistemas.                                | Tocá **Reintentar** en un minuto. El bot sigue respondiendo mientras tanto.       |
| No me deja encender la IA.                                                               | Tu usuario no puede editar la configuración del comercio.                  | Pedile al dueño que lo haga, o que te dé el permiso de Configuración del sistema. |
| El bot dejó de responder a mitad de mes.                                                 | Llegaste al tope mensual de inteligencia artificial.                       | Subí o quitá el tope en **Cuenta de facturación**, o esperá al día 1.             |
| No veo el botón de encender, solo **Usar PaxaPOS** y **Usar tu propia clave de Gemini**. | Entraste a Omnibot sin pasar por PaxaPOS y el comercio no quedó vinculado. | Entrá desde la tarjeta **Omnibot (WhatsApp)** de PaxaPOS.                         |
