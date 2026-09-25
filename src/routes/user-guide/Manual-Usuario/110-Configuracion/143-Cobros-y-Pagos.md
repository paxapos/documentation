# Cobros y Pagos

<div id="cobros-y-pagos"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Operación** → **Cobros y pagos**  
> **¿Quién lo usa?:** Dueños y administradores del comercio

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Es el punto de partida para todo lo relacionado a cobros digitales: qué **procesador** (MercadoPago, Payway/Prisma o Banco Macro) cobra en cada canal, el estado de las **cuentas conectadas**, y accesos directos a medios de cobro manuales y terminales.

No repite el detalle de cada procesador acá — ese detalle, con las credenciales y la validación en vivo contra cada plataforma, tiene su propia pantalla y su propio capítulo del manual: **[Medios de Pago](/user-guide/configuracion-procesadores)**.

1. **Procesador por canal:** qué procesador cobra en QR, Link de pago y SmartPOS.
2. **Cuentas conectadas:** estado de la conexión con cada procesador (sin mostrar credenciales).
3. **Medios de cobro y terminales:** accesos directos a los catálogos.
4. **Fee de MercadoPago:** solo lo ven superadministradores.

![Pantalla de Cobros y pagos](images/manual/configuracion-general/06-cobros-pagos.png)

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Configuración de Pasarelas de Pago** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Campos y accesos: ¿Qué es cada cosa?

<div id="campos-y-accesos-que-es-cada-cosa"></div>

| Bloque | ¿Qué muestra o a dónde lleva? |
|---|---|
| **Procesador por canal** | Un selector por canal (QR / Link de pago / SmartPOS) para elegir qué procesador cobra ahí. |
| **Cuentas conectadas** | El estado de la conexión con MercadoPago, Payway y Banco Macro — conectado o no, sin mostrar ninguna credencial. |
| **Medios de cobro manuales** | Lleva al catálogo de medios que ve el cajero (efectivo, transferencia, cheque, etc.) — ver [Instrumentos de Pago Manual](/user-guide/instrumentos-pago-manual). |
| **Terminales** | Lleva al listado de terminales SmartPOS de Payway — ver [Terminales Payway](/user-guide/terminales-payway). Las terminales de MercadoPago Point se sincronizan solas desde la conexión de MercadoPago. |
| **Fee de MercadoPago** | Comisión que se le suma al cliente en cada pago con MercadoPago — solo lo ve y edita un superadministrador de PaxaPOS. |

Para cargar credenciales y conectar cada procesador, seguí la guía específica de cada uno:

- [Configuración de Procesadores de Pago](/user-guide/configuracion-procesadores)
- [Configuración de Banco Macro (Macro Click de Pagos)](/user-guide/configuracion-banco-macro)

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Elegir el procesador de un canal

<div id="paso-1-elegir-el-procesador-de-un-canal"></div>

1. Andá a **Configuración → Cobros y pagos**.
2. En **Procesador por canal**, elegí qué procesador cobra en QR, Link de pago o SmartPOS.
3. Si el procesador todavía no está conectado, vas a ver una advertencia — tocá el link a [Configuración de Procesadores de Pago](/user-guide/configuracion-procesadores) para cargar las credenciales.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Elegí un procesador para un canal pero al cobrar no aparece la opción. | El procesador está elegido pero no tiene credenciales conectadas todavía. | Completá la conexión en [Configuración de Procesadores de Pago](/user-guide/configuracion-procesadores). |
| No sé si mi cuenta de MercadoPago sigue conectada. | Revisá **Cuentas conectadas**: te muestra el estado sin exponer las credenciales. | Si figura desconectada, volvé a vincularla desde [Configuración de Procesadores de Pago](/user-guide/configuracion-procesadores). |
