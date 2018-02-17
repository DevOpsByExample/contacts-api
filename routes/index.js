const express = require('express');
const router = express.Router();

router.get('/status', (req, res, next) => {
	res.json({message: 'API works!', version: 'v2'});
});

module.exports = router;
