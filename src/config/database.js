
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const database = process.env.POSTGRES_DB || 'db'
const host = process.env.POSTGRES_HOST || 'localhost'
const user = process.env.POSTGRES_USER
const pass = process.env.POSTGRES_PASSWORD

if (!pass || !user) {
  console.error('missing credentials')
  process.exit()
}

console.log(`--\n\nHOST: ${host}\n\n--`)

const pgClient = new Sequelize(
  database,
  user,
  pass,
  {
    host,
    dialect: 'postgres',
    logging: false,
    define: {
      freezeTableName: true,
      timestamps: false,
      hooks: {
        beforeCreate () {
          console.log('creating table')
        }
      }
    }
  }
)

module.exports = { pgClient, Sequelize, DataTypes }
