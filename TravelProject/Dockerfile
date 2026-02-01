FROM node:20-alpine AS build
WORKDIR /app

# Copy ALL Vite config files FIRST
COPY package*.json vite.config.* ./
RUN npm ci

# Copy ALL source files
COPY . .

# Build (needs everything)
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]