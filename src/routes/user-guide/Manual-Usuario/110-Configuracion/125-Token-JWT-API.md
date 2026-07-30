# Mi Token JWT API

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Acceso/Seguridad** → **Mi Token JWT API**  
> **¿Quién lo usa?:** Desarrolladores e Integradores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

Muestra las claves y tokens de acceso JWT requeridos para conectar aplicaciones externas o integraciones personalizadas con la API de PaxaPOS:

1. **Generación de credenciales API:** Token de autorización seguro para consultas externas de stock o ventas.

---

## 🔑 Requisitos para empezar a usarlo

- Tener el permiso de **Generación de Tokens de Integración API** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 🔑 **Generar Token** | Esquina superior | Crea un nuevo token de acceso API. |
| 📋 **Copiar Token** | Al lado del token | Copia la clave al portapapeles. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Obtener un token API
1. Tocá **Generar Token**.
2. Tocá **Copiar Token** para usarlo en la integración externa.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| La integración da error 401. | El token expiró o fue regenerado. | Generá un nuevo token y actualizalo en la aplicación externa. |
