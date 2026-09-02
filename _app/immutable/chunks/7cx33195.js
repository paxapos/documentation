const a=`# Tipos de Impuesto

<div id="tipos-de-impuesto"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Tablas Sistema** → **Tipos de Impuesto**  
> **¿Quién lo usa?:** Contadores y Administradores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite administrar las alícuotas impositivas aplicables a productos y gastos (ejemplo: *IVA 21%, IVA 10.5%, IVA 0% Exento, Percepciones IIBB, Impuestos Internos*):

1. **Configuración impositiva:** Tabla de impuestos requerida para la facturación fiscal AFIP/ARCA y liquidación de tributos.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Configuración de Alícuotas Impositivas** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Nuevo Impuesto** | Esquina superior | Registra una nueva alícuota o tipo de impuesto. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Configurar una alícuota de IVA

<div id="paso-1-configurar-una-alicuota-de-iva"></div>

1. Tocá **Nuevo Impuesto**.
2. Escribí la descripción y el porcentaje (ejemplo: 21.00).
3. Asigná el código AFIP correspondiente.
4. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| La factura electrónica da error de alícuota. | El código AFIP del impuesto no coincide con los códigos reconocidos por el webservice. | Verificá el código AFIP (ejemplo: 5 para IVA 21%, 4 para IVA 10.5%). |
`;export{a as default};
