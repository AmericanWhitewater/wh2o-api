/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('jrscans', {
    artid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    pdfsize: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    forpublic: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jrscans',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jrscans_pkey",
        unique: true,
        fields: [
          { name: "artid" },
        ]
      },
    ]
  });
};
