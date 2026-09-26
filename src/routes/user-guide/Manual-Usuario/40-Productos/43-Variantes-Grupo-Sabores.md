# Variantes y Grupos de Sabores

<div id="variantes-y-grupos-de-sabores"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Productos** → **Variantes**  
> **¿Quién lo usa?:** Encargados de Menú y Administradores

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Una **variante** agrupa **opciones** que el cliente elige al pedir un producto. Por ejemplo:
- *Gustos de helado* (Chocolate, Frutilla, Dulce de leche…).
- *Punto de la carne* (Jugoso, A punto, Bien cocido).
- *Guarnición* (Papas fritas, Ensalada, Puré).

Cada variante tiene una **Cantidad Mínima** y una **Cantidad Máxima**: cuántas opciones **tiene que** y **puede** elegir el cliente. Por ejemplo, *1 kg de helado: mínimo 1, máximo 4 gustos*.

> 🧭 **Primeros pasos para armar tu menú:**
> 1. Crear las **variantes** (esta guía) y las **categorías** ([Categorías](/user-guide/categorias)). No importa cuál hacés primero.
> 2. Cargar los **productos en el menú** ([Menú de Productos](/user-guide/menu)). Ahí le asignás a cada producto sus variantes.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Contar con el permiso de **Configuración de Variantes y Sabores** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Campos: ¿Qué es cada cosa?

<div id="botones-y-campos-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace? |
|---|---|---|
| ➕ **Crear Variante** | Arriba de la pantalla | Abre el formulario para crear una variante. |
| **Nombre de la Variante** | Formulario | El nombre del grupo de opciones (ejemplo: *Gustos de helado*). |
| **Cantidad Mínima** | Formulario | Mínimo de opciones que **debe** elegir el cliente. |
| **Cantidad Máxima** | Formulario | Máximo de opciones que **puede** elegir el cliente. |
| **Variante Privada** | Formulario | Si la marcás, **no se muestra en pedimelo.online**. |
| **Mostrar cada opción como producto independiente en KDS** | Formulario | Si la marcás, cada opción se muestra como un ítem aparte en la pantalla de cocina. |
| ➕ **Agregar Opción** | Formulario, sección **Opciones de la Variante** | Suma una opción a la variante (ejemplo: *Chocolate*). |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Crear una variante con sus opciones

<div id="paso-1-crear-una-variante-con-sus-opciones"></div>

1. Andá a **Productos** → **Variantes**.
<!-- FOTO: 43-01-menu-variantes -->
2. Tocá **Crear Variante**.
<!-- FOTO: 43-02-boton-crear-variante -->
3. Escribí el **Nombre de la Variante** (ejemplo: *Gustos de helado*).
<!-- FOTO: 43-03-campo-nombre-variante -->
4. Completá **Cantidad Mínima** y **Cantidad Máxima** (ejemplo: mínimo *1*, máximo *4*).
<!-- FOTO: 43-04-campos-cantidad-minima-maxima -->
5. En **Opciones de la Variante**, tocá **Agregar Opción** y escribí cada opción (ejemplo: *Chocolate*, *Frutilla*, *Dulce de leche*).
<!-- FOTO: 43-05-boton-agregar-opcion -->
6. Tocá **Agregar Variante** para guardarla.
<!-- FOTO: 43-06-boton-agregar-variante -->

### Paso 2: Asignar la variante a un producto

<div id="paso-2-asignar-la-variante-a-un-producto"></div>

La variante se asigna **cuando cargás el producto en el menú**, en la sección **PASO 2 · Variantes del Producto** del formulario.

> 🔗 Ver cómo: [Menú de Productos](/user-guide/menu)

> ➡️ **Siguiente paso:** si todavía no lo hiciste, creá las [Categorías](/user-guide/categorias). Después [cargá los productos en el menú](/user-guide/menu).

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El mozo no puede elegir más de una opción. | La **Cantidad Máxima** es 1. | Editá la variante y subí la **Cantidad Máxima**. |
| El sistema obliga a elegir una opción que el cliente no quiere. | La **Cantidad Mínima** es mayor a 0. | Si la opción es opcional, poné **Cantidad Mínima** en 0. |
| La variante no aparece al cargar el producto. | Todavía no la guardaste, o no la tildaste en el producto. | Revisá que exista en **Productos → Variantes** y tildala en **Variantes del Producto** al editar el producto. |
