const e=`# Clientes

<div id="clientes"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Ventas** → **Clientes**  
> **¿Quién lo usa?:** Cajeros, Recepcionistas y Administradores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

El módulo de **Clientes** permite gestionar la base de datos de comensales y compradores del local:

1. **Fidelización e historial:** Registro de datos personales, teléfono, domicilio y CUIT para Facturación A/B.
2. **Descuentos personalizados:** Asignación de categorías de clientes habituales o VIP.
3. **Búsqueda rápida en ventas:** Permite asociar una venta o pedido de delivery a un cliente registrado previamente.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Contar con el permiso de **Gestión de Clientes** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Nuevo Cliente** | Esquina superior derecha | Abre el formulario para dar de alta un nuevo cliente. |
| 🔍 **Buscar** | Barra superior de filtrado | Busca clientes por nombre, teléfono o CUIT. |
| ✏️ **Editar** | Al lado de cada cliente en la tabla | Abre los datos cargados para modificarlos o actualizar dirección. |
| 🗑️ **Eliminar** | Al lado de cada cliente | Borra el registro del cliente. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Registrar un nuevo cliente

<div id="paso-1-registrar-un-nuevo-cliente"></div>

1. Tocá el botón **Nuevo Cliente**.
2. Completa los campos obligatorios:
   - **Nombre:** Escribí el nombre y apellido.
   - **Teléfono:** Número de contacto (clave para pedidos delivery).
   - **CUIT/DNI:** Necesario para emitir comprobantes fiscales.
3. Tocá el botón **Guardar**.

### Paso 2: Buscar y asignar a una venta

<div id="paso-2-buscar-y-asignar-a-una-venta"></div>

1. En la casilla **Buscar**, escribí el teléfono o nombre del cliente.
2. Al seleccionarlo, se vinculará a la venta activa.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El CUIT da error al guardar. | El número tiene un formato o cantidad de dígitos incorrectos. | Verificá que el CUIT contenga 11 dígitos sin guiones extraños. |
`;export{e as default};
