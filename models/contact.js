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
  }
});

Contact.sync({force: false})
  .then(function() {
    console.log('Table created or it exists already');
  })
  .catch(function(error) {
    console.error('Failed to create table', error);
  });

module.exports = Contact;