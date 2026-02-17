# Módulo de Contabilidad

<div id="contabilidad"></div>

> 🎯 **¿Para qué sirve esto?**  
> Acá manejás todos los gastos de tu negocio: registrás las facturas de proveedores, controlás qué debés, pagás las cuentas, y todo queda ordenado para fin de mes y la contabilidad.

---

## 🏪 **1. Configurar Proveedores**

### **🎯 ¿Para qué sirve?**

Para registrar quién te vende qué, y llevar control de lo que debés a cada uno.

### **🚀 Paso a paso:**

1. **Entrá a:** Compras -> Proveedores
2. **Clic en:** "Nuevo Proveedor"
3. **Completá la ficha:**

| Campo                   | Qué poner             | Ejemplo                     |
| ----------------------- | --------------------- | --------------------------- |
| **Nombre**              | Nombre o razón social | "Verdulería Don José"       |
| **Tipo de Impuesto**    | Cómo factura          | "IVA Responsable Inscripto" |
| **Teléfono**            | Número de contacto    | 011-4567-8910               |
| **Documento**           | Tipo de documento     | CUIT                        |
| **Número de Documento** | Número del documento  | 20-12345678-9               |

### **🔄 Después de crear:**

4. **Clic en "Guardar"**
5. **Repetir** para cada proveedor que tengas

---

## 💰 **Cargar Facturas de Gasto**

<div id="facturas-gasto"></div>

### **✅ Una vez que tengas todo configurado, podés empezar a cargar gastos:**

### **🚀 Paso a paso:**

1. **Desde Contabilidad**
2. **Clic en:** "Nuevo Gasto"
3. **Completá los datos de la factura:**

| Campo                 | Qué poner              | Ejemplo                 |
| --------------------- | ---------------------- | ----------------------- |
| **Proveedor**         | Elegir de la lista     | Verdulería Don José     |
| **Tipo de Factura**   | Tipo de comprobante    | Factura B               |
| **Número de Factura** | Número del comprobante | 0001-00001234           |
| **Fecha**             | Fecha de la factura    | 15/01/2024              |
| **Monto Total**       | Total a pagar          | $25.000                 |
| **Clasificación**     | Tipo de gasto          | Mercadería              |
| **Observación**       | Nota opcional          | "Compra verduras enero" |

### **🎯 Al final tenés 2 opciones:**

#### **💳 Opción 1: "Guardar como Pagada"**

- **Cuándo usar:** Ya pagaste la factura
- **Qué pasa:** Se registra el gasto Y el pago automáticamente
- **Resultado:** Queda todo cerrado ✅

#### **📋 Opción 2: "Continuar sin Pagar"**

- **Cuándo usar:** Todavía no pagaste (quedás debiendo)
- **Qué pasa:** Se registra solo el gasto, queda pendiente de pago
- **Resultado:** Aparece en "Resumen de Deuda" para pagar después

---

## 📈 **¿Cómo funciona el flujo completo?**

```
📝 Llega factura del proveedor
   ↓
💾 La cargás en el sistema
   ↓
🤔 ¿Ya la pagaste?
   ↓
✅ SÍ → "Guardar como Pagada" → Listo ✅
❌ NO → "Continuar sin Pagar" → Queda en deudas
   ↓
💰 Después la pagás desde "Resumen de Deuda"
   ↓
✅ Todo cerrado y ordenado
```

---

## 🚨 **¿Problemas comunes?**

- **"No puedo cargar la factura"** → Verificá que tengas creado el proveedor
- **"No aparece el impuesto"** → Creá el tipo de impuesto primero
- **"No sé qué clasificación usar"** → Consultá con tu contador
- **"Se cargó mal un gasto"** → Podés editarlo desde el listado
- **"No coinciden los totales"** → Revisá que todos los impuestos estén bien configurados

### **📞 ¿Seguís con dudas?**

Consultá con tu contador o administrador del sistema.
