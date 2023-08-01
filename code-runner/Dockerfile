FROM node:18-alpine AS builder

RUN apk update && apk add --no-cache git

RUN git clone https://github.com/GraHms/Samora-Lang.git /go/src/github.com/GraHms/Samora-Lang

WORKDIR /go/src/github.com/GraHms/Samora-Lang

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /go/src/github.com/GraHms/Samora-Lang/samora /app/runtime/samora

COPY package*.json .

RUN npm i

COPY . .

CMD ["npm", "run", "start"]
