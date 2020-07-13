/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('pg_ts_cfgmap', {
    ts_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    tok_alias: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    dict_name: {
      type: DataTypes.ARRAY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pg_ts_cfgmap',
    schema: 'public'
  })
}
