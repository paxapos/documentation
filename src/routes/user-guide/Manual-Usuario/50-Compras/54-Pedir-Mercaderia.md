# Pedir Mercadería

> **¿Dónde está en el sistema?:** Menú principal → **Compras** → **Órdenes de Compra** → **Pedir Mercadería**  
> **¿Quién lo usa?:** Jefes de Cocina, Mozos y Personal de Depósito

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

Es el canal de comunicación interna entre los sectores del local y el depósito central: permite que cada área (ejemplo: *Cocina, Barra, Salón*) realice sus notas de pedido de insumos sin papeles ni llamados, agilizando la reposición diaria:

1. **Requerimiento interno de insumos:** Solicitá rápido la reposición de mercaderías que tu sector necesita para la jornada de trabajo.
2. **Registro ordenado de pedidos:** Cada solicitud queda fechada y asociada al sector que la pidió, evitando cruces y reclamos entre áreas.
3. **Insumo directo para compras:** Los pedidos internos alimentan la pantalla de [Pendientes de Compra](/user-guide/pendientes-de-compra), donde se consolidan en órdenes a proveedores.

---

## 🔑 Requisitos para empezar a usarlo

- Tener el permiso de **Solicitud Interna de Mercadería** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Contar con los sectores del local (Cocina, Barra, Salón) configurados en el sistema.

---

## 🎨 Botones y Campos: ¿Qué es cada cosa?

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 🍽️ **Sector** | Parte superior | Define desde qué área se realiza el pedido (ejemplo: *Barra*). |
| ➕ **Agregar al Pedido** | Lista de insumos | Incluye el artículo en la nota de pedido interna. |
| 🔢 **Cantidad** | Columna de la grilla | Indica cuántas unidades o fracciones del insumo necesita el sector. |
| 📤 **Enviar Pedido** | Pie de pantalla | Envía la nota al responsable de compras o depósito. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Enviar una solicitud de reposición
1. Seleccioná tu **Sector** origen (ejemplo: *Barra*).
2. Elegí los insumos necesarios y la cantidad requerida.
3. Revisá que no haya ítems duplicados antes de confirmar.
4. Tocá **Enviar Pedido**.

### Paso 2: Seguir el estado de tu pedido
1. El responsable de depósito recibe la solicitud al instante.
2. Si un ítem se aprueba, ingresa por depósito; si falta stock, el depósito rechaza esa parte y te avisa.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El depósito rechaza la solicitud. | Insumo agotado en depósito central. | Verificá el stock general en el módulo de Stock y coordiná con compras la reposición. |
| No encuentro el insumo que necesito pedir. | El artículo no está habilitado para pedido interno. | Solicitá al administrador que lo dé de alta o lo habilite en el catálogo de mercaderías. |
| Envié el pedido por error con cantidades incorrectas. | La nota ya fue enviada al depósito. | Avisá al responsable de depósito y generá una nueva solicitud corregida; el histórico queda registrado. |
