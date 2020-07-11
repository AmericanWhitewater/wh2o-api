/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jrstats', {
    issueyear: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    artdate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    issuenumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    scanned_pdfs: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0"
    },
    total_articles: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0"
    },
    pages: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    offset: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'jrstats',
    schema: 'wh2o'
  });
};
