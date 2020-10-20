
const affiliates_reaches = [...Array(100)].map((ai, index) => (
  {
    affiliateid: index + 1,
    reachid: index + 1
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('affiliates_reaches', affiliates_reaches, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('affiliates_reaches', null, {})
  }
}
