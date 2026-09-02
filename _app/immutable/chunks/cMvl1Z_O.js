const a=`# Gestión de Empleados

<div id="gestion-de-empleados"></div>

> **¿Dónde está en el sistema?:** Menú principal → **RRHH** → **General** → **Empleados**  
> **¿Quién lo usa?:** Recursos Humanos, Encargados y Administradores  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

Es la nómina y legajo digital de los empleados del establecimiento:

1. **Legajo de personal:** Nombre, DNI, legajo, fecha de ingreso, departamento, cargo, foto para reconocimiento facial y PIN de fichaje.
2. **Alta y baja de trabajadores:** Gestión de estado activo o inactivo del personal.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Tener el permiso de **Administración de Legajos de Personal** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Campo | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| ➕ **Nuevo Empleado** | Esquina superior | Abre el formulario para dar de alta un trabajador. |
| 📸 **Cargar Foto Facial** | Ficha del empleado | Registra la foto para la app de fichaje por reconocimiento facial. |
| 🔢 **PIN de Fichaje** | Formulario | Código numérico único de ingreso. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Registrar un nuevo empleado

<div id="paso-1-registrar-un-nuevo-empleado"></div>

1. Tocá el botón **Nuevo Empleado**.
2. Ingresá el **Nombre y Apellido**, **DNI** y **Departamento** (ejemplo: *Cocina*).
3. Asigná su **PIN de Fichaje**.
4. Tocá **Guardar**.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El empleado no puede fichar con su PIN. | El PIN está asignado a otro trabajador o fue tipeado mal. | Verificá el PIN en el legajo del empleado. |
`;export{a as default};
