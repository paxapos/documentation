# Épica #126 y sus issues hijas — texto completo sin editar

Fuente: https://github.com/paxapos/documentation/issues/126

---

## #126 — 📸 Épica: Manual de Usuario con capturas Playwright — una captura por botón

**Estado:** open · **URL:** https://github.com/paxapos/documentation/issues/126

## 🎯 Objetivo

Que **todo** el Manual de Usuario tenga, para cada pantalla, **una captura por cada botón y cada campo**: la pantalla con ese botón marcado en rojo (dónde está) + el botón solo recortado (cómo es). Nunca una captura general con el texto "tocá tal botón". El texto se reescribe paso a paso para gente que **nunca usó una computadora para trabajar**: cómo completar un formulario, abrir una mesa, filtrar transacciones, ver el detalle del arqueo de una caja, etc.

Las capturas se sacan con **Playwright** desde el tenant de prueba (`https://dev2.paxapos.com/prueba`), con recetas versionadas en `paxapos/core` → `scripts/manual-capturas/`.

## 📐 Alcance: qué entra en el manual

El manual explica **solo** los módulos del menú marcados como **"entra en el manual"** en el listado del equipo. Todo lo demás se omite y sus artículos se borran en **#205**. Excepciones:

- **Comandero**: entra como **un único artículo de texto SIN imágenes** (#135).
- **RRHH**: entra, pero **por el momento se omite** de la documentación (#136, en pausa).
- **Mozos**: está en Ventas y en Configuración; se documenta **solo en Ventas**.
- **Stock → Movimientos**: solo para explicar para qué sirve y cómo se leen los movimientos.
- **Configuración → Centros de Costo**: solo qué son y cómo crearlos.

## 🧩 Cómo está organizado

```
Épica (este issue)
├── Infra: mergear runner + skill en paxapos/core   ← hacer PRIMERO (#127)
├── Módulo (un issue por módulo)
│   └── Artículo (un issue por cada .md que entra en el manual)
└── Aparte: #205 — módulos que NO entran (borrar artículos)
```

Cada **issue de artículo** está pensado para que lo pueda hacer una persona o un modelo de IA **sin conocer el sistema**. Trae la URL real y el camino del menú, los archivos de código (CTP de CakePHP) con link a la línea de cada botón, el **inventario de botones y campos** con selector sugerido, si se puede tocar o **solo foto**, el **nombre de archivo** de cada captura, un esqueleto de la receta y pasos numerados con criterios de aceptación.

## 📏 Reglas (resumen de la [skill](https://github.com/paxapos/core/blob/claude/playwright-documentation-screenshots-qezzqp/.github/skills/manual-usuario-capturas/SKILL.md))

1. **Una captura por botón:** `shotHighlight` (pantalla con el botón en rojo) + `shotElement` (recorte). `shot` (pantalla completa) solo una vez por pantalla.
2. **Crear el estado, no esperarlo:** si hace falta una mesa abierta, la receta la abre. Nada de `if (isVisible)` que se saltea capturas en silencio: el runner falla si falta alguna.
3. **Nunca tocar** botones que cobran, imprimen, facturan, borran, anulan o mandan mails reales: solo foto.
4. **Nunca datos reales** (nombres, emails, CUIT, tokens, PINs): datos de mentira y `blur()`.
5. **Redacción:** una acción por paso, frases de menos de 15 palabras, voseo, el botón en **negrita** igual que en pantalla, sin palabras técnicas, decir qué pasa después de tocar.
6. **Nombres:** `static/images/manual/<modulo>/<NNN>-<PP>-<descripcion>.png` (ej. `132-03-boton-agregar.png`). Las imágenes viejas de 10/20 no se renombran.

## 📊 Estado por módulo

| Issue | Módulo (menú) | Artículos que entran | Capturas previstas | Estado hoy |
|---|---|---|---|---|
| #128 | 10-Comenzamos | 4 | 33 | 🟡 2/4 con capturas generales |
| #129 | 20-Ventas | 8 (2 nuevos) | 488 | 🟡 6/8 con capturas, faltan las del botón Cobrar y los recortes por botón |
| #130 | 30-Medios-de-Pago (**Pagos**) | 2 (1 nuevo) | 46 | ⏳ sin capturas |
| #131 | 40-Productos | 7 | 230 | ⏳ sin capturas |
| #132 | 50-Compras | 6 (1 nuevo) | 242 | ⏳ sin capturas |
| #133 | 60-Stock | 3 | 60 | ⏳ sin capturas |
| #134 | 70-Finanzas | 9 | 334 | ⏳ sin capturas |
| #135 | 80-Comandero | 1 (texto, **sin imágenes**) | — | ⏳ fusionar 6 artículos en 1 |
| #136 | 90-RRHH | — | — | ⏸️ en pausa: por ahora se omite |
| #137 | 100-Reportes | 3 | 61 | ⏳ sin capturas |
| #138 | 110-Configuracion | 10 (1 nuevo que fusiona 8) | 498 | ⏳ sin capturas |
| #139 | 150-Extra | — | — | ⏸️ en pausa (FAQ; no es un módulo del menú) |
| — | 140-Biblioteca-de-Drivers | — | — | ➖ fuera de alcance: fotos de impresoras (#117 a #123) |
| **#205** | **Módulos que NO entran** | — | — | 🗑️ borrar artículos |
| | **Total con capturas** | **52** | **1992** | |

## 📋 Módulos y artículos que entran en el manual

### 10-Comenzamos (#128)
#140 Bienvenida · #141 Iniciar sesión · #142 Recuperar contraseña · #143 Guía de Inicio Rápido

### 20-Ventas (#129)
| Menú | Ruta | Issue |
|---|---|---|
| Salón de Ventas | `aditions/aditions/adicionar` | #144 |
| Caja Rápida | `aditions/aditions/registradora` | #145 |
| Clientes | `clientes/index` | #148 |
| Descuentos | `fidelization/descuentos` | #149 |
| Nueva Reserva | `mesas/reservas_add` | #150 |
| Listado de Reservas | `mesas/reservas_index` | #151 |
| Grilla de Reservas 🆕 | `aditions/aditions/calendario_pwa` | #211 |
| Mozos 🆕 (se mueve desde Configuración) | `mozos/index` | #210 |

### Pagos · 30-Medios-de-Pago (#130)
| Menú | Ruta | Issue |
|---|---|---|
| Configuración de Procesadores | `payments/payments_config/processors` | #152 |
| Transacciones MercadoPago 🆕 | `payments/payments_transactions?acquirer=MPAGO` | #159 |

### 40-Productos (#131)
| Menú | Ruta | Issue |
|---|---|---|
| Menú | `product/menu_productos/index_vendibles` | #161 |
| Categorías | `categorias/index` | #162 |
| Variantes | `product/grupo_sabores` | #163 |
| Maestro de Productos | `product/productos` | #164 |
| Sub-Productos (Elaborados) | `product/productos/subproductos` | #165 |
| Recetas | `product/productos/listado_recetas` | #166 |
| Buscar Duplicados | `product/productos/analizar_duplicados_sistema` | #168 |

### 50-Compras (#132)
| Menú | Ruta | Issue |
|---|---|---|
| Crear orden de compra | `compras/pedidos/form` | #173 |
| Órdenes a aprobar 🆕 | `compras/pedidos/pendientes_aprobacion` | #212 |
| Órdenes de compra | `compras/pedidos` | #172 |
| Historial de compras | `compras/pedido_mercaderias/historial` | #179 |
| Mercaderías | `compras/mercaderias` | #176 |
| Proveedores | `account/proveedores` | #178 |

### 60-Stock (#133)
| Menú | Ruta | Issue |
|---|---|---|
| Stock Mercaderías | `stock/stocks/stock_mercaderias` | #181 |
| Stock Subproductos | `stock/stocks` | #182 |
| Movimientos (solo qué es y cómo leerlos) | `stock/movimientos` | #184 |

### 70-Finanzas (#134)
| Menú | Ruta | Issue |
|---|---|---|
| Arqueos de Caja | `cash/arqueos/nindex` | #191 |
| Listado de Cajas | `cash/cajas` | #193 |
| Transacciones de Cobro | `payments/payments_transactions` | #194 |
| Factura Manual | `account/gastos/add` | #196 |
| Resumen de Deuda | `account/gastos` | #197 |
| Pagos | `account/egresos` | #198 |
| Historial de Facturas | `account/gastos/history` | #199 |
| Histórico de Mesas | `mesas/index` | #201 |
| Puntos de Venta (PDVs) | `afip/puntoDeVentas` | #203 |

### 80-Comandero (#135) — un solo artículo, sin imágenes
Comandas Activas · Comandas Terminadas · Sectores · Puestos · Estados de Comanda · Estados de Items

### 100-Reportes (#137)
| Menú | Ruta | Issue |
|---|---|---|
| Tablero General | `stats/resumen` | #207 |
| Productos más vendidos | `detalle_comandas/index` | #208 |
| Compras por mercadería | `compras/pedido_mercaderias/calcular_estadistica` | #209 |

### 110-Configuracion (#138)
| Menú | Ruta | Issue |
|---|---|---|
| Configuración general 🆕 | `install/settings` | #206 |
| Impresoras | `printers` | #213 |
| Perfiles de Impresión | `printers/print_profiles` | #214 |
| Usuarios del Sistema | `users/users/index_for_tenant` | #215 |
| Usuarios con PIN | `users/generic_users` | #216 |
| Permisos por Rol | `users/role_permissions` | #217 |
| Turnos | `mesa/turnos` | #218 |
| Medios de cobro | `payments/payments_config/medios` | #153 |
| Clasificación de Gastos | `account/clasificaciones` | #219 |
| Centros de Costo (qué son y cómo crearlos) | `risto/centros_costo` | #220 |

## 🔀 Cambios de estructura (se hacen en el issue de cada artículo)

- **Mozos** se mueve de `110-Configuracion/131-Mozos.md` a `20-Ventas/24-Mozos.md` (#210).
- **Configuración general** (`install/settings`) unificó 8 pantallas: `111`, `112`, `113`, `114`, `117`, `118`, `119` y `121` se fusionan en `111-Configuracion-General.md` (#206).
- **Medios de cobro**: `132-Tipos-de-Pago.md` pasa a `132-Medios-de-Cobro.md` y absorbe `30-Medios-de-Pago/32-Instrumentos-Pago-Manual.md` (#153).
- **Comandero**: los 6 artículos `81` a `86` se fusionan en uno solo, sin imágenes (#135).
- **Números reutilizados** (el viejo se borra en #205): `24` (Chat → Mozos), `32` (Instrumentos → Transacciones MercadoPago) y `54` (Pedir Mercadería → Órdenes a aprobar). El slug de la URL no lleva el número, así que no hay choque de URLs.
- **Renombres por nombre de menú** (cambian la URL): `76` → Factura Manual, `78` → Pagos, `79` → Historial de Facturas, `101` → Tablero General, `132` → Medios de cobro.

## 🔎 Hallazgos

- Las capturas de `10-Comenzamos` y `20-Ventas` están en la rama `manual-img`, **no en `main`**.
- En Ventas **nunca se commitearon** las capturas del botón **Cobrar** del salón (`21`, `27`, `28`) ni de la Caja Rápida (`06`, `29`-`32`): el tenant no tenía productos / caja abierta y la receta vieja se las salteaba en silencio.
- `112-ARCA` tiene partes fuera de PaxaPOS (sitio de ARCA con clave fiscal): esas partes no se automatizan (#206).
- **Botones que el artículo nombra pero la pantalla no tiene**: 74 *Reimprimir*; 77 *Registrar Pago* (es **Pagar**, en otra pantalla); 83 *Sincronizar PDVs*; 106 *Ordenar por Unidades / Recaudación*; 109 *Filtrar por Rubro*; 127: la matriz de permisos se reemplazó por tarjetas con interruptor.
- **Botones con otro nombre en pantalla**: 71 *Abrir Caja* / *Monto Inicial* → **Abrir Arqueo** / **Importe inicial**; 76 *Guardar Gasto* → **Guardar**.
- **Mozos**: en el código (`sidebar_menu_config.php`) todavía hay dos entradas a `mesa/mozos/index`: Configuración → Tablas del Sistema, y Ventas (solo con reservas hoteleras activas). El manual documenta solo la de Ventas; sacar la de Configuración es un cambio de código aparte.

## 🔗 Relacionados

- **#205**: módulos que no entran en el manual (borrar artículos).
- #125 (convención de capturas y deep links de Fiscalberry): usar la misma convención de nombres.
- #117 a #123 (guías visuales de impresoras): fuera de esta épica, son fotos de hardware.

## 🚦 Empezar por acá

1. #127 — Infra (runner + skill).
2. #205 — borrar lo que no entra (libera los números 24, 32 y 54).
3. Módulo 20-Ventas (completar lo que falta) → 10 → 70 → 50 → 60 → 40 → 30 → 100 → 110.
4. #135 — Comandero (texto, se puede hacer en paralelo: no depende de Infra).

---

## #127 — 📸 [Manual · Infra] Mergear runner por artículo + skill actualizada (paxapos/core)

**Estado:** open · **URL:** https://github.com/paxapos/documentation/issues/127

> Prerequisito de **todos** los issues de artículos de la épica. Sin esto, las recetas no tienen dónde vivir.

## 🎯 Qué hay que hacer

Revisar y mergear a `main` de **paxapos/core** la rama [`claude/playwright-documentation-screenshots-qezzqp`](https://github.com/paxapos/core/tree/claude/playwright-documentation-screenshots-qezzqp), que ya tiene:

- `scripts/manual-capturas/run.mjs` + `lib.mjs`: runner con **una receta por artículo** (`recetas/<modulo>/<NNN>-<slug>.mjs`), así cada issue toca un solo archivo y se puede trabajar en paralelo.
- Cada receta declara `export const capturas = [...]` y el runner **termina con código 1 si falta alguna** (antes, las capturas del botón **Cobrar** de Ventas nunca llegaron al repo y nadie lo notó).
- Helpers nuevos: `shotHighlight` (pantalla con el botón en recuadro rojo), `blur` (tapar datos sensibles), `visible` (espera con error claro en vez de `if isVisible` silencioso), `dumpVisible` (lista los botones reales visibles), `loginAdmin` (`MANUAL_EMAIL` / `MANUAL_PASSWORD`) para pantallas que el mozo del PIN no ve. `shotElement` ahora ajusta el recorte al viewport.
- Recetas de `10-comenzamos` y `20-ventas` migradas **sin renombrar** ninguna imagen.
- `scripts/capture-manual-screenshots.mjs` queda como alias del runner nuevo.
- Skill `manual-usuario-capturas` reescrita: regla "una captura por botón", capturas del menú lateral (`NNN-00a/00b`), reglas de redacción para usuarios sin conocimientos técnicos, de dónde sacar los selectores (CTP, e2e, `sidebar_menu_config.php`), convención de nombres `NNN-PP-…`, flujo por issue.
- `references/inventario-modulos.md` con la ruta real y la vista (CTP) de los 125 artículos.

## ✅ Pasos

- [ ] **1.** Abrir un PR en `paxapos/core` desde `claude/playwright-documentation-screenshots-qezzqp` hacia `main`.
- [ ] **2.** Con acceso a `dev2.paxapos.com`, correr `node scripts/manual-capturas/run.mjs 10-comenzamos` y `… 20-ventas`: tienen que generar las mismas imágenes que ya existen (los `FALTA:` de Ventas son esperables: son las capturas que nunca se commitearon, ver issues de 21 y 22).
- [ ] **3.** Crear en el tenant de prueba un usuario **admin** para las capturas y guardar sus datos donde el equipo guarda los secretos de dev (`MANUAL_EMAIL` / `MANUAL_PASSWORD`).
- [ ] **4.** Mergear el PR y actualizar el puntero de `packages/documentation` si hace falta.
- [ ] **5.** Mergear también la rama `manual-img` de `paxapos/documentation` (tiene las imágenes de 10-Comenzamos y 20-Ventas que hoy NO están en `main`).

> Verificado localmente contra una página de prueba (recorte en los bordes, recuadro rojo, `blur`, ocultado de DebugKit, error por captura faltante). **No** se pudo correr contra `dev2.paxapos.com` desde el entorno donde se generó (sin acceso de red).

---

## #128 — 📸 [Manual · 10-Comenzamos] Comenzamos — capturas por botón (4 artículos)

**Estado:** open · **URL:** https://github.com/paxapos/documentation/issues/128

> Módulo **10-Comenzamos** de la épica de capturas del Manual de Usuario. Cada artículo tiene su propio issue hijo con todo el detalle (URL, código, botones, nombres de archivo, cómo armar la receta y pasos).

## 🎯 Objetivo

Que los 4 artículos de `Manual-Usuario/10-Comenzamos/` tengan **una captura por cada botón y campo** (pantalla con el botón marcado en rojo + recorte del botón solo) y un texto paso a paso que entienda cualquier persona sin conocimientos técnicos.

## 🧱 Datos que tiene que tener el tenant de prueba antes de empezar

Usuario de PIN (Mozo 1) para 11; admin para 14. 12 y 13 sin login. **NUNCA** enviar el formulario de recuperar contraseña (manda un mail real).

Carpeta de imágenes: `static/images/manual/10-comenzamos/` · Recetas: `paxapos/core` → `scripts/manual-capturas/recetas/10-comenzamos/`

## 📋 Artículos (un issue hijo por artículo)

| Issue | Artículo | Pantalla principal | Botones/campos en el código | Capturas previstas | Alertas |
|---|---|---|---|---|---|
| #140 | `11-Introduccion.md` | `stats/now` | 3 | 3 | guía transversal |
| #141 | `12-Iniciar-sesión.md` | `users/users/login` | 8 | 9 | ya tiene capturas |
| #142 | `13-Recuperar-contrasena.md` | `users/users/reset_password` | 5 | 5 | ya tiene capturas |
| #143 | `14-Guia-de-Inicio-Rapido.md` | `install/configurations/afip_install_wizard` | 13 | 16 | guía transversal |

## ✅ Módulo terminado cuando

- [ ] Todos los issues hijos están cerrados.
- [ ] `node scripts/manual-capturas/run.mjs 10-comenzamos` termina ✅ sin `FALTA:`.
- [ ] `pnpm build` de documentation pasa.
- [ ] Una persona que no conoce el sistema siguió al menos 1 artículo del módulo solo con las fotos y pudo hacerlo.

---

## #129 — 📸 [Manual · 20-Ventas] Ventas — capturas por botón (8 artículos)

**Estado:** open · **URL:** https://github.com/paxapos/documentation/issues/129

> Módulo **20-Ventas** de la épica de capturas del Manual de Usuario (#126). Cada artículo tiene su propio issue hijo con todo el detalle (URL, código, botones, nombres de archivo, cómo armar la receta y pasos).

## 🎯 Objetivo

Que los 8 artículos que **entran en el manual** de este módulo tengan **una captura por cada botón y campo** (pantalla con el botón marcado en rojo + recorte del botón solo) y un texto paso a paso que entienda cualquier persona sin conocimientos técnicos.

## 🧱 Datos que tiene que tener el tenant de prueba antes de empezar

Menú 'default' con al menos 1 producto · una caja ABIERTA para el mozo del PIN (abrirla a mano una vez) · 1 cliente, 1 descuento, 1 reserva y 1 mozo de mentira.

Carpeta de imágenes: `static/images/manual/20-ventas/` · Recetas: `paxapos/core` → `scripts/manual-capturas/recetas/20-ventas/`

## 📋 Artículos que entran en el manual (un issue hijo por artículo)

| Issue | Artículo | Pantalla principal | Botones/campos en el código | Capturas previstas | Alertas |
|---|---|---|---|---|---|
| #144 | `21-Salon-de-Ventas.md` | `aditions/aditions/adicionar` | 132 | 196 | faltan capturas viejas, ya tiene capturas |
| #145 | `22-Caja-Rapida.md` | `aditions/aditions/registradora` | 46 | 75 | faltan capturas viejas, ya tiene capturas |
| #210 | `24-Mozos.md` (se mueve desde `110-Configuracion/131-Mozos.md`) | `mesa/mozos/index` | 20 | 33 | 🆕 se mueve de Configuración · usa el número 24 del Chat |
| #148 | `25-Clientes.md` | `fidelization/clientes/index` | 47 | 59 | ya tiene capturas |
| #149 | `26-Descuentos.md` | `fidelization/descuentos/index` | 16 | 20 | ya tiene capturas |
| #150 | `27-Nueva-Reserva.md` | `mesa/mesas/reservas_add` | 21 | 25 | ya tiene capturas |
| #151 | `28-Listado-de-Reservas.md` | `mesa/mesas/reservas_index` | 23 | 33 | ya tiene capturas |
| #211 | `29-Grilla-de-Reservas.md` (🆕 artículo nuevo) | `aditions/aditions/calendario_pwa` | 24 | 47 | 🆕 artículo nuevo |

## 🗑️ Salen del manual (se borran en #205)

- ~~#146~~ `23-Mapa-de-Mesas.md`
- ~~#147~~ `24-Chat-del-Salon.md`
- Campañas WhatsApp (sin artículo)

## ✅ Módulo terminado cuando

- [ ] Todos los issues hijos abiertos están cerrados.
- [ ] `node scripts/manual-capturas/run.mjs 20-ventas` termina ✅ sin `FALTA:`.
- [ ] `pnpm build` de documentation pasa.
- [ ] Una persona que no conoce el sistema siguió al menos 1 artículo del módulo solo con las fotos y pudo hacerlo.

---

## #130 — 📸 [Manual · 30-Medios-de-Pago] Pagos — capturas por botón (2 artículos)

**Estado:** open · **URL:** https://github.com/paxapos/documentation/issues/130

> Módulo **30-Medios-de-Pago** de la épica de capturas del Manual de Usuario (#126). Cada artículo tiene su propio issue hijo con todo el detalle (URL, código, botones, nombres de archivo, cómo armar la receta y pasos).

En el menú del sistema el módulo se llama **Pagos**.

## 🎯 Objetivo

Que los 2 artículos que **entran en el manual** de este módulo tengan **una captura por cada botón y campo** (pantalla con el botón marcado en rojo + recorte del botón solo) y un texto paso a paso que entienda cualquier persona sin conocimientos técnicos.

## 🧱 Datos que tiene que tener el tenant de prueba antes de empezar

MercadoPago activo en el tenant de prueba con credenciales de **sandbox** y al menos 1 cobro de prueba. NUNCA credenciales reales. Reversar/devolver pagos: solo foto.

Carpeta de imágenes: `static/images/manual/30-medios-de-pago/` · Recetas: `paxapos/core` → `scripts/manual-capturas/recetas/30-medios-de-pago/`

## 📋 Artículos que entran en el manual (un issue hijo por artículo)

| Issue | Artículo | Pantalla principal | Botones/campos en el código | Capturas previstas | Alertas |
|---|---|---|---|---|---|
| #152 | `31-Configuracion-Procesadores.md` | `payments/payments_config/processors` | 9 | 10 | — |
| #159 | `32-Transacciones-MercadoPago.md` (🆕 artículo nuevo) | `payments/payments_transactions/index?acquirer=MPAGO` | 21 | 36 | 🆕 reutiliza el issue de MacroClick |

## 🗑️ Salen del manual (se borran en #205)

- ~~#153~~ `32-Instrumentos-Pago-Manual.md` → se fusiona en Configuración · 132 Medios de cobro (el issue pasó a #138)
- ~~#154~~ `33-Terminales-Payway.md`
- ~~#155~~ `34-Transacciones-Payway.md`
- ~~#156~~ `35-Reembolsos-Payway.md`
- ~~#157~~ `36-Anulaciones-Payway.md`
- ~~#158~~ `37-Cierres-Payway.md`
- `38-Transacciones-MacroClick.md` (su issue #159 se reutilizó para el 32)
- ~~#160~~ `39-Configuracion-Banco-Macro.md`

## ✅ Módulo terminado cuando

- [ ] Todos los issues hijos abiertos están cerrados.
- [ ] `node scripts/manual-capturas/run.mjs 30-medios-de-pago` termina ✅ sin `FALTA:`.
- [ ] `pnpm build` de documentation pasa.
- [ ] Una persona que no conoce el sistema siguió al menos 1 artículo del módulo solo con las fotos y pudo hacerlo.

---

## #131 — 📸 [Manual · 40-Productos] Productos — capturas por botón (7 artículos)

**Estado:** open · **URL:** https://github.com/paxapos/documentation/issues/131

> Módulo **40-Productos** de la épica de capturas del Manual de Usuario (#126). Cada artículo tiene su propio issue hijo con todo el detalle (URL, código, botones, nombres de archivo, cómo armar la receta y pasos).

## 🎯 Objetivo

Que los 7 artículos que **entran en el manual** de este módulo tengan **una captura por cada botón y campo** (pantalla con el botón marcado en rojo + recorte del botón solo) y un texto paso a paso que entienda cualquier persona sin conocimientos técnicos.

## 🧱 Datos que tiene que tener el tenant de prueba antes de empezar

Al menos 2 categorías, 3 productos, 1 grupo de sabores, 1 subproducto con receta y 1 tag (todo de mentira). 'Fusionar duplicados': solo foto.

Carpeta de imágenes: `static/images/manual/40-productos/` · Recetas: `paxapos/core` → `scripts/manual-capturas/recetas/40-productos/`

## 📋 Artículos que entran en el manual (un issue hijo por artículo)

| Issue | Artículo | Pantalla principal | Botones/campos en el código | Capturas previstas | Alertas |
|---|---|---|---|---|---|
| #161 | `41-Menu.md` | `product/menu_productos/index_vendibles` | 39 | 54 | menú cambió |
| #162 | `42-Categorias.md` | `product/categorias/index` | 23 | 29 | — |
| #163 | `43-Variantes-Grupo-Sabores.md` | `product/grupo_sabores/index` | 18 | 21 | — |
| #164 | `44-Maestro-de-Productos.md` | `product/productos/index` | 59 | 80 | — |
| #165 | `45-Subproductos-Elaborados.md` | `product/productos/subproductos` | 10 | 12 | — |
| #166 | `46-Recetas.md` | `product/productos/listado_recetas` | 9 | 11 | — |
| #168 | `48-Analisis-Duplicados.md` | `product/productos/analizar_duplicados_sistema` | 16 | 23 | — |

## 🗑️ Salen del manual (se borran en #205)

- ~~#167~~ `47-Tags-de-Productos.md`
- ~~#169~~ `49-Notas-de-Comanda.md`
- ~~#170~~ `50-Notas-de-Producto.md`

## ✅ Módulo terminado cuando

- [ ] Todos los issues hijos abiertos están cerrados.
- [ ] `node scripts/manual-capturas/run.mjs 40-productos` termina ✅ sin `FALTA:`.
- [ ] `pnpm build` de documentation pasa.
- [ ] Una persona que no conoce el sistema siguió al menos 1 artículo del módulo solo con las fotos y pudo hacerlo.

---

## #132 — 📸 [Manual · 50-Compras] Compras — capturas por botón (6 artículos)

**Estado:** open · **URL:** https://github.com/paxapos/documentation/issues/132

> Módulo **50-Compras** de la épica de capturas del Manual de Usuario (#126). Cada artículo tiene su propio issue hijo con todo el detalle (URL, código, botones, nombres de archivo, cómo armar la receta y pasos).

## 🎯 Objetivo

Que los 6 artículos que **entran en el manual** de este módulo tengan **una captura por cada botón y campo** (pantalla con el botón marcado en rojo + recorte del botón solo) y un texto paso a paso que entienda cualquier persona sin conocimientos técnicos.

## 🧱 Datos que tiene que tener el tenant de prueba antes de empezar

1 proveedor de prueba (CUIT inventado), 3 mercaderías, 1 orden de compra en cada estado. **NUNCA** enviar una OC por mail a un proveedor real.

Carpeta de imágenes: `static/images/manual/50-compras/` · Recetas: `paxapos/core` → `scripts/manual-capturas/recetas/50-compras/`

## 📋 Artículos que entran en el manual (un issue hijo por artículo)

| Issue | Artículo | Pantalla principal | Botones/campos en el código | Capturas previstas | Alertas |
|---|---|---|---|---|---|
| #172 | `52-Todas-las-Ordenes-Compra.md` | `compras/pedidos/index` | 60 | 97 | menú cambió |
| #173 | `53-Crear-Orden-Compra.md` | `compras/pedidos/form` | 35 | 40 | menú cambió |
| #212 | `54-Ordenes-a-Aprobar.md` (🆕 artículo nuevo) | `compras/pedidos/pendientes_aprobacion` | 7 | 18 | 🆕 usa el número 54 de Pedir Mercadería · aprobar/rechazar: solo OC de prueba |
| #176 | `56-Mercaderias.md` | `compras/mercaderias/index` | 23 | 26 | — |
| #178 | `58-Proveedores.md` | `account/proveedores/index` | 41 | 53 | — |
| #179 | `59-Historial-de-Compras.md` | `compras/pedido_mercaderias/historial` | 8 | 8 | — |

## 🗑️ Salen del manual (se borran en #205)

- ~~#171~~ `51-Flujo-de-Compras.md` (Tablero de compras)
- ~~#174~~ `54-Pedir-Mercaderia.md` (Pedir)
- ~~#175~~ `55-Pendientes-de-Compra.md` (Por pedir)
- ~~#177~~ `57-Mercaderias-sin-Rubro.md` (Sin rubro)
- Ítems de factura por vincular (sin artículo)

## ✅ Módulo terminado cuando

- [ ] Todos los issues hijos abiertos están cerrados.
- [ ] `node scripts/manual-capturas/run.mjs 50-compras` termina ✅ sin `FALTA:`.
- [ ] `pnpm build` de documentation pasa.
- [ ] Una persona que no conoce el sistema siguió al menos 1 artículo del módulo solo con las fotos y pudo hacerlo.

---

## #133 — 📸 [Manual · 60-Stock] Stock — capturas por botón (3 artículos)

**Estado:** open · **URL:** https://github.com/paxapos/documentation/issues/133

> Módulo **60-Stock** de la épica de capturas del Manual de Usuario (#126). Cada artículo tiene su propio issue hijo con todo el detalle (URL, código, botones, nombres de archivo, cómo armar la receta y pasos).

## 🎯 Objetivo

Que los 3 artículos que **entran en el manual** de este módulo tengan **una captura por cada botón y campo** (pantalla con el botón marcado en rojo + recorte del botón solo) y un texto paso a paso que entienda cualquier persona sin conocimientos técnicos.

## 🧱 Datos que tiene que tener el tenant de prueba antes de empezar

Mercaderías y subproductos con stock y al menos 3 movimientos de tipos distintos (entrada por compra, venta, ajuste).

Carpeta de imágenes: `static/images/manual/60-stock/` · Recetas: `paxapos/core` → `scripts/manual-capturas/recetas/60-stock/`

## 📋 Artículos que entran en el manual (un issue hijo por artículo)

| Issue | Artículo | Pantalla principal | Botones/campos en el código | Capturas previstas | Alertas |
|---|---|---|---|---|---|
| #181 | `62-Stock-Mercaderias.md` | `stock/stocks/stock_mercaderias` | 21 | 28 | — |
| #182 | `63-Stock-Subproductos.md` | `stock/stocks/index` | 20 | 20 | — |
| #184 | `64-Movimientos-de-Stock.md` | `stock/movimientos/index` | 9 | 12 | 🔎 alcance reducido: solo para qué sirve y cómo leer los movimientos |

## 🗑️ Salen del manual (se borran en #205)

- ~~#180~~ `61-Resumen-de-Stock.md`
- ~~#185~~ `65-Produccion-Subproductos.md`
- ~~#186~~ `66-Desperdicios.md`
- ~~#187~~ `67-Depositos.md`
- ~~#188~~ `68-Stock-Valorizado.md`
- ~~#189~~ `69-Stock-Cerrados.md`
- ~~#190~~ `70-Sugerencias-Compra-IA.md`

## ✅ Módulo terminado cuando

- [ ] Todos los issues hijos abiertos están cerrados.
- [ ] `node scripts/manual-capturas/run.mjs 60-stock` termina ✅ sin `FALTA:`.
- [ ] `pnpm build` de documentation pasa.
- [ ] Una persona que no conoce el sistema siguió al menos 1 artículo del módulo solo con las fotos y pudo hacerlo.

---

## #134 — 📸 [Manual · 70-Finanzas] Finanzas — capturas por botón (9 artículos)

**Estado:** open · **URL:** https://github.com/paxapos/documentation/issues/134

> Módulo **70-Finanzas** de la épica de capturas del Manual de Usuario (#126). Cada artículo tiene su propio issue hijo con todo el detalle (URL, código, botones, nombres de archivo, cómo armar la receta y pasos).

## 🎯 Objetivo

Que los 9 artículos que **entran en el manual** de este módulo tengan **una captura por cada botón y campo** (pantalla con el botón marcado en rojo + recorte del botón solo) y un texto paso a paso que entienda cualquier persona sin conocimientos técnicos.

## 🧱 Datos que tiene que tener el tenant de prueba antes de empezar

Una caja abierta con movimientos, 1 factura manual cargada a un proveedor de prueba, 1 pago. Cerrar caja: solo foto.

Carpeta de imágenes: `static/images/manual/70-finanzas/` · Recetas: `paxapos/core` → `scripts/manual-capturas/recetas/70-finanzas/`

## 📋 Artículos que entran en el manual (un issue hijo por artículo)

| Issue | Artículo | Pantalla principal | Botones/campos en el código | Capturas previstas | Alertas |
|---|---|---|---|---|---|
| #191 | `71-Arqueos-de-Caja.md` | `cash/arqueos/nindex` | 27 | 30 | botones con otro nombre · mueve plata (cuidado) |
| #193 | `73-Listado-de-Cajas.md` | `cash/cajas/index` | 13 | 13 | — |
| #194 | `74-Transacciones-de-Cobro.md` | `payments/payments_transactions/index` | 27 | 34 | el artículo nombra un botón que no existe |
| #196 | `76-Gasto-Manual.md` → `76-Factura-Manual.md` | `account/gastos/add` | 50 | 68 | ✏️ renombrar a **Factura Manual** |
| #197 | `77-Resumen-de-Deuda.md` | `account/gastos/index` | 11 | 17 | el artículo nombra un botón que no existe |
| #198 | `78-Pagos-Egresos.md` → `78-Pagos.md` | `account/egresos/index` | 41 | 51 | ✏️ renombrar a **Pagos** |
| #199 | `79-Historial-de-Gastos.md` → `79-Historial-de-Facturas.md` | `account/gastos/history` | 39 | 51 | ✏️ renombrar a **Historial de Facturas** |
| #201 | `81-Historico-de-Mesas.md` | `mesa/mesas/index` | 50 | 59 | — |
| #203 | `83-Puntos-de-Venta-PDV.md` | `afip/punto_de_ventas/index` | 11 | 11 | el artículo nombra un botón que no existe |

## 🗑️ Salen del manual (se borran en #205)

- ~~#192~~ `72-Traspasos-de-Caja.md`
- ~~#195~~ `75-Digitalizar-Factura-Gasto.md` (Subir Factura)
- ~~#200~~ `80-Digitalizacion-OCR.md` (Facturas por digitalizar)
- ~~#202~~ `82-Tickets-Fiscales.md`
- ~~#204~~ `84-Cierres-Contables.md`
- Reconciliación Fiscal, Auditoría de Cierres, Órdenes de Pago, Cheques Recibidos y Flujo de Efectivo (sin artículo)

## ✅ Módulo terminado cuando

- [ ] Todos los issues hijos abiertos están cerrados.
- [ ] `node scripts/manual-capturas/run.mjs 70-finanzas` termina ✅ sin `FALTA:`.
- [ ] `pnpm build` de documentation pasa.
- [ ] Una persona que no conoce el sistema siguió al menos 1 artículo del módulo solo con las fotos y pudo hacerlo.

---

## #135 — 📝 [Manual · 80-Comandero] Comandero — un único artículo SIN imágenes

**Estado:** open · **URL:** https://github.com/paxapos/documentation/issues/135

> Módulo **80-Comandero** de la épica #126. **Excepción a la épica:** este módulo entra en el manual como **un único artículo de texto, SIN imágenes**. No lleva receta de Playwright ni capturas: este issue es el trabajo completo (no tiene issues hijos de artículo).

## 🎯 Objetivo

Reemplazar los 6 artículos de `Manual-Usuario/80-Comandero/` por **un solo artículo** que explique, en texto, todas las pantallas del Comandero y cómo se relacionan entre sí. Tiene que entenderlo alguien que **nunca usó una computadora para trabajar**.

## 🧭 Pantallas que explica (menú **Comandero**)

| Pantalla (menú) | Ruta (`https://dev2.paxapos.com/prueba/…`) | Artículo actual (se fusiona) |
|---|---|---|
| Comandas Activas | `comanda/comandas/comandero` | `81-Comandas-Activas.md` |
| Comandas Terminadas | `comanda/comandas/terminadas` | `82-Comandas-Terminadas.md` |
| Sectores | `comanda/sectores` | `83-Sectores-de-Comanda.md` (⚠️ el artículo dice "Sectores de Comanda") |
| Puestos | `comanda/puestos` | `84-Puestos-de-Comanda.md` (⚠️ el artículo dice "Puestos de Comanda") |
| Estados de Comanda | `comanda/comanda_estados` | `85-Estados-de-Comanda.md` |
| Estados de Items | `comanda/detalle_comanda_estados` | `86-Estados-de-Items.md` |

## ✅ Pasos (tildá cada uno)

- [ ] **1.** Leé los 6 artículos actuales y abrí cada pantalla en el tenant de prueba (login admin) para confirmar que lo que dicen sigue siendo cierto.
- [ ] **2.** Creá `src/routes/user-guide/Manual-Usuario/80-Comandero/81-Comandero.md` con la [plantilla de artículo](https://github.com/paxapos/core/blob/claude/playwright-documentation-screenshots-qezzqp/.github/skills/manual-usuario-capturas/references/plantilla-articulo.md), **sin imágenes**. Estructura sugerida:
  - ¿Qué es el Comandero y para qué sirve? (la pantalla de cocina/barra que recibe lo que se comanda desde el Salón)
  - Cómo se configura: **Sectores** → **Puestos** → **Estados de Comanda** → **Estados de Items** (qué es cada uno, en ese orden)
  - Cómo se usa en el día: **Comandas Activas** (avanzar/retroceder estados, marcar listo) y **Comandas Terminadas**
  - Problemas comunes (juntar los de los 6 artículos, sin repetir)
- [ ] **3.** En cada pantalla, nombrá los botones en **negrita** exactamente como aparecen, y decí dónde están con palabras ("arriba a la derecha", "en la tarjeta de la comanda").
- [ ] **4.** Borrá los 6 artículos viejos con `git rm` y buscá links a ellos: `grep -rnE "comandas-activas|comandas-terminadas|sectores-de-comanda|puestos-de-comanda|estados-de-comanda|estados-de-items" src/`.
- [ ] **5.** Redacción (Regla 4 de la skill): una acción por paso, frases de menos de 15 palabras, voseo, sin palabras técnicas.
- [ ] **6.** `pnpm build` en `paxapos/documentation` sin errores. Commit: `docs(manual): unificar Comandero en un solo artículo`.

## 🏁 Criterios de aceptación

- [ ] En `80-Comandero/` queda **un solo** `.md` y no tiene imágenes.
- [ ] Explica las 6 pantallas del menú Comandero con sus nombres actuales.
- [ ] No hay links rotos a los artículos viejos.

---

## #136 — ⏸️ [Manual · 90-RRHH] RRHH — en pausa: por ahora se omite de la documentación

**Estado:** open · **URL:** https://github.com/paxapos/documentation/issues/136

> Módulo **90-RRHH** de la épica #126.

## ⏸️ En pausa: por ahora se omite de la documentación

RRHH **entra en el manual**, pero **por el momento se omite** (decisión del equipo). Este issue queda abierto y **sin issues hijos de artículo** hasta que se retome. No borrar los artículos de `Manual-Usuario/90-RRHH/`.

## 🧭 Pantallas del menú (para cuando se retome)

| Pantalla (menú) | Ruta (`https://dev2.paxapos.com/prueba/…`) | Artículo actual |
|---|---|---|
| Empleados | `fichaje/empleados` | `91-Empleados.md` |
| Empleados Trabajando | `fichaje/registros/working` | `92-Empleados-Trabajando.md` |
| Registro Diario | `fichaje/registros` | `93-Registro-Diario-Fichaje.md` |
| Reporte Mensual | `fichaje/registros/reporte/month/<desde>/<hasta>` | `94-Reporte-Mensual-Fichaje.md` |
| Departamentos | `fichaje/departamentos` | `95-Departamentos.md` |
| Turnos y Horarios | `fichaje/fichaje_turnos` | `96-Turnos-y-Horarios-Fichaje.md` |
| Sueldos y Jornales | `pages/sueldos_sso` (redirige por SSO a la app externa `rrhh`) | `97-Sueldos-y-Jornales.md` |
| Datos de Acceso a la App | `fichaje/registros/app_access` | `98-Datos-de-Acceso-App.md` |

La sección **RRHH** de *Configuración general* tampoco se documenta mientras este módulo esté en pausa.

---

## #137 — 📸 [Manual · 100-Reportes] Reportes — capturas por botón (3 artículos)

**Estado:** open · **URL:** https://github.com/paxapos/documentation/issues/137

> Módulo **100-Reportes** de la épica de capturas del Manual de Usuario (#126). Cada artículo tiene su propio issue hijo con todo el detalle (URL, código, botones, nombres de archivo, cómo armar la receta y pasos).

## 🎯 Objetivo

Que los 3 artículos que **entran en el manual** de este módulo tengan **una captura por cada botón y campo** (pantalla con el botón marcado en rojo + recorte del botón solo) y un texto paso a paso que entienda cualquier persona sin conocimientos técnicos.

## 🧱 Datos que tiene que tener el tenant de prueba antes de empezar

Ventas cerradas y compras recepcionadas en el rango consultado (usar un rango de fechas amplio). Login admin.

Carpeta de imágenes: `static/images/manual/100-reportes/` · Recetas: `paxapos/core` → `scripts/manual-capturas/recetas/100-reportes/`

## 📋 Artículos que entran en el manual (un issue hijo por artículo)

| Issue | Artículo | Pantalla principal | Botones/campos en el código | Capturas previstas | Alertas |
|---|---|---|---|---|---|
| #207 | `101-Resumen-General.md` → `101-Tablero-General.md` | `stats/resumen` | 20 | 27 | ✏️ renombrar a **Tablero General** |
| #208 | `106-Productos-Mas-Vendidos.md` | `comanda/detalle_comandas/index` | 15 | 21 | el artículo nombra controles que no existen |
| #209 | `109-Compras-por-Mercaderia.md` | `compras/pedido_mercaderias/calcular_estadistica` | 8 | 13 | el artículo nombra un filtro que no existe · título de menú dinámico |

## 🗑️ Salen del manual (se borran en #205)

- `102-Ventas-por-Mozo.md`
- `103-Ventas-por-Tipo-de-Pago.md`
- `104-Reporte-Anual.md` (Evolución Mensual)
- `105-Reporte-de-Propinas.md`
- `107-Proyeccion-de-Ventas.md`
- `108-Ventas-por-Turnos.md`
- `110-Rentabilidad-Subproductos.md`
- y los reportes sin artículo (Entradas y Salidas, Liquidaciones, Previsión de Sueldos, Rentabilidad de Productos, Consumo de Materias Primas, Análisis de Clientes, Mapa de Calor, Planificación e Informe Semanal)

## ✅ Módulo terminado cuando

- [ ] Todos los issues hijos abiertos están cerrados.
- [ ] `node scripts/manual-capturas/run.mjs 100-reportes` termina ✅ sin `FALTA:`.
- [ ] `pnpm build` de documentation pasa.
- [ ] Una persona que no conoce el sistema siguió al menos 1 artículo del módulo solo con las fotos y pudo hacerlo.

---

## #138 — 📸 [Manual · 110-Configuracion] Configuración — capturas por botón (10 artículos)

**Estado:** open · **URL:** https://github.com/paxapos/documentation/issues/138

> Módulo **110-Configuracion** de la épica de capturas del Manual de Usuario (#126). Cada artículo tiene su propio issue hijo con todo el detalle (URL, código, botones, nombres de archivo, cómo armar la receta y pasos).

## 🎯 Objetivo

Que los 10 artículos que **entran en el manual** de este módulo tengan **una captura por cada botón y campo** (pantalla con el botón marcado en rojo + recorte del botón solo) y un texto paso a paso que entienda cualquier persona sin conocimientos técnicos.

## 🧱 Datos que tiene que tener el tenant de prueba antes de empezar

Login **admin**. No dejar cambios guardados en la configuración del tenant de prueba: si la receta cambia algo, lo revierte. Contraseñas, PINs, API keys y certificados: solo foto + `blur`.

Carpeta de imágenes: `static/images/manual/110-configuracion/` · Recetas: `paxapos/core` → `scripts/manual-capturas/recetas/110-configuracion/`

## 📋 Artículos que entran en el manual (un issue hijo por artículo)

| Issue | Artículo | Pantalla principal | Botones/campos en el código | Capturas previstas | Alertas |
|---|---|---|---|---|---|
| #206 | `111-Configuracion-General.md` (🆕 fusiona 111, 112, 113, 114, 117, 118, 119 y 121) | `install/settings` | 182 | 244 | 🆕 pantalla unificada · sin la sección RRHH |
| #213 | `120-Impresoras.md` | `printers/printers/index` | 13 | 22 | menú cambió |
| #214 | `122-Perfiles-de-Impresion.md` | `printers/print_profiles/index` | 21 | 36 | — |
| #215 | `123-Usuarios-del-Sistema.md` | `users/users/index_for_tenant` | 26 | 42 | menú cambió |
| #216 | `124-Usuarios-con-PIN.md` | `users/generic_users/index` | 12 | 23 | menú cambió |
| #217 | `127-Permisos-por-Rol.md` | `users/role_permissions/index` | 16 | 32 | la pantalla cambió por completo |
| #218 | `130-Turnos-Mesa.md` | `mesa/turnos/index` | 13 | 24 | menú cambió |
| #153 | `132-Tipos-de-Pago.md` → `132-Medios-de-Cobro.md` (fusiona `30-Medios-de-Pago/32-Instrumentos-Pago-Manual.md`) | `payments/payments_config/medios` | 21 | 33 | ✏️ renombrar a **Medios de cobro** · la pantalla cambió |
| #219 | `134-Clasificacion-de-Gastos.md` | `account/clasificaciones/index` | 10 | 20 | menú cambió |
| #220 | `136-Centros-de-Costo.md` | `risto/centros_costo/index` | 11 | 22 | alcance: qué son y cómo crear uno |

## 🗑️ Salen del manual (se borran en #205)

- `115-Archivos-Multimedia.md`
- `125-Token-JWT-API.md`
- `126-Roles.md`
- `128-Mis-Sesiones-Activas.md`
- `129-Tipos-de-Jornada.md`
- `131-Mozos.md` → se **mueve** a Ventas · 24 (#210)
- `133-Tipos-de-Documento.md`
- `135-Rubros-de-Compras.md`
- `137-Unidades-de-Medida.md`
- `138-Tipos-de-Impuesto.md`
- App Store (sin artículo)

## ✅ Módulo terminado cuando

- [ ] Todos los issues hijos abiertos están cerrados.
- [ ] `node scripts/manual-capturas/run.mjs 110-configuracion` termina ✅ sin `FALTA:`.
- [ ] `pnpm build` de documentation pasa.
- [ ] Una persona que no conoce el sistema siguió al menos 1 artículo del módulo solo con las fotos y pudo hacerlo.

---

## #139 — 📸 [Manual · 150-Extra] Extra (FAQ y ayuda) — capturas por botón (10 artículos)

**Estado:** open · **URL:** https://github.com/paxapos/documentation/issues/139

Módulo de la épica #126. El detalle se completa al crear los issues de cada artículo.
