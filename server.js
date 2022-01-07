const mongoose = require('mongoose');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');

  next();
});

app.use('/api/menu', menuRoutes);

app.use('/api/order', orderRoutes);

app.use((err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || 'an unexpexted error occured' });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Running at ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
