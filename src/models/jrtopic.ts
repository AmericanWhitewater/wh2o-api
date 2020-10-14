/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('jrtopic', {
    uniqueid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    artid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    topic: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    primarytop: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jrtopic',
    schema: 'wh2o'
  })
}
