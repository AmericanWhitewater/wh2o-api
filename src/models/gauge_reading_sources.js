/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('gauge_reading_sources', {
    description: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "source description"
    },
    shortkey: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      comment: "source id."
    },
    id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'gauge_reading_sources',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "gauge_reading_sources_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
