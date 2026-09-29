# Turnos de Mesa

<div id="turnos-de-mesa"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Configuración** → **Turnos**. Está debajo del título **Tablas del Sistema**.
> **¿Quién lo usa?:** Dueños y administradores

> 🎯 **¿Para qué sirve esto?**
> Acá definís las franjas del día en que trabaja tu local. Por ejemplo: *Desayuno*, *Almuerzo*, *Merienda* y *Cena*.
> Con esas franjas el sistema pone nombre al turno de cada arqueo de caja y arma el reporte de ventas por turno.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Tu usuario tiene que poder configurar el sistema. Mirá [Permisos por Rol](/user-guide/permisos-por-rol).
- Los turnos no pueden pisarse entre sí. Si dos turnos comparten una hora, el sistema no deja guardar.
- Cada hora cuenta de a una: el turno de *12 a 16* cubre las horas 12, 13, 14 y 15.

---

## 🧭 Para qué se usan los turnos en el resto del sistema

<div id="para-que-se-usan-los-turnos"></div>

- **Arqueos de Caja**: el título del arqueo muestra el turno que corresponde a la hora de cierre. Por ejemplo: *Cena (de 20 a 6)*. Mirá [Arqueos de Caja](/user-guide/arqueos-de-caja).
- **Ventas por Turnos** (menú **Reportes**): compara cuánto vendés en cada franja y en cada día de la semana.
- **Reservas**: si usás reservas, cada turno puede tener un límite de comensales. Ese límite se carga en la ventanita del turno.

> 💡 **Consejo útil:** si no cargás turnos, esas pantallas siguen funcionando. Solo van a mostrar el turno vacío.

---

## 📍 Paso 1: Entrá a la pantalla

<div id="paso-1-entra-a-la-pantalla"></div>

![Menú lateral con el grupo Configuración marcado en rojo](images/manual/110-configuracion/130-00a-menu-grupo-configuracion.png)

1. En el menú de la izquierda, tocá **Configuración**.

![Opción Turnos marcada en rojo, debajo del título Tablas del Sistema](images/manual/110-configuracion/130-00b-menu-opcion-turnos.png)

2. Tocá **Turnos**. Está debajo del título **Tablas del Sistema**.

![Pantalla Gestión de Turnos con la línea de tiempo y las tarjetas de Desayuno, Almuerzo, Merienda y Cena](images/manual/110-configuracion/130-01-pantalla-turnos.png)

Así se ve la pantalla **Gestión de Turnos**. Tiene tres partes:

- **Línea de tiempo de 24 horas**: dibuja cada turno como una barra. Sirve para ver si se pisan.
- **Una tarjeta por turno**: muestra el nombre, el horario, la duración, la hora de inicio y la de fin. Abajo tiene los botones **Editar** y **Eliminar** (Paso 5).
- Si un turno termina después de la medianoche, la tarjeta lo avisa con *(cruza medianoche)*.

Si todavía no cargaste ninguno, ves el aviso *No hay turnos configurados* y el botón **Crear Primer Turno**.

---

## ➕ Paso 2: Tocá el botón "Nuevo Turno"

<div id="paso-2-toca-el-boton-nuevo-turno"></div>

![Botón verde Nuevo Turno marcado en rojo arriba a la derecha](images/manual/110-configuracion/130-02-donde-esta-boton-nuevo-turno.png)

1. Buscá el botón verde **Nuevo Turno**. Está arriba a la derecha.
2. Tocalo una vez.
3. Se abre la pantalla para cargar los datos del turno.

---

## 📝 Paso 3: Completá los datos del turno

<div id="paso-3-completa-los-datos-del-turno"></div>

![Formulario Nuevo Turno con Brunch Prueba de 11 a 12 y los botones Cancelar y Guardar Turno](images/manual/110-configuracion/130-03-formulario-nuevo-turno.png)

Escribimos el ejemplo *Brunch Prueba*, de 11 a 12. Los casilleros son:

- **Horario del turno** (recuadro violeta): se actualiza solo. Muestra el horario y las horas de duración.
- **Vista previa en línea de tiempo**: una barrita que muestra dónde cae el turno en el día.
- **Nombre del Turno**: escribí cómo lo vas a llamar. Por ejemplo: *Brunch Prueba*.
- **Hora inicio**: la hora en que empieza, de 0 a 23. Los botones de abajo (7:00, 10:00, 12:00, 19:00) la cargan de un toque.
- **Hora fin**: la hora en que termina, de 0 a 23. Los botones de abajo (11:00, 16:00, 20:00, 23:00) la cargan de un toque.
- **Aviso naranja de medianoche**: no se ve en la foto. Aparece si la hora fin es menor que la de inicio. Es normal en turnos de noche.
- **Límite de comensales por turno** y **Límite de comensales por reserva**: solo aparecen si tenés el módulo de reservas. Dejalos vacíos si no querés límite.
- **Cancelar**: vuelve a la lista sin guardar nada.
- **Guardar Turno**: guarda el turno.

> 💡 **Consejo útil:** elegí siempre horas que no use otro turno. Mirá la línea de tiempo de la pantalla anterior.

---

## 💾 Paso 4: Guardá el turno

<div id="paso-4-guarda-el-turno"></div>

1. Revisá el nombre y las horas.
2. Tocá **Guardar Turno**.
3. Volvés a la lista y ves la tarjeta nueva.

Si no querés seguir, tocá **Cancelar**. No se guarda nada.

---

## ✏️ Paso 5: Cambiá o borrá un turno

<div id="paso-5-cambia-o-borra-un-turno"></div>

En la pantalla del Paso 1, cada tarjeta tiene dos botones abajo:

- **Editar** (blanco): abre los mismos casilleros del Paso 3, ya cargados. Cambiá lo que necesites y tocá **Guardar Turno**.
- **Eliminar** (rojo): borra el turno. Antes te pide confirmación.

> ⚠️ **Atención:** al tocar **Eliminar** y confirmar, el turno se pierde. Los arqueos y reportes viejos dejan de mostrar ese nombre de turno.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **"Este turno se solapa con otro turno existente"** | Alguna hora del turno ya pertenece a otro. | Mirá la línea de tiempo. Cambiá la hora inicio o fin, o editá el otro turno. |
| **"El nombre del turno es requerido"** | Dejaste el nombre vacío. | Escribí un nombre y guardá de nuevo. |
| **"La hora debe estar entre 0 y 23"** | Escribiste 24 o un número negativo. | Para medianoche usá 0. |
| No ves **Turnos** en el menú. | Tu usuario no tiene permiso. | Pedile a un administrador que revise [Permisos por Rol](/user-guide/permisos-por-rol). |
| El arqueo no muestra el nombre del turno. | Ningún turno cubre la hora de cierre. | Cargá un turno que abarque esa hora. |
