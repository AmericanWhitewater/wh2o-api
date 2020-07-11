/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('injuries', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    injury: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'injuries',
    schema: 'public'
  });
};
