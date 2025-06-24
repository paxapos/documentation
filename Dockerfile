# syntax=docker/dockerfile:1

# Dockerfile for SvelteKit Documentation App (Static Site)
FROM node:22-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Set work directory
WORKDIR /app

# Dependencies stage
FROM base AS deps
# Copy package files
COPY packages/documentation/package.json ./
COPY pnpm-lock.yaml ./
# Install dependencies (using --no-frozen-lockfile for monorepo compatibility)
RUN pnpm install --no-frozen-lockfile

# Builder stage
FROM base AS builder
# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules
# Copy source code
COPY packages/documentation/ ./
# Build the static site
RUN pnpm build

# Production stage - serve static files with nginx
FROM nginx:alpine AS production
# Copy built static files to nginx html directory
COPY --from=builder /app/build /usr/share/nginx/html
# Copy nginx configuration
COPY packages/documentation/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
