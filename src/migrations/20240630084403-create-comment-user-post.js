"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CommentUserPosts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.STRING,
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("CommentUserPosts", {
      fields: ["userID"],
      type: "foreign key",
      name: "FK_CommentUserPosts_userID",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
    });
    await queryInterface.addConstraint("CommentUserPosts", {
      fields: ["userPostID"],
      type: "foreign key",
      name: "FK_CommentUserPosts_userPostID",
      references: {
        table: "UserPosts",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("CommentUserPosts");
  },
};
