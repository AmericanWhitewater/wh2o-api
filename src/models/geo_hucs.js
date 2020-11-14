/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('geo_hucs', {
    id: {
      type: DataTypes.STRING(8),
      allowNull: false,
      comment: "huc8 code",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: true,
      comment: "name of huc"
    },
    river_census: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "last count of the number of reaches found in this huc from our database (runs periodically)"
    },
    last_river_census: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "last run of river census probably run sometime in 2008 and never updated."
    }
  }, {
    sequelize,
    tableName: 'geo_hucs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "geo_hucs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
