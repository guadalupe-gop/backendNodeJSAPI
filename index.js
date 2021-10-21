const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, mi server en express!');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('soy una nueva ruta');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      precio: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

// un error muy comun cuand se empieza con Express a nivel de routing
app.get('/products/filter', (req, res) => {
  res.send('Soy un filter');
});

// devolviendo el detalle de un producto, recibiendo el id
app.get('/products/:id', (req, res) => {
  // recogemos el id
  const { id } = req.params;
  res.json({
    id,
    name: 'Volt Energy 473ml',
    price: 1000,
  });
});

// reciendo parámetros tipo query con limit y offset
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('Parametros no validos...');
  }
});

// un endpoint más complejo recibiendo dos parametros
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log('Mi port ' + port);
});
