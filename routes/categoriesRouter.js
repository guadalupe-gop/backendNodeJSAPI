const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      categoria: faker.commerce.productAdjective(),
    },
    {
      categoria: faker.commerce.productAdjective(),
    },
  ]);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    categoria: faker.commerce.productAdjective(),
  });
});

//recogemos dos id
router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

module.exports = router;
