export const ENV = process.env.NODE_ENV || 'development';
export const config = require('./' + ENV).config;
