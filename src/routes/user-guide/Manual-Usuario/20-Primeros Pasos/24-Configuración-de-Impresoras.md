# 🖨️ Configuración de Impresoras
<div id="configurar-impresoras"></div>

> 🎯 **Tu objetivo:** Configurar todas las impresoras para tickets, comandas y facturas fiscales en menos de 10 minutos.

---

## 🏭 **Configuración Detallada**

Si querés ajustar configuraciones específicas:

### **🎛️ Panel de Control de Impresoras**

| 🎯 **Función** | � **Descripción** | 🔧 **Configuración** |
|----------------|-------------------|---------------------|
| **Impresora Fiscal por defecto** | Facturas legales para AFIP | Seleccionar impresora fiscal |
| **Imprimir por fiscal al hacer checkout si no se imprimio antes** | Imprime factura al cerrar mesa | ✅ Recomendado ON |
| **Al cerrar, o facturar mesa, sacar un remito o imprimir directo en la fiscal** | Fiscal o Remito al cerrar | Fiscal = Legal / Remito = Simple |
| **Impresora de Remitos por Defecto** | Comprobantes de caja | Impresora de mostrador |
| **Seleccione impresora para abrir el cajón de dinero** | Abre cajón automático | Impresora conectada al cajón |

---

## 🔧 **¿Qué es Fiscalberry? (IMPORTANTE)**
<div id="que-es-fiscalberry"></div>

> 🚨 **CRÍTICO:** Sin Fiscalberry NO podrás emitir facturas legales

**Fiscalberry** = El puente entre {{BRAND_NAME}} y tu impresora fiscal

### **⚡ Instalación en 3 pasos:**

**1️⃣ DESCARGAR**  
[⬇️ **Descargar Fiscalberry**](https://github.com/paxapos/fiscalberry/releases/latest/download/fiscalberry-win.exe)

**2️⃣ INSTALAR**  
Ejecutar como administrador en la PC del comercio.

**3️⃣ CONFIGURAR**  
Con la pestaña de fiscalberry abierta en la PC, dirigite al modulo de impresoras dentro de {{BRAND_NAME}} y refresca la pagina con F5 o ctrl + R, observaras que aparece una nueva paxaprinter en el lateral izquierdo de la pantalla (un punto verde con el numero de paxaprinter) selecciona dicha paxaprinter y configura el panel de control mencionado en la tabla anterior.

**4️⃣ PROBAR**
Con fiscalberry abierto y la impresora conectada, intenta imprimir una factura fiscal desde {{BRAND_NAME}}.


### **🔍 ¿Qué hace exactamente?**
- 🔄 **Traduce** comandos de {{BRAND_NAME}} → Impresora fiscal
- ✅ **Garantiza** cumplimiento AFIP/ARCA  
- 🔧 **Compatible** con todas las marcas

---

## ✅ **Test de Funcionamiento**

### **🧪 Checklist de Pruebas**

**📋 PASO A PASO:**

1. **TEST TICKETS** 🎫
   ```
   Crear venta → Cerrar mesa → ¿Imprimió ticket? ✅
   ```

2. **TEST COMANDAS** 🍽️
   ```
   Cargar pedido → Enviar cocina → ¿Salió comanda? ✅
   ```

3. **TEST FISCAL** 📄
   ```
   Crear factura → Imprimir → ¿Factura legal válida? ✅
   ```

4. **TEST CAJÓN** 💰
   ```
   Cobrar efectivo → ¿Se abrió automáticamente? ✅
   ```

---

## 🚨 **¿Problemas comunes?**
- **"No imprime nada"** → Verificar encendido + conexión
- **"Error Fiscalberry"** → Reinstalar como administrador  
- **"Cajón no abre"** → Revisar conexión impresora-cajón
- **"Imprime en lugar equivocado"** → Verificar asignación de impresoras

### **📞 ¿Necesitás ayuda?**
**WhatsApp directo:** [+1 (786) 755-3113](https://wa.me/17867553113)

---
