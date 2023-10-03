"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Users",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        username: {
          unique: true,
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        games_played: {
          type: Sequelize.ARRAY(Sequelize.INTEGER),
          foreignKey: true,
        },
        counter_games_win: {
          type: Sequelize.INTEGER,
        },
      },
      {
        freezeTableName: true,
      }
    );
  },
  foreignKey: true,
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
