/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gis_hucs', {
    gid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
      type: DataTypes.STRING,
      allowNull: true
    },
    huc_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sub: {
      type: DataTypes.STRING,
      allowNull: true
    },
    acc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    the_geom: {
      type: DataTypes.ENUM(),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gis_hucs',
    schema: 'public'
  });
};
