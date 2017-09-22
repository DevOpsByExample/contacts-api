var express = require('express');
var router = express.Router();

router.get('/status', function(req, res, next) {
	res.json({message: 'API works!'});
});

module.exports = router;
