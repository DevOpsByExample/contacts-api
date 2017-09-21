const specHelper = require('../spec_helper');
const supertestAgent = specHelper.supertestAgent;

describe('GET /contacts', function() {
  it('should return all contacts', function(done) {
		supertestAgent
	  	.get('/contacts')
	  	.expect(200, done);
	});
});