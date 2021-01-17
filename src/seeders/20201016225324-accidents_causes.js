'use strict'

/**
 * @todo investigate...
 */

const accidentCauses = [...Array(100)].map((user,index) => (
  {
    accidentId: index + 1,
    causeId: index + 1
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('accident_causes', accidentCauses, {})
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('accident_causes', null, {})
  }
}
