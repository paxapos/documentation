# Ventas y Salón

<div id="ventas-y-salon"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Operación** → **Ventas y salón**  
> **¿Quién lo usa?:** Dueños y administradores del comercio

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Define cómo se llaman las cosas en tu comercio y cómo se comporta la atención de mesas (la "adición") en el día a día.

1. **Terminología:** cómo se llama cada concepto — por ejemplo, en un hotel "Mesa" se puede renombrar a "Habitación" y "Mozo" a "Recepcionista".
2. **Adición / salón:** cómo se abren y atienden las mesas.
3. **Números y horarios:** hora de corte del día y precisión de redondeo.
4. **Estadísticas:** producto destacado en los reportes.

![Pantalla de Ventas y salón](images/manual/configuracion-general/04-ventas-salon.png)

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Configuración del comercio** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Campos: ¿Qué es cada cosa?

<div id="campos-que-es-cada-cosa"></div>

### Terminología

Cómo se llaman las cosas en el sistema — cambiá estos nombres si tu rubro no es gastronómico clásico.

| Campo | Ejemplo gastronómico | Ejemplo hotelería |
|---|---|---|
| **Entidad vendedora** | Mozo | Recepcionista |
| **Objeto de venta** | Mesa | Habitación |
| **Número aplicado al objeto de venta** | Cubierto | Huésped |
| **Entidad que compra** | Cliente | Cliente |
| **Catálogo** | Carta / Menú | — |
| **Comanda** | Comanda | Consumo |
| **Subtotal de la comanda** | Subtotal | Subtotal |

### Adición / salón

| Campo | ¿Qué es? |
|---|---|
| **Indicar la cantidad de cubiertos al abrir mesa** | No / Sí y obligatorio / Sí pero opcional. |
| **Qué ventana mostrar al abrir una mesa rápidamente** | A dónde te lleva el sistema apenas abrís una mesa desde el mapa de salón. |
| **Ver el estado de las comandas en el salón** | Si está activo, ves el estado de cada comanda en el listado y la mesa cambia de color cuando hay comandas listas para llevar. |
| **Efectos de transición en el salón** | Animaciones al cambiar de pantalla en la adición. |
| **Imprimir remito al hacer checkout en efectivo** | Si está activo, se imprime el remito automáticamente al cobrar en efectivo. |
| **Mozo/vendedor por defecto al crear mesa** | Quién queda asignado si no elegís uno al abrir la mesa. |
| **Porcentaje máximo de descuento que puede hacer un mozo** | Tope de descuento que puede aplicar el personal de salón sin pedir autorización. |

### Números y horarios

| Campo | ¿Qué es? |
|---|---|
| **Hora de corte del día** | A partir de qué hora (después de las 00:00) empieza a contar el "día siguiente". Por ejemplo, mesas cerradas después de la 00:30 se computan en el día anterior hasta esta hora de corte. |
| **Precisión (centavos a redondear)** | Cuántos centavos se redondean al sumar productos. Si facturás electrónicamente por AFIP queda fijo en 2 decimales, porque ARCA lo exige. |

### Estadísticas

| Campo | ¿Qué es? |
|---|---|
| **ID de producto estrella para Estadísticas** | El o los productos (separados por coma, sin espacios) que se destacan en el detalle de Estadísticas. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Cambiar la terminología del comercio

<div id="paso-1-cambiar-la-terminologia-del-comercio"></div>

1. Andá a **Configuración → Ventas y salón**.
2. En el bloque **Terminología**, cambiá los nombres que quieras (ej. "Mesa" → "Habitación").
3. Tocá **Guardar**.
4. Los nuevos nombres se aplican en todo el sistema: menús, botones y reportes.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Cambié "Mesa" por "Habitación" pero algunas pantallas todavía dicen "Mesa". | Algunos textos fijos del sistema no toman la terminología personalizada. | Reportalo a soporte indicando en qué pantalla aparece. |
| Las ventas de anoche aparecen en el reporte de hoy. | La **hora de corte del día** está configurada muy temprano (o en 0). | Ajustá la hora de corte a un horario en el que ya no haya mesas abiertas (ej. las 5 o 6 de la mañana). |
| Un mozo pudo aplicar más descuento del esperado. | El **porcentaje máximo de descuento** está configurado muy alto, o en 100. | Bajalo al tope real que querés permitir sin autorización de un superior. |
