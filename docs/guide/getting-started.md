## Requirements

- [`Node.js`](https://nodejs.org/en/)
- [`wh2o-docker`](https://github.com/AmericanWhitewater/wh2o-docker)

**Note** This project is a submodule of wh2o-docker which is the parent for several microservices. If you only want to work on the API, create a new postgres server with the default credentials:

```
POSTGRES_HOST=localhost
POSTGRES_PORT=35432
POSTGRES_DB=wh2o
POSTGRES_USER=wh2o
POSTGRES_PASSWORD=wh2o
```

## Installation

To get started working on the API outside of Docker, clone the [`repo`](https://github.com/AmericanWhitewater/wh2o-api) and `cd` to the project root then run `npm run init`. This will install project dependencies, run the latest migrations, then start the app in dev mode.

## Configuration

Before compiling the API, we need to provide a few environment variables.

Run `cp .env.default .env`

- `POSTGRES_HOST=` Database endpoint. 
- `POSTGRES_DB=` The database name.
- `POSTGRES_USER=` Database user credentials.
- `POSTGRES_PASSWORD=` Database user credentials.

## Development

To compile the API and bring up the development server, run `npm run serve` from the project directory root.

## Production

To build the API for a production environment run, `npm run build`. The API's static files will be available in `dist/`. 

To start the server in production, run `node dist/index.js`.
