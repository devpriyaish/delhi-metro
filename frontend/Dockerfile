# FROM node:18

# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm install

# COPY . .

# CMD ["npm", "run", "dev"]

# Build React app

# Build Stage
FROM node:18 AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Serve Stage
FROM nginx:alpine

# Copy the dist output to Nginx's HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

