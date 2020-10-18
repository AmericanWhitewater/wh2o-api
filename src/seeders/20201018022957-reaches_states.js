const faker = require('faker')

const reaches_states = [...Array(1000)].map((rs, index) => (
  {
    id: index + 1,
    state: faker.address.stateAbbr(),
    reach_id: faker.random.number(1000)
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('reaches_states', reaches_states, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('reaches_states', null, {})
  }
}
