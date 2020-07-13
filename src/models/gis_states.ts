/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('gis_states', {
    gid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fips_admin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gmi_admin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    admin_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fips_cntry: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gmi_cntry: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cntry_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pop_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type_eng: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type_loc: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: true
    },
    the_geom: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gis_states',
    schema: 'public'
  })
}
