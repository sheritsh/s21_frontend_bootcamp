const { getOrdersByUserId } = require("./controller");
const config = require('../config/config');

exports.getMainPage = async (req, res) => {
  console.log('att:', config.domain);
  try {
    if (req.session.user.role === 'waiter') {
      const orders = await fetch(`${config.domain}/api/users/${req.session.user.id}`);
      const username = await fetch(`${config.domain}/api/username/${req.session.user.id}`);
      const ordersData = await orders.json();
      const usernameData = await username.json();

      if (ordersData[0]) {
        console.log(ordersData[0].id);
        console.log(usernameData);
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
      res.render('main');
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
    // Ваш код для получения заказов официанта
    // Здесь может быть SQL-запрос к базе данных

    res.render('main');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
