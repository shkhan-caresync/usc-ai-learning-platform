FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml* .npmrc* ./ || true
RUN npm install -g pnpm
COPY . .
RUN pnpm install --frozen-lockfile=false && pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app .
EXPOSE 3000
CMD ["pnpm", "start"]
