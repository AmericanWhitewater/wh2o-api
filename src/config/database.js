const { Sequelize, DataTypes } = require('sequelize')

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD
} = process.env

let pgClient
async function initDBConnection () {
  console.log('Initializing database connection...')
  let dbConnection = false
  while (!dbConnection) {
    try {
      pgClient = new Sequelize(`postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`,
        {
          // https://sequelize.org/master/manual/getting-started.html#logging
          // logging: console.log,
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
