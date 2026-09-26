# Gestión de Impresoras

<div id="gestion-de-impresoras"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Tablas maestras** → **Impresión y multimedia** → **Impresoras**  
> **¿Quién lo usa?:** Dueños, Administradores y Soporte Técnico

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Acá le decís a PaxaPOS **qué impresoras tiene tu local** (Cocina, Barra, Caja, etc.) y **cómo están conectadas**. Con eso, cada comanda, remito o factura sale por la impresora correcta.

Para imprimir, PaxaPOS usa **Fiscalberry**: un programa que se instala en la computadora del local y que manda los trabajos a las impresoras.

> 🧭 **Primeros pasos para imprimir:**
> 1. **Conectar la impresora** por USB o por Ethernet (Paso 1).
> 2. **Instalar Fiscalberry** y dejarlo siempre abierto (Paso 2).
> 3. **Dar de alta la impresora** en PaxaPOS (Paso 3).
> 4. **Elegir la impresora en cada producto** del menú (Paso 5).

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- La impresora encendida, con papel y conectada (por USB o por Ethernet).
- Fiscalberry instalado y **abierto** en la computadora del local.
- Tener el permiso de **Administración de Impresoras del Sistema** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Campos: ¿Qué es cada cosa?

<div id="botones-y-campos-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace? |
|---|---|---|
| ➕ **Nueva Impresora** | Arriba de la pantalla | Abre el formulario **Agregar Impresora**. |
| **Test de impresión** | Al lado de cada impresora | Manda un ticket de prueba para ver si imprime. |
| **Editar** / **Borrar** | Al lado de cada impresora | Cambia los datos de la impresora o la elimina. |
| **Nombre** | Formulario | Cómo se llama la impresora en PaxaPOS (ejemplo: *Cocina*). |
| **Driver** | Formulario | Cómo está conectada la impresora (ver Paso 3). |
| **Ancho de papel** | Formulario | El tamaño del rollo de papel de la impresora. |
| **Paxaprinter** | Formulario | Qué Fiscalberry manda los trabajos a esta impresora. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Conectá la impresora

<div id="paso-1-conecta-la-impresora"></div>

Hay dos formas de conectar una impresora: **por USB** o **por Ethernet** (cable de red).

#### Si la conectás por USB

<div id="si-la-conectas-por-usb"></div>

1. Conectá el cable USB de la impresora a la computadora donde va a estar Fiscalberry.
2. **Instalá el driver de la impresora. En Windows este paso es obligatorio siempre.** Buscá tu modelo en la [Biblioteca de Drivers](/user-guide/biblioteca-de-drivers).
<!-- FOTO: 120-01-biblioteca-de-drivers -->

> ⚠️ Una impresora **USB** necesita que Fiscalberry esté en una **computadora** (Windows o Linux). En **Android** solo funcionan impresoras de red.

#### Si la conectás por Ethernet (red)

<div id="si-la-conectas-por-ethernet-red"></div>

La impresora y la computadora (o tablet) donde está Fiscalberry tienen que estar en la **misma red**. Para verificarlo:

1. **Sacá la IP de la impresora:** imprimí la **hoja de autotest**. En la mayoría de los modelos se hace así: apagá la impresora, mantené apretado el botón **FEED** y prendela. Sale una hoja con la **IP** (ejemplo: *192.168.1.200*).
<!-- FOTO: 120-02-hoja-autotest -->
2. **Sacá la IP de la computadora:** en Windows, apretá **Windows** + **R**, escribí `cmd` y apretá **Enter**. En la ventana negra escribí `ipconfig` y apretá **Enter**. Buscá la línea **Dirección IPv4** (ejemplo: *192.168.1.35*).
<!-- FOTO: 120-03-ipconfig -->
3. **Compará los 3 primeros números** de las dos IP. Tienen que ser iguales.
   - ✅ *192.168.1*.200 y *192.168.1*.35 → están en la misma red.
   - ❌ *192.168.0*.200 y *192.168.1*.35 → **no** están en la misma red. Pedí ayuda a quien maneja la red del local o a soporte.
4. Anotá la IP de la impresora: la vas a necesitar en el Paso 3.

---

### Paso 2: Instalá Fiscalberry

<div id="paso-2-instala-fiscalberry"></div>

Fiscalberry se descarga desde PaxaPOS, en **Configuración** → **Impresión** → bloque **Descargar Fiscalberry**. Seguí la guía de tu equipo:

| Equipo | Guía |
|---|---|
| 🖥️ Computadora con **Windows** | [Instalar Fiscalberry en Windows](/user-guide/fiscalberry-windows) |
| 🐧 Computadora con **Linux** | [Instalar Fiscalberry en Linux](/user-guide/fiscalberry-linux) |
| 📱 Tablet o celular **Android** (solo impresoras de red) | [Instalar Fiscalberry en Android](/user-guide/fiscalberry-android) |

> ⚠️ **MUY IMPORTANTE:** Fiscalberry tiene que estar **siempre abierto**. Si lo cerrás, **no imprime**.

---

### Paso 3: Dá de alta la impresora en PaxaPOS

<div id="paso-3-da-de-alta-la-impresora-en-paxapos"></div>

1. Andá a **Configuración** → **Tablas maestras** → **Impresión y multimedia** → **Impresoras**.
<!-- FOTO: 120-04-menu-impresoras -->
2. Tocá **Nueva Impresora**. Se abre el formulario **Agregar Impresora**.
<!-- FOTO: 120-05-boton-nueva-impresora -->
3. En **Nombre**, escribí un nombre fácil de reconocer (ejemplo: *Cocina*, *Barra*, *Caja*).
<!-- FOTO: 120-06-campo-nombre -->
4. En **Driver**, elegí cómo está conectada la impresora. Depende del equipo donde está Fiscalberry:

| Fiscalberry está en… | La impresora está conectada por… | En **Driver** elegí… | Y completá… |
|---|---|---|---|
| **Windows** | USB (con el driver instalado) | **Impresora instalada en Windows** | **Nombre de la impresora**, igual a como aparece en Windows. |
| **Windows** | Ethernet (red) | **Impresora de Red** | **IP de la impresora** y **Puerto** (dejá **9100**). |
| **Linux** | USB | **USB** o **CUPS** | Los datos que pide el driver elegido. |
| **Linux** | Ethernet (red) | **Impresora de Red** | **IP de la impresora** y **Puerto** (dejá **9100**). |
| **Android** | Ethernet (red) | **Impresora de Red** | **IP de la impresora** y **Puerto** (dejá **9100**). |

<!-- FOTO: 120-07-campo-driver -->

5. En **Ancho de papel**, elegí el tamaño del rollo:
   - **80mm (40 columnas):** el más común.
   - **80mm fuente chica (48 columnas).**
   - **58mm (32 columnas):** rollos angostos.
<!-- FOTO: 120-08-campo-ancho-de-papel -->
6. En **Paxaprinter**, elegí el Fiscalberry de tu local (el que adoptaste al instalarlo).
<!-- FOTO: 120-09-campo-paxaprinter -->
7. Tocá **Agregar**.
<!-- FOTO: 120-10-boton-agregar -->

---

### Paso 4: Probá la impresora

<div id="paso-4-proba-la-impresora"></div>

1. En el listado de impresoras, tocá **Test de impresión** al lado de la impresora nueva.
<!-- FOTO: 120-11-boton-test-de-impresion -->
2. Tiene que salir un ticket de prueba. Si no sale, revisá la tabla de problemas de abajo.

> 💡 En **Configuración** → **Impresión** → **Servidor de impresión** tiene que estar elegido el Fiscalberry de tu local. Ver [Configuración de Impresión](/user-guide/configuracion-impresion).

---

### Paso 5: Elegí la impresora en cada producto

<div id="paso-5-elegi-la-impresora-en-cada-producto"></div>

Para que cada producto salga por la impresora correcta (la bebida en la barra, la comida en la cocina), al cargar o editar cada producto en el menú tildá la impresora en **¿Dónde se imprime la comanda?**.

> 🔗 Ver cómo: [Menú de Productos](/user-guide/menu)

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| No imprime nada, en ninguna impresora. | **Fiscalberry está cerrado**. | Abrí Fiscalberry en la computadora del local. Revisá que esté en inicio automático ([Windows](/user-guide/fiscalberry-windows)). |
| El test no sale en una impresora **USB**. | Falta el driver, o el **Nombre de la impresora** no es igual al de Windows. | Instalá el driver desde la [Biblioteca de Drivers](/user-guide/biblioteca-de-drivers) y copiá el nombre exacto de la impresora como figura en Windows. |
| El test no sale en una impresora **de red**. | La IP está mal, o la impresora no está en la misma red. | Imprimí de nuevo la hoja de autotest, revisá la IP y compará los 3 primeros números con la IP de la computadora (Paso 1). |
| El texto sale cortado. | El **Ancho de papel** no coincide con el rollo. | Editá la impresora y elegí el ancho correcto (80mm o 58mm). |
| No aparece mi Fiscalberry en **Paxaprinter**. | Todavía no lo adoptaste. | Seguí el paso "Vinculá Fiscalberry con tu comercio" de la guía de tu equipo. |
