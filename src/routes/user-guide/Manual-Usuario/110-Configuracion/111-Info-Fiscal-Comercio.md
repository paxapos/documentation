# Información Fiscal del Comercio

<div id="informacion-fiscal-del-comercio"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Sistema** → **Info Fiscal Comercio**  
> **¿Quién lo usa?:** Administradores del Comercio y Contadores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Es el asistente de configuración fiscal donde se registran los datos impositivos del comercio ante AFIP/ARCA:

1. **Datos de facturación:** CUIT del titular o sociedad, Razón Social, Condición de IVA (Inscripto, Monotributo), Ingresos Brutos (IIBB) y fecha de inicio de actividades.
2. **Certificado Digital:** Carga de los certificados .crt y claves privadas .key para conectar con los servidores fiscales de AFIP/ARCA.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Poseer el permiso de **Configuración Fiscal y Certificados AFIP** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Campos: ¿Qué es cada cosa?

<div id="botones-y-campos-que-es-cada-cosa"></div>

| Campo / Botón | ¿Dónde está? | ¿Qué hace al completar / tocar? |
|---|---|---|
| 🏢 **CUIT** | Formulario fiscal | Número de identificación tributaria de 11 dígitos. |
| 🔑 **Subir Certificado** | Formulario | Permite seleccionar el archivo de certificado de AFIP. |
| 💾 **Guardar Configuración Fiscal** | Botón inferior | Sincroniza y valida la conexión con AFIP. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Configurar los datos fiscales

<div id="paso-1-configurar-los-datos-fiscales"></div>

1. Ingresá el **CUIT** sin guiones.
2. Seleccioná la **Condición frente al IVA** (ejemplo: *Responsable Inscripto*).
3. Subí el archivo del **Certificado Digital** y la **Clave Privada**.
4. Tocá **Guardar Configuración Fiscal**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| Error "Certificado expirado o inválido". | El certificado de AFIP tiene fecha de vencimiento superada. | Generá un nuevo alias y certificado en la web de AFIP con clave fiscal. |
