# 🐳 Guía de Docker Hub Deployment

## 📦 Imagen Docker

**Repositorio en Docker Hub:** https://hub.docker.com/r/yoalevilar/paxapos-docs

**Imagen:** `yoalevilar/paxapos-docs:latest`

---

## 🚀 Build y Push (Desarrollo)

### Opción 1: Script Automatizado (Recomendado)

```powershell
# Push con tag 'latest'
.\docker-push.ps1

# Push con versión específica (también crea tag 'latest')
.\docker-push.ps1 v1.0.0
.\docker-push.ps1 v2.0.0
```

### Opción 2: Comandos Manuales

```powershell
# 1. Login a Docker Hub
docker login

# 2. Build de la imagen
docker build -t paxapos-docs-secure:latest .

# 3. Etiquetar para Docker Hub
docker tag paxapos-docs-secure:latest yoalevilar/paxapos-docs:latest

# 4. Push a Docker Hub
docker push yoalevilar/paxapos-docs:latest
```

### Opción 3: Con Versión Específica

```powershell
# Build con tag
docker build -t paxapos-docs-secure:v1.0.0 .

# Tag para Docker Hub (con versión)
docker tag paxapos-docs-secure:v1.0.0 yoalevilar/paxapos-docs:v1.0.0

# Tag también como latest
docker tag paxapos-docs-secure:v1.0.0 yoalevilar/paxapos-docs:latest

# Push ambos tags
docker push yoalevilar/paxapos-docs:v1.0.0
docker push yoalevilar/paxapos-docs:latest
```

---

## 📥 Deploy en Servidor (Producción)

### 1. Instalación Inicial

```bash
# En tu servidor de producción

# 1. Login a Docker Hub
docker login

# 2. Descargar imagen
docker pull yoalevilar/paxapos-docs:latest

# 3. Crear red (si no existe)
docker network create web

# 4. Descargar docker-compose.yml del repositorio
curl -o docker-compose.yml https://raw.githubusercontent.com/paxapos/documentation/dev/docker-compose.yml

# 5. Levantar servicios
docker-compose up -d

# 6. Verificar
docker-compose ps
docker-compose logs -f
```

### 2. Actualización (Deploy de Nueva Versión)

```bash
# En tu servidor de producción

# 1. Pull de la nueva imagen
docker-compose pull

# 2. Recrear contenedores con nueva imagen
docker-compose up -d --force-recreate

# 3. Verificar
docker-compose ps
docker-compose logs -f paxapos-docs
docker-compose logs -f restodigital-docs

# 4. Limpiar imágenes viejas (opcional)
docker image prune -f
```

### 3. Rollback (Volver a Versión Anterior)

```bash
# Si algo sale mal, volver a versión específica

# 1. Editar docker-compose.yml y cambiar la imagen a versión específica
sed -i 's/yoalevilar\/paxapos-docs:latest/yoalevilar\/paxapos-docs:v1.0.0/g' docker-compose.yml

# 2. Pull de la versión antigua
docker-compose pull

# 3. Recrear contenedores
docker-compose up -d --force-recreate
```

---

## 🔄 Workflow Completo (Desarrollo → Producción)

### Paso 1: Desarrollo Local
```powershell
# En tu máquina de desarrollo (Windows)

# 1. Hacer cambios en el código
# 2. Probar localmente
npm run dev

# 3. Build y verificar
docker build -t paxapos-docs-secure:latest .
docker-compose up -d
curl http://localhost:3000/config.js
```

### Paso 2: Push a Docker Hub
```powershell
# Subir nueva versión
.\docker-push.ps1 v1.2.0
```

### Paso 3: Deploy en Producción
```bash
# En tu servidor

# Pull y deploy
docker-compose pull
docker-compose up -d --force-recreate

# Verificar
curl https://paxapos.com/health
curl https://restodigital.com.ar/health
```

---

## 🔐 Gestión de Credenciales

### En tu máquina de desarrollo:
```powershell
# Ver credenciales guardadas
docker login

# Cambiar de cuenta
docker logout
docker login
```

### En servidor de producción:
```bash
# Login con token de acceso (más seguro)
echo "TU_TOKEN_AQUI" | docker login -u yoalevilar --password-stdin

# O con credenciales
docker login -u yoalevilar
```

> 💡 **Recomendación**: Crea un Access Token en Docker Hub en lugar de usar tu contraseña:
> https://hub.docker.com/settings/security

---

## 📊 Gestión de Tags y Versiones

### Estrategia de Versionado Recomendada:

```
yoalevilar/paxapos-docs:latest          ← Última versión estable
yoalevilar/paxapos-docs:v1.0.0          ← Versión específica
yoalevilar/paxapos-docs:v1.0            ← Minor version
yoalevilar/paxapos-docs:v1              ← Major version
yoalevilar/paxapos-docs:dev             ← Versión de desarrollo
```

### Ejemplo de Release:

```powershell
# Build con múltiples tags
docker build -t paxapos-docs-secure:v1.2.0 .

# Etiquetar todas las versiones
docker tag paxapos-docs-secure:v1.2.0 yoalevilar/paxapos-docs:v1.2.0
docker tag paxapos-docs-secure:v1.2.0 yoalevilar/paxapos-docs:v1.2
docker tag paxapos-docs-secure:v1.2.0 yoalevilar/paxapos-docs:v1
docker tag paxapos-docs-secure:v1.2.0 yoalevilar/paxapos-docs:latest

# Push todos los tags
docker push yoalevilar/paxapos-docs:v1.2.0
docker push yoalevilar/paxapos-docs:v1.2
docker push yoalevilar/paxapos-docs:v1
docker push yoalevilar/paxapos-docs:latest
```

---

## 🛠️ Comandos Útiles

```bash
# Ver imágenes locales
docker images yoalevilar/paxapos-docs

# Ver tags disponibles en Docker Hub (requiere jq)
curl -s "https://hub.docker.com/v2/repositories/yoalevilar/paxapos-docs/tags/" | jq -r '.results[].name'

# Eliminar imagen local
docker rmi yoalevilar/paxapos-docs:latest

# Verificar tamaño de imagen
docker images yoalevilar/paxapos-docs --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"

# Inspeccionar imagen
docker inspect yoalevilar/paxapos-docs:latest

# Ver historial de capas
docker history yoalevilar/paxapos-docs:latest
```

---

## 📱 Integración con CI/CD

### GitHub Actions (Automatización)

El repositorio ya tiene configurado `.github/workflows/docker-build.yml` que:
- ✅ Se activa en push a `main` o `dev`
- ✅ Construye la imagen automáticamente
- ✅ Sube a GitHub Container Registry (ghcr.io)

Para subir también a Docker Hub, agrega estos secretos en GitHub:
1. Ve a: `Settings > Secrets and variables > Actions`
2. Agrega:
   - `DOCKERHUB_USERNAME`: `yoalevilar`
   - `DOCKERHUB_TOKEN`: Tu Access Token de Docker Hub

---

## 🆘 Troubleshooting

### Error: "denied: requested access to the resource is denied"
```bash
# Solución: Reloguear
docker logout
docker login
```

### Error: "unauthorized: authentication required"
```bash
# Verificar que estás logueado
docker info | grep Username
```

### Imagen muy grande
```bash
# Ver qué está ocupando espacio
docker history yoalevilar/paxapos-docs:latest

# Optimizar Dockerfile (multi-stage build ya implementado)
```

### Push muy lento
```bash
# Verificar conexión
ping hub.docker.com

# Usar compresión (ya habilitado por defecto)
```

---

## 📚 Referencias

- **Docker Hub**: https://hub.docker.com/r/yoalevilar/paxapos-docs
- **Documentación Docker**: https://docs.docker.com/
- **Docker Compose**: https://docs.docker.com/compose/
