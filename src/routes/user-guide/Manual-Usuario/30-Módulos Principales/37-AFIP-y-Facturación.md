# AFIP y facturación electrónica en PaxaPOS

## Configuración inicial del sistema fiscal

Para poder comenzar a facturar con PaxaPos necesitamos que nos conectes con AFIP.  
Seguí estos pasos una única vez y ya queda configurado en el sistema.  
> Recordá que para realizar este trámite debés poseer clave fiscal de nivel 3 en AFIP.

### Habilitar el servicio de factura electrónica

#### Ingreso a AFIP y acceso a administrador

- Ingresar en el sitio de AFIP (www.afip.gob.ar) y ubicar el botón de acceso directo con la Clave Fiscal, o ingresar a https://auth.afip.gob.ar/contribuyente/.
- Ingresar el CUIT, presionar "Siguiente" luego ingresar la clave y seleccionar "Ingresar".
- Seleccionar la opción "Administrador de Relaciones de Clave Fiscal".
- En el caso que tengas más de un CUIT asociado a tu cuenta de AFIP, aparecerá esta pantalla donde tendrás que seleccionar el CUIT con el que deseas emitir facturas electrónicas.

#### Crear nueva relación y seleccionar servicio

- Seleccionar "Nueva Relación"
- Seleccionar "Buscar" en la opción "Servicio"
- Asegurate que en el campo "Representado" figure el CUIT al que le estás habilitando el servicio
- Luego abrir la opción "AFIP" y seleccionar la opción "WebServices"

#### Elegir servicio según tipo de factura

- Para facturas electrónicas A, B, C o M, buscar el servicio "Facturación Electrónica"
- Para facturas electrónicas de exportación, buscar el servicio "Facturación electrónica de exportación"
- Para facturas electrónicas T de turismo, buscar el servicio "Web Service Comprobantes T"

*Si necesitás realizar distintos tipos de facturas (por Ej. A y E) debe repetir los pasos del 1.3A al 1.9 seleccionando en cada caso el servicio que corresponda al tipo de factura.*

#### Buscar y asignar representante

- Seleccionar "Buscar" en la opción "Representante"
- Ingresar el CUIT 20306836268 y presionar "Buscar", se le indicará que el CUIT pertenece a VILAR ALEJANDRO ERNESTO

*Ignorá el mensaje de AFIP en rojo sobre el computador fiscal y la "Advertencia del Sistema" que aparece debajo sobre la delegación del servicio.*

#### Confirmar la relación

- Presione confirmar nuevamente

### Crear un nuevo punto de venta electrónico

Habilitar la opción "Administración de puntos de venta y domicilios".

Estos primeros pasos son opcionales en caso que no tengas el servicio "Administración de puntos de venta y domicilios" habilitado.  
Si pudiste ver la opción "Administración de puntos de venta y domicilios" en la sección "Servicios Habilitados" pasá directamente al punto 2.6.

#### Adherir el servicio desde administrador

- Ingresar a "Administrador de Relaciones de Clave Fiscal"
- Seleccionar "Adherir Servicio"
- Abrir la opción "AFIP", luego la opción "Servicios Interactivos" y buscar el servicio "Administración de puntos de venta y domicilios"
- Confirmar la operación

#### Reingresar y acceder a administración

- Para que este nuevo servicio quede habilitado deberás salir del sitio de AFIP e ingresar nuevamente en www.afip.gob.ar y ubicar el botón de acceso directo con la Clave Fiscal, o ingresar a https://auth.afip.gob.ar/contribuyente/
- En la sección "Servicios Habilitados", ingresar a la opción "Administración de puntos de venta y domicilios"
- Seleccionar la empresa e ingresar a "A/B/M de Puntos de Venta"
- Si se presenta el siguiente mensaje, presionar "Cerrar"

#### Crear nuevo punto de venta

- Seleccionar "Agregar…"
- Ingresar los siguientes datos:

  - **Número**: Código único del punto de venta, debe ser diferente a otros puntos de venta que ya tengas registrados (Ejemplo: 3)
  - **Nombre Fantasía**: Nombre descriptivo del punto de venta. Ejemplo: "Factura Electrónica"
  - **Sistema**:
    - Si sos MONOTRIBUTISTA seleccionar "Factura Electrónica - Monotributo - Web Services"
    - Si sos RESPONSABLE INSCRIPTO seleccionar "RECE para aplicativos y Web Services"
    - Si emites FACTURA DE EXPORTACIÓN seleccionar "Comprobantes de Exportación - Web Services"
  - **Nuevo domicilio**: Seleccionar el domicilio fiscal asociado al punto de venta

*Asegurate de seleccionar la opción correcta en el campo "Sistema":*

- Si sos MONOTRIBUTISTA: "Factura Electrónica - Monotributo - Web Services"
- Si sos RESPONSABLE INSCRIPTO: "RECE para aplicativos y web services"
- Si emites FACTURA DE EXPORTACIÓN: "Comprobantes de Exportación - Web Services"

#### Confirmar punto de venta

- Seleccionar "Aceptar" para confirmar la operación

*Si necesitás realizar facturas locales y facturas de exportación tenés que repetir los pasos anteriores para crear ambos tipos de puntos de venta.*

## Configuración en PaxaPOS

### Configurar conexión con AFIP

Una vez completados los pasos en AFIP, es necesario configurar la conexión en PaxaPOS:

1. **Acceder al módulo de configuración fiscal**
2. **Ingresar datos de AFIP**:
   - CUIT de la empresa
   - Punto de venta habilitado
   - Certificado digital (si corresponde)
3. **Probar la conexión** con AFIP
4. **Validar el funcionamiento** de la facturación electrónica

### Tipos de comprobantes disponibles

PaxaPOS soporta los siguientes tipos de comprobantes fiscales:

- **Facturas A**: Para responsables inscriptos
- **Facturas B**: Para consumidores finales  
- **Facturas C**: Para exentos
- **Facturas M**: Para monotributistas
- **Facturas E**: Para exportación
- **Notas de crédito y débito**
- **Remitos electrónicos**

### Proceso de facturación

#### Emisión de facturas

1. **Completar la venta** en PaxaPOS
2. **Seleccionar tipo de comprobante** según el cliente
3. **Generar factura electrónica** automáticamente
4. **Recibir CAE** (Código de Autorización Electrónico) de AFIP
5. **Imprimir comprobante** con código QR y datos fiscales

#### Anulación de facturas

Para anular una factura ya emitida:

1. Acceder al historial de facturas
2. Seleccionar la factura a anular
3. Generar nota de crédito correspondiente
4. Confirmar la anulación en AFIP

### Reportes fiscales

PaxaPOS genera automáticamente:

- **Libro IVA Digital**
- **Reportes de ventas fiscales**
- **Listados de facturas emitidas**
- **Control de CAE utilizados**
- **Resúmenes mensuales para AFIP**

### Troubleshooting común

#### Problemas de conexión

- Verificar conectividad a internet
- Validar certificados digitales
- Comprobar configuración de proxy si aplica

#### Errores de AFIP

- Revisar datos del punto de venta
- Verificar estado del servicio en AFIP
- Controlar vigencia de certificados

#### Comprobantes rechazados

- Validar datos del cliente
- Verificar tipo de comprobante seleccionado
- Controlar límites de facturación según categoría fiscal

### Mantenimiento y actualizaciones

- **Renovación de certificados**: Realizar antes del vencimiento
- **Actualización de tablas fiscales**: Mantener al día según normativas AFIP
- **Backup de datos fiscales**: Realizar copias de seguridad periódicas
- **Monitoreo de servicios**: Verificar disponibilidad de servicios AFIP

### Normativas y cumplimiento

PaxaPOS cumple con todas las normativas vigentes de AFIP:

- Resolución General 4927/2022 (Facturación Electrónica)
- Resolución General 3749/2015 (Libro IVA Digital)
- Resolución General 4540/2019 (Comprobantes Electrónicos)
- Decretos y resoluciones complementarias actualizadas
