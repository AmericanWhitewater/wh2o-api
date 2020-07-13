/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('comments', {
    uid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      comment: 'user id that made the comment'
    },
    sectionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      comment: 'id of object from the section'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'name of the person that commented (depricated)'
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'comment text'
    },
    posted: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'posted date'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 'nextval(comments_id_seq::regclass)',
      comment: 'comment ID'
    },
    section: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'river',
      comment: 'section this applies to (river,photo,journal)'
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'comment',
      comment: 'type of comment (warning,complaint,comment)'
    },
    deleted: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'Deleted timestamp'
    },
    duid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: 'Deleted UID '
    },
    revision: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: 'Revision #',
      primaryKey: true,
      autoIncrement: true
    },
    is_final: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: 'Is this the final comment (vs. some old revision)'
    },
    is_private: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: 'Is this a private comment?'
    }
  }, {
    sequelize,
    tableName: 'comments',
    schema: 'wh2o'
  })
}
