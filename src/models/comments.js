/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('comments', {
    uid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "user id that made the comment"
    },
    sectionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "id of object from the section"
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "name of the person that commented (deprecated)"
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: DataTypes.TEXT
    },
    posted: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "posted date"
    },
    id: {
      type: DataTypes.BIGINT,
      comment: 'comment ID',
      primaryKey: true,
      autoIncrement: true
    },
    section: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: "river",
      comment: "section this applies to (river,photo,journal)"
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "comment",
      comment: "type of comment (warning,complaint,comment)"
    },
    deleted: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Deleted timestamp"
    },
    duid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Deleted UID "
    },
    revision: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Revision #",
    },
    is_final: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "Is this the final comment (vs. some old revision)"
    },
    is_private: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "Is this a private comment?"
    }
  }, {
    sequelize,
    tableName: 'comments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "comments_pkey",
        unique: true,
        fields: [
          { name: "revision" },
        ]
      },
      {
        name: "id_sec_type",
        fields: [
          { name: "section" },
          { name: "type" },
          { name: "sectionid" },
        ]
      },
    ]
  });
};
