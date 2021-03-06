/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('reaches', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    river: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    section: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    altname: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    county: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    zipcode: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    length: {
      type: DataTypes.REAL,
      allowNull: true
    },
    avggradient: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxgradient: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    agency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gaugeinfo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    photoid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    permitid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    huc: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    plat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    plon: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    prrn: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tlat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tlon: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    trrn: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    skid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: 'u',
      comment: "'u' = unverified, 'v'=verified, 'd'=deleted"
    },
    edited: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_final: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    revision: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'keeps the revision of the reach record.',
      primaryKey: true
    },
    class: {
      type: DataTypes.ENUM('none', 'I', 'I(II)', 'I(III)', 'I(IV)', 'I(V)', 'I(V+)', 'I-II', 'I-II(III)', 'I-II(IV)', 'I-II(V)', 'I-II(V+)', 'II', 'II(III)', 'II(IV)', 'II(V)', 'II(V+)', 'I-II+(III)', 'I-II+(IV)', 'I-II+(V)', 'I-II+(V+)', 'II+', 'II+(III)', 'II+(IV)', 'II+(V)', 'II+(V+)', 'I-III', 'I-III(IV)', 'I-III(V)', 'I-III(V+)', 'II-III', 'II-III(IV)', 'II-III(V)', 'II-III(V+)', 'III', 'I-III+', 'I-III+(IV)', 'I-III+(V)', 'I-III+(V+)', 'II-III+', 'II-III+(IV)', 'II-III+(V)', 'II-III+(V+)', 'III+', 'III+(IV)', 'III+(V)', 'III+(V+)', 'I-IV', 'I-IV(V)', 'I-IV(V+)', 'II-IV', 'II-IV(V)', 'II-IV(V+)', 'III-IV', 'III-IV(V)', 'III-IV(V+)', 'IV', 'IV(V)', 'IV(V+)', 'I-IV+', 'I-IV+(V)', 'I-IV+(V+)', 'II-IV+', 'II-IV+(V)', 'II-IV+(V+)', 'III-IV+', 'III-IV+(V)', 'III-IV+(V+)', 'IV+', 'I-V', 'I-V(V+)', 'II-V', 'II-V(V+)', 'III-V', 'III-V(V+)', 'IV-V', 'IV-V(V+)', 'V', 'II-V+', 'III-V+', 'IV-V+', 'V+'),
      allowNull: false,
      comment: 'class of the river'
    },
    ploc: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    },
    tloc: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    },
    was_final: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "tells us if the river was ever final. this helps us clean up the db when we need to weed this table. We'll keep was_finals but nuke never was_finals."
    },
    thumboverride: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: 'tells if we override the medium-resolution photo on the river description.'
    },
    shuttledetails: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'text description of the shuttle'
    },
    abstract: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'short description of the river.'
    },
    direction_default: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '0=none, 1= shuttle 2=to home'
    },
    custom_destination: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'google directions routing if you need it.'
    },
    revision_comment: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: 'when a new river is published this provides a short description of why'
    },
    permiturl: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'provides the url for the permit information'
    },
    permitinfo: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'provides a description of the permit process.'
    },
    image_override: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: DataTypes.JSON
    },
    geom: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reaches',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: 'only_one_final',
        unique: true,
        fields: [
          { name: 'id' },
          { name: 'is_final' }
        ]
      },
      {
        name: 'reach_name',
        fields: [
        ]
      },
      {
        name: 'reaches_pkey',
        unique: true,
        fields: [
          { name: 'revision' }
        ]
      },
      {
        name: 'reachgeometry',
        fields: [
          { name: 'ploc' },
          { name: 'tloc' }
        ]
      }
    ]
  })
}
