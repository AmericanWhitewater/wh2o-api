const faker = require('faker')

const projects = [...Array(200)].map((project, index) => (
  {
    id: index + 1,
    name: faker.lorem.words(),
    description: faker.lorem.sentence(),
    uid: faker.random.number(100),
    deleted: 0,
    shortname: faker.lorem.word()
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('projects', projects, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projects', null, {})
  }
}
