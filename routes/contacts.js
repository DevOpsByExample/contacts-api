const express = require('express');
const router = express.Router();

const Contact = require('../models/contact');

router.get('/', (req, res, next) => {
  Contact.findAll()
    .then(contacts => {
      res.json(contacts);
    })
    .catch(err => {
      next(err, req, res);
    });
});

router.get('/:id', (req, res, next) => {
  Contact.findOne({where: {id: req.params.id}})
    .then(contact => {
      contact || res.status(404).json({message: 'Contact not found'});
      res.json(contact);
    })
    .catch(err => {
      next(err, req, res);
    });
});

router.post('/', (req, res, next) => {
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    address: req.body.address
  };

  Contact.create(data)
    .then(contact => {
      res.json(contact);
    })
    .catch(err => {
      next(err, req, res);
    });
});

router.put('/:id', (req, res, next) => {
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    email: req.body.email
  };

  Contact.findOne({where: {id: req.params.id}})
    .then(contact => {
      contact || res.status(404).json({message: 'Contact not found'});

      const fieldsToUpdate = Object.keys(data).filter(field => {
        return data[field] !== contact[field];
      });

      contact.update(data, {fields: fieldsToUpdate})
        .then(updatedData => {
          res.json(updatedData);
        })
        .catch(err => {
          next(err, req, res);
        });
    })
    .catch(err => {
      next(err, req, res);
    });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  Contact.destroy({where: {id: id}})
    .then(affectedRows => {
      affectedRows === 0 && res.status(404).json({message: 'Contact not found'});
      res.json({message: 'Deleted successfully'});
    })
    .catch(err => {
      next(err, req, res);
    });
});

module.exports = router;
