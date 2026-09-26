# Puntos de Venta (PDVs)

<div id="puntos-de-venta-pdvs"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Puesta en marcha** → **Fiscal y ARCA** → bloque **Puntos de venta**  
> (También se llega desde **Finanzas** → **Facturación AFIP** → **Puntos de Venta**: es lo mismo.)  
> **¿Quién lo usa?:** Dueños, Administradores y Contadores

---

## 🎯 ¿Qué es y para qué sirve?

<div id="que-es-y-para-que-sirve"></div>

El **punto de venta** (PDV) es el número que ARCA le asigna a tu comercio para hacer **facturas electrónicas**. Sin un punto de venta cargado en PaxaPOS, **no podés facturar**.

Configurarlo tiene **dos partes**, y se hacen en este orden:

1. **En ARCA:** hacés el trámite y creás el punto de venta. Al terminar, ARCA te da un **PDF** con el alta del punto de venta.
2. **En PaxaPOS:** con ese PDF en la mano, cargás los datos del punto de venta y **avisás a soporte**.

---

## 🔑 Requisitos para empezar

<div id="requisitos-para-empezar"></div>

- Tener **clave fiscal nivel 3** en ARCA.
- Tener el permiso de **Configuración del comercio** y el de **Facturación AFIP** configurados en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 📑 Guía Paso a Paso

<div id="guia-paso-a-paso"></div>

### Paso 1: Hacé el trámite en ARCA

<div id="paso-1-hace-el-tramite-en-arca"></div>

Seguí **completa** esta guía. Ahí se explica cómo habilitar la factura electrónica, cómo vincular tu comercio con PaxaPOS y cómo crear el punto de venta en ARCA:

> 🔗 **[ARCA y Facturación Electrónica](/user-guide/arca-y-facturacion)**

Cuando terminás, ARCA te da un **PDF** con el alta del punto de venta. **Guardalo:** lo vas a usar en el paso siguiente.

<!-- FOTO: 83-01-pdf-alta-pdv-arca -->

---

### Paso 2: Cargá el punto de venta en PaxaPOS

<div id="paso-2-carga-el-punto-de-venta-en-paxapos"></div>

1. Andá a **Configuración** → **Puesta en marcha** → **Fiscal y ARCA**.
<!-- FOTO: 83-02-menu-fiscal-y-arca -->
2. Bajá hasta el bloque **Puntos de venta** y tocá **Agregar punto de venta**.
<!-- FOTO: 83-03-boton-agregar-punto-de-venta -->
3. Se abre el formulario **Punto de Venta**. Completalo con los datos del PDF de ARCA:
<!-- FOTO: 83-04-formulario-punto-de-venta -->

**Arriba del formulario**

| Campo | ¿Qué poner? |
|---|---|
| **Nombre (solo para uso interno)** | Un nombre para reconocerlo vos (ejemplo: *Caja del frente*). No sale en la factura. |

**Datos de la Empresa**

| Campo | ¿Qué poner? | ¿De dónde lo saco? |
|---|---|---|
| **CUIT** | Los 11 números, sin guiones. | Tu CUIT. |
| **Razón Social** | El nombre legal del comercio o de la persona. | Tu constancia de ARCA. |
| **Domicilio Fiscal** | El domicilio fiscal. | Tu constancia de ARCA. |
| **Responsabilidad IVA** | Tu condición frente al IVA (Monotributo o Responsable Inscripto). | Tiene que coincidir con el **Sistema** que elegiste al crear el punto de venta en ARCA. |
| **Nombre fantasía** | El nombre de fantasía del punto de venta. | El PDF del punto de venta. |
| **Concepto de la Factura** | **Productos**, **Servicios**, **Productos y Servicios** u **Otro**. | Lo que vendés. Si tenés dudas, consultalo con tu contador. |
| **Ingresos brutos** | Tu número de Ingresos Brutos. | Tu inscripción en Ingresos Brutos. |
| **Fecha de inicio de actividades** | La fecha de inicio de actividades. | Tu constancia de ARCA. |

**Datos del PDV**

| Campo | ¿Qué poner? | ¿De dónde lo saco? |
|---|---|---|
| **Número de Punto de Venta** | El número del punto de venta (ejemplo: *3*). | El PDF del punto de venta. |
| **Domicilio comercial**, **Localidad**, **Provincia** y **Código postal** | La dirección del local. | El domicilio que elegiste en ARCA para el punto de venta. |
| **Habilitado** | Dejalo tildado. | — |

4. Tocá **Guardar**.
<!-- FOTO: 83-05-boton-guardar -->

---

### Paso 3: Avisá a soporte

<div id="paso-3-avisa-a-soporte"></div>

Después de cargar el punto de venta, **avisanos** para que desde PaxaPOS confirmemos la relación con tu comercio en ARCA. Sin esta confirmación **no vas a poder facturar**.

- **WhatsApp:** <a href="{{WHATSAPP_URL}}?text=Hola!%20Ya%20cargu%C3%A9%20mi%20punto%20de%20venta%20en%20PaxaPOS.%20Mi%20CUIT%20es:%20__%20y%20el%20punto%20de%20venta%20es:%20__" target="_blank">{{WHATSAPP_DISPLAY}}</a>

Mandanos:
- ✅ El **CUIT** del comercio.
- ✅ El **número de punto de venta**.

---

### Paso 4: Verificá que quedó listo

<div id="paso-4-verifica-que-quedo-listo"></div>

Volvé a abrir el punto de venta (**Configuración** → **Fiscal y ARCA** → **Puntos de venta** → **Editar**):

- ✅ **Listo:** debajo de **Número de Punto de Venta** aparece la lista **PDV disponibles en ARCA** con tu número.
<!-- FOTO: 83-06-pdv-disponibles-en-arca -->
- ⏳ **Todavía no:** arriba del formulario aparece el aviso **Relación fiscal — No hay Puntos de Venta disponibles para el CUIT**. Eso quiere decir que la relación con ARCA todavía no está confirmada. Esperá la confirmación de soporte.
<!-- FOTO: 83-07-aviso-relacion-fiscal -->

> 🔗 Los demás datos fiscales del comercio (razón social, IVA por defecto, etc.) se cargan en la misma pantalla. Ver [Fiscal y ARCA](/user-guide/fiscal-y-arca).

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Aparece **Relación fiscal — No hay Puntos de Venta disponibles para el CUIT**. | La relación de tu comercio con PaxaPOS en ARCA todavía no está confirmada. | Revisá que hayas hecho todo el [trámite en ARCA](/user-guide/arca-y-facturacion) y avisá a soporte (Paso 3). |
| Mi número de punto de venta no aparece en **PDV disponibles en ARCA**. | En ARCA el punto de venta se creó con otro **Sistema**, o todavía no está confirmado. | Revisá el **Sistema** en el PDF (tiene que ser un sistema de **Web Services**) y consultá a soporte. |
| No me deja guardar. | Falta un dato obligatorio (CUIT, Razón Social, Domicilio Fiscal o Número de Punto de Venta). | Completá los campos que faltan y volvé a tocar **Guardar**. |
| No veo el bloque **Puntos de venta**. | Tu usuario no tiene el permiso de **Facturación AFIP**. | Pedíselo al administrador. |
