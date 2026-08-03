# Mi Token JWT API

<div id="mi-token-jwt-api"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Acceso/Seguridad** → **Mi Token JWT API**  
> **¿Quién lo usa?:** Desarrolladores e Integradores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Muestra las claves y tokens de acceso JWT requeridos para conectar aplicaciones externas o integraciones personalizadas con la API de PaxaPOS:

1. **Generación de credenciales API:** Token de autorización seguro para consultas externas de stock o ventas.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Generación de Tokens de Integración API** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 🔑 **Generar Token** | Esquina superior | Crea un nuevo token de acceso API. |
| 📋 **Copiar Token** | Al lado del token | Copia la clave al portapapeles. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Obtener un token API

<div id="paso-1-obtener-un-token-api"></div>

1. Tocá **Generar Token**.
2. Tocá **Copiar Token** para usarlo en la integración externa.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| La integración da error 401. | El token expiró o fue regenerado. | Generá un nuevo token y actualizalo en la aplicación externa. |
