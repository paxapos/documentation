const a=`# Estados de Ítems de Comanda

<div id="estados-de-items-de-comanda"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Comandero** → **General** → **Estados de Items**  
> **¿Quién lo usa?:** Administradores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite administrar los estados individuales de cada plato dentro de una comanda (ejemplo: *Marchando, Emplatado, Entregado, Anulado*):

1. **Control plato por plato:** Permite que la cocina marque un plato listo de la mesa mientras los demás siguen en preparación.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Configuración de Estados de Platos e Ítems** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Nuevo Estado de Ítem** | Esquina superior | Registra un nuevo estado para platos individuales. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Configurar estado de ítem

<div id="paso-1-configurar-estado-de-item"></div>

1. Tocá el botón **Nuevo Estado de Ítem**.
2. Asignale un nombre descriptivo.
3. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El mozo no ve qué platos de la mesa están listos. | El estado de ítem no tiene activada la notificación visual. | Editá el estado y activá la casilla **Notificar al Mozo**. |
`;export{a as default};
