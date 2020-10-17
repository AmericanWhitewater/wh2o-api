# Quick Start

## System Requirements 

- [`Node.js - 12.18.3`](https://nodejs.org/en/)
- [`Docker Desktop`](https://www.docker.com/products/docker-desktop)

## Docker Compose

Download the database image and bring up the server:

```
docker-compose up
```

## Express App

```
git clone https://github.com/AmericanWhitewater/wh2o-api.git
```

cd to the project root.

```
npm ci
```

### Development

Start the Express app with "hot" reloading: 

```
npm run dev
```

Run database migrations:

```
npm run db:migrate
```

Seed fake data: 

```
npm run db:seed:all
```

For more on working with the database:

- [`Database - Models`](/guide/database#models)
- [`Database - Migrations`](/guide/database#migrations)
- [`Database - Seeders`](/guide/database#seeders)


The API will be available at [`http://localhost:3000`](http://localhost:3000).
