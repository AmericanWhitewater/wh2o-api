/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('pg_ts_cfg', {
    ts_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    prs_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    locale: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pg_ts_cfg',
    schema: 'public'
  })
}
