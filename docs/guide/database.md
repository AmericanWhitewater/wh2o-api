# Database

## Models

`wh2o-api/src/models`

The [`Sequelize CLI`](https://sequelize.org/master/manual/migrations.html) provides a command for creating models.

```
sequelize model:create --name superuser --attributes email:string, password:string, role:enum
```

The command above will generate a new model file for "superuser" with email, password, and role columns. This is a great way to bootstrap a new model but it can become difficult to add tons of columns in a single command. It's recommended to generate the model file with a column or two then go into the newly created file to flush out the properties.

## Migrations

`wh2o-api/src/migrations`

When you've created a new model or have updated an existing model, you'll need to generate a new migration file to make sure our data is accurate. We currently use a third-party library called [`sequelize-auto-migrations`](https://github.com/flexxnn/sequelize-auto-migrations) to help create our migrations. When your models are ready run: 

```
npx makemigration --name <name-of-migration> 
```

For example, if you've made changes to the Reaches model, you could generate a new migration called "reaches-update" like so: 

```
npx makemigration --name reaches-update
```

Next, the following command to execute the migration:

```
npm run db:migrate
```

If you've made a mistake or need to rollback a migration Sequelize provides a few options:

```
npx sequelize db:migrate:undo # Undo most recent migration
npx sequelize db:migrate:undo:all # Undo all migrations
npx sequelize db:migrate:undo --to path/to/migration/file.js # Undo all migrations until specific file
```

## Seeders

`wh2o-api/src/seeders`

Populating the database with fake data is very helpful for development. To create a seeder you can bootstrap a file with: 

```
npx sequelize seed:generate --name <name-of-seeder>
```

This generates a boilerplate seeder:

```js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
```

To create dummy data we use [`Faker.js`](https://www.npmjs.com/package/faker) for everything from fake user emails, addresses, and other random data. Here is an example of a seeder for the "users" table using faker: 

```js
const faker = require('faker');

const users = [...Array(100)].map((user) => (
  {
    uname: faker.internet.userName(),
    upass: faker.internet.password(8),
    verifydate: new Date(),
    email: faker.internet.email(),
    zip: faker.address.zipCode(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    country: faker.address.country(),
    lastlogin: new Date(),
    volunteer: null,
    alerts: null,
    postal: null,
    memnum: faker.random.number(100000),
    address2: null,
    home_phone: faker.phone.phoneNumber(),
    work_phone: faker.phone.phoneNumber(),
    journal: null,
    aw_beta: null,
    mbr_level: null,
    bad_addr: null,
    bad_email: null,
    mod_date: null,
    record_type: null,
    name: faker.name.firstName(),
    mem_transaction: null,
    transaction_id: null,
    expiration: null,
    modifydate: null,
    pushdate: null,
    mbr_relation: null,
    prefs: null,
    annual_renew: null,
    code: null,
    googleid: null,
    socialprofile: null,
    facebookid: null,
    epassword: null,
    remember_token: null,
    created_at: new Date(),
    updated_at: new Date()
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
```

To execute the seeders run: 

```
npm run db:seed
```

If you've made a mistake, you can undo the seeder with: 

```
npm run db:seed:undo
```