# 🏪 Módulo de Salón

> 🎯 **¿Para qué sirve esto?**  
> Acá vas a manejar todas las mesas de tu restaurante: abrir mesas, tomar pedidos, cobrar y cerrar. Es donde pasa toda la acción de tu salón.

---

## 📋 **Paso a paso - Atender tu primera mesa**

### **Paso 1: Acceder al Salón**
1. En el menú principal de PaxaPOS, buscá **"Salón"**
2. Hacé clic en **"Salón"**
3. Vas a ver una lista con todos tus mozos

### **Paso 2: Crear una nueva mesa**
4. Hacé clic en el **nombre del mozo** que va a atender la mesa
5. Se va a abrir una ventana para crear la mesa
6. Completá estos datos:

| Campo | Qué escribir | Ejemplo |
|-------|-------------|---------|
| **Nombre de la Mesa** | Identificador claro | "Mesa 5", "Terraza A", "Barra 2" |
| **Cantidad de Cubiertos** | Cuántas personas | 4 personas |

7. Hacé clic en **"Guardar"**
8. ¡Listo! La mesa está abierta y asignada al mozo

---

## 🍽️ **¿Qué podés hacer con una mesa abierta?**

Una vez que tenés la mesa creada, aparecen estas opciones:

### **📋 1. Agregar Productos (Tomar pedido)**
- **Qué hace:** Abre el sistema de ventas para cargar el pedido
- **Cuándo usarlo:** Cuando el cliente quiere pedir comida/bebida
- **Cómo:** Hacé clic en **"Agregar Productos"**

### **💰 2. Cobrar la Mesa**
- **Qué hace:** Procesa el pago de todo lo consumido
- **Cuándo usarlo:** Cuando el cliente quiere pagar la cuenta
- **Cómo:** Hacé clic en **"Cobrar la Mesa"**

### **🧾 3. Imprimir Remito**
- **Qué hace:** Imprime la cuenta detallada para el cliente
- **Cuándo usarlo:** Cuando el cliente pide ver la cuenta
- **Cómo:** Hacé clic en **"Imprimir Remito"**

### **🚪 4. Cerrar la Mesa**
- **Qué hace:** Cierra la mesa y la deja libre para nuevos clientes
- **Cuándo usarlo:** Después de cobrar y que se fueron los clientes
- **Cómo:** Hacé clic en **"Cerrar la Mesa"**

### **🏷️ 5. Agregar Descuento**
- **Qué hace:** Aplica un descuento especial a la cuenta
- **Cuándo usarlo:** Promociones, clientes especiales, compensaciones
- **Cómo:** Hacé clic en **"Agregar Descuento"**

---

## 🔄 **Flujo típico de atención de una mesa**

### **📝 Proceso completo paso a paso:**

```
1. 👥 Llegan clientes
   ↓
2. 🏷️ Crear mesa nueva (con mozo asignado)
   ↓
3. 📋 Agregar productos (tomar pedido)
   ↓
4. 🍽️ Se sirve la comida
   ↓
5. 🧾 Imprimir remito (si lo piden)
   ↓
6. 💰 Cobrar la mesa
   ↓
7. 🚪 Cerrar la mesa
   ↓
8. ✅ Mesa libre para nuevos clientes
```

---

## 👨‍💼 **¿Cómo funciona la asignación de mozos?**

### **🎯 Sistema inteligente:**
- **Cada mesa se asigna a UN mozo específico**
- **Solo ese mozo puede ver y manejar esa mesa** (dependiendo de la configuración)
- **Podés cambiar la asignación si es necesario**
- **Los mozos ven solo sus mesas** (o todas, según cómo lo configuraste)

### **💡 Ventajas:**
- ✅ **Control individual:** Sabés quién atendió cada mesa
- ✅ **Responsabilidad:** Cada mozo se hace cargo de sus mesas
- ✅ **Comisiones:** Podés calcular comisiones por mozo
- ✅ **Organización:** Menos confusión en el salón

---

## 🎨 **Estados de las mesas**

Las mesas tienen diferentes colores según su estado:

| Color | Estado | Significado |
|-------|--------|-------------|
| **🟢 Verde** | Mesa libre | Disponible para nuevos clientes |
| **🟡 Amarillo** | Mesa ocupada | Tiene pedido pero no cobrado |
| **🔴 Rojo** | Mesa para cobrar | Lista para cobrar |
| **🔵 Azul** | Mesa cerrada | Proceso completado |

---

## 💡 **Consejos para manejar el salón eficientemente**
- ✅ **Asigná bien los mozos** a cada mesa desde el principio
- ✅ **Cerrá las mesas** apenas se van los clientes
- ✅ **Usá nombres claros** para las mesas (Mesa 1, Mesa 2, etc.)
- ✅ **Controlá los estados** (verde, amarillo, rojo) para organizarte
- ✅ **Imprimí remitos** antes de cobrar si el cliente lo pide

## 🚨 **¿Problemas comunes?**
- **"No veo mis mesas"** → Verificá que tengas el mozo correcto seleccionado
- **"No puedo cerrar la mesa"** → Primero tenés que cobrarla
- **"La mesa no cambia de color"** → Refrescá la pantalla (F5)
- **"Se perdió el pedido"** → Revisá si se asignó al mozo correcto
