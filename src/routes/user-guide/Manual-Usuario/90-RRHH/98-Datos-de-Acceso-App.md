# Datos de Acceso a la App de Fichaje

<div id="datos-de-acceso-a-la-app-de-fichaje"></div>

> **¿Dónde está en el sistema?:** Menú principal → **RRHH** → **Datos de Acceso a la App**
> **¿Quién lo usa?:** Encargados y administradores que instalan la app de fichaje

> 🎯 **¿Para qué sirve esto?**
> La app de **Fichaje** es la que usa tu personal en un celular o tablet para marcar entrada y salida.
> Para conectarla a tu comercio necesita un **PIN de acceso**. Esta pantalla te lo muestra.
> Una vez conectada, el Paso 3 explica cómo configurar cada dispositivo: lector de DNI, foto y voz.

---

## 🔑 Antes de empezar

<div id="antes-de-empezar"></div>

- Si no ves **RRHH** en el menú, el módulo no está activo en tu comercio. Pedíselo a soporte.
- Tu usuario necesita el permiso de fichaje. Mirá [Permisos por Rol](/user-guide/permisos-por-rol).
- Los empleados tienen que estar cargados en [Empleados](/user-guide/empleados). La app los baja al conectarse.

> ⚠️ **Atención:** el PIN de acceso abre la app de fichaje de tu comercio. Dáselo solo a quien instala la app. No lo publiques ni lo mandes por grupos abiertos.

---

## 📍 Ver el PIN — Paso 1

<div id="ver-el-pin-paso-1"></div>

1. En el menú de la izquierda, tocá **RRHH**.
2. Tocá **Datos de Acceso a la App**.
3. Se abre una pantalla con el título **PIN de acceso para la app**.

En la pantalla ves, de arriba hacia abajo:

- El nombre de tu comercio.
- El **PIN**: seis letras y números, en letras grandes y verdes.
- Un enlace a `https://fichaje.paxapos.com`, para usar la app desde el navegador.

Esta pantalla no muestra código QR ni botones. El PIN se escribe a mano en la app.

> 💡 **Consejo útil:** la primera vez que entrás, el sistema crea el PIN solo. No hace falta hacer nada.

---

## 📱 Conectar la app — Paso 2

<div id="conectar-la-app-paso-2"></div>

1. Abrí la app **Fichaje** en el celular o la tablet. También podés abrir `https://fichaje.paxapos.com` en el navegador.
2. La app muestra el título **Fichaje** y seis casilleritos con el texto **PIN de acceso**.
3. Escribí el PIN de esta pantalla, una letra o número por casillero. También podés pegarlo.
4. Si el PIN es correcto, la app entra sola y aparece **Bienvenido!**. Si no, los casilleros se vacían.
5. Ya podés usar la pantalla de fichaje. Los empleados se cargan en el dispositivo.

Si tu cuenta tiene varias sucursales, la app pregunta **¿En qué sucursal está este dispositivo?**. Tocá la sucursal donde está el aparato.

---

## 🏬 Si tenés varias sucursales

<div id="si-tenes-varias-sucursales"></div>

Cuando tu cuenta tiene más de una sucursal, la pantalla agrega una aclaración:

- Cada sucursal tiene **su propio PIN**. La app carga solo los empleados y fichajes de esa sucursal.
- Cada sucursal ve el suyo en esta misma pantalla, cuando entra con su comercio.
- Puede aparecer un **PIN de cuenta** más chico. Sigue funcionando en los dispositivos que ya lo tenían cargado. Pero la app pide elegir sucursal al ingresar.

> 💡 **Consejo útil:** para un dispositivo nuevo, usá siempre el PIN de la sucursal donde va a estar.

---

## ⚙️ Configurar el dispositivo — Paso 3

<div id="configurar-el-dispositivo-paso-3"></div>

> **¿Dónde está en el sistema?:** App **Fichaje** → botón del engranaje, arriba a la derecha → pestaña **Configuración**
> **¿Quién lo usa?:** Encargados que dejan el celular o la tablet listos para fichar

Cada dispositivo se configura por separado. Los cambios quedan guardados en ese aparato, no en tu cuenta. Si usás dos tablets, configurá las dos.

### Cómo entrar

1. Abrí la app **Fichaje** en el dispositivo que ya conectaste (Paso 2). Se abre la pantalla de fichar.
2. Arriba a la derecha, al lado de **Salir**, tocá el botón del engranaje.
3. Se abre la pantalla **Administración**, en la pestaña **Configuración**.

Arriba tenés las pestañas **Configuración**, **Empleados** y **Reconocimiento Facial**. Si tu cuenta tiene varias sucursales, arriba a la derecha también ves el botón **Cambiar sucursal**.

### Registrar sin confirmar

Sirve para las filas largas: cada persona escanea su DNI y queda registrada, sin que nadie toque la pantalla. Funciona con el lector de código de barras. También funciona cuando alguien escribe el DNI completo en el buscador y da Enter.

- **Activado**: el fichaje se registra apenas se escanea, sin tocar **Confirmar**. Si llegan varias personas seguidas, los escaneos esperan en una cola y no se pierde ninguno.
- **Desactivado**: al escanear aparece el empleado y hay que tocar **Confirmar INGRESO** o **Confirmar EGRESO**. Así viene de fábrica.

Con la opción activada, el fichaje funciona así:

- En la pantalla se ve el nombre de la persona en grande, con **Ingreso registrado** o **Egreso registrado** y la hora. El cuadro es verde si fue un ingreso y rojo si fue un egreso.
- Arriba aparece la etiqueta violeta **EVENTO**. Si hay escaneos esperando, suma cuántos están **en cola**.
- El dispositivo decide solo si es ingreso o egreso, según si la persona ya estaba adentro. Si el **Modo de fichaje** está en **Bloqueado**, usa la acción fija que elegiste.
- No saca foto y no habla, aunque la foto esté en **Obligatoria** o el **Texto a voz automático** esté prendido. El sonido de confirmación sí suena.
- Si el documento no es de ningún empleado cargado, aparece una franja roja grande. Por ejemplo: **Documento 30123456 no está en la lista**. Tiene el botón **Cerrar** y se cierra sola a los 6 segundos. El lector sigue activo.
- Si la misma persona escanea dos veces en menos de 5 segundos, la segunda lectura se ignora. Esto pasa con la opción activada o no.

> 💡 **Consejo útil:** buscar por nombre o elegir a alguien de las sugerencias siempre pide confirmar. Lo mismo pasa con el reconocimiento facial.

### Texto a voz automático

- **Activado**: después de cada fichaje, el dispositivo lo anuncia en voz alta. Por ejemplo: *Ingreso registrado para Juan Pérez*. Así viene de fábrica.
- **Apagado**: no habla. El aviso en pantalla y el sonido siguen igual.

Los fichajes que entran por escaneo con **Registrar sin confirmar** activado no se anuncian por voz, aunque esta opción esté prendida: así la fila no espera.

### Probar el lector

Si el lector no responde como esperás, mirá qué está leyendo. Está justo debajo de **Registrar sin confirmar**.

1. Prendé el interruptor **Probar lector**.
2. Escaneá un documento.
3. La pantalla muestra lo que leyó el lector.

Mientras probás no se registra ningún fichaje. Esto es lo que ves:

- **Detectado**: el tipo de lectura. Puede ser *DNI*, *Licencia de conducir*, *Número de documento* o *No reconocido*. Si es *No reconocido*, la etiqueta sale en rojo.
- **Documento**: el número, y a qué empleado de la lista corresponde. Si no hay ninguno, dice **sin empleado en el padrón**.
- **Nombre en el documento** y **Nacimiento**: aparecen cuando el código del documento los trae.
- **Trama**: el texto tal cual lo mandó el lector.

### Las demás opciones

Están en el cuadro **Configuración General**, de arriba hacia abajo.

- **Nombre del dispositivo**: cómo se identifica este aparato en los registros. Por ejemplo: *Tablet Recepción*. Si lo dejás vacío, se guarda con la IP pública.
- **Foto al fichar**: **Obligatoria** saca la foto sola y no deja confirmar sin ella. **Opcional** saca la foto solo si tocás **Capturar**. **Deshabilitada** no saca foto.
- **Cámara preferida**: elegí **Frontal (selfie)** o **Trasera**. El botón **Detectar** vuelve a buscar las cámaras del aparato. Si encuentra más de una, aparece **Cámara específica (opcional)** para elegir una. Con **Auto** usa la frontal o la trasera, según lo que elegiste. El navegador te pide permiso para usar la cámara.
- **Mostrar previsualización de cámara**: muestra la cámara en vivo mientras esperás a la próxima persona. Apagada, la pantalla dice **Previsualización desactivada**.
- **Reconocimiento facial**: elegí **Automático (según dispositivo)**, **Siempre activado** o **Siempre desactivado**. En **Automático** se activa solo si el aparato lo soporta y hay pocos rostros. En tablets lentas o con muchos empleados queda apagado y se ficha por DNI o con el buscador.
- **Lector de código de barras (USB)**: permite fichar escaneando el código del DNI o de la licencia de conducir. El lector tiene que estar configurado para mandar Enter al final de cada lectura. Viene activado.
- **Modo de fichaje**: con **Automático** o **Manual**, el dispositivo propone Ingreso o Egreso según si la persona ya está adentro, y podés cambiarlo antes de confirmar. Con **Bloqueado**, todos los fichajes llevan la misma acción.
- **Acción bloqueada**: solo aparece con **Bloqueado**. Elegí **Siempre Ingreso** o **Siempre Egreso**.

Al terminar, tocá el botón **Guardar Configuración**, abajo. Aparece el aviso **Configuración guardada**. Los cambios no se aplican hasta que lo tocás.

### Modo Evento

Arriba de todo hay un cuadro **Control de acceso a evento**, pensado para filas largas. Por ejemplo, controlar la entrada a una charla. Tocá **Activar modo Evento** y el dispositivo queda así:

- **Registrar sin confirmar**: activado.
- **Lector de código de barras (USB)**: activado.
- **Modo de fichaje**: **Bloqueado**, con **Siempre Ingreso**.
- **Foto al fichar**: **Deshabilitada**.
- **Texto a voz automático**: apagado.
- **Reconocimiento facial**: **Siempre desactivado**.

El botón guarda en el momento: no hace falta tocar **Guardar Configuración**. Después podés ajustar cualquier opción de abajo. Mientras **Registrar sin confirmar** esté activado, el cuadro muestra la etiqueta **Modo Evento activo**.

No hay un botón para apagarlo. Para volver al fichaje de siempre, desactivá **Registrar sin confirmar**. Después elegí de nuevo el **Modo de fichaje**, la **Foto al fichar**, el **Texto a voz automático** y el **Reconocimiento facial** que usabas, y tocá **Guardar Configuración**.

### Las otras pestañas

- **Empleados**: la lista de las personas cargadas en el dispositivo. Podés buscar por nombre, apellido o DNI, y filtrar por sector. El botón **Actualizar** vuelve a bajar la lista del sistema. Usalo cuando cargaste un empleado nuevo y todavía no aparece.
- **Reconocimiento Facial**: el botón **Analizar y entrenar** revisa la foto de cada empleado y entrena el reconocimiento con las que se ven bien. Podés entrenar solo un sector. **Forzar reentrenamiento** borra todo lo entrenado y empieza de cero, y antes te pregunta. **Limpiar eliminados** saca los rostros de empleados que ya no están.

---

## ⚠️ Resolución de Inconvenientes

<div id="resolucion-de-inconvenientes"></div>

| Problema | Causa más frecuente | Solución recomendada |
|---|---|---|
| Los casilleros se vacían al escribir el PIN. | El PIN está mal escrito. Puede ser una O en vez de un 0. | Copialo de la pantalla y pegalo en el primer casillero. |
| La app muestra empleados de otra sucursal. | Usaste el PIN de cuenta y elegiste otra sucursal. | Volvé a ingresar con el PIN de la sucursal correcta. |
| No aparece el empleado en la app. | Todavía no está cargado en el sistema. | Cargalo en [Empleados](/user-guide/empleados) y volvé a abrir la app. |
| No veo **Datos de Acceso a la App** en el menú. | Tu usuario no tiene permiso de fichaje. | Pedile a un administrador el permiso. |
| Perdí el PIN. | Nadie lo anotó. | Entrá a esta pantalla: el PIN se muestra siempre igual. |
| Escaneo el DNI y no pasa nada. | **Lector de código de barras (USB)** está apagado, o el lector no manda Enter al final. | Activá la opción y usá **Probar lector** para ver qué lee (Paso 3). |
| Al escanear sale **Documento ... no está en la lista**. | Esa persona no está cargada en el dispositivo, o su DNI está mal cargado. | Revisá el DNI en [Empleados](/user-guide/empleados). Después tocá **Actualizar** en la pestaña **Empleados** de la app. |
| Al escanear pide **Confirmar** cada vez. | **Registrar sin confirmar** está desactivado. | Activalo en **Configuración** y tocá **Guardar Configuración**. |
| El dispositivo no dice nada por voz. | **Texto a voz automático** está apagado, o el fichaje entró por escaneo con **Registrar sin confirmar** activado. | Prendé **Texto a voz automático** y tocá **Guardar Configuración**. Los escaneos sin confirmar no se anuncian por voz. |
| Cambié la configuración y otra tablet sigue igual. | Cada dispositivo guarda la suya. | Repetí los cambios en cada aparato. |
