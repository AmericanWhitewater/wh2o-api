const { Sequelize, DataTypes } = require('sequelize')
const database = process.env.POSTGRES_DB || 'wh2o'
const host = process.env.POSTGRES_HOST || 'localhost'
const port = Number(process.env.POSTGRES_PORT) || 35432
const user = process.env.POSTGRES_USER || 'wh2o'
const pass = process.env.POSTGRES_PASSWORD || 'wh2o'

if (!pass || !user) {
  console.log('missing credentials')
  process.exit()
}

let pgClient
async function initDBConnection () {
  console.log('Initializing database connection...')
  let dbConnection = false
  while (!dbConnection) {
    try {
      pgClient = new Sequelize(
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

      await pgClient.authenticate()
      dbConnection = true
      console.log('✅ Database connection established.')
    } catch {
      console.error('🚫 Error connecting to database, retrying in 1 second...')
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
}

initDBConnection()

module.exports = { pgClient, DataTypes }
