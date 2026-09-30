# Instalar Fiscalberry en Windows

<div id="instalar-fiscalberry-en-windows"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Impresión** → bloque **Descargar Fiscalberry**  
> **¿Quién lo usa?:** Dueños, encargados o quien instala la computadora del local

---

## 🎯 ¿Qué es y para qué sirve?

<div id="que-es-y-para-que-sirve"></div>

**Fiscalberry** es el programa que conecta PaxaPOS con las impresoras de tu local. Se instala en la computadora que está conectada a las impresoras (la de la caja, por ejemplo).

Sin Fiscalberry **no sale impreso nada**: ni comandas, ni remitos, ni facturas.

> ⚠️ **MUY IMPORTANTE:** Fiscalberry tiene que estar **siempre abierto**. Si lo cerrás, **no imprime**. Por eso, en esta guía también lo dejamos configurado para que **se abra solo** cada vez que prendés la computadora.

---

## 🔑 Requisitos para empezar

<div id="requisitos-para-empezar"></div>

- Una computadora con **Windows**, conectada a internet.
- Tu usuario y contraseña de PaxaPOS.
- La impresora conectada a la computadora por **USB** (con su driver instalado) o a la misma red por **Ethernet**. Ver [Gestión de Impresoras](/user-guide/impresoras).

---

## 📑 Guía Paso a Paso

<div id="guia-paso-a-paso"></div>

### Paso 1: Descargá Fiscalberry

<div id="paso-1-descarga-fiscalberry"></div>

1. En la computadora del local, entrá a PaxaPOS.
2. Andá a **Configuración** → **Impresión**.
<!-- FOTO: 147-01-menu-configuracion-impresion -->
3. Buscá el bloque **Descargar Fiscalberry** (está debajo de **Servidor de impresión**).
<!-- FOTO: 147-02-bloque-descargar-fiscalberry -->
4. Tocá el botón de **Windows**. Se descarga un archivo **.zip**.
<!-- FOTO: 147-03-boton-descargar-windows -->

### Paso 2: Descomprimí el archivo

<div id="paso-2-descomprimi-el-archivo"></div>

1. Abrí la carpeta **Descargas**.
2. Hacé **clic derecho** sobre el archivo **.zip** de Fiscalberry → **Extraer todo** → **Extraer**.
<!-- FOTO: 147-04-extraer-zip -->
3. Se crea una carpeta con Fiscalberry adentro.

> 💡 **Consejo útil:** Guardá esa carpeta en un lugar fijo (por ejemplo, en **Documentos**) y no la borres. El paso 4 necesita que el programa quede siempre en el mismo lugar.

### Paso 3: Abrí Fiscalberry

<div id="paso-3-abri-fiscalberry"></div>

1. Entrá a la carpeta que se creó.
2. Hacé **doble clic** en el archivo de Fiscalberry que termina en **.exe**.
<!-- FOTO: 147-05-abrir-fiscalberry-exe -->
3. Se abre la ventana de Fiscalberry. **No la cierres.**
<!-- FOTO: 147-06-ventana-fiscalberry -->

### Paso 4: Dejalo en inicio automático

<div id="paso-4-dejalo-en-inicio-automatico"></div>

Así Fiscalberry se abre solo cada vez que prendés la computadora.

**A. Creá un acceso directo**

1. Hacé **clic derecho** sobre el archivo **.exe** de Fiscalberry.
2. Tocá **Mostrar más opciones** → **Crear acceso directo**.
<!-- FOTO: 147-07-crear-acceso-directo -->
3. Aparece un archivo nuevo con el mismo nombre y al final **"- Acceso directo"**. Ese es el acceso directo.
<!-- FOTO: 147-08-archivo-acceso-directo -->

**B. Mandalo a la carpeta de inicio de Windows**

1. En el teclado, apretá juntas las teclas **Windows** + **R**. Se abre la ventana **Ejecutar**.
2. Escribí `shell:startup` y apretá **Enter**.
<!-- FOTO: 147-09-ejecutar-shell-startup -->
3. Se abre la carpeta **Inicio**.
4. **Arrastrá** el acceso directo (el que termina en "- Acceso directo") a esa carpeta.
<!-- FOTO: 147-10-arrastrar-a-carpeta-inicio -->

¡Listo! La próxima vez que prendas la computadora, Fiscalberry se va a abrir solo.

### Paso 5: Vinculá Fiscalberry con tu comercio

<div id="paso-5-vincula-fiscalberry-con-tu-comercio"></div>

La primera vez, hay que decirle a PaxaPOS que esta computadora es la que imprime.

1. En la ventana de Fiscalberry aparece un **link** o un **código QR**. Tocá el link (o escaneá el QR).
<!-- FOTO: 147-11-link-qr-fiscalberry -->
2. Se abre la pantalla **Adoptar Servidor de Impresión** de PaxaPOS.
3. Si te pide **Inicio de sesión requerido**, tocá **Iniciar Sesión** y entrá con tu usuario y contraseña de PaxaPOS.
4. En **Alias para identificar el servidor de impresión**, escribí un nombre que te ayude a reconocer la computadora (ejemplo: *PC Cajero 1*).
<!-- FOTO: 147-12-campo-alias -->
5. En **Seleccione el sitio**, elegí tu comercio.
6. Tocá **Adoptar Servidor de Impresión**.
<!-- FOTO: 147-13-boton-adoptar -->

> ⚠️ Si no elegís un sitio, Fiscalberry **no se puede usar**.

### Paso 6: Elegí este Fiscalberry como servidor de impresión

<div id="paso-6-elegi-este-fiscalberry"></div>

1. En PaxaPOS, andá a **Configuración** → **Impresión**.
2. En **Servidor de impresión**, elegí el Fiscalberry que acabás de adoptar (el del alias que le pusiste).
<!-- FOTO: 147-14-servidor-de-impresion -->
3. Guardá los cambios.

> ➡️ **Siguiente paso:** dá de alta tus impresoras en PaxaPOS. Ver [Gestión de Impresoras](/user-guide/impresoras).

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| No imprime nada. | Fiscalberry está **cerrado**. | Abrilo (Paso 3) y revisá que esté en inicio automático (Paso 4). |
| Después de reiniciar la computadora, no imprime. | El acceso directo no quedó en la carpeta **Inicio**. | Repetí el Paso 4. |
| El acceso directo dejó de funcionar. | Moviste o borraste la carpeta de Fiscalberry. | Volvé a descomprimir Fiscalberry en un lugar fijo y repetí los pasos 3 y 4. |
| No encuentro mi Fiscalberry en **Servidor de impresión**. | Todavía no lo adoptaste. | Hacé el Paso 5. |

> 🔗 ¿Usás otro sistema? [Fiscalberry en Linux](/user-guide/fiscalberry-linux) · [Fiscalberry en Android](/user-guide/fiscalberry-android)
