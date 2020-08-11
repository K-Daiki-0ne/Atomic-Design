FROM node:12.18.1

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

ENTRYPOINT ["yarn", "start"]