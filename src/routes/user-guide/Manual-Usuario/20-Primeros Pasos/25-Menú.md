# 🍽️ Configuración del Menú
<div id="configurar-menu"></div>

> 🎯 **¿Para qué sirve esto?**  
> Vas a configurar todo lo que vendés: comidas, bebidas, postres, etc. Sin el menú configurado, no vas a poder tomar pedidos ni vender nada.

## 🔴 **MUY IMPORTANTE - La "P" roja**

```
🏪 Software    [ 🔴 P ]    
                     ↓
                "Productos"
```

---

## 📚 **Conceptos básicos que necesitás conocer**

### 🍽️ **1. Menú**
**¿Qué es?** La carta que ven tus clientes, con todos los platos, bebidas y precios que ofreces.

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
<div id="configurar-menu"></div>
---

### **� ETAPA 1** → **Acceso al sistema de productos**

> **🖥️ Ubicación:** Panel principal

### **📋 Cómo crear variantes:**
<div id="variantes"></div>

**Paso 1: Crear la variante**
1. Dentro de Productos, buscá **"Variantes"**
2. Hacé clic en **"+ Nueva Variante"**
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

### **� ETAPA 2** → **Configuración de categorías**
<div id="categorias"></div>

💻 INSTRUCCIONES:
┌────────────────────────────────────────┐
│ 1️⃣ Navegá a "Categorías"              │
│ 2️⃣ Clic en "+ Nueva Categoría"        │
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
<div id="menu-base"></div>

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
<div id="agregar-productos"></div>


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

🔹 **🖨️ Impresora** | `OBLIGATORIO` → Dónde se imprime (ej: Cocina)

🔹 **🎫 Nombre en Ticket** | `OPCIONAL` → Nombre corto (ej: "Mila Napo")

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
---

## 📂 **Funciones adicionales**

### **🗂️ Productos Duplicados**
Esta sección te permite visualizar y gestionar cualquier producto que {{BRAND_NAME}} identifique como duplicado, ayudándote a mantener la base de datos de tu menú limpia y organizada.


## 🚨 **¿Problemas comunes?**
- **"No encuentro Productos"** → Buscá la "P" roja primero
- **"No me deja guardar"** → Verificá que tengas nombre, categoría y precio
- **"No aparece en la venta"** → Verificá que esté en el menú correcto
- **"Sale en la impresora equivocada"** → Configurá la impresora predeterminada
- **"No sale impreso en la comanda"** → Asignale una impresora

