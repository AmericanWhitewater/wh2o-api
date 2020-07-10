/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('geo_regions', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'region code',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_aw: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: 'is this an aw sanctioned region or other'
    }
  }, {
    sequelize,
    tableName: 'geo_regions',
    schema: 'public'
  });
};
