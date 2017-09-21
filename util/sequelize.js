var Sequelize = require('sequelize');
const config = require(`../config/${process.env.NODE_ENV}.js`);

var sequelize = new Sequelize(config.dbName, config.dbUsername, config.dbPassword, {
  host: config.dbHostname,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

module.exports = sequelize;
