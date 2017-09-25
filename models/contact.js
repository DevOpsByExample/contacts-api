const Sequelize = require('sequelize');
const sequelize = require('../util/sequelize');
const logger = require('../util/logger');

const Contact = sequelize.define('contact', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true,
      len: [10, 10]
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

Contact.sync({force: false})
  .then(() => {
    logger.log('Table created or it exists already');
  })
  .catch((err) => {
    logger.error('Failed to create table', err);
  });

module.exports = Contact;
