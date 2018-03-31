/* overwrite env specific variables here */

const config = require('./default');

config.env = 'test';
config.hosturl = 'http://dashqa.alphonso.tv';

/**
mysql database
**************************/
config.mysql.connectionLimit = 10;
config.mysql.host = 'insightsdb.alphonso.tv';
/**
mysql reports database
**************************/
config.mysql.reports.connectionLimit = 5;
config.mysql.reports.host = 'insightsdb.alphonso.tv';

/**
Email Configuration
**************************/
config.email.enabled = true;

module.exports = config;
