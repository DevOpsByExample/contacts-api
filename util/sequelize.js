var fs = require('fs');
var path = require('path')
var Sequelize = require('sequelize');
const config = require(`../config/${process.env.NODE_ENV}.js`);

const writeToFile = function(content) {
	var logFile = fs.createWriteStream(path.join(__dirname, '../sequelize.log'), {flags: 'a'});
	logFile.write(`${content}\n`);
	logFile.end();
}

var sequelize = new Sequelize(config.dbName, config.dbUsername, config.dbPassword, {
  host: config.dbHostname,
  dialect: 'postgres',
  logging: writeToFile,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

module.exports = sequelize;
