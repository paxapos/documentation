# Reservas

<div id="reservas"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Canales e IA** → **Reservas**  
> **¿Quién lo usa?:** Dueños y encargados de salón

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Define la capacidad de tu salón y las reglas que sigue el **asistente virtual de IA** para aceptar reservas online de tus clientes por WhatsApp o el chat de pedimelo.online.

1. **Reservas online (asistente virtual):** activación, capacidad del salón y email para grupos grandes.
2. **Aviso de reservas próximas en el salón:** con cuántos minutos de anticipación una reserva aparece en el mapa de salón para poder recepcionarla.
3. **Reglas y restricciones:** las instrucciones en lenguaje natural que sigue la IA.
4. **Turnos:** accesos directos a horarios y al calendario de reservas.
5. **Grilla hotelera:** solo si tu comercio es un hotel.

![Pantalla de Reservas](images/manual/configuracion-general/08-reservas.png)

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Edición de Salón** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Para reservas online por IA, tener activo el asistente virtual — ver [Inteligencia Artificial](/user-guide/inteligencia-artificial).

---

## 🎨 Campos: ¿Qué es cada cosa?

<div id="campos-que-es-cada-cosa"></div>

### Reservas online (asistente virtual)

| Campo | ¿Qué es? |
|---|---|
| **Habilitar reservas online en el chatbot** | Si está activo, el asistente virtual gestiona reservas. Si está apagado, el bot le avisa al cliente que no se aceptan reservas online. |
| **Capacidad total del salón (cubiertos)** | Total de personas que puede recibir el salón — se usa para mostrar la ocupación en el calendario. |
| **Email para grupos grandes** | A dónde derivar consultas de grupos o eventos especiales que la IA no gestiona sola. |

### Aviso de reservas próximas en el salón

| Campo | ¿Qué es? |
|---|---|
| **Minutos antes de la reserva** | Cuántos minutos antes de la hora reservada empieza a aparecer en el mapa de salón y en la adición, para poder recepcionarla y abrir la mesa. Por defecto, 90 minutos. |

### Reglas y restricciones (las interpreta la IA)

| Campo | ¿Qué es? |
|---|---|
| **Reglas para el asistente** | Texto libre en lenguaje natural con las reglas que el asistente debe respetar al aceptar reservas. Sé específico con días, horarios y cantidad de personas — por ejemplo: "Los sábados a la noche, máximo 10 reservas antes de las 21:00hs" o "No aceptar mesas de más de 30 cubiertos (derivar a email)". El asistente respeta estas reglas con los clientes; si el dueño pide una reserva por Telegram, el bot permite saltearlas pero avisa. |

### Turnos

Links a **Administrar turnos** (horarios y límite de comensales por turno) y a **Ver calendario de reservas**.

### Grilla hotelera

Solo aparece si tu comercio tiene activo el módulo de reservas de hotel.

| Campo | ¿Qué es? |
|---|---|
| **Hora de Checkout** | El horario en el que los huéspedes deben dejar la habitación. |
| **Días a mostrar** | Cantidad de días visibles en la grilla (por defecto 140). Si tu computadora va lenta con muchos días, bajá este número. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Activar las reservas online por IA

<div id="paso-1-activar-las-reservas-online-por-ia"></div>

1. Andá a **Configuración → Reservas**.
2. Activá **Habilitar reservas online en el chatbot**.
3. Completá **Capacidad total del salón** y el **Email para grupos grandes**.
4. En **Reglas para el asistente**, escribí las condiciones de tu comercio (días sin reservas, cupos máximos, etc.).
5. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El asistente acepta reservas que no querías (ej. grupos muy grandes). | Las **Reglas para el asistente** no son lo suficientemente específicas. | Reescribí la regla siendo bien concreto: días, horarios y cantidad de personas exactas. |
| Una reserva confirmada no aparece en el mapa de salón todavía. | Todavía no llegó a la ventana de aviso configurada en **Minutos antes de la reserva**. | Es el comportamiento esperado — aparece automáticamente cuando falten esos minutos. Podés bajar el valor si querés verla con más anticipación. |
| No veo el bloque "Grilla hotelera". | Tu comercio no tiene activo el módulo de reservas de hotel. | Solo aplica a comercios de tipo hotel — no hace falta si sos gastronómico. |
