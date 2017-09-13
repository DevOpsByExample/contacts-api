process.env.NODE_ENV = 'test';

const supertest = require('supertest');
const app = require('../app');
const Contact = require('../models/contact');

before(done => {
  Contact.destroy({truncate: true})
  .then(() => {
    done();
  }).catch(err => {
    done(err);
  });
});

module.exports = {
	supertestAgent: supertest.agent(app)
};