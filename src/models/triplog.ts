/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('triplog', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    state: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    rivername: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reachid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    datetaken: {
      type: DataTypes.STRING,
      allowNull: true
    },
    level: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    observation: {
      type: DataTypes.REAL,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    obs_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reading: {
      type: DataTypes.REAL,
      allowNull: true,
      comment: 'gauge based-reading'
    },
    gaugeid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'gauge being updated.'
    },
    metric: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'gauge metric reported.'
    },
    edit_option: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0",
      comment: 'last photo count, should be updated in code by photo uploads.'
    }
  }, {
    sequelize,
    tableName: 'triplog',
    schema: 'public',
    hasTrigger: true
  });
};
