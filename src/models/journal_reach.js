/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('journal_reach', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    reachname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    journalid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    state: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    rivername: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    reachid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    datetaken: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    level: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    observation: {
      type: DataTypes.REAL,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    obs_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reading: {
      type: DataTypes.REAL,
      allowNull: true
    },
    gaugeid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    metric: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    updated: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'journal_reach',
    schema: 'public',
    timestamps: false
  });
};
