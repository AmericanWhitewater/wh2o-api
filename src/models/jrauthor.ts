/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('jrauthor', {
    artid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    authorlast: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    authorfirst: {
      type: 'BYTEA',
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'jrauthor',
    schema: 'wh2o'
  })
}
