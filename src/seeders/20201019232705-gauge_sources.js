'use strict';
const faker = require('faker')

const randomUpdateType = () => {
  const types = ['m', 'r', 'h', 'd']

  return types[[Math.floor(Math.random() * types.length) + 0]]
}

const gauge_sources = [...Array(100)].map(() => (
  {
    source: faker.random.uuid(),
    title: faker.lorem.words(),
    url: faker.internet.url(),
    update_type: randomUpdateType(),
    update_frequency: null,
    update_start_time: '00:00:00',
    data: null,
    updated: null,
    populated: null,
    disclaimer: null
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('gauge_sources', gauge_sources, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('gauge_sources', null, {});
  }
};
