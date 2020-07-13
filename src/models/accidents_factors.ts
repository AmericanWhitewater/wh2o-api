/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('accidents_factors', {
    accident_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    factor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'accidents_factors',
    schema: 'public'
  })
}
