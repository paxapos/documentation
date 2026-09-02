const a=`# Listado de Reservas

<div id="listado-de-reservas"></div>

> **¿Dónde está en el sistema?:** Menú principal → **Ventas** → **Reservas** → **Listado de Reservas**  
> **¿Quién lo usa?:** Recepcionistas y Encargados de Salón  

---

## 🎯 ¿Qué es y para qué sirve esta pantalla?

<div id="que-es-y-para-que-sirve-esta-pantalla"></div>

El **Listado de Reservas** muestra todas las reservas programadas para el día u otras fechas:

1. **Control de asistencia:** Permite marcar reservas como *Confirmadas*, *Presentes (Comensales Sentados)* o *Canceladas*.
2. **Filtros por fecha:** Visualización por día, semana o turno.

---

## 🔑 Requisitos para empezar a usarlo

<div id="requisitos-para-empezar-a-usarlo"></div>

- Poseer el permiso de **Consulta y Recepción de Reservas** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## 🎨 Botones y Pantallas: ¿Qué es cada cosa?

<div id="botones-y-pantallas-que-es-cada-cosa"></div>

| Botón / Filtro | ¿Dónde está? | ¿Qué hace al tocarlo? |
|---|---|---|
| 📅 **Filtro Fecha** | Encabezado | Cambia el día visualizado en la lista. |
| ✅ **Sentar / Ocupar** | Al lado de cada reserva | Abre la mesa correspondiente y la marca como ocupada en el salón. |
| ❌ **Cancelar** | Al lado de cada reserva | Anula la reserva indicando el motivo. |

---

## 📑 Guía Paso a Paso: ¿Cómo se usa?

<div id="guia-paso-a-paso-como-se-usa"></div>

### Paso 1: Recepcionar a un cliente con reserva

<div id="paso-1-recepcionar-a-un-cliente-con-reserva"></div>

1. Buscá al cliente por su nombre en el listado del día.
2. Cuando el cliente llega al local, tocá el botón **Sentar**.
3. El sistema asignará la mesa prevista en el mapa de salón y pasará su estado a ocupada.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="que-hacer-si-algo-no-sale-bien-problemas-comunes"></div>

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| La reserva no aparece en el listado. | La fecha seleccionada en el filtro es diferente a la agendada. | Cambiá el filtro de fecha para verificar días futuros o pasados. |
`;export{a as default};
