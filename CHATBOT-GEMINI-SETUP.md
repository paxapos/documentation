# Configuración del ChatBot con Gemini AI para GitHub Pages

Este proyecto usa una arquitectura híbrida:
- **GitHub Pages**: Para el sitio estático de documentación  
- **Servid### Paso 2: Configurar Variables de Entorno (PHP)

En tu servidor PaxaPOS, configura la API key de Gemini:

**Opción A - Variables de entorno del sistema:**
```bash
export GEMINI_API_KEY="tu-api-key-real"
export GEMINI_MODEL="gemini-1.5-flash" 
```

**Opción B - Archivo .env o config.php:**
```php
// config/gemini.php
define('GEMINI_API_KEY', 'tu-api-key-real');
define('GEMINI_MODEL', 'gemini-1.5-flash');
define('GEMINI_API_URL', 'https://generativelanguage.googleapis.com/v1beta');
```

**Opción C - Directamente en el código (menos seguro):**
```php
// En documentation-chat.php
$apiKey = 'tu-api-key-real'; // Reemplazar con tu key real
```

### Paso 3: Configurar la URL en el ChatBot

Edita `src/lib/components/ChatBotSimple.svelte` y cambia:

```typescript
// Reemplaza por la URL real de tu servidor PaxaPOS
const API_ENDPOINT = 'https://tu-servidor-paxapos.com/api/documentation-chat.php';
```

### Paso 4: Probar el Endpoint

Puedes probar que funcione con curl:

```bash
curl -X POST https://tu-servidor-paxapos.com/api/documentation-chat.php \
  -H "Content-Type: application/json" \
  -d '{"message": "¿cómo configurar impresoras?"}'
```S**: Para la API que conecta con Gemini AI

## Opción A: Usar tu Servidor PaxaPOS Existente (Recomendado)

### Paso 1: Agregar Endpoint a tu Servidor PaxaPOS

### Paso 1: Agregar Endpoint a tu Servidor PaxaPOS

Agrega este archivo PHP a tu servidor PaxaPOS:

**`api/documentation-chat.php`**:

```php
<?php
header('Content-Type: application/json');

// Habilitar CORS para GitHub Pages
header('Access-Control-Allow-Origin: https://paxapos.github.io');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Manejar preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Solo permitir POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

try {
    // Leer datos del request
    $input = json_decode(file_get_contents('php://input'), true);
    $message = $input['message'] ?? '';
    $platform = $input['platform'] ?? 'web';
    
    if (empty($message)) {
        throw new Exception('Mensaje vacío');
    }

    // Configuración de Gemini (usar variables de entorno o configuración)
    $apiKey = $_ENV['GEMINI_API_KEY'] ?? 'tu-api-key-aqui';
    $model = $_ENV['GEMINI_MODEL'] ?? 'gemini-1.5-flash';
    $apiUrl = $_ENV['GEMINI_API_URL'] ?? 'https://generativelanguage.googleapis.com/v1beta';
    
    if (empty($apiKey) || $apiKey === 'tu-api-key-aqui') {
        throw new Exception('API Key no configurada');
    }

    // Contexto de la documentación de PaxaPOS
    $manualContext = getDocumentationContext();
    
    $systemPrompt = "Eres el asistente de PaxaPOS. Responde SOLO usando la documentación oficial:

{$manualContext}

INSTRUCCIONES:
- Responde de forma CONCISA y DIRECTA
- Máximo 150 palabras por respuesta
- Usa formato Markdown con **negritas**
- Si no sabes algo, di 'No encontré esa información en el manual'";

    // Preparar datos para Gemini
    $geminiData = [
        'contents' => [
            [
                'parts' => [
                    ['text' => $systemPrompt . "\n\nPregunta: " . $message]
                ]
            ]
        ],
        'generationConfig' => [
            'temperature' => 0.3,
            'maxOutputTokens' => 600
        ]
    ];

    // Llamada a Gemini API
    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $apiUrl . "/models/{$model}:generateContent?key=" . $apiKey,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($geminiData),
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        CURLOPT_TIMEOUT => 30
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode !== 200) {
        throw new Exception("Error de Gemini: HTTP {$httpCode}");
    }

    $data = json_decode($response, true);
    $aiResponse = $data['candidates'][0]['content']['parts'][0]['text'] ?? null;

    if (empty($aiResponse)) {
        throw new Exception('Sin respuesta de Gemini');
    }

    // Respuesta exitosa
    echo json_encode([
        'success' => true,
        'response' => $aiResponse
    ]);

} catch (Exception $e) {
    error_log("Error en documentation-chat: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}

function getDocumentationContext() {
    return "## PaxaPOS - Sistema de Gestión de Restaurantes

### Módulos Principales:
- **Salón**: Gestión de mesas y clientes
- **Cocina (KDS)**: Sistema de visualización de pedidos  
- **Contabilidad**: Control financiero
- **Compras y Stock**: Inventario y proveedores
- **AFIP**: Facturación electrónica Argentina
- **Personal**: Gestión de empleados y roles

### Primeros Pasos:
1. **Usuarios**: Crear usuarios y asignar roles (Admin, Encargado, Mozo, Cocina)
2. **Impresoras**: Configurar impresoras de tickets y cocina
3. **Productos**: Cargar menú y precios  
4. **Salón**: Configurar mesas y distribución
5. **AFIP**: Configurar facturación electrónica

### Tipos de Pago:
- Efectivo, Tarjeta de Crédito/Débito
- Transferencias, QR de pagos
- Cuenta Corriente para clientes

### Funciones Avanzadas:
- **Arqueos**: Control de caja diario
- **Estadísticas**: Reportes de ventas y rendimiento
- **KDS**: Pantalla de cocina para pedidos
- **Buchón Bot**: Notificaciones automáticas";
}
?>
```

**Alternativa más simple** (si prefieres agregar a un archivo existente):

```php
// Agregar esto a tu archivo API principal existente
if ($_GET['action'] === 'documentation_chat') {
    // Código del chatbot aquí (mismo contenido de arriba)
}
```

### Paso 2: Configurar la URL en el ChatBot

Edita `src/lib/components/ChatBotSimple.svelte`:

```typescript
// Cambiar esta línea por la URL de tu servidor PaxaPOS
const API_ENDPOINT = 'https://tu-servidor-paxapos.com/api/documentation-chat';
```

### Paso 3: Variables de Entorno en tu Servidor

Asegúrate de que tu servidor PaxaPOS tenga estas variables:

```env
GEMINI_API_KEY=tu_api_key_actual
GEMINI_MODEL=gemini-1.5-flash
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta
```

## Opción B: Usar Vercel (Alternativa)

## Opción B: Usar Vercel (Alternativa)

### Paso 1: Deploy en Vercel

1. Ve a [vercel.com](https://vercel.com) y conecta tu repositorio GitHub
2. Importa este proyecto en Vercel
3. Configura las siguientes variables de entorno en Vercel:

```
GEMINI_API_KEY=tu_api_key_de_gemini
GEMINI_MODEL=gemini-1.5-flash
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta
GEMINI_MAX_TOKENS_WEB=600
GEMINI_MAX_TOKENS_WHATSAPP=400
GEMINI_TEMPERATURE=0.3
```

4. Despliega el proyecto en Vercel

### Paso 2: Configurar la URL en el ChatBot (Vercel)

1. Una vez desplegado en Vercel, copia la URL de tu proyecto (ej: `https://tu-proyecto.vercel.app`)
2. Edita `src/lib/components/ChatBotSimple.svelte`
3. Cambia la línea:
   ```typescript
   const API_ENDPOINT = 'https://your-vercel-app.vercel.app/api/chat';
   ```
   Por tu URL real:
   ```typescript
   const API_ENDPOINT = 'https://tu-proyecto.vercel.app/api/chat';
   ```

## Ventajas de Usar tu Servidor PaxaPOS

- ✅ **Infraestructura existente**: Aprovechas lo que ya tienes
- ✅ **Control total**: Mantienes todo en tu servidor
- ✅ **Contexto completo**: Acceso directo a la base de datos si es necesario
- ✅ **Sin dependencias externas**: No dependes de servicios terceros
- ✅ **Mejor rendimiento**: Menor latencia al usar tu infraestructura

## Deploy en GitHub Pages

1. Configura la URL correcta en el ChatBot (tu servidor o Vercel)
2. Haz commit y push de los cambios
3. GitHub Actions automáticamente deployará el sitio estático
4. El chatbot funcionará conectado a Gemini AI desde tu servidor

## Estructura Final del Proyecto

```
├── Servidor PaxaPOS/
│   └── /api/documentation-chat  # Nuevo endpoint
├── src/
│   └── lib/components/
│       └── ChatBotSimple.svelte  # Apunta a tu servidor
└── build/                        # Deploy en GitHub Pages
```
