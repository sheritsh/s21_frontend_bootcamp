const { Router } = require('express');
const controller = require('../controllers/controller.js');

const router = Router();

/* SITE ROUTES */

router.get('/', (req, res) => {
  res.render('main');
});

router.get('/orders', (req, res) => {
  res.render('orders_page');
});

router.get('/orders/:id', (req, res) => {
  res.render('order_page');
});

router.get('/menu', (req, res) => {
  res.render('menu_page');
});

/* API */

router.get('/api/menu', controller.getMenu);

router.get('/api/orders', controller.getAllOrders);

router.get('/api/orders/:id', controller.getOrder);

router.get('/api/users/:id', controller.getOrdersByUserId);

router.get('/api/waiters', controller.getAllUsers);

router.post('/api/orders', controller.createOrder);

router.post('/api/waiters', controller.createWaiter);

router.put('/api/orders/:id', controller.updateOrder);

router.delete('/api/orders/:id', controller.closeOrder);

module.exports = router;
