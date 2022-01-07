const { validationResult } = require('express-validator');

const HttpError = require('../Models/httpError');
const Order = require('../Models/Order');

exports.postOrder = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return next(new HttpError('Invalid Credentials', 422));
  }

  const { name, cart, instruction, address, amount } = req.body;

  const newOrder = new Order({
    name,
    cart,
    instruction: instruction ? instruction : 'No, Special Instructions',
    address,
    amount,
  });

  try {
    await newOrder.save();
  } catch (Err) {
    return next(new HttpError('Posting Cart Data failed', 500));
  }

  res.status(201).json({ order: newOrder });
};

exports.getOrder = async (req, res, next) => {
  let order;
  try {
    order = await Order.find().sort({ createdAt: -1 }).limit(3);
  } catch (Err) {
    return next(new HttpError('Fetching menu failed', 500));
  }

  res.status(200).json(order);
};
