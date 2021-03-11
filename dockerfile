FROM node:slim

WORKDIR /var/www/html

COPY package*.json .
COPY *.lock .

RUN yarn install --silent

COPY . .

RUN yarn build

EXPOSE 80

CMD [ "yarn", "deploy" ]
