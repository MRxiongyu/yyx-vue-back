FROM node
LABEL name="vue-back"
LABEL version="0.0.1"
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000