const a=`# Stock Valorizado

<div id="stock-valorizado"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Stock** → **Depósitos y Reportes** → **Stock Valorizado**  
> **¿Quién lo usa?:** Contadores, Gerentes y Administradores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Muestra el valor monetario total del inventario acumulado en los depósitos del local:

1. **Valuación de activos en mercadería:** Multiplica el stock actual de cada insumo por su último costo de compra o costo promedio.
2. **Capital inmovilizado:** Permite conocer exactamente cuánto dinero representan las materias primas guardadas en depósito.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Contar con el permiso de **Acceso a Reportes de Stock Valorizado** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Filtros: ¿Qué es cada cosa?

<div id="botones-y-filtros-que-es-cada-cosa"></div>

| Botón / Filtro | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 💵 **Método de Valorización** | Encabezado | Cambia el cálculo entre Último Costo o Costo Promedio Ponderado. |
| 📊 **Exportar Excel** | Esquina superior | Descarga el reporte valorizado a una planilla. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Consultar el valor del inventario

<div id="paso-1-consultar-el-valor-del-inventario"></div>

1. Seleccioná el **Depósito** a valuar.
2. Elegí el criterio de costo (ejemplo: *Último Costo de Compra*).
3. Revisá la fila **Total General** al pie de la tabla.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El total da un monto inconsistente. | Hay mercaderías con costo $0 cargado. | Actualizá el costo de compra de las materias primas sin precio. |
`;export{a as default};
