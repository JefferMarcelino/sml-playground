# Use the official Go image for building Samora-Lang
FROM golang:1.21-rc-alpine3.17 AS builder

# Install Git
RUN apk update && apk add --no-cache git

# Clone the Samora-Lang repository
RUN git clone https://github.com/GraHms/Samora-Lang.git /go/src/github.com/GraHms/Samora-Lang

# Build Samora-Lang
WORKDIR /go/src/github.com/GraHms/Samora-Lang
RUN go build -v ./...

# Create the final image with the built Samora-Lang binary and worker.js
FROM node:18-alpine

WORKDIR /app

# Copy the built Samora-Lang binary from the previous stage
COPY --from=builder /go/src/github.com/GraHms/Samora-Lang/samora /app/runtime/samora

COPY package*.json .

# Install required Node.js modules
RUN npm i

# Copy worker.js to the container
COPY . .

# Set the entrypoint to start the worker
CMD ["npm", "run", "dev"]
