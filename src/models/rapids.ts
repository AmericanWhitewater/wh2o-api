/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('rapids', {
    reachid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'reach it belongs to'
    },
    rapidid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "nextval('\"public\".\"rapids_rapidid_seq\"'::text::regclass)",
      comment: 'rapid id in reach'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'name of rapid/POI'
    },
    distance: {
      type: DataTypes.REAL,
      allowNull: false,
      comment: 'how far down the river'
    },
    difficulty: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'difficulty (if it is a rapid)'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'description of the rapid'
    },
    photoid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'photo '
    },
    videoid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'video'
    },
    isputin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    istakeout: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isaccess: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isportage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ishazard: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iswaterfall: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isplayspot: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rlat: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '0'
    },
    rlon: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '0'
    },
    approximate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: 'is this an estimated location'
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: 'true if deleted. '
    },
    rloc: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    },
    revision: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    is_final: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('NOW')
    }
  }, {
    sequelize,
    tableName: 'rapids',
    schema: 'public',
    hasTrigger: true
  })
}
