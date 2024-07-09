"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Likes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      locationID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Locations",
          key: "id",
          onDelete: 'CASCADE'
        },
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",

        },
      },
      status: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.addConstraint("Likes", {
      fields: ["locationID"],
      type: "foreign key",
      name: "FK_Likes_locationID",
      references: {
        table: "Locations",
        field: "id",
      },
      onDelete: "CASCADE",
    });
    await queryInterface.addConstraint("Likes", {
      fields: ["userID"],
      type: "foreign key",
      name: "FK_Likes_userID",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Likes");
  },
};
