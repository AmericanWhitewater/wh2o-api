/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('jrtopics', {
    artid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    topic: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'jrtopics',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jrtopics_pkey",
        unique: true,
        fields: [
          { name: "artid" },
          { name: "topic" },
        ]
      },
    ]
  });
};
