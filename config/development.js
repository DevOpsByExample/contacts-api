module.exports = {
	dbHostname: process.env.DB_HOSTNAME || 'localhost',
	dbPort: 5432,
	dbName: 'contacts_development',
	dbUsername: 'dev',
	dbPassword: 'dev',
	appPort: process.env.PORT || 3000
};