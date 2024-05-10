"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Location.belongsTo(models.User, {
        foreignKey: "ownerID",
        as: "owner",
      });
    }
  }
  Location.init(
    {
      ownerID: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      sale: DataTypes.INTEGER,
      type: DataTypes.INTEGER,
      province: DataTypes.STRING, // tinh
      district: DataTypes.STRING, // huyen
      ward: DataTypes.STRING, // xa
      location_detail: DataTypes.STRING,
      open_time: DataTypes.DATE,
      close_time: DataTypes.DATE,
      image: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      coordinates: DataTypes.GEOMETRY('POINT')
    },
    {
      sequelize,
      modelName: "Location",
    }
  );
  return Location;
};
