const expect = require('chai').expect;
const specHelper = require('../spec_helper');
const Contact = require('../../models/contact');

const supertestAgent = specHelper.supertestAgent;
const contacts = [{"firstName": "Arun", "lastName": "S", "phoneNumber": "9876767676", "email": "arun@gmail.com", "address": "Taramani, Chennai"},
	{"firstName": "Krishna", "lastName": "S", "phoneNumber": "9876767123", "email": "krihna@gmail.com", "address": "Taramani, Chennai"}];;

before(done => {
	Contact.destroy({truncate: true})
	.then(() => {
			Contact.bulkCreate(contacts)
			.then(() => {
				done();
			}).catch(err => {
				done(err);
			});
	}).catch(err => {
		done(err);
	});
});

describe('GET /contacts', () => {
	it('should return all contacts', done => {
		supertestAgent
		.get('/contacts')
		.expect('Content-Type', /json/)
		.expect(200)
		.then(response => {
			const actualContacts = response.body;

			expect(actualContacts.length).to.equal(2);
			expect(actualContacts[0]).to.include(contacts[0]);
			expect(actualContacts[1]).to.include(contacts[1]);
			done();
		})
		.catch(err => {
			done(err);
		});
	});
});