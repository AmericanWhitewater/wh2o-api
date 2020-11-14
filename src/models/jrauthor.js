/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('jrauthor', {
    artid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    authorlast: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    authorfirst: {
      type: 'BYTEA',
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'jrauthor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'jrauthor_pkey',
        unique: true,
        fields: [
          { name: 'artid' },
          { name: 'authorlast' },
          { name: 'authorfirst' }
        ]
      }
    ]
  })
}
