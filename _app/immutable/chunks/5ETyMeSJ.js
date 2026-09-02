const e=`# 📖 Manual de Usuario: Cómo Emitir una Factura A Cargando Datos del Cliente

> **¿Dónde está en el sistema?:** Pantalla de cobro de mesa / **Ventas** → **Clientes** → **Clientes**  
> **¿Quién lo usa?:** Cajeros y Operadores de Venta  

---

## 🎯 ¿Qué es y para qué sirve esta guía?

Te guía para registrar los datos fiscales obligatorios de un cliente (CUIT, Razón Social e IVA Responsable Inscripto) cuando necesitás emitirle una Factura A en lugar de un ticket a Consumidor Final.

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

1. En la pantalla de cobro de la mesa o caja rápida, tocá el botón **Agregar Cliente** (o ingresá desde el menú a **Ventas** → **Clientes** → **Clientes**).
2. Si el cliente no figura en el buscador, tocá el botón **Crear Nuevo Cliente**.
3. Completá las casillas obligatorias:
   - **CUIT / CUIL:** Escribí los 11 números sin espacios ni guiones.
   - **Nombre o Razón Social:** El nombre legal completo de la empresa o persona.
   - **Condición ante el IVA:** Seleccioná la opción **Responsable Inscripto**.
4. Tocá el botón **Guardar Cliente**.
5. Seleccioná el cliente guardado en la mesa, elegí la forma de pago y tocá **Emitir Factura A**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| AFIP rechaza la Factura A. | El CUIT ingresado no está activo o la condición ante el IVA es Monotributista / Consumidor Final. | Verificá la constancia de CUIT del cliente. Si es Monotributista corresponde emitir Factura B. |
`;export{e as default};
