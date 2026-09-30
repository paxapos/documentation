# Sueldos y Jornales

<div id="sueldos-y-jornales"></div>

> **¿Dónde está en el sistema?:** Menú principal → **RRHH** → **Sueldos y Jornales**
> **¿Quién lo usa?:** Dueños y personas autorizadas a liquidar sueldos

> 🎯 **¿Para qué sirve esto?**
> **Sueldos y Jornales** te lleva a la aplicación de sueldos de PaxaPOS. Ahí se arman las liquidaciones y los recibos del personal.
> Entrás sin volver a escribir tu usuario y tu contraseña.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- El módulo de sueldos tiene que estar activo en tu comercio. Si no ves **Sueldos y Jornales**, pedíselo a soporte.
- Tu usuario necesita el permiso para **liquidar sueldos**. Mirá [Permisos por Rol](/user-guide/permisos-por-rol).
- Los empleados se cargan primero en [Empleados](/user-guide/empleados).
- En [Configuración general](/user-guide/configuracion-general#rrhh) completá el **Tipo de empleador (F931)**. Sale en el archivo de AFIP de cada liquidación.

---

## 🚪 Entrar a la aplicación de sueldos — Paso 1

<div id="entrar-a-la-aplicacion-de-sueldos-paso-1"></div>

1. En el menú de la izquierda, tocá **RRHH**.
2. Tocá **Sueldos y Jornales**.
3. El navegador te lleva a la dirección `rrhh.paxapos.com`, ya con tu sesión abierta.

Es una aplicación aparte, con su propio menú y otro diseño. No es una pantalla de PaxaPOS.

Si tu usuario no tiene permiso, aparece el mensaje **No tiene permisos para liquidar sueldos**.

> 💡 **Consejo útil:** en algunos comercios la opción también está entre los íconos de la pantalla de inicio, con el nombre **Sueldos y Jornales**.

---

## 🧭 Qué vas a encontrar adentro — Paso 2

<div id="que-vas-a-encontrar-adentro-paso-2"></div>

Los dueños y quienes liquidan entran a **Liquidaciones**. Un empleado común entra a sus propios recibos. El menú de la izquierda tiene:

- **Panel de RRHH**: un resumen con indicadores.
- **Liquidaciones**: la lista de liquidaciones. Arriba, el botón verde **Nueva Liquidación** crea una. En cada renglón hay botones para descargar el archivo de texto (**Descargar txt**), **Ver**, **Editar** y **Eliminar**.
- **Empleados**: la lista de personas para liquidar.
- **Variables genéricas** y **Variables**: valores que usan los cálculos.
- **Topes históricos**, **Tasas históricas**, **Obras sociales** y **Ganancias**: tablas de referencia para los cálculos.
- **Ganancias acumulado**: el acumulado de Ganancias.
- **Convenios**: los convenios y sus conceptos.
- **Departamentos** y **Sectores**: las áreas del personal dentro de la aplicación de sueldos.

> ⚠️ **Atención:** el botón **Eliminar** de una liquidación la borra. Confirmá que es la correcta antes de tocarlo.

Una persona con rol de empleado ve un menú corto, con solo **Recibos** y **Perfil**.

---

## 🔒 Tu sesión

<div id="tu-sesion"></div>

- Para salir, tocá tu nombre, arriba a la derecha, y elegí **Cerrar sesión**.
- Si tu cuenta tiene varios comercios, ese menú te deja cambiar de comercio.
- Si más tarde entrás directo y te pide usuario, volvé a PaxaPOS y tocá **Sueldos y Jornales** otra vez.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| No aparece **Sueldos y Jornales** en el menú. | El módulo no está activo o tu usuario no tiene permiso. | Pedile a un administrador el permiso de liquidar sueldos. Si el módulo no está activo, consultá con soporte. |
| Dice **No tiene permisos para liquidar sueldos**. | Tu rol no puede liquidar. | Un administrador tiene que darte el permiso en [Permisos por Rol](/user-guide/permisos-por-rol). |
| La aplicación te pide usuario y contraseña. | La sesión venció o entraste directo, sin pasar por PaxaPOS. | Volvé a PaxaPOS y tocá **Sueldos y Jornales** desde el menú. |
| Ves una página de error o **404**. | Tu usuario no pertenece a ese comercio en la aplicación. | Consultá con soporte para que revisen tu acceso. |
| La liquidación sale con un tipo de empleador que no corresponde. | Falta cargar el **Tipo de empleador (F931)**. | Cargalo en [Configuración general](/user-guide/configuracion-general#rrhh) y consultalo con tu contador. |
