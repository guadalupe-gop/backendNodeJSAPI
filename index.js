const express = require('express');
const routerApi = require('./routers');
// index ya no se coloca por que ya entiende que es archivo principal
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, mi server en express!');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('soy una nueva ruta');
});

routerApi(app);

// // reciendo parámetros tipo query con limit y offset
// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset,
//     });
//   } else {
//     res.send('Parametros no validos...');
//   }
// });

// // un endpoint más complejo recibiendo dos parametros
// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId,
//   });
// });

app.listen(port, () => {
  console.log('Mi port ' + port);
});
