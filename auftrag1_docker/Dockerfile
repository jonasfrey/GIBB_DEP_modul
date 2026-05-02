# --- Build-Stage: Dependencies installieren ---
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# --- Runtime-Stage: schlankes Produktions-Image ---
FROM node:24-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app

# Eigener Non-Root-User
RUN addgroup -S app && adduser -S app -G app

COPY --from=build /app/node_modules ./node_modules
COPY --chown=app:app server.js package.json ./
COPY --chown=app:app public ./public

USER app
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://127.0.0.1:${PORT:-3000}/api/health || exit 1

CMD ["node", "server.js"]
