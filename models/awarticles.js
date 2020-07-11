/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('awarticles', {
    articleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true
    },
    abstract: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    abstractphoto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hascontents: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contentsphoto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: true
    },
    posted: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shortname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    uid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0"
    },
    releasedate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0",
      comment: 'tells if article is deleted'
    }
  }, {
    sequelize,
    tableName: 'awarticles',
    schema: 'wh2o'
  });
};
