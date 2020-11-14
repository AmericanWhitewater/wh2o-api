/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('gauge_personal_settings', {
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "uid of person's gauge settings",
      primaryKey: true
    },
    starttime: {
      type: DataTypes.TIME,
      allowNull: true,
      comment: 'min time to notify'
    },
    endtime: {
      type: DataTypes.TIME,
      allowNull: true,
      comment: 'max time to notify'
    },
    tz: {
      type: DataTypes.STRING(60),
      allowNull: true,
      comment: DataTypes.TIME
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: 'email of person'
    },
    format: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: '0=normal\r\n1=pager'
    }
  }, {
    sequelize,
    tableName: 'gauge_personal_settings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'gauge_personal_settings_pkey',
        unique: true,
        fields: [
          { name: 'uid' }
        ]
      }
    ]
  })
}
