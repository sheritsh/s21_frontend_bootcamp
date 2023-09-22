const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    isActive: DataTypes.BOOLEAN,
    items: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
    },
  });

  Order.associate = (models) => {
    // Один ко многим: каждый заказ принадлежит одному пользователю
    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

    // Многие ко многим: заказы содержат множество товаров
    Order.belongsToMany(models.MenuItem, { through: 'orderId' });
  };

  return Order;
};
