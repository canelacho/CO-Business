'use strict';

var _ = require('lodash');
// var AWS = require('aws-sdk');
var crypto = require('crypto');
var config = require('./coappS3.json'),
    createS3Policy,
    getExpiryTime;

getExpiryTime = function () {
    var _date = new Date();
    return '' + (_date.getFullYear() + 1) + '-' + (_date.getMonth() + 1) + '-' +
        (_date.getDate() + 1) + 'T' + (_date.getHours() + 3) + ':' + '00:00.000Z';
};

createS3Policy = function(contentType, callback) {
    var date = new Date();
    var s3Policy = {
        "expiration": getExpiryTime(),
        "conditions": [
            ["starts-with", "$key", "coApp/"],
            {"bucket": config.bucket},
            {"acl": "public-read"},
            ["starts-with", "$Content-Type", contentType],
            {"success_action_status" : "201"},
            ["content-length-range", 0, 1048576]
        ]
    };
    console.log(s3Policy);
    // console.log('json: ', config);

    // stringify and encode the policy
    var stringPolicy = JSON.stringify(s3Policy);
    var base64Policy = new Buffer(stringPolicy, 'utf-8').toString('base64');
    console.log('base64 policy:');
    console.log(base64Policy);

    // sign the base64 encoded policy
    var signature = crypto.createHmac('sha1', config.secretAccessKey)
          .update(base64Policy).digest('base64');
    console.log('signature:');
    console.log(signature);

    // build the results object
    var s3Credentials = {
        s3Policy: base64Policy,
        s3Signature: signature,
        AWSAccessKeyId: config.accessKeyId,
        AWSBucket: config.bucket
    };

    // send it back
    callback(s3Credentials);
};

exports.getS3Policy = function(req, res) {
    createS3Policy(req.query.mimeType, function (creds, err) {
        if (!err) {
            return res.send(200, creds);
        } else {
            return res.send(500, err);
        }
    });
};




// var multipart = require('connect-multiparty');

// var UserUpload = require('./upload.model');
//
// Get list of user/uploads
// exports.index = function(req, res) {
//   UserUpload.find(function (err, /uploads) {
//     if(err) { return handleError(res, err); }
//     return res.json(200, /uploads);
//   });
// };
//
// // Get a single user/upload
// exports.show = function(req, res) {
//   UserUpload.findById(req.params.id, function (err, user/upload) {
//     if(err) { return handleError(res, err); }
//     if(!user/upload) { return res.send(404); }
//     return res.json(user/upload);
//   });
// };
//
// // Creates a new user/upload in the DB.
// exports.create = function(req, res) {
//   UserUpload.create(req.body, function(err, user/upload) {
//     if(err) { return handleError(res, err); }
//     return res.json(201, user/upload);
//   });
// };
//
// // Updates an existing user/upload in the DB.
// exports.update = function(req, res) {
//   if(req.body._id) { delete req.body._id; }
//   UserUpload.findById(req.params.id, function (err, user/upload) {
//     if (err) { return handleError(res, err); }
//     if(!user/upload) { return res.send(404); }
//     var updated = _.merge(user/upload, req.body);
//     updated.save(function (err) {
//       if (err) { return handleError(res, err); }
//       return res.json(200, user/upload);
//     });
//   });
// };
//
// // Deletes a user/upload from the DB.
// exports.destroy = function(req, res) {
//   UserUpload.findById(req.params.id, function (err, user/upload) {
//     if(err) { return handleError(res, err); }
//     if(!user/upload) { return res.send(404); }
//     user/upload.remove(function(err) {
//       if(err) { return handleError(res, err); }
//       return res.send(204);
//     });
//   });
// };
//
// function handleError(res, err) {
//   return res.send(500, err);
// }
//
// exports.create = function (req, res) {
//   var data = _.pick(req.body, 'type'),
//     uploadPath = path.normalize(cfg.data + '/uploads'),
//     file = req.files.file;
//
//     console.log(file.name);
//     console.log(file.path);
//     console.log(uploadPath);
// };
