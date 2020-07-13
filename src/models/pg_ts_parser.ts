/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('pg_ts_parser', {
    prs_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    prs_start: {
      type: 'REGPROCEDURE',
      allowNull: false
    },
    prs_nexttoken: {
      type: 'REGPROCEDURE',
      allowNull: false
    },
    prs_end: {
      type: 'REGPROCEDURE',
      allowNull: false
    },
    prs_headline: {
      type: 'REGPROCEDURE',
      allowNull: false
    },
    prs_lextype: {
      type: 'REGPROCEDURE',
      allowNull: false
    },
    prs_comment: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pg_ts_parser',
    schema: 'public'
  })
}
