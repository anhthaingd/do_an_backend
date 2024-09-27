"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PlayGround extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PlayGround.belongsTo(models.Location, {
        foreignKey: "locationID",
        as: "location",
      });
    }
  }
  PlayGround.init(
    {
      name: DataTypes.STRING,
      locationID: DataTypes.INTEGER,
      width: DataTypes.FLOAT,
      length: DataTypes.FLOAT,
      price: DataTypes.INTEGER,
      position: DataTypes.STRING,
      yard_surface: DataTypes.STRING,
      quantity: DataTypes.STRING,

    },
    {
      sequelize,
      modelName: "PlayGround",
    }
  );
  return PlayGround;
};
