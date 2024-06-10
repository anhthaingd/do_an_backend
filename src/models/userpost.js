"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserPost.belongsTo(models.User, {
        foreignKey: "ownerID",
        as: "owner",
      });
      UserPost.belongsTo(models.User, {
        foreignKey: "writerID",
        as: "writer",
      });
      UserPost.belongsTo(models.Match, {
        foreignKey: "matchID",
        as: "match",
      });
    }
  }
  UserPost.init(
    {
      ownerID: DataTypes.INTEGER,
      writerID: DataTypes.INTEGER,
      matchID: DataTypes.INTEGER,
      content: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserPost",
    }
  );
  return UserPost;
};
