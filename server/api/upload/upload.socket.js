/**
 * Broadcast updates to client when the model changes
 */

// 'use strict';
//
// var UserUpload = require('./upload.model');
//
// exports.register = function(socket) {
//   UserUpload.schema.post('save', function (doc) {
//     onSave(socket, doc);
//   });
//   UserUpload.schema.post('remove', function (doc) {
//     onRemove(socket, doc);
//   });
// }
//
// function onSave(socket, doc, cb) {
//   socket.emit('user/upload:save', doc);
// }
//
// function onRemove(socket, doc, cb) {
//   socket.emit('user/upload:remove', doc);
// }
