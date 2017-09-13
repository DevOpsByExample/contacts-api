const Sequelize = require('sequelize');
const config = require(`../config/main.js`);
const logger = require('./logger');

const sequelize = new Sequelize(config.dbName, config.dbUsername, config.dbPassword, {
  host: config.dbHostname,
  dialect: 'postgres',
  logging: logger.log,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

module.exports = sequelize;