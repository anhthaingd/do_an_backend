"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Match.belongsTo(models.User, {
        foreignKey: "ownerID",
        as: "owner",
      });
      Match.belongsTo(models.User, {
        foreignKey: "opponentID",
        as: "opponent",
      });
      Match.belongsTo(models.Location, {
        foreignKey: "locationID",
        as: "location",
      });
      Match.belongsTo(models.PlayGround, {
        foreignKey: "playgroundID",
        as: "playground",
      });
    }
  }
  Match.init(
    {
      
      ownerID: DataTypes.INTEGER,
      opponentID: DataTypes.INTEGER,
      start_time: DataTypes.STRING,
      end_time: DataTypes.STRING,
      date: DataTypes.STRING,
      locationID: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      status: DataTypes.INTEGER, // 0: pending, 1: ok, 2: cancel
      result: DataTypes.STRING,
      note: DataTypes.STRING,
      playgroundID: DataTypes.INTEGER,
      isPublic: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Match",
    }
  );
  return Match;
};
