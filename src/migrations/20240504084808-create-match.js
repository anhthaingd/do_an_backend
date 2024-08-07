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
        type: Sequelize.STRING,
      },
      end_time: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.STRING,
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
      isPublic: {
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

    await queryInterface.addConstraint("Matches", {
      fields: ["ownerID"],
      type: "foreign key",
      name: "FK_Matches_ownerID",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
    });

    await queryInterface.addConstraint("Matches", {
      fields: ["opponentID"],
      type: "foreign key",
      name: "FK_Matches_opponentID",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Matches");
  },
};
