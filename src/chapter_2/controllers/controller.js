const { MenuItem, Order, User } = require('../models');

// Получение меню
exports.getMenu = async (req, res) => {
  try {
    const menu = await MenuItem.findAll();
    res.json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при получении меню' });
  }
};

// Создание заказа
exports.createOrder = async (req, res) => {
  // try {
  //   const { items, userId } = req.body;
  //   const order = await Order.create({ items, userId });
  //   res.status(201).json(order);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: 'Ошибка при создании заказа' });
  // }
};

// Изменение заказа
exports.updateOrder = async (req, res) => {
  // try {
  //   const { id } = req.params;
  //   const { isActive } = req.body;
  //   const order = await Order.findByPk(id);

  //   if (!order) {
  //     return res.status(404).json({ error: 'Заказ не найден' });
  //   }

  //   order.isActive = isActive;
  //   await order.save();

  //   res.json(order);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: 'Ошибка при обновлении заказа' });
  // }
};

// Закрытие заказа
exports.closeOrder = async (req, res) => {
  // try {
  //   const { id } = req.params;
  //   const order = await Order.findByPk(id);

  //   if (!order) {
  //     return res.status(404).json({ error: 'Заказ не найден' });
  //   }

  //   order.isActive = false;
  //   await order.save();

  //   res.json({ message: 'Заказ закрыт' });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: 'Ошибка при закрытии заказа' });
  // }
};

// Получение всех текущих заказов
exports.getAllOrders = async (req, res) => {
  // try {
  //   const orders = await Order.findAll({ where: { isActive: true } });
  //   res.json(orders);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: 'Ошибка при получении заказов' });
  // }
};

exports.createWaiter = async (req, res) => {
  // try {
  //   const { name, role } = req.body;
  //   const waiter = await Waiter.create({ name, role });
  //   res.status(201).json(waiter);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: 'Ошибка при создании сотрудника' });
  // }
};
