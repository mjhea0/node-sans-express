"use strict";

module.exports = {
  home(req, res) {
    res.render('home.html');
  },
  about(req, res) {
    res.render('about.html');
  }
};
