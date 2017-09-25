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
    .then(contact => {
      done(new Error('Contact created with one or more empty fields'));
    })
    .catch(err => {
      expect(err).to.be.an('error');
      expect(err.message).to.include('Validation notEmpty on firstName failed');
      expect(err.message).to.include('Validation notEmpty on lastName failed');
      expect(err.message).to.include('Validation notEmpty on phoneNumber failed');
      expect(err.message).to.include('Validation notEmpty on email failed');
      expect(err.message).to.include('Validation notEmpty on address failed');
      done();
    });
  });

  describe('Email field', done => {
    let contact = {firstName: 'Karthik', lastName: 'S', phoneNumber: '98987877888', email: 'karthiks@example.com', address: 'Chennai'};

    after(done => {
      Contact.destroy({where: {firstName: contact.firstName}})
      .then(() => {
        done();
      })
      .catch(err => {
        done(err);
      })
    });

    it('should not allow invalid email addresses', done => {
      Contact.create({firstName: 'Arun', lastName: 'S', phoneNumber: '98987877888', email: 'aruns', address: 'Chennai'})
      .then(contact => {
        done(new Error('Contact created with an invalid email address'));
      })
      .catch(err => {
        expect(err).to.be.an('error');
        expect(err.message).to.include('Validation isEmail on email failed');
        done();
      });
    });

    it('should allow valid email addresses', done => {
      Contact.create(contact)
      .then(createdContact => {
        expect(createdContact).to.include(createdContact);
        done();
      })
      .catch(err => {
        done(err);
      });
    });
  });
});