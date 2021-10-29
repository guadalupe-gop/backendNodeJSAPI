const express = require('express');
const routerApi = require('./routers');
const { logErrors, errorHandler } = require('./middlewares/errorHandler');

const { logErrors, errorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

// middleware nativo de express
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola, mi server en express!');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('soy una nueva ruta');
});

routerApi(app);

// los middleware de tipo error se deben definir despues definir el routing
app.use(logErrors);
app.use(errorHandler);

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
