const a=`# Histórico de Mesas

<div id="historico-de-mesas"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Finanzas** → **Facturación AFIP** → **Histórico de Mesas**  
> **¿Quién lo usa?:** Encargados de Salón, Cajeros y Auditores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Muestra el registro de todas las mesas cerradas y cobradas en fechas pasadas:

1. **Auditoría de consumos pasados:** Muestra el detalle exacto de qué productos consumió una mesa en un día determinado, qué mozo la atendió y cómo pagó.
2. **Facturación a posteriori:** Permite generar una Factura A o B sobre una mesa que fue cerrada como ticket consumidor final previamente.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Consulta y Refacturación de Histórico de Mesas** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Filtros: ¿Qué es cada cosa?

<div id="botones-y-filtros-que-es-cada-cosa"></div>

| Botón / Filtro | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 🔍 **Buscar Mesa** | Encabezado | Filtra por número de mesa o fecha. |
| 🧾 **Facturar** | Al lado de la mesa cerrada | Abre el modal para emitir la factura fiscal AFIP/ARCA. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Reemitir o facturar una mesa pasada

<div id="paso-1-reemitir-o-facturar-una-mesa-pasada"></div>

1. Buscá la mesa por fecha y número.
2. Tocá **Facturar**.
3. Ingresá el CUIT y la Razón Social del cliente si requiere Factura A.
4. Tocá **Emitir Factura**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| AFIP rechaza la factura. | CUIT no inscripto o inválido. | Verificá el número de CUIT del cliente en la consulta pública de AFIP. |
`;export{a as default};
