/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('accidents_causes', {
    accident_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cause_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'accidents_causes',
    schema: 'public'
  })
}
