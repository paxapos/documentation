# Configuración de Procesadores de Pago

<div id="configuracion-de-procesadores-de-pago"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Medios de Pago** → **Configuración de Procesadores**
> **¿Quién lo usa?:** Dueños y administradores del comercio

> 🎯 **¿Para qué sirve esto?**
> Acá elegís con qué empresa cobrás cuando el cliente paga con QR, con un link o con una terminal de tarjetas.
> Esa empresa se llama "procesador". Por ejemplo: *MercadoPago*, *Payway* o *MacroClick*.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso **Contabilidad** de Finanzas en [Permisos por Rol](/user-guide/permisos-por-rol).
- Tenés que tener una cuenta abierta en el procesador que vas a usar. Por ejemplo, una cuenta de MercadoPago.

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Medios de Pago marcado en rojo](images/manual/30-medios-de-pago/31-00a-menu-grupo-payments.png)

1. En el menú de la izquierda, tocá **Medios de Pago**.
2. Se abre la lista de opciones de ese grupo.

![Opción Configuración de Procesadores marcada en rojo en el menú lateral](images/manual/30-medios-de-pago/31-00b-menu-opcion-processors.png)

3. Tocá **Configuración de Procesadores**.

![Pantalla Medios de Pago con las tres tarjetas: Cobro con QR, Link de Pago y Terminal SmartPOS](images/manual/30-medios-de-pago/31-01-pantalla-processors.png)

Así se ve la pantalla. Arriba hay tres tarjetas, una por cada forma de cobrar.

---

## 📱 Paso 2: Elegí el procesador para cobrar con QR

<div id="paso-2-elegi-el-procesador-para-cobrar-con-qr"></div>

![Tarjeta Cobro con QR con las opciones MercadoPago, MacroClick y Deshabilitado](images/manual/30-medios-de-pago/31-02-campo-data-paymentsconfig-qr-processor.png)

1. Mirá la tarjeta **Cobro con QR**. Es la de la izquierda.
2. Tocá el nombre del procesador que querés usar. Por ejemplo: **MercadoPago**.
3. La opción elegida queda con borde azul.
4. Si no cobrás con QR, tocá **Deshabilitado**.

---

## 🔗 Paso 3: Elegí el procesador para el link de pago

<div id="paso-3-elegi-el-procesador-para-el-link-de-pago"></div>

![Tarjeta Link de Pago con las opciones MercadoPago, Payway, Pedimelo Online y Deshabilitado](images/manual/30-medios-de-pago/31-03-campo-data-paymentsconfig-payment-link.png)

1. Mirá la tarjeta **Link de Pago**. Es la del medio.
2. El link de pago es el que le mandás al cliente por WhatsApp o por email.
3. Tocá el procesador que querés usar, o **Deshabilitado** si no lo usás.

---

## 💳 Paso 4: Elegí el procesador para la terminal de tarjetas

<div id="paso-4-elegi-el-procesador-para-la-terminal-de-tarjetas"></div>

![Tarjeta Terminal SmartPOS con las opciones MercadoPago, Payway y Deshabilitado](images/manual/30-medios-de-pago/31-04-campo-data-paymentsconfig-smartpos-pro.png)

1. Mirá la tarjeta **Terminal SmartPOS**. Es la de la derecha.
2. Es la maquinita donde el cliente pasa o apoya la tarjeta.
3. Tocá la empresa de tu terminal, o **Deshabilitado** si no tenés una.

---

## 💾 Paso 5: Guardá lo que elegiste

<div id="paso-5-guarda-lo-que-elegiste"></div>

> ⚠️ **Atención:** al guardar cambia la forma de cobrar de todo el comercio. Revisá bien las tres tarjetas antes.

![Pantalla con el botón azul Guardar Configuración marcado en rojo, debajo de las tarjetas](images/manual/30-medios-de-pago/31-05-donde-esta-boton-guardar-configuracion.png)

1. Tocá el botón azul **Guardar Configuración**. Está debajo de las tres tarjetas.
2. La pantalla se vuelve a cargar con lo que elegiste.
3. Más abajo aparece una solapa por cada procesador que elegiste.

---

## ⚙️ Paso 6: Conectá tu cuenta del procesador

<div id="paso-6-conecta-tu-cuenta-del-procesador"></div>

Después de guardar, en la parte de abajo hay una solapa por cada procesador que usás.

### Opción A: Vincular con MercadoPago (la más fácil)

<div id="opcion-a-vincular-con-mercadopago"></div>

![Pantalla con el botón naranja Vincular con MercadoPago marcado en rojo](images/manual/30-medios-de-pago/31-11-donde-esta-boton-vincular-mercadopago.png)

1. Tocá el botón naranja **Vincular con MercadoPago**.
2. Se abre la página de MercadoPago.
3. Entrá con tu usuario de MercadoPago y aceptá darle permiso a PaxaPOS.
4. Al terminar, volvés a PaxaPOS con la cuenta conectada.

> 💡 **Consejo útil:** así no tenés que copiar ninguna clave a mano.

### Opción B: Configurar Credenciales

<div id="opcion-b-configurar-credenciales"></div>

![Pantalla con el botón azul Configurar Credenciales marcado en rojo](images/manual/30-medios-de-pago/31-09-donde-esta-boton-configurar-credenciales.png)

1. Tocá el botón azul **Configurar Credenciales**.
2. Se abre la pantalla de ese procesador.

![Pantalla MercadoPago con el estado de la cuenta y los canales de cobro](images/manual/30-medios-de-pago/31-15-pantalla-mercadopago.png)

3. Arriba ves si la cuenta está bien conectada.
4. Si ves un cuadro rojo que dice **No pudimos verificar la cuenta**, tocá **Reconectar con MercadoPago**.
5. En **Canales de cobro** ves con qué cobra hoy cada forma de pago.

![Pantalla MercadoPago con el botón Volver a medios de pago marcado en rojo](images/manual/30-medios-de-pago/31-16-donde-esta-boton-volver-a-medios-de-pago.png)

6. Cuando termines, tocá **Volver a medios de pago**. Está abajo de todo.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **No aparece Medios de Pago en el menú** | Tu usuario no tiene el permiso **Contabilidad** de Finanzas. | Pedile al dueño que lo active en [Permisos por Rol](/user-guide/permisos-por-rol). |
| **Abajo no aparece ninguna solapa de procesador** | Todavía no elegiste ni guardaste un procesador. | Elegí uno en alguna tarjeta y tocá **Guardar Configuración**. |
| **Cuadro rojo "No pudimos verificar la cuenta"** | La conexión con MercadoPago venció o se cortó. | Tocá **Configurar Credenciales** y después **Reconectar con MercadoPago**. |
| **El cliente no puede pagar con QR o con link** | Esa tarjeta quedó en **Deshabilitado**. | Elegí un procesador en esa tarjeta y guardá. |
