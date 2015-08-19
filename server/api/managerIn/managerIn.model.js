'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ManagerInSchema = new Schema({
  	author: String,
    date: { type: Date, default: Date.now },
    inci: Boolean,
  	list: [
  		{comment: String, imgUrl: String, title: String}
  	]
});

module.exports = mongoose.model('ManagerIn', ManagerInSchema);
