FROM node:14.1-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY index.mjs .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]