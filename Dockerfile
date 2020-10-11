FROM node:12.18.3

WORKDIR /src
COPY ./package*.json ./
RUN npm ci
COPY . .
RUN chown -R node:node /src
USER node

EXPOSE 3000
CMD npm serve