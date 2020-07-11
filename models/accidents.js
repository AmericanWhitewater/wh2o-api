/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accidents', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    accidentdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    victimname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reachid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    countryabbr: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    state: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    river: {
      type: DataTypes.STRING,
      allowNull: true
    },
    section: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    waterlevel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rellevel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    difficulty: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    experience: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    privcomm: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    boattype: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    groupinfo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    numvictims: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    othervictimnames: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cause: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contactname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactphone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactemail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'accidents',
    schema: 'public'
  });
};
