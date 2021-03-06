"use strict";

const fs = require('fs');
const handleMimeType = require('./handleMimeType.js');

module.exports = function (res) {
  res.render = function (viewname) {
    if (fs.existsSync(`./views/${ viewname }`)) {
      const fileContent = fs.readFileSync(`./views/${ viewname }`);
      handleMimeType(viewname);
      res.end(fileContent);
    } else {
      res.end(`The view ${ viewname } does not exists!`);
    }
  };
  return res;
};
