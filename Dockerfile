FROM node:alpha

WORKDIR /usr/src/app

COPY ["paclage.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

ENTRYPOINT ["yarn", "start"]