FROM node:8.9

RUN mkdir -p /app

COPY package.json /app/
WORKDIR /app
RUN yarn install

COPY src /app/src
WORKDIR /app

EXPOSE 8000

CMD ["node", "src/index.js"]