# 💰 Módulo de Arqueos

> 🎯 **¿Para qué sirve esto?**  
> Acá controlás el dinero de tu caja: cuánto abriste, cuánto vendiste, cuánto pagaste y cuánto tenés que tener al final del día. Es súper importante para que no te falte (o sobre) plata.

---

## 🔍 **¿Qué vas a ver en Arqueos?**

Cuando entres al módulo, vas a ver todos los **cierres de caja** organizados por día y hora:

### **📊 Información que muestra cada arqueo:**

| Dato | Qué significa | Ejemplo |
|------|---------------|---------|
| **Importe Final** | Con cuánto terminó la caja | $50.000 |
| **Saldo Arqueo Anterior** | Cuánto quedó del día anterior | $5.000 |
| **Saldo de Caja** | Cuánto hay ahora en caja | $48.000 |
| **Cobros** | Cuánto cobraste hoy | $80.000 |
| **Pagos** | Cuánto pagaste hoy | $15.000 |
| **Ingresos** | Dinero que entró | $85.000 |
| **Egresos** | Dinero que salió | $20.000 |

---

## 📅 **Arqueo Abierto (del día actual)**

### **👀 Lo que ves cuando está abierta la caja:**
- **💵 Dinero inicial:** Con cuánto empezaste el día
- **💰 Total cobrado:** Cuánto llevás vendido hasta ahora
- **⏰ Tiempo abierto:** Hace cuánto está abierta la caja

### **🔄 Cómo funciona:**
```
🌅 Abrir caja (ej: $5.000)
   ↓
💰 Ir cobrando durante el día
   ↓
📊 Ver totales en tiempo real
   ↓
🌙 Cerrar caja al final del día
```

---

## 📥 **Descargar arqueos en Excel**

### **📋 Para análisis y auditoría:**
Podés descargar un reporte completo en Excel con estos filtros:

| Filtro | Para qué sirve | Ejemplo |
|--------|----------------|---------|
| **Caja** | Si tenés varias cajas | Caja Principal, Caja Delivery |
| **Usuario** | Quién hizo el arqueo | Juan (cajero), María (encargada) |
| **Fecha Inicio** | Desde cuándo | 01/01/2024 |
| **Fecha Fin** | Hasta cuándo | 31/01/2024 |

### **💡 Cuándo usar esto:**
- ✅ **Análisis mensual** de ventas
- ✅ **Control de empleados** (quién vendió qué)
- ✅ **Declaración de impuestos**
- ✅ **Auditorías contables**

---

## 📂 **Secciones específicas del módulo**

### **🏷️ 1. Zetas**
- **Qué es:** Informes de cierre de turno/jornada
- **Para qué:** Control fiscal y contable
- **Cuándo revisar:** Al final de cada jornada

### **💳 2. Cobros**
- **Qué muestra:** Todos los cobros del día separados por tipo de pago
- **Ejemplo:**
  - Efectivo: $30.000
  - Visa Débito: $15.000  
  - MercadoPago: $8.000
  - **Total cobrado: $53.000**

### **💸 3. Pagos**
- **Qué muestra:** Todo lo que pagaste (proveedores, gastos)
- **Incluye:** Tipo de pago y tipo de factura
- **Ejemplo:**
  - Verdulería: $5.000 (Efectivo - Factura B)
  - Luz: $3.000 (Transferencia - Factura A)

### **🔄 4. Traspasos**  
- **Qué es:** Dinero que moviste entre cajas
- **Ejemplo:** Pasaste $10.000 de Caja Principal a Caja Delivery
- **Para qué:** Organizar dinero entre sucursales o cajas

### **🏪 5. Listado de Mesas**
- **Qué muestra:** Todas las mesas abiertas/cerradas del día
- **Incluye:** Estado de cada mesa y sus movimientos
- **Útil para:** Controlar que todas las mesas se hayan cobrado

---

## 🔢 **Cómo hacer un arqueo perfecto**

### **🌅 Al abrir (inicio del día):**
1. **Contá el efectivo** que hay en la caja
2. **Abrí el arqueo** en el sistema con ese monto
3. **Anotá el monto** en un papel como respaldo

### **🌙 Al cerrar (fin del día):**
1. **Contá el efectivo** real que hay en la caja
2. **Comparalo** con lo que dice el sistema
3. **¿Coincide?** ✅ Perfecto, cerrá el arqueo
4. **¿No coincide?** 🚨 Revisá dónde está la diferencia

---

## ⚠️ **¿Qué hacer si no cierra el arqueo?**

### **🔍 Pasos para encontrar la diferencia:**

1. **Revisá las ventas:** ¿Están todas cargadas?
2. **Revisá los pagos:** ¿Anotaste todos los gastos?
3. **Revisá las propinas:** ¿Se registraron bien?
4. **Revisá los descuentos:** ¿Aplicaste alguno sin registrar?
5. **Revisá cambios:** ¿Diste vuelto correcto?

### **💡 Diferencias comunes:**
- **Te sobra dinero:** Probablemente olvidaste anotar un gasto
- **Te falta dinero:** Revisá si diste mal el vuelto o se perdió plata
- **Error de cálculo:** Volvé a contar el efectivo

---

## 💡 **Consejos para arqueos perfectos**
- ✅ **Abrí y cerrá siempre** la caja en el sistema
- ✅ **Contá el dinero** físico todos los días
- ✅ **Anotá todos los gastos** al momento
- ✅ **Revisá diariamente** que coincida todo
- ✅ **Guardá los reportes** Excel para contabilidad

## 🚨 **¿Problemas comunes?**
- **"No puedo cerrar el arqueo"** → Verificá que no haya mesas abiertas
- **"No coincide el dinero"** → Seguí los pasos de revisión de arriba
- **"No aparecen todas las ventas"** → Verificá que se hayan cargado correctamente
- **"Error al descargar Excel"** → Probá con fechas más específicas
