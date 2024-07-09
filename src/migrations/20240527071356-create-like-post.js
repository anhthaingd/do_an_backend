"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("LikePosts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
    await queryInterface.addConstraint("LikePosts", {
      fields: ["postID"],
      type: "foreign key",
      name: "FK_LikePosts_postID",
      references: {
        table: "Posts",
        field: "id",
      },
      onDelete: "CASCADE",
    });
    await queryInterface.addConstraint("LikePosts", {
      fields: ["userID"],
      type: "foreign key",
      name: "FK_LikePosts_userID",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("LikePosts");
  },
};
