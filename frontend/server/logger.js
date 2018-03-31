/* eslint-disable no-console */
/* eslint import/no-unresolved: [2, { ignore: ['utils/loge'] }] */

const chalk = require('chalk');
const ip = require('ip');

//const log4js = require('utils/loge').getLogger('insights');
const env = process.env.NODE_ENV || 'development';

const divider = chalk.gray('\n-----------------------------------');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {
  debug: (msg) => {
    // log4js.debug(chalk.gray(msg));
    console.log(chalk.gray(msg));
  },

  // Called whenever there's an error on the server we want to print
  error: (err) => {
    // log4js.error(chalk.red(err));
    console.error(chalk.red(err));
  },

  userAction: (req) => {
    const url = req.originalUrl;
    const source = req.headers['x-forwarded-for'] || `${req.connection.remoteAddress}:${req.connection.remotePort}`;
    if (req.method === 'POST') {
      // log4js.info(`USER ACTION ${req.method} ${url} | ${JSON.stringify(req.body)} | ${source}`);
      console.log(`USER ACTION ${req.method} ${url} | ${JSON.stringify(req.body)} | ${source}`);
    } else {
      // log4js.info(`USER ACTION ${req.method} ${url} | ${JSON.stringify(req.query)} | ${source}`);
      console.log(`USER ACTION ${req.method} ${url} | ${JSON.stringify(req.query)} | ${source}`);
    }
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host, tunnelStarted) => {
    console.log(`Server started ! ${chalk.green('✓')}`);

    // If the tunnel started, log that and the URL it's available at
    if (tunnelStarted) {
      console.log(`Tunnel initialised ${chalk.green('✓')}`);
    }

    console.log(`
${chalk.bold('Access URLs:')}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`) +
(tunnelStarted ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}` : '')}${divider}
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  }
};

module.exports = logger;
