
# 👥 Configuración Inicial - Crear Usuarios

> 🎯 **¿Para qué sirve esto?**  
> Vas a crear las cuentas para que tu equipo (mozos, cajeros, cocineros) pueda usar el sistema. Cada persona tendrá su usuario y contraseña personal.

## 🔴 **MUY IMPORTANTE - La "P" roja**

En **TODOS** los módulos de PaxaPOS, vas a ver un ícono de **"P" roja** 🔴 en la parte superior de la pantalla.

`
🏪 PaxaPOS      [ 🔴 P ]      👤 Usuario
`

**¡Esta "P" roja es SÚPER IMPORTANTE!** 
- Te da acceso a configuraciones avanzadas de cada módulo
- **SIEMPRE** buscá esta "P" roja cuando necesites configurar algo
- Sin ella, no vas a poder acceder a muchas funciones

---

## 📋 **Paso a paso - Crear tu primer usuario**

### **Paso 1: Encontrar la "P" roja**
1. Una vez que estés dentro de PaxaPOS, mirá la parte **superior** de la pantalla
2. Buscá el ícono de **"P" roja** 🔴
3. Hacé clic en la **"P" roja**
4. Se va a abrir una ventana con muchas opciones

### **Paso 2: Ir a Crear Usuarios**
5. En la ventana que se abrió, buscá la opción **"Crear Usuarios"**
6. Hacé clic en **"Crear Usuarios"**

### **Paso 3: Completar los datos del nuevo usuario**
Ahora vas a completar la información de la persona que va a usar el sistema:

| Campo que vas a ver | Qué tenés que escribir | Ejemplo |
|-------------------|----------------------|---------|
| **Nombre** | Nombre y apellido completo | Juan Pérez |
| **Mail** | Email de la persona | juan@turestaurante.com |
| **Contraseña** | Una contraseña segura | MiClaveSegura123 |
| **Rol** | Qué puede hacer en el sistema | Mozo / Cajero / Administrador |

### **Paso 4: Guardar el usuario**
7. Verificá que todos los datos estén correctos
8. Hacé clic en **"Guardar"** o **"Confirmar"**
9. ¡Listo! Ya creaste tu primer usuario

---

## 🎭 **¿Qué rol tiene que elegir cada persona?**

| Rol | Qué puede hacer | Ideal para | Ejemplo |
|-----|----------------|------------|---------|
| **Administrador** | TODO - Control total del sistema | Dueño, gerente, encargado | El dueño del restaurante |
| **Cajero** | Cobrar, facturar, manejar dinero | Personal de caja | La persona que cobra |
| **Mozo** | Tomar pedidos, manejar mesas | Meseros, vendedores | Los que atienden mesas |
| **Cocinero** | Ver pedidos de cocina solamente | Personal de cocina | Chef, ayudantes de cocina |

---

## �� **Consejos importantes para no tener problemas**
- ✅ **Creá usuarios solo para personas que realmente van a usar el sistema**
- ✅ **Usá contraseñas diferentes para cada usuario** (nunca la misma para todos)
- ✅ **Asigná el rol correcto** - No des permisos de administrador a todos
- ✅ **Anotá los usuarios y contraseñas** en un lugar seguro
- ✅ **Probá que cada usuario pueda entrar** antes de cerrar

---

## � **Método alternativo - Usuario con PIN (Recomendado para mozos)**

> 💡 **¿Para qué sirve esto?**  
> Es un método más rápido para que los mozos accedan al sistema sin tener que recordar usuario y contraseña. Todos usan el mismo PIN (ejemplo: 1111).

### **¿Cuándo usar este método?**
- ✅ **Para mozos que cambian de turno frecuentemente**
- ✅ **Cuando tenés muchos mozos temporales**  
- ✅ **Para agilizar el cambio de turno**
- ❌ **NO para administradores o cajeros** (ellos necesitan usuario personal)

### **Paso a paso - Configurar usuario con PIN**

#### **Paso 1: Crear el usuario genérico primero**
1. **IMPORTANTE:** Primero tenés que crear un usuario normal (como explicamos arriba)
2. Este usuario va a ser la "base" del usuario con PIN
3. Asigná el rol **"Mozo"** a este usuario

#### **Paso 2: Configurar el PIN**
4. Hacé clic en la **"P" roja** 🔴
5. Buscá la opción **"Usuarios con PIN"**
6. Hacé clic en **"Usuarios con PIN"**
7. Hacé clic en **"Crear Usuario"** o **"Nuevo"**

#### **Paso 3: Completar la configuración del PIN**

| Campo | Qué escribir | Ejemplo |
|-------|-------------|---------|
| **Nombre del Usuario Genérico** | Un nombre que identifique el grupo | "Mozos"|
| **Rol** | seleccionar "Mozo" o el rol que quieras que tenga este usuario con pin | Mozo, Encargado, Dueño |
| **PIN** | Un número fácil de recordar (4 dígitos) | 1111 |

8. Hacé clic en **"Guardar"**

### **¿Cómo van a ingresar los mozos?**
Una vez configurado, los mozos van a poder:
1. En la pantalla de login, elegir **"Ingresar con PIN"**
2. Escribir el PIN (ejemplo: **1111**)
3. ¡Listo! Ya están dentro del sistema

### **💡 Consejos para el PIN**
- ✅ **Usá un PIN fácil de recordar** pero no obvio (evitá 0000 o 1234)
- ✅ **Comunicá el PIN solo a los mozos** autorizados
- ✅ **Cambiá el PIN periódicamente** si tenés mucha rotación de personal
- ✅ **Combiná ambos métodos:** PIN para mozos, usuario personal para administradores

---

## �🚨 **¿Problemas comunes?**
- **"No encuentro la P roja"** → Mirá bien la parte superior, está siempre visible
- **"No me deja guardar"** → Verificá que hayas completado todos los campos obligatorios
- **"El email ya existe"** → Usá un email diferente para cada usuario
- **"No aparece la opción de PIN en el login"** → Verificá que hayas creado el usuario con PIN correctamente
- **"El PIN no funciona"** → Asegurate que el usuario base tenga el rol "Mozo"
