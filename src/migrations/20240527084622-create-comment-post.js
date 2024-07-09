"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CommentPosts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.STRING,
      },
      postID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Posts",
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
    await queryInterface.addConstraint("CommentPosts", {
      fields: ["postID"],
      type: "foreign key",
      name: "FK_CommentPosts_postID",
      references: {
        table: "Posts",
        field: "id",
      },
      onDelete: "CASCADE",
    });
    await queryInterface.addConstraint("CommentPosts", {
      fields: ["userID"],
      type: "foreign key",
      name: "FK_CommentPosts_userID",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("CommentPosts");
  },
};
