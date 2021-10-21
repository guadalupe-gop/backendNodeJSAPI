const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, mi server en express!');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('soy una nueva ruta');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Volt Energy 473ml',
      price: 1000,
    },
    {
      name: 'Inpods 12',
      price: 1200,
    },
  ]);
});

//recogemos el id que nos envian desde la url y regresamos
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Volt Energy 473ml',
    price: 1000,
  });
});

//recogemos dos id
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
