# IA: Cargar y reorganizar tu menú con un asistente

> **¿Dónde está en el sistema?:** En tu asistente de IA (Claude o ChatGPT), con el conector de PaxaPos agregado. Lo que se carga lo ves después en **Productos** → **Menú** y **Categorías**.  
> **¿Quién lo usa?:** Propietario / Administrador del Comercio (o quien arma la carta)

> 🎯 **¿Para qué sirve esto?**
> Para cargar tu carta en PaxaPos sin escribir producto por producto. Le pasás el PDF, el Excel o una foto a tu asistente de IA y él arma las categorías y los productos con sus precios. También lo podés usar para reordenar un menú que ya tenés.
> Antes de guardar algo, te muestra cómo va a quedar y espera tu confirmación.

---

## ✅ Antes de empezar

<div id="antes-de-empezar"></div>

- **Tené tu asistente conectado a PaxaPos.** Si todavía no lo hiciste, seguí la guía de [Claude](/user-guide/ia-conectar-claude) o la de [ChatGPT](/user-guide/ia-conectar-chatgpt).
- **Usá el conector Catálogo** (`https://api.paxapos.com/mcp/catalogo`): trae las herramientas para armar el menú. Si tu plan admite un solo conector, usá el de **Todo**: el asistente busca por su cuenta lo que necesita, pero da algunas vueltas más. Las direcciones de todos los conectores están en [Conectores por área](/user-guide/ia-conectar-claude#conectores-por-area).
- **Tu usuario tiene que poder crear y modificar productos y categorías.** Si el asistente te dice que no tiene permiso, pedile al dueño que revise tu rol en [Permisos por Rol](/user-guide/permisos-por-rol).
- **Tené la carta a mano:** un PDF, un Excel o CSV, una foto, o el texto copiado.

> 🔒 **Tranquilo:** el asistente trabaja con tu usuario de PaxaPos y solo puede hacer lo que tu rol permite.

---

## 📥 Cargar tu carta paso a paso

<div id="cargar-la-carta"></div>

### 1. Pedile que cargue la carta

<div id="paso-1"></div>

1. Abrí un chat nuevo y fijate que el conector de PaxaPos esté activo en esa conversación.
2. Adjuntá tu carta (PDF, Excel, CSV o foto) o pegá el texto.
3. Escribile lo que querés, con tus palabras. Por ejemplo: _"Quiero cargar mi carta en PaxaPos. Te adjunto el PDF."_

Si tu asistente muestra los comandos del conector de PaxaPos (Claude lo hace), podés elegir **cargar_menu**. Si no, alcanza con escribirlo. Si tenés más de un comercio, el asistente te pregunta en cuál cargar.

> 💡 **Consejo útil:** el asistente lee el archivo por su cuenta. Lo que no entiende (una foto borrosa, un precio ilegible) lo marca como duda: no lo inventa.

### 2. Contestá sus preguntas

<div id="paso-2"></div>

Antes de proponerte nada, el asistente te pregunta lo que necesita para armar el menú bien:

- **Qué tipo de negocio tenés:** restaurante, bar, cafetería, panadería, heladería, ferretería, almacén o kiosco. Con eso ordena las categorías como se acostumbra en tu rubro.
- **Cómo trabajan:** si el mozo le pasa la comanda a alguien que la carga a mano, o comanda directo en el sistema; si imprimen las comandas en cocina; si quieren estadísticas por marca. Si la comanda se pasa a mano, arma un menú más corto y agrupa las variantes (por ejemplo, todas las gaseosas como "Gaseosa"). Si comandan en el sistema, deja un producto por marca o variante.
- **Si los precios de la carta ya incluyen el IVA**, en qué moneda están y [qué IVA usar](#el-iva).
- **Qué hacer con los productos "a consultar"**, que no tienen precio ([más abajo](#limitaciones)).

### 3. Revisá la vista previa

<div id="paso-3"></div>

Con tus respuestas, el asistente te muestra **cómo quedaría el menú, sin guardar nada**:

- Un **resumen**: cuántas categorías son nuevas y cuántas ya existen, y cuántos productos hay.
- El **árbol de categorías**, numerado, con cuántos productos tiene cada una. Por ejemplo: _VINOS > MALBEC (14)_.
- Una **tabla de productos** con nombre, precio, IVA y categoría.
- **Avisos y dudas:** nombres de categoría que tuvo que abreviar, categorías con demasiados productos (más de 15) o con muy pocos, productos que se parecen a otros que ya tenés y los productos "a consultar" que no se van a cargar.

Si algo no te gusta, decíselo: _"Pasá las pastas a Principales"_, _"sacá la categoría Varios"_, _"las bebidas van al final"_. El asistente rearma la propuesta y te muestra la vista previa de nuevo.

### 4. Confirmá

<div id="paso-4"></div>

Cuando esté bien, contestale que sí de forma clara, por ejemplo: _"Sí, confirmalo."_ Recién ahí se guarda.

> ⚠️ **Importante:** si no confirmás, no se guarda nada. Y si cambiás algo después de ver la vista previa, el asistente te la vuelve a mostrar antes de guardar: lo que se carga es exactamente lo que viste.

### 5. Leé el resumen

<div id="paso-5"></div>

Al terminar, el asistente te cuenta cuántas categorías y productos creó, cuáles ya existían, cuáles se omitieron y si hubo errores. También comprueba que todo quedó guardado. Si no pudo comprobarlo, te lo dice en vez de decir "listo".

Si tu carta es larga, la carga se hace **por tandas** (hasta 120 productos cada una) y el asistente sigue hasta completarla.

### 6. Mirá el resultado en PaxaPos

<div id="paso-6"></div>

Entrá a **Productos** → **Menú** y a **Categorías** para ver cómo quedó. Mirá [Menú](/user-guide/menu) y [Categorías](/user-guide/categorias) si necesitás ajustar algo a mano.

> ⏱️ **Ojo:** el menú puede tardar **unos minutos** en mostrar lo nuevo en el salón y en la carta online. Si no lo ves enseguida, esperá un rato y actualizá.

---

## 🔁 Si repetís la carga, no se duplica

<div id="no-duplica"></div>

Podés volver a pedir la misma carga sin miedo:

- Una **categoría** que ya existe en el mismo lugar se reutiliza. No importan las mayúsculas ni las tildes.
- Un **producto** que ya está en el menú con el mismo nombre aparece como _"ya existía"_ y no se vuelve a crear.
- Si un producto **se parece mucho** a otro que ya tenés (por ejemplo, se diferencian en una sola letra), el asistente no lo crea solo: te muestra los dos y te pregunta.
- Si la carga **se corta a la mitad** (se cayó internet, cerraste el chat), pedile que la continúe: completa lo que falta sin repetir lo que ya cargó.

> 💡 **Consejo útil:** si vas a repetir una carga justo después de hacerla, esperá unos minutos. El menú tarda en reflejar lo cargado y el asistente puede mostrarte avisos de más.

---

## 🧾 El IVA siempre se define

<div id="el-iva"></div>

- El asistente **nunca deja un producto sin IVA**. Si tu carta no lo dice, **te pregunta qué IVA usar**.
- Podés decirle un IVA para todo (por ejemplo, 21 %) o uno distinto por producto o categoría.
- Las alícuotas posibles son 0, 2,5, 5, 10,5, 21 y 27 %. Si elegís una que tu comercio no tiene cargada en PaxaPos, el asistente te avisa y te muestra las que sí.
- Si falta el IVA en medio de la carga, frena y te pregunta. Lo que ya se cargó se conserva.

---

## 🚧 Lo que tenés que saber

<div id="limitaciones"></div>

| Qué pasa                                                      | Cómo funciona                                                                                                                                                                                                    | Qué hacer                                                                                                                              |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Los productos "a consultar" (sin precio) se omiten.**       | Un producto sin precio no se puede cargar. El asistente te los lista como omitidos.                                                                                                                              | Cargalos a mano en [Menú](/user-guide/menu) cuando tengan precio.                                                                      |
| **Los nombres de categoría tienen un tope de 20 caracteres.** | PaxaPos no acepta nombres más largos y no los corta solo. El asistente los abrevia y te lo avisa en la vista previa. Por ejemplo, _CABERNET SAUVIGNON_ queda _CABERNET SAUV._                                    | Revisá la abreviatura. Si no te gusta, pedile otra. Después la podés renombrar.                                                        |
| **La carga no incluye todo.**                                 | Arma categorías, productos, precios e IVA (y la descripción, si tu carta la trae). No carga variantes ni grupos de sabores, recetas ni fotos. Tampoco completa la abreviatura del ticket, salvo que se la pidas. | Completalos después desde [Menú](/user-guide/menu), [Variantes](/user-guide/variantes-grupo-sabores) y [Recetas](/user-guide/recetas). |
| **Lee lo que ve.**                                            | Si la foto o el PDF no se leen bien, el asistente marca el producto como duda en vez de inventar el precio o el nombre.                                                                                          | Revisá las dudas, corregí lo que haga falta o mandá una foto más clara.                                                                |

---

## 🧹 Reorganizar tu menú

<div id="reorganizar"></div>

No hace falta cargar una carta para usar al asistente: también ordena el menú que ya tenés. Pedíselo con tus palabras:

- _"Mostrame mis categorías con cuántos productos tiene cada una."_
- _"¿Tengo categorías repetidas o vacías?"_
- _"¿Qué productos no tienen categoría o no tienen IVA?"_
- _"Mové todos los productos de Postres a Dulces."_
- _"Poné Vinos después de Cervezas."_
- _"Renombrá Bebidas 2 como Gaseosas."_
- _"Fusioná Bebidas 2 dentro de Bebidas."_
- _"Eliminá la categoría Ofertas y pasá sus productos a Promos."_
- _"Poneles IVA 21 % a todos los productos que no tienen IVA."_
- _"Sacá estos productos del menú."_

### Qué pide confirmación

<div id="confirmacion"></div>

Las operaciones que cambian muchas cosas a la vez **te muestran antes qué harían y esperan tu confirmación**.

| Lo que le pedís                                                                                                                                                                                | Cómo funciona                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Ver el árbol de categorías, buscar productos sin categoría o sin IVA                                                                                                                           | Solo mira. No cambia nada.                                                                   |
| Crear, renombrar o reordenar categorías, o renombrar un producto                                                                                                                               | Lo hace directo. Si querés, pedile que antes te muestre qué haría.                           |
| Mover una categoría con todo lo que tiene adentro, fusionar dos categorías, eliminar una categoría                                                                                             | Te muestra qué se mueve o se borra y cuántos productos afecta. Con tu confirmación, lo hace. |
| Mover muchos productos a otra categoría (hasta 500 por vez), asignar IVA a muchos productos, quitar productos del menú, cambiar muchos precios (hasta 200 por vez), aplicar una carta completa | Te muestra el detalle y espera tu confirmación.                                              |
| Cambiar la impresora o el puesto de comanda de muchos productos                                                                                                                                | Te pide confirmación antes de hacerlo.                                                       |

Algunas cosas para tener en cuenta:

- **Eliminar una categoría** no la borra si todavía tiene productos o subcategorías. Vos elegís qué pasa con lo que tiene adentro: pasarlo a la categoría de arriba o a otra que le indiques.
- **Quitar productos del menú** los saca del menú, pero el producto sigue existiendo en PaxaPos.
- Estas acciones **no tienen un botón de deshacer**. Leé el detalle antes de confirmar.

---

## 🧑‍🍳 El asesor de menú

<div id="asesor"></div>

Además de cargar, el asistente puede **aconsejarte cómo armar y ordenar tu carta** según tu tipo de negocio. Solo aconseja: **no cambia nada** hasta que vos elijas qué consejos aplicar, y cada cambio pide su propia confirmación.

**Cómo pedirlo:** escribile algo como _"Asesorame con mi menú, tengo una pizzería"_, o elegí **asesor_menu** entre los comandos del conector. Podés pedirle que revise solo una parte (la estructura, las ventas y el margen, o los chequeos) y un período. Si no le decís nada, mira los últimos 90 días.

### Qué mira

<div id="asesor-que-mira"></div>

- **Estructura y orden.** Si el orden de tus categorías es el que se acostumbra en tu rubro y si tenés demasiados niveles. Tiene guías para restaurante (parrillas, pizzerías, bodegones), bar (cervecerías, pubs), cafetería, panadería (pastelerías, confiterías), heladería, ferretería (corralones, pinturerías) y almacén (kioscos, autoservicios, supermercados).
- **Chequeos de calidad.** Productos repetidos o casi repetidos, categorías vacías, con muy pocos productos o con demasiados (más de 15), productos sin categoría o sin IVA, y nombres escritos de formas distintas.
- **Ventas y margen** (en negocios gastronómicos). Ordena tus productos en cuatro grupos:

| Grupo                  | Qué significa                          | Qué te sugiere                                            |
| ---------------------- | -------------------------------------- | --------------------------------------------------------- |
| **Estrella**           | Se vende mucho y deja buen margen.     | Destacarlo y cuidarlo.                                    |
| **Caballo de batalla** | Se vende mucho, pero deja poco.        | Revisar el costo o subir el precio de a poco.             |
| **Rompecabezas**       | Deja buen margen, pero se pide poco.   | Empujarlo: mejor nombre, descripción o lugar en la carta. |
| **Perro**              | Ni se vende mucho ni deja buen margen. | Simplificar o sacarlo de la carta.                        |

- **Ranking por importe** (en panaderías, ferreterías y almacenes). Muestra cuáles son los pocos productos que hacen la mayor parte de la venta (los primeros, que suman hasta el 80 %), los siguientes (hasta el 95 %) y el resto, que conviene revisar.
- **Cómo se presenta la carta** (en negocios gastronómicos). Dónde poner lo que querés destacar, cuántos productos por sección, cómo escribir los precios y las descripciones.

> ⚠️ **Para analizar ventas y margen hace falta que tengas datos.** El asistente necesita las ventas del período y el **costo de cada producto** (por ejemplo, con sus [Recetas](/user-guide/recetas) cargadas). Si no hay costos, no arma los cuatro grupos y te lo dice: te da solo consejos de estructura y orden. Si hay muy pocas ventas (menos de 50 unidades) o menos de 5 productos con costo, te avisa que no alcanza para sacar conclusiones. Para leer las ventas, además del conector **Catálogo** activá el de **Reportes**, o usá el de **Todo**.

> 💡 **Consejo útil:** si en tu comercio la comanda se pasa a mano y no se imprime en cocina, el asesor no arma los cuatro grupos (salvo que se lo pidas) y se queda en estructura y orden.

El asesor te da hasta unos 10 consejos, ordenados por impacto. Cada uno dice qué cambiaría, por qué y qué dato lo justifica. **Vos decidís:** cuáles aceptar, cuáles editar y cuáles descartar. Son recomendaciones generales de cada rubro: si no encajan con tu negocio, manda tu criterio.

---

## 🧾 Qué queda registrado

<div id="registro"></div>

Todo lo que el asistente cambia en tu menú **queda registrado**: quién lo pidió, cuándo, qué hizo y qué resultado tuvo. Se guarda durante **90 días**.

Si sos dueño o administrador del comercio, podés pedirle al asistente que te muestre los últimos cambios hechos por IA, por ejemplo: _"Mostrame qué cambios se hicieron con IA en mi comercio esta semana."_ Sirve para revisar una carga. Las vistas previas también aparecen en el registro, aunque no hayan cambiado nada.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

<div id="problemas-comunes"></div>

| ¿Qué te pasa?                                                                | ¿Por qué puede ser?                                                                                | ¿Cómo se soluciona?                                                                                                                       |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| El asistente dice que no puede hacerlo o que no tiene la herramienta.        | Tu rol no puede modificar productos, o estás en un conector que no trae las herramientas del menú. | Revisá tu rol en [Permisos por Rol](/user-guide/permisos-por-rol) y usá el conector **Catálogo** o el de **Todo**.                        |
| No me aparece el comando **cargar_menu**.                                    | El conector no está activo en ese chat, o tu asistente no muestra los comandos.                    | Activá el conector de PaxaPos en el chat y escribile lo que querés con tus palabras.                                                      |
| No pudo leer mi PDF o mi foto.                                               | La imagen está borrosa, el PDF está protegido o es muy pesado.                                     | Mandá una foto más clara, un Excel, o copiá y pegá el texto de la carta.                                                                  |
| Me pide el IVA.                                                              | Tu carta no lo trae y PaxaPos no lo da por sentado.                                                | Decile qué IVA corresponde. Mirá [El IVA siempre se define](#el-iva).                                                                     |
| Me muestra la vista previa de nuevo antes de guardar.                        | Cambiaste algo después de verla. Lo que se guarda tiene que ser lo que confirmaste.                | Revisala y volvé a confirmar.                                                                                                             |
| Un producto figura como omitido.                                             | No tiene precio ("a consultar") o se parece mucho a otro que ya tenés.                             | Si no tiene precio, cargalo a mano. Si es parecido a otro, decile si querés crearlo igual.                                                |
| La carga quedó a medias.                                                     | Se cortó la conexión o la carta es muy larga.                                                      | Pedile que la continúe. Completa lo que falta sin duplicar.                                                                               |
| Cargué la carta, pero no veo los productos en el salón o en la carta online. | El menú tarda unos minutos en actualizarse.                                                        | Esperá unos minutos y actualizá. Si siguen sin aparecer, pedile que revise qué productos quedaron sin categoría o sin IVA.                |
| El asistente no encuentra un producto que sí tengo.                          | Puede estar marcado sin stock o estar en una categoría privada: esos no los ve al revisar el menú. | Avisale cuál es y revisalo en [Menú](/user-guide/menu).                                                                                   |
| Se cargó algo que no quería.                                                 | Confirmaste una propuesta que no estaba bien.                                                      | Pedile que lo corrija (mover, renombrar o quitar del menú) o ajustalo en [Menú](/user-guide/menu) y [Categorías](/user-guide/categorias). |

---

## 📞 ¿Necesitás ayuda?

- 📱 **Soporte Directo WhatsApp**: <a href="{{WHATSAPP_URL}}?" target="_blank">{{WHATSAPP_DISPLAY}}</a>
