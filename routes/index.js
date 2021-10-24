const productsRouter = require('./productsRouter');
const categoriesRouter = require('./categoriesRouter');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
