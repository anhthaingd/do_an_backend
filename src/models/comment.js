"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Location, {
        foreignKey: "locationID",
        as: "location",
      });
      Comment.belongsTo(models.User, {
        foreignKey: "userID",
        as: "user",
      });
    }
  }
  Comment.init(
    {
      content: DataTypes.STRING,
      locationID: DataTypes.INTEGER,
      userID: DataTypes.INTEGER,
      star: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
