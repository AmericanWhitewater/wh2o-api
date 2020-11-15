const { pgClient } = require('../config')

module.exports = {
  up: async function (queryInterface, Sequelize) {
    pgClient.createSchema('wh2o').then(() => {
      console.log('schema wh2o created')
    }).catch(err => {
      console.log('err :>> ', err)
    })
  },
  down: async function (queryInterface, Sequelize) {
    pgClient.dropSchema('wh2o').then(() => {
      console.log('schema wh2o removed')
    }).catch(err => {
      console.log('err :>> ', err)
    })
  },
}
