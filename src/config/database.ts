import { Sequelize, DataTypes } from 'sequelize'

const database = process.env.POSTGRES_DB || 'db'
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
      timestamps: false,
      hooks: {
        beforeCreate () {
          console.log('creating table')
        }
      }
    }
  }
)

async function verifyDbConnection () {
  try {
    await pgClient.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    process.exit()
  }
}

verifyDbConnection()

export = { pgClient, Sequelize, DataTypes }
