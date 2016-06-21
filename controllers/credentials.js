var fs = require('fs');
var AWS = require('aws-sdk');

var kms = new AWS.KMS({region:'us-west-2'});

var getKey = function() {
  return new Promise(function(resolve, reject) {
    var keyPath = './SECRETS/encrypted-key';
    var encryptedKey = fs.readFileSync(keyPath);
    var paramsKey = {
      CiphertextBlob: encryptedKey
    };
    kms.decrypt(paramsKey, function(err, data) {
      if (err) {
        reject(err, err.stack);
      } else {
        resolve (data['Plaintext'].toString());
      }
    });
  });
}

var getSecret = function() {
  return new Promise(function(resolve, reject) {
    var secretPath = './SECRETS/encrypted-secret';
    var encryptedSecret = fs.readFileSync(secretPath);
    var paramsSecret = {
      CiphertextBlob: encryptedSecret
    };
    kms.decrypt(paramsSecret, function(err, data) {
      if (err) {
        reject(err, err.stack);
      } else {
        resolve (data['Plaintext'].toString());
      }
    });
  });
}

var getPassword = function() {
  return new Promise(function(resolve, reject) {
    var passwordPath = './SECRETS/encrypted-password';
    var encryptedPassword = fs.readFileSync(passwordPath);
    var paramsPassword = {
      CiphertextBlob: encryptedPassword
    };
    kms.decrypt(paramsPassword, function(err, data) {
      if (err) {
        reject(err, err.stack);
      } else {
        resolve (data['Plaintext'].toString());
      }
    });
  });
}

module.exports = {getKey, getSecret, getPassword};
