ARG MF_CHARACTER
ARG MF_CHARACTER_DETAIL

# Build
FROM node:20 AS build
ENV MF_CHARACTER=$MF_CHARACTER
ENV MF_CHARACTER_DETAIL=$MF_CHARACTER_DETAIL
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN echo "MF_CHARACTER=$MF_CHARACTER\nMF_CHARACTER_DETAIL=$MF_CHARACTER_DETAIL" > /app/.env.production
RUN npm run build

# NGINX
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 