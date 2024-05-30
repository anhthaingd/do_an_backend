"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CommentPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CommentPost.belongsTo(models.Post, {
        foreignKey: "postID",
        as: "post",
      });
      CommentPost.belongsTo(models.User, {
        foreignKey: "userID",
        as: "user",
      });
    }
  }
  CommentPost.init(
    {
      content: DataTypes.STRING,
      postID: DataTypes.INTEGER,
      userID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CommentPost",
    }
  );
  return CommentPost;
};
