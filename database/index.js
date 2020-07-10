

const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const database = process.env.POSTGRES_DB
const host = process.env.POSTGRES_HOST
const username = process.env.POSTGRES_USER
const pass = process.env.POSTGRES_PASSWORD

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