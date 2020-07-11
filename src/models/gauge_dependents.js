/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gauge_dependents', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'dependent id',
      primaryKey: true,
      autoIncrement: true
    },
    min: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: 'for corrolation (not virtual gauge) what is the cutoff'
    },
    max: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: 'for corrolation (not virtual gauge) what is the maximum'
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0",
      comment: 'owner of the corrolation'
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: 'if this rule is deleted.'
    },
    perfect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: 'if we have hit perfection'
    },
    important: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: 'must read corresponding note.'
    },
    range_min: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: "M0",
      comment: 'Lowest and Highest Range this covers'
    },
    range_max: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: "M9",
      comment: 'Highest Range'
    },
    adjusted_reach_class: {
      type: DataTypes.ENUM("none","I","I(II)","I(III)","I(IV)","I(V)","I(V+)","I-II","I-II(III)","I-II(IV)","I-II(V)","I-II(V+)","II","II(III)","II(IV)","II(V)","II(V+)","I-II+(III)","I-II+(IV)","I-II+(V)","I-II+(V+)","II+","II+(III)","II+(IV)","II+(V)","II+(V+)","I-III","I-III(IV)","I-III(V)","I-III(V+)","II-III","II-III(IV)","II-III(V)","II-III(V+)","III","I-III+","I-III+(IV)","I-III+(V)","I-III+(V+)","II-III+","II-III+(IV)","II-III+(V)","II-III+(V+)","III+","III+(IV)","III+(V)","III+(V+)","I-IV","I-IV(V)","I-IV(V+)","II-IV","II-IV(V)","II-IV(V+)","III-IV","III-IV(V)","III-IV(V+)","IV","IV(V)","IV(V+)","I-IV+","I-IV+(V)","I-IV+(V+)","II-IV+","II-IV+(V)","II-IV+(V+)","III-IV+","III-IV+(V)","III-IV+(V+)","IV+","I-V","I-V(V+)","II-V","II-V(V+)","III-V","III-V(V+)","IV-V","IV-V(V+)","V","II-V+","III-V+","IV-V+","V+"),
      allowNull: true,
      comment: 'new adjusted reach class'
    },
    range_comment: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "NULL",
      comment: 'comment for the range defined'
    },
    ghid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'header id'
    }
  }, {
    sequelize,
    tableName: 'gauge_dependents',
    schema: 'public'
  });
};
