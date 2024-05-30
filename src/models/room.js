"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.belongsTo(models.User, {
        foreignKey: "ownerID",
        as: "owner",
      });
      Room.belongsTo(models.User, {
        foreignKey: "receiverID",
        as: "receiver",
      });
    }
  }
  Room.init(
    {
      ownerID: DataTypes.INTEGER,
      receiverID: DataTypes.INTEGER,
      inboxHash: DataTypes.STRING,
      unSeenNumbers: DataTypes.INTEGER,
      lastMsg: DataTypes.STRING,
      seen: {
        type: "TIMESTAMP",
      },
      sentByOwner: DataTypes.BOOLEAN,
      // deletedAt: {
      //   type: "TIMESTAMP",
      // },
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
