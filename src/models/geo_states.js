/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('geo_states', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: DataTypes.INTEGER,
      primaryKey: true
    },
    gmi: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    fips: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    shortkey: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    fips_country: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    aw_region: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "aw's region code."
    }
  }, {
    sequelize,
    tableName: 'geo_states',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "2digitstate",
        unique: true,
        fields: [
          { name: "shortkey" },
        ]
      },
      {
        name: "country",
        fields: [
          { name: "fips_country" },
        ]
      },
      {
        name: "geo_states_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "gmi_index",
        fields: [
          { name: "gmi" },
        ]
      },
    ]
  });
};
