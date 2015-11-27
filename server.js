"use strict";

const http = require('http');
const port = 3000;
const handleRequest = require('./modules/handleRequest.js');
const requestModifier = require('./modules/requestModifier.js');

const server = http.createServer((req, res) => {
  handleRequest(req, requestModifier(res));
});
server.listen(port, () => {
  console.log(`Listening on port ${ port }`);
});
