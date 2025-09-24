# 🍽️ Configuración del Menú
<div id="configurar-menu"></div>

> 🎯 **¿Para qué sirve esto?**  
> Vas a configurar todo lo que vendés: comidas, bebidas, postres, etc. Sin el menú configurado, no vas a poder tomar pedidos ni vender nada.

---


## 📚 **Conceptos básicos que necesitás conocer**

### 🍽️ **1. Menú**
**¿Qué es?** La carta que ven tus clientes, con todos los platos, bebidas y precios que ofreces.

**Ejemplos:**

🔹 **Menú Principal** | Carta completa del restaurante  
🔹 **Menú de Almuerzos** | Solo comidas del mediodía  
🔹 **Menú Ejecutivo** | Opciones rápidas de oficina  
🔹 **Menú Delivery** | Productos solo para entrega

> 💡 **¿Sabías que...?**  
> El nombre "Menú" es configurable. Podés cambiarlo a "Lista de Precios", "Carta", "Tarifario" o como prefieras. Un hotel lo llamó "Tarifario" porque vende comidas, revistas y paquetes turísticos.

### 🥘 **2. Producto**
**¿Qué es?** Cualquier cosa que vendes, usas o compras en tu negocio. Se divide en 4 tipos:

#### **📋 Maestro de Productos**
La lista completa de **TODOS** los productos de tu negocio.
- Incluye productos en venta, subproductos y mercaderías
- Es como el "diccionario" de todo lo que existe

#### **🛒 Productos en Venta**
Los que aparecen en tus menús y los clientes pueden pedir.
- **Ejemplos:** Pizza Margarita, Coca-Cola, Helado de Vainilla

#### **🧩 Subproductos**
Productos que **NO se venden ni se compran**. Se usan para preparar otros productos.
- **Ejemplos:** Salsa Fileto (se usa para hacer Pizza Napolitana)

#### **📦 Mercadería**
Todo lo que **COMPRAS** a proveedores.
- **Ejemplos:** Tomates, Queso Mozzarella, Botella de Coca-Cola

### ⚙️ **3. Variante**
**¿Qué es?** Un grupo de opciones que modifican un producto.
- **Ejemplo:** Variante "Tipo de Salsa" para un plato de pasta

### 🎛️ **4. Opciones de Variantes**
**¿Qué es?** Las elecciones específicas dentro de una variante. Cada opción está vinculada a un producto del Maestro.

**Ejemplos:**

🔹 **Opción "Salsa Fileto"** | Vinculada al subproducto "Salsa Fileto"  
🔹 **Opción "Coca-Cola"** | Vinculada al producto en venta "Coca-Cola"

> ⚠️ **¡Importante!** Pueden ser subproductos (como salsas) o productos en venta (como bebidas)

### 🏷️ **5. Categorías**
**¿Qué es?** Secciones para organizar los productos en tus menús. Pueden tener subsecciones (como un árbol).

**Ejemplo de estructura:**
```
Menú Principal  
├── **Entradas**  
├── **Pastas**  
│   ├── Tallarines
│   └── Ravioles
└── **Bebidas**  
    ├── **Con Alcohol** 
    │   └── Cerveza 
    └── **Sin Alcohol**  
        ├── Coca Cola
        └── Sprite
```

### 👨‍🍳 **6. Recetas**
**¿Qué es?** La "fórmula" para preparar un producto o subproducto. Detalla qué ingredientes se usan y en qué cantidad.

**¿Dónde se usa?**

🔹 **En Productos en Venta** | Receta de "Pizza Margarita" (masa + salsa + queso)  
🔹 **En Subproductos** | Receta de "Salsa Fileto" (tomates + cebolla + hierbas)

### 🥕 **7. Ingredientes**
**¿Qué es?** Los productos que se usan en una receta. Pueden ser:

🔹 **Mercaderías** | Harina, leche, aceite  
🔹 **Subproductos** | "Salsa Fileto" usada para hacer "Salsa Bolognesa"

---

## 🎯 **Paso a paso - Configurar tu primer menú**

---

### **� ETAPA 1** → **Acceso al sistema de productos**

## 📋 **Paso a paso - Configurar productos en venta**

### **Paso 1: Acceder a menu**
1. Hacé clic en **Productos**
2. En la ventana que se abre, buscá **"Catalogo de ventas"**
3. Hacé clic en **"Menu"**

### **Paso 2: Crear un nuevo menu**
4. Hacé clic en el botón **"Crear Menu"**
5. Se va a abrir una ventana para completar datos

--- 

### **📋 Cómo crear variantes:**
<div id="variantes"></div>

**Paso 1: Crear la variante**
1. Dentro de Catalogo de ventas, buscá **"Variantes"**
2. Hacé clic en **"Crear Variante"**
3. Nombre: "Acompañamiento"
4. Agregá las opciones:
   - Papas fritas - $0
   - Puré de papa - $100
   - Ensalada mixta - $150

**Paso 2: Asignar variante al producto**
1. Editá tu producto (ej: Milanesa)
2. Buscá **"Asignar Variante"**
3. Seleccioná "Acompañamiento"
4. Guardá

### **Ejemplos:**
1. 
- **Producto:** Bife de chorizo
- **Nombre Variante:** Punto de la carne
- **Opciones Variante:** Cocido / A Punto / Jugoso

2. 
- **Producto:** Pastas
- **Nombre Variante:** Salsas
- **Opciones Variante:** Blanca $0 / Fileto $ +500 / Mixta $ +200 / Bolognesa $1500

3.
- **Producto:** Ensaladas
- **Nombre Variante:** Tipos Ensaladas
- **Opciones Variante:** Mixta / Lechuga y Tomate / Zanahoria y Huevo

---

### **� ETAPA 2** → **Configuración de categorías**

> **🎨 Propósito:** Organizar tu menú por secciones

```
💻 INSTRUCCIONES:
┌────────────────────────────────────────┐
│ 1️⃣ Navegá a "Categorías"              │
│ 2️⃣ Clic en "Crear Categoría"          │
│ 3️⃣ Escribí nombre: Platos Principales │
│ 4️⃣ Presioná "Guardar"                 │
└────────────────────────────────────────┘
```

**🗂️ Categorías recomendadas para empezar:**

🔹 **🍽️ Entradas** | Platos para empezar → Empanadas, provoleta, tabla de fiambres

🔹 **🥘 Platos Principales** | Comida principal → Milanesas, pastas, carnes a la parrilla  

🔹 **🍺 Bebidas con Alcohol** | Cervezas, vinos, tragos → Vino tinto, cerveza artesanal, fernet

🔹 **🥤 Bebidas sin Alcohol** | Gaseosas, jugos, agua → Agua mineral, jugos naturales, gaseosas

🔹 **🧁 Postres** | Dulces y postres → Flan casero, helados, tiramisu

---

### **� ETAPA 3** → **Creación del menú base**

> **🎯 Meta:** Crear tu primera carta digital

```
💻 INSTRUCCIONES:
┌────────────────────────────────────────────┐
│ 1️⃣ Presioná "+ Crear Nuevo"               │
│ 2️⃣ Nombre sugerido: "Menú Principal"      │
│ 3️⃣ Confirmá con "Guardar"                 │
└────────────────────────────────────────────┘
```

**💡 Ideas de nombres para menús:**
- **"Menú Principal"** → Carta completa
- **"Menú Ejecutivo"** → Opciones rápidas  
- **"Carta de Bebidas"** → Solo líquidos
- **"Menú Delivery"** → Para envío

---

### **�️ ETAPA 4** → **Agregando productos**

> **⭐ El momento clave:** Cargar tu primer producto

```
� INSTRUCCIONES:
┌─────────────────────────────────────────┐
│ 1️⃣ Dentro del menú → "Nuevo Producto"  │
│ 2️⃣ Completá todos los campos requeridos│
└─────────────────────────────────────────┘
```

**📝 Formulario de producto - Lista de verificación:**

🔹 **�📛 Nombre** | `OBLIGATORIO` → Nombre visible al cliente (ej: "Milanesa Napolitana")

🔹 **�🗂️ Categoría** | `OBLIGATORIO` → Clasificación del producto (ej: "Platos Principales") 

🔹 **�💰 Precio** | `OBLIGATORIO` → Costo para el cliente (ej: $2500)

🔹 **🪙 Moneda Local** | `OBLIGATORIO` → Peso argentino

🔹 **🧾 Impuestos** | `OBLIGATORIO` → IVA que corresponde (ej: 21%)

🔹 **🖨️ Impresora** | `OPCIONAL` → Dónde se imprime (ej: Cocina)

🔹 **🎫 Nombre en Ticket** | `OPCIONAL` → Nombre corto (ej: "Mila Napo")

🔹 **Variante** | `OPCIONAL` → Asignarle una variante (ej: "Guarnición")


---

### **� ETAPA 5** → **Guardado y verificación**

> **✅ Último paso:** Asegurar que todo esté correcto

```
� INSTRUCCIONES:
┌────────────────────────────────────────┐
│ 1️⃣ Revisá todos los datos ingresados   │
│ 2️⃣ Hacé clic en "Guardar"             │
│ 3️⃣ ¡Confirmación exitosa! 🎉          │
└────────────────────────────────────────┘
```

**🎊 ¡FELICITACIONES! Ya tenés tu primer producto configurado**

---

## 📊 **Sistema de Recetas y Costos**

> **💡 Herramienta avanzada:** Control de rentabilidad

### **🧮 Ejemplo práctico:**

```
📋 PRODUCTO: Pizza Muzzarella
┌─────────────────────────────────┐
│ Ingrediente    │ Costo Individual│
├───────────────┼─────────────────┤
│ 🍞 Masa        │ $50             │
│ 🍅 Salsa       │ $30             │
│ 🧀 Muzzarella  │ $200            │
│ 🔥 Gas/Energía │ $10             │
├───────────────┼─────────────────┤
│ TOTAL COSTO    │ $290            │
│ PRECIO VENTA   │ $800            │
│ 💰 GANANCIA    │ $510 (64%)     │
└─────────────────────────────────┘
```

---

## 💡 **Consejos para un menú perfecto**
- ✅ **Empezá con lo básico** (5-10 productos más vendidos)
- ✅ **Usá nombres claros** (evitá nombres rebuscados)
- ✅ **Organizá por categorías** (facilita encontrar productos)
- ✅ **Configurá bien las impresoras** (cocina, bar, etc.)
- ✅ **Probá vender** cada producto después de cargarlo

## 🚨 **¿Problemas comunes?**
- **"No me deja guardar"** → Verificá que tengas nombre, categoría y precio
- **"No aparece en la venta"** → Verificá que esté en el menú correcto
- **"Sale en la impresora equivocada"** → Configurá la impresora predeterminada
- **"No sale impreso en la comanda"** → Asignale una impresora

