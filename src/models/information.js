"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Information extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Information.belongsTo(models.User, {
        foreignKey: "userID",
        as: "user",
      });
    }
  }
  Information.init(
    {
      userID: DataTypes.INTEGER,
      workplace: DataTypes.STRING,
      highSchool: DataTypes.STRING,
      university: DataTypes.STRING,
      address: DataTypes.STRING,
      province: DataTypes.STRING,
      district: DataTypes.STRING,
      ward: DataTypes.STRING,
      homeTown: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Information",
    }
  );
  return Information;
};
