# syntax=docker/dockerfile:1

# Base image with Node.js and Alpine Linux
FROM node:20-alpine AS base
WORKDIR /app
RUN npm install -g pnpm

# Dependencies stage: Install only the dependencies needed for the documentation package
FROM base AS deps
# Copy workspace configuration files
COPY pnpm-workspace.yaml ./
COPY package.json ./package.json
COPY pnpm-lock.yaml ./pnpm-lock.yaml
COPY tsconfig.base.json ./tsconfig.base.json
COPY tsconfig.json ./tsconfig.json

# Copy the documentation package.json to understand its dependencies
COPY packages/documentation/package.json ./packages/documentation/package.json

# Install dependencies for the documentation package and its dependencies within the monorepo
# This will install dependencies for 'documentation' and any local packages it depends on
RUN pnpm install --filter documentation... --frozen-lockfile

# Builder stage: Copy source code and build the documentation package
FROM base AS builder
WORKDIR /app

# Copy dependencies from the deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/packages/documentation/node_modules ./packages/documentation/node_modules
COPY --from=deps /app/pnpm-workspace.yaml ./
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=deps /app/tsconfig.base.json ./tsconfig.base.json
COPY --from=deps /app/tsconfig.json ./tsconfig.json
COPY --from=deps /app/packages/documentation/package.json ./packages/documentation/package.json

# Copy the source code for the documentation package
COPY packages/documentation ./packages/documentation

# If your documentation package depends on other local packages (e.g., libs/types), 
# uncomment and adjust the following lines:
# COPY libs ./libs
# COPY packages/other-dependency ./packages/other-dependency

# Build the documentation package
# Ensure the 'build' script is correctly defined in 'packages/documentation/package.json'
RUN pnpm --filter documentation run build
# The build output is expected to be in /app/packages/documentation/build

# Production stage: Set up the runtime environment
FROM base AS production
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/packages/documentation/build ./build
COPY --from=builder /app/packages/documentation/package.json ./package.json

# Install only production dependencies for the built application
# This step might not be necessary if you're using adapter-static, 
# but it's included for adapter-node compatibility
RUN pnpm install --prod --frozen-lockfile || echo "No production dependencies to install"

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && adduser -S sveltekit -u 1001
USER sveltekit

# Expose the port that the application will run on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Command to start the application
# This assumes you're using @sveltejs/adapter-node and the build output includes an index.js file
# If using @sveltejs/adapter-static, you'd typically serve the static files with a web server like nginx
CMD ["node", "index.js"]
