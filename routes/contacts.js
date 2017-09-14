var express = require('express');
var router = express.Router();

var Contact = require('../models/contact');

router.get('/', function(req, res, next) {
	Contact.all()
		.then(function(contacts) {
			res.json(contacts);
		})
		.catch(function(err) {
			next(err, req, res);
		});
});

router.get('/:id', function(req, res, next) {
	Contact.findOne({where: {employeeID: req.params.id}})
		.then(function(contact) {
			res.json(contact);
		})
		.catch(function(err) {
			next(err, req, res);
		});
});

router.put('/', function(req, res, next) {
	var data = {
		employeeID: req.body.employeeID,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		phoneNumber: req.body.phoneNumber,
		email: req.body.email
	};

	Contact.create(data)
		.then(function() {
			res.json(data);
		})
		.catch(function(err) {
			next(err, req, res);
		});
});

router.post('/:id', function(req, res, next) {
	var data = {
		employeeID: req.body.employeeID,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		phoneNumber: req.body.phoneNumber,
		email: req.body.email
	};

	Contact.findOne({where: {employeeID: req.params.id}})
		.then(function(contact) {

			var fieldsToUpdate = Object.keys(data).filter(function(field) {
				return data[field] !== contact[field];
			});

			contact.update(data, {fields: fieldsToUpdate})
				.then(function(updatedData) {
					res.json(updatedData);
				})
				.catch(function(err) {
					next(err, req, res);
				});
		})
		.catch(function(err) {
			next(err, req, res);
		});
});

router.delete('/:id', function(req, res, next) {
	Contact.destroy({where: {employeeID: req.params.id}})
		.then(function() {
			res.json({message: 'Deleted successfully'});
		})
		.catch(function(err) {
			next(err, req, res);
		});
});

module.exports = router;
