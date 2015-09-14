/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Providers = require('./providers.model');

exports.register = function(socket) {
  Providers.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Providers.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('providers:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('providers:remove', doc);
}