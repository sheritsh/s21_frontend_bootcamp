const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MenuItem extends Model {
    static associate({ Order }) {
      // Многие ко многим: каждый товар может быть в нескольких заказах
      this.belongsToMany(Order, { through: 'OrderMenuItem', onDelete: 'CASCADE' });
    }
  }

  MenuItem.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    title: DataTypes.STRING,
    picture: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    callQuantity: DataTypes.INTEGER,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'MenuItem',
    tableName: 'MenuItems',
    primaryKey: 'id',
  });

  return MenuItem;
};
