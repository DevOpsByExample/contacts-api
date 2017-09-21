module.exports = {
	dbHostname: process.env.DB_HOSTNAME,
	dbPort: process.env.DB_PORT,
	dbName: process.env.DB_NAME,
	dbUsername: process.env.DB_USERNAME,
	dbPassword: process.env.DB_PASSWORD,
	appPort: process.env.PORT || 3000
};