const randomFactorID = () => {
  const ids = [31, 32, 33, 34, 35, 36, 37, 40, 41, 42, 43, 101]

  return ids[[Math.floor(Math.random() * ids.length) + 0]]
}

const accidents_factors = [...Array(100)].map((af,index) => (
  {
    accident_id: index + 1,
    factor_id: randomFactorID()
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('accidents_factors', accidents_factors, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('accidents_factors', null, {})
  }
}
