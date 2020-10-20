const randomInjuryID = () => {
  const ids = [0, 51, 52, 53, 54, 55, 56, 57, 58, 59]

  return ids[[Math.floor(Math.random() * ids.length) + 0]]
}

const accidents_injuries = [...Array(100)].map((ai, index) => (
  {
    accident_id: index + 1,
    injury_id: randomInjuryID()
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('accidents_injuries', accidents_injuries, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('accidents_injuries', null, {})
  }
}
