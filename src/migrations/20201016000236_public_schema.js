const { pgClient } = require('../config')

module.exports = {
  up: async function (queryInterface, Sequelize) {
    pgClient.createSchema('public').then(() => {
      console.log('schema public created')
    }).catch(err => {
      console.log('err :>> ', err)
    })
  },
  down: async function (queryInterface, Sequelize) {
    pgClient.dropSchema('public').then(() => {
      console.log('schema public removed')
    }).catch(err => {
      console.log('err :>> ', err)
    })
  },
}
