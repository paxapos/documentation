# Gestión de Impresoras

<div id="gestion-de-impresoras"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Impresoras** → **Impresoras**  
> **¿Quién lo usa?:** Administradores y Soporte Técnico  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite registrar y administrar las impresoras térmicas de comanda instaladas en el local:

1. **Configuración de impresoras:** Alta de impresoras de red (IP), USB o Bluetooth para barra, cocina y caja.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Las impresoras deben estar conectadas a la red del local.
- Tener instalado y corriendo en la PC o Raspberry del local el **Servicio de Impresión** (conocido también como *FiscalBerry*): es el programa que conecta PaxaPOS en la nube con tus impresoras físicas.
- Tener el permiso de **Administración de Impresoras del Sistema** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## ⬇️ Descargar el Servicio de Impresión

<div id="descargar-el-servicio-de-impresion"></div>

> 💾 **¿Todavía no lo instalaste?** Descargá la última versión según tu sistema operativo:

| 🖥️ **Sistema Operativo** | ⬇️ **Descarga** |
|---|---|
| **Windows (con interfaz)** | [⬇️ Descargar](https://github.com/paxapos/fiscalberry/releases/latest/download/fiscalberry-windows-gui.zip) |
| **Windows (línea de comandos)** | [⬇️ Descargar](https://github.com/paxapos/fiscalberry/releases/latest/download/fiscalberry-windows-cli.zip) |
| **Linux (con interfaz)** | [⬇️ Descargar](https://github.com/paxapos/fiscalberry/releases/latest/download/fiscalberry-linux-gui.tar.gz) |
| **Linux (línea de comandos / Raspberry Pi)** | [⬇️ Descargar](https://github.com/paxapos/fiscalberry/releases/latest/download/fiscalberry-linux-cli.tar.gz) |
| **Android** | [⬇️ Descargar](https://github.com/paxapos/fiscalberry/releases/latest/download/fiscalberry-android-gui.apk) |

> 🔗 Ver todas las versiones disponibles en la [página de descargas del Servicio de Impresión](https://github.com/paxapos/fiscalberry/releases/latest).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Nueva Impresora** | Esquina superior | Registra una nueva impresora. |
| 🖨️ **Imprimir Prueba** | Al lado de la impresora | Envía un ticket de prueba para comprobar la conexión. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Dar de alta una impresora de red

<div id="paso-1-dar-de-alta-una-impresora-de-red"></div>

1. Tocá **Nueva Impresora**.
2. Escribí el nombre (ejemplo: *Impresora Cocina*) e ingresá su dirección IP (ej: 192.168.1.200).
3. Tocá **Imprimir Prueba**.
4. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El ticket de prueba no sale. | Dirección IP incorrecta o impresora apagada. | Revisá que la impresora esté encendida y con papel puesto. |
