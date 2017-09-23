var Sequelize = require('sequelize');
const config = require(`../config/${process.env.NODE_ENV}.js`);
const logger = require('./logger');

var sequelize = new Sequelize(config.dbName, config.dbUsername, config.dbPassword, {
  host: config.dbHostname,
  dialect: 'postgres',
  logging: logger.log,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
logger.log(config.dbName);
logger.log(config.dbHostname);
logger.log(config.dbUsername);
logger.log(config.dbPassword);
module.exports = sequelize;
