FROM node:22-alpine AS base
RUN echo '|----- NEXT APP :: base -----|'
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN npm install -g pnpm

# ----------

FROM base AS dependencies
RUN echo '|----- NEXT APP :: dependencies -----|'
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ----------

FROM base AS build
RUN echo '|----- NEXT APP :: build -----|'
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN pnpm build
RUN pnpm prune --prod

# ----------

FROM base
RUN echo '|----- NEXT APP :: run -----|'
WORKDIR /app

COPY --from=build /app/build build/
COPY --from=build /app/node_modules node_modules/

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY package.json .
ENV NODE_ENV=production
CMD [ "node", "build" ]
