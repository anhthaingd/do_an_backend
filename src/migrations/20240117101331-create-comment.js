"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.STRING,
      },
      star: {
        type: Sequelize.INTEGER,
      },
      locationID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Locations",
          key: "id",
          onDelete: "CASCADE",
        },
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
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
    await queryInterface.addConstraint("Comments", {
      fields: ["locationID"],
      type: "foreign key",
      name: "FK_Comments_locationID",
      references: {
        table: "Locations",
        field: "id",
      },
      onDelete: "CASCADE",
    });
    await queryInterface.addConstraint("Comments", {
      fields: ["userID"],
      type: "foreign key",
      name: "FK_Comments_userID",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Comments");
  },
};
