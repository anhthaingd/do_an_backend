"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Rooms", {
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
      receiverID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          onDelete: "CASCADE",
        },
      },
      inboxHash: {
        type: Sequelize.STRING,
      },
      unSeenNumbers: {
        type: Sequelize.INTEGER,
      },
      lastMsg: {
        type: Sequelize.STRING,
      },
      seen: {
        type: "TIMESTAMP",
      },
      sentByOwner: {
        type: Sequelize.BOOLEAN,
      },
      // deletedAt: {
      //   type: "TIMESTAMP",
      //   defaultValue: null,
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Rooms");
  },
};
