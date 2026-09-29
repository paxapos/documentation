# Medios de cobro

<div id="medios-de-cobro"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Medios de cobro** (debajo del título **Tablas del Sistema**)
> **¿Quién lo usa?:** Administradores y Encargados de Finanzas

> 🎯 **¿Para qué sirve esto?**
> Acá elegís con qué medios cobra tu cajero a mano: efectivo, tarjetas, transferencia, cheques o vouchers.
> También definís cuáles se pueden usar para pagar a proveedores.
> Los pagos por QR, link o SmartPOS no se cargan acá: se registran solos.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario necesita el permiso de configurar **Cobros**. Fijate en [Permisos por Rol](/user-guide/permisos-por-rol).
- Esta pantalla **guarda sola**. Apenas tildás una casilla o cambiás un dato de un renglón, queda guardado.
- Por eso, tocá con cuidado: el cambio vale en la caja desde ese momento.

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Configuración marcado en rojo](images/manual/110-configuracion/132-00a-menu-grupo-configuracion.png)

1. En el menú de la izquierda, tocá **Configuración**.

![Opción Medios de cobro marcada en rojo dentro del grupo Configuración](images/manual/110-configuracion/132-00b-menu-opcion-medios-de-cobro.png)

2. Tocá **Medios de cobro**. Está debajo del título **TABLAS DEL SISTEMA**.

---

## 💳 Paso 2: Mirá la pestaña "Para cobrar"

<div id="paso-2-mira-la-pestana-para-cobrar"></div>

![Pantalla Medios de cobro con la pestaña Para cobrar y todos los renglones agrupados](images/manual/110-configuracion/132-01-pestana-para-cobrar.png)

Se abre en **Para cobrar**. Muestra los medios que el cajero elige al cobrar. Van agrupados: *Tarjetas de crédito*, *Tarjetas de débito*, *Transferencias*, *Plataformas* y *Otros*.

Cada renglón tiene estas columnas:

- **Activo**: si está tildada, el cajero ve este medio al cobrar. Si la destildás, deja de aparecer.
- **Ícono**: el dibujito que se ve en la caja. Lo elige el sistema según **¿Qué es?**.
- **Nombre**: cómo lo ve el cajero. Podés cambiarlo. Por ejemplo: *Tarjeta Visa*.
- **¿Qué es?**: qué tipo de medio es. Por ejemplo: *Visa crédito* o *Transferencia*. Sirve para los informes.
- **Abre cajón**: si está tildada, el cajón de dinero se abre al cobrar con este medio.
- **Fiscal**: si está tildada, la factura sale directo al cobrar con este medio.
- **Proveedores**: si está tildada, también lo podés usar para pagar a proveedores.
- **Engranaje**: abre **Más opciones** (Paso 5).
- **Papelera**: borra el medio. Se ve gris apagada cuando no se puede borrar.

> ⚠️ **Atención:** cada casilla y cada lista se guardan al instante. Cambiar **Abre cajón** o **Fiscal** cambia cómo se cobra de verdad.

> 💡 **Consejo útil:** si un renglón dice *Sin clasificar: elegí qué es*, abrí la lista **¿Qué es?** y elegí una opción.

---

## 🏦 Paso 3: Mirá la pestaña "Para pagar proveedores"

<div id="paso-3-mira-la-pestana-para-pagar-proveedores"></div>

![Pestaña Para pagar proveedores con solo los medios que tienen tildada la casilla Proveedores](images/manual/110-configuracion/132-02-pestana-para-pagar-proveedores.png)

1. Tocá la pestaña **Para pagar proveedores**.
2. Ves solo los medios con la casilla **Proveedores** tildada.
3. Las columnas **Abre cajón** y **Fiscal** no aparecen: acá no se usan.
4. Para volver, tocá **Para cobrar**.

Cambiar de pestaña solo filtra lo que ves. No guarda nada.

---

## ➕ Paso 4: Agregá un medio personalizado

<div id="paso-4-agrega-un-medio-personalizado"></div>

![Pantalla con el botón Agregar medio personalizado marcado en rojo abajo de la tabla](images/manual/110-configuracion/132-03-donde-esta-boton-agregar-medio-personalizado.png)

1. En la pestaña **Para cobrar**, tocá **Agregar medio personalizado**, abajo de la tabla.
2. Aparece un renglón nuevo al final.

![Tabla con un renglón nuevo al final: Prueba Manual, Efectivo y los botones Guardar y Cancelar](images/manual/110-configuracion/132-04-renglon-nuevo-completo.png)

3. Escribí el **Nombre**. Por ejemplo: *Voucher Empresa X*.
4. Elegí **¿Qué es?**. Por ejemplo: *Voucher / Vale*.
5. Tildá las casillas que necesites: **Abre cajón**, **Fiscal**, **Proveedores**.
6. Tocá **Guardar** para crearlo. Se recarga la pantalla y el medio queda en su grupo.
7. Si te arrepentís, tocá **Cancelar**. El renglón desaparece y no se crea nada.

> 💡 **Consejo útil:** si el cajero no ve el medio nuevo, revisá que la casilla **Activo** esté tildada.

---

## ⚙️ Paso 5: Abrí "Más opciones"

<div id="paso-5-abri-mas-opciones"></div>

1. Buscá el renglón del medio. A la derecha de cada renglón está el botón azul con la ruedita (el engranaje).
2. Tocalo. Se abre una pantalla con más datos de ese medio.

![Pantalla Editando Tarjeta Amex con Nombre, Imagen propia, Propinas, Días hasta acreditación, Comisión y los botones Actualizar y Volver](images/manual/110-configuracion/132-05-formulario-mas-opciones.png)

- **Nombre**: el nombre del medio.
- **Imagen propia (opcional)**: subí una imagen si querés reemplazar el ícono del catálogo. Se ve en la caja, en esta pantalla y en los arqueos.
- **Propinas**: tildala si este medio se puede usar para cobrar propinas.
- **Días hasta acreditación**: cuántos días tarda en llegarte la plata. Por ejemplo: *2*.
- **Comisión (%)**: lo que te descuenta el banco o la plataforma. Por ejemplo: *3,5*.
- **Actualizar**: guarda los cambios.
- **Volver a Medios de cobro**: vuelve a la tabla sin guardar.

---

## 🗑️ Borrar un medio

<div id="borrar-un-medio"></div>

> ⚠️ **Atención:** borrar no se puede deshacer.

- La papelera solo funciona en medios sin cobros registrados.
- Efectivo nunca se puede borrar.
- Si el medio ya se usó, la papelera queda apagada. Al apoyar el mouse te dice cuántos cobros tiene. Destildá **Activo** en su lugar.
- Para borrar, tocá la papelera una vez. Cambia a **¿Seguro?**. Tocala de nuevo dentro de 4 segundos.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| El cajero no ve el medio al cobrar. | La casilla **Activo** está destildada. | Tildá **Activo** en el renglón del medio. |
| El medio no aparece en **Para pagar proveedores**. | La casilla **Proveedores** está destildada. | Tildá **Proveedores** en la pestaña **Para cobrar**. |
| Un renglón dice *Sin clasificar: elegí qué es*. | Al medio le falta el tipo. | Elegí una opción en **¿Qué es?**. |
| La papelera está apagada. | El medio ya tiene cobros, o es Efectivo. | Destildá **Activo** para que no se use más. |
| Aparece un mensaje rojo y el renglón se pinta de rojo. | No se pudo guardar el cambio. | Revisá el nombre y la conexión, y probá de nuevo. |
| No veo **Medios de cobro** en el menú. | Tu usuario no tiene permiso. | Pedile a un administrador el permiso en [Permisos por Rol](/user-guide/permisos-por-rol). |
