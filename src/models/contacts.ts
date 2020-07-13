/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('contacts', {
    uid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0'
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    position: {
      type: DataTypes.STRING,
      allowNull: true
    },
    territory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country_code: {
      type: DataTypes.CHAR(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'contacts',
    schema: 'wh2o'
  })
}
