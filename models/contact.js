var Sequelize = require('sequelize');
var sequelize = require('../util/sequelize');

var Contact = sequelize.define('contact', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.TEXT
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
