const env = process.env.NODE_ENV || 'development';
const logger = require('./../util/logger');
let config = require(`./${env}.js`);
config.dbHostname = config.dbHostname || process.env.DB_HOSTNAME || 'localhost';
config.dbPort = config.dbPort || process.env.DB_PORT || 5432;
config.pool = config.pool || {
  max: 5,
  min: 0,
  idle: 10000
};
module.exports = {
  [env]: {
    username: config.dbUsername,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHostname,
    port: config.dbPort,
    pool: config.pool,
    dialect: 'postgres',
    logging: logger.log,
  }
};