const express = require('express');
const ProductsService = require('./../services/productService');
const router = express.Router();

const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

// un error muy comun cuand se empieza con Express a nivel de routing
router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

// devolviendo el detalle de un producto, recibiendo el id
router.get('/:id', async (req, res) => {
  // recogemos el id
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
});

// METODO POST
router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({ newProduct });
});

// METODO PATCH enviar parcial
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});
module.exports = router;
