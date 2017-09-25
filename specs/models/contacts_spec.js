const expect = require('chai').expect;
const specHelper = require('../spec_helper');
const Contact = require('../../models/contact');

describe('Contact model', () => {
  it('should have all the necessary fields', done => {
    let attributes = Contact.rawAttributes;

    expect(attributes).to.have.property('id');
    expect(attributes).to.have.property('firstName');
    expect(attributes).to.have.property('lastName');
    expect(attributes).to.have.property('phoneNumber');
    expect(attributes).to.have.property('email');
    expect(attributes).to.have.property('address');
    done();
  });

  it('should not allow empty value for any fields', done => {
    Contact.create({firstName: '', lastName: '', phoneNumber: '', email: '', address: ''})
    .catch(function(err) {
      expect(err).to.be.an('error');
      expect(err.message).to.include('Validation notEmpty on firstName failed');
      expect(err.message).to.include('Validation notEmpty on lastName failed');
      expect(err.message).to.include('Validation notEmpty on phoneNumber failed');
      expect(err.message).to.include('Validation notEmpty on email failed');
      expect(err.message).to.include('Validation notEmpty on address failed');
      done();
    });
  });
});