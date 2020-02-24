FROM node:12.13.1

WORKDIR /var/www/html

COPY package*.json .
COPY *.lock .

RUN yarn install
