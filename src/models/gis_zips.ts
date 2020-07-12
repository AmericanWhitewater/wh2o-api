/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gis_zips', {
    gid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    po_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    area: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sumblkpop: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pop2000: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    the_geom: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gis_zips',
    schema: 'public'
  });
};
