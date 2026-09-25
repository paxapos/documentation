# Compras y Stock

<div id="compras-y-stock"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Operación** → **Compras y stock**  
> **¿Quién lo usa?:** Dueños, administradores y encargados de compras

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Ajusta el comportamiento de los módulos de Compras y Stock: aprobación de órdenes de compra, qué columnas mostrar en el tablero de Compras, retenciones a proveedores y si el stock se pone en cero automáticamente.

1. **Compras:** aprobación de OC y nombre del concepto que se compra.
2. **Columnas del tablero "Flujo de Compras":** qué etapas se muestran en el kanban de Compras.
3. **Pagos a proveedores:** Órdenes de Pago y Retenciones.
4. **Stock:** baja automática a "sin stock".

![Pantalla de Compras y stock](images/manual/configuracion-general/09-compras-stock.png)

> Las secciones **Compras**, **Pagos a proveedores** y **Stock** solo aparecen si tenés esos módulos activos (ver [Módulos](/user-guide/modulos)).

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Configuración del comercio** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Tener activo el módulo correspondiente (Compras, Contable o Stock) para que la sección tenga efecto.

---

## 🎨 Campos: ¿Qué es cada cosa?

<div id="campos-que-es-cada-cosa"></div>

### Compras

| Campo | ¿Qué es? |
|---|---|
| **Habilitar aprobación de órdenes de compra** | Requiere que un superior apruebe cada OC antes de enviarla al proveedor — también permite usar Compras como presupuestador. |
| **Nombre del concepto que se compra** | Cómo se llama lo que comprás en botones y formularios: Ítem, Mercadería, Insumo, Artículo, Material, etc. |

### Columnas del tablero "Flujo de Compras"

Tildá qué columnas del kanban de Compras querés ver: **OC Creada (pendiente)**, **Lista de compras** (ítems solicitados sin OC), **Enviada al proveedor**, **Recepcionada**, **Facturada**, **Pagada** y **Observada**.

### Pagos a proveedores

| Campo | ¿Qué es? |
|---|---|
| **Habilitar Órdenes de Pago** | Permite crear pagos sin fecha, pendientes de aprobación, con soporte para cheques y pagarés con fecha programada. |
| **Habilitar Retenciones en Pagos (Agente de Retención)** | Calcula automáticamente retenciones (Ganancias, IIBB, IVA) al pagar facturas de proveedores. Requiere configurar el régimen de cada proveedor. |

### Stock

| Campo | ¿Qué es? |
|---|---|
| **Stock CERO automático** | Si un producto llega a stock 0, se marca automáticamente como "sin stock" (deja de venderse hasta reponer). |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Exigir aprobación de órdenes de compra

<div id="paso-1-exigir-aprobacion-de-ordenes-de-compra"></div>

1. Andá a **Configuración → Compras y stock**.
2. Activá **Habilitar aprobación de órdenes de compra**.
3. Tocá **Guardar**.
4. Desde ahora, cada OC nueva queda pendiente hasta que un usuario con permiso de aprobación la confirme.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| No veo esta sección en el menú. | El módulo de Compras (o Stock, o Contable) está apagado. | Activalo en [Módulos](/user-guide/modulos) si corresponde a tu plan. |
| Un producto se vendió pese a no tener stock. | **Stock CERO automático** está desactivado. | Activalo para que el sistema lo saque de venta apenas llegue a 0. |
| No encuentro las Retenciones en Pagos. | El módulo **Contable** está apagado, o no configuraste el régimen del proveedor. | Activá el módulo y cargá el régimen de retención en la ficha del proveedor. |
