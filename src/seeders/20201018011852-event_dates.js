const faker = require('faker')

const event_dates = [...Array(100)].map((event, index) => (
  {
    event_id: index + 1,
    evdate: new Date(),
    detail_description: faker.lorem.sentence(),
    batchid: 0,
    starttime: '08:00',
    endtime: '13:00',
    tz: 'mst',
    mincfs: faker.random.number(100),
    maxcfs: faker.random.number(500),
    deleted: 0,
    ed_id: index
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('event_dates', event_dates, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('event_dates', null, {})
  }
}
