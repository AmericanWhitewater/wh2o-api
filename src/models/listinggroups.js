/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('listinggroups', {
    lgid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    listing: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    area: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    inviteonly: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    isrecruiting: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    volunteerpageuntil: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    maxvolunteer: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    shoulddescribe: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    showvolunteers: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'listinggroups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'lgid',
        fields: [
          { name: 'lgid' }
        ]
      },
      {
        name: 'listing',
        unique: true,
        fields: [
          { name: 'listing' },
          { name: 'area' }
        ]
      },
      {
        name: 'listinggroups_pkey',
        unique: true,
        fields: [
          { name: 'lgid' }
        ]
      }
    ]
  })
}
