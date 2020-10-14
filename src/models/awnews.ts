/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('awnews', {
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
    tableName: 'awnews',
    schema: 'wh2o'
  })
}
