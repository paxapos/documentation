const a=`# Ventas por Mozo

<div id="ventas-por-mozo"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Reportes** → **Análisis Ventas** → **Ventas x Mozo**  
> **¿Quién lo usa?:** Encargados de Salón y Gerentes  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Muestra el rendimiento y total facturado por cada camarero o mozo del local en un período determinado:

1. **Rendimiento del personal de salón:** Total facturado, cantidad de mesas atendidas y ticket promedio alcanzado por cada mozo.
2. **Cálculo de comisiones:** Base de cálculo para comisiones por venta si el comercio utiliza este esquema.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Consulta de Reporte de Ventas por Mozo** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Filtros: ¿Qué es cada cosa?

<div id="botones-y-filtros-que-es-cada-cosa"></div>

| Botón / Filtro | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 📅 **Filtro Fecha** | Encabezado | Cambia el día o rango de análisis. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Consultar ventas de un mozo

<div id="paso-1-consultar-ventas-de-un-mozo"></div>

1. Seleccioná las fechas del período.
2. Buscá al mozo en la tabla y revisá la columna **Facturación Total**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Un mozo aparece con $0 facturados. | No se le asignaron las mesas al momento de abrirlas. | Recordá al personal asignar correctamente el mozo al abrir cada mesa. |
`;export{a as default};
