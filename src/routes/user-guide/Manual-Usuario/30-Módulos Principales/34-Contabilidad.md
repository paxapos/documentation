# Módulo de contabilidad PaxaPOS

## Sistema contable integral

Antes de registrar cualquier factura o gasto en tu sistema, es esencial que realices una configuración inicial. Esta preparación asegura que todas tus transacciones se registren correctamente y cumplan con los requisitos fiscales y contables. Deberás configurar los *proveedores*, los *impuestos* y las *clasificaciones* de gastos.

### Acceso a la configuración de contabilidad

1.  Una vez dentro del sistema, dirígete a la sección de *"Contabilidad"*.
2.  Dentro del módulo de Contabilidad, busca y haz clic en la *"P" roja*. Este ícono te llevará a las opciones de configuración de los apartados necesarios: Impuestos, Clasificaciones y Proveedores.


### Configuración de impuestos

Este módulo te permite definir los diferentes tipos de impuestos que aplicarán a tus transacciones.

1.  Dentro del apartado de la *"P" roja*, selecciona el *"Módulo Impuestos"*.
2.  Haz clic en el botón *"Crear Tipo de Impuesto"*.
3.  Se abrirá una ventana donde deberás ingresar la siguiente información:
    * *Nombre de Impuesto:* Asigna un nombre claro al impuesto (ej., "IVA 21%", "IVA 10.5%").
    * *Porcentaje de Impuesto:* Ingresa el valor porcentual del impuesto (ej., 21, 10.5).
    * *Código de AFIP:* Introduce el código oficial de la Administración Federal de Ingresos Públicos (AFIP) correspondiente a este impuesto.
    * Marca las opciones correspondientes:
        * *Tiene Neto:* Selecciona si este impuesto aplica sobre una base imponible neta.
        * *Tiene Impuesto:* Selecciona si este impuesto se calcula sobre un monto que ya incluye otro impuesto.
4.  Haz clic en *"Guardar"* para crear el tipo de impuesto.


## 2. Configuración de Clasificaciones de Factura

Las clasificaciones te ayudarán a organizar tus gastos y facturas por categorías, facilitando el análisis y la generación de reportes contables.

1.  Dentro del apartado de la *"P" roja*, selecciona el *"Módulo de Listado de Clasificaciones"*.
2.  Aquí podrás crear las categorías para tus facturas. Ejemplos comunes incluyen:
    * *Mano de Obra*
    * *Gasto Operativo*
    * *Mercadería*
    * *Servicios Públicos*
    * *Alquileres*
3.  Asegúrate de agregar todas las clasificaciones relevantes para tu comercio.


## 3. Configuración de Proveedores

Es fundamental registrar a tus proveedores para poder asociar las facturas de gasto con la entidad correcta y llevar un seguimiento de tus deudas.

1.  Dentro del apartado de la *"P" roja*, selecciona el *"Módulo Proveedores"*.
2.  Haz clic en el botón *"Crear Proveedores"*.
3.  Se abrirá una ventana en la cual deberás cargar la información de tu proveedor:
    * *Nombre:* Nombre o razón social del proveedor.
    * *Tipo de Impuesto:* Selecciona el tipo de impuesto al que está sujeto este proveedor (ej., "IVA Responsable Inscripto", "Monotributista").
    * *Teléfono:* Número de contacto del proveedor.
    * *Documento:* Tipo de documento de identificación (ej., "CUIT", "DNI").
    * *Número de Documento:* Número correspondiente al tipo de documento seleccionado.
    * *(Cualquier otro campo adicional como dirección, email, etc.)*
4.  Haz clic en *"Guardar"* para registrar al proveedor.


## Carga de Facturas de Gasto

Una vez que hayas configurado los impuestos, clasificaciones y proveedores, ya puedes comenzar a cargar tus facturas y gastos.

1.  Desde el módulo de *"Contabilidad"*, dirígete a la pestaña *"Resumen de Deuda"*.
2.  Haz clic en el botón *"Nuevo Gasto"*.
3.  Se abrirá una pestaña o ventana donde deberás ingresar los detalles del gasto:
    * *Proveedor:* Selecciona el proveedor de la lista que configuraste previamente.
    * *Tipo de Factura:* Elige el tipo de comprobante (ej., "Factura A", "Factura B", "Ticket").
    * *Datos de la Factura:* Ingresa el número de factura, fecha, monto total, etc.
    * *Clasificación:* Selecciona la clasificación que corresponda a este gasto (ej., "Mercadería", "Gasto Operativo").
    * *Observación (Opcional):* Puedes agregar una nota o detalle relevante sobre el gasto.
4.  Una vez completados los campos, tendrás dos opciones de guardado:
    * *Guardar como Pagada:* Selecciona esta opción si el gasto ya fue abonado. El sistema generará el registro del gasto y aplicará el pago automáticamente.
    * *Continuar sin Pagar:* Elige esta opción si el gasto aún no ha sido abonado. La factura quedará registrada como una deuda pendiente en tu "Resumen de Deuda", y podrás registrar su pago o método de pago más adelante.

