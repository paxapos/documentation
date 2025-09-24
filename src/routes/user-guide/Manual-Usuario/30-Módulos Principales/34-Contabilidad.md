# 📊 Módulo de Contabilidad
<div id="contabilidad"></div>

> 🎯 **¿Para qué sirve esto?**  
> Acá manejás todos los gastos de tu negocio: registrás las facturas de proveedores, controlás qué debés, pagás las cuentas, y todo queda ordenado para fin de mes y la contabilidad.

---

## ⚠️ **SÚPER IMPORTANTE: Configurá antes de empezar**

Antes de cargar tu primera factura, **TENÉS QUE CONFIGURAR** estos 3 elementos básicos:

```
🏗️ ORDEN DE CONFIGURACIÓN:
1️⃣ Impuestos (IVA, etc.)
   ↓
2️⃣ Clasificaciones (tipos de gastos)
   ↓
3️⃣ Proveedores (quién te vende)
   ↓
✅ Recién ahí podés cargar facturas
```

### ** ¿Dónde está la configuración?**

Clasificacion = Configuracion -> Parametros del negocio -> Clasificacion de gastos

Proveedores = Operaciones -> Compras -> Proveedores

---

## 🧾 **1. Configurar Impuestos**

### **🚀 Paso a paso:**
1. **Entrá a:**  "Módulo Impuestos"
2. **Clic en:** "Crear Tipo de Impuesto"
3. **Completá los datos:**

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| **Nombre de Impuesto** | Nombre claro | "IVA 21%" |
| **Porcentaje** | Número sin el % | 21 |
| **Código ARCA** | Código oficial | 0005 |
| **Tiene Neto** | ☑️ Si aplica sobre base neta | ✅ |
| **Tiene Impuesto** | ☑️ Si se calcula sobre impuesto | ❌ |

### **💡 Impuestos comunes que vas a necesitar:**
- **IVA 21%** (productos normales)
- **IVA 10.5%** (alimentos básicos)
- **IVA 27%** (servicios especiales)
- **Exento** (sin IVA)

### **🔄 Después de crear:**
4. **Clic en "Guardar"**
5. **Repetir** para cada tipo de impuesto que uses

---

## 📂 **2. Configurar Clasificaciones**

### **🎯 ¿Para qué sirve?**
Para ordenar tus gastos en categorías y después poder hacer reportes (ej: "¿cuánto gasté en mercadería este mes?")

### **🚀 Paso a paso:**
1. **Entrá a:** P roja → "Módulo de Listado de Clasificaciones"
2. **Creá estas categorías básicas:**

| Clasificación | Para qué gastos | Ejemplos |
|---------------|-----------------|----------|
| **Mercadería** | Productos para vender | Verduras, carnes, bebidas |
| **Mano de Obra** | Personal y sueldos | Sueldos, jornales, extras |
| **Servicios Públicos** | Luz, gas, agua | Edenor, Metrogas, AySA |
| **Gasto Operativo** | Gastos del día a día | Limpieza, bolsas, servilletas |
| **Alquileres** | Local, depósito | Alquiler local, cochera |

### **💡 Tip:** Agregá las que necesites para tu tipo de negocio

---

## 🏪 **3. Configurar Proveedores**

### **🎯 ¿Para qué sirve?**
Para registrar quién te vende qué, y llevar control de lo que debés a cada uno.

### **🚀 Paso a paso:**
1. **Entrá a:** Operaciones -> Compras -> Proveedores
2. **Clic en:** "Crear Proveedores"
3. **Completá la ficha:**

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| **Nombre** | Nombre o razón social | "Verdulería Don José" |
| **Tipo de Impuesto** | Cómo factura | "IVA Responsable Inscripto" |
| **Teléfono** | Número de contacto | 011-4567-8910 |
| **Documento** | Tipo de documento | CUIT |
| **Número de Documento** | Número del documento | 20-12345678-9 |

### **🔄 Después de crear:**
4. **Clic en "Guardar"**
5. **Repetir** para cada proveedor que tengas

---

## 💰 **Cargar Facturas de Gasto**

### **✅ Una vez que tengas todo configurado, podés empezar a cargar gastos:**

### **🚀 Paso a paso:**
1. **Desde Administración** → Pestaña "Resumen de Deuda"
2. **Clic en:** "Nuevo Gasto"
3. **Completá los datos de la factura:**

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| **Proveedor** | Elegir de la lista | Verdulería Don José |
| **Tipo de Factura** | Tipo de comprobante | Factura B |
| **Número de Factura** | Número del comprobante | 0001-00001234 |
| **Fecha** | Fecha de la factura | 15/01/2024 |
| **Monto Total** | Total a pagar | $25.000 |
| **Clasificación** | Tipo de gasto | Mercadería |
| **Observación** | Nota opcional | "Compra verduras enero" |

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

## 💡 **Consejos para un uso perfecto**

### **📋 Organización:**
- ✅ **Cargá las facturas** apenas las recibís
- ✅ **Revisá el "Resumen de Deuda"** todas las semanas
- ✅ **Pagá a tiempo** para evitar recargos
- ✅ **Usá buenas clasificaciones** para hacer reportes después

### **📊 Para contabilidad:**
- ✅ **Exportá reportes** mensualmente
- ✅ **Guardá los comprobantes** físicos
- ✅ **Verificá que coincidan** los totales
- ✅ **Consultá con tu contador** sobre clasificaciones

---

## 🚨 **¿Problemas comunes?**

| Problema | Solución |
|----------|----------|
| **"No puedo cargar la factura"** | Verificá que tengas creado el proveedor |
| **"No aparece el impuesto"** | Creá el tipo de impuesto primero |
| **"No sé qué clasificación usar"** | Consultá con tu contador |
| **"Se cargó mal un gasto"** | Podés editarlo desde el listado |
| **"No coinciden los totales"** | Revisá que todos los impuestos estén bien configurados |

### **📞 ¿Seguís con dudas?**
Consultá con tu contador o administrador del sistema.