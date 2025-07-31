# 💳 Configuración de Tipos de Pago

> 🎯 **¿Para qué sirve esto?**  
> Vas a configurar cómo pueden pagar tus clientes: efectivo, tarjeta de crédito, débito, Mercado Pago, etc. Sin esto configurado, no vas a poder cobrar.

## 🔴 **RECORDATORIO - La "P" roja**

Acordate de buscar la **"P" roja** 🔴 en la parte superior para acceder a las configuraciones.

```
🏪 PaxaPOS      [ 🔴 P ]      👤 Usuario
```

---

## 📋 **Paso a paso - Configurar formas de pago**

### **Paso 1: Acceder a Tipos de Pago**
1. Hacé clic en la **"P" roja** 🔴 
2. En la ventana que se abre, buscá **"Tipos de Pago"**
3. Hacé clic en **"Tipos de Pago"**

### **Paso 2: Crear un nuevo tipo de pago**
4. Hacé clic en el botón **"Crear Tipo de Pago"**
5. Se va a abrir una ventana para completar datos

### **Paso 3: Completar la información**
Completá estos campos según el tipo de pago que estés agregando:

| Campo | Qué escribir | Ejemplo |
|-------|-------------|---------|
| **Nombre del Tipo de Pago** | Nombre claro del método | "Efectivo", "Visa Crédito", "MercadoPago" |
| **Foto/Imagen** | Una imagen del método (opcional) | Logo de Visa, ícono de efectivo |
| **Días para acreditarse** | Cuánto tarda en llegar la plata | Efectivo: 0 días, Tarjeta: 7 días |
| **Porcentaje de Comisión** | Cuánto te cobra el banco/procesador | Efectivo: 0%, Tarjeta: 2.5% |

### **Paso 4: Marcar las opciones correctas**
**MUY IMPORTANTE:** Marcá las casillas según para qué vas a usar este método:

| Opción | Cuándo marcarla | Ejemplo |
|--------|----------------|---------|
| ✅ **Para Cobros** | Si los clientes te van a pagar así | Efectivo, tarjetas, MercadoPago |
| ✅ **Para Pagos** | Si vos vas a pagar a proveedores así | Transferencia, efectivo |
| ✅ **Para Propina** | Si se puede dar propina con este método | Efectivo, tarjeta |

### **Paso 5: Guardar**
6. Verificá que todo esté bien
7. Hacé clic en **"Guardar"**
8. ¡Listo! Ya tenés un método de pago configurado

---

## 💡 **Métodos de pago más comunes para configurar**

### **📄 Para restaurantes típicos, configurá estos:**

| Método | Comisión típica | Días acreditación | Para Cobros | Para Pagos | Para Propina |
|--------|----------------|-------------------|-------------|------------|--------------|
| **Efectivo** | 0% | 0 días | ✅ | ✅ | ✅ |
| **Visa Débito** | 1.5% | 1 día | ✅ | ❌ | ✅ |
| **Visa Crédito** | 2.8% | 7 días | ✅ | ❌ | ✅ |
| **Mastercard Débito** | 1.5% | 1 día | ✅ | ❌ | ✅ |
| **Mastercard Crédito** | 2.8% | 7 días | ✅ | ❌ | ✅ |
| **MercadoPago** | 2.99% | 14 días | ✅ | ❌ | ❌ |
| **Transferencia** | 0% | 0 días | ✅ | ✅ | ❌ |

---

## ✅ **¿Ya configuraste todos tus métodos de pago?**

**Próximo paso importante:** [Agregar Personal →](./23-Agregar-Personal.md)

---

## 💡 **Consejos importantes**
- ✅ **Configurá SIEMPRE el efectivo primero** (es el más básico)
- ✅ **Verificá las comisiones con tu banco** (pueden cambiar)
- ✅ **No olvides marcar las casillas correctas** (Para Cobros, etc.)
- ✅ **Agregá métodos populares** como MercadoPago, Ualá, etc.

## 🚨 **¿Problemas comunes?**
- **"No me deja guardar"** → Verificá que hayas puesto un nombre
- **"No aparece en el cobro"** → Verificá que hayas marcado "Para Cobros"
- **"No sé qué comisión poner"** → Consultá con tu banco o procesador de pagos
