# ❓ Preguntas Frecuentes
<div id="preguntas-frecuentes"></div>

Esta sección contiene las consultas más comunes sobre PaxaPOS y sus soluciones técnicas. Encontrarás tanto problemas resueltos como consultas donde necesitamos más información específica de tu configuración.

---

## 🔧 Problemas Técnicos Resueltos

### 1. **Los tipos de pago no aparecen al cobrar una mesa**

**Problema:** Configuré los tipos de pago pero cuando voy a cobrar no veo las opciones de Visa, MercadoPago, etc.

**Solución:**
1. **Verificar casillas:** Ve a la **P roja** → *Tipos de Pago* y asegurate de que tengas marcada la casilla **"Para Cobros"** en cada método.
2. **Revisar nombres:** Verificá que los nombres no tengan caracteres especiales o espacios al principio/final.
3. **Reiniciar sesión:** Cerrá PaxaPOS completamente y volvé a abrir para que tome los cambios.


---

### 2. **Los mozos no ven todas las mesas que deberían ver**

**Problema:** Configuré un mozo pero solo ve algunas mesas o no ve ninguna.

**Solución:**
1. **Revisar visibilidad:** En **P roja** → *Mozos* → [Mozo] → editá y verificá la sección **"Qué Usuarios Puede Ver"**.
2. **Configuración por sectores:** Si querés que vea todas las mesas, dejá todas las opciones **sin marcar**. Si querés sectores específicos, marcá solo las que corresponden.
3. **Verificar rol:** Asegurate de que tenga el rol correcto (Mozo, Vendedor, etc.).
4. **Reiniciar el módulo Salón:** Cerrá y volvé a abrir el módulo de Salón.

---

### 3. **Las comandas no salen en la impresora de cocina**

**Problema:** Tomo el pedido pero la impresora de cocina no imprime la comanda.

**Solución:**
1. **Verificar asignación:** En configuración de impresoras, asegurate de que tengas asignada la **impresora de comandas** correctamente.
2. **Revisar impresora configurada:** Los productos pueden tener impresoras asignadas que les indican por qué comandera van a imprimirse. Verificá en *Productos en venta → [Tu producto] → printer* que la impresora esté bien seleccionada.
3. **Probar impresora:** Hacé una **impresión de prueba** desde el panel de impresoras para verificar conectividad.
4. **Verificar papel:** Asegurate de que la impresora tenga papel y esté encendida.

---

### 4. **No imprime facturas fiscales o aparece "Error de Fiscalberry"**

**Problema:** Al intentar imprimir una factura fiscal no sale nada o aparece "Error de Fiscalberry".

**Solución:**
1. **¡PRIMERO Y MÁS IMPORTANTE!** Verificá que **Fiscalberry esté abierto y funcionando** en la PC con la impresora fiscal. Es el error más común: Fiscalberry debe estar ejecutándose en segundo plano.
2. **Revisar conexión:** Verificá que la impresora fiscal esté encendida y conectada correctamente (USB/Serie).
3. **Test de impresión:** Abrí el modulo impresoras y hacé un **test de impresión** directo para verificar que la comunicación funciona.

---

### 5. **El stock de mercadería no coincide con la realidad**

**Problema:** Compré 12 botellas pero el sistema muestra números incorrectos en stock.

**Solución:**
1. **Verificar "Cantidad que suma":** En la mercadería, revisá que el campo **"Cantidad que Suma en Stock"** esté bien calculado (si comprás 1 caja de 12, debe decir 12).
2. **Revisar unidades:** Asegurate de que las unidades de compra y venta sean consistentes (no mezclar cajas con unidades).
4. **Revisar conversión:** Verificá en *Maestro de Productos* que la conversión entre mercadería y producto esté correcta.

---

### 6. **No puedo crear una factura A porque falta el cliente**

**Problema:** Al querer facturar aparece error porque no está cargado el cliente.

**Solución:**
1. **Agregar cliente en la mesa:** En el Salón, seleccioná la mesa y hacé clic en **"Agregar Cliente"**.
2. **Crear cliente nuevo:** Clic en **"Crear Cliente"** y completá todos los datos obligatorios (CUIT, razón social, dirección).
3. **Verificar tipo de documento:** Asegurate de seleccionar el tipo correcto (CUIT para empresas, CUIL para personas).
4. **Condición IVA:** Seleccioná la condición ante IVA correcta del cliente.

---

### 7. **El arqueo no cierra: hay diferencia entre sistema y caja real**

**Problema:** El sistema dice que debería haber $50.000 pero en la caja física hay $48.500.

**Solución:**
1. **Revisar movimientos del día:** Ve a *Arqueo → Movimientos* y verificá todas las transacciones: ventas, pagos, ingresos y egresos.
2. **Verificar propinas:** Asegurate de que las propinas estén registradas correctamente (no como ventas adicionales).
3. **Revisar pagos a proveedores:** Confirmá que todos los pagos realizados estén cargados en el sistema.
4. **Contar nuevamente:** Volvé a contar el efectivo físico, separando billetes por denominación.

---

### 8. **Los productos con variantes no se cargan correctamente**

**Problema:** Configuré variantes (como "tipo de salsa") pero al tomar el pedido no aparecen las opciones.

**Solución:**
1. **Verificar asignación:** En *Productos → [Tu producto] → Editar* asegurate de tener asignada la variante en **"Asignar Variante"**.
2. **Revisar opciones:** Cada opción de la variante debe estar vinculada a un producto del Maestro (subproducto o producto en venta).
3. **Probar desde el menú:** Ve al módulo de ventas y verificá que al seleccionar el producto aparezcan las opciones.
4. **Reiniciar menú:** Cerrá y volvé a abrir el sistema de ventas.

---

### 9. **Las estadísticas muestran números que no coinciden con la realidad**

**Problema:** En Business Intelligence veo que vendí $100.000 pero en el arqueo tengo menos dinero.

**Solución:**
1. **Revisar tipos de pago:** En *Estadísticas → Ventas por Tipo de Cobro* verificá cuánto fue efectivo vs tarjetas/transferencias.
2. **Verificar período:** Asegurate de que estés viendo el mismo período en estadísticas y arqueo.
3. **Incluir todos los gastos:** Los pagos a proveedores reducen el efectivo pero no las ventas.

---

### 10. **El KDS no muestra los pedidos de algunas categorías**

**Problema:** Los platos principales aparecen en la pantalla de cocina pero las ensaladas no.

**Solución:**
1. **Verificar configuración del KDS:** Asegurate de haber configurado todos los **Puestos de cocina** (fríos, calientes, bar, etc.).
2. **Asignar productos:** Cada producto debe estar asignado al puesto correcto (*Ensaladas → Puesto Fríos*).
3. **Revisar categorías:** Los productos deben tener categorías bien definidas y asignadas.
4. **Reiniciar KDS:** Refrescá la pantalla del Kitchen Display System (F5).

---

### 11. **El sistema funciona lento en mi configuración**

**Problema:** PaxaPOS tarda mucho en cargar o responder.

**Solución:**
1. **Limpiar caché:** Borra la caché del navegador y los datos temporales, apretando ctrl + F5 para forzar recarga o ctrl + R.
2. **Cerrar aplicaciones:** Cierra otras aplicaciones que puedan estar consumiendo recursos.


### 12. **¿Cómo manejo inventario con múltiples depósitos?**

**Problema:** Tengo varios depósitos y no sé cómo gestionar el inventario entre ellos.

**Solución:**
1. **Configurar depósitos:** Ve a *P roja → Depósitos* y crea todos los depósitos que necesites.
2. **Asignar productos a depósitos:** Al crear o editar un producto, asignalo al depósito correspondiente.

---

## 📞 ¿No encontraste tu respuesta?

Si tu problema no está listado aquí o necesitás información adicional para las consultas pendientes, no dudes en contactarnos:

<a href="https://wa.me/17867553113?" target="_blank">+1 (786) 755-3113</a> 


Recordá siempre incluir:
- Versión de PaxaPOS que estás usando
- Descripción detallada del problema
- Pasos que realizaste antes del error
- Capturas de pantalla si es posible
