/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var ManagerIn = require('./managerIn.model');

exports.register = function(socket) {
  ManagerIn.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  ManagerIn.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('managerIn:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('managerIn:remove', doc);
}