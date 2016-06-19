// use bluebird for Promises
require('babel-runtime/core-js/promise').default = require('bluebird');
import server from '../server/index';

const port = 3001;

server.listen(port);

console.log('Listening at http://localhost:3001');
