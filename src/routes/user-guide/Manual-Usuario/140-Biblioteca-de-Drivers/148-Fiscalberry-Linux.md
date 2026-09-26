# Instalar Fiscalberry en Linux

<div id="instalar-fiscalberry-en-linux"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Impresión** → bloque **Descargar Fiscalberry**  
> **¿Quién lo usa?:** Dueños, encargados o quien instala la computadora del local

---

## 🎯 ¿Qué es y para qué sirve?

<div id="que-es-y-para-que-sirve"></div>

**Fiscalberry** es el programa que conecta PaxaPOS con las impresoras de tu local. Se instala en la computadora que está conectada a las impresoras.

Sin Fiscalberry **no sale impreso nada**: ni comandas, ni remitos, ni facturas.

> ⚠️ **MUY IMPORTANTE:** Fiscalberry tiene que estar **siempre abierto**. Si lo cerrás, **no imprime**.

---

## 🔑 Requisitos para empezar

<div id="requisitos-para-empezar"></div>

- Una computadora con **Linux** y escritorio (con ventanas), conectada a internet.
- Tu usuario y contraseña de PaxaPOS.
- La impresora conectada a la computadora por **USB** o a la misma red por **Ethernet**. Ver [Gestión de Impresoras](/user-guide/impresoras).

---

## 📑 Guía Paso a Paso

<div id="guia-paso-a-paso"></div>

### Paso 1: Descargá Fiscalberry

<div id="paso-1-descarga-fiscalberry"></div>

1. En la computadora del local, entrá a PaxaPOS.
2. Andá a **Configuración** → **Impresión**.
<!-- FOTO: 148-01-menu-configuracion-impresion -->
3. Buscá el bloque **Descargar Fiscalberry** (está debajo de **Servidor de impresión**).
<!-- FOTO: 148-02-bloque-descargar-fiscalberry -->
4. Tocá el botón de **Linux**. Se descarga un archivo comprimido.
<!-- FOTO: 148-03-boton-descargar-linux -->

### Paso 2: Descomprimí el archivo

<div id="paso-2-descomprimi-el-archivo"></div>

1. Abrí la carpeta **Descargas**.
2. Hacé **clic derecho** sobre el archivo de Fiscalberry → **Extraer aquí**.
<!-- FOTO: 148-04-extraer-archivo -->
3. Se crea una carpeta con Fiscalberry adentro. Dejala en un lugar fijo y no la borres.

### Paso 3: Abrí Fiscalberry

<div id="paso-3-abri-fiscalberry"></div>

1. Entrá a la carpeta que se creó.
2. Hacé **doble clic** en el programa de Fiscalberry.
<!-- FOTO: 148-05-abrir-fiscalberry -->
3. Se abre la ventana de Fiscalberry. **No la cierres.**
<!-- FOTO: 148-06-ventana-fiscalberry -->

### Paso 4: Vinculá Fiscalberry con tu comercio

<div id="paso-4-vincula-fiscalberry-con-tu-comercio"></div>

La primera vez, hay que decirle a PaxaPOS que esta computadora es la que imprime.

1. En la ventana de Fiscalberry aparece un **link** o un **código QR**. Tocá el link (o escaneá el QR).
<!-- FOTO: 148-07-link-qr-fiscalberry -->
2. Se abre la pantalla **Adoptar Servidor de Impresión** de PaxaPOS.
3. Si te pide **Inicio de sesión requerido**, tocá **Iniciar Sesión** y entrá con tu usuario y contraseña de PaxaPOS.
4. En **Alias para identificar el servidor de impresión**, escribí un nombre para reconocer la computadora (ejemplo: *PC Cocina*).
<!-- FOTO: 148-08-campo-alias -->
5. En **Seleccione el sitio**, elegí tu comercio.
6. Tocá **Adoptar Servidor de Impresión**.
<!-- FOTO: 148-09-boton-adoptar -->

> ⚠️ Si no elegís un sitio, Fiscalberry **no se puede usar**.

### Paso 5: Elegí este Fiscalberry como servidor de impresión

<div id="paso-5-elegi-este-fiscalberry"></div>

1. En PaxaPOS, andá a **Configuración** → **Impresión**.
2. En **Servidor de impresión**, elegí el Fiscalberry que acabás de adoptar.
<!-- FOTO: 148-10-servidor-de-impresion -->
3. Guardá los cambios.

> ➡️ **Siguiente paso:** dá de alta tus impresoras en PaxaPOS. Ver [Gestión de Impresoras](/user-guide/impresoras).

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| No imprime nada. | Fiscalberry está **cerrado**. | Abrilo de nuevo (Paso 3). |
| Después de reiniciar la computadora, no imprime. | Fiscalberry quedó cerrado. | Abrí Fiscalberry de nuevo (Paso 3). |
| No encuentro mi Fiscalberry en **Servidor de impresión**. | Todavía no lo adoptaste. | Hacé el Paso 4. |

> 🔗 ¿Usás otro sistema? [Fiscalberry en Windows](/user-guide/fiscalberry-windows) · [Fiscalberry en Android](/user-guide/fiscalberry-android)
