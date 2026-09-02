# Ventas por Tipo de Pago

> **¿Dónde está en el sistema?:** Menú principal → **Reportes** → **Análisis Ventas** → **Ventas x Tipos Cobro**  
> **¿Quién lo usa?:** Contadores, Cajeros y Tesoreros

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

Desglosa el total facturado según el instrumento financiero o medio de pago utilizado por los clientes, y es la herramienta principal para conciliar lo que dice el sistema con lo que realmente ingresó a las cuentas del negocio:

1. **Distribución de ingresos:** Porcentajes y montos cobrados en Efectivo, Tarjetas de Débito, Crédito, Mercado Pago, QR y Apps de Delivery.
2. **Conciliación de caja:** Facilita la comprobación de ingresos contra los cierres de lote bancarios (ejemplo: *Payway*).
3. **Análisis de comisiones:** Al conocer cuánto se cobra por cada medio, podés estimar el costo real de comisiones bancarias y de plataformas.

---

## 🔑 Requisitos para empezar a usarlo

- Tener el permiso de **Consulta de Desglose por Medio de Pago** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Filtros: ¿Qué es cada cosa?

| Botón / Filtro | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 🍰 **Gráfico de Tortas** | Centro del panel | Muestra visualmente la proporción de cada medio de cobro. |
| 📅 **Filtro Rango de Fechas** | Encabezado | Define el período a auditar (día, semana o mes). |
| 📊 **Exportar** | Esquina superior | Descarga el desglose para conciliar contra los resúmenes bancarios. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Verificar recaudación por medio de pago
1. Seleccioná el rango de fechas a auditar.
2. Comprobá los totales de la columna **Monto Recaudado** por cada medio de pago.
3. Contrastá el total de tarjetas contra el cierre de lote del banco o pasarela.

### Paso 2: Detectar diferencias de conciliación
1. Compará monto por monto cada medio electrónico contra el resumen de la entidad.
2. Si encontrás una diferencia, revisá el histórico de transacciones de ese día para ubicar el cobro mal registrado.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| No coincide la tarjeta con el lote Payway. | Se cobró con una tarjeta diferente en la posnet pero se registró otra en el sistema. | Reajustá la forma de pago ingresando al histórico de transacciones. |
| El efectivo declarado no cierra contra la caja. | Faltan arqueos cargados o hay retiros sin registrar. | Revisá los arqueos y movimientos de caja del período antes de comparar totales. |
| Los cobros QR de delivery no aparecen. | Esas plataformas liquidan aparte y no ingresan como venta directa. | Conciliá esos importes desde los resúmenes de cada plataforma (PedidosYa, Rappi, etc.). |
