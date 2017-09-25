const expect = require('chai').expect;
const specHelper = require('../spec_helper');
const Contact = require('../../models/contact');

const supertestAgent = specHelper.supertestAgent;

describe('GET /status', () => {
  it('should return API status message', done => {
    supertestAgent
    .get('/status')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
      expect(response.body.message).to.equal('API works!');
      done();
    })
    .catch(err => {
      done(err);
    });
  });
});