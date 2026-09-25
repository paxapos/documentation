# Comercio

<div id="comercio"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Puesta en marcha** → **Comercio**  
> **¿Quién lo usa?:** Dueños y administradores del comercio

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Es la identidad básica de tu comercio: cómo se llama, cómo lo contactan tus clientes, en qué moneda y zona horaria trabaja.

1. **Datos generales:** nombre de fantasía, logo, mail y valor del cubierto.
2. **Contacto y redes:** teléfono, dirección, email, sitio web y redes sociales — estos datos alimentan la ficha pública del comercio y el bot de WhatsApp.
3. **Apariencia:** el theme visual del sistema.
4. **Ubicación e idioma:** coordenadas del local, idioma, moneda y zona horaria.

![Pantalla de Comercio](images/manual/configuracion-general/01-comercio.png)

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Configuración del comercio** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Campos: ¿Qué es cada cosa?

<div id="campos-que-es-cada-cosa"></div>

### Datos generales

| Campo | ¿Qué es? |
|---|---|
| **Nombre de fantasía** | El nombre con el que se muestra tu comercio en todo el sistema. |
| **URL del logo** | La imagen que se ve en el menú digital, tickets y comprobantes. |
| **Mail de la empresa** | Casilla de contacto general del comercio. |
| **Tipo de comercio** | Restaurante, hotel, etc. — solo lo puede cambiar un superadministrador, porque afecta la terminología de todo el sistema. |
| **Valor del cubierto o servicio de mesa** | Lo que se cobra por comensal. Dejalo en 0 si no cobrás cubierto. Solo aplica a comercios gastronómicos. |

### Contacto y redes

Estos datos se usan en la ficha pública del comercio y en las respuestas del asistente virtual por WhatsApp — antes no tenían ninguna pantalla propia de edición.

| Campo | ¿Qué es? |
|---|---|
| **Teléfono** | El que ven tus clientes para contactarte. |
| **Dirección** | Dirección comercial (no necesariamente la fiscal). |
| **Email de contacto** | Distinto del "Mail de la empresa" de Datos generales — este es el que se muestra públicamente. |
| **Sitio web** | Tu página propia, si tenés. |
| **Instagram / Facebook / Twitter (X) / TikTok** | Usuario o link de cada red social. |

### Apariencia

| Campo | ¿Qué es? |
|---|---|
| **Theme visual del comercio** | El estilo visual del sistema. Si elegís "usar theme predeterminado", se aplica el que definió PaxaPOS de forma global. |

### Ubicación e idioma

| Campo | ¿Qué es? |
|---|---|
| **Latitud / Longitud** | Coordenadas del local — las usa Delivery para calcular la distancia y el costo de envío. |
| **HTML lang** | Idioma declarado del sitio (afecta accesibilidad y SEO, no traduce la interfaz). |
| **Moneda** | ⚠️ Si tu comercio ya tiene ventas cobradas, queda **congelada**: no se puede editar. Para operar en otra moneda hace falta un comercio nuevo. |
| **Zona horaria** | Afecta los horarios de todos los reportes, cierres de caja y comandas. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Actualizar datos de contacto y logo

<div id="paso-1-actualizar-datos-de-contacto-y-logo"></div>

1. Andá a **Configuración → Comercio**.
2. Cargá el **Nombre de fantasía** y la **URL del logo**.
3. Completá el bloque **Contacto y redes** con los datos que quieras mostrar a tus clientes.
4. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El logo sale distorsionado en el ticket o en el menú digital. | La imagen es muy grande o no es cuadrada. | Subí una imagen en formato PNG o JPG, preferentemente cuadrada. |
| No puedo cambiar la moneda del comercio. | El comercio ya tiene ventas cobradas: la moneda queda congelada a propósito, para no mezclar montos históricos en dos monedas distintas. | Si de verdad necesitás otra moneda, hay que dar de alta un comercio nuevo. |
| Cambié el "Mail de la empresa" pero el bot de WhatsApp sigue dando otro contacto. | El bot usa el **Email de contacto** del bloque "Contacto y redes", no el "Mail de la empresa" de Datos generales — son dos campos distintos. | Completá también el Email de contacto en el bloque "Contacto y redes". |
