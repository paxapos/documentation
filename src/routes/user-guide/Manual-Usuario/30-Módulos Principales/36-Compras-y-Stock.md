# 📦 Compras y Gestión de Stock
<div id="compras-stock"></div>

> 🎯 **¿Para qué sirve esto?**  
> Acá manejás todo lo que COMPRÁS (mercadería) y lo convertís en lo que VENDÉS (productos). Es el corazón del control de stock: sabés qué tenés, cuánto tenés y cuándo se te acaba algo.

---

## 🔑 **CONCEPTO CLAVE: Mercadería vs Producto**

```
📥 MERCADERÍA = Lo que COMPRÁS a proveedores
   ↓ (convertir)
🛍️ PRODUCTO = Lo que VENDÉS a clientes
```

### **💡 Ejemplo práctico:**
- **Mercadería:** "Caja de 12 Coca-Colas" (lo que comprás)
- **Producto:** "Coca-Cola 500ml" (lo que vendés de a una)

---

## 📦 **1. Crear Nueva Mercadería**

### **🎯 ¿Cuándo usar esto?**
Cada vez que vayas a comprar algo nuevo que no tenés en el sistema.

### **🚀 Paso a paso:**
1. **Entrá a:** "Compras"
2. **clic en:** "Mercadería"
2. **Clic en:** "Nueva Mercadería"
3. **Completá la ficha:**

🔹 **Nombre de la Mercadería** | Cómo viene del proveedor  
🔹 **Unidad de Medida de Compra** | En qué unidad lo comprás  
🔹 **Cantidad que Suma en Stock** | Cuántas unidades individuales trae

### **🧮 Cálculo súper importante:**
**"Cantidad que Suma en Stock"** = Cuántas unidades de venta tiene tu compra

#### **📋 Ejemplos comunes:**

🔹 **Caja de vinos x6** | CAJA → 6 unidades (Cada caja trae 6 botellas)  
🔹 **Pack galletas x12** | PACK → 12 unidades (Cada pack trae 12 paquetes)  
🔹 **Bolsa papas x50** | BOLSA → 50 unidades (Cada bolsa trae 50 papas)  
🔹 **Botella de aceite** | UNIDAD → 1 unidad (Comprás y vendés de a 1)

### **✅ Al final:**
4. **Clic en "Guardar"**

---

## 🛍️ **2. Crear una mercaderia desde un producto**

### **🚀 Paso a paso:**
1. **Entrá a:** "Productos"
2. **Click en:** "Maestro de productos"
3. **Buscá:** El nombre de la mercadería que creaste
4. **Clic en:** Acciones
5. **Clic en:** "Agregar Mercadería"
6. **Configura lo siguiente:**

🔹 **Nombre de compra** | Cómo viene del proveedor
🔹 **Unidad de Medida de Compra** | En qué unidad lo comprás
🔹 **Cantidad que Suma en Stock** | Cuántas unidades individuales trae

### **✅ Al final:**
7. **Clic en "Guardar"**

---

## 📊 **Flujo completo: De la compra a la venta**

```
🏪 1. Vas al proveedor
    ↓
📝 2. Creás la MERCADERÍA en "Stock de Mercadería"
    ↓
🛍️ 3. La convertís en MERCADERIA en "Maestro de Productos"
    ↓
📦 4. Registrás la COMPRA (entrada de stock)
    ↓
💰 5. Vendés de a unidades individuales
    ↓
📉 6. El stock baja automáticamente
```

---

## � **Gestión y Control de Stock**

### **🎯 ¿Para qué sirve?**
Acá vas a controlar, monitorear y administrar todo el inventario de tu negocio. Desde cargar el stock inicial hasta ver los movimientos diarios y controlar la merma.

---

### **📦 1. Stock Mercaderías**

**¿Qué es?**  
Es donde vas a registrar manualmente las cantidades reales que tenés de cada mercadería en tu negocio.

**¿Cuándo usarlo?**  
- **Primera vez:** Al comenzar a usar el sistema, cargás todo lo que tenés físicamente
- **Mensualmente:** Para reinicializar y ajustar diferencias

**Cómo funciona:**
1. Cargás manualmente cuánto tenés de cada mercadería (stock inicial)
2. A partir de ahí, el sistema actualiza automáticamente cuando:
   - ✅ Recepcionás una compra → **Suma al stock**
   - ✅ Vendés un producto → **Resta del stock**
3. Una vez por mes, reinicializás el stock para generar correctamente los movimientos

**Los pasos para cargar el stock inicial son los siguientes:**
1. **Entrá a:** "Stock de Mercaderías"
2. **Clic en:** "Stockear Mercadería"
3. **Completá la ficha:**

🔹 **Seleccioná la mercadería** | La que creaste en "Mercaderías"
🔹 **Cantidad inicial** | La cantidad que tenés físicamente
🔹 **Stock mínimo** | La cantidad mínima que querés tener
🔹 **Guardar**

💡 **Importante:** Si la mercadería está bien configurada, solo necesitás hacer esto manualmente al inicio. Después se actualiza solo.

---

### **🧩 2. Stock de Subproductos**

**¿Qué es?**  
Igual que Stock Mercaderías, pero para **subproductos**. Los subproductos son preparaciones o combinaciones de mercaderías que usás como base para tus productos finales.

**Ejemplo práctico:**
```
Mercaderías: Harina + Agua + Levadura + Sal
   ↓ (preparás)
Subproducto: "Masa de Pizza"
   ↓ (usás para hacer)
Producto Final: "Pizza Muzzarella"
```

**¿Cuándo usarlo?**  
Cuando tenés cosas que preparás en cantidad y después usás en varios productos (salsas, masas, mezclas, aderezos, etc.)

**Ventajas:**
- Control más preciso de lo que preparaste
- Sabés cuánta "masa lista" tenés sin tener que calcular cada vez
- Se descuenta automáticamente cuando vendés el producto final

💡 **Ejemplo de negocio:** En una pizzería, hacés 10kg de masa. Guardás eso como subproducto y cada pizza vendida descuenta la cantidad de masa usada.

---

### **📋 3. Movimientos**

**¿Qué es?**  
El historial completo de todo lo que se mueve en tu stock. Cada entrada, salida o modificación queda registrada acá.

**Qué muestra:**
- 📥 **Compras recepcionadas** - Cuando entra mercadería nueva
- 📤 **Ventas realizadas** - Cuando se vende y descuenta del stock
- 🔄 **Ajustes manuales** - Cuando corregís cantidades
- 🗑️ **Desperdicios** - Cuando registrás merma
- 📦 **Producciones** - Cuando convertís mercadería en subproductos

**Ejemplo:**
```
15/10 - 18:30 | Venta | Vino Malbec | -1 unidad
15/10 - 19:15 | Venta | Coca-Cola   | -1 unidad
16/10 - 10:00 | Compra| Vino Malbec | +12 unidades
```

💡 **Utilidad:** Te permite auditar todo lo que pasó con tu stock y detectar inconsistencias.

---

### **🗑️ 4. Desperdicios**

**¿Qué es?**  
El registro de la **merma** de tus productos: todo lo que se pierde, se vence, se rompe o no se puede vender.

**Ejemplos comunes de merma:**
- 🥬 Verduras que se pusieron feas
- 🍺 Botella que se rompió
- 🍞 Pan que quedó del día anterior
- 🥛 Leche vencida
- 🍕 Pizza que salió mal y no se pudo servir

**¿Por qué registrarlo?**
- Mantiene el stock real actualizado
- Sabés cuánto perdés por mes
- Identificás qué productos tienen más merma
- Tomás decisiones de compra más inteligentes

**Cómo usarlo:**
1. Entrá a "Desperdicios"
2. Registrá el producto y la cantidad que perdiste
3. Opcionalmente agregá un motivo (vencido, roto, quemado, etc.)
4. El stock se descuenta automáticamente

💡 **Consejo:** Registrá la merma todos los días al cerrar. Te va a sorprender cuánto se desperdicia.

---

### **🏢 5. Depósitos**

**¿Qué es?**  
Te permite crear y gestionar diferentes **ubicaciones físicas** donde guardás tu mercadería.

**Ejemplos de depósitos:**
- 🏪 **Depósito Principal** - Almacén general
- 🍺 **Barra** - Stock que está en la barra del bar
- 🍳 **Cocina** - Mercadería en uso en cocina
- 📦 **Depósito Secundario** - Almacén externo o sótano
- 🚚 **En Tránsito** - Mercadería que está llegando

**¿Para qué sirve?**
- **Organización:** Sabés dónde está cada cosa físicamente
- **Control:** Podés asignar responsables por depósito
- **Reportes:** Filtrás stock por ubicación
- **Transferencias:** Movés mercadería entre depósitos

💡 **Tip:** Si tenés un negocio chico, con un solo depósito alcanza. Si tenés varios locales o zonas grandes, te conviene usar varios.

---

### **💰 6. Stock Valorizado**

**¿Qué es?**  
Te muestra el **valor total aproximado** de todo tu stock basándose en los precios de compra.

**Qué información te da:**
- 💵 Valor total del inventario
- 📊 Valor por categoría de productos
- 🏢 Valor por depósito (si tenés varios)
- 📈 Variación del valor del stock en el tiempo

**¿Para qué sirve?**
- Saber cuánta plata tenés "invertida" en stock
- Decisiones financieras (¿compro más o tengo mucho stock?)
- Cálculo de activos del negocio
- Control de rentabilidad

**Ejemplo:**
```
Stock Valorizado Total: $450.000

Por depósito:
- Depósito Principal: $320.000
- Barra: $80.000
- Cocina: $50.000
```

💡 **Importante:** Es un valor **aproximado** basado en el último precio de compra registrado.

---

### **🔒 7. Stock Cerrados**

**¿Qué es?**  
El historial de **inventarios mensuales** donde se compara lo que deberías tener según el sistema vs lo que realmente tenés físicamente.

**Cómo funciona:**
1. Una vez por mes haces el **inventario físico** (contás todo)
2. Cargás las cantidades reales en el sistema
3. Hacés clic en **"Reinicializar Stock"**
4. El sistema cierra el período y genera un registro

**Qué te muestra el registro:**
- ✅ **Stock Teórico:** Lo que deberías tener según el sistema
- 📦 **Stock Real:** Lo que contaste físicamente
- ⚖️ **Diferencia:** Sobrante o faltante

**Ejemplo de registro:**
```
Período: Octubre 2024
Coca-Cola 500ml:
- Teórico: 48 unidades
- Real: 45 unidades
- Diferencia: -3 (FALTANTE)

Vino Malbec:
- Teórico: 12 unidades
- Real: 14 unidades
- Diferencia: +2 (SOBRANTE)
```

**¿Por qué hay diferencias?**
- 🗑️ Merma no registrada
- 🎁 Cortesías/regalos no cargados
- ❌ Errores de carga
- 🔍 Robos o pérdidas

💡 **Buena práctica:** Analizá los faltantes recurrentes. Si siempre falta lo mismo, puede haber un problema de proceso o control.

---

## 🚨 **¿Problemas comunes?**
- **"No puedo crear la mercadería"** → Verificá que no exista ya con ese nombre
- **"No aparece en productos"** → Fijate si completaste el paso 2
- **"Stock negativo"** → Revisá la "Cantidad que suma"
- **"No sé qué unidad usar"** → Usá la más simple: UNIDAD, GRAMO, LITRO
- **"Se mezcla el stock"** → Cada mercadería debe tener nombre único

