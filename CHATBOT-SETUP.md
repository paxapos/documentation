# 🤖 ChatBot PaxaPOS - Gemini AI + WhatsApp

## 🚀 Configuración Rápida (5 minutos)

### 1. **Obtener API Key de Gemini**
1. Ve a: https://aistudio.google.com/app/apikey
2. Crea una API key gratuita
3. Cópiala

### 2. **Configurar el ChatBot Web**
1. Edita `.env.local`:
   ```
   GEMINI_API_KEY=tu_api_key_aqui
   ```
2. Ejecuta: `npm run dev`
3. ¡Listo! El chatbot web ya tiene IA completa

### 3. **Activar WhatsApp Business** (opcional)
1. Instala dependencias: `npm run whatsapp:install`
2. Inicia el bot: `npm run whatsapp:start`
3. Escanea el QR code con WhatsApp Business
4. ¡El bot responde automáticamente!

## ✨ **Características**

### **ChatBot Web:**
- ✅ **IA completa** con todo el manual indexado
- ✅ **Fallback robusto** a búsqueda local si falla
- ✅ **Respuestas contextuales** específicas de PaxaPOS
- ✅ **Enlaces directos** a secciones del manual

### **WhatsApp Business:**
- ✅ **Misma IA** que el web
- ✅ **Formato WhatsApp** (*negritas*, sin enlaces)
- ✅ **Respuestas automáticas** 24/7
- ✅ **Ultra minimalista** - solo 50 líneas de código

## 🔧 **Arquitectura Minimalista**

```
Manual MD Files → Gemini AI → Respuestas Inteligentes
                      ↓
            Web ChatBot + WhatsApp Bot
```

**Código reutilizado:**
- ✅ `prepareForExport()` - limpiar markdown
- ✅ Lógica de carga de archivos MD existente
- ✅ Interfaz del chatbot existente
- ✅ Sistema de fallbacks existente

**Código nuevo:** Solo ~100 líneas total

## 💬 **Ejemplos de Uso**

**Usuario:** "cómo crear un mozo"
**IA:** "*Gestión de Personal - Mozos* 👨‍💼

Para crear mozos en PaxaPOS:

1. Clic en la P roja 🔴
2. Ir a 'Agregar Personal'
3. Completar datos del empleado
4. Asignar rol 'Mozo'
5. Configurar permisos

¿Necesitas ayuda con algún paso específico?"

## 🛠️ **Solución de Problemas**

**❌ "Error de API Key"**
- Verifica que tu key sea válida en `.env.local`

**❌ "WhatsApp no conecta"**
- Usa WhatsApp Business, no personal
- Escanea el QR completo

**❌ "Respuestas raras"**
- La IA aprende del manual, mejora automático

## 📊 **Monitoreo**

Ambos bots registran en consola:
- ✅ Mensajes procesados
- ✅ Errores de API
- ✅ Tiempos de respuesta

¡Listo! Tienes un sistema de IA completo con mínimo código. 🎉
