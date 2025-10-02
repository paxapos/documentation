# 🔐 Configuración de Secretos en GitHub

Para que el workflow de GitHub Actions pueda subir imágenes a Docker Hub automáticamente, necesitas configurar los siguientes secretos:

## 📋 Pasos para Configurar Secretos

### 1. Crear Access Token en Docker Hub

1. Ve a: https://hub.docker.com/settings/security
2. Haz clic en **"New Access Token"**
3. Configura:
   - **Description**: `GitHub Actions - documentation`
   - **Access permissions**: `Read, Write, Delete`
4. Haz clic en **"Generate"**
5. **⚠️ IMPORTANTE**: Copia el token inmediatamente (no podrás verlo de nuevo)

### 2. Agregar Secretos en GitHub

1. Ve al repositorio: https://github.com/paxapos/documentation
2. Ve a: **Settings** > **Secrets and variables** > **Actions**
3. Haz clic en **"New repository secret"**

#### Secreto 1: DOCKERHUB_USERNAME

```
Name: DOCKERHUB_USERNAME
Secret: yoalevilar
```

#### Secreto 2: DOCKERHUB_TOKEN

```
Name: DOCKERHUB_TOKEN
Secret: [pega aquí el token que copiaste del paso 1]
```

### 3. Verificar Configuración

Una vez agregados los secretos, deberías ver:

```
✓ DOCKERHUB_USERNAME
✓ DOCKERHUB_TOKEN
```

## 🚀 Uso Automático

Ahora cada vez que hagas push a `main` o `dev`, el workflow automáticamente:

1. ✅ Construirá la imagen Docker
2. ✅ La subirá a GitHub Container Registry (ghcr.io)
3. ✅ La subirá a Docker Hub (docker.io/yoalevilar/paxapos-docs)

## 🔍 Verificar que Funciona

1. Haz un commit y push:
   ```bash
   git add .
   git commit -m "test: verificar docker hub workflow"
   git push origin dev
   ```

2. Ve a la pestaña **Actions** en GitHub: https://github.com/paxapos/documentation/actions

3. Deberías ver el workflow ejecutándose

4. Una vez completado, verifica en Docker Hub: https://hub.docker.com/r/yoalevilar/paxapos-docs/tags

## 🎯 Tags Generados Automáticamente

El workflow creará los siguientes tags:

- `yoalevilar/paxapos-docs:dev` - Para branch dev
- `yoalevilar/paxapos-docs:main` - Para branch main
- `yoalevilar/paxapos-docs:latest` - Para branch principal
- `yoalevilar/paxapos-docs:v1.0.0` - Para tags git (ej: v1.0.0)
- `yoalevilar/paxapos-docs:v1.0` - Versión minor
- `yoalevilar/paxapos-docs:v1` - Versión major

## 🛠️ Workflow Manual

También puedes ejecutar el workflow manualmente:

1. Ve a: https://github.com/paxapos/documentation/actions
2. Selecciona **"Build and Push Docker Image"**
3. Haz clic en **"Run workflow"**
4. Configura las variables si es necesario
5. Haz clic en **"Run workflow"**

## ⚠️ Seguridad

- ✅ Nunca subas tokens o contraseñas al código
- ✅ Usa siempre Secrets de GitHub
- ✅ Revoca tokens si sospechas que fueron comprometidos
- ✅ Usa tokens de acceso en lugar de contraseñas
- ✅ Configura permisos mínimos necesarios

## 🔄 Rotar Token

Si necesitas cambiar el token:

1. Revoca el token viejo en Docker Hub
2. Crea un nuevo token
3. Actualiza el secret `DOCKERHUB_TOKEN` en GitHub

## 📚 Referencias

- [GitHub Actions Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Docker Hub Access Tokens](https://docs.docker.com/docker-hub/access-tokens/)
- [GitHub Actions Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
