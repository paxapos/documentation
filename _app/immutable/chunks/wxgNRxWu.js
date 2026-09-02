const e=`# Configuración de Email (SMTP)

<div id="configuracion-de-email-smtp"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Sistema** → **Configuración Email**  
> **¿Quién lo usa?:** Administradores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite configurar el servidor de correo electrónico del comercio (SMTP) para el envío automático de comprobantes, facturas en PDF y alertas:

1. **Envío de comprobantes por email:** Permite enviar facturas digitales a los clientes por correo tras la compra.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener datos del servidor SMTP de la casilla de correo del local.
- Tener el permiso de **Configuración de Servidor de Correo SMTP** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Campos: ¿Qué es cada cosa?

<div id="botones-y-campos-que-es-cada-cosa"></div>

| Campo / Botón | ¿Dónde está? | ¿Qué hace al completar / tocar? |
|---|---|---|
| ✉️ **Servidor SMTP** | Formulario | Dirección del servidor de salida de correo. |
| 🧪 **Enviar Email de Prueba** | Pie del panel | Comprueba la conexión enviando un mensaje de prueba. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Configurar servidor de correo

<div id="paso-1-configurar-servidor-de-correo"></div>

1. Ingresá el **Servidor SMTP**, **Puerto**, **Usuario** y **Contraseña**.
2. Tocá **Enviar Email de Prueba**.
3. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El email de prueba rebota o falla. | Contraseña o puerto de seguridad (SSL/TLS) incorrecto. | Verificá los datos con tu proveedor de casilla de correo. |
`;export{e as default};
