/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('listinggroups', {
    lgid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    listing: {
      type: DataTypes.STRING,
      allowNull: false
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inviteonly: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    isrecruiting: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    volunteerpageuntil: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    maxvolunteer: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    shoulddescribe: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    showvolunteers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    sequelize,
    tableName: 'listinggroups',
    schema: 'wh2o'
  })
}
