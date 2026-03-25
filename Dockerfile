# node:22-alpine を使用
FROM node:22-alpine

WORKDIR /app

# インストール前にOSパッケージを最新に更新し、脆弱性を最小限に抑える
RUN apk update && apk upgrade --no-cache && \
    apk add --no-cache libc6-compat

COPY package*.json ./
RUN npm install

COPY . .

ENV HOST=0.0.0.0
ENV PORT=3333
EXPOSE 3333

CMD ["npx", "nuxi", "dev"]
