# Quick Start

### System Requirements 

- [`Node.js - 12.18.3`](https://nodejs.org/en/)
- [`Docker Desktop`](https://www.docker.com/products/docker-desktop)

### Clone

Download the project and cd to the project root:

```
git clone https://github.com/AmericanWhitewater/wh2o-api.git 
```

```
cd wh2o-api
```

### Docker Compose

Download the database image and bring up the server:

```
docker-compose up
```

### Express App

Install the project dependencies.

```
npm ci
```

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

The API will be available at [`http://localhost:3000`](http://localhost:3000).

### What next?

There is a [`Postman`](https://www.postman.com/) collection available in `docs/` to help you get started testing the API.

```
docs/wh2o-api.postman_collection.json
```

If you'd like to see the API results in the browser, checkout the `next` branch in [`wh2o-vue`](https://github.com/AmericanWhitewater/wh2o-vue). Once you've got the app up and running, you can log in with these credentials:

- email: `beta-tester@aw.com`
- pass: `beta-tester`

