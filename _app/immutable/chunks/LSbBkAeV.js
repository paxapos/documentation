const n=`# Ventas por Turnos

<div id="ventas-por-turnos"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Reportes** → **Análisis Avanzado** → **Ventas por Turnos**  
> **¿Quién lo usa?:** Encargados de Operación y Gerentes  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Compara los ingresos obtenidos entre los distintos turnos de trabajo del negocio (ejemplo: *Turno Almuerzo vs Turno Noche vs Trasnoche*):

1. **Análisis de franjas horarias:** Identifica qué franja horaria aporta mayor facturación y volumen de comensales.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener configurados los turnos de mesa en el sistema.
- Tener el permiso de **Consulta de Comparativa de Ventas por Turno** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Filtros: ¿Qué es cada cosa?

<div id="botones-y-filtros-que-es-cada-cosa"></div>

| Botón / Filtro | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 📊 **Comparar Turnos** | Encabezado | Muestra barras comparativas entre Almuerzo y Cena. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Comparar rendimiento de turnos

<div id="paso-1-comparar-rendimiento-de-turnos"></div>

1. Seleccioná el rango de fechas.
2. Comprobá qué turno genera mayor facturación y cubiertos.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Todas las ventas caen en un mismo turno. | No se definieron los límites de horario de cada turno. | Configurá los horarios en **Turnos de Mesa** en la sección Configuración. |
`;export{n as default};
