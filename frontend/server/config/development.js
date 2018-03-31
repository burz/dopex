/* overwrite env specific variables here */

const config = require('./default');

// config.env = 'dev';
// config.hosturl = 'http://localhost:8000';
// config.backendapiurl = 'http://alpha:@Lph0ns0@proxy.alphonso.tv:5081/dashapi';

/**
mysql database
**************************/
config.mysql.port = '7306';
/**
mysql reports database
**************************/
config.mysql.reports.port = '7306';

/**
Email Configuration
**************************/
config.email.enabled = true;
config.email.notify.ongetreports = 'zxpan@alphonso.tv';
config.email.notify.onsignin = 'zxpan@alphonso.tv';
config.email.notify.onreportvideo = 'zxpan@alphonso.tv';
config.email.notify.ongetfullaccess = 'zxpan@alphonso.tv';

module.exports = config;
