const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Order }) {
      // Один ко многим: один пользователь может иметь много заказов
      this.hasMany(Order, { foreignKey: 'userId' });
    }
  }

  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    orders: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
    },
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
