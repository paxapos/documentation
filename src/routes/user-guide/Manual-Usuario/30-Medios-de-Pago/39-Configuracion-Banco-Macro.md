# Configuración de Banco Macro (Macro Click de Pagos)

<div id="configuracion-de-banco-macro"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Medios de Pago** → **Configuración de Procesadores** → **Macro Click de Pagos**
> **¿Quién lo usa?:** Administradores del Comercio

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite vincular tu cuenta de **Banco Macro** al sistema para cobrar con **Macro Click de Pagos** (botón de pago, QR y transferencias) directamente desde PaxaPOS:

1. **Conexión con Banco Macro:** Ingreso de las credenciales que te entrega el banco para habilitar los cobros digitales.
2. **Cobros y conciliación:** Una vez configurado, los cobros aprobados quedan disponibles en [Transacciones MacroClick](/user-guide/transacciones-macroclick).

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener una cuenta comercial habilitada en **Banco Macro** con el servicio _Macro Click de Pagos_ contratado.
- Solicitarle al banco (o a tu ejecutivo de cuenta) las dos credenciales del comercio:
    - **GUID:** identificador único de tu comercio.
    - **Frase:** clave secreta del comercio (siempre termina en `=`).
- Tener el permiso de **Configuración de Pasarelas de Pago** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

> ⚠️ **Importante:** Guardá el GUID y la Frase en un lugar seguro. Son los datos que identifican a tu comercio ante Banco Macro; no los compartas por chat o mail sin cifrar.

---

## 🎨 Botones y Campos: ¿Qué es cada cosa?

<div id="botones-y-campos-que-es-cada-cosa"></div>

| Botón / Campo               | ¿Dónde está?                                                  | ¿Qué hace al tocarlo / completarlo?                                      |
| --------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------ |
| ⚙️ **Configurar**           | Al lado de _Macro Click de Pagos_ en la lista de procesadores | Abre el panel para cargar las credenciales del banco.                    |
| **GUID**                    | Panel de configuración                                        | Identificador único de comercio entregado por Banco Macro.               |
| **Frase**                   | Panel de configuración                                        | Clave secreta del comercio; siempre termina en `=`.                      |
| 🔘 **Activar / Desactivar** | Columna Estado                                                | Habilita o deshabilita el cobro con Macro Click en la pantalla de venta. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Cargar las credenciales de Banco Macro

<div id="paso-1-cargar-las-credenciales-de-banco-macro"></div>

1. Andá a **Medios de Pago** → **Configuración de Procesadores**.
2. Buscá **Macro Click de Pagos** en la lista y tocá **Configurar**.
3. Pegá el **GUID** y la **Frase** que te dio Banco Macro (revisá que la Frase termine en `=`, sin espacios extra al copiarla).
4. Tocá **Guardar Cambios**.

### Paso 2: Activar el medio de pago

<div id="paso-2-activar-el-medio-de-pago"></div>

1. Con las credenciales guardadas, activá el interruptor en la columna **Estado**.
2. Hacé un cobro de prueba desde **Ventas** → **Salón de Ventas** para confirmar que Macro Click aparece como opción de cobro.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa?                                                  | ¿Por qué puede ser?                                                    | ¿Cómo se soluciona?                                                                                            |
| -------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Las credenciales dan error al guardar.                         | Se copió la Frase incompleta (sin el `=` final) o con espacios de más. | Volvé a copiar el GUID y la Frase directamente del comunicado del banco, sin espacios al principio o al final. |
| El botón de Macro Click no aparece en la pantalla de cobro.    | El medio de pago quedó desactivado tras cargar las credenciales.       | Volvé a **Configuración de Procesadores** y activá el interruptor de **Estado**.                               |
| Un pago se debitó al cliente pero figura pendiente en PaxaPOS. | Demora en la notificación del banco.                                   | Consultá [Transacciones MacroClick](/user-guide/transacciones-macroclick) y tocá **Actualizar Estado**.        |

---

## 🔗 Ver también

<div id="ver-tambien"></div>

- [Configuración de Procesadores de Pago](/user-guide/configuracion-procesadores)
- [Transacciones MacroClick](/user-guide/transacciones-macroclick)
