"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Chat.belongsTo(models.User, {
        foreignKey: "senderID",
        as: "sender",
      });
    }
  }
  Chat.init(
    {
      senderID: DataTypes.INTEGER,
      message: DataTypes.STRING,
      inboxHash: DataTypes.STRING,
      deletedAt: {
        type: "TIMESTAMP",
      },
    },
    {
      sequelize,
      modelName: "Chat",
    }
  );
  return Chat;
};
