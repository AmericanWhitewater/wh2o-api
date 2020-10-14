/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('users', {
    uid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: 'user id',
      primaryKey: true,
      autoIncrement: true
    },
    uname: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'user name'
    },
    upass: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'user password'
    },
    verifydate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: 'when the user\'s email address was last verified (exempt if members, otherwise should be every three months)'
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
    lastlogin: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'when they last logged in'
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
      allowNull: true,
      comment: 'eTap Acct#'
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
      comment: 'FLAG:bad address flag from eTap'
    },
    bad_email: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'FLAG:bad email flag from eTap'
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
      comment: 'person\'s name'
    },
    mem_transaction: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'membership gift xaction #'
    },
    transaction_id: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'donation gift xaction #'
    },
    expiration: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: DataTypes.DATE
    },
    modifydate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'when the record was modified'
    },
    pushdate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'when this field was pushed.'
    },
    mbr_relation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prefs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    annual_renew: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0',
      comment: 'annual renewal flag, prevents warning user too early'
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    googleid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    socialprofile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facebookid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    epassword: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL',
      comment: 'encrypted password.'
    },
    remember_token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'wh2o'
  })
}
