const { pgClient, DataTypes } = require('../config')

const modelsList = []

let normalizedPath = require('path').join(__dirname, '.')

require('fs').readdirSync(normalizedPath).forEach(function (file, index) {

  let moduleName = file.replace('.js', '')

  moduleName = moduleName.replace('.ts', '')

  const moduleFunction = require(`./${moduleName}`)

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
