# 🔐 Configuración de Permisos por Rol

<div id="permisos-por-rol"></div>

> 🎯 **¿Para qué sirve esto?**  
> Vas a configurar qué puede hacer cada tipo de usuario dentro del sistema. Podés decidir si un mozo puede ver reportes, si un cajero puede eliminar productos, etc.

> [!CAUTION]
> **⚠️ NO es recomendable modificar este apartado si no entendés del tema**  
> Si modificás permisos incorrectamente, podés bloquear funciones importantes o dar acceso a información sensible a personas no autorizadas.

---

## ⚠️ **MUY IMPORTANTE - Antes de empezar**

> [!WARNING]
> **Si vas a modificar permisos, tenés que configurar TODOS los roles**  
> No podés modificar solo un rol. Si cambiás los permisos del Encargado, también tenés que revisar y configurar los permisos del Dueño, Mozo, Cajero, Adicionista, etc.

**¿Por qué?** Porque el sistema necesita tener todos los roles configurados correctamente para funcionar bien. Si modificás uno solo, podés generar inconsistencias.

---

## 📋 **Paso a paso - Configurar permisos de un rol**

<div id="configurar-permisos-rol"></div>

### **Paso 1: Acceder a Roles y Permisos**

1. Hacé clic en la **Configuración** 🔴
2. Click en **Permisos por rol**

### **Paso 2: Seleccionar el rol a configurar**

1. Vas a ver una lista de todos los roles disponibles:
   -  **Dueño**
   -  **Encargado**
   -  **Cajero**
   -  **Mozo**
   -  **Adicionista**
   -  **Cocinero**
   -  **Auditor**
2. Hacé clic en el rol que querés configurar

### **Paso 3: Entender los módulos de permisos**

Los permisos están organizados en **6 módulos principales**:

**📊 Módulos disponibles:**

🔹 **Finanzas** | Control de dinero, caja, pagos  
🔹 **Operaciones** | Gestión diaria del negocio  
🔹 **Personal** | Empleados, turnos, usuarios  
🔹 **Reportes** | Informes y estadísticas  
🔹 **Sistema** | Configuraciones generales  
🔹 **Ventas** | Pedidos, mesas, facturación

### **Paso 4: Configurar permisos específicos**

Dentro de cada módulo, vas a encontrar diferentes opciones. Para cada opción podés configurar **4 tipos de permisos**:

**🔐 Tipos de permisos:**

✅ **Ver** | Que pueda visualizar la opción  
✅ **Crear** | Que pueda interactuar y crear nuevos registros  
✅ **Editar** | Que pueda modificar registros existentes  
✅ **Eliminar** | Que pueda borrar registros

**Ejemplo práctico:**

- Si querés que un **Cajero** pueda ver los reportes de ventas pero NO modificarlos:
  - ✅ Marcá **"Ver"** en Reportes → Ventas
  - ❌ NO marques **"Crear"**, **"Editar"** ni **"Eliminar"**

### **Paso 5: Guardar los cambios**

6. Los cambios se guardan **automáticamente** al marcar o desmarcar cada opción
7. No necesitás hacer clic en ningún botón de guardar
8. Repetí el proceso para **TODOS** los roles que necesites configurar

---

## 💡 **Configuraciones recomendadas por rol**

### **Dueño**

**Permisos sugeridos:** ✅ TODO (Ver, Crear, Editar, Eliminar en todos los módulos)  
**¿Por qué?** Es el administrador principal y necesita acceso completo.

### **Encargado**

**Permisos sugeridos:** ✅ TODO excepto eliminar en Finanzas y Sistema  
**¿Por qué?** Puede gestionar el día a día pero no borrar información crítica.

### **Cajero**

**Permisos sugeridos:**

- ✅ **Ventas:** Ver, Crear, Editar
- ✅ **Finanzas:** Ver, Crear (solo cobros)
- ❌ **Personal, Sistema:** Sin acceso
- ✅ **Reportes:** Solo Ver

**¿Por qué?** Necesita cobrar y facturar, pero no acceder a configuraciones.

### **Mozo**

**Permisos sugeridos:**

- ✅ **Ventas:** Ver, Crear (pedidos y mesas)
- ❌ **Finanzas:** Sin acceso
- ❌ **Personal, Sistema:** Sin acceso
- ❌ **Reportes:** Sin acceso

**¿Por qué?** Solo necesita tomar pedidos y manejar mesas.

### **Cocinero**

**Permisos sugeridos:**

- ✅ **Operaciones:** Ver pedidos de cocina
- ❌ **Todos los demás módulos:** Sin acceso

**¿Por qué?** Solo necesita ver qué cocinar.

---

## 🚨 **¿Problemas comunes?**

- **"No me deja guardar"** → Los cambios se guardan automáticamente, no hay botón de guardar
- **"Un usuario no puede hacer algo que debería poder"** → Verificá que hayas marcado el permiso correcto (Ver, Crear, Editar o Eliminar)
- **"Modifiqué un rol y ahora no funciona nada"** → Verificá que hayas configurado TODOS los roles, no solo uno
- **"No sé qué permisos dar"** → Usá las configuraciones recomendadas de esta guía

---

## 🔄 **¿Cómo volver a la configuración por defecto?**

Si modificaste permisos y querés volver a como estaba antes:

1. Contactá al soporte técnico del sistema
2. Ellos pueden restaurar los permisos predeterminados
3. **NO intentes hacerlo manualmente** si no estás seguro