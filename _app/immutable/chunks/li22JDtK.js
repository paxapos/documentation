const a=`# Estados de Comanda

<div id="estados-de-comanda"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Comandero** → **General** → **Estados de Comanda**  
> **¿Quién lo usa?:** Administradores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Permite personalizar los estados por los cuales transita una orden de pedido completa (ejemplo: *Ingresada, En Marcha, Lista para Servir, Entregada*):

1. **Flujo de trabajo de cocina:** Personalización de los estados globales de las tarjetas de comanda.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Personalización de Estados de Comanda** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 🎨 **Asignar Color** | En cada estado | Cambia el color de resalte de la comanda en pantalla. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Configurar un estado

<div id="paso-1-configurar-un-estado"></div>

1. Tocá el estado a editar.
2. Seleccioná el nombre y el color distintivo.
3. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| No podés eliminar un estado por defecto. | El estado es utilizado de manera nativa por la aplicación. | Desactivalo en lugar de eliminarlo si no lo utilizás. |
`;export{a as default};
