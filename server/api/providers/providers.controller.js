'use strict';

var _ = require('lodash');
var Providers = require('./providers.model');

// Get list of providerss
exports.index = function(req, res) {

  Providers.find(function (err, providerss) {
    if(err) { return handleError(res, err); }
    console.log("se trato de hacer algo pues")
    return res.json(200, providerss);
  });
};

// Get a single providers
exports.show = function(req, res) {

  console.log('Muestro un proveedores disponibles');

  Providers.findById(req.params.id, function (err, providers) {
    if(err) { return handleError(res, err); }
    if(!providers) { return res.send(404); }
    return res.json(providers);
  });
};

// Creates a new providers in the DB.
exports.create = function(req, res) {
  Providers.create(req.body, function(err, providers) {
    if(err) { return handleError(res, err); }
    return res.json(201, providers);
  });
  console.log('Estoy parado en crear proveedor en la DB');
};

// Updates an existing providers in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Providers.findById(req.params.id, function (err, providers) {
    if (err) { return handleError(res, err); }
    if(!providers) { return res.send(404); }
    var updated = _.merge(providers, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, providers);
    });
  });
};

// Deletes a providers from the DB.
exports.destroy = function(req, res) {
  Providers.findById(req.params.id, function (err, providers) {
    if(err) { return handleError(res, err); }
    if(!providers) { return res.send(404); }
    providers.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
