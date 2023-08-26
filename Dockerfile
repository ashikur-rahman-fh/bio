FROM node:18.17

WORKDIR /nextapp

COPY package*.json ./
RUN [ "npm", "install" ]

COPY . .
CMD [ "npm", "run", "dev" ]
