# Crear Orden de Compra

> **¿Dónde está en el sistema?:** Menú principal → **Compras** → **Órdenes de Compra** → **Crear OC**  
> **¿Quién lo usa?:** Compradores y Encargados de Stock

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

Permite confeccionar una nueva solicitud de pedido formal para enviar a un proveedor determinado, definiendo qué mercadería se compra, en qué cantidades, a qué precio y hacia qué depósito va a ingresar:

1. **Selección de insumos y cantidades:** Cargá los productos necesarios con los costos unitarios acordados con el proveedor.
2. **Asignación de depósito de destino:** Definí a qué almacén o depósito del local ingresará la mercadería al momento de su recepción.
3. **Control de costos:** Al fijar el precio unitario en la OC, el sistema puede alertar diferencias contra el costo estándar del insumo.

---

## 🔑 Requisitos para empezar a usarlo

- Tener registrados los proveedores y las mercaderías en el sistema.
- Tener el permiso de **Emisión de Órdenes de Compra** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Campos: ¿Qué es cada cosa?

| Campo / Botón | ¿Dónde está? | ¿Qué hace al completar / tocar? |
|---|---|---|
| 🏢 **Proveedor** | Formulario superior | Selecciona el proveedor al cual se emitirá el pedido. |
| 🏬 **Depósito** | Formulario superior | Define el almacén de destino donde se recibirá la mercadería. |
| ➕ **Agregar Mercadería** | En la grilla del formulario | Agrega un insumo al pedido especificando la cantidad. |
| 💲 **Precio Unitario** | Columna de la grilla | Carga el costo acordado por unidad; calcula el subtotal automáticamente. |
| 💾 **Guardar y Emitir** | Pie del formulario | Genera la Orden de Compra oficial y la deja disponible para su envío al proveedor. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Generar una Orden de Compra
1. Seleccioná el **Proveedor** de la lista desplegable.
2. Elegí el **Depósito** receptor.
3. En la lista de mercaderías, agregá los ítems a pedir con su **Cantidad** y **Precio Unitario**.
4. Revisá el total del pedido antes de confirmar.
5. Tocá **Guardar y Emitir**.

### Paso 2: Hacer seguimiento del pedido emitido
1. Andá a [Todas las OC](/user-guide/todas-las-ordenes-compra) para verificar que la orden figure como *Pendiente* o *Autorizada*.
2. Cuando el proveedor entregue, registrá la recepción para actualizar el stock.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El insumo no figura en el desplegable. | La mercadería no fue dada de alta en el catálogo de Compras. | Registrá la mercadería en el módulo de **Mercaderías** antes de hacer la OC. |
| El proveedor no aparece en la lista. | Está dado de alta como inactivo o le faltan datos fiscales. | Verificá su ficha en [Proveedores](/user-guide/proveedores) y activá el registro. |
| Emití la OC con una cantidad equivocada. | Error de tipeo al cargar la grilla. | Si aún no fue recibida, podés anularla y generar una nueva; si ya fue recibida, corregí con ajustes de stock. |
