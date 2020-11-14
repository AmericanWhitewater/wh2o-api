/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('geo_regions', {
    id: {
      type: DataTypes.STRING(2),
      allowNull: false,
      comment: "region code",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    is_aw: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "is this an aw sanctioned region or other"
    }
  }, {
    sequelize,
    tableName: 'geo_regions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "geo_regions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
