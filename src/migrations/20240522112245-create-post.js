"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      groupID: {
        type: Sequelize.INTEGER,
        references: {
          model: "groups",
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
      matchID: {
        type: Sequelize.INTEGER,
        references: {
          model: "matches",
          key: "id",
        },
      },
      content: {
        type: Sequelize.STRING,
      },
      image: {
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
    await queryInterface.addConstraint("Posts", {
      fields: ["groupID"],
      type: "foreign key",
      name: "FK_Posts_groupID",
      references: {
        table: "Groups",
        field: "id",
      },
      onDelete: "CASCADE",
    });
    await queryInterface.addConstraint("Posts", {
      fields: ["userID"],
      type: "foreign key",
      name: "FK_Posts_userID",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
    });
    await queryInterface.addConstraint("Posts", {
      fields: ["matchID"],
      type: "foreign key",
      name: "FK_Posts_matchID",
      references: {
        table: "Matches",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Posts");
  },
};
