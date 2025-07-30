# 🤖 ChatBot PaxaPOS - Documentación

## 📋 **Descripción**
ChatBot inteligente integrado que ayuda a los usuarios a encontrar información específica del manual de PaxaPOS y los redirige directamente a las secciones correspondientes.

## ✨ **Características**
- 💬 **Respuestas inteligentes** basadas en el manual
- 🔗 **Redirección automática** a secciones específicas 
- 📱 **Interfaz flotante** no intrusiva
- 🎯 **Reconocimiento de intenciones** avanzado
- 📖 **Acceso al manual completo** como contexto

## 🚀 **Ejemplos de Uso**

### **Gestión de Personal**
```
Usuario: "¿Cómo cargo un mozo?"
Bot: "Para cargar un mozo tenés que:
1. 🔴 Ir a la página roja (panel principal)
2. 🔘 Hacer clic en el botón "Mozo"
3. ➕ Seleccionar "Agregar Personal"
[Ir a Agregar Personal] ← Link directo
```

### **Configuración de Impresoras**
```
Usuario: "¿Cómo configuro una impresora?"
Bot: "Para configurar una impresora:
1. 🖨️ Ve al menú "Configuración"
2. 🔧 Selecciona "Configuración de Impresoras"
[Ir a Configuración de Impresoras] ← Link directo
```

### **Arqueos de Caja**
```
Usuario: "¿Cómo hago un arqueo?"
Bot: "Para realizar un arqueo de caja:
1. 💰 Ve al módulo "Arqueos"
2. 📊 Selecciona "Nuevo Arqueo"
[Ir a Arqueos] ← Link directo
```

## 🎯 **Palabras Clave Reconocidas**

### **Personal y Empleados**
- `mozo`, `empleado`, `personal`, `crear`, `cargar`, `agregar`
- **Redirige a:** Agregar Personal

### **Impresoras**
- `impresora`, `imprimir`, `configurar`, `instalar`
- **Redirige a:** Configuración de Impresoras

### **Menú y Productos**
- `menú`, `menu`, `producto`, `crear`, `agregar`
- **Redirige a:** Gestión de Menú

### **Tipos de Pago**
- `pago`, `efectivo`, `tarjeta`
- **Redirige a:** Tipos de Pago

### **Salón y Mesas**
- `mesa`, `salón`, `salon`
- **Redirige a:** Gestión de Salón

### **Arqueos**
- `arqueo`, `cierre`, `caja`
- **Redirige a:** Arqueos

### **Contabilidad**
- `contabilidad`, `reporte`, `ventas`
- **Redirige a:** Contabilidad

### **Sistema de Cocina**
- `cocina`, `kds`, `kitchen`
- **Redirige a:** Kitchen Display System

### **Stock e Inventario**
- `stock`, `inventario`, `compras`
- **Redirige a:** Compras y Stock

### **Facturación Fiscal**
- `afip`, `factura`, `fiscal`
- **Redirige a:** AFIP y Facturación

### **Reportes y Análisis**
- `estadística`, `estadisticas`, `análisis`
- **Redirige a:** Estadísticas

### **Propinas**
- `propina`, `tip`
- **Redirige a:** Configuración de Propinas

### **Usuarios del Sistema**
- `usuario` + `crear`/`agregar`
- **Redirige a:** Crear Usuarios

### **Inicio de Sesión**
- `login`, `iniciar`, `sesión`, `ingresar`
- **Redirige a:** Iniciar Sesión

## 🔧 **Características Técnicas**

### **Integración**
- ✅ Componente Svelte standalone
- ✅ Carga automática del manual (`/ai/user.txt`)
- ✅ Botón flotante no intrusivo
- ✅ Responsive design

### **Funcionalidades**
- 🔍 **Búsqueda inteligente** en el manual
- 🎯 **Detección de intenciones** por keywords
- 🔗 **Links automáticos** a secciones específicas
- 📱 **Interface tipo chat** familiar
- ⌨️ **Soporte de Enter** para envío rápido

### **Rendimiento**
- 📦 **Carga diferida** del manual
- 🚀 **Respuestas instantáneas** 
- 💾 **Cache local** del contexto
- 🔄 **Scroll automático** de mensajes

## 📍 **Ubicación en el Proyecto**
```
src/lib/components/ChatBotIntelligent.svelte  ← Componente principal (inteligente)
src/routes/+layout.svelte                     ← Integración global
```

## 🔄 **Mantenimiento**
- El ChatBot se actualiza automáticamente cuando se modifica el manual
- Los archivos de IA (`/ai/user.json`) se regeneran en cada build
- Las respuestas están basadas en el contenido actual de la documentación

## 🎨 **Personalización**
Para agregar nuevas respuestas, modifica la función `generateKeywordResponse()` en el archivo `ChatBotIntelligent.svelte`:

```javascript
// Ejemplo: Agregar nueva funcionalidad
if (questionLower.includes('nueva_palabra')) {
    return `Instrucciones para nueva funcionalidad:
    1. Paso 1
    2. Paso 2
    ${createRedirectButton('Ir a Nueva Sección', '/user-guide?module=XX-Nueva-Seccion')}`;
}
```

## 🚀 **Resultado**
Con este ChatBot, los usuarios pueden:
- ✅ Obtener ayuda instantánea 24/7
- ✅ Encontrar información específica rápidamente  
- ✅ Ser redirigidos directamente a la documentación
- ✅ Reducir tiempo de búsqueda en el manual
- ✅ Mejorar la experiencia de usuario general
