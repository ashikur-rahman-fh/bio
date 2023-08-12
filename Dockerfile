FROM node:18.17

COPY package*.json ./
RUN [ "npm", "install" ]

COPY . .
CMD [ "npm", "run", "dev" ]
