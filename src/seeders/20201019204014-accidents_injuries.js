const randomInjuryID = () => {
  const ids = [0, 51, 52, 53, 54, 55, 56, 57, 58, 59]

  return ids[[Math.floor(Math.random() * ids.length) + 0]]
}

const accidents_injuries = [...Array(100)].map((ai, index) => (
  {
    accidentId: index + 1,
    injuryId: randomInjuryID()
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('accident_injuries', accidents_injuries, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('accident_injuries', null, {})
  }
}
