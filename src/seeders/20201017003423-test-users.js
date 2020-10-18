'use strict'

const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
      {
        uid: 1002,
        uname: 'beta-tester',
        upass: 'beta-tester',
        verifydate: new Date(),
        email: 'beta-tester@aw.com',
        zip: faker.address.zipCode(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: 'NC',
        country: 'USA',
        lastlogin: new Date(),
        memnum: faker.random.number(100000),
        home_phone: faker.phone.phoneNumber(),
        work_phone: faker.phone.phoneNumber(),
        name: faker.name.firstName(),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', [
      {
        uname: 'beta-tester',
        upass: faker.internet.password(8),
        verifydate: new Date(),
        email: 'beta-tester@aw.com',
        zip: faker.address.zipCode(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: 'NC',
        country: 'USA',
        lastlogin: new Date(),
        memnum: faker.random.number(100000),
        home_phone: faker.phone.phoneNumber(),
        work_phone: faker.phone.phoneNumber(),
        name: faker.name.firstName(),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {})
  }
}
