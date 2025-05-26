# Webhooks en Integraciones

Los webhooks son una herramienta poderosa para integrar sistemas en tiempo real. Permiten que una aplicación envíe datos a otra tan pronto como ocurre un evento.

## 🧩 ¿Cómo funcionan?

Un sistema emisor realiza una solicitud HTTP (generalmente POST) a una URL del sistema receptor. Este último debe estar preparado para manejar dicha solicitud.

```json
{
  "evento": "nuevo_registro",
  "datos": {
    "id": 123,
    "nombre": "Juan Pérez"
  }
}
