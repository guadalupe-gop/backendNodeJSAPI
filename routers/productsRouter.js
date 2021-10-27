const express = require('express');
const ProductsService = require('./../services/productService');
const router = express.Router();

const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
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
  const product = service.findOne(id);
  res.json(product);
});

// METODO POST
router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json({ newProduct });
});

// METODO PATCH enviar parcial
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
});

// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
});
module.exports = router;
