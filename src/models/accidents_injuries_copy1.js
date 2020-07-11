/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accidents_injuries_copy1', {
    accident_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    injury_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'accidents_injuries_copy1',
    schema: 'public'
  });
};
