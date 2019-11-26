FROM node:12.13.1

ADD package*.json /var/www/html/
ADD *.lock /var/www/html/

RUN cd /var/www/html && yarn install
