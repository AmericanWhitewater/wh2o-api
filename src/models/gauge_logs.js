/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('gauge_logs', {
    recorded: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: DataTypes.DATE
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    message_type: {
      type: DataTypes.STRING(60),
      allowNull: true,
      comment: 'The type of error.'
    },
    message: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: 'The message in human readable form'
    },
    source: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: 'the component of the gauge system that had a problem'
    },
    data: {
      type: DataTypes.STRING(512),
      allowNull: true,
      comment: 'additional data provided.'
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'warning level, the higher the worse'
    },
    source_id: {
      type: DataTypes.STRING(25),
      allowNull: true,
      defaultValue: '0',
      comment: 'the item that caused the warning. 0 means nothing caused the warning in particular'
    },
    write_sequence: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'indicates what write sequence we are on'
    }
  }, {
    sequelize,
    tableName: 'gauge_logs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'gauge_logs_pkey',
        unique: true,
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })
}
