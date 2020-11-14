/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('contactheader', {
    listing: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    area: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    contactid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    sortid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    mailingexempt: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    manager: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    candisplay: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'contactheader',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'contactheader_pkey',
        unique: true,
        fields: [
          { name: 'listing' },
          { name: 'area' },
          { name: 'contactid' }
        ]
      },
      {
        name: 'contactid',
        fields: [
          { name: 'contactid' }
        ]
      },
      {
        name: 'sortid',
        fields: [
          { name: 'sortid' }
        ]
      },
      {
        name: 'title',
        fields: [
          { name: 'title' }
        ]
      }
    ]
  })
}
