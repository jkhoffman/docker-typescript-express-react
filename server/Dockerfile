FROM node:10.12.0-alpine

WORKDIR /usr/local/app

COPY package.json yarn.lock ./
RUN yarn

COPY . ./

EXPOSE 3001
CMD [ "yarn", "start" ]
