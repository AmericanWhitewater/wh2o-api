/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('contactinstance2contact', {
    instance: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    listing: {
      type: DataTypes.STRING,
      allowNull: false
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'contactinstance2contact',
    schema: 'wh2o'
  })
}
