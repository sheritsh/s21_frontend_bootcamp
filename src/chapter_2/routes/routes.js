const { Router } = require('express');
const controller = require('../controllers/controller.js');

const router = Router();

// GET /menu — клиент может посмотреть меню и все, что в него входит.
router.get('/menu', controller.getMenu);

// GET /orders — получить все текущие заказы из ресторана.
router.get('/orders', controller.getAllOrders);

// POST /orders — создать заказ.
router.post('/orders', controller.createOrder);

// POST /waiters —  возможность добавить нового сотрудника.
router.post('/waiters', controller.createWaiter);

// PUT /orders/id — изменить заказ.
router.put('/orders/:id', controller.updateOrder);

// DELETE /orders/id — закрыть заказ (для закрытия советуем не удалять запись из таблицы,
// а просто изменять одно из полей с true на false).
router.delete('/orders/:id', controller.closeOrder);

module.exports = router;
