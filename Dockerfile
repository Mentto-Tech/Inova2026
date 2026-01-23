# syntax=docker/dockerfile:1

# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Prune dev dependencies for a slimmer runtime image
RUN npm prune --omit=dev

# Runtime stage
FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=80

# Copy production dependencies and built assets
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/api ./api
COPY --from=build /app/server.js ./server.js
COPY --from=build /app/package*.json ./

EXPOSE 80
CMD ["node", "server.js"]
