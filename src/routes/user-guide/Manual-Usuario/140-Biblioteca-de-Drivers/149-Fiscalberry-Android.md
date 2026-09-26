# Instalar Fiscalberry en Android

<div id="instalar-fiscalberry-en-android"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Impresión** → bloque **Descargar Fiscalberry**  
> **¿Quién lo usa?:** Dueños, encargados o quien configura la tablet o el celular del local

---

## 🎯 ¿Qué es y para qué sirve?

<div id="que-es-y-para-que-sirve"></div>

**Fiscalberry** es la aplicación que conecta PaxaPOS con las impresoras de tu local. En Android se instala en la tablet o el celular que va a mandar a imprimir.

Sin Fiscalberry **no sale impreso nada**: ni comandas, ni remitos, ni facturas.

> ⚠️ **MUY IMPORTANTE:**
> - Fiscalberry tiene que estar **siempre abierto**. Si lo cerrás, **no imprime**.
> - En Android, Fiscalberry funciona **solo con impresoras de red** (conectadas por **Ethernet** a la misma red del local).

---

## 🔑 Requisitos para empezar

<div id="requisitos-para-empezar"></div>

- Una tablet o celular **Android**, conectado al **mismo WiFi / red** que la impresora.
- Tu usuario y contraseña de PaxaPOS.
- Una impresora **de red** (Ethernet) encendida y conectada. Ver [Gestión de Impresoras](/user-guide/impresoras).

---

## 📑 Guía Paso a Paso

<div id="guia-paso-a-paso"></div>

### Paso 1: Descargá Fiscalberry

<div id="paso-1-descarga-fiscalberry"></div>

1. Desde la tablet o el celular, entrá a PaxaPOS.
2. Andá a **Configuración** → **Impresión**.
<!-- FOTO: 149-01-menu-configuracion-impresion -->
3. Buscá el bloque **Descargar Fiscalberry** (está debajo de **Servidor de impresión**).
<!-- FOTO: 149-02-bloque-descargar-fiscalberry -->
4. Tocá el botón de **Android**. Se descarga el instalador (un archivo **.apk**). En Android **no hace falta descomprimir** nada.
<!-- FOTO: 149-03-boton-descargar-android -->

### Paso 2: Instalá la aplicación

<div id="paso-2-instala-la-aplicacion"></div>

1. Abrí el archivo **.apk** que se descargó (lo encontrás en las notificaciones o en la carpeta **Descargas**).
<!-- FOTO: 149-04-abrir-apk -->
2. Tocá **Instalar**. Si Android te pide permiso para instalar aplicaciones descargadas, aceptalo.
<!-- FOTO: 149-05-instalar-apk -->

### Paso 3: Abrí Fiscalberry

<div id="paso-3-abri-fiscalberry"></div>

1. Abrí la aplicación **Fiscalberry**.
<!-- FOTO: 149-06-app-fiscalberry -->
2. **No la cierres** mientras estés trabajando.

### Paso 4: Vinculá Fiscalberry con tu comercio

<div id="paso-4-vincula-fiscalberry-con-tu-comercio"></div>

1. En Fiscalberry aparece un **link** o un **código QR**. Tocá el link (o escaneá el QR).
<!-- FOTO: 149-07-link-qr-fiscalberry -->
2. Se abre la pantalla **Adoptar Servidor de Impresión** de PaxaPOS.
3. Si te pide **Inicio de sesión requerido**, tocá **Iniciar Sesión** y entrá con tu usuario y contraseña de PaxaPOS.
4. En **Alias para identificar el servidor de impresión**, escribí un nombre para reconocer el equipo (ejemplo: *Tablet Salón*).
<!-- FOTO: 149-08-campo-alias -->
5. En **Seleccione el sitio**, elegí tu comercio.
6. Tocá **Adoptar Servidor de Impresión**.
<!-- FOTO: 149-09-boton-adoptar -->

> ⚠️ Si no elegís un sitio, Fiscalberry **no se puede usar**.

### Paso 5: Elegí este Fiscalberry como servidor de impresión

<div id="paso-5-elegi-este-fiscalberry"></div>

1. En PaxaPOS, andá a **Configuración** → **Impresión**.
2. En **Servidor de impresión**, elegí el Fiscalberry que acabás de adoptar.
<!-- FOTO: 149-10-servidor-de-impresion -->
3. Guardá los cambios.

> ➡️ **Siguiente paso:** dá de alta tu impresora de red en PaxaPOS. Ver [Gestión de Impresoras](/user-guide/impresoras).

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| No imprime nada. | La aplicación Fiscalberry está **cerrada**. | Abrila de nuevo (Paso 3). |
| No imprime en una impresora USB. | En Android solo funcionan **impresoras de red**. | Usá una impresora conectada por Ethernet, o instalá Fiscalberry en una computadora ([Windows](/user-guide/fiscalberry-windows) o [Linux](/user-guide/fiscalberry-linux)). |
| No imprime en la impresora de red. | La tablet y la impresora no están en la misma red. | Conectá la tablet al WiFi del local y revisá la IP de la impresora en [Gestión de Impresoras](/user-guide/impresoras). |
| Android no me deja instalar el archivo. | Falta dar permiso para instalar aplicaciones descargadas. | Aceptá el permiso que te pide Android y volvé a abrir el **.apk**. |
