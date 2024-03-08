#base image
FROM node:latest

#working directory - whatever command we run it will be for the react application
WORKDIR /app

COPY package.json /app

#from package.json
RUN npm install 
