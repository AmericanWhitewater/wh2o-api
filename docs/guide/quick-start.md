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

If you'd like to see the API results in the browser, there is a small frontend prototype available called [`wh2o-admin`](https://github.com/drewalth/wh2o-admin). Once you've installed the admin dashboard, you can log in with these credentials:

- email: `beta-tester@aw.com`
- pass: `beta-tester`

**Note**: Neither this project nor the admin prototype is on AW's official product roadmap. If you'd like to contribute to a live frontend app, see [`wh2o-vue`](https://github.com/AmericanWhitewater/wh2o-vue).

If you have any questions or need help getting set up with either this project or the admin prototype, feel free to reach out to [`@drewalth`](https://github.com/drewalth).
