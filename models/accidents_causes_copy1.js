/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accidents_causes_copy1', {
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
    tableName: 'accidents_causes_copy1',
    schema: 'public'
  });
};
