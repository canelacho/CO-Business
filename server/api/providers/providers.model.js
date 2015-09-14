'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProvidersSchema = new Schema({
  name: String,
  ruc: String,
  phone: String
});

module.exports = mongoose.model('Providers', ProvidersSchema);
