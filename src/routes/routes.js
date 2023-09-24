const { Router } = require('express');
const controller = require('../controllers/controller.js');

const router = Router();

// router.get('/menu', controller.getMenu);

// router.get('/orders', controller.getAllOrders);

// router.post('/orders', controller.createOrder);

// router.post('/waiters', controller.createWaiter);

// router.put('/orders/:id', controller.updateOrder);

// router.delete('/orders/:id', controller.closeOrder);

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

module.exports = router;
