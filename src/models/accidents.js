/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reachid: {
      type: DataTypes.SMALLINT,
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    section: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    waterlevel: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    rellevel: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    difficulty: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    age: {
      type: DataTypes.SMALLINT,
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
      type: DataTypes.SMALLINT,
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contactphone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    contactemail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'accidents',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'ndx_accident_accidentdate',
        fields: [
          { name: 'accidentdate' }
        ]
      },
      {
        name: 'ndx_accident_reachid',
        fields: [
          { name: 'reachid' }
        ]
      },
      {
        name: 'ndx_accident_state',
        fields: [
          { name: 'state' }
        ]
      }
    ]
  })
}
