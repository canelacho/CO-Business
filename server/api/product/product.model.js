'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  _id: String,
  desc: String,
  tipo: String,
  presMay: String,
  conver: String,
  unit: String,
  crit: Number,
  min: Number,
  max: Number,
  cost: Number,
  avail: Number
});

module.exports = mongoose.model('Product', ProductSchema);
