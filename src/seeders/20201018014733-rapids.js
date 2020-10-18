const faker = require('faker')

const {randomRiverClass} = require('./helpers')

const rapids = [...Array(2000)].map((rapid, index) => (
  {
    reachid: faker.random.number(1000),
    rapidid: index + 1,
    name: faker.lorem.words(),
    distance: faker.random.number(100),
    difficulty: randomRiverClass(),
    description: faker.lorem.sentences(),
    photoid: null,
    videoid: null,
    isputin: Math.round(Math.random()),
    istakeout: Math.round(Math.random()),
    isaccess: Math.round(Math.random()),
    isportage: Math.round(Math.random()),
    ishazard: Math.round(Math.random()),
    iswaterfall: Math.round(Math.random()),
    isplayspot: Math.round(Math.random()),
    rlat: '0',
    rlon: '0',
    approximate: Math.random() >= 0.5,
    deleted: false,
    rloc: null,
    revision: index + 1,
    is_final: true,
    created_at: new Date()
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('rapids', rapids, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('rapids', null, {})
  }
}
