/* eslint-disable no-console */

/* index file to load the internal config module */

const env = process.env.NODE_ENV || 'development';
const config = require('./' + env);

console.log("Server running in '" + config.env + "' mode. To change start with 'NODE_ENV=dev/test/prod node ./server.js' option.");

/* overwrite the derived properties here */

module.exports = config;
