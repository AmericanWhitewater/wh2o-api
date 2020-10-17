'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('factors', [
      {
        id: 31,
        factor: 'Cold Water'
      },
      {
        id: 32,
        factor: 'Darkness'
      },
      {
        id: 33,
        factor: 'Extreme Weather'
      },
      {
        id: 34,
        factor: 'Failed Rescue'
      },
      {
        id: 35,
        factor: 'Inadequate Equipment'
      },
      {
        id: 36,
        factor: 'Inexperience'
      },
      {
        id: 37,
        factor: 'Other'
      },
      {
        id: 40,
        factor: 'Poor Group / Scene Management'
      },
      {
        id: 41,
        factor: 'Poor Planning'
      },
      {
        id: 42,
        factor: 'Solo Paddling'
      },
      {
        id: 43,
        factor: 'High Water'
      },
      {
        id: 101,
        factor: 'One Boat Trip'
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('factors', null, {})
  }
}
