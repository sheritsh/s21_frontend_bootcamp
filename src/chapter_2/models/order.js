const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // Один ко многим: каждый заказ принадлежит одному пользователю
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
      // Многие ко многим: заказы содержат множество товаров
      this.belongsToMany(models.MenuItem, { through: 'OrderMenuItem' });
    }
  }

  Order.init(
    {
      isActive: {
        type: DataTypes.BOOLEAN,
      },
      items: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        defaultValue: [],
      },
    },
    {
      sequelize,
      modelName: 'Order',
      tableName: 'Orders',
      primaryKey: 'id',
    },
  );

  return Order;
};
