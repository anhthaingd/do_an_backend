"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Locations", {
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
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      sale: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.INTEGER,
      },
      province: {
        type: Sequelize.STRING,
      },
      district: {
        type: Sequelize.STRING,
      },
      ward: {
        type: Sequelize.STRING,
      },
      location_detail: {
        type: Sequelize.STRING,
      },
      open_time: {
        type: Sequelize.STRING,
      },
      close_time: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.FLOAT,
      },
      coordinates: {
        type: Sequelize.GEOMETRY("POINT"),
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
    await queryInterface.addConstraint("Locations", {
      fields: ["ownerID"],
      type: "foreign key",
      name: "FK_Locations_ownerID",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Locations");
  },
};
