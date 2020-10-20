'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('gauge_reading_sources', [
      {
        id: 1,
        shortkey: 'a',
        description: 'averaged'
      },
      {
        id: 2,
        shortkey: 'c',
        description: 'calculated value'
      },
      {
        id: 3,
        shortkey: 'e',
        description: 'estimated value'
      },
      {
        id: 4,
        shortkey: 'm',
        description: 'measured'
      },
      {
        id: 5,
        shortkey: 'n',
        description: 'minimal'
      },
      {
        id: 6,
        shortkey: 'o',
        description: 'observed'
      },
      {
        id: 7,
        shortkey: 'x',
        description: 'maximal'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('gauge_reading_sources', null, {})
  }
}
