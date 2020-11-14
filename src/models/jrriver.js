/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('jrriver', {
    artid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    theriver: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'jrriver',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jrriver_pkey",
        unique: true,
        fields: [
          { name: "artid" },
          { name: "theriver" },
        ]
      },
    ]
  });
};
