# 🏛️ ARCA y Facturación Electrónica

> 🎯 **¿Para qué sirve esto?**  
> Para poder comenzar a facturar con PaxaPos necesitamos que nos conectes con ARCA. Seguí estos pasos una única vez y ya queda configurado en el sistema.

---

## ⚠️ **REQUISITO OBLIGATORIO**
> **Recordá que para realizar este trámite debés poseer clave fiscal de nivel 3 en ARCA.**

---

## 🚀 **1. Habilitar el servicio de factura electrónica por web service**

### **🌐 1.1 Ingreso a ARCA y acceso a Administrador**

#### **📋 Paso a paso:**
1. **Ingresar en el sitio de ARCA** (www.afip.gob.ar) y ubicar el botón de acceso directo con la Clave Fiscal, o ingresar a https://auth.afip.gob.ar/contribuyente/

   ![Ingreso a ARCA](/documentation/images/afip/01-ingreso-afip.png)
   *Pantalla de ingreso a ARCA con Clave Fiscal*

2. **Ingresar el CUIT**, presionar "Siguiente" luego ingresar la clave y seleccionar "Ingresar"

   ![Login ARCA](/documentation/images/afip/02-login-cuit.png)
   *Formulario de ingreso de CUIT y clave*

3. **Seleccionar la opción** "Administrador de Relaciones de Clave Fiscal"

   ![Administrador de Relaciones](/documentation/images/afip/03-administrador-relaciones.png)
   *Menú principal con opción de Administrador de Relaciones*

4. **En el caso que tengas más de un CUIT** asociado a tu cuenta de ARCA, aparecerá esta pantalla donde tendrás que seleccionar el CUIT con el que deseas emitir facturas electrónicas

   ![Selección de CUIT](/documentation/images/afip/04-seleccion-cuit.png)
   *Pantalla de selección de CUIT cuando hay múltiples asociados*

---

### **🔗 1.2 Crear nueva relación y seleccionar servicio**

#### **📋 Paso a paso:**
1. **Seleccionar** "Nueva Relación"

   ![Nueva Relación](/documentation/images/afip/05-nueva-relacion.png)
   *Botón para crear una nueva relación*

2. **Seleccionar** "Buscar" en la opción "Servicio"

   ![Buscar Servicio](/documentation/images/afip/06-buscar-servicio.png)
   *Campo de búsqueda de servicios*

3. **Asegurate** que en el campo "Representado" figure el CUIT al que le estás habilitando el servicio

   ![Campo Representado](/documentation/images/afip/07-campo-representado.png)
   *Verificación del CUIT representado*

4. **Luego abrir** la opción "ARCA" y seleccionar la opción "WebServices"

   ![WebServices ARCA](/documentation/images/afip/08-afip-webservices.png)
   *Menú desplegable de ARCA mostrando WebServices*

---

### **📑 1.3 Elegir servicio según tipo de factura**

#### **🎯 Tipos de servicios disponibles:**

![Tipos de Servicios](/documentation/images/afip/09-tipos-servicios.png)
*Lista de servicios de facturación disponibles en ARCA*

| Tipo de Factura | Servicio que debés buscar |
|-----------------|---------------------------|
| **Facturas electrónicas A, B, C o M** | "Facturación Electrónica" |
| **Facturas electrónicas de exportación** | "Facturación electrónica de exportación" |
| **Facturas electrónicas T de turismo** | "Web Service Comprobantes T" |

#### **⚠️ Importante:**
*Si necesitás realizar distintos tipos de facturas (por Ej. A y E) debe repetir los pasos del 1.3A al 1.9 seleccionando en cada caso el servicio que corresponda al tipo de factura.*

---

### **👤 1.4 Buscar y asignar representante**

#### **📋 Paso a paso:**
1. **Seleccionar** "Buscar" en la opción "Representante"

   ![Buscar Representante](/documentation/images/afip/10-buscar-representante.png)
   *Campo para buscar representante*

2. **Ingresar el CUIT** `20306836268` y presionar "Buscar"

   ![Ingresar CUIT Representante](/documentation/images/afip/11-cuit-representante.png)
   *Ingreso del CUIT del representante autorizado*

3. **Se le indicará** que el CUIT pertenece a VILAR ALEJANDRO ERNESTO

   ![Confirmación Representante](/documentation/images/afip/12-confirmacion-representante.png)
   *Confirmación de los datos del representante*

#### **⚠️ Nota importante:**
*Ignorá el mensaje de ARCA en rojo sobre el computador fiscal y la "Advertencia del Sistema" que aparece debajo sobre la delegación del servicio.*

---

### **✅ 1.5 Confirmar la relación**

#### **📋 Paso final:**
- **Presione confirmar** nuevamente

  ![Confirmar Relación](/documentation/images/afip/13-confirmar-relacion.png)
  *Botón de confirmación final de la relación*

---

## 🏪 **2. Crear un nuevo punto de venta electrónico**

### **🎯 Objetivo:**
Habilitar la opción "Administración de puntos de venta y domicilios".

#### **💡 Pasos opcionales:**
Estos primeros pasos son opcionales en caso que no tengas el servicio "Administración de puntos de venta y domicilios" habilitado.  
**Si pudiste ver la opción** "Administración de puntos de venta y domicilios" en la sección "Servicios Habilitados" **pasá directamente al punto 2.6**.

---

### **⚙️ 2.1 Adherir el servicio desde administrador**

#### **📋 Paso a paso:**
1. **Ingresar a** "Administrador de Relaciones de Clave Fiscal"

   ![Administrador Relaciones](/documentation/images/afip/14-admin-relaciones.png)
   *Acceso al administrador de relaciones*

2. **Seleccionar** "Adherir Servicio"

   ![Adherir Servicio](/documentation/images/afip/15-adherir-servicio.png)
   *Opción para adherir nuevo servicio*

3. **Abrir la opción** "ARCA", luego la opción "Servicios Interactivos" y buscar el servicio "Administración de puntos de venta y domicilios"

   ![Servicios Interactivos](/documentation/images/afip/16-servicios-interactivos.png)
   *Navegación hacia servicios interactivos*

   ![Puntos de Venta](/documentation/images/afip/17-admin-puntos-venta.png)
   *Servicio de administración de puntos de venta*

4. **Confirmar** la operación

   ![Confirmar Adherir](/documentation/images/afip/18-confirmar-adherir.png)
   *Confirmación de adhesión al servicio*

---

### **🔄 2.2 Reingresar y acceder a administración**

#### **📋 Paso a paso:**
1. **Para que este nuevo servicio quede habilitado** deberás salir del sitio de ARCA e ingresar nuevamente en www.afip.gob.ar y ubicar el botón de acceso directo con la Clave Fiscal, o ingresar a https://auth.afip.gob.ar/contribuyente/

   ![Reingresar ARCA](/documentation/images/afip/19-reingresar-afip.png)
   *Reingreso necesario para activar el nuevo servicio*

2. **En la sección "Servicios Habilitados"**, ingresar a la opción "Administración de puntos de venta y domicilios"

   ![Servicios Habilitados](/documentation/images/afip/20-servicios-habilitados.png)
   *Lista de servicios habilitados mostrando la nueva opción*

3. **Seleccionar la empresa** e ingresar a "A/B/M de Puntos de Venta"

   ![ABM Puntos Venta](/documentation/images/afip/21-abm-puntos-venta.png)
   *Acceso al módulo de alta/baja/modificación de puntos de venta*

4. **Si se presenta el siguiente mensaje**, presionar "Cerrar"

   ![Mensaje Sistema](/documentation/images/afip/22-mensaje-sistema.png)
   *Mensaje informativo del sistema que se puede cerrar*

---

### **➕ 2.3 Crear nuevo punto de venta**

#### **📋 Paso a paso:**
1. **Seleccionar** "Agregar…"

   ![Agregar Punto Venta](/documentation/images/afip/23-agregar-punto-venta.png)
   *Botón para agregar nuevo punto de venta*

2. **Ingresar los siguientes datos:**

   ![Formulario Punto Venta](/documentation/images/afip/24-formulario-punto-venta.png)
   *Formulario completo para crear punto de venta*

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **Número** | Código único del punto de venta, debe ser diferente a otros puntos de venta que ya tengas registrados | 3 |
| **Nombre Fantasía** | Nombre descriptivo del punto de venta | "Factura Electrónica" |
| **Sistema** | Ver tabla de opciones abajo | Según tu condición fiscal |
| **Nuevo domicilio** | Seleccionar el domicilio fiscal asociado al punto de venta | Tu domicilio fiscal |

#### **🏛️ Opciones para el campo "Sistema":**

![Opciones Sistema](/documentation/images/afip/25-opciones-sistema.png)
*Diferentes opciones de sistema según tu condición fiscal*

| Tu condición fiscal | Opción que debés seleccionar |
|--------------------|-----------------------------|
| **MONOTRIBUTISTA** | "Factura Electrónica - Monotributo - Web Services" |
| **RESPONSABLE INSCRIPTO** | "RECE para aplicativos y Web Services" |
| **FACTURA DE EXPORTACIÓN** | "Comprobantes de Exportación - Web Services" |

#### **⚠️ Importante:**
*Asegurate de seleccionar la opción correcta en el campo "Sistema 1":*
- **Si sos MONOTRIBUTISTA**: "Factura Electrónica - Monotributo - Web Services"
- **Si sos RESPONSABLE INSCRIPTO**: "RECE para aplicativos y web services"
- **Si emites FACTURA DE EXPORTACIÓN**: "Comprobantes de Exportación - Web Services"

---

### **✅ 2.4 Confirmar punto de venta**

#### **📋 Paso final:**
- **Seleccionar** "Aceptar" para confirmar la operación

  ![Confirmar Punto Venta](/documentation/images/afip/26-confirmar-punto-venta.png)
  *Confirmación final del nuevo punto de venta*

  ![Punto Venta Creado](/documentation/images/afip/27-punto-venta-creado.png)
  *Confirmación de que el punto de venta fue creado exitosamente*

#### **💡 Nota adicional:**
*Si necesitás realizar facturas locales y facturas de exportación tenés que repetir los pasos del 2.6 al 2.11 para crear ambos tipos de puntos de venta.*

---

## 🎯 **Resumen del proceso completo**

```
🏛️ 1. Entrás a ARCA con clave fiscal nivel 3
   ↓
🔗 2. Habilitás el servicio de facturación electrónica
   ↓
👤 3. Asignás a VILAR ALEJANDRO ERNESTO como representante
   ↓
🏪 4. Creás un punto de venta electrónico
   ↓
✅ 5. Confirmás toda la configuración
   ↓
🎉 ¡Ya podés facturar electrónicamente con PaxaPos!
```

---

## 🚨 **¿Problemas comunes?**

| Problema | Solución |
|----------|----------|
| **"No tengo clave fiscal nivel 3"** | Debés tramitarla en ARCA primero |
| **"No aparece el servicio"** | Verificá que estés en la sección correcta de WebServices |
| **"Error al asignar representante"** | Verificá que el CUIT 20306836268 esté bien escrito |
| **"No puedo crear punto de venta"** | Asegurate de haber habilitado el servicio de administración |

### **📞 ¿Necesitás ayuda?**
Este proceso es técnico y específico de ARCA. Si tenés dudas, consultá con:
- **Contador:** Para aspectos fiscales
- **Soporte PaxaPos:** Para la integración con el sistema
- **ARCA:** Para problemas con la plataforma oficial
