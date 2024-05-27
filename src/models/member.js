"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Member.belongsTo(models.Group, {
        foreignKey: "groupID",
        as: "group",
      });
      Member.belongsTo(models.User, {
        foreignKey: "userID",
        as: "user",
      });
    }
  }
  Member.init(
    {
      userID: DataTypes.INTEGER,
      groupID: DataTypes.INTEGER,
      isJoined: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Member",
    }
  );
  return Member;
};
