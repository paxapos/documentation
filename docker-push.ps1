# Script para construir y subir imagen Docker a Docker Hub
# Uso: .\docker-push.ps1 [tag]
# Ejemplo: .\docker-push.ps1 v1.0.0

param(
    [string]$Tag = "latest"
)

$ErrorActionPreference = "Stop"

$DOCKER_USERNAME = "yoalevilar"
$IMAGE_NAME = "paxapos-docs"
$LOCAL_IMAGE = "paxapos-docs-secure"

Write-Host "🐳 Iniciando proceso de build y push a Docker Hub..." -ForegroundColor Cyan
Write-Host ""

# 1. Build de la imagen
Write-Host "📦 Paso 1/4: Construyendo imagen Docker..." -ForegroundColor Yellow
docker build -t "${LOCAL_IMAGE}:${Tag}" .
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error al construir la imagen" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Imagen construida exitosamente" -ForegroundColor Green
Write-Host ""

# 2. Etiquetar para Docker Hub
Write-Host "🏷️  Paso 2/4: Etiquetando imagen para Docker Hub..." -ForegroundColor Yellow
docker tag "${LOCAL_IMAGE}:${Tag}" "${DOCKER_USERNAME}/${IMAGE_NAME}:${Tag}"
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error al etiquetar la imagen" -ForegroundColor Red
    exit 1
}

# Si no es 'latest', también tagear como latest
if ($Tag -ne "latest") {
    docker tag "${LOCAL_IMAGE}:${Tag}" "${DOCKER_USERNAME}/${IMAGE_NAME}:latest"
}
Write-Host "✅ Imagen etiquetada exitosamente" -ForegroundColor Green
Write-Host ""

# 3. Verificar login
Write-Host "🔐 Paso 3/4: Verificando autenticación..." -ForegroundColor Yellow
$loginStatus = docker info 2>&1 | Select-String "Username"
if (-not $loginStatus) {
    Write-Host "⚠️  No estás logueado en Docker Hub. Iniciando login..." -ForegroundColor Yellow
    docker login
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Error al iniciar sesión" -ForegroundColor Red
        exit 1
    }
}
Write-Host "✅ Autenticación verificada" -ForegroundColor Green
Write-Host ""

# 4. Push a Docker Hub
Write-Host "☁️  Paso 4/4: Subiendo imagen a Docker Hub..." -ForegroundColor Yellow
Write-Host "   Imagen: ${DOCKER_USERNAME}/${IMAGE_NAME}:${Tag}" -ForegroundColor Cyan
docker push "${DOCKER_USERNAME}/${IMAGE_NAME}:${Tag}"
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error al subir la imagen" -ForegroundColor Red
    exit 1
}

if ($Tag -ne "latest") {
    Write-Host "   También subiendo como :latest..." -ForegroundColor Cyan
    docker push "${DOCKER_USERNAME}/${IMAGE_NAME}:latest"
}

Write-Host ""
Write-Host "🎉 ¡Imagen subida exitosamente a Docker Hub!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Resumen:" -ForegroundColor Cyan
Write-Host "   Repositorio: https://hub.docker.com/r/${DOCKER_USERNAME}/${IMAGE_NAME}" -ForegroundColor White
Write-Host "   Tag: ${Tag}" -ForegroundColor White
Write-Host ""
Write-Host "🚀 Para descargar en otro servidor:" -ForegroundColor Cyan
Write-Host "   docker pull ${DOCKER_USERNAME}/${IMAGE_NAME}:${Tag}" -ForegroundColor White
Write-Host ""
Write-Host "📦 Para desplegar con docker-compose:" -ForegroundColor Cyan
Write-Host "   docker-compose pull" -ForegroundColor White
Write-Host "   docker-compose up -d" -ForegroundColor White
