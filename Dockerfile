FROM node:12.18.3-slim

COPY . /var/www

WORKDIR /var/www

EXPOSE 3000

RUN chown -R node:node /var/www
USER node

RUN npm ci && npm run build

RUN rm -rf docs/

RUN npm ci --production

RUN npm cache clean --force

CMD ["node", "dist/index.js" ]