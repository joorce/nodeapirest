'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
  name: String,
  picture: String,
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ['computer', 'phones', 'accessories'],
  },
  description: String,
});

module.exports = mongoose.model('Product', ProductSchema);
