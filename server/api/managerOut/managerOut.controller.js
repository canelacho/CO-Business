'use strict';

var _ = require('lodash');
var ManagerOut = require('./managerOut.model');

// Get list of managerOuts
exports.index = function(req, res) {
  ManagerOut.find(function (err, managerOuts) {
    if(err) { return handleError(res, err); }
    return res.json(200, managerOuts);
  });
};

// Get a single managerOut
exports.show = function(req, res) {
  ManagerOut.findById(req.params.id, function (err, managerOut) {
    if(err) { return handleError(res, err); }
    if(!managerOut) { return res.send(404); }
    return res.json(managerOut);
  });
};

// Creates a new managerOut in the DB.
exports.create = function(req, res) {
  ManagerOut.create(req.body, function(err, managerOut) {
    if(err) { return handleError(res, err); }
    return res.json(201, managerOut);
  });
};

// Updates an existing managerOut in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  ManagerOut.findById(req.params.id, function (err, managerOut) {
    if (err) { return handleError(res, err); }
    if(!managerOut) { return res.send(404); }
    var updated = _.merge(managerOut, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, managerOut);
    });
  });
};

// Deletes a managerOut from the DB.
exports.destroy = function(req, res) {
  ManagerOut.findById(req.params.id, function (err, managerOut) {
    if(err) { return handleError(res, err); }
    if(!managerOut) { return res.send(404); }
    managerOut.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}