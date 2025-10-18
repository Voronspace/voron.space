FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /usr/src/app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

COPY --chown=appuser:appgroup --from=builder /usr/src/app/node_modules ./node_modules
COPY --chown=appuser:appgroup --from=builder /usr/src/app/.nuxt ./.nuxt
COPY --chown=appuser:appgroup --from=builder /usr/src/app/static ./static
COPY --chown=appuser:appgroup --from=builder /usr/src/app/nuxt.config.js ./
COPY --chown=appuser:appgroup --from=builder /usr/src/app/package.json ./
COPY --chown=appuser:appgroup --from=builder /usr/src/app/serverMiddleware ./serverMiddleware
COPY --chown=appuser:appgroup --from=builder /usr/src/app/301.json ./

ENV NODE_ENV=production

EXPOSE 5003

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5003

CMD [ "npm", "start" ]