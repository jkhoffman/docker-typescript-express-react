FROM node:10.12.0-alpine

WORKDIR /usr/local/app

COPY package.json yarn.lock ./
RUN yarn

COPY . ./

EXPOSE 3000
CMD [ "yarn", "start" ]
