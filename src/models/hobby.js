"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hobby extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hobby.belongsTo(models.User, {
        foreignKey: "userID",
        as: "user",
      });
    }
  }
  Hobby.init(
    {
      name: DataTypes.STRING,
      userID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Hobby",
    }
  );
  return Hobby;
};
