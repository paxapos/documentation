const a=`# Tipos de Documento

<div id="tipos-de-documento"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Tablas Sistema** → **Tipos de Documento**  
> **¿Quién lo usa?:** Administradores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite administrar la tabla de tipos de identificación tributaria y personal usados en el sistema (ejemplo: *DNI, CUIT, CUIL, Pasaporte, Cédula*):

1. **Documentación de clientes:** Configuración de formatos de documentos para la emisión fiscal.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Configuración de Tabla de Tipos de Documento** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Nuevo Tipo de Documento** | Esquina superior | Registra una nueva identificación personal o fiscal. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Agregar un tipo de documento

<div id="paso-1-agregar-un-tipo-de-documento"></div>

1. Tocá **Nuevo Tipo de Documento**.
2. Escribí el nombre y código AFIP.
3. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| AFIP rechaza la facturación A. | El código AFIP asignado al tipo de documento es erróneo. | Verificá el código numérico asignado en las tablas de AFIP (80 para CUIT, 96 para DNI). |
`;export{a as default};
