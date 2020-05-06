FROM node:alpine

WORKDIR /feijuca

COPY index.js index.js
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install 

EXPOSE 3000

CMD ["node", "index.js"]
