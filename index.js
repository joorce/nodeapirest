'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('./models/product');

const port = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  'mongodb://joorce:gan3dalf6#@ds129156.mlab.com:29156/bucket',
  (err, conn) => {
    if (err) {
      throw err;
    }
    console.log('Conectado!!!');
  }
);

app.get('/api/product', (req, res) => {
  res.status(200).send({ products: [] });
});

app.get('/api/product/:productId', (req, res) => {});

app.post('/api/product', (req, res) => {
  console.log('POST /api/product');
  // console.log(req.body);
  let product = new Product();
  product.name = req.body.name;
  product.picture = req.body.picture;
  product.price = req.body.price;
  product.category = req.body.category;
  product.description = req.body.description;

  product.save((err, storedProduct) => {
    if (err) {
      res.status(500).send({ message: `Error en el servidor: ${err}` });
    }
    res.status(200).send({ product: storedProduct });
  });

  //  res.status(200).send({ message: 'El producto se ha recibido' });
});

app.put('/api/product/:productId', (req, res) => {});

app.delete('/api/product/:productId', (req, res) => {});

// app.get('/hola/:name', (req, res) => {
//   res.send({ message: `Hola, ${req.params.name}` });
// });

app.listen(port, () => {
  console.log(`API corriendo en ${port}`);
});
