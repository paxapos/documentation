# Reporte de Propinas

> **¿Dónde está en el sistema?:** Menú principal → **Reportes** → **Análisis Ventas** → **Propinas**  
> **¿Quién lo usa?:** Encargados de Salón y Mozos

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

Registra y organiza las propinas digitales: muestra las propinas acumuladas por día y por mozo, cargadas durante el proceso de cobro con tarjeta o QR, para que el reparto sea transparente y verificable:

1. **Reparto de propinas:** Cálculo transparente de propinas digitales para su distribución entre el personal de salón y cocina.
2. **Respaldo ante reclamos:** Cada propina queda asociada a la mesa, el mozo y el cobro original, evitando discusiones en la liquidación.
3. **Control de cobranza:** Permite al encargado verificar que los cajeros estén cargando la propina en cada cobro electrónico.

---

## 🔑 Requisitos para empezar a usarlo

- Tener activado el módulo de propinas electrónicas.
- Tener el permiso de **Consulta y Reparto de Propinas Digitales** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Filtros: ¿Qué es cada cosa?

| Botón / Filtro | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 📅 **Filtro Fecha** | Encabezado | Muestra las propinas recibidas en una jornada. |
| 👤 **Filtro por Mozo** | Barra superior | Filtra el acumulado de un mozo específico para su liquidación. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Consultar propinas digitales a repartir
1. Seleccioná la fecha del turno finalizado.
2. Revisá la columna **Propina Digital Acumulada** para liquidar el efectivo equivalente al equipo.

### Paso 2: Liquidar por mozo
1. Aplicá el filtro por mozo para ver su acumulado individual.
2. Entregá el efectivo equivalente registrando el pago para dejar constancia del reparto.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| La propina no figura en el reporte. | El cajero no la cargó en la casilla de propina durante la cobranza con tarjeta. | Se debe cargar siempre en el campo **Propina** del modal de cobro. |
| Una propina quedó asignada al mozo equivocado. | La mesa no tenía el mozo asignado correctamente al momento del cobro. | Corregí la asignación de la mesa y el reporte recalculará el acumulado. |
| El total del día no coincide con lo ingresado a la cuenta. | Hay cobros aún pendientes de cierre de lote bancario. | Esperá la confirmación del lote o revisá las transacciones pendientes del día. |
