'use strict';
const fs = require('fs');

this.isExist = function (path) {
  try {
    fs.statSync(path);
    return true
  } catch (error) {
    return false
  }
}
