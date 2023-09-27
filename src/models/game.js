"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      Game.belongsTo(models.User, {
        foreignKey: "user_id",
      });
    }
  }

  Game.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      isWin: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Game",
      tableName: "Games",
      timestamps: false,
    }
  );

  return Game;
};
