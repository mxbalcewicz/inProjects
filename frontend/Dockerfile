FROM node:16

# set working directory
WORKDIR /usr/src/frontend

COPY package.json ./
RUN yarn install
COPY . ./

# start app
CMD ["yarn", "start"]