const { Schema, model, Types } = require('mongoose');

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cart: {
      type: Array,
      required: true,
    },
    instruction: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = model('Order', orderSchema);

module.exports = Order;
