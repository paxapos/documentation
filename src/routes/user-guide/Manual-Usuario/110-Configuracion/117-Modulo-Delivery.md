# Delivery y Pedidos Online

<div id="delivery-y-pedidos-online"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Canales e IA** → **Delivery**  
> **¿Quién lo usa?:** Encargados de delivery y administradores

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Controla todo lo relacionado a **pedimelo.online**, tu menú y tienda de pedidos online: si está abierto o cerrado, cómo se calcula el costo de envío, qué mozo recibe esas ventas y el mensaje de WhatsApp para pedidos.

1. **Pedidos online:** apertura, URL del catálogo, horarios y modo de venta.
2. **Entrega y cobertura:** demora estimada, costo por km, imágenes, mozo asignado y menú por defecto.
3. **Ubicación:** la lat/lng del local se carga en Comercio, no acá (para no duplicarla).
4. **Turnos de entrega y procesadores de pago:** accesos directos a otras secciones.

![Pantalla de Delivery](images/manual/configuracion-general/07-delivery.png)

> Esta sección solo aparece si tenés el módulo de Delivery activo (ver [Módulos](/user-guide/modulos)).

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Configurar Delivery** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Tener activo el módulo de Delivery.

---

## 🎨 Campos: ¿Qué es cada cosa?

<div id="campos-que-es-cada-cosa"></div>

### Pedidos online

| Campo | ¿Qué es? |
|---|---|
| **Delivery abierto** | Con esto apagado, pedimelo.online les avisa a tus clientes que no se aceptan pedidos. |
| **URL del pedimelo online** | Tu link público, sin la "/" al final (ej. `https://pedimelo.online/tu-comercio`). |
| **ID Media del catálogo online** | Identificador interno de la imagen/catálogo. |
| **Horario y fechas de atención** | Cuándo se abren y cierran los pedidos online. |
| **Estado inicial de un nuevo pedido** | Con qué estado nace cada pedido que entra por delivery. |
| **Mensaje al cliente antes de asignar mesa** | Texto que ve el cliente en pedimelo.online antes del checkout. |
| **Modo del catálogo online** | Solo Menú (sin botones para comprar) o Activar Pedidos Online. |
| **Teléfono de WhatsApp para pedidos** | El número al que llegan las consultas y pedidos de tus clientes. |

### Entrega y cobertura

| Campo | ¿Qué es? |
|---|---|
| **Tiempo promedio de demora (segundos)** | Ej: 2400 = 40 minutos. |
| **Valor por Km.** | Lo que se le suma al pedido por cada kilómetro de distancia. |
| **URL a una imagen de tu comercio** | Imagen que se muestra en el catálogo online. |
| **Imagen de fondo** | Fondo del catálogo online. |
| **Mozo donde irán ventas por delivery** | A qué mozo/vendedor quedan vinculadas las ventas que entran por este canal. |
| **Menú por default al ir al link pedimelo.online** | Qué menú ven los clientes al entrar. |
| **Tipo de pago si hay MercadoPago** | Con qué tipo de pago queda marcada la mesa cuando el cliente paga con MercadoPago. |

### Ubicación

La latitud y longitud del local (usadas para calcular el costo de envío) se cargan en **[Comercio](/user-guide/comercio)**, para no tener el mismo dato en dos lugares distintos.

### Turnos de entrega

Link a **Administrar turnos**: define los horarios que se ofrecen para posponer un pedido de delivery.

### Procesadores de pago

MercadoPago, Banco Macro (MacroClick) y Payway/Prisma se configuran en la sección **[Cobros y pagos](/user-guide/cobros-y-pagos)**, no acá.

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Abrir el delivery y configurar los horarios

<div id="paso-1-abrir-el-delivery-y-configurar-los-horarios"></div>

1. Andá a **Configuración → Delivery**.
2. Activá **Delivery abierto**.
3. Completá el **Horario y fechas de atención**.
4. Tocá **Guardar**.

### Paso 2: Configurar el costo de envío

<div id="paso-2-configurar-el-costo-de-envio"></div>

1. En el bloque **Entrega y cobertura**, completá **Valor por Km.**
2. Verificá que la ubicación de tu comercio esté cargada en [Comercio](/user-guide/comercio) — sin eso, el sistema no puede calcular la distancia.
3. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Los clientes ven "no se aceptan pedidos" aunque el local está abierto. | **Delivery abierto** está desactivado, o el horario configurado no incluye la hora actual. | Revisá ambos campos en el bloque **Pedidos online**. |
| El costo de envío no se calcula. | Falta la latitud/longitud del comercio. | Cargalas en [Comercio](/user-guide/comercio) → Ubicación e idioma. |
| Las ventas de delivery no aparecen asignadas a nadie en los reportes de mozos. | No elegiste un **Mozo donde irán ventas por delivery**. | Completá ese campo en el bloque **Entrega y cobertura**. |
| No veo esta sección en el menú. | El módulo de Delivery está apagado en tu plan. | Activalo en [Módulos](/user-guide/modulos). |
