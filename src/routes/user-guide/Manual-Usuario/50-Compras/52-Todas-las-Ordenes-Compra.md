# Órdenes de Compra (OC)

> **¿Dónde está en el sistema?:** Menú principal → **Compras** → **Órdenes de Compra** → **Todas las OC**  
> **¿Quién lo usa?:** Encargados de Compras y Administradores

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

Es el panel central de control de compras: reúne el listado histórico y el estado actual de todas las órdenes de compra emitidas a proveedores, permitiendo hacer seguimiento de cada pedido desde su creación hasta la recepción de la mercadería.

1. **Gestión de pedidos a proveedores:** Consultá el histórico completo de solicitudes, con los montos pactados, los ítems pedidos y las fechas de entrega esperadas.
2. **Estado de cumplimiento:** Identificá de un vistazo qué órdenes están autorizadas, recibidas total o parcialmente, canceladas o pendientes de aprobación.
3. **Trazabilidad y auditoría:** Cada OC registra quién la creó, cuándo se autorizó y qué comprobantes de ingreso generó, lo que facilita conciliar compras contra facturas y stock.

---

## 🔑 Requisitos para empezar a usarlo

- Poseer el permiso de **Consulta y Control de Órdenes de Compra** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Tener proveedores registrados en el [Catálogo de Proveedores](/user-guide/proveedores) para poder filtrar por ellos.

---

## 🎨 Botones y Filtros: ¿Qué es cada cosa?

| Botón / Filtro | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Nueva OC** | Esquina superior | Abre el formulario para generar una nueva solicitud de compra. |
| 🔍 **Filtro Proveedor** | Barra superior | Muestra únicamente las órdenes asociadas a un proveedor específico. |
| 🔄 **Filtro Estado** | Barra superior | Segmenta el listado según el estado de cada orden (Autorizada, Recibida Total, Recibida Parcial, Pendiente, Cancelada). |
| 📅 **Filtro Rango de Fechas** | Barra superior | Limita el histórico al período que necesités revisar (día, semana o mes). |
| 👁️ **Ver Detalle** | Al final de cada fila | Despliega el detalle completo de la OC: ítems, cantidades, precios y receptoría. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Consultar el estado de una Orden de Compra
1. Escribí el nombre del proveedor o el número de OC en la casilla de búsqueda.
2. Verificá el estado en la columna correspondiente (ejemplo: *Recibida Total*).
3. Si necesitás más información, tocá la fila para ver el detalle de ítems y cantidades recibidas.

### Paso 2: Hacer seguimiento de entregas pendientes
1. Aplicá el filtro de estado **Pendiente** o **Recibida Parcial**.
2. Revisá las fechas de entrega esperadas para reclamar al proveedor lo que falte.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| No podés modificar una OC. | La orden ya fue recibida en depósito. | Para corregir cantidades recibidas, utilizá los ajustes de movimiento de stock. |
| No aparece una orden recién creada. | Hay filtros activos que la excluyen (proveedor, estado o fecha). | Limpiá los filtros de la barra superior y volvé a buscar por número de OC. |
| La OC figura como "Pendiente" pero la mercadería llegó. | Falta registrar el ingreso en depósito. | Generá el comprobante de ingreso correspondiente desde el módulo de Stock para actualizar el estado. |
