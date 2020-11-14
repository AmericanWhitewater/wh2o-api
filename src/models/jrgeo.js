/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('jrgeo', {
    artid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    geoloc: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'jrgeo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'jrgeo_pkey',
        unique: true,
        fields: [
          { name: 'artid' },
          { name: 'geoloc' }
        ]
      }
    ]
  })
}
