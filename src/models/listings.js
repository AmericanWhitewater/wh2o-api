/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('listings', {
    listing: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    arealookup: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    public: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    deleted: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'listings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'listings_pkey',
        unique: true,
        fields: [
          { name: 'listing' }
        ]
      }
    ]
  })
}
