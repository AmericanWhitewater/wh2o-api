'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class languages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  languages.init({
    language: DataTypes.STRING,
    key: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'languages'
  })
  return languages
}
