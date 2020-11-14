/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('event_dates', {
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextVal(event_dateseq::regclass)'
    },
    evdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    detail_description: {
      type: DataTypes.STRING(240),
      allowNull: true,
      defaultValue: 'NULL'
    },
    batchid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextVal(event_dateseq::regclass)'
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
      type: DataTypes.STRING(3),
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
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    ed_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'event_dates',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'basic',
        fields: [
          { name: 'event_id' },
          { name: 'evdate' },
          { name: 'deleted' }
        ]
      },
      {
        name: 'event_dates_pkey',
        unique: true,
        fields: [
          { name: 'ed_id' }
        ]
      }
    ]
  })
}
