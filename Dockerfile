# syntax=docker/dockerfile:1

# ---- Base Node image ----
FROM node:20-alpine AS base
LABEL maintainer="alevilar"
WORKDIR /app
# Install pnpm globally
RUN npm install -g pnpm

# ---- Dependencies ----
# This stage is to leverage Docker cache for dependencies.
# It copies only package.json and related files to install dependencies.
FROM base AS deps
# Copy root monorepo configurations
COPY pnpm-workspace.yaml ./
COPY package.json ./package.json
COPY pnpm-lock.yaml ./pnpm-lock.yaml
# Copy any root tsconfig files if they are extended by the package's tsconfig
# Ensure these files exist at the root or remove these COPY lines if not.
COPY tsconfig.base.json ./tsconfig.base.json
COPY tsconfig.json ./tsconfig.json

# Copy the specific package's package.json.
# This helps pnpm understand the workspace structure for fetching.
COPY packages/documentation/package.json ./packages/documentation/package.json

# If your 'documentation' package depends on other local packages in your monorepo (e.g., from 'libs/types'),
# you should also copy their package.json files here. For example:
# COPY libs/types/package.json ./libs/types/package.json

# Install dependencies only for the 'documentation' package and its workspace dependencies.
# The `...` after documentation ensures its dependencies are also included.
RUN pnpm install --filter documentation... --frozen-lockfile

# ---- Builder ----
# This stage builds the SvelteKit application.
FROM base AS builder
WORKDIR /app

# Copy all necessary files from the 'deps' stage, including node_modules.
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/pnpm-workspace.yaml ./
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=deps /app/tsconfig.base.json ./tsconfig.base.json
COPY --from=deps /app/tsconfig.json ./tsconfig.json
COPY --from=deps /app/packages/documentation/package.json ./packages/documentation/package.json

# Copy source code for the documentation package
COPY packages/documentation ./packages/documentation

# If your 'documentation' package depends on other local packages (e.g., from 'libs/types'),
# copy their source code here. For example:
# COPY libs/types ./libs/types

# Build the documentation package
# Ensure the 'build' script is correctly defined in 'packages/documentation/package.json'
RUN pnpm --filter documentation run build
# The build output is expected to be in /app/packages/documentation/build

# ---- Runner ----
# This stage creates the final image that will run the application.
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Default SvelteKit port with adapter-node. You can change this.
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE ${PORT}

# Copy the built application from the builder stage.
# SvelteKit adapter-node output in the 'build' directory is typically self-contained.
COPY --from=builder /app/packages/documentation/build ./

# The SvelteKit adapter-node output usually includes an 'index.js' to start the server.
CMD ["node", "index.js"]
