'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProviderSchema = new Schema({
  name: String,
  ruc: String,
  phone: String
});

module.exports = mongoose.model('Provider', ProviderSchema);
