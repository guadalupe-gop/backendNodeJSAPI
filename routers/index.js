const express = require('express');
const productsRouter = require('./productsRouter');
// const usersRouter = require('./usersRouter');

function routerApi(app) {
  const router = express.Router();
  // con esto generamos un path global
  app.use('/api/v1', router);
  router.use('/products', productsRouter);

  // podemos crear otra version diferente de modo que no choquen entre si
  // const router = express.Router();
  // app.use('/api/v2', router);

  // forma normal como se haria
  // app.use('/api/v1/products', productsRouter);
  // app.use('/users', usersRouter);
}

module.exports = routerApi;
