/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('linker_sources', {
    source: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    target: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    params: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    position: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'linker_sources',
    schema: 'wh2o'
  })
}
