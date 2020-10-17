'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('causes', [
      {
        id: 3,
        cause: 'Caught in Low Head Dam Hydraulic'
      },
      {
        id: 4,
        cause: 'Caught in a Natural Hydraulic'
      },
      {
        id: 6,
        cause: 'Equipment Trap'
      },
      {
        id: 7,
        cause: 'Flush Drowning'
      },
      {
        id: 8,
        cause: 'Foot Entrapment'
      },
      {
        id: 10,
        cause: 'Impact/Trauma'
      },
      {
        id: 11,
        cause: 'Other'
      },
      {
        id: 12,
        cause: 'Swim into Rock or Sieve'
      },
      {
        id: 13,
        cause: 'Swim into Strainer'
      },
      {
        id: 14,
        cause: 'Pinned in Boat Against Strainer'
      },
      {
        id: 15,
        cause: 'Pinned in Boat against Rock or Sieve'
      },
      {
        id: 16,
        cause: 'Unknown'
      },
      {
        id: 17,
        cause: 'Vertical Pin'
      },
      {
        id: 18,
        cause: 'Health Problem'
      },
      {
        id: 86,
        cause: 'PFD Not Worn or Present'
      },
      {
        id: 87,
        cause: 'PFD Fell Off'
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('causes', null, {})
  }
}
