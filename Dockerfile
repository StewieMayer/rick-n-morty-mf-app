# Build
FROM node:20 AS build
ENV MF_CHARACTER=https://mf-character.onrender.com
ENV MF_CHARACTER_DETAIL=https://mf-character-detail.onrender.com
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# NGINX
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 