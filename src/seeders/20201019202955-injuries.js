'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('injuries', [
      {
        id: 0,
        injury: 'Does not Apply'
      },
      {
        id: 51,
        injury: 'Asthma Attack'
      },
      {
        id: 52,
        injury: 'Head Injury / Concussion'
      },
      {
        id: 53,
        injury: 'Heart Attack / Heart Failure'
      },
      {
        id: 54,
        injury: 'Hypothermia'
      },
      {
        id: 55,
        injury: 'Near Drowning'
      },
      {
        id: 56,
        injury: 'Other'
      },
      {
        id: 57,
        injury: 'Shoulder Dislocation'
      },
      {
        id: 58,
        injury: 'Spinal Injury'
      },
      {
        id: 59,
        injury: 'Physical Trauma'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('injuries', null, {})
  }
}
