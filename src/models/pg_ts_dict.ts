/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('pg_ts_dict', {
    dict_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    dict_init: {
      type: 'REGPROCEDURE',
      allowNull: true
    },
    dict_initoption: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dict_lexize: {
      type: 'REGPROCEDURE',
      allowNull: false
    },
    dict_comment: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pg_ts_dict',
    schema: 'public'
  })
}
