'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ManagerOutSchema = new Schema({
  	author: 'String',
  	list: [
  		{check: 'Boolean', comment: 'String', img: 'String'}
  	],
  	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ManagerOut', ManagerOutSchema);
