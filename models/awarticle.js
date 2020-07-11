/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('awarticle', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'awarticle',
    schema: 'wh2o'
  });
};
