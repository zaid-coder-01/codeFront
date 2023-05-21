FROM node:16.19.1

WORKDIR /code
COPY . .
RUN npm install
EXPOSE 3000
CMD npm start