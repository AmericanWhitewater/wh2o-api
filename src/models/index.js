const { pgClient, DataTypes } = require('../config')

const modelsList = []

let normalizedPath = require('path').join(__dirname, '.')

require('fs').readdirSync(normalizedPath).forEach(file => {
  const moduleFunction = require(`./${file.replace('.js', '')}`)

  if (typeof moduleFunction === 'function') {
    modelsList.push(moduleFunction)
  }
})

for (const modelItem of modelsList) {
  modelItem(pgClient, DataTypes)
}

module.exports = {
  sequelize: pgClient
}
