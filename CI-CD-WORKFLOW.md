# 🔄 Workflow de CI/CD - GitHub Actions

## 📊 Estrategia de Ramas y Deployments

```
┌─────────────────────────────────────────────────────────────┐
│                    FLUJO DE TRABAJO                          │
└─────────────────────────────────────────────────────────────┘

    ┌──────────┐                    ┌──────────┐
    │   DEV    │                    │   MAIN   │
    │  Branch  │                    │  Branch  │
    └────┬─────┘                    └────┬─────┘
         │                               │
         │ git push                      │ git push / merge
         ▼                               ▼
    ┌─────────────────┐            ┌──────────────────┐
    │  Test Build     │            │  Build & Push    │
    │  (Solo Build)   │            │  to Docker Hub   │
    └─────────────────┘            └──────────────────┘
         │                               │
         ▼                               ▼
    ✅ Verifica que                  📦 yoalevilar/
       compile                          paxapos-docs:latest
                                        
                                        🌐 Disponible para
                                           producción
```

---

## 🎯 Workflows Configurados

### 1️⃣ **Test Build (Dev Branch)** - `.github/workflows/test-build.yml`

**Trigger:**
- Push a rama `dev`
- Pull Request a rama `dev`

**Acciones:**
- ✅ Build de la imagen Docker
- ✅ Verifica que compile correctamente
- ❌ NO hace push a registros
- ⚡ Solo plataforma linux/amd64 (más rápido)

**Propósito:**
- Validar que el código compila antes de hacer merge a main
- Feedback rápido para desarrolladores
- Sin costo de storage en registros

```yaml
# Se ejecuta en rama dev
on:
  push:
    branches: [ dev ]
```

---

### 2️⃣ **Build and Push (Main Branch)** - `.github/workflows/docker-build.yml`

**Trigger:**
- Push a rama `main`
- Tags con formato `v*` (ej: v1.0.0)
- Workflow manual (dispatch)

**Acciones:**
- ✅ Build de la imagen Docker
- ✅ Push a GitHub Container Registry (ghcr.io)
- ✅ Push a Docker Hub (yoalevilar/paxapos-docs)
- ✅ Multi-plataforma (linux/amd64, linux/arm64)
- ✅ Tags automáticos por versión

**Propósito:**
- Deployar a producción
- Crear imágenes oficiales
- Versionar releases

```yaml
# Se ejecuta solo en main o tags
on:
  push:
    branches: [ main ]
    tags: [ 'v*' ]
```

---

## 📋 Flujo de Desarrollo Recomendado

### Desarrollo Diario:

```bash
# 1. Trabajar en rama dev
git checkout dev

# 2. Hacer cambios
# ... editar archivos ...

# 3. Commit y push
git add .
git commit -m "feat: nueva funcionalidad"
git push origin dev

# ✅ GitHub Actions ejecuta test-build.yml
# ✅ Verifica que compile
# ❌ NO sube a Docker Hub
```

### Release a Producción:

```bash
# 1. Merge dev → main
git checkout main
git merge dev

# 2. Push a main
git push origin main

# ✅ GitHub Actions ejecuta docker-build.yml
# ✅ Build de imagen
# ✅ Push a Docker Hub
# ✅ Disponible como yoalevilar/paxapos-docs:latest
```

### Release con Versión:

```bash
# 1. Crear tag
git tag -a v1.2.0 -m "Release version 1.2.0"

# 2. Push tag
git push origin v1.2.0

# ✅ GitHub Actions ejecuta docker-build.yml
# ✅ Crea múltiples tags:
#    - yoalevilar/paxapos-docs:v1.2.0
#    - yoalevilar/paxapos-docs:v1.2
#    - yoalevilar/paxapos-docs:v1
#    - yoalevilar/paxapos-docs:latest
```

---

## 🔐 Requisitos de Configuración

### Secretos de GitHub (Solo para Main Branch):

Para que el workflow de `main` funcione, debes configurar:

1. `DOCKERHUB_USERNAME`: `yoalevilar`
2. `DOCKERHUB_TOKEN`: Tu Access Token de Docker Hub

**Cómo configurar:**
Ver archivo `GITHUB-SECRETS-SETUP.md`

---

## 📊 Comparación de Workflows

| Característica | Dev Branch | Main Branch |
|----------------|------------|-------------|
| **Build** | ✅ Sí | ✅ Sí |
| **Push a Docker Hub** | ❌ No | ✅ Sí |
| **Push a GitHub Registry** | ❌ No | ✅ Sí |
| **Multi-plataforma** | ❌ Solo AMD64 | ✅ AMD64 + ARM64 |
| **Versioning** | ❌ No | ✅ Sí |
| **Velocidad** | ⚡ Rápido (~3-5 min) | 🐢 Lento (~8-15 min) |
| **Consumo Storage** | 📦 Cero | 📦 Alto |

---

## 🎯 Ventajas de esta Estrategia

### ✅ Para Desarrollo (Dev):
- ⚡ **Feedback rápido**: Build en minutos
- 💰 **Sin costos**: No usa storage de registros
- 🔍 **Validación temprana**: Detecta errores de compilación
- 🚀 **Iteración rápida**: Muchos commits sin overhead

### ✅ Para Producción (Main):
- 🔒 **Control de calidad**: Solo código revisado
- 📦 **Imágenes oficiales**: Disponibles públicamente
- 🏷️ **Versionado**: Tags semánticos automáticos
- 🌐 **Multi-plataforma**: Compatible con más servidores
- 🔄 **Rollback**: Puedes volver a versiones anteriores

---

## 🚀 Comandos Útiles

### Ver status de workflows:
```bash
# En GitHub
https://github.com/paxapos/documentation/actions

# Con GitHub CLI
gh workflow list
gh run list --workflow=docker-build.yml
gh run list --workflow=test-build.yml
```

### Ejecutar workflow manualmente:
```bash
# Con GitHub CLI
gh workflow run docker-build.yml

# Desde la web
# Ve a Actions > Build and Push Docker Image > Run workflow
```

### Cancelar workflow en ejecución:
```bash
# Con GitHub CLI
gh run cancel <run-id>

# Desde la web
# Ve a Actions > Click en el workflow > Cancel workflow
```

---

## 🛠️ Troubleshooting

### "Build falla en dev"
✅ **Normal**: Es para detectar errores temprano
- Revisa los logs en GitHub Actions
- Corrige el error
- Push de nuevo

### "No se sube a Docker Hub desde main"
❌ **Problema de secretos**
- Verifica que `DOCKERHUB_USERNAME` y `DOCKERHUB_TOKEN` estén configurados
- Ve a Settings > Secrets and variables > Actions

### "Quiero forzar build y push desde dev"
⚠️ **No recomendado, pero posible**:
```bash
# Ejecutar workflow de docker-build manualmente
gh workflow run docker-build.yml
```

### "Workflow tarda mucho"
⏱️ **Es normal en main**:
- Build multi-plataforma toma tiempo
- Si es en dev, debería ser rápido (solo AMD64)

---

## 📚 Referencias

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Build Push Action](https://github.com/docker/build-push-action)
- [Semantic Versioning](https://semver.org/)
- [Docker Hub Tags](https://docs.docker.com/docker-hub/repos/)

---

## 🎓 Best Practices

1. ✅ **Siempre probar en dev primero**
2. ✅ **Hacer merge a main solo con código estable**
3. ✅ **Usar tags semánticos** (v1.0.0, v1.1.0, etc.)
4. ✅ **Revisar logs de Actions** antes de hacer más pushes
5. ✅ **Mantener main limpio** y desplegable en cualquier momento
6. ✅ **Hacer releases pequeños y frecuentes**
7. ✅ **Documentar cambios** en cada versión
