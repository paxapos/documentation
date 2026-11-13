# 🏛️ Trámite en ARCA (con clave fiscal)

<div id="tramite-en-arca"></div>

Para facturar, primero tenés que hacer un trámite en el sitio de ARCA. Se hace una sola vez. No se hace dentro de PaxaPOS: las fotos de abajo son del sitio de ARCA.

<div id="arca-facturacion"></div>

> 🎯 **¿Para qué sirve esto?**  
> Para poder comenzar a facturar necesitamos que nos conectes con ARCA. Seguí estos pasos una única vez y ya queda configurado.

---

##### ⚠️ **REQUISITO OBLIGATORIO**

<div id="requisito-obligatorio"></div>

> **Recordá que para realizar este trámite debés poseer clave fiscal de nivel 3 en ARCA.**

##### 🗺️ **Hoja de ruta: el trámite tiene 2 partes**

<div id="hoja-de-ruta"></div>

| Parte                                    | ¿Qué hacés?                                                  | ¿Qué lográs?                                                   |
| ---------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------- |
| 🟦 **[PARTE 1](#habilitar-servicio)**    | Habilitar el servicio de factura electrónica por web service | Autorizás a PaxaPOS a emitir facturas en tu nombre             |
| 🟩 **[PARTE 2](#crear-punto-venta)**     | Crear un nuevo punto de venta electrónico                    | Tenés el número de punto de venta desde el que vas a facturar  |
| 📞 **[PASO FINAL](#notificar-soporte)**  | Avisarnos por WhatsApp                                       | Configuramos tu punto de venta en PaxaPOS                      |

> 💡 **Hacé las partes en orden.** No empieces la Parte 2 hasta terminar la Parte 1.

---

---

##### 🟦 **PARTE 1 de 2 — Habilitar el servicio de factura electrónica por web service**

<div id="habilitar-servicio"></div>

> **🎯 Qué vas a lograr:** autorizar a PaxaPOS a emitir facturas electrónicas en tu nombre.  
> **📋 Subpasos:** 1.1 Ingreso a ARCA · 1.2 Nueva relación · 1.3 Elegir servicio · 1.4 Asignar representante · 1.5 Confirmar

###### **🌐 1.1 Ingreso a ARCA y acceso a Administrador**

<div id="ingreso-arca"></div>

**🔹 1.1.1** **Ingresar en el sitio de ARCA** (www.afip.gob.ar) y ubicar el botón de acceso directo con la Clave Fiscal, o ingresar a https://auth.afip.gob.ar/contribuyente/

![Ingreso a ARCA](images/afip/1-Inicio-sesion.webp)
_Pantalla de ingreso a ARCA con Clave Fiscal_

**🔹 1.1.2** **Ingresar el CUIT**, presionar "Siguiente" luego ingresar la clave y seleccionar "Ingresar"

**🔹 1.1.3** **Seleccionar la opción** "Administrador de Relaciones de Clave Fiscal"

![Administrador de Relaciones](images/afip/2-Administrador-relaciones.webp)
_Menú principal con opción de Administrador de Relaciones_

**🔹 1.1.4** **En el caso que tengas más de un CUIT** asociado a tu cuenta de ARCA, aparecerá una pantalla donde tendrás que seleccionar el CUIT con el que deseas emitir facturas electrónicas

###### **🔗 1.2 Crear nueva relación y seleccionar servicio**

<div id="crear-relacion"></div>

**🔹 1.2.1** **Seleccionar** "Nueva Relación"

![Nueva Relación](images/afip/3-Nueva-relacion.webp)
_Botón para crear una nueva relación_

**🔹 1.2.2** **Seleccionar** "Buscar" en la opción "Servicio"

![Buscar Servicio](images/afip/4-Servicios.webp)
_Campo de búsqueda de servicios_

**🔹 1.2.3** **Asegurate** que en el campo "Representado" figure el CUIT al que le estás habilitando el servicio

**🔹 1.2.4** **Luego abrir** la opción "ARCA" y seleccionar la opción "WebServices"

![WebServices ARCA](images/afip/5-Web-service.webp)
_Menú desplegable de ARCA mostrando WebServices_

###### **📑 1.3 Elegir servicio según tipo de factura**

<div id="elegir-servicio"></div>

| Tipo de Factura                          | Servicio que debés buscar                |
| ---------------------------------------- | ---------------------------------------- |
| **Facturas electrónicas A, B, C o M**    | "Facturación Electrónica"                |
| **Facturas electrónicas de exportación** | "Facturación electrónica de exportación" |
| **Facturas electrónicas T de turismo**   | "Web Service Comprobantes T"             |

> ⚠️ **Importante:** si necesitás realizar distintos tipos de facturas (por ej. A y E), repetí los subpasos **1.2 a 1.5** seleccionando en cada caso el servicio que corresponda al tipo de factura.

###### **👤 1.4 Buscar y asignar representante**

<div id="asignar-representante"></div>

**🔹 1.4.1** **Seleccionar** "Buscar" en la opción "Representante"

![Buscar Representante](images/afip/6-Buscar-representante.webp)
_Campo para buscar representante_

**🔹 1.4.2** **Ingresar el CUIT** `20303683268` y presionar "Buscar"

![Ingresar CUIT Representante](images/afip/7-Representante.webp)
_Ingreso del CUIT del representante autorizado_

**🔹 1.4.3** **Se le indicará** que el CUIT pertenece a VILAR ALEJANDRO ERNESTO

> ⚠️ **Nota importante:** ignorá el mensaje de ARCA en rojo sobre el computador fiscal y la "Advertencia del Sistema" que aparece debajo sobre la delegación del servicio.

###### **✅ 1.5 Confirmar la relación**

<div id="confirmar-relacion"></div>

**🔹 1.5.1** **Presioná "Confirmar"** nuevamente

![Confirmar Relación](images/afip/8-Confirmar-representante.webp)
_Botón de confirmación final de la relación_

> ✅ **¡Terminaste la PARTE 1!**  
> Ya habilitaste el servicio de factura electrónica. **Ahora seguí con la [PARTE 2 →](#crear-punto-venta)**

---

---

##### 🟩 **PARTE 2 de 2 — Crear un nuevo punto de venta electrónico**

<div id="crear-punto-venta"></div>

> **🎯 Qué vas a lograr:** crear el punto de venta desde el que PaxaPOS va a emitir tus facturas.  
> **📋 Subpasos:** 2.1 Adherir servicio · 2.2 Reingresar a ARCA · 2.3 Crear punto de venta · 2.4 Confirmar

###### **⚙️ 2.1 Adherir el servicio desde administrador**

<div id="adherir-servicio"></div>

**🔹 2.1.1** **Ingresar a** "Administrador de Relaciones de Clave Fiscal"

![Administrador Relaciones](images/afip/2-Administrador-relaciones.webp)
_Acceso al administrador de relaciones_

**🔹 2.1.2** **Seleccionar** "Adherir Servicio"

![Adherir Servicio](images/afip/3-Nueva-relacion.webp)
_Opción para adherir nuevo servicio_

**🔹 2.1.3** **Abrir la opción** "ARCA", luego la opción "Servicios Interactivos" y buscar el servicio "Administración de puntos de venta y domicilios"

![Servicios Interactivos](images/afip/5-Web-service.webp)
_Navegación hacia servicios interactivos_

![Puntos de Venta](images/afip/10-Administrador-pdv.webp)
_Servicio de administración de puntos de venta_

**🔹 2.1.4** **Confirmar** la operación

![Confirmar Adherir](images/afip/8-Confirmar-representante.webp)
_Confirmación de adhesión al servicio_

###### **🔄 2.2 Reingresar y acceder a administración**

<div id="reingresar-arca"></div>

**🔹 2.2.1** **Para que este nuevo servicio quede habilitado** deberás salir del sitio de ARCA e ingresar nuevamente en www.afip.gob.ar y ubicar el botón de acceso directo con la Clave Fiscal, o ingresar a https://auth.afip.gob.ar/contribuyente/

![Reingresar ARCA](images/afip/1-Inicio-sesion.webp)
_Reingreso necesario para activar el nuevo servicio_

**🔹 2.2.2** **En el buscador**, ingresar la opción "Administración de puntos de venta y domicilios"

![Servicios Habilitados](images/afip/9-Administrar-relaciones.webp)
_Lista de servicios habilitados mostrando la nueva opción_

**🔹 2.2.3** **Seleccionar la empresa** e ingresar a "A/B/M de Puntos de Venta"

**🔹 2.2.4** **Si se presenta un mensaje**, presionar "Cerrar"

###### **➕ 2.3 Crear nuevo punto de venta**

<div id="crear-pvd"></div>

**🔹 2.3.1** **Seleccionar** "Agregar…"

**🔹 2.3.2** **Ingresar los siguientes datos:**

![Formulario Punto Venta](images/afip/11-abm.webp)
_Formulario completo para crear punto de venta_

| Campo               | Descripción                                                                                           | Ejemplo                   |
| ------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------- |
| **Número**          | Código único del punto de venta, debe ser diferente a otros puntos de venta que ya tengas registrados | 3                         |
| **Nombre Fantasía** | Nombre descriptivo del punto de venta                                                                 | "Factura Electrónica"     |
| **Sistema**         | Ver tabla de opciones abajo                                                                           | Según tu condición fiscal |
| **Nuevo domicilio** | Seleccionar el domicilio fiscal asociado al punto de venta                                            | Tu domicilio fiscal       |

**🏛️ Opciones para el campo "Sistema":**

| Tu condición fiscal        | Opción que debés seleccionar                       |
| -------------------------- | -------------------------------------------------- |
| **MONOTRIBUTISTA**         | "Factura Electrónica - Monotributo - Web Services" |
| **RESPONSABLE INSCRIPTO**  | "RECE para aplicativos y Web Services"             |
| **FACTURA DE EXPORTACIÓN** | "Comprobantes de Exportación - Web Services"       |

> ⚠️ **Revisá bien esta opción:** si elegís un "Sistema" incorrecto, no vas a poder facturar desde PaxaPOS.

###### **✅ 2.4 Confirmar punto de venta**

<div id="confirmar-pvd"></div>

**🔹 2.4.1** **Seleccionar** "Aceptar" para confirmar la operación

> ✅ **¡Terminaste la PARTE 2!**  
> Ya creaste tu punto de venta. **Anotá el número** y seguí con el **[PASO FINAL →](#notificar-soporte)**

---

---

##### 📞 **PASO FINAL — Avisarnos para configurar tu punto de venta**

<div id="notificar-soporte"></div>

**🔹 IMPORTANTE:** **Una vez completadas la Parte 1 y la Parte 2**, deberás **notificarnos inmediatamente** para que podamos configurar el PVD (Punto de Venta) en tu comercio.

###### **📧 ¿Cómo notificar?**

<div id="como-notificar"></div>

- **WhatsApp:** <a href="{{WHATSAPP_URL}}?text=Hola!%20Ya%20complet%C3%A9%20la%20configuraci%C3%B3n%20en%20ARCA%20y%20necesito%20que%20configuren%20mi%20PVD%20para%20facturaci%C3%B3n%20electr%C3%B3nica.%20Mi%20CUIT%20es:%20__%20y%20el%20punto%20de%20venta%20creado%20es:%20__" target="_blank">{{WHATSAPP_DISPLAY}}</a> _¡Click para chatear directamente en nueva pestaña!_

###### **📋 Información que debés proporcionar:**

<div id="informacion-que-debes-proporcionar"></div>

- ✅ **CUIT del comercio**
- ✅ **Número del punto de venta creado** (ej: 3)
- ✅ **Nombre fantasía asignado** (ej: "Factura Electrónica")
- ✅ **Tipo de sistema seleccionado** (Monotributo/Responsable Inscripto/Exportación)

###### **⏱️ Tiempo de configuración:**

<div id="tiempo-de-configuracion"></div>

Una vez recibida la notificación, nuestro equipo técnico configurará tu PVD en **24-48 horas hábiles**.

###### **⚠️ Recordá:**

<div id="recorda"></div>

Sin esta notificación, **no podrás comenzar a facturar electrónicamente**, aunque hayas completado todos los pasos en ARCA.

---

##### 🚨 **¿Problemas comunes?**

<div id="problemas-comunes"></div>

- **"No tengo clave fiscal nivel 3"** → Debés tramitarla en ARCA primero
- **"No aparece el servicio"** → Verificá que estés en la sección correcta de WebServices
- **"Error al asignar representante"** → Verificá que el CUIT `20303683268` esté bien escrito

###### **📞 ¿Necesitás ayuda?**

<div id="necesitas-ayuda"></div>

Este proceso es técnico y específico de ARCA. Si tenés dudas, consultá con:

- **Contador:** Para aspectos fiscales
- **Soporte técnico:** Para la integración
- **ARCA:** Para problemas con la plataforma oficial
