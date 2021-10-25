const express = require('express');
// const router = require('./productsRouter');
const productsRouter = require('./productsRouter');
// const usersRouter = require('./usersRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  // con esto generamos un path global
  router.use('/products', productsRouter);
  // app.use('/api/v1/products', productsRouter);
  // app.use('/users', usersRouter);
}

module.exports = routerApi;
