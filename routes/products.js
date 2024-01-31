const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');
const Product = require('../models/Product');

router.get('/', (req, res) => {
    Product.find()
      .then((products) => {
        res.render('products', { title: 'Product List', products });
      })
      .catch((error) => {
        res.status(500).render('error', { title: 'Error', message: 'An error occurred', error });
      });
  });

module.exports = router;