# 🏛️ AFIP y Facturación Electrónica

> 🎯 **¿Para qué sirve esto?**  
> Para poder comenzar a facturar con PaxaPos necesitamos que nos conectes con AFIP. Seguí estos pasos una única vez y ya queda configurado en el sistema.

---

## ⚠️ **REQUISITO OBLIGATORIO**
> **Recordá que para realizar este trámite debés poseer clave fiscal de nivel 3 en AFIP.**

---

## 🚀 **1. Habilitar el servicio de factura electrónica por web service**

### **🌐 1.1 Ingreso a AFIP y acceso a Administrador**

#### **📋 Paso a paso:**
1. **Ingresar en el sitio de AFIP** (www.afip.gob.ar) y ubicar el botón de acceso directo con la Clave Fiscal, o ingresar a https://auth.afip.gob.ar/contribuyente/
2. **Ingresar el CUIT**, presionar "Siguiente" luego ingresar la clave y seleccionar "Ingresar"
3. **Seleccionar la opción** "Administrador de Relaciones de Clave Fiscal"
4. **En el caso que tengas más de un CUIT** asociado a tu cuenta de AFIP, aparecerá esta pantalla donde tendrás que seleccionar el CUIT con el que deseas emitir facturas electrónicas

---

### **🔗 1.2 Crear nueva relación y seleccionar servicio**

#### **📋 Paso a paso:**
1. **Seleccionar** "Nueva Relación"
2. **Seleccionar** "Buscar" en la opción "Servicio"
3. **Asegurate** que en el campo "Representado" figure el CUIT al que le estás habilitando el servicio
4. **Luego abrir** la opción "AFIP" y seleccionar la opción "WebServices"

---

### **📑 1.3 Elegir servicio según tipo de factura**

#### **🎯 Tipos de servicios disponibles:**

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
2. **Ingresar el CUIT** `20306836268` y presionar "Buscar"
3. **Se le indicará** que el CUIT pertenece a VILAR ALEJANDRO ERNESTO

#### **⚠️ Nota importante:**
*Ignorá el mensaje de AFIP en rojo sobre el computador fiscal y la "Advertencia del Sistema" que aparece debajo sobre la delegación del servicio.*

---

### **✅ 1.5 Confirmar la relación**

#### **📋 Paso final:**
- **Presione confirmar** nuevamente

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
2. **Seleccionar** "Adherir Servicio"
3. **Abrir la opción** "AFIP", luego la opción "Servicios Interactivos" y buscar el servicio "Administración de puntos de venta y domicilios"
4. **Confirmar** la operación

---

### **🔄 2.2 Reingresar y acceder a administración**

#### **📋 Paso a paso:**
1. **Para que este nuevo servicio quede habilitado** deberás salir del sitio de AFIP e ingresar nuevamente en www.afip.gob.ar y ubicar el botón de acceso directo con la Clave Fiscal, o ingresar a https://auth.afip.gob.ar/contribuyente/
2. **En la sección "Servicios Habilitados"**, ingresar a la opción "Administración de puntos de venta y domicilios"
3. **Seleccionar la empresa** e ingresar a "A/B/M de Puntos de Venta"
4. **Si se presenta el siguiente mensaje**, presionar "Cerrar"

---

### **➕ 2.3 Crear nuevo punto de venta**

#### **📋 Paso a paso:**
1. **Seleccionar** "Agregar…"
2. **Ingresar los siguientes datos:**

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **Número** | Código único del punto de venta, debe ser diferente a otros puntos de venta que ya tengas registrados | 3 |
| **Nombre Fantasía** | Nombre descriptivo del punto de venta | "Factura Electrónica" |
| **Sistema** | Ver tabla de opciones abajo | Según tu condición fiscal |
| **Nuevo domicilio** | Seleccionar el domicilio fiscal asociado al punto de venta | Tu domicilio fiscal |

#### **🏛️ Opciones para el campo "Sistema":**

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

#### **💡 Nota adicional:**
*Si necesitás realizar facturas locales y facturas de exportación tenés que repetir los pasos del 2.6 al 2.11 para crear ambos tipos de puntos de venta.*

---

## 🎯 **Resumen del proceso completo**

```
🏛️ 1. Entrás a AFIP con clave fiscal nivel 3
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
| **"No tengo clave fiscal nivel 3"** | Debés tramitarla en AFIP primero |
| **"No aparece el servicio"** | Verificá que estés en la sección correcta de WebServices |
| **"Error al asignar representante"** | Verificá que el CUIT 20306836268 esté bien escrito |
| **"No puedo crear punto de venta"** | Asegurate de haber habilitado el servicio de administración |

### **📞 ¿Necesitás ayuda?**
Este proceso es técnico y específico de AFIP. Si tenés dudas, consultá con:
- **Contador:** Para aspectos fiscales
- **Soporte PaxaPos:** Para la integración con el sistema
- **AFIP:** Para problemas con la plataforma oficial
