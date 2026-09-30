# Cómo usar los perfiles de impresión

<div id="perfiles-de-impresion"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → debajo del título **Impresoras** → **Perfiles de Impresión**
> **¿Quién lo usa?:** Administradores

> 🎯 **¿Para qué sirve esto?**
> Un perfil es un juego de impresoras: cuál imprime la factura, cuál el remito, cuál abre el cajón y cuál las compras. Sirve para que cada zona, caja o mozo imprima por sus propias impresoras.

---

## 🔑 **Antes de empezar**

<div id="antes-de-empezar"></div>

- Cargá primero las impresoras en [Impresoras](/user-guide/impresoras). Sin impresoras no hay nada para elegir.
- Si vas a usar un Fiscalberry, tiene que estar instalado y conectado.
- Tener el permiso de perfiles de impresión en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 📍 **Paso 1: Entrá a Perfiles de Impresión**

<div id="paso-1-entra-a-perfiles-de-impresion"></div>

![Menú lateral con el grupo Configuración marcado en rojo](images/manual/110-configuracion/122-00a-menu-grupo-configuracion.png)

1. En el menú de la izquierda, tocá **Configuración**.

![Menú lateral con la opción Perfiles de Impresión marcada en rojo](images/manual/110-configuracion/122-00b-menu-opcion-perfiles-de-impresion.png)

2. Debajo del título **Impresoras**, tocá **Perfiles de Impresión**.

![Pantalla Perfiles de Impresión con el perfil Default y los botones Nuevo Perfil y Migrar desde config actual](images/manual/110-configuracion/122-01-pantalla-perfiles.png)

Arriba, el cuadro **Perfil activo en este terminal** te dice cuál se usa en esta pantalla y por qué. Por ejemplo, *Default del comercio*.

Puede decir otra cosa:

- **Override de sesión**: elegido solo para este terminal.
- **Tu preferencia guardada**: el que elegiste como tuyo.
- **Usuario PIN** o **Asignado al mozo**: el que tiene asignado ese usuario.
- **Configuración legacy**: todavía no hay perfiles.

Si es un **Override de sesión**, al lado aparece el botón **Quitar override de sesión**. Al tocarlo, el terminal vuelve al perfil de siempre.

---

## 📋 **Paso 2: Leé la tabla de perfiles**

<div id="paso-2-lee-la-tabla-de-perfiles"></div>

Seguí mirando la foto de arriba.

Debajo de los dos botones azules está la tabla. Cada renglón es un perfil:

- **Nombre**: el tilde verde marca el perfil activo en este terminal.
- **Servidor (Paxaprinter)**: el Fiscalberry que usa.
- **Fiscal**, **Remito**, **Cajón**, **Compras**: la impresora de cada función. El guion (—) significa que no tiene.
- **Al cerrar mesa**: qué imprime al cerrar (**Nada**, **Imprime Remito** o **Directo Fiscal**).
- **Default**: la etiqueta verde marca el perfil principal del comercio. En los demás hay un botón **Poner default**.
- **Acciones**, de izquierda a derecha:
  - **Usuario** (azul): usar como *mi perfil*, queda guardado para siempre.
  - **Teléfono** (naranja): usar solo en este terminal, hasta que salgas.
  - **Lápiz**: **Editar** el perfil.
  - **Papelera** (roja): **Eliminar**. No aparece en el perfil default.

> ⚠️ **Atención:** **Poner default** cambia el perfil de todo el comercio. **Eliminar** borra el perfil y pide confirmación.

---

## ➕ **Paso 3: Tocá "Nuevo Perfil"**

<div id="paso-3-toca-nuevo-perfil"></div>

1. En la pantalla del Paso 1, buscá el botón azul **Nuevo Perfil**, arriba a la izquierda de la tabla.
2. Tocalo una vez.
3. Se abre la pantalla **Nuevo Perfil de Impresión**.

> 💡 **Consejo útil:** si tu comercio todavía no tiene perfiles, tocá **Migrar desde config actual**. Es el botón blanco, al lado de **Nuevo Perfil**. Crea el perfil default con las impresoras que ya usabas. Suele ser lo primero que hay que hacer.

> ⚠️ **Atención:** **Migrar desde config actual** crea un perfil de verdad. Usalo una sola vez y solo cuando no tengas perfiles.

---

## 📝 **Paso 4: Completá los datos del perfil**

<div id="paso-4-completa-los-datos-del-perfil"></div>

![Primera parte del formulario: nombre del perfil y servidor de impresión](images/manual/110-configuracion/122-02-formulario-parte-1.png)

Bloque **Identificación**:

- **Nombre del perfil** (obligatorio): por ejemplo, *Piso 1*, *Barra* o *Caja principal*.

Bloque **Servidor de Impresión**:

- Elegí el Fiscalberry que maneja las impresoras de este perfil. **Online** (verde) está conectado y **Offline** (rojo) no.
- **Sin servidor específico**: usa la configuración general del comercio.
- Si hay uno online, ya viene elegido.

![Segunda parte del formulario: impresoras por tipo, comportamiento al cerrar mesa, perfil default y botones Guardar Perfil y Cancelar](images/manual/110-configuracion/122-03-formulario-parte-2.png)

Bloque **Impresoras por tipo**. Si dejás uno vacío, usa la configuración default:

- **Impresora Fiscal**: la que emite las facturas.
- **Remitos / Comandas**: la que imprime remitos y comandas.
- **Cajón de dinero**: la que abre el cajón.
- **Compras / Pedidos**: la que imprime los pedidos a proveedores.

Bloque **Comportamiento al cerrar mesa**:

- **Al cerrar o facturar mesa**: elegí **No hacer nada**, **Imprimir Remito** o **Directo a la Fiscal**.
- **Imprimir fiscal al checkout**: tildalo para imprimir la factura al cobrar, solo si no se imprimió antes.

Último bloque:

- **Marcar como perfil default del comercio**: solo puede haber uno. Si lo tildás, el anterior deja de serlo.

---

## 💾 **Paso 5: Guardá o cancelá**

<div id="paso-5-guarda-o-cancela"></div>

1. Tocá **Guardar Perfil** (azul). Volvés a la lista y el perfil nuevo aparece en la tabla.
2. Si te arrepentís, tocá **Cancelar**. No se guarda nada.

Para cambiar un perfil, tocá el lápiz de su renglón. Se abre la misma pantalla con sus datos. Ahí el botón dice **Guardar Cambios**.

---

## ⚠️ **Resolución de Inconvenientes**

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| Dice **Configuración legacy (sin perfiles)**. | Todavía no hay ningún perfil. | Tocá **Migrar desde config actual** o creá uno con **Nuevo Perfil**. |
| No puedo elegir ninguna impresora. | No hay impresoras cargadas. | Cargalas primero en [Impresoras](/user-guide/impresoras). |
| El perfil que quiero no es el que se usa. | Hay un perfil elegido para este terminal, para el mozo o para vos. | Mirá **Perfil activo en este terminal**. Tocá **Quitar override de sesión** si aparece. |
| No veo la papelera en un perfil. | Es el perfil default. | Marcá otro como default con **Poner default** y ahí podés eliminar este. |
| El servidor figura **Offline**. | Fiscalberry está cerrado o sin internet. | Abrilo en la computadora del local. |
| Un mozo imprime en la impresora equivocada. | Tiene otro perfil asignado. | Mirá el cuadro **Perfil activo en este terminal** y probá con otro perfil. |
