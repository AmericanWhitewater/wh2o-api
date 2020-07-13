/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('contactheader', {
    listing: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    sortid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    mailingexempt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    manager: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    candisplay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    sequelize,
    tableName: 'contactheader',
    schema: 'wh2o'
  })
}
