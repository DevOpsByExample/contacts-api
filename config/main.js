const env = process.env.NODE_ENV || 'development';
let config = require(`./${env}.js`);

config.dbHostname = process.env.DB_HOSTNAME || 'localhost';
config.dbPort = process.env.DB_PORT || 5432;
config.appPort = process.env.PORT || 3000;

module.exports = config;