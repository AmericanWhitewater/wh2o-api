/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('affiliates', {
    last: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    conemail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    members: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    contact: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    abstract: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reaches: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    volunteer: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    expiration: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: '0'
    },
    memberid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    sequelize,
    tableName: 'affiliates',
    schema: 'wh2o'
  })
}
