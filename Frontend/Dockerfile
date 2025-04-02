# Step 1: Build React app
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy built React app to Nginx's web root
COPY --from=build /app/build /usr/share/nginx/html

# Copy Nginx config to enable reverse proxying
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
