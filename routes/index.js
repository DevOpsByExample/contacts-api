const express = require('express');
const router = express.Router();

router.get('/status', (req, res, next) => {
	res.json({message: 'API works!', version: 'v1'});
});

module.exports = router;
