"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.Group, {
        foreignKey: "groupID",
        as: "group",
      });
      Post.belongsTo(models.User, {
        foreignKey: "userID",
        as: "user",
      });
      Post.belongsTo(models.Match, {
        foreignKey: "matchID",
        as: "match",
      });
    }
  }
  Post.init(
    {
      userID: DataTypes.INTEGER,
      groupID: DataTypes.INTEGER,
      content: DataTypes.STRING,
      image: DataTypes.STRING,
      matchID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
