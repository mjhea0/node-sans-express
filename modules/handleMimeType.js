"use strict";

module.exports = function (url) {

  const fileExtension = url.split('.').pop();
  let mimeType;

  switch (fileExtension) {
    case 'css':
      mimeType = 'text/css';
      break;
    case 'html':
      mimeType = 'text/html';
      break;
    case 'js':
      mimeType = 'text/javascript';
      break;
    case 'json':
      mimeType = 'application/json';
      break;
    default:
      mimeType = 'text/plain';
  }

  return mimeType;

};
