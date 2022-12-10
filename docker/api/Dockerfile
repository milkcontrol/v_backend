FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --ignore-scripts

COPY . .

EXPOSE ${PORT}
