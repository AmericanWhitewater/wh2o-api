/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('contacts', {
    uid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    state: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    contactid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    lname: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    fname: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING(24),
      allowNull: false,
      defaultValue: '0'
    },
    company: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ''
    },
    position: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    territory: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ''
    },
    country_code: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: 'us'
    }
  }, {
    sequelize,
    tableName: 'contacts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'compdx',
        fields: [
          { name: 'company' }
        ]
      },
      {
        name: 'contacts_pkey',
        unique: true,
        fields: [
          { name: 'contactid' }
        ]
      },
      {
        name: 'emaildx',
        fields: [
          { name: 'email' }
        ]
      },
      {
        name: 'name_simpledx',
        fields: [
          { name: 'name' }
        ]
      },
      {
        name: 'nameidx2',
        fields: [
          { name: 'name' },
          { name: 'lname' },
          { name: 'fname' }
        ]
      },
      {
        name: 'uididx2',
        unique: true,
        fields: [
          { name: 'uid' }
        ]
      }
    ]
  })
}
