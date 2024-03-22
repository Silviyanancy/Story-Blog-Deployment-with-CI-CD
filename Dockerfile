
#base image
FROM node:18-alpine


#ENV NODE_ENV development

#working directory - whatever command we run it will be for the react application
WORKDIR /app

#cache and install dependencies
COPY package.json /app

#While NPM fetches packages from the online npm registry for every 'install' command, YARN stores dependencies locally in most cases and fetches 
#packages from a local disk, given that dependency has been installed earlier. This makes YARN considerably faster than NPM when it comes to fetching packages.
#unlock to our working directory yarn. lock is a flattened list of all dependencies that your projects needs to run,
#COPY yarn.lock . 

#since package.json is in the container, it will install proper dependencies
#from package.json installs the dependency to the container
RUN npm install 

#COpy all the source code files and dependencies to react app
#COPY . .
#copy all the dependencies to the react app
COPY . /app

#Expose a port to react application
EXPOSE 3000

#To start the application inside the container and ensure it runs, 
CMD ["npm", "run", "start"]




