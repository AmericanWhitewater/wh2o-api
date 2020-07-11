/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('members', {
    uname: {
      type: DataTypes.CHAR(15),
      allowNull: true,
      comment: 'user name'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'email address'
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'zip code'
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'first line of address'
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'city name'
    },
    state: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: 'state name'
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'country code'
    },
    volunteer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'are they willing to volunteer'
    },
    alerts: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'PREF: Want web alerts?'
    },
    postal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'PREF: Trade Postal Address?'
    },
    memnum: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0",
      comment: 'eTap Acct#',
      primaryKey: true
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Address 2'
    },
    home_phone: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Home Phone'
    },
    work_phone: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Work Phone'
    },
    journal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'PREF: Deliver Journal?'
    },
    aw_beta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'PREF: Subscribe to AW_Beta'
    },
    mbr_level: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bad_addr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'bad address flag from eTap'
    },
    bad_email: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'bad email flag from eTap'
    },
    mod_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'modified on '
    },
    record_type: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'is this a business, organizaiton or something else (3)'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'person's name'
    },
    expiration: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: DataTypes.DATE
    },
    mbr_relation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    annual_renew: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0",
      comment: 'annual renewal flag, prevents warning user too early'
    }
  }, {
    sequelize,
    tableName: 'members',
    schema: 'wh2o'
  });
};
