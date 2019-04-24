FROM node:latest

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get install -y bash nano

ADD package*.json /var/www/html/
ADD *.lock /var/www/html/

RUN cd /var/www/html && yarn install
