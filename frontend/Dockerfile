#base image
FROM node:9.6.1

#Setting the working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

#adding .bin to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

#installing and caching app dependicies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@1.1.1 -g

#starting the app
CMD ["npm", "start"]