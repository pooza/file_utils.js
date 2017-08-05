'use strict';
const fs = require('fs');
const crypto = require('crypto');

this.isExist = function (path) {
  try {
    fs.statSync(path);
    return true
  } catch (error) {
    return false
  }
}

this.createFileName = function (params, suffix) {
  const sha1 = crypto.createHash('sha1');
  sha1.update(params.join('::'));
  return sha1.digest('hex') + suffix;
}