"use strict";

const routes = require('../routes.js');

module.exports = function (req, res) {
  routes.forEach(item => {
    if (req.url == item.url) {
      if (typeof item.controller == 'function') {
        item.controller(req, res);
      } else if (typeof item.controller == 'string') {
        const splitted = item.controller.split('@');
        const controller = require(`../controllers/${ splitted[0] }.js`);
        controller[splitted[1]](req, res);
      }
    }
  });
};
