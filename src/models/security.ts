/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('security', {
    domain: {
      type: DataTypes.STRING,
      allowNull: false
    },
    action: {
      type: DataTypes.STRING,
      allowNull: true
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize,
    tableName: 'security',
    schema: 'wh2o'
  })
}
