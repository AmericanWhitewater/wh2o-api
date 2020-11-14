/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('gis_hucs', {
    gid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    area: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    perimeter: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ooo_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ooo_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    huc_code: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    huc_name: {
      type: DataTypes.STRING(39),
      allowNull: true
    },
    reg: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    sub: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    acc: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    cat: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    the_geom: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gis_hucs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'gis_hucs_pkey',
        unique: true,
        fields: [
          { name: 'gid' }
        ]
      },
      {
        name: 'gis_hucs_the_geom_gist',
        fields: [
          { name: 'the_geom' }
        ]
      }
    ]
  })
}
