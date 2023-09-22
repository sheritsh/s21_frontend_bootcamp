const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MenuItem extends Model {
    static associate({ Order }) {
      // Многие ко многим: каждый товар может быть в нескольких заказах
      this.belongsToMany(Order, { through: 'orderId', onDelete: 'CASCADE' });
    }
  }

  MenuItem.init({
    title: DataTypes.STRING,
    picture: DataTypes.STRING,
    cost: DataTypes.NUMBER,
    callQuantity: DataTypes.NUMBER,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'MenuItem',
  });

  return MenuItem;
};
