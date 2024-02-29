# Stage 1: Install dependencies
FROM node:20 AS deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY prisma ./prisma
RUN npx prisma generate

# Stage 2: Build the Next.js project
FROM node:20 AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY public ./public
COPY src ./src
COPY .eslintrc.json ./
COPY next.config.js ./
COPY package*.json ./
COPY jsconfig.json ./
COPY tailwind.config.js ./
COPY .env* ./
RUN npm run build

# Stage 3: Run the project
FROM node:20 AS runner
RUN apt-get update && apt-get install -y netcat-openbsd && apt-get install -y postgresql-client
WORKDIR /usr/src/app
ENV NODE_ENV production
COPY start.sh ./
COPY .env* ./
COPY db/init.sql ./db/
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package*.json ./
EXPOSE 3000
CMD ["/bin/bash", "./start.sh"]
