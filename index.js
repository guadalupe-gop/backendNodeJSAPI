const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, mi server en express!');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('soy una nueva ruta');
});

app.get('/productos', (req, res) => {
  res.json({
    name: 'Volt Energy 473ml',
    price: 1000,
  });
});

app.listen(port, () => {
  console.log('Mi port ' + port);
});
