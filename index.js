const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, mi server en express!');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('soy una nueva ruta');
});

routerApi(app);

//un error muy comun
// app.get('/products/filter', (req, res) => {
//   res.send('Yo sou un filter');
// });

//Como recoger parametros tipo query
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('Sin parametros...');
  }
});

app.listen(port, () => {
  console.log('Mi port ' + port);
});
