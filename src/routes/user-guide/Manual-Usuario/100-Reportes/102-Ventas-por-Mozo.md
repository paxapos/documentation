# Ventas por Mozo

> **¿Dónde está en el sistema?:** Menú principal → **Reportes** → **Análisis Ventas** → **Ventas x Mozo**  
> **¿Quién lo usa?:** Encargados de Salón y Gerentes

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

Mide el desempeño individual del equipo de salón: muestra el rendimiento y total facturado por cada camarero o mozo del local en un período determinado, útil tanto para premiar al personal destacado como para detectar mesas mal asignadas:

1. **Rendimiento del personal de salón:** Total facturado, cantidad de mesas atendidas y ticket promedio alcanzado por cada mozo.
2. **Cálculo de comisiones:** Base de cálculo para comisiones por venta si el comercio utiliza este esquema.
3. **Detección de desvíos:** Un mozo con ventas muy por debajo del promedio puede indicar problemas de asignación de mesas o de servicio.

---

## 🔑 Requisitos para empezar a usarlo

- Tener el permiso de **Consulta de Reporte de Ventas por Mozo** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Que el personal asigne el mozo correctamente al abrir cada mesa.

---

## 🎨 Botones y Filtros: ¿Qué es cada cosa?

| Botón / Filtro | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 📅 **Filtro Fecha** | Encabezado | Cambia el día o rango de análisis. |
| 🔄 **Ordenar por Facturación / Mesas** | Encabezado de la grilla | Reordena el ranking de mozos según el criterio que necesités evaluar. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Consultar ventas de un mozo
1. Seleccioná las fechas del período.
2. Buscá al mozo en la tabla y revisá la columna **Facturación Total**.
3. Compará su ticket promedio contra el resto del equipo para dimensionar su rendimiento.

### Paso 2: Liquidar comisiones del período
1. Filtrá por la quincena o el mes a liquidar.
2. Usá la columna **Facturación Total** como base para aplicar el porcentaje de comisión acordado.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Un mozo aparece con $0 facturados. | No se le asignaron las mesas al momento de abrirlas. | Recordá al personal asignar correctamente el mozo al abrir cada mesa. |
| Las ventas de una mesa figuran en otro mozo. | La mesa fue transferida durante el servicio y quedó asignada al receptor final. | Es el comportamiento esperado; si necesitás el histórico completo, revisá los movimientos de la mesa. |
| El total no coincide con el Resumen General. | El filtro incluye días con salón cerrado o solo delivery. | Ajustá el rango de fechas para cubrir únicamente jornadas con servicio de salón. |
