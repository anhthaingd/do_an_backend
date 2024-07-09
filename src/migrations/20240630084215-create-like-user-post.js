"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("LikeUserPosts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userPostID: {
        type: Sequelize.INTEGER,
        references: {
          model: "UserPosts",
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
    await queryInterface.addConstraint("LikeUserPosts", {
      fields: ["userID"],
      type: "foreign key",
      name: "FK_LikeUserPosts_userID",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
    });
    await queryInterface.addConstraint("LikeUserPosts", {
      fields: ["userPostID"],
      type: "foreign key",
      name: "FK_LikeUserPosts_userPostID",
      references: {
        table: "UserPosts",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("LikeUserPosts");
  },
};
