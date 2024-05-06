"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Matches", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ownerID: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      opponentID: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      start_time: {
        type: Sequelize.DATE,
      },
      end_time: {
        type: Sequelize.DATE,
      },
      locationID: {
        type: Sequelize.INTEGER,
        references: {
          model: "locations",
          key: "id",
        },
      },
      price: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.INTEGER,
      },
      result: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.STRING,
      },
      playgroundID: {
        type: Sequelize.INTEGER,
        references: {
          model: "PlayGrounds",
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
    await queryInterface.addConstraint("Matches", {
      fields: ["locationID"],
      type: "foreign key",
      name: "FK_Matches_locationID",
      references: {
        table: "Locations",
        field: "id",
      },
      onDelete: "CASCADE",
    });

    await queryInterface.addConstraint("Matches", {
      fields: ["playgroundID"],
      type: "foreign key",
      name: "FK_Matches_playgroundID",
      references: {
        table: "playgrounds",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Matches");
  },
};
