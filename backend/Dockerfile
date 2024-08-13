FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

RUN npm install -g sequelize-cli

COPY . .

RUN chmod +x entrypoint.sh

ENV DB_DIALECT=postgres
ENV DB_HOST=postgres
ENV DB_PORT=5432
ENV DB_USERNAME=postgres
ENV DB_PASSWORD=password
ENV BACKEND_PORT=3000

EXPOSE $BACKEND_PORT

CMD ["sh", "entrypoint.sh"]

