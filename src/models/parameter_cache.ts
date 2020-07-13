/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('parameter_cache', {
    key: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'parameter_cache',
    schema: 'wh2o'
  })
}
