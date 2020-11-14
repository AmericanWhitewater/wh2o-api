/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('members', {
    uname: {
      type: DataTypes.CHAR(15),
      allowNull: true,
      comment: 'user name'
    },
    email: {
      type: DataTypes.STRING(120),
      allowNull: true,
      comment: 'email address'
    },
    zip: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: 'zip code'
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'first line of address'
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: 'city name'
    },
    state: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      comment: 'state name'
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: 'country code'
    },
    volunteer: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: 'are they willing to volunteer'
    },
    alerts: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: 'PREF: Want web alerts?'
    },
    postal: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: 'PREF: Trade Postal Address?'
    },
    memnum: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: 'eTap Acct#',
      primaryKey: true
    },
    address2: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: 'Address 2'
    },
    home_phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: 'Home Phone'
    },
    work_phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: 'Work Phone'
    },
    journal: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: 'PREF: Deliver Journal?'
    },
    aw_beta: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: 'PREF: Subscribe to AW_Beta'
    },
    mbr_level: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    bad_addr: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: 'bad address flag from eTap'
    },
    bad_email: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: 'bad email flag from eTap'
    },
    mod_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'modified on '
    },
    record_type: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: 'is this a business, organizaiton or something else (3)'
    },
    name: {
      type: DataTypes.STRING(85),
      allowNull: true,
      comment: "person's name"
    },
    expiration: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: DataTypes.DATE
    },
    mbr_relation: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    annual_renew: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: 'annual renewal flag, prevents warning user too early'
    }
  }, {
    sequelize,
    tableName: 'members',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'members_pkey',
        unique: true,
        fields: [
          { name: 'memnum' }
        ]
      },
      {
        name: 'uname',
        fields: [
          { name: 'uname' }
        ]
      }
    ]
  })
}
