const e=`# Sugerencias de Compra con IA

<div id="sugerencias-de-compra-con-ia"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Stock** → **Depósitos y Reportes** → **Sugerencias de Compra IA**  
> **¿Quién lo usa?:** Encargados de Compras y Gerentes  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Utiliza modelos predictivos e inteligencia artificial para calcular las cantidades óptimas de insumos que debe comprar el local:

1. **Predicción de compras:** Analiza la velocidad de venta histórica, la estacionalidad del negocio y el stock actual para recomendar la reposición idónea.
2. **Prevención de quiebres:** Evita quedarse sin stock en días de alta demanda.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener activado el módulo de Inteligencia Artificial en la configuración del sistema.
- Tener el permiso de **Consulta de Sugerencias de Compra con IA** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 🤖 **Calcular Sugerencia** | Esquina superior | Ejecuta el análisis predictivo para los próximos días. |
| 🛍️ **Generar Orden de Compra** | Pie de tabla | Convierte la recomendación de la IA directamente en una Orden de Compra. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Generar sugerencia de compra inteligente

<div id="paso-1-generar-sugerencia-de-compra-inteligente"></div>

1. Seleccioná para cuántos días querés calcular la reposición (ejemplo: *7 Días*).
2. Tocá **Calcular Sugerencia**.
3. Verificá las cantidades sugeridas por la IA y presioná **Generar Orden de Compra**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Las sugerencias son demasiado elevadas. | Pocos días de histórico de ventas cargados en el sistema. | Ajustá manualmente la cantidad deseada antes de emiti la OC. |
`;export{e as default};
