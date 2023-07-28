FROM golang:1.21-rc-alpine3.17 AS builder

RUN apk update && apk add --no-cache git

RUN git clone https://github.com/GraHms/Samora-Lang.git /go/src/github.com/GraHms/Samora-Lang

WORKDIR /go/src/github.com/GraHms/Samora-Lang
RUN go build -v ./...

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /go/src/github.com/GraHms/Samora-Lang/samora /app/runtime/samora

COPY package*.json .

RUN npm i

COPY . .

CMD ["npm", "run", "start"]
