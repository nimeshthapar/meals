const router = require('express').Router();

const { body } = require('express-validator');

const orderController = require('../controllers/order');

router.get('/', orderController.getOrder);

router.post(
  '/',
  [
    body('name').isLength({ min: 5 }),
    body('address')
      .isLength({ min: 10 })
      .matches(/^[A-Za-z0-9 .,'!-]+$/),
    body('cart').isArray().notEmpty(),
    body('amount').isNumeric(),
  ],
  orderController.postOrder
);

module.exports = router;
