
FROM node:10.12-alpine 
WORKDIR /app
COPY package*.json ./
RUN mkdir -p logs
RUN npm install --no-audit --silent
LABEL maintainer="helder@taikai.network"
COPY . .
RUN npm run build
CMD NODE_ENV=production ./node_modules/.bin/start-storybook -s ./dist  -p 6006
