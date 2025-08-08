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
1. **Entrá a:** "Productos"
2. **clic en:** "Mercaderias"
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

## 🛍️ **2. Convertir Mercadería en Producto Vendible**

### **🎯 ¿Para qué sirve?**
Para que lo que compraste aparezca en el menú y lo puedas vender a los clientes.

### **🚀 Paso a paso:**
1. **Entrá a:** "Maestro de Productos"
2. **Buscá:** El nombre de la mercadería que creaste
3. **Clic en:** Ícono de editar ✏️
4. **Editá la unidad de venta:**

🔹 **Nombre del Producto** | Cómo lo vas a vender  
🔹 **Unidad de Stock** | Unidad de venta individual

### **🔄 Relación automática:**
```
Comprás: 1 CAJA (12 unidades) 
   ↓
Stock suma: 12 Coca-Colas individuales
   ↓
Vendés: 1 Coca-Cola → Stock baja 1 unidad
```

### **✅ Al final:**
5. **Clic en "Guardar"**

---

## 📊 **Flujo completo: De la compra a la venta**

```
🏪 1. Vas al proveedor
    ↓
📝 2. Creás la MERCADERÍA en "Stock de Mercadería"
    ↓
🛍️ 3. La convertís en PRODUCTO en "Maestro de Productos"
    ↓
📦 4. Registrás la COMPRA (entrada de stock)
    ↓
💰 5. Vendés de a unidades individuales
    ↓
📉 6. El stock baja automáticamente
```

---

## 💡 **Ejemplos prácticos por tipo de negocio**

### **🍕 Pizzería:**

🔹 **Queso x5kg** | BARRA → 5000g (se vende por gramos)  
🔹 **Caja tomates x10kg** | CAJA → 10000g (gramos de tomate)  
🔹 **Paquete muzzarella** | PACK → 1 (paquete muzzarella)

### **🍺 Bar/Restó:**

🔹 **Caja Quilmes x24** | CAJA → 24 (Quilmes botella)  
🔹 **Botella Fernet** | UNIDAD → 1 (se vende por copa)  
🔹 **Pack servilletas x500** | PACK → 500 (servilletas)

### **🥪 Cafetería:**

🔹 **Café x1kg** | BOLSA → 1000g (gramos de café)  
🔹 **Leche x12 litros** | PACK → 12L (litros de leche)  
🔹 **Pan x50 unidades** | BOLSA → 50 (pan individual)

---

## ⚠️ **Errores comunes y cómo evitarlos**

### **🚨 Error 1: "No sé cuánto poner en 'Cantidad que suma'"**
**✅ Solución:** Preguntate: "Si compro UNA unidad de esta mercadería, ¿cuántas cosas individuales puedo vender?"

### **🚨 Error 2: "El stock no coincide con la realidad"**
**✅ Solución:** Verificá que la "Cantidad que suma" esté bien calculada desde el principio.

### **🚨 Error 3: "No encuentro el producto para vender"**
**✅ Solución:** Fijate que hayas hecho el paso 2 (convertir mercadería en producto).

### **🚨 Error 4: "Se vende una unidad pero baja más stock"**
**✅ Solución:** El producto debe tener unidad de stock "UNIDAD", no la misma que la mercadería.

---

## 🎯 **Consejos para un stock perfecto**

### **📋 Organización:**
- ✅ **Nombres claros:** "Caja Coca x12" es mejor que "Coca"
- ✅ **Unidades consistentes:** Siempre usá las mismas unidades
- ✅ **Verificá cálculos:** Contá físicamente la primera vez
- ✅ **Probá el flujo:** Comprar → Convertir → Vender

### **📊 Control:**
- ✅ **Inventario regular:** Contá físicamente cada tanto
- ✅ **Alertas de stock bajo:** Configurá avisos automáticos
- ✅ **Reportes:** Revisá qué se vende más y menos
- ✅ **Costos:** Registrá precios de compra para calcular ganancia

---

## 🚨 **¿Problemas comunes?**

| Problema | Solución |
|----------|----------|
| **"No puedo crear la mercadería"** | Verificá que no exista ya con ese nombre |
| **"No aparece en productos"** | Fijate si completaste el paso 2 |
| **"Stock negativo"** | Revisá la "Cantidad que suma" |
| **"No sé qué unidad usar"** | Usá la más simple: UNIDAD, GRAMO, LITRO |
| **"Se mezcla el stock"** | Cada mercadería debe tener nombre único |

### **📞 ¿Seguís con dudas?**
Probá con un ejemplo simple primero: comprá algo que vendas igual (ej: botella de agua). Una vez que entiendas el flujo, pasá a cosas más complejas.

