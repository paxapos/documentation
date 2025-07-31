# 🖨️ Configuración de Impresoras

> 🎯 **¿Para qué sirve esto?**  
> Vas a configurar tus impresoras para que salgan los tickets de clientes, las comandas de cocina y las facturas. Sin esto configurado, no vas a poder imprimir nada.

## 🔴 **RECORDATORIO - La "P" roja**

Recordá buscar la **"P" roja** 🔴 para acceder a configuraciones avanzadas si las necesitás.

---

## 📋 **Paso a paso - Configurar impresoras**

### **Paso 1: Acceder al módulo Impresoras**
1. En el menú principal de PaxaPOS, buscá **"Impresoras"**
2. Hacé clic en **"Impresoras"**
3. Vas a ver una lista de todas las impresoras configuradas

### **Paso 2: Configurar las opciones básicas**

Vas a ver estas opciones importantes. Te explico qué hace cada una:

| Opción | Qué hace | Cuándo activarla |
|--------|----------|------------------|
| **Impresora Fiscal por Defecto** | Cuál imprime las facturas legales | Seleccioná tu impresora fiscal |
| **Imprimir Fiscal al Hacer Checkout** | Imprime automático al cerrar mesa | ✅ Activar si querés automático |
| **Remito o Fiscal al Cerrar Mesa** | Qué tipo de comprobante imprimir | Fiscal para facturas, Remito para pedidos |
| **Impresora de Remitos por Defecto** | Dónde salen los tickets simples | La impresora de caja |
| **Impresora de Cajón de Dinero** | Cuál abre el cajón | La que está conectada al cajón |
| **Impresora de Comandas/Pedidos** | Dónde salen los pedidos para cocina | La impresora de cocina |

---

## 🏪 **Configuración típica para un restaurante**

### **📍 Setup recomendado:**

| Impresora | Ubicación | Para qué | Configuración |
|-----------|-----------|----------|---------------|
| **Fiscal** | Caja/mostrador | Facturas legales | Impresora Fiscal por Defecto |
| **Tickets** | Caja/mostrador | Tickets simples | Impresora de Remitos |
| **Comandas** | Cocina | Pedidos para cocinar | Impresora de Comandas |
| **Cajón** | Caja | Abrir cajón de dinero | Impresora de Cajón |

---

## 🔧 **¿Qué es Fiscalberry? (IMPORTANTE)**

**Fiscalberry** es un programa que **conecta PaxaPOS con tu impresora fiscal**.

### **¿Para qué sirve?**
- 🔗 **Hace de traductor** entre PaxaPOS y la impresora fiscal
- ✅ **Garantiza que las facturas salgan bien**
- 🛡️ **Cumple con todas las normas de AFIP**
- 🔧 **Funciona con cualquier marca de impresora fiscal**

### **¿Cómo instalar Fiscalberry?**
1. **Descargá** Fiscalberry desde el link que te aparece en pantalla
2. **Instalalo** en la computadora donde está la impresora fiscal
3. **Seguí** las instrucciones paso a paso que aparecen
4. **Probá** que funcione imprimiendo una factura de prueba

> 🚨 **MUY IMPORTANTE:** Sin Fiscalberry instalado, no vas a poder imprimir facturas legales

---

## ✅ **¿Cómo saber si está todo bien configurado?**

### **🧪 Probá cada impresora:**

1. **Impresora de Tickets:**
   - Hacé una venta de prueba
   - Cerrá la mesa
   - ¿Salió el ticket? ✅

2. **Impresora de Comandas:**
   - Cargá un pedido de prueba
   - Envialo a cocina
   - ¿Salió en la impresora de cocina? ✅

3. **Impresora Fiscal:**
   - Hacé una factura de prueba
   - ¿Salió la factura legal? ✅

4. **Cajón de Dinero:**
   - Cobrá en efectivo
   - ¿Se abrió el cajón automáticamente? ✅

---

## 💡 **Consejos importantes**
- ✅ **Probá SIEMPRE** cada impresora después de configurarla
- ✅ **Tené papel suficiente** en todas las impresoras
- ✅ **Instalá Fiscalberry** antes de abrir el restaurante
- ✅ **Anotá** qué impresora está en cada lugar

## 🚨 **¿Problemas comunes?**
- **"No imprime nada"** → Verificá que la impresora esté encendida y conectada
- **"Error de Fiscalberry"** → Verificá que esté instalado y funcionando
- **"No se abre el cajón"** → Verificá la configuración de cajón de dinero
- **"Sale en la impresora equivocada"** → Revisá la configuración de cada tipo de impresión

> **Recomendaciones Adicionales:**
> * **Prueba de Impresión:** Una vez configuradas, realiza una prueba de impresión desde el sistema para asegurarte de que todas las impresoras funcionan correctamente.
> * **Múltiples Impresoras:** Si utilizas múltiples impresoras de comanda (ej., una para fríos, otra para calientes), asegúrate de configurar las reglas de ruteo de productos en el módulo de Menú o Cocina para que los ítems se impriman en la impresora correcta.
