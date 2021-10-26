const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
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
router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

// devolviendo el detalle de un producto, recibiendo el id
router.get('/:id', (req, res) => {
  // recogemos el id
  const { id } = req.params;
  res.json({
    id,
    name: 'Volt Energy 473ml',
    price: 1000,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  });
});

// METODO PATCH
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'deleted',
    id,
  });
});
module.exports = router;
