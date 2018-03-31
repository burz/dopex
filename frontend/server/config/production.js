/* overwrite env specific variables here */

const config = require('./default');

config.env = 'prod';
config.hosturl = 'http://insights.alphonso.tv';

/**
mysql database
**************************/
config.mysql.connectionLimit = 10;
config.mysql.host = 'insightsdb.alphonso.tv';
/**
mysql reports database
**************************/
config.mysql.reports.connectionLimit = 10;
config.mysql.reports.host = 'insightsdb.alphonso.tv';

/**
Email Configuration
**************************/
config.email.enabled = true;
config.email.notify.ongetreports = 'ashish.chordia@alphonso.tv, ashish@alphonso.tv, nikhil@alphonso.tv';
config.email.notify.onsignin = 'ashish.chordia@alphonso.tv, ashish@alphonso.tv, nikhil@alphonso.tv';
config.email.notify.onreportvideo = 'ashish.chordia@alphonso.tv, dmca@alphonso.tv';
config.email.notify.ongetfullaccess = 'ashish.chordia@alphonso.tv, ashish@alphonso.tv, nikhil@alphonso.tv';
config.email.notify.onftrequest = 'ashish.chordia@alphonso.tv, ashish@alphonso.tv, nikhil@alphonso.tv, amit@alphonso.tv';

module.exports = config;
