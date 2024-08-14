# Stage 1: Build the React application
FROM node:18-alpine AS build

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install

ARG REACT_APP_BACKEND_API_URL

COPY . ./
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENV FRONTEND_INTERNAL_PORT=80

EXPOSE $FRONTEND_INTERNAL_PORT

CMD ["sh", "entrypoint.sh"]
