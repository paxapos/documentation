# Cómo Iniciar Sesión

<div id="iniciar-sesion"></div>

> 🎯 **¿Para qué sirve esto?**  
> Este es tu primer paso para operar en PaxaPOS. Aprenderás las dos modalidades de acceso: ingreso rápido mediante **PIN numérico** (ideal para mozos y personal de salón) e ingreso completo con **Correo Electrónico y Contraseña** (para administradores, cajeros y gestión integral).

---

## 📍 **Paso 1: Accedé a la dirección del sistema**

<div id="paso-1-accede-a-la-direccion-del-sistema"></div>

1. Abrí tu navegador web de preferencia (Google Chrome recomendado, Mozilla Firefox, Microsoft Edge o Safari).
2. En la barra de direcciones superior, escribí la URL exclusiva asignada a tu local
3. Presioná **Enter**.

> 💡 **Consejo útil:** Guardá esta dirección en los **Marcadores o Favoritos** de tu navegador, o creá un acceso directo en el escritorio para abrir el sistema con un solo clic al iniciar tu jornada.

---

## 🔢 **Método 1: Ingreso rápido con PIN (Recomendado para salón y mozos)**

<div id="metodo-1-ingreso-rapido-con-pin"></div>

> ℹ️ **Importante:** el acceso por PIN se ofrece solo en los comercios que tienen usuarios con PIN. Si el tuyo no tiene ninguno, la pantalla de ingreso muestra solamente usuario y contraseña (ver [Método 2](#metodo-2-ingreso-con-correo-y-contrasena)).

Si tu comercio tiene usuarios con PIN, al abrir la página de inicio, por defecto se presenta el teclado táctil numérico de acceso rápido:

![Pantalla de ingreso rápido por PIN](images/manual/10-comenzamos/02-login-pin.png)

### **Instrucciones paso a paso:**

1. Verificá que la solapa superior activa sea **"PIN rápido"** (seleccionada por defecto).
2. Ingresá los **4 dígitos de tu PIN personal** asignado:
   - Podés hacer clic o pulsar directamente sobre los números del **teclado numérico en pantalla** (1 al 9, y 0).
   - O bien podés tipear los 4 números desde el teclado físico de tu computadora o terminal POS.
3. Cada dígito ingresado completará una de las cuatro casillas seguras en pantalla.
4. Si te equivocás al presionar un número, usá la tecla con la flecha de retroceso `⌫` para borrar el último dígito ingresado.
5. Al completar el cuarto dígito, el sistema valida tus credenciales de manera inmediata y automática sin necesidad de presionar ningún botón adicional.

> ⚡ **¿Para quién está pensado el acceso por PIN?**
> - **Mozos y camareros:** Permite registrar pedidos y comandas en segundos sin demoras.
> - **Personal de turnos rotativos:** Facilita el cambio de operador ágil en terminales táctiles compartidas.

---

## ✉️ **Método 2: Ingreso con Correo Electrónico y Contraseña**

<div id="metodo-2-ingreso-con-correo-y-contrasena"></div>

Para usuarios con perfil de Administrador, Cajero o Encargado, o cuando se requiera gestionar configuraciones, reportes y compras:

![Formulario de inicio de sesión con correo y contraseña](images/manual/10-comenzamos/01-login-formulario.png)

### **Instrucciones paso a paso:**

1. En la parte superior de la ventana de acceso, hacé clic en la pestaña **"Usuario y contraseña"**. Si tu comercio no usa PIN, no hay pestañas: el formulario ya aparece solo.
2. **Campo "Email":** Escribí tu dirección de correo electrónico registrada en el comercio (ejemplo: *gerencia@milocal.com*).
3. **Campo "Contraseña":** Ingresá tu clave de seguridad (los caracteres se ocultarán automáticamente con puntos por protección).
4. Hacé clic en el botón azul **"Iniciar sesión"**.

---

## 🚀 **Ingreso al Panel Principal**

<div id="ingreso-al-panel-principal"></div>

Una vez validadas tus credenciales (por PIN o por correo), el sistema abrirá la pantalla principal según los permisos de tu perfil:

![Panel principal de PaxaPOS](images/manual/10-comenzamos/03-panel-principal.png)

- Si tu usuario tiene perfil de salón, accederás directamente a la **vista de mesas y adición**.
- Si tenés rol administrativo o de caja, ingresarás al **panel de control y menú principal**, desde donde podrás monitorear ventas, abrir turnos de caja y acceder a todos los módulos de gestión.

> 🏪 **¿Tenés más de un comercio?** Con un solo comercio, el sistema te lleva directo a él. Con más de uno, primero ves la pantalla **Mis comercios** y elegís a cuál entrar (ver [más abajo](#mis-comercios-una-tarjeta-por-comercio)).

---

## 🏪 **Mis comercios: una tarjeta por comercio**

<div id="mis-comercios-una-tarjeta-por-comercio"></div>

Esta pantalla aparece cuando tu usuario tiene **más de un comercio**. Arriba ves un saludo con tu nombre y, debajo, una tarjeta por cada comercio.

Todas las tarjetas tienen el nombre del comercio y el botón **"Entrar ›"**. Tocalo para abrir ese comercio. Según el tipo de comercio, la tarjeta suma además los números del día.

### 🏨 Hoteles y balnearios con unidades

<div id="hoteles-y-balnearios-con-unidades"></div>

La tarjeta muestra la ocupación:

- **Ocupación esta noche**: el porcentaje de unidades ocupadas. Por ejemplo, **32 %**.
- **Debajo del número**: cuántas unidades están ocupadas y cuántas hay en total. Por ejemplo, "8 de 25 habitaciones". La palabra depende de cómo llama tu comercio a sus unidades: habitaciones, cabañas, carpas. Ese nombre se cambia en [Terminología](/user-guide/configuracion-general#ventas-y-salon).
- **Próximos 7 días**: una tira de 7 barras. La primera es esta noche (se ve resaltada) y las otras seis son las noches siguientes. Cuanto más alta la barra, más ocupado está ese día.

> ⚠️ **Importante:** un balneario muestra esta tarjeta solo si trabaja con unidades. Un hotel o un balneario que todavía no cargó sus unidades muestra solamente la entrada.

### 🍽️ Restaurantes

<div id="restaurantes"></div>

La tarjeta muestra lo cobrado:

- **Cobrado hoy**: lo que ya se cobró en el día, con el símbolo de la moneda de tu comercio. Por ejemplo, **$1.234.500**.
- **Debajo del número**: los cubiertos del día. Por ejemplo, "142 cubiertos". Si en [Terminología](/user-guide/configuracion-general#ventas-y-salon) le pusiste otro nombre a los cubiertos, se usa ese. Si hoy no hay cubiertos cargados, muestra los tickets: "51 tickets". Cada venta cobrada es un ticket.
- **Últimos 7 días**: una tira de 7 barras, una por día. La última es hoy (se ve resaltada). La barra más alta es el mejor día de la semana y las demás se miden contra ella. A la derecha del título ves el total de la semana, abreviado. Por ejemplo, "7 días $1,7 M". Los miles se abrevian "mil" ("$950 mil") y los millones, "M" ("$6,8 M").

### 🛒 Otros comercios (panadería, genérico)

<div id="otros-comercios-panaderia-generico"></div>

La tarjeta es igual a la del restaurante, con una diferencia: debajo del número siempre muestra los **tickets** del día ("51 tickets"), nunca los cubiertos. Los comercios de un tipo que no aparece en esta guía también se ven así.

### 🚪 Solo la entrada, sin números

<div id="solo-la-entrada-sin-numeros"></div>

Estas tarjetas tienen únicamente el nombre y el botón **"Entrar ›"**:

- **Municipios.**
- **Mutuales, sindicatos y obras sociales.**
- **Balnearios sin unidades**, y hoteles que todavía no cargaron las suyas.
- **Comercios donde no sos el dueño.** Los números del día los ve solamente el dueño del comercio.

Si en algún momento no se pueden leer los números de un comercio, esa tarjeta también muestra solo la entrada. Las demás siguen igual.

> 💡 **Consejo útil:** si ninguno de tus comercios tiene números para mostrar, la pantalla es una lista simple: una tarjeta por comercio con su nombre y tus roles. Tocá la tarjeta para entrar.

### 🧮 Cómo se cuentan los números

<div id="como-se-cuentan-los-numeros"></div>

- **"Cobrado hoy" cuenta lo que ya se cobró** del día comercial. El día comercial empieza en la **hora de corte** que tiene tu comercio (se cambia en [Ventas y salón](/user-guide/configuracion-general#ventas-y-salon)). Por ejemplo, con corte a las 6, las ventas de las 2 de la madrugada cuentan para el día anterior.
- **Puede dar un poco menos que el tablero del comercio.** El tablero suma también las mesas cerradas que todavía no se cobraron.
- **Una tarjeta en cero se ve igual.** Si hoy todavía no hubo nada (0 % de ocupación o $0 cobrado), la tarjeta tiene el mismo formato y el número aparece en gris.

---

## ❓ **Preguntas Frecuentes y Solución de Inconvenientes**

<div id="preguntas-frecuentes-y-solucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| **No veo la solapa "PIN rápido"** | Tu comercio no tiene usuarios con PIN. | Ingresá con **Usuario y contraseña**. Si querés usar PIN, el dueño o un encargado puede crearlos (ver [Usuarios con PIN](/user-guide/usuarios-con-pin)). |
| **"PIN o datos incorrectos"** | Se ingresó un número erróneo o el usuario fue deshabilitado. | Borrá los números con *Backspace* y reintentá. Si persiste, solicitale al administrador del local que verifique o reasigne tu PIN. |
| **Olvidé mi contraseña de administrador** | No recuerdas la clave asignada a tu correo. | Hacé clic en el enlace **"¿Olvidaste tu contraseña?"** debajo del botón de ingreso (ver guía: [Recuperar Contraseña](/user-guide/recuperar-contrasena)). |
| **La página no carga** | Falta de conexión a internet o error en la URL del local. | Verificá que la terminal tenga conexión a internet activa y que el nombre del local en la barra de direcciones esté bien escrito. |
| **Al ingresar no veo la pantalla Mis comercios** | Tu usuario tiene un solo comercio y el sistema entra directo a él. | No hace falta hacer nada. La pantalla aparece cuando tenés más de un comercio. |
| **No veo los números de un comercio** | No sos el dueño de ese comercio, o es de un tipo que no muestra números (municipio, mutual o sindicato, balneario sin unidades). | Es normal. Entrá con **"Entrar ›"**: los números del día en esta pantalla los ve solo el dueño del comercio. |
| **"Cobrado hoy" no coincide con el tablero del comercio** | "Cobrado hoy" suma solo lo que ya se cobró. El tablero suma también las mesas cerradas que todavía no se cobraron. | Es esperable. Si además el día comercial no es el que esperás, revisá la hora de corte en [Ventas y salón](/user-guide/configuracion-general#ventas-y-salon). |

