# Puntos de Venta (PDVs)

<div id="puntos-de-venta-pdvs"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Finanzas** → **Facturación AFIP** → **Puntos de Venta (PDVs)**
> **¿Quién lo usa?:** Dueños, administradores y contadores

> 🎯 **¿Para qué sirve esto?**
> El punto de venta es el número que ARCA le da a tu comercio para hacer facturas electrónicas.
> Acá lo cargás en PaxaPOS. Sin un punto de venta cargado, no podés facturar.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tener clave fiscal nivel 3 en ARCA.
- Tu usuario tiene que tener el permiso de **Facturación AFIP** en [Permisos por Rol](/user-guide/permisos-por-rol).
- Crear el punto de venta en ARCA primero. Seguí la guía [ARCA y Facturación Electrónica](/user-guide/configuracion-general#tramite-en-arca).
- Al terminar en ARCA te dan un PDF con el alta del punto de venta. Guardalo: tiene los datos que vas a cargar.

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Finanzas marcado en rojo](images/manual/70-finanzas/83-00a-menu-grupo-finanzas.png)

1. En el menú de la izquierda, tocá **Finanzas**.

![Opción Puntos de Venta (PDVs) marcada en rojo, debajo del título Facturación AFIP](images/manual/70-finanzas/83-00b-menu-opcion-puntos-de-venta.png)

2. Tocá **Puntos de Venta (PDVs)**. Está debajo del título **FACTURACIÓN AFIP**.

![Pantalla Punto de Ventas con la tabla vacía y el botón verde Agregar Punto de Venta marcado en rojo, arriba a la derecha](images/manual/70-finanzas/83-01-donde-esta-boton-agregar-punto-de-venta.png)

Así se ve la pantalla si todavía no cargaste ninguno: la tabla vacía y, arriba a la derecha, el botón verde **Agregar Punto de Venta**.

Cuando ya hay puntos de venta, cada uno es un renglón. Las columnas dicen:

- **Punto de Venta**: el número.
- **Nombre**: el nombre interno que le pusiste.
- **Cuit**, **Direccion**, **Localidad**, **Provincia** y **Codigo Postal**.
- **Habilitado**: dice **Si** o **No**.
- **Acciones**: el link **Editar**.

---

## ➕ Paso 2: Agregá un punto de venta

<div id="paso-2-agrega-un-punto-de-venta"></div>

1. Tocá **Agregar Punto de Venta**.
2. Se abre la pantalla **Punto de Venta**. Completala con los datos del PDF de ARCA.

> 💡 **Consejo útil:** si el comercio ya tiene sus datos fiscales cargados, algunos casilleros ya vienen completos.

![Parte de arriba de la pantalla Punto de Venta: el aviso Relación fiscal y los casilleros Nombre, CUIT, Razón Social, Domicilio Fiscal, Responsabilidad IVA, Nombre Fantasia, Concepto de la Factura, Ingresos brutos y Fecha de inicio de actividades](images/manual/70-finanzas/83-02-formulario-parte-1.png)

Arriba puede aparecer el aviso rojo **Relación fiscal**. Se explica en el Paso 4.

El primer casillero es el nombre. Después vienen los **Datos de la Empresa**:

- **Nombre (solo para uso interno)**: un nombre para reconocerlo vos. Por ejemplo: *Caja del frente*. No sale en la factura.
- **CUIT**: los 11 números, sin guiones. Por ejemplo: *20111111112*.
- **Razón Social**: el nombre legal del comercio, como figura en ARCA.
- **Domicilio Fiscal**: el domicilio fiscal, como figura en ARCA.
- **Responsabilidad IVA**: tu condición frente al IVA. Si ya está cargada en los datos del comercio, aparece gris y no se cambia acá. Mirá [Información Fiscal del Comercio](/user-guide/configuracion-general#fiscal-y-arca).
- **Nombre Fantasia**: el nombre de fantasía que figura en el PDF.
- **Concepto de la Factura**: **Productos**, **Servicios**, **Productos y Servicios** u **Otro**. Si tenés dudas, preguntale a tu contador.
- **Ingresos brutos**: tu número de Ingresos Brutos.
- **Fecha de inicio de actividades**: la que figura en tu constancia de ARCA.

![Parte de abajo de la pantalla: Datos del PDV con Número de Punto de Venta, Domicilio comercial, Localidad, Provincia, Codigo Postal, la casilla Habilitado y el botón Guardar](images/manual/70-finanzas/83-03-formulario-parte-2.png)

Después vienen los **Datos del PDV**:

- **Número de Punto de Venta**: el número que dice el PDF. Por ejemplo: *3*. Es obligatorio.
- **Domicilio comercial**, **Localidad**, **Provincia** y **Codigo Postal**: la dirección del local, como la elegiste en ARCA.
- **Habilitado**: dejalo tildado. Si lo destildás, el punto de venta deja de usarse.
- **Guardar**: guarda el punto de venta.

> ⚠️ **Atención:** un punto de venta mal cargado rompe la facturación electrónica. Revisá el **CUIT** y el **Número de Punto de Venta** contra el PDF antes de tocar **Guardar**.

3. Cuando revisaste todo, tocá **Guardar**.

Los casilleros **CUIT**, **Razón Social**, **Número de Punto de Venta** y **Domicilio Fiscal** son obligatorios. Si falta uno, la pantalla no te deja guardar.

---

## ✏️ Paso 3: Editá un punto de venta

<div id="paso-3-edita-un-punto-de-venta"></div>

1. En la tabla, tocá **Editar** en el renglón del punto de venta.
2. Se abre la misma pantalla, con los datos cargados.
3. Cambiá lo que necesites y tocá **Guardar**.

Una vez guardados, el **CUIT**, la **Razón Social** y el **Domicilio Fiscal** quedan bloqueados: se ven en gris y no se pueden cambiar.

No existe un botón para borrar un punto de venta. Para dejar de usarlo, destildá **Habilitado** y tocá **Guardar**.

---

## 📨 Paso 4: Revisá la relación fiscal

<div id="paso-4-revisa-la-relacion-fiscal"></div>

Para facturar, tu comercio tiene que estar relacionado con PaxaPOS en ARCA. La pantalla lo controla por vos:

- **Todo bien:** debajo de **Número de Punto de Venta** aparece la lista **PDV disponibles en ARCA** con tu número.
- **Falta algo:** arriba aparece el aviso rojo **Relación fiscal**, con el texto **No hay Puntos de Venta disponibles para el CUIT** y tu número de CUIT.

Si ves el aviso, revisá que hayas hecho los tres pasos del trámite en ARCA. Están en [ARCA y Facturación Electrónica](/user-guide/configuracion-general#tramite-en-arca). Después avisá a soporte para que confirmemos la relación:

- **WhatsApp:** <a href="{{WHATSAPP_URL}}?text=Hola!%20Ya%20cargu%C3%A9%20mi%20punto%20de%20venta%20en%20PaxaPOS.%20Mi%20CUIT%20es:%20__%20y%20el%20punto%20de%20venta%20es:%20__" target="_blank">{{WHATSAPP_DISPLAY}}</a>

Mandanos el **CUIT** del comercio y el **número de punto de venta**.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **Aparece el aviso Relación fiscal** | La relación de tu comercio con PaxaPOS en ARCA todavía no está confirmada. | Revisá el [trámite en ARCA](/user-guide/configuracion-general#tramite-en-arca) y avisá a soporte (Paso 4). |
| **Mi número no aparece en PDV disponibles en ARCA** | En ARCA el punto de venta se creó con otro sistema, o todavía no está confirmado. | Revisá el **Sistema** en el PDF: tiene que ser de **Web Services**. Consultá a soporte. |
| **No me deja guardar** | Falta un dato obligatorio. | Completá **CUIT**, **Razón Social**, **Domicilio Fiscal** y **Número de Punto de Venta**. |
| **No puedo cambiar el CUIT ni la Razón Social** | Una vez guardado el punto de venta, esos datos quedan bloqueados. | Pedile ayuda a soporte. |
| **No veo la opción Puntos de Venta (PDVs)** | Tu usuario no tiene el permiso de **Facturación AFIP**. | Pedíselo a un administrador en [Permisos por Rol](/user-guide/permisos-por-rol). |
| **No encuentro el botón Sincronizar PDVs** | Ese botón no existe. | Cargá cada punto de venta con **Agregar Punto de Venta** (Paso 2). |
