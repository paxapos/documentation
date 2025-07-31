# 🤖 API para Integración con IA

## 📋 **Descripción**

Esta API permite a las IAs acceder automáticamente al contenido de la documentación en formato texto plano, optimizado para el procesamiento por modelos de lenguaje.

## 🎯 **Objetivo**
Permitir que ChatGPT y otras IAs puedan acceder a tu manual de usuario para responder automáticamente preguntas como "¿Cómo crear un mozo en el sistema?"

## 🔗 **Endpoints Disponibles**

### **GET** `/api/ai`

Obtiene el contenido de la documentación en diferentes formatos.

#### **Parámetros de Consulta**

| Parámetro | Tipo | Opciones | Descripción |
|-----------|------|----------|-------------|
| `type` | string | `user`, `dev`, `all` | Tipo de documentación (por defecto: `all`) |
| `format` | string | `json`, `text` | Formato de respuesta (por defecto: `json`) |
| `module` | string | ID del módulo | Obtener módulo específico |
| `section` | string | Nombre de sección | Filtrar por sección |

### **URLs Directas para Indexación**

#### **Para ChatGPT/Claude (URL Principal)**
```
https://tu-dominio.com/api/ai?type=user&format=text
```

#### **Para Sistemas Automáticos**
```
https://tu-dominio.com/api/ai?format=json
```

## 🚀 **Ejemplos de Uso**

### **1. Obtener todo el contenido en texto plano**
```
GET /api/ai?format=text
```

### **2. Obtener solo manual de usuario en JSON**
```
GET /api/ai?type=user&format=json
```

### **3. Obtener módulo específico**
```
GET /api/ai?module=11-Introduccion&format=text
```

### **4. Obtener sección específica**
```
GET /api/ai?section=Primeros%20Pasos&format=text
```

## 📋 **Métodos de Indexación para IA**

### **1. 🚀 ChatGPT Custom GPTs (Recomendado)**

#### **Pasos para crear un Custom GPT:**

1. **Ir a ChatGPT** → `Explore GPTs` → `Create a GPT`

2. **Configurar el GPT:**
   ```
   Nombre: "Asistente [TU_EMPRESA]"
   Descripción: "Experto en el sistema [TU_PRODUCTO] que puede responder cualquier pregunta sobre su uso"
   ```

3. **En "Knowledge":**
   - Haz clic en **"Upload files"**
   - Ve a: `http://localhost:5174/documentation/api/ai?type=user&format=text`
   - Copia todo el contenido y guárdalo como `manual-usuario.txt`
   - Sube el archivo al GPT

4. **Instrucciones del GPT:**
   ```
   Eres un experto en [TU_PRODUCTO]. Responde solo basándote en el manual de usuario proporcionado.
   
   Reglas:
   - Si no encuentras la información en el manual, di "No tengo esa información en el manual"
   - Proporciona pasos detallados cuando sea posible
   - Usa un tono profesional pero amigable
   - Siempre menciona la sección del manual de donde sacaste la información
   ```

### **2. 🔧 Claude Projects**

#### **Crear un Project en Claude:**

1. **Claude.ai** → `Projects` → `Create Project`

2. **Configuración:**
   ```
   Nombre: "Manual [TU_EMPRESA]"
   Instrucciones: "Eres un asistente experto en [TU_PRODUCTO]. Responde preguntas usando únicamente el manual de usuario proporcionado."
   ```

3. **Subir Documentación:**
   - Ve a: `http://localhost:5174/documentation/api/ai?type=user&format=text`
   - Copia el contenido completo
   - Pégalo en el chat del proyecto

### **3. 🌐 APIs y Chatbots Personalizados**

#### **Integración con tu propia IA:**

```javascript
// Ejemplo para tu chatbot personalizado
async function responderPreguntaUsuario(pregunta) {
    // 1. Obtener contexto del manual
    const response = await fetch('https://tu-dominio.com/api/ai?type=user&format=text');
    const manualCompleto = await response.text();
    
    // 2. Enviar a OpenAI/Anthropic con contexto
    const respuesta = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
                role: "system", 
                content: `Eres un experto en nuestro sistema. Responde basándote únicamente en este manual: ${manualCompleto}`
            },
            {
                role: "user", 
                content: pregunta
            }
        ]
    });
    
    return respuesta.choices[0].message.content;
}
```

### **4. 🔍 Indexación Web Automática**

#### **Sitemap para Crawlers:**

Crea `/sitemap.xml` para que los bots indexen automáticamente:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://tu-dominio.com/documentation/api/ai?format=text</loc>
        <lastmod>2025-07-28</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://tu-dominio.com/documentation/user-guide</loc>
        <lastmod>2025-07-28</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
</urlset>
```

## 🎯 **Ejemplo Práctico: "¿Cómo crear un mozo?"**

### **Antes (Sin indexación):**
```
Usuario: "¿Cómo creo un mozo en el sistema?"
ChatGPT: "No tengo información específica sobre tu sistema..."
```

### **Después (Con indexación):**
```
Usuario: "¿Cómo creo un mozo en el sistema?"
ChatGPT: "Según el manual de [TU_EMPRESA], para crear un mozo sigue estos pasos:

1. Ve al módulo 'Agregar Personal' 
2. Haz clic en 'Nuevo Empleado'
3. Selecciona el rol 'Mozo' en el dropdown
4. Completa los datos personales...

Esta información está en la sección '23-Agregar-Personal' del manual."
```

## 🚀 **Implementación Rápida (5 minutos)**

### **Método Express para ChatGPT:**

1. **Abre tu sitio:** `http://localhost:5174/documentation/user-guide`

2. **Haz clic en "Ver archivo LLM"** en cualquier página

3. **Copia todo el contenido** de la nueva pestaña

4. **Ve a ChatGPT** y pega:
   ```
   "A partir de ahora, actúa como un experto en [TU_PRODUCTO]. 
   Te voy a proporcionar el manual completo del sistema.
   Responde solo basándote en esta información:
   
   [PEGAR CONTENIDO COMPLETO DEL MANUAL]"
   ```

5. **¡Listo!** Ahora ChatGPT puede responder preguntas específicas sobre tu sistema.

## 📱 **Interfaz Web Mejorada**

### **Nuevos Botones en cada página:**

#### 🔵 **"Módulo para IA"** 
- Exporta el módulo actual en formato texto
- Copia automáticamente al portapapeles
- Abre en nueva pestaña para fácil acceso

#### 🟢 **"Todo para IA"**
- Exporta toda la documentación como un archivo unificado
- Perfecto para entrenar o contextualizar IAs
- Incluye estructura jerárquica completa

#### 🟣 **"Índice IA"**
- Genera un índice estructurado para navegación de IA
- Incluye IDs únicos para cada módulo
- Proporciona instrucciones específicas para IA

## 💡 **Casos de Uso**

### **Para Chatbots**
```javascript
// Obtener todo el manual para contexto
fetch('/api/ai?type=user&format=text')
  .then(response => response.text())
  .then(content => {
    // Usar como contexto para respuestas
  });
```

### **Para Training de IA**
```javascript
// Obtener estructura organizada
fetch('/api/ai?format=json')
  .then(response => response.json())
  .then(data => {
    // data.structure contiene la organización completa
    // data.data contiene todo el contenido
  });
```

### **Para Consultas Específicas**
```javascript
// Buscar información sobre facturación
fetch('/api/ai?section=AFIP&format=text')
  .then(response => response.text())
  .then(content => {
    // Contenido específico sobre AFIP y facturación
  });
```

## 🛠️ **Características Técnicas**

- **CORS habilitado**: Acceso desde cualquier dominio
- **Formato optimizado**: Markdown limpio para mejor procesamiento
- **Reemplazo automático**: Nombres de marca procesados automáticamente
- **Estructura jerárquica**: Organización mantenida para contexto
- **IDs únicos**: Cada módulo tiene identificador único
- **Acceso directo**: URLs permanentes para cada módulo

## 📊 **Estructura de Respuesta JSON**

```json
{
  "success": true,
  "data": [
    {
      "id": "11-Introduccion",
      "title": "Introducción",
      "content": "# Contenido markdown...",
      "section": "Comenzamos"
    }
  ],
  "totalSections": 42,
  "structure": {
    "userManual": {
      "Comenzamos": [
        {"id": "11-Introduccion", "title": "Introducción"},
        {"id": "12-Iniciar-sesión", "title": "Iniciar sesión"}
      ]
    }
  }
}
```

## 🎯 **Optimizaciones para IA**

1. **Texto limpio**: Sin elementos HTML que confundan a la IA
2. **Estructura clara**: Jerarquía mantenida con headers markdown
3. **Separadores**: Divisores claros entre secciones (`---`)
4. **Metadatos**: IDs y títulos para referencia cruzada
5. **Contexto preservado**: Información de sección y categoría

## 🔧 **Integración Automática**

La documentación está diseñada para:
- ✅ **Indexación automática** por sistemas de IA
- ✅ **Búsqueda semántica** efectiva
- ✅ **Contexto preservado** para respuestas precisas
- ✅ **Acceso programático** mediante API REST
- ✅ **Formato estándar** compatible con pipelines de ML

---

## 🔄 **Mantenimiento Automático**

### **Script para actualización automática:**

```bash
#!/bin/bash
# Actualizar manuals para IAs
curl "https://tu-dominio.com/api/ai?type=user&format=text" > manual-actualizado.txt
echo "Manual actualizado para IA"
```

### **Webhook para actualizaciones:**

Tu API está diseñada para que cualquier cambio en la documentación se refleje automáticamente en las respuestas de la IA.

## 📊 **Métricas y Seguimiento**

Para monitorear el uso:

```javascript
// Agregar analytics a tu API
fetch('/api/ai?type=user&format=text&source=chatgpt')
```

## ⚡ **URLs Listas para Usar**

| Propósito | URL |
|-----------|-----|
| **Manual completo para IA** | `https://tu-dominio.com/api/ai?type=user&format=text` |
| **Solo una sección** | `https://tu-dominio.com/api/ai?section=Primeros%20Pasos&format=text` |
| **Estructura JSON** | `https://tu-dominio.com/api/ai?format=json` |
| **Documentación dev** | `https://tu-dominio.com/api/ai?type=dev&format=text` |

---

## 🎉 **Resultado Final**

Con esta implementación, cualquier cliente podrá:

✅ **Preguntar a ChatGPT:** "¿Cómo crear un mozo en [TU_EMPRESA]?"
✅ **Obtener respuestas precisas** basadas en tu manual
✅ **Recibir pasos detallados** con referencias al manual
✅ **Acceso 24/7** sin necesidad de soporte humano

**¡Tu documentación ahora es completamente accesible para cualquier IA!** 🚀
