'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  codigo: String,
  desc: String,
  type: String,
  wholesale: String,
  conver: String,
  unit: String,
  min: Number,
  max: Number,
  cost: Number
});

module.exports = mongoose.model('Product', ProductSchema);
