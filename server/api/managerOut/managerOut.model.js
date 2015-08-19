'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ManagerOutSchema = new Schema({
  	author: String,
    date: { type: Date, default: Date.now },
    inci: Boolean,
  	list: [
  		{comment: String, imgUrl: Object, title: String}
  	]
});

module.exports = mongoose.model('ManagerOut', ManagerOutSchema);
