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
      defaultValue: "nextval('public'.'rapids_rapidid_seq')",
      comment: 'rapid id in reach'
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false,
      comment: 'name of rapid\/POI'
    },
    distance: {
      type: DataTypes.REAL,
      allowNull: false,
      comment: 'how far down the river'
    },
    difficulty: {
      type: DataTypes.STRING(4),
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
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    istakeout: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    isaccess: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    isportage: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    ishazard: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    iswaterfall: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    isplayspot: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    rlat: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    rlon: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
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
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    is_final: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'rapids',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: 'rapids_idx',
        fields: [
          { name: 'rapidid' }
        ]
      },
      {
        name: 'rapids_pkey',
        unique: true,
        fields: [
          { name: 'revision' }
        ]
      }
    ]
  })
}
