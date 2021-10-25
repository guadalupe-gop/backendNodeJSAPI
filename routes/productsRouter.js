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

// todo los endpoints especificos van primero que los dinamicos
router.get('/filter', (req, res) => {
  res.send('Yo sou un filter');
});

//recogemos el id que nos envian desde la url y regresamos
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Volt Energy 473ml',
    price: 1000,
  });
});

module.exports = router;
