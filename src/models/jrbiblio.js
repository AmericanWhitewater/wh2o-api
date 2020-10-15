/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('jrbiblio', {
    artid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    arttitle: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    artdate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    startpage: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    volume: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    issuenumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    issueyear: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    sequelize,
    tableName: 'jrbiblio',
    schema: 'wh2o'
  })
}
