### Deployment

**Note:** Deployment methods and infrastructure are TBD.

## Static

Before building the app, run `cp .env.default .env` and apply correct values.

Compile the app:

```
npm run build
```

Files will be outputted in `dist/`. To start the server in production, run `node dist/index.js`.

## Docker

When ready, build the Docker image:

```
docker build -t americanwhitewater/wh2o-api:latest .
```