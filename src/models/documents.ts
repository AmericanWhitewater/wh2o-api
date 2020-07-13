/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('documents', {
    documentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shortname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abstract: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    uid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    keywords: {
      type: DataTypes.STRING,
      allowNull: false
    },
    editdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    recipient: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    author: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    document: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    document_size: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'documents',
    schema: 'wh2o'
  })
}
