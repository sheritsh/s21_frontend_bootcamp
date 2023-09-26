const { Router } = require('express');
const controller = require('../controllers/controller.js');
const accessController = require('../controllers/accessController.js');

const router = Router();

/* SITE ROUTES */

router.get('/', accessController.getMainPage);

router.get('/orders', (req, res) => {
  res.render('orders_page');
});

router.get('/orders/:id', (req, res) => {
  res.render('order_page');
});

router.get('/menu', (req, res) => {
  res.render('menu_page');
});

router.get('/signin', (req, res) => {
  res.render('login_page');
});

router.get('/signup', (req, res) => {
  res.render('register_page');
});

router.post('/auth', controller.auth);

router.get('/logout', controller.logout);

/* API */

router.get('/api/menu', controller.getMenu);

router.get('/api/orders', controller.getAllOrders);

router.get('/api/orders/:id', controller.getOrder);

router.get('/api/users/:id', controller.getOrdersByUserId);

router.get('/api/username/:id', controller.getUserNameById);

router.get('/api/waiters', controller.getAllUsers);

router.post('/api/orders', controller.createOrder);

router.post('/api/create_waiter', controller.createWaiter);

router.put('/api/orders/:id', controller.updateOrder);

router.delete('/api/orders/:id', controller.closeOrder);

module.exports = router;
