/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('gis_states', {
    gid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fips_admin: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    gmi_admin: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    admin_name: {
      type: DataTypes.STRING(42),
      allowNull: true
    },
    fips_cntry: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    gmi_cntry: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    cntry_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    pop_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type_eng: {
      type: DataTypes.STRING(26),
      allowNull: true
    },
    type_loc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sqkm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sqmi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    color_map: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    the_geom: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gis_states',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "fips_state",
        fields: [
          { name: "fips_admin" },
        ]
      },
      {
        name: "gis_states_pkey",
        unique: true,
        fields: [
          { name: "gid" },
        ]
      },
      {
        name: "gmi_admin",
        fields: [
          { name: "gmi_admin" },
        ]
      },
      {
        name: "spacial",
        fields: [
          { name: "the_geom" },
        ]
      },
    ]
  });
};
