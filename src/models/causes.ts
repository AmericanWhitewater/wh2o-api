/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('causes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cause: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'causes',
    schema: 'public'
  })
}
