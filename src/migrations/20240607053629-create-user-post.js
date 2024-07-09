"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserPosts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ownerID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          onDelete: "CASCADE",
        },
      },
      writerID: {
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
    await queryInterface.addConstraint("UserPosts", {
      fields: ["ownerID"],
      type: "foreign key",
      name: "FK_UserPosts_ownerID",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
    });
    await queryInterface.addConstraint("UserPosts", {
      fields: ["writerID"],
      type: "foreign key",
      name: "FK_UserPosts_writerID",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
    });
    await queryInterface.addConstraint("UserPosts", {
      fields: ["matchID"],
      type: "foreign key",
      name: "FK_UserPosts_matchID",
      references: {
        table: "Matches",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserPosts");
  },
};
