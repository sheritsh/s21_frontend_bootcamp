const bcrypt = require('bcrypt');
const { MenuItem, Order, User } = require('../models/index.js');

exports.getMenu = async (req, res) => {
  try {
    const menu = await MenuItem.findAll();
    res.json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching the menu' });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { items, userId, isActive } = req.body;
    const order = await Order.create({ items, userId, isActive });
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating an order' });
  }
};

exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findByPk(id);

  try {
    const { isActive } = req.body;
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    order.isActive = isActive;
    await order.save();

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating the order' });
  }

  return order;
};

exports.closeOrder = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findByPk(id);

  try {
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    order.isActive = false;
    await order.save();

    res.json({ message: 'Order is closed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error closing the order' });
  }

  return order;
};

exports.getAllUsers = async (req, res) => {
  try {
    const waiters = await User.findAll();
    res.json(waiters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching users' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { isActive: true } });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching orders' });
  }
};

exports.getOrder = async (req, res) => {
  const orderId = req.params.id;
  const order = await Order.findByPk(orderId);

  try {
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching order' });
  }

  return order;
};

exports.getOrdersByUserId = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const userId = id;

  try {
    const orders = await Order.findAll({
      where: {
        isActive: true,
        userId,
      },
    });

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching orders' });
  }
};

exports.createWaiter = async (req, res) => {
  try {
    const { name, role, orders } = req.body;
    const waiter = await User.create({ name, role, orders });
    res.status(201).json(waiter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating an employee' });
  }
};

exports.auth = async (req, res) => {
  const { username, password } = req.body;

  console.log(req.body);
  console.log(username, password);

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      req.session.user = { id: user.id, username: user.username };
      return res.redirect('/');
    }
    return res.status(401).json({ message: 'Invalid password' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
