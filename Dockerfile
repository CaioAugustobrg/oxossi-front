FROM node:latest

WORKDIR /app/client

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]
