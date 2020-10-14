/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('jrpeople', {
    artid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    peoplelast: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    peoplefirst: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jrpeople',
    schema: 'wh2o'
  })
}
