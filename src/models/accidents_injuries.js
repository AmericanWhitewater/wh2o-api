/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accidents_injuries', {
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
    tableName: 'accidents_injuries',
    schema: 'public'
  });
};
