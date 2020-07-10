const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes
const database = 'wh2o'
const host = 'wh2o.clourdmiyl6j.us-west-1.rds.amazonaws.com'
const username = 'wh2o'
const pass = 'wh2o2020'

const pgClient = new Sequelize(
  database,
  username,
  pass,
  {
    host,
    dialect: 'postgres',
    define: {
      freezeTableName: true,
      timestamps: false
    }
  }
)


module.exports = { pgClient, Sequelize, DataTypes }