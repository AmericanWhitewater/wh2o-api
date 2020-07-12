/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jrscans', {
    artid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    pdfsize: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    forpublic: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jrscans',
    schema: 'wh2o'
  });
};
