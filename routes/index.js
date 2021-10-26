const express = require('express');
const productsRouter = require('./productsRouter');
const categoriesRouter = require('./categoriesRouter');

function routerApi(app) {
  // creamos una ruta maestra
  const router = express.Router();
  app.use('/api/v1', router);
  // app.use('/api/v1/products', productsRouter);
  // app.use('/api/v1/categories', categoriesRouter);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
