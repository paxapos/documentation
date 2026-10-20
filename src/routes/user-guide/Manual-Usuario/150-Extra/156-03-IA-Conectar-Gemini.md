# IA: Conectar PaxaPos con Gemini

> **¿Dónde está en el sistema?:** En **Gemini** (gemini.google.com) → **Spark** → **Aplicaciones conectadas**  
> **¿Quién lo usa?:** Propietario / Administrador del Comercio (o cualquier usuario de PaxaPos que quiera consultar su comercio desde Gemini)

---

## 🎯 ¿Qué es y para qué sirve esta guía?

<div id="que-es"></div>

PaxaPos tiene un **servidor MCP**: una "puerta" que permite que asistentes de inteligencia artificial como Gemini lean y operen los datos de tu comercio (ventas, stock, compras, caja, etc.).

Una vez conectado, podés pedirle a Gemini cosas como _"¿cuánto vendí ayer?"_ o _"¿qué mercaderías están por agotarse?"_ y te responde con los datos reales de PaxaPos.

PaxaPos tiene **un conector por área** (salón, clientes, caja, compras, finanzas, RRHH, etc.) y uno con todo. Elegí el que corresponde en [¿Qué conector elijo?](#que-conector-elijo). Si no sabés cuál, el que tiene todo es:

```
https://api.paxapos.com/mcp
```

Los pasos de abajo usan esa dirección. Si elegís un conector de área, pegá la dirección de ese conector en su lugar.

---

## 📑 Guía Paso a Paso

<div id="paso-a-paso"></div>

### 1. Entrar a Spark → Aplicaciones conectadas

<div id="paso-1"></div>

1. Entrá a **Gemini** con tu cuenta de Google.
2. Arriba a la izquierda, pasá de **Chat** a **Spark**.
3. En el menú lateral, dentro de **Personalizar**, tocá **Aplicaciones conectadas**.

![Gemini con la solapa Spark y la opción Aplicaciones conectadas señaladas con flechas](images/manual/150-extra/ia/156-03-01-gemini-spark-aplicaciones-conectadas.png)

### 2. Cargar la URL del MCP de PaxaPos

<div id="paso-2"></div>

1. Bajá hasta el final de la pantalla, a la sección **Aplicaciones personalizadas para Spark**.
2. En el campo _"Añade un enlace de aplicación personalizado para empezar"_ pegá la URL del conector que elegiste (ver [¿Qué conector elijo?](#que-conector-elijo)), por ejemplo la del conector con todo:  
   `https://api.paxapos.com/mcp`
3. Tocá **Siguiente**.

![Sección Aplicaciones personalizadas para Spark con el campo de URL y el botón Siguiente señalados](images/manual/150-extra/ia/156-03-02-gemini-url-personalizada.png)

### 3. Confirmar la conexión al servidor MCP

<div id="paso-3"></div>

Se abre la ventana **Conectarse a un servidor de MCP**:

1. Verificá que la **URL del servidor de MCP** sea la del conector que elegiste (en la captura, `https://api.paxapos.com/mcp`).
2. Leé el aviso _"Acerca de las aplicaciones conectadas personalizadas"_.
3. Tocá **Siguiente** para aceptar y continuar.

![Ventana Conectarse a un servidor de MCP con la URL de PaxaPos cargada y el botón Siguiente](images/manual/150-extra/ia/156-03-03-gemini-modal-servidor-mcp.png)

### 4. Iniciar sesión con tu usuario de PaxaPos

<div id="paso-4"></div>

Gemini te redirige a la pantalla de login de **PaxaPos**:

1. Ingresá el **Email** y la **Contraseña** con los que entrás a PaxaPos.
2. Tocá **Iniciar sesión y autorizar**.

![Pantalla de login de PaxaPos pidiendo email y contraseña con el botón Iniciar sesión y autorizar](images/manual/150-extra/ia/156-03-04-paxapos-login-autorizar.png)

✅ **¡Listo!** PaxaPos queda conectado a Gemini. Ya podés ir a Spark y pedirle tareas sobre tu comercio.

> 🔒 **Tranquilo:** Gemini solo puede operar sobre los comercios y con los permisos que tu usuario ya tiene en PaxaPos. Si tu usuario no puede ver la caja, Gemini tampoco.

---

## 🧩 ¿Qué conector elijo?

<div id="que-conector-elijo"></div>

PaxaPos no tiene un solo conector: tiene **uno por trabajo**, con las herramientas de esa tarea. Así Gemini elige mejor qué hacer y cada conversación carga solo lo que necesita.

| Conector       | URL                                          | Para qué                                                                                               |
| -------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Salón          | `https://api.paxapos.com/mcp/salon`          | Mesas, comandas, cobro en mesa y consulta del menú.                                                    |
| Clientes       | `https://api.paxapos.com/mcp/clientes`       | Reservas, pedidos online que entran (delivery y take away) y tus clientes.                             |
| Caja           | `https://api.paxapos.com/mcp/caja`           | Caja y cobros, facturación (AFIP) de ventas, y corrección o reapertura de mesas ya cobradas.           |
| Reportes       | `https://api.paxapos.com/mcp/reportes`       | Estadísticas de ventas, libro IVA, rentabilidad y flujo de fondos.                                     |
| Compras        | `https://api.paxapos.com/mcp/compras`        | Solicitudes y órdenes de compra, y recepción de mercadería.                                            |
| Abastecimiento | `https://api.paxapos.com/mcp/abastecimiento` | Mercaderías, proveedores, stock y recetas.                                                             |
| Finanzas       | `https://api.paxapos.com/mcp/finanzas`       | Gastos y facturas de proveedor, deudas, pagos y cierres contables.                                     |
| Catálogo       | `https://api.paxapos.com/mcp/catalogo`       | Productos, categorías, precios (también en lote), descuentos, cupones, sectores y salones.             |
| RRHH           | `https://api.paxapos.com/mcp/rrhh`           | Empleados, fichajes, liquidación de sueldos, vacaciones y licencias.                                   |
| Administración | `https://api.paxapos.com/mcp/admin`          | Datos del comercio, usuarios, roles y permisos, **solo para consultar**.                               |
| Todo           | `https://api.paxapos.com/mcp`                | Lo de todos los días en un solo conector; busca y usa el resto de las herramientas cuando se lo pedís. |

### ¿Cuál elijo?

- **Si no sabés cuál, usá el de Todo** (`https://api.paxapos.com/mcp`). Trae las herramientas de uso diario (ventas del día, mesas abiertas, caja, compras, gastos, proveedores, stock, menú, clientes y quién está trabajando) y, cuando le pedís algo que no está a mano, Gemini lo busca, mira cómo se usa y lo ejecuta por su cuenta.
- **Si vas a trabajar siempre en lo mismo**, el del área hace que Gemini responda más rápido y con menos vueltas. Por ejemplo: **Salón** para el mozo o el encargado de turno, **Clientes** para quien atiende reservas y pedidos online, **Caja** para quien cobra y cierra, **Compras** para quien pide mercadería y recibe, **Finanzas** para quien carga facturas y paga a proveedores.
- **Si querés usar más de uno**, repetí los pasos 2 a 4 con otra URL, siempre que tu versión de Gemini te deje cargar más de una aplicación personalizada. Cada uno inicia sesión con tu mismo usuario.
- **Cada usuario ve solo las herramientas que su rol permite**, en cualquier conector. Si tu rol no incluye una acción, esa herramienta no aparece.
- Si le pedís algo que no está en el conector que usás, PaxaPos le avisa a Gemini en cuál está y con qué dirección agregarlo.

---

## 💬 Ejemplos de qué pedirle

<div id="ejemplos"></div>

- _"Mostrame el resumen de ventas de esta semana."_
- _"¿Cuáles fueron los productos más vendidos del mes?"_
- _"¿Qué proveedores tengo con deuda pendiente?"_
- _"¿Qué mercaderías me recomendás reponer?"_
- _"¿Qué mesas están abiertas ahora?"_
- _"¿Qué reservas tengo para el sábado a la noche?"_ (conector Clientes)

> ⚠️ Las acciones que **modifican datos** (crear órdenes de compra, cerrar caja, etc.) se hacen solo cuando vos se lo pedís, y las que no se pueden deshacer (por ejemplo, pagos, cierres o reabrir una mesa cobrada) te piden confirmación antes. Leé el resumen (importes, proveedor, fecha, cantidades) antes de confirmar.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="problemas-comunes"></div>

| ¿Qué te pasa?                                                 | ¿Por qué puede ser?                                                          | ¿Cómo se soluciona?                                                                                                  |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| No veo la opción **Spark** o **Aplicaciones conectadas**.     | La función está en beta y puede no estar habilitada para tu cuenta o región. | Verificá que estés usando una cuenta de Google con acceso a Gemini Spark.                                            |
| Gemini dice que la URL no es válida.                          | La dirección está mal escrita o no empieza con `https://`.                   | Copiá y pegá exactamente la URL del conector que elegiste (por ejemplo `https://api.paxapos.com/mcp`).               |
| El login de PaxaPos me da error.                              | Email o contraseña incorrectos.                                              | Usá los mismos datos con los que entrás a PaxaPos. Si no los recordás, recuperá la contraseña desde PaxaPos.         |
| Gemini no encuentra datos de mi comercio.                     | Tu usuario no tiene permisos sobre ese comercio o esa sección.               | Pedile al administrador del comercio que revise tu rol en PaxaPos.                                                   |
| Gemini dice que la herramienta está en otro conector.         | Estás usando el conector de otra área: PaxaPos le avisa en cuál está.        | Cargá ese conector con la URL que te indica (ver [¿Qué conector elijo?](#que-conector-elijo)), o usá el de **Todo**. |
| Gemini dice que no tiene una herramienta para lo que le pido. | Tu rol no incluye esa acción, o la herramienta no existe en PaxaPos.         | Revisá tu rol con el administrador del comercio. Si es algo que PaxaPos no hace todavía, escribinos por soporte.     |

---

## 📞 ¿Necesitás ayuda?

- 📱 **Soporte Directo WhatsApp**: <a href="{{WHATSAPP_URL}}?" target="_blank">{{WHATSAPP_DISPLAY}}</a>
