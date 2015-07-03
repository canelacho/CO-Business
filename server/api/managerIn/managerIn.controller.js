'use strict';

var _ = require('lodash');
var ManagerIn = require('./managerIn.model');

// Get list of managerIns
exports.index = function(req, res) {
  ManagerIn.find(function (err, managerIns) {
    if(err) { return handleError(res, err); }
    return res.json(200, managerIns);
  });
};

// Get a single managerIn
exports.show = function(req, res) {
  ManagerIn.findById(req.params.id, function (err, managerIn) {
    if(err) { return handleError(res, err); }
    if(!managerIn) { return res.send(404); }
    return res.json(managerIn);
  });
};

// Creates a new managerIn in the DB.
exports.create = function(req, res) {
  ManagerIn.create(req.body, function(err, managerIn) {
    if(err) { return handleError(res, err); }
    return res.json(201, managerIn);
  });
};

// Updates an existing managerIn in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  ManagerIn.findById(req.params.id, function (err, managerIn) {
    if (err) { return handleError(res, err); }
    if(!managerIn) { return res.send(404); }
    var updated = _.merge(managerIn, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, managerIn);
    });
  });
};

// Deletes a managerIn from the DB.
exports.destroy = function(req, res) {
  ManagerIn.findById(req.params.id, function (err, managerIn) {
    if(err) { return handleError(res, err); }
    if(!managerIn) { return res.send(404); }
    managerIn.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}