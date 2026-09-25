# Impresión

<div id="impresion"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Operación** → **Impresión**  
> **¿Quién lo usa?:** Administradores y soporte técnico del local

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Define **qué imprime cada impresora** de tu local: comandas, remitos, tickets fiscales y pedidos de compra.

1. **Servidor de impresión:** cuál es el Fiscalberry activo de tu comercio (el programa que corre en tu PC/Raspberry y recibe la cola de impresión).
2. **Perfiles de impresión:** la forma recomendada y más flexible de definir impresoras — un perfil agrupa qué impresora usar para fiscal, remito, cajón y compras, y se puede asignar a un mozo, un usuario o un puesto/terminal.
3. **Comportamiento al imprimir:** duplicados, separar comandas por impresora/puesto/categoría, QR en el remito, etc.
4. **Impresoras por defecto:** el respaldo que se usa solo en los dispositivos que **no** tienen un perfil asignado.

![Pantalla de Impresión](images/manual/configuracion-general/05-impresion.png)

> 💡 Esta sección es la **configuración**: qué impresora hace qué. Para dar de alta las impresoras físicas (conectarlas por red, USB o Bluetooth) usá [Gestión de Impresoras](/user-guide/impresoras).

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener instalado y corriendo el **Servicio de Impresión** (Fiscalberry) en el local — ver [Gestión de Impresoras](/user-guide/impresoras).
- Tener el permiso de **Administración de Impresoras del Sistema** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Campos: ¿Qué es cada cosa?

<div id="campos-que-es-cada-cosa"></div>

### Servidor de impresión

| Campo | ¿Qué es? |
|---|---|
| **Servidor de impresión activo para el comercio** | Elegí cuál Fiscalberry (de los que se conectaron alguna vez a tu comercio) es el que recibe la cola de impresión hoy. |

### Perfiles de impresión

Cada perfil define qué impresora usar para fiscal, remito, cajón y compras, y se puede asignar a un mozo, un usuario o un terminal puntual. Es el mecanismo recomendado — si ya usás Perfiles, dejá de depender del bloque "Impresoras por defecto" de más abajo. El detalle de alta y edición de perfiles está en [Perfiles de Impresión](/user-guide/perfiles-de-impresion).

### Comportamiento al imprimir

| Campo | ¿Qué es? |
|---|---|
| **Cierres duplicados a imprimir al cerrar mesa** | Cuántas copias del cierre se imprimen automáticamente. |
| **Comandas duplicadas a imprimir** | Cuántas copias de cada comanda se imprimen. |
| **Imprimir fecha y hora en el remito** | Sí/No. |
| **Imprimir QR de pago siempre en el remito** | Si está activo, el QR de pago sale impreso en el remito de todas las mesas mientras no se haya cobrado antes. |
| **Separar comandas** | No separar / Separar por impresora / por puesto / por categoría — genera una comanda distinta por cada uno. |
| **Imprimir todos los productos por todas las comanderas** | Si está activo, un mismo pedido sale impreso completo en cada impresora (ej. la Coca-Cola de barra y la hamburguesa de cocina salen juntas en ambas impresoras) en vez de repartirse. |

### Impresoras por defecto (respaldo sin perfil)

Solo se usan en dispositivos que **no** tienen un perfil de impresión asignado.

| Campo | ¿Qué es? |
|---|---|
| **Impresora de comandas por defecto** | La que se usa si no hay un perfil que la defina. |
| **Impresora fiscal por defecto** | Ídem, para tickets/facturas fiscales. |
| **Impresora de pedidos de Compras por defecto** | Ídem, para pedidos de compra. |
| **Al cerrar o facturar: sacar remito o imprimir directo en la fiscal** | Criterio por defecto (cada perfil puede definir el suyo propio). |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Elegir el servidor de impresión activo

<div id="paso-1-elegir-el-servidor-de-impresion-activo"></div>

1. Andá a **Configuración → Impresión**.
2. En **Servidor de impresión**, elegí el Fiscalberry de tu local.
3. Tocá **Guardar**.

### Paso 2: Configurar el ancho de papel y el formato de tickets

<div id="paso-2-configurar-el-ancho-de-papel-y-el-formato-de-tickets"></div>

1. En el bloque **Comportamiento al imprimir**, revisá las opciones de duplicados y separación de comandas.
2. Guardá los cambios.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El texto sale cortado a la derecha. | Se seleccionó una impresora configurada para 80mm pero el papel real es angosto (58mm). | Revisá el ancho de papel en [Gestión de Impresoras](/user-guide/impresoras) para esa impresora. |
| No imprime nada en ningún local. | El **Servidor de impresión activo** no coincide con el Fiscalberry que está corriendo, o Fiscalberry está apagado/desconectado. | Verificá que el Fiscalberry esté corriendo y que sea el mismo seleccionado acá. |
| Un mozo o terminal imprime en la impresora equivocada. | Ese dispositivo no tiene un perfil de impresión asignado y está usando el respaldo de "Impresoras por defecto". | Asignale un perfil de impresión propio en [Perfiles de Impresión](/user-guide/perfiles-de-impresion). |
