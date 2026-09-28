# Factura Manual

<div id="factura-manual"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Finanzas** → **Facturas y Pagos** → **Factura Manual**
> **¿Quién lo usa?:** Encargados de Cuentas a Pagar y Contadores

> 🎯 **¿Para qué sirve esto?**
> Sirve para cargar a mano una factura que te hizo un proveedor: luz, alquiler, mercadería.
> Al guardarla, queda la deuda con ese proveedor hasta que la pagues.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso **Contabilidad / Gastos** con la acción **cargar_gasto**, en [Permisos por Rol](/user-guide/permisos-por-rol).
- Tené a mano la factura de papel o el PDF. Vas a copiar los datos.
- El proveedor tiene que estar en [Proveedores](/user-guide/proveedores). Si no está, el sistema lo crea al guardar.
- Podés cargar poco y completar después. El dato más importante es el **Total de la Factura**.

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Finanzas marcado en rojo](images/manual/70-finanzas/76-00a-menu-grupo-finanzas.png)

1. En el menú de la izquierda, tocá **Finanzas**.

![Opción Factura Manual marcada en rojo, debajo del título Facturas y Pagos](images/manual/70-finanzas/76-00b-menu-opcion-factura-manual.png)

2. Tocá **Factura Manual**. Está debajo del título **FACTURAS Y PAGOS**.

![Pantalla Factura Manual con la zona para subir la imagen a la izquierda y los datos de la factura a la derecha](images/manual/70-finanzas/76-01-pantalla-factura-manual.png)

Así se ve la pantalla, con el título **Nueva Factura** arriba. Es larga: bajá con la rueda del mouse para ver todo.

---

## 🖼️ Paso 2: Adjuntá la imagen (si querés)

<div id="paso-2-adjunta-la-imagen-si-queres"></div>

![Recuadro punteado con una nube y el texto Arrastrá o hacé clic para adjuntar imagen de la factura](images/manual/70-finanzas/76-02-zona-imagen.png)

- **Arrastrá o hacé clic**: arrastrá la foto de la factura hasta el recuadro, o tocalo y elegí el archivo. Sirve un PDF, JPG o PNG de hasta 10 MB.
- **IA**: arriba a la izquierda hay una insignia gris que dice **IA OFF** cuando la inteligencia artificial está apagada. Si tu comercio la tiene prendida, el sistema puede leer la factura solo. Si está apagada, cargás los datos a mano.

> 💡 **Consejo útil:** adjuntar la imagen es opcional, pero después te ahorra buscar el papel.

---

## 📝 Paso 3: Completá los datos de la factura

<div id="paso-3-completa-los-datos-de-la-factura"></div>

![Datos de la factura completos: fecha, proveedor Distribuidora Ejemplo, tipo B, número 0001-00000123 y la observación Factura de prueba del manual](images/manual/70-finanzas/76-03-datos-de-la-factura.png)

- **Fecha de la factura**: la fecha que dice el papel. Es obligatoria.
- **Vencimiento (opcional)**: hasta cuándo tenés para pagarla.
- **Proveedor**: escribí parte del nombre o el CUIT y tocá el proveedor en la lista. Por ejemplo: *Distribuidora Ejemplo*.
- **Tipo de factura**: elegí la letra de la factura. Por ejemplo: **"B"**.
- **Número de factura**: a la izquierda el punto de venta (por ejemplo *0001*) y a la derecha el número (por ejemplo *00000123*).
- **Clasificación (opcional)**: para qué gasto es. Por ejemplo: *MANO DE OBRA*.
- **PDV / Centro de costo (opcional)**: a qué local o sector pertenece el gasto.
- **CAPEX / Bien de uso**: tildalo solo si es una inversión, como una máquina o equipamiento.
- **Observaciones (opcional)**: un texto libre. Por ejemplo: *Factura de prueba del manual*.

> 💡 **Consejo útil:** al guardar, el sistema completa el número con ceros. Por ejemplo, *0001-00000123* se ve como *00001-00000000000000000123*.

> 💡 **Consejo útil:** si escribís un número que ya cargaste para ese proveedor, el sistema avisa que ya existe y no la guarda dos veces.

---

## 🧾 Paso 4: Revisá los impuestos

<div id="paso-4-revisa-los-impuestos"></div>

![Columna Impuestos del proveedor con retenciones de Ganancias, IIBB, IVA y SUSS, y el botón Agregar Otros Impuestos](images/manual/70-finanzas/76-04-impuestos-del-proveedor.png)

Al elegir el proveedor, abajo de la imagen aparecen sus impuestos.

- **Casillero de cada impuesto**: tildalo si la factura lo lleva. Después completá el importe.
- **Agregar Otros Impuestos**: abre la lista de los demás impuestos, como **IVA 21%**.
- Si todavía no elegiste proveedor, ves el mensaje **Seleccioná un proveedor para ver los impuestos**.

![Impuesto IVA 21% tildado, con el neto 1239.67 y el IVA calculado 260,33](images/manual/70-finanzas/76-05-agregar-iva.png)

Ejemplo con **IVA 21%**:

1. Tocá **Agregar Otros Impuestos** y tildá **IVA 21%**.
2. Escribí el importe sin IVA en **Neto**. Por ejemplo: *1239.67*.
3. El sistema calcula el **Impuesto** solo: *260,33*.
4. El **Total de la Factura** se completa con la suma: *1500*.

---

## 💵 Paso 5: Escribí el total y guardá

<div id="paso-5-escribi-el-total-y-guarda"></div>

![Importes: Neto Gravado, Total de la Factura con 1500, Moneda ARS, y los botones Guardar borrador y Guardar y Pagar](images/manual/70-finanzas/76-06-importes-y-botones.png)

- **Neto Gravado**: no se escribe. Se calcula solo con los impuestos que tildaste. Por ejemplo: *1239,67*.
- **Total de la Factura**: escribí el total del papel. Por ejemplo: *1500*.
- **Moneda**: dejá **ARS** (pesos). Si elegís otra, aparece el casillero **Cotización**.
- **Guardar borrador**: guarda la factura **sin pagar**. Queda la deuda.
- **Guardar y Pagar**: guarda la factura y te lleva a pagarla.

> ⚠️ **Atención:** **Guardar y Pagar** te lleva a registrar un pago de verdad. Si solo querés cargar la deuda, usá **Guardar borrador**.

1. Para dejar la factura pendiente de pago, tocá **Guardar borrador**.
2. El sistema guarda la factura y vuelve a la pantalla desde donde entraste.
3. Buscala en [Historial de Facturas](/user-guide/historial-de-facturas). Vas a verla con el monto en **Falta pagar**.

> 💡 **Consejo útil:** el botón **Guardar** solo aparece al editar una factura que ya está toda pagada.

---

## 📦 Paso 6: Cargá los ítems (opcional)

<div id="paso-6-carga-los-items-opcional"></div>

![Panel Ítems de la factura con un renglón Harina 0000 x 25 kg, cantidad 1 e importe 1500, y el botón Agregar ítem](images/manual/70-finanzas/76-08-items-de-la-factura.png)

Es el detalle de lo que compraste. Sirve si querés que cuente para el stock.

- **Mercadería**: escribí el nombre y elegí de la lista. Por ejemplo: *Harina 0000 x 25 kg*.
- **Cantidad**: cuántas unidades vinieron.
- **Unidad**: la unidad de medida, si el sistema la ofrece.
- **Importe de línea**: cuánto costó ese renglón.
- **Quitar**: tildalo para sacar el renglón de la factura.
- **Agregar ítem**: suma un renglón nuevo.
- **Suma de los ítems**: el sistema la compara con el total y avisa si no coinciden.

> 💡 **Consejo útil:** si no elegís una mercadería de la lista, el renglón se guarda igual y queda **pendiente de vincular**. Nunca se crea una mercadería nueva desde una factura.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **"Número de Factura: Este número de factura ya esta cargada para este mismo proveedor"** | Esa factura ya se cargó antes. | Buscala en [Historial de Facturas](/user-guide/historial-de-facturas). Si es otra, revisá el número. |
| **No aparece el menú Factura Manual** | Tu usuario no tiene el permiso de cargar facturas. | Pedile a un administrador que lo active en [Permisos por Rol](/user-guide/permisos-por-rol). |
| **No aparece el proveedor en la lista** | Está escrito distinto o no existe. | Escribí menos letras o el CUIT. Si no existe, se crea al guardar. |
| **No puedo guardar** | Falta la **Fecha de la factura**. | Elegí la fecha y tocá **Guardar borrador** otra vez. |
| **Se guardó pero no sé si está paga** | Se usó **Guardar borrador**: queda sin pagar. | Mirá la columna **Falta pagar** en [Historial de Facturas](/user-guide/historial-de-facturas). |
| **Me equivoqué en un dato** | Se guardó con un error. | Abrí la factura con **Editar** en el [Historial de Facturas](/user-guide/historial-de-facturas) y corregila. |
