process.env.NODE_ENV = 'test';

const supertest = require('supertest');
const app = require('../app');

module.exports = {
	supertestAgent: supertest.agent(app)
};