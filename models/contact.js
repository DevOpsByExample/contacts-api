const {sequelize, Sequelize} = require('../db_models');

const Contact = require('../db_models/contact')(sequelize, Sequelize);

module.exports = Contact;