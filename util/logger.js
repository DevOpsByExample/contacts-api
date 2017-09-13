const fs = require('fs');
const path = require('path');

const env = process.env.NODE_ENV;

const writeToFile = (content, filePath = path.join(__dirname, '../app.log')) => {
	const logFileStream = fs.createWriteStream(filePath, {flags: 'a'});
	logFileStream.write(`${content}\n`);
	logFileStream.end();
}

const logger = {
	log: (message) => {
		env === 'development' && console.log(message);
		writeToFile(message);
	},
	error: (error) => {
		env === 'development' && console.error(error);
		writeToFile(error.stack);
	}
};

module.exports = logger;