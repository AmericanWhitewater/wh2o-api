const faker = require('faker')

const affiliates = [...Array(50)].map((affiliate,index) => (
  {
    id: index + 1,
    last: faker.lorem.words(1), // ?
    url: faker.internet.url(),
    conemail: null,
    members: faker.random.number(),
    contact: faker.internet.email(),
    abstract: faker.lorem.sentences(),
    description: faker.lorem.paragraph(),
    reaches: null,
    volunteer: null,
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    expiration: '0',
    memberid: faker.random.number(),
    deleted: 0
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('affiliates', affiliates, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('affiliates', null, {})
  }
}
