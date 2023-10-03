"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Game, {
        foreignKey: "user_id",
      });
    }
  }

  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      username: {
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      games_played: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      counter_games_win: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
      timestamps: false,
    }
  );

  return User;
};
