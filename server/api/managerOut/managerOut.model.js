'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ManagerOutSchema = new Schema({
  	author: String,
  	list: [
  		{inci: Boolean, comment: String, img: { data: Buffer, contentType: String }}
  	],
  	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ManagerOut', ManagerOutSchema);
