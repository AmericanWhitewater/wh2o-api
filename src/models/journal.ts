/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('journal', {
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
    endpage: {
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
    },
    scanner_uid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    pdfsize: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    forpublic: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'journal',
    schema: 'wh2o'
  })
}
