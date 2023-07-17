# --- BUILD
FROM node:gallium-alpine AS build

WORKDIR /usr/build
RUN apk add git
RUN git clone https://github.com/Crosant/eureka-interactive-maps.git

WORKDIR /usr/build/eureka-interactive-maps
RUN ls /usr/build/eureka-interactive-maps/config/
RUN npm ci
RUN npm run build

# --- PROD
FROM nginx:stable-alpine-slim

WORKDIR /usr/share/nginx/html

#COPY --from=build /usr/build/eureka-interactive-maps/config/ngnix.types /etc/nginx/mime.types
COPY --from=build /usr/build/eureka-interactive-maps/dist ./

EXPOSE 80
