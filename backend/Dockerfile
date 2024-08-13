FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

RUN npm install -g sequelize-cli

COPY . .

RUN chmod +x start.sh

EXPOSE 3000

CMD ["sh", "start.sh"]

