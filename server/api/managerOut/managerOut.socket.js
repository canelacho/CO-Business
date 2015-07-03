/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var ManagerOut = require('./managerOut.model');

exports.register = function(socket) {
  ManagerOut.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  ManagerOut.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('managerOut:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('managerOut:remove', doc);
}