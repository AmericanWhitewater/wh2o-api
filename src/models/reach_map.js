/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('reach_map', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    river: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    section: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tlat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tlon: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    skid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    class: {
      type: DataTypes.ENUM('none','I','I(II)','I(III)','I(IV)','I(V)','I(V+)','I-II','I-II(III)','I-II(IV)','I-II(V)','I-II(V+)','II','II(III)','II(IV)','II(V)','II(V+)','I-II+(III)','I-II+(IV)','I-II+(V)','I-II+(V+)','II+','II+(III)','II+(IV)','II+(V)','II+(V+)','I-III','I-III(IV)','I-III(V)','I-III(V+)','II-III','II-III(IV)','II-III(V)','II-III(V+)','III','I-III+','I-III+(IV)','I-III+(V)','I-III+(V+)','II-III+','II-III+(IV)','II-III+(V)','II-III+(V+)','III+','III+(IV)','III+(V)','III+(V+)','I-IV','I-IV(V)','I-IV(V+)','II-IV','II-IV(V)','II-IV(V+)','III-IV','III-IV(V)','III-IV(V+)','IV','IV(V)','IV(V+)','I-IV+','I-IV+(V)','I-IV+(V+)','II-IV+','II-IV+(V)','II-IV+(V+)','III-IV+','III-IV+(V)','III-IV+(V+)','IV+','I-V','I-V(V+)','II-V','II-V(V+)','III-V','III-V(V+)','IV-V','IV-V(V+)','V','II-V+','III-V+','IV-V+','V+'),
      allowNull: true
    },
    abstract: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    updated: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    reading: {
      type: DataTypes.REAL,
      allowNull: true
    },
    gauge_min: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    gauge_max: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    gauge_metric: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    obs_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gauge_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gauge_reading: {
      type: DataTypes.REAL,
      allowNull: true
    },
    last_gauge_reading: {
      type: DataTypes.REAL,
      allowNull: true
    },
    last_gauge_updated: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    gauge_comment: {
      type: DataTypes.STRING(160),
      allowNull: true
    },
    gauge_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    river_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_journal_update: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tloc: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    },
    ploc: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    adjusted_reach_class: {
      type: DataTypes.ENUM('none','I','I(II)','I(III)','I(IV)','I(V)','I(V+)','I-II','I-II(III)','I-II(IV)','I-II(V)','I-II(V+)','II','II(III)','II(IV)','II(V)','II(V+)','I-II+(III)','I-II+(IV)','I-II+(V)','I-II+(V+)','II+','II+(III)','II+(IV)','II+(V)','II+(V+)','I-III','I-III(IV)','I-III(V)','I-III(V+)','II-III','II-III(IV)','II-III(V)','II-III(V+)','III','I-III+','I-III+(IV)','I-III+(V)','I-III+(V+)','II-III+','II-III+(IV)','II-III+(V)','II-III+(V+)','III+','III+(IV)','III+(V)','III+(V+)','I-IV','I-IV(V)','I-IV(V+)','II-IV','II-IV(V)','II-IV(V+)','III-IV','III-IV(V)','III-IV(V+)','IV','IV(V)','IV(V+)','I-IV+','I-IV+(V)','I-IV+(V+)','II-IV+','II-IV+(V)','II-IV+(V+)','III-IV+','III-IV+(V)','III-IV+(V+)','IV+','I-V','I-V(V+)','II-V','II-V(V+)','III-V','III-V(V+)','IV-V','IV-V(V+)','V','II-V+','III-V+','IV-V+','V+'),
      allowNull: true
    },
    gauge_important: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    gauge_estimated: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    gauge_perfect: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    range_comment: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reach_map',
    schema: 'public',
    timestamps: false
  })
}
