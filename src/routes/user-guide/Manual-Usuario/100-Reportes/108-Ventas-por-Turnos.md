# Ventas por Turnos

> **¿Dónde está en el sistema?:** Menú principal → **Reportes** → **Análisis Avanzado** → **Ventas por Turnos**  
> **¿Quién lo usa?:** Encargados de Operación y Gerentes

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

Compara los ingresos obtenidos entre los distintos turnos de trabajo del negocio (ejemplo: *Turno Almuerzo vs Turno Noche vs Trasnoche*), para tomar decisiones de personal y horarios con datos reales:

1. **Análisis de franjas horarias:** Identificá qué franja horaria aporta mayor facturación y volumen de comensales.
2. **Optimización de dotación:** Ajustá la cantidad de mozos, cocineros y cajeros según la demanda real de cada turno, no según la costumbre.

---

## 🔑 Requisitos para empezar a usarlo

- Tener configurados los turnos de mesa en el sistema.
- Tener el permiso de **Consulta de Comparativa de Ventas por Turno** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Filtros: ¿Qué es cada cosa?

| Botón / Filtro | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 📊 **Comparar Turnos** | Encabezado | Muestra barras comparativas entre Almuerzo y Cena. |
| 📅 **Filtro Rango de Fechas** | Encabezado | Define el período a comparar (día, semana o mes). |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Comparar rendimiento de turnos
1. Seleccioná el rango de fechas.
2. Comprobá qué turno genera mayor facturación y cubiertos.
3. Analizá también el ticket promedio por turno: un turno con muchas mesas pero ticket bajo puede estar sobrecargando al personal sin rentabilidad.

### Paso 2: Replanificar la operación
1. Con los datos en mano, ajustá la dotación de personal de los turnos más débiles.
2. Si un turno no da resultado sostenidamente, evaluá cambiar horarios de apertura o cierre.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Todas las ventas caen en un mismo turno. | No se definieron los límites de horario de cada turno. | Configurá los horarios en **Turnos de Mesa** en la sección Configuración. |
| Un turno aparece sin datos. | El local estuvo cerrado en esa franja durante el período filtrado. | Ampliá el rango de fechas o excluí los días sin operación. |
| Las ventas de la madrugada no se clasifican bien. | El límite del turno Trasnoche está mal configurado. | Revisá la hora de corte del turno en Configuración para que incluya toda la franja. |
