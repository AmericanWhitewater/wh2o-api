/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_dates', {
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "nextval(event_dateseq::regclass)"
    },
    evdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    detail_description: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "NULL"
    },
    batchid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "nextval(event_datesbidseq::regclass)"
    },
    starttime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    endtime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    tz: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mincfs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxcfs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ed_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "nextval(event_dateseq::regclass)",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'event_dates',
    schema: 'public'
  });
};
