# AFIP y Facturación Electrónica

Para poder comenzar a facturar con PaxaPos necesitamos que nos conectes con AFIP.  
Seguí estos pasos una única vez y ya queda configurado en el sistema.  
> Recordá que para realizar este trámite debés poseer clave fiscal de nivel 3 en AFIP.

## 1. Habilitar el servicio de factura electrónica por web service

### 1.1 Ingreso a AFIP y acceso a Administrador

- Ingresar en el sitio de AFIP (www.afip.gob.ar) y ubicar el botón de acceso directo con la Clave Fiscal, o ingresar a https://auth.afip.gob.ar/contribuyente/.
- Ingresar el CUIT, presionar “Siguiente” luego ingresar la clave y seleccionar “Ingresar”.
- Seleccionar la opción “Administrador de Relaciones de Clave Fiscal”.
- En el caso que tengas más de un CUIT asociado a tu cuenta de AFIP, aparecerá esta pantalla donde tendrás que seleccionar el CUIT con el que deseas emitir facturas electrónicas.

### 1.2 Crear nueva relación y seleccionar servicio

- Seleccionar “Nueva Relación”
- Seleccionar “Buscar” en la opción “Servicio”
- Asegurate que en el campo “Representado” figure el CUIT al que le estás habilitando el servicio
- Luego abrir la opción “AFIP” y seleccionar la opción “WebServices”

### 1.3 Elegir servicio según tipo de factura

- Para facturas electrónicas A, B, C o M, buscar el servicio “Facturación Electrónica”
- Para facturas electrónicas de exportación, buscar el servicio “Facturación electrónica de exportación”
- Para facturas electrónicas T de turismo, buscar el servicio “Web Service Comprobantes T”

*Si necesitás realizar distintos tipos de facturas (por Ej. A y E) debe repetir los pasos del 1.3A al 1.9 seleccionando en cada caso el servicio que corresponda al tipo de factura.*

### 1.4 Buscar y asignar representante

- Seleccionar “Buscar” en la opción “Representante”
- Ingresar el CUIT 20306836268 y presionar “Buscar”, se le indicará que el CUIT pertenece a VILAR ALEJANDRO ERNESTO

*Ignorá el mensaje de AFIP en rojo sobre el computador fiscal y la “Advertencia del Sistema” que aparece debajo sobre la delegación del servicio.*

### 1.5 Confirmar la relación

- Presione confirmar nuevamente

## 2. Crear un nuevo punto de venta electrónico

Habilitar la opción “Administración de puntos de venta y domicilios”.

Estos primeros pasos son opcionales en caso que no tengas el servicio “Administración de puntos de venta y domicilios” habilitado.  
Si pudiste ver la opción “Administración de puntos de venta y domicilios” en la sección “Servicios Habilitados” pasá directamente al punto 2.6.

### 2.1 Adherir el servicio desde administrador

- Ingresar a “Administrador de Relaciones de Clave Fiscal”
- Seleccionar “Adherir Servicio”
- Abrir la opción “AFIP”, luego la opción “Servicios Interactivos” y buscar el servicio “Administración de puntos de venta y domicilios”
- Confirmar la operación

### 2.2 Reingresar y acceder a administración

- Para que este nuevo servicio quede habilitado deberás salir del sitio de AFIP e ingresar nuevamente en www.afip.gob.ar y ubicar el botón de acceso directo con la Clave Fiscal, o ingresar a https://auth.afip.gob.ar/contribuyente/
- En la sección “Servicios Habilitados”, ingresar a la opción “Administración de puntos de venta y domicilios”
- Seleccionar la empresa e ingresar a “A/B/M de Puntos de Venta”
- Si se presenta el siguiente mensaje, presionar “Cerrar”

### 2.3 Crear nuevo punto de venta

- Seleccionar “Agregar…”
- Ingresar los siguientes datos:

  - Número: Código único del punto de venta, debe ser diferente a otros puntos de venta que ya tengas registrados (Ejemplo: 3)
  - Nombre Fantasía: Nombre descriptivo del punto de venta. Ejemplo: “Factura Electrónica”
  - Sistema:
    - Si sos MONOTRIBUTISTA seleccionar “Factura Electrónica - Monotributo - Web Services”
    - Si sos RESPONSABLE INSCRIPTO seleccionar “RECE para aplicativos y Web Services”
    - Si emites FACTURA DE EXPORTACIÓN seleccionar “Comprobantes de Exportación - Web Services”
  - Nuevo domicilio: Seleccionar el domicilio fiscal asociado al punto de venta

*Asegurate de seleccionar la opción correcta en el campo “Sistema 1”:*

- Si sos MONOTRIBUTISTA: “Factura Electrónica - Monotributo - Web Services”
- Si sos RESPONSABLE INSCRIPTO: “RECE para aplicativos y web services”
- Si emites FACTURA DE EXPORTACIÓN: “Comprobantes de Exportación - Web Services”

### 2.4 Confirmar punto de venta

- Seleccionar “Aceptar” para confirmar la operación

*Si necesitás realizar facturas locales y facturas de exportación tenés que repetir los pasos del 2.6 al 2.11 para crear ambos tipos de puntos de venta.*
