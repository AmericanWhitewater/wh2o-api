const {Sequelize, DataTypes} = require('sequelize')
const database = process.env.POSTGRES_DB || 'wh2o'
const host = process.env.POSTGRES_HOST || 'localhost'
const port = Number(process.env.POSTGRES_PORT) || 35432
const user = process.env.POSTGRES_USER || 'wh2o'
const pass = process.env.POSTGRES_PASSWORD || 'wh2o'

if (!pass || !user) {
  console.error('missing credentials')
  process.exit()
}

const pgClient = new Sequelize(
  database,
  user,
  pass,
  {
    host,
    port,
    dialect: 'postgres',
    logging: false,
    define: {
      freezeTableName: true,
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)

async function verifyDbConnection () {
  try {
    await pgClient.authenticate()
    console.log('✅ Database connection established.\n')
    console.log('---------------------------------------------')
  } catch (error) {
    console.error('🚫 Unable to connect to the database:', error, '\n')
    console.log('---------------------------------------------')
    process.exit()
  }
}

verifyDbConnection()

module.exports = { pgClient, DataTypes }
