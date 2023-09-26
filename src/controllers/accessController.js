const { getNameById } = require('./controller');
const config = require('../config/config');
const { mapItemsToNames } = require('../public/js/hbs-helpers');

exports.getMainPage = async (req, res) => {
  try {
    if (req.session.user.role === 'waiter') {
      const orders = await fetch(`${config.domain}/api/users/${req.session.user.id}`);
      const username = await fetch(`${config.domain}/api/username/${req.session.user.id}`);
      const ordersData = await orders.json();
      const usernameData = await username.json();

      if (ordersData[0]) {
        res.render('waiter_main_page', {
          id: ordersData[0]?.id || 1,
          items: ordersData[0]?.items || 1,
          username: usernameData,
        });
      } else {
        res.render('waiter_main_page', {
          id: 0,
        });
      }
    } else if (req.session.user.role === 'admin') {
      const orders = await fetch(`${config.domain}/api/orders`);
      const ordersData = await orders.json();
      console.log(ordersData);

      const formattedOrders = await Promise.all(ordersData.map(async (order) => {
        const userName = await getNameById(order.userId);
        return {
          id: order.id,
          items: mapItemsToNames(order.items),
          totalDishes: order.items.length,
          userId: userName,
        };
      }));

      res.render('admin_main_page', {
        orders: formattedOrders,
      });
    } else {
      res.redirect('/logout');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getOrdersPage = async (req, res) => {
  try {
    if (req.session.user.role === 'waiter') {
      console.log('waiter role');
    } else if (req.session.user.role === 'admin') {
      console.log('admin role');
    } else {
      res.redirect('/logout');
    }

    res.render('main');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
