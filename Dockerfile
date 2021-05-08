FROM node:15-alpine

WORKDIR /usr/src

COPY api/package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "node", "api/index.js" ]
