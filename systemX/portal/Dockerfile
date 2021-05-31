# ------------------------------------------
# BUILD LAYER
FROM golang:1.15rc2-alpine AS builder

# set ENV variables
ENV GO111MODULE=on \
  GOOS=linux \
  GOARCH=amd64

# Build directory
WORKDIR /build
#RUN apk add git
#RUN git config --global url."https://b3bd7fb00dfb867817ee48214a1927a1ecd5a639@github.com/".insteadOf "https://github.com"

COPY go.mod go.sum ./
RUN go mod download

COPY ./ ./
RUN go build -v -o portal .

# ------------------------------------------
# RUN LAYER
FROM alpine

WORKDIR /
#RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*
COPY --from=builder ["/build/portal", "portal"]

#EXPOSE 8084

CMD ["./portal"]
