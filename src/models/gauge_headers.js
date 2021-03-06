/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('gauge_headers', {
    state: {
      type: DataTypes.STRING(7),
      allowNull: true,
      comment: 'Administrative District (international states).'
    },
    source: {
      type: DataTypes.STRING(8),
      allowNull: false,
      comment: "look at guage_source\nsample values include 'usgs', 'tva', 'dflows', ...",
      references: {
        model: 'gauge_sources',
        key: 'source'
      },
      unique: 'gauge_header_source_key'
    },
    source_id: {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: 'The immutable ID that the source uses for this gauge.',
      unique: 'gauge_header_source_key'
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'AW ID for the gauge.',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(75),
      allowNull: true,
      comment: 'The display name for the gauge.'
    },
    huc: {
      type: DataTypes.STRING(8),
      allowNull: true,
      comment: 'Grabbed from GIS'
    },
    update_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Update frequency specified in seconds > 0. \n0 = disabled. \n'
    },
    county: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: 'fips code of count \nssccc\nex. 12005'
    },
    glat: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
      comment: 'gauge lat and lon, if specified will update the geometry column. '
    },
    glon: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
      comment: 'see glat'
    },
    update_start_time: {
      type: DataTypes.TIME,
      allowNull: true,
      comment: 'this is the start time when to update the header '
    },
    header_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'The time when the header was last written or replaced. Headers will periodically be replaced or retired.'
    },
    write_sequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'identifies the update batch that created this header. usefull for logging and batch operations.'
    },
    timezone: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'GMT',
      comment: "the timezone (from gnu's time library) for storing date stamps. We normalize all date stamps with this time zone after an update."
    },
    update_user_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: '# of seconds to update the gauge, 0 = ignore, and 1 = 1x\/sec, etc...'
    },
    loc: {
      type: DataTypes.GEOMETRY,
      allowNull: true
    },
    reading_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'when the last reading was sampled. Used to calculate header-based updates.'
    },
    data: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Normally not used, but could contain meta information about the update, or additional fields as required.'
    },
    obs_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'the last recorded time for the reading, facilitates a quick update condition (if currec > reading_rec_time then update observation time )'
    },
    obs_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: 'what was the last observation for this gauge.'
    },
    retired_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_calculated_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'using HUC, what is the calculated update frequency of this gauge. 0=off NULL is no opinion. Others might follow.'
    },
    clean_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'the last date the gauge information was cleaned.'
    },
    local_timezone: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: 'this is the local timezone for the gauge, this is useful for display and formatting.'
    }
  }, {
    sequelize,
    tableName: 'gauge_headers',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: 'gauge_header_source_key',
        unique: true,
        fields: [
          { name: 'source' },
          { name: 'source_id' }
        ]
      },
      {
        name: 'gauge_headers_pkey',
        unique: true,
        fields: [
          { name: 'id' }
        ]
      },
      {
        name: 'gauge_name',
        fields: [
        ]
      },
      {
        name: 'gaugeheader_ix_state',
        fields: [
          { name: 'state' }
        ]
      },
      {
        name: 'geometry',
        fields: [
          { name: 'loc' }
        ]
      }
    ]
  })
}
