var Sequelize = require('sequelize');
var sequelize = require('../util/sequelize');

var Contact = sequelize.define('contact', {
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
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
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

Contact.sync({force: true})
  .then(() => {
    console.log('Table created or it exists already');
  })
  .catch((err) => {
    console.error('Failed to create table', err);
  });

module.exports = Contact;
