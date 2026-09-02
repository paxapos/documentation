const a=`# 📖 Manual de Usuario: Cómo Activar un Medio de Pago que no Aparece al Cobrar

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Tablas Sistema** → **Tipos de Pago**  
> **¿Quién lo usa?:** Cajeros y Administradores del Sistema  

---

## 🎯 ¿Qué es y para qué sirve esta guía?

Explica cómo habilitar una forma de pago (ejemplo: *Tarjeta de Débito, MercadoPago, Transferencia Bancaria*) cuando un cliente quiere pagar pero la opción no figura en la pantalla de cobro.

---

## 📑 Guía Paso a Paso: ¿Cómo se soluciona?

1. Ingresá a **Menú principal** → **Configuración** → **Tablas Sistema** → **Tipos de Pago** (o a **Medios de Pago** → **General** → **Instrumentos de Pago Manual**).
2. Buscá en la lista el medio de pago que querés activar (ejemplo: *"MercadoPago"*).
3. Tocá el botón **Editar**.
4. Asegurate de marcar la casilla **Usar para Cobros** con un tilde.
5. Tocá **Guardar**.
6. **Resultado:** Al volver a la pantalla de cobro de mesa, el botón del medio de pago estará disponible.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El medio de pago sigue sin aparecer al cobrar. | No se actualizaron las opciones en la pantalla de ventas. | Refrescá la pantalla de ventas o usá la [Solución Inicial](/user-guide/151-01-faq-solucion-inicial-pantalla-congelada). |
`;export{a as default};
