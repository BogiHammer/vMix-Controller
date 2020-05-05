# pull official base image
FROM node:13.12.0-alpine as build-deps

# set working directory
WORKDIR /usr/src/app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
#RUN npm install --silent
#RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

RUN yarn build

# start app
#CMD ["npm", "start"]