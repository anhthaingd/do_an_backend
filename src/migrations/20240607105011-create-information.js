"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Information", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          onDelete: "CASCADE",
        },
      },
      workplace: {
        type: Sequelize.STRING,
      },
      highSchool: {
        type: Sequelize.STRING,
      },
      university: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      homeTown: {
        type: Sequelize.STRING,
      },
      province: {
        type: Sequelize.STRING,
      },
      district: {
        type: Sequelize.STRING,
      },
      ward: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("Information", {
      fields: ["userID"],
      type: "foreign key",
      name: "FK_Information_userID",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Information");
  },
};
