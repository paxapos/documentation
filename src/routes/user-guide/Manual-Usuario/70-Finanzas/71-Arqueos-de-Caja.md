# Arqueos de Caja

<div id="arqueos-de-caja"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Finanzas** → **Caja** → **Arqueos de Caja**
> **¿Quién lo usa?:** Cajeros, encargados de turno y contadores

> 🎯 **¿Para qué sirve esto?**
> Un arqueo es el turno de una caja: desde que la abrís con un fondo de cambio hasta que la cerrás contando la plata.
> Acá abrís y cerrás turnos, anotás ingresos y retiros de dinero y revisás los turnos anteriores.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que tener el permiso de **Arqueos** en [Permisos por Rol](/user-guide/permisos-por-rol).
- La caja tiene que existir y tener tu usuario tildado. Mirá [Listado de Cajas](/user-guide/listado-de-cajas).
- Una caja tiene un solo turno abierto a la vez.

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Finanzas marcado en rojo](images/manual/70-finanzas/71-00a-menu-grupo-finanzas.png)

1. En el menú de la izquierda, tocá **Finanzas**.

![Opción Arqueos de Caja marcada en rojo, debajo del título Caja](images/manual/70-finanzas/71-00b-menu-opcion-arqueos-de-caja.png)

2. Tocá **Arqueos de Caja**. Está debajo del título **CAJA**.

![Pantalla Gestión de Arqueos con el aviso arriba, los filtros, los arqueos abiertos y el historial de cerrados](images/manual/70-finanzas/71-01-pantalla-arqueos.png)

De arriba hacia abajo, la pantalla tiene:

- **Las cajas libres**: una tarjeta por cada caja sin turno abierto. Tocá la tarjeta para abrir un turno (Paso 5).
- **Filtros de Búsqueda**: para encontrar un turno (Paso 2).
- **Arqueos Abiertos - Pendientes de Cierre**: los turnos que todavía no cerraste (Paso 4).
- **Historial de Arqueos Cerrados**: los turnos terminados (Paso 3).

> ⚠️ **Atención:** si todas las cajas tienen un turno abierto, la pantalla dice **No hay cajas configuradas**. Las cajas existen: solo no queda ninguna libre.

![Aviso No hay cajas configuradas con el botón azul Crear Primera Caja](images/manual/70-finanzas/71-02-aviso-sin-cajas-libres.png)

No toques **Crear Primera Caja**. Cerrá un turno (Paso 8) para que la caja vuelva a aparecer.

---

## 🔎 Paso 2: Buscá un arqueo

<div id="paso-2-busca-un-arqueo"></div>

![Recuadro Filtros de Búsqueda con Caja, Creado por, Desde, Hasta y los botones Buscar y Descargar Excel](images/manual/70-finanzas/71-04-filtros-de-busqueda.png)

Este recuadro lo ve quien puede ver todos los arqueos. Tiene:

- **Caja**: mostrá solo una caja. Con **Todas las cajas** ves todas.
- **Creado por**: mostrá solo los turnos de un usuario.
- **Desde** y **Hasta**: elegí fecha y hora de inicio y de fin.
- **Buscar**: el botón azul de arriba a la derecha. Aplica los filtros.
- **Descargar Excel**: el botón azul de abajo a la derecha (Paso 9).

1. Completá lo que necesites.
2. Tocá **Buscar**.
3. El historial muestra solo los turnos que coinciden.

---

## 📜 Paso 3: Mirá los arqueos cerrados

<div id="paso-3-mira-los-arqueos-cerrados"></div>

![Historial de Arqueos Cerrados con columnas de importes y un botón de tres puntitos en cada renglón](images/manual/70-finanzas/71-08-arqueos-cerrados.png)

Cada renglón es un turno terminado. Las columnas dicen:

- **Caja**, **Inicio**, **Cierre** y **Hora**: dónde y cuándo se abrió y se cerró.
- **Importe Final**: la plata que se contó al cerrar.
- **Saldo con Arqueo Ant.**: diferencia entre lo que quedó al cerrar el turno anterior y lo que se puso al abrir este.
- **Saldo de caja**: diferencia entre lo que debía haber y lo que se contó. Verde es sin diferencia y rojo es diferencia grande.
- **Cobros**, **Pagos**, **Ingresos** y **Egresos**: el movimiento de efectivo del turno.
- **Cobrado**, **Facturado** y **Anulado**: los totales de ventas del turno.
- **Creador**: quién abrió el turno.
- **Acciones**: el botón de tres puntitos.

![Menú del botón de tres puntitos con Ver y Acciones](images/manual/70-finanzas/71-09-menu-mas-opciones.png)

Al tocar los tres puntitos se abre una lista con:

- **Ver**: abre el detalle del turno.
- **Acciones**: abre otra lista (Paso 7).

---

## 🔓 Paso 4: Mirá los arqueos abiertos

<div id="paso-4-mira-los-arqueos-abiertos"></div>

![Recuadro Arqueos Abiertos con las columnas Caja, Inicial, Iniciado, Cobrado, Creador y Acciones](images/manual/70-finanzas/71-06-arqueos-abiertos.png)

Cada renglón es un turno que todavía no cerraste:

- **Caja**: cuál es la caja.
- **Inicial**: la plata con la que abriste. Por ejemplo: *$10.000,00*.
- **Iniciado**: cuándo lo abriste.
- **Cobrado**: lo que se cobró en efectivo en el turno.
- **Creador**: quién lo abrió.

![Cuatro botones de un renglón: ojo, lápiz, candado azules y tacho rojo](images/manual/70-finanzas/71-07-barra-de-iconos-del-arqueo.png)

Al final de cada renglón hay cuatro botones:

- **👁 (ojo)**: mirá el detalle del turno (Paso 6).
- **✏️ (lápiz)**: corregí los importes (Paso 10).
- **🔒 (candado)**: cerrá el turno (Paso 8).
- **🗑 (tacho)**: borra el turno.

> ⚠️ **Atención:** el tacho borra el turno. Los cobros y pagos quedan sin turno asignado. Usalo solo si te equivocaste al abrirlo.

---

## ➕ Paso 5: Abrí un arqueo

<div id="paso-5-abri-un-arqueo"></div>

1. En **Gestión de Arqueos**, tocá la tarjeta de la caja libre que querés abrir. También podés tocar el **➕** de esa caja en [Listado de Cajas](/user-guide/listado-de-cajas).
2. Se abre una ventana con el título **Nuevo Arqueo de** y el nombre de la caja.

![Formulario Nuevo Arqueo de Caja Prueba Manual con Importe Inicial 10000, Moneda ARS y el botón azul Abrir Arqueo](images/manual/70-finanzas/71-14-pantalla-abrir-arqueo.png)

- **Importe Inicial**: escribí cuánta plata ponés en la caja para dar cambio. Por ejemplo: *10000*.
- **Moneda de esta caja**: elegí la moneda. Por ejemplo: *ARS*.
- **Abrir Arqueo**: el botón azul de abajo. Abre el turno.

3. Tocá **Abrir Arqueo**.
4. El turno aparece en **Arqueos Abiertos - Pendientes de Cierre**.

> 💡 **Consejo útil:** desde el momento en que abrís, los cobros en efectivo de tu turno se suman a esta caja.

---

## 👁️ Paso 6: Mirá el detalle de un arqueo

<div id="paso-6-mira-el-detalle-de-un-arqueo"></div>

1. Tocá el ojo del turno que querés ver.

![Detalle del arqueo abierto con el resumen de caja, la información del turno y los botones Ingreso, Retiro y Acciones arriba](images/manual/70-finanzas/71-10-pantalla-detalle-del-arqueo.png)

Arriba a la izquierda dice **Arqueo Abierto** o **Arqueo Cerrado**. Después ves:

- **Movimientos de Efectivo**: el **Importe Inicial**, más los cobros y los ingresos, menos los pagos y los retiros.
- **SALDO Faltante**: cuánto falta para llegar al importe final que cargues al cerrar.
- **Información del Turno**: quién lo abrió y cuándo.
- **Resumen de Ventas**: lo facturado, las mesas abiertas y las anulaciones.
- **Detalle de Movimientos**: cada ingreso, egreso y retiro del turno.
- **¿Por qué no cierra?**: te ayuda a encontrar diferencias.

Arriba a la derecha están los botones **Ingreso**, **Retiro** y **Acciones**.

---

## 💵 Paso 7: Anotá un ingreso o un retiro de dinero

<div id="paso-7-anota-un-ingreso-o-un-retiro-de-dinero"></div>

Estos botones aparecen solo mientras el turno está abierto.

### Ingreso

![Ventanita Ingreso de Dinero con Monto 1500, una aclaración, la observación y los botones Registrar Ingreso y Cancelar](images/manual/70-finanzas/71-12-ventana-ingreso.png)

1. Tocá el botón verde **Ingreso**.
2. Se abre la ventanita **Ingreso de Dinero**.

- **Monto**: cuánta plata entra. Por ejemplo: *1500*.
- **Observación**: el motivo. Por ejemplo: *Cambio para la caja*.
- **Registrar Ingreso**: anota el ingreso de verdad.
- **Cancelar**: cierra la ventanita sin anotar nada.

> ⚠️ **Atención:** si la plata viene de otra caja, no la anotes acá. Esa caja tiene que hacer un **Retiro** hacia esta.

### Retiro

![Ventanita Retiro de Dinero con Monto 2000, A Caja opcional, la observación y los botones Registrar Retiro y Cancelar](images/manual/70-finanzas/71-13-ventana-retiro.png)

1. Tocá el botón naranja **Retiro**.
2. Se abre la ventanita **Retiro de Dinero**.

- **Monto**: cuánta plata sale. Por ejemplo: *2000*.
- **A Caja (opcional)**: si la plata va a otra caja, elegila. Esa caja recibe el ingreso sola. Si no, dejá **Sin especificar**.
- **Observación**: el motivo. Por ejemplo: *Pago a un proveedor*.
- **Registrar Retiro**: anota el retiro de verdad.
- **Cancelar**: cierra la ventanita sin anotar nada.

> ⚠️ **Atención:** **Registrar Ingreso** y **Registrar Retiro** cambian la plata de la caja. Tocalos solo con movimientos reales.

### Acciones

![Lista Acciones abierta con Editar, Cambiar creador, Cerrar, Imprimir y Borrar](images/manual/70-finanzas/71-11-menu-acciones.png)

El botón **Acciones** abre una lista con:

- **Editar**: corregí los importes (Paso 10).
- **Cambiar creador**: elegí a qué usuario se le asigna el turno.
- **Cerrar**: cierra el turno (Paso 8).
- **Imprimir**: manda el resumen del turno a la impresora.
- **Borrar**: elimina el turno. No se puede deshacer.

En un turno ya cerrado, en vez de **Cerrar** aparece **Reabrir**.

---

## 🔒 Paso 8: Cerrá un arqueo

<div id="paso-8-cerra-un-arqueo"></div>

1. En **Arqueos Abiertos**, tocá el candado 🔒 del turno que querés cerrar. Es el tercer botón del renglón (Paso 4).
2. Se abre la pantalla **Cerrando Arqueo**.

![Pantalla Cerrando Arqueo con el resumen de movimientos, el Importe Final y la lista para contar billetes](images/manual/70-finanzas/71-16-pantalla-cerrar-arqueo.png)

- **Resumen de Movimientos**: lo que debería haber. Abajo dice **Total Esperado**.
- **Importe Inicial**: la plata con la que abriste. No se cambia acá.
- **Importe Final (Efectivo en Caja)**: escribí lo que contaste.
- **Contar Billetes**: escribí cuántos billetes hay de cada valor. Arriba ves el total contado.
- **Usar este total como Importe Final**: copia el total de los billetes en **Importe Final**.
- **Cerrar Arqueo**: el botón verde de abajo. Cierra el turno.

> ⚠️ **Atención:** **Cerrar Arqueo** termina el turno de esa caja. Contá bien antes de tocarlo.

3. Tocá **Cerrar Arqueo**.
4. El turno pasa a **Historial de Arqueos Cerrados**.

---

## 📥 Paso 9: Bajá los arqueos a Excel

<div id="paso-9-baja-los-arqueos-a-excel"></div>

![Pantalla con el botón azul Descargar Excel marcado en rojo debajo de Buscar](images/manual/70-finanzas/71-05-donde-esta-boton-descargar-excel.png)

1. Poné los filtros que quieras (Paso 2).
2. Tocá **Descargar Excel**.
3. Se baja un archivo con los turnos que coinciden.

---

## ✏️ Paso 10: Corregí los importes de un arqueo

<div id="paso-10-corregi-los-importes-de-un-arqueo"></div>

![Pantalla Editando Arqueo con Importe Inicial, Importe Final y el botón Guardar](images/manual/70-finanzas/71-18-pantalla-editar-arqueo.png)

1. Tocá el lápiz del turno.
2. Cambiá **Importe Inicial** o **Importe Final**.
3. Tocá **Guardar**.

> ⚠️ **Atención:** cambiar los importes cambia el saldo del turno. Hacelo solo para corregir un error de carga.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| Dice **No hay cajas configuradas** y la caja existe. | Todas las cajas ya tienen un turno abierto. | Cerrá el turno que ya no uses (Paso 8). La tarjeta vuelve a aparecer. |
| No veo mi caja para abrir un turno. | Tu usuario no está tildado en la caja. | Pedile a un administrador que lo tilde en [Listado de Cajas](/user-guide/listado-de-cajas). |
| Al abrir dice que la caja ya se encuentra abierta. | Otra persona la abrió antes. | Buscá el turno en **Arqueos Abiertos** y cerralo, o usá ese mismo turno. |
| Faltan botones **Ingreso** y **Retiro**. | El turno ya está cerrado o no tenés permiso. | Solo se usan en turnos abiertos. Consultá tus permisos. |
| Hay un faltante al cerrar. | Salió plata de la caja y no se anotó. | Anotá los retiros con **Retiro** y mirá **¿Por qué no cierra?**. |
| El resumen muestra un importe en rojo entre **Facturado Total Mesas** y **Abiertas Por Usuario**. | Cobraste mesas de otros compañeros o quedaron mesas sin cobrar. | Es normal. Leé el [FAQ de Diferencias en Arqueo](/user-guide/08-faq-cajero-diferencia-facturado-vs-abiertas). |
