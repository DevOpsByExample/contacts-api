var Sequelize = require('sequelize');
var sequelize = require('../util/sequelize');

var Contact = sequelize.define('contact', {
  employeeID: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.STRING,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  }
});

Contact.sync({force: false})
  .then(function() {
    console.log('Table created or it exists already');
  })
  .catch(function(err) {
    console.error('Failed to create table', err);
  });

module.exports = Contact;