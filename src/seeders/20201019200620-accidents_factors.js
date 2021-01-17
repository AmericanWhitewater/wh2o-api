const randomFactorID = () => {
  const ids = [31, 32, 33, 34, 35, 36, 37, 40, 41, 42, 43, 101]

  return ids[[Math.floor(Math.random() * ids.length) + 0]]
}

const accidentFactors = [...Array(100)].map((af,index) => (
  {
    accidentId: index + 1,
    factorId: randomFactorID()
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('accident_factors', accidentFactors, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('accident_factors', null, {})
  }
}
