FROM node:latest

WORKDIR /main

COPY package.json /app
RUN npm install

COPY . /main

CMD ["npm", "start"]
