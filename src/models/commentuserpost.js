"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CommentUserPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CommentUserPost.belongsTo(models.UserPost, {
        foreignKey: "userPostID",
        as: "userPost",
      });
      CommentUserPost.belongsTo(models.User, {
        foreignKey: "userID",
        as: "user",
      });
    }
  }
  CommentUserPost.init(
    {
      content: DataTypes.STRING,
      userPostID: DataTypes.INTEGER,
      userID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CommentUserPost",
    }
  );
  return CommentUserPost;
};
