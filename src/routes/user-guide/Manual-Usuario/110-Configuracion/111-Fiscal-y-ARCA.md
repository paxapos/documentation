# Fiscal y ARCA

<div id="fiscal-y-arca"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Puesta en marcha** → **Fiscal y ARCA**  
> **¿Quién lo usa?:** Dueños, administradores y contadores del comercio

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Reúne todos los datos que tu comercio necesita para facturar: datos fiscales, IVA por defecto, puntos de venta, certificado ARCA, Remito R y agente de retención.

1. **Datos fiscales:** razón social, CUIT, domicilio y condición frente al IVA.
2. **Agente de retención:** solo si tu comercio actúa como agente de retención de IIBB.
3. **Facturación:** IVA por defecto, logo de la factura y plazo de pago.
4. **Remito R:** solo si emitís remitos de traslado de mercadería.
5. **Puntos de venta:** el listado y alta de tus puntos de venta AFIP.
6. **Certificado AFIP:** solo para soporte técnico.

Si te falta algún dato obligatorio para poder facturar, vas a ver una advertencia ⚠ arriba de esta sección y también al lado de "Fiscal y ARCA" en el menú.

![Pantalla de Fiscal y ARCA](images/manual/configuracion-general/02-fiscal-arca.png)

> 💡 Si es la **primera vez** que conectás tu comercio con ARCA para facturar electrónicamente, seguí primero la guía paso a paso de [ARCA y Facturación Electrónica](/user-guide/arca-y-facturacion) — ahí está el trámite completo del lado de ARCA (clave fiscal, autorización del web service, etc.). Esta pantalla es donde cargás los datos una vez que ya hiciste ese trámite.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Configuración del comercio** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Para ver y administrar Puntos de Venta hace falta además el permiso de **Facturación AFIP**.

---

## 🎨 Campos: ¿Qué es cada cosa?

<div id="campos-que-es-cada-cosa"></div>

### Datos fiscales

Si sos Monotributista cargá tus datos personales; si sos Responsable Inscripto, los de tu empresa.

| Campo | ¿Qué es? |
|---|---|
| **Razón social** | Nombre legal del comercio o de la persona (si sos monotributista). |
| **CUIT / CUIL** | 11 dígitos, con o sin guiones. |
| **Domicilio fiscal** | El que figura en ARCA, no necesariamente el domicilio comercial. |
| **Tipo de empresa** | Tu condición frente a AFIP/ARCA (monotributo, responsable inscripto, etc.). |

### Agente de retención

Completalos **solo** si tu comercio actúa como agente de retención de Ingresos Brutos. Se usan en los certificados de retención que descarga el proveedor desde su portal.

| Campo | ¿Qué es? |
|---|---|
| **Nº de agente de recaudación** | El número que asigna ARBA. Sin esto no se puede emitir el certificado de IIBB. |
| **Lugar de emisión** | Aparece en el pie "Lugar y Fecha" del certificado. |
| **Localidad del agente** | Localidad declarada como agente. |
| **Código postal del agente** | Código postal declarado como agente. |

### Facturación

| Campo | ¿Qué es? |
|---|---|
| **IVA de productos por defecto** | La alícuota de IVA que se aplica a un producto nuevo si no le cargaste una propia. |
| **URL del logo de la factura** | Se muestra en el encabezado de tus comprobantes (puede ser distinto del logo del menú). |
| **Plazo de pago (días)** | Solo aplica si facturás servicios. El vencimiento que se declara a ARCA se calcula como fin del período + estos días. Dejalo en 0 si cobrás en el momento. Aplica a todos tus puntos de venta. |
| **Concepto de la factura** | Productos, Servicios, Productos y Servicios u Otro. Solo aparece si facturás electrónicamente por AFIP (Web Services); define si el Plazo de pago y el vencimiento declarado corresponden a productos, servicios o ambos. |

### Remito R (traslado de mercadería)

Es un comprobante **aparte de la factura**, para trasladar mercadería. ARCA lo autoriza por talonario o por autoimpresor (RG 100), con un CAI y un punto de venta propios. Dejá estos campos vacíos si no lo usás.

| Campo | ¿Qué es? |
|---|---|
| **Punto de venta de remitos** | Distinto del punto de venta de factura electrónica. Tiene que existir en Puntos de Venta. |
| **CAI** | El código de 14 dígitos que figura en el talonario o en la autorización de autoimpresor. |
| **Vencimiento del CAI** | Formato AAAA-MM-DD. Si vence, el sistema deja de emitir remitos R. |

### Puntos de venta

Tabla con tus puntos de venta AFIP: CUIT, razón social, domicilio (heredado de los Datos fiscales), condición de IVA, concepto, IIBB y fecha de inicio de actividades — esta última es la que realmente se declara al facturar, así que se edita acá y no en otro lado.

### Certificado AFIP

Solo lo ve un superadministrador de PaxaPOS (soporte técnico): permite subir un certificado AFIP propio del comercio.

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Cargar los datos fiscales

<div id="paso-1-cargar-los-datos-fiscales"></div>

1. Andá a **Configuración → Fiscal y ARCA**.
2. Completá **Razón social**, **CUIT / CUIL**, **Domicilio fiscal** y **Tipo de empresa**.
3. Elegí el **IVA de productos por defecto** en el bloque Facturación.
4. Tocá **Guardar**.

### Paso 2: Dar de alta un punto de venta

<div id="paso-2-dar-de-alta-un-punto-de-venta"></div>

1. En el bloque **Puntos de venta**, tocá **Agregar**.
2. Cargá el número de punto de venta y la fecha de inicio de actividades real de ese punto de venta.
3. Guardá el punto de venta.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Veo una advertencia de "faltan datos fiscales" y no puedo facturar. | Falta completar algún dato obligatorio: CUIT, razón social, domicilio o un punto de venta activo. | Completá el bloque **Datos fiscales** y dá de alta al menos un punto de venta. |
| Cargué el CUIT pero no me deja guardar. | El campo acepta 11 dígitos con o sin guiones — cualquier otro carácter lo rechaza. | Revisá que sean solo números (y guiones opcionales) y que tenga 11 dígitos en total. |
| El certificado de retención de IIBB no se genera. | Falta el **Nº de agente de recaudación** en el bloque "Agente de retención". | Completalo — sin ese número ARBA no reconoce el certificado. |
| Necesito emitir remitos pero no aparece la opción. | El bloque "Remito R" está vacío. | Cargá el punto de venta, CAI y vencimiento de tu talonario o autoimpresor de remitos. |
