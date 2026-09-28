# Crear una Orden de Compra

<div id="crear-una-orden-de-compra"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Compras** → **Crear orden de compra**
> **¿Quién lo usa?:** Compradores, encargados y administradores

> 🎯 **¿Para qué sirve esto?**
> Una orden de compra (OC) es el pedido que le hacés a un proveedor: qué mercadería, cuánta y a qué precio.
> Queda guardada para controlar después si te llegó todo y si la factura coincide.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- El proveedor tiene que estar cargado. Mirá [Proveedores](/user-guide/proveedores).
- Conviene tener cargadas las mercaderías. Mirá [Mercaderías](/user-guide/mercaderias).
- Tu usuario tiene que tener el permiso de **Compras** en [Permisos por Rol](/user-guide/permisos-por-rol).

> 💡 **Consejo útil:** en la orden de compra va solo mercadería. Un equipo (un horno) o un servicio (un abono) no va acá: se carga como factura cuando llega.

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Compras marcado en rojo](images/manual/50-compras/53-00a-menu-grupo-compras.png)

1. En el menú de la izquierda, tocá **Compras**.

![Opción Crear orden de compra marcada en rojo](images/manual/50-compras/53-00b-menu-opcion-form.png)

2. Tocá **Crear orden de compra**.

![Pantalla Generar Orden de Compra vacía](images/manual/50-compras/53-01-pantalla-form.png)

Así se ve la pantalla **Generar Orden de Compra**.

---

## 📝 Paso 2: Completá los datos de la orden

<div id="paso-2-completa-los-datos-de-la-orden"></div>

![Lista Tipo con Orden de Compra](images/manual/50-compras/53-05-campo-tipo.png)

1. En **Tipo**, dejá **Orden de Compra**. Si solo querés pedir precios, elegí **Solicitud Presupuesto**.

![Casillero Fecha de entrega esperada con una fecha](images/manual/50-compras/53-08-campo-fecha-entrega.png)

2. En **Fecha de entrega esperada**, elegí el día en que necesitás la mercadería. El proveedor la ve.

![Casillero Proveedor con Distribuidora Ejemplo elegido](images/manual/50-compras/53-19-campo-proveedor-list.png)

3. En **Proveedor**, escribí parte del nombre o el CUIT. Tocalo en la lista que aparece.

> ⚠️ **Atención:** elegí siempre el proveedor de la lista. Si escribís un nombre que no está, el sistema crea un proveedor nuevo.

![Botón Subir Remito para elegir un archivo](images/manual/50-compras/53-09-campo-media-file.png)

4. **Subir Remito**: si ya tenés el remito, subí la foto. Es opcional.

![Casilla Recepcionado](images/manual/50-compras/53-10-campo-recepcionado.png)

5. Marcá **Recepcionado** solo si la mercadería ya llegó.

![Casilla Imprimir Orden](images/manual/50-compras/53-12-campo-ctrl-enviar-imprimir.png)

6. Marcá **Imprimir Orden** si querés que salga impresa al guardar.

![Casillero Observaciones con un texto de ejemplo](images/manual/50-compras/53-13-campo-observaciones.png)

7. En **Observaciones**, escribí lo que tenga que saber el proveedor. Por ejemplo: *Entregar por la mañana*.

---

## 🛒 Paso 3: Cargá las mercaderías

<div id="paso-3-carga-las-mercaderias"></div>

![Renglón con Harina 0000 x 25 kg, 4 bolsas, precio, IVA 21%, total y observación](images/manual/50-compras/53-20-renglon-mercaderia.png)

Cada renglón es una mercadería. De izquierda a derecha:

1. **Mercadería**: escribí el nombre y tocala en la lista. Por ejemplo: *Harina 0000 x 25 kg*.
2. **Cantidad**: cuántas pedís. Por ejemplo: *4*.
3. **U.M.**: la unidad en que la pedís. Por ejemplo: *Bolsa*.
4. **Precio Total s/Imp**: el total de ese renglón, sin impuestos. Por ejemplo: *48000*.
5. **IVA**: elegí el IVA. Por ejemplo: *IVA 21%*.
6. **Precio c/Imp**: se calcula solo.
7. **Observación**: una aclaración, si hace falta.

![Formulario con el botón Aplicar de la sugerencia marcado en rojo](images/manual/50-compras/53-29-donde-esta-boton-aplicar.png)

> 💡 **Consejo útil:** debajo de cada renglón aparece una **Sugerencia** de cantidad, según lo que consumís y el stock. Tocá **Aplicar** para usarla.

![Formulario con el botón Ver detalle de la sugerencia marcado en rojo](images/manual/50-compras/53-31-donde-esta-boton-ver-detalle.png)

Tocá **Ver detalle** para ver cómo se calculó.

![Formulario con el botón Agregar otro Mercadería marcado en rojo](images/manual/50-compras/53-17-donde-esta-boton-btn-agregar-mercaderia.png)

8. Para sumar otra mercadería, tocá **Agregar otro Mercadería**, debajo de los renglones.

![Formulario con el tacho rojo de un renglón marcado en rojo](images/manual/50-compras/53-27-donde-esta-boton-remove.png)

9. Para sacar un renglón, tocá su tacho rojo 🗑️.

![Formulario completo con dos renglones cargados](images/manual/50-compras/53-39-pantalla-form-completo.png)

---

## 💾 Paso 4: Guardá la orden

<div id="paso-4-guarda-la-orden"></div>

![Pantalla con el botón azul Guardar Orden de Compra marcado en rojo](images/manual/50-compras/53-02-donde-esta-boton-guardar-orden-de-compra.png)

1. Tocá el botón azul **Guardar Orden de Compra**, arriba.
2. Si tu comercio pide aprobar las compras, la orden queda **a aprobar**. Mirá [Órdenes a aprobar](/user-guide/ordenes-a-aprobar).

### Si escribiste una mercadería nueva

<div id="si-escribiste-una-mercaderia-nueva"></div>

![Ventana Se van a crear mercaderías nuevas en el catálogo](images/manual/50-compras/53-40-ventana-mercaderias-nuevas.png)

Si escribiste una mercadería que no existe, aparece esta ventana antes de guardar.

![Ventana con el botón Sí, crearlas marcado en rojo](images/manual/50-compras/53-37-donde-esta-boton-btn-confirmar-mercaderias-nuevas.png)

3. Si es algo que comprás para el stock o para una receta, tocá **Sí, crearlas**. Se crea la mercadería y se guarda la orden.

![Ventana con el botón Cancelar marcado en rojo](images/manual/50-compras/53-35-donde-esta-boton-cancelar.png)

4. Si te equivocaste de nombre, o es un equipo o un servicio, tocá **Cancelar** y corregí el renglón.

---

## 📤 Paso 5: Mandale la orden al proveedor

<div id="paso-5-mandale-la-orden-al-proveedor"></div>

![Formulario con el botón de WhatsApp marcado en rojo](images/manual/50-compras/53-14-donde-esta-boton-enviar-pedido-por-whatsapp-o-cop.png)

- Tocá el botón de WhatsApp para mandarle el pedido al proveedor o copiarlo.
- También podés mandarla por mail desde [Órdenes de compra](/user-guide/todas-las-ordenes-compra).

> ⚠️ **Atención:** si la orden está **a aprobar**, esperá a que la aprueben antes de mandarla.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **Se creó un proveedor repetido** | Escribiste el nombre y no lo elegiste de la lista. | Juntalos en [Proveedores](/user-guide/proveedores) con **Unificar**. |
| **No aparece la mercadería al escribir** | No está cargada, o está con otro nombre. | Buscala en [Mercaderías](/user-guide/mercaderias) o cargala nueva. |
| **La orden no se puede mandar al proveedor** | Está **a aprobar** o fue **rechazada**. | Revisala en [Órdenes a aprobar](/user-guide/ordenes-a-aprobar). |
| **El total no coincide con la factura** | El precio del renglón se cargó por unidad y no el total. | En **Precio Total s/Imp** va el total del renglón, no el precio unitario. |
