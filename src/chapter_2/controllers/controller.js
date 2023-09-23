const { MenuItem, Order, User } = require('../models');

// Get all menu items
exports.getMenu = async (req, res) => {
  try {
    const menu = await MenuItem.findAll();
    res.json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при получении меню' });
  }
};

// Create new order
exports.createOrder = async (req, res) => {
  try {
    const { items, userId, isActive } = req.body;
    const order = await Order.create({ items, userId, isActive });
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при создании заказа' });
  }
};

// Change order
exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findByPk(id);

  try {
    const { isActive } = req.body;
    if (!order) {
      return res.status(404).json({ error: 'Заказ не найден' });
    }

    order.isActive = isActive;
    await order.save();

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при обновлении заказа' });
  }

  return order;
};

// Close order
exports.closeOrder = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findByPk(id);

  try {
    if (!order) {
      return res.status(404).json({ error: 'Заказ не найден' });
    }

    order.isActive = false;
    await order.save();

    res.json({ message: 'Заказ закрыт' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при закрытии заказа' });
  }

  return order;
};

// Get all current orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { isActive: true } });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при получении заказов' });
  }
};

// Create new User
exports.createWaiter = async (req, res) => {
  try {
    const { name, role, orders } = req.body;
    const waiter = await User.create({ name, role, orders });
    res.status(201).json(waiter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при создании сотрудника' });
  }
};
