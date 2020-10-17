'use strict'

/**
 * @todo investigate...
 */

const accidentCauses = [...Array(100)].map((user,index) => (
  {
    accident_id: index,
    cause_id: index
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('accidents_causes', accidentCauses, {})
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('accidents_causes', null, {})
  }
}
