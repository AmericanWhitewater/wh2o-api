/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('awalerts', {
    articleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    expiration: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    priority: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    sequelize,
    tableName: 'awalerts',
    schema: 'wh2o'
  })
}
