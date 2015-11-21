'use strict';

var express = require('express');

var router = express.Router();

router.use('/subscribe', require('./subscribe'));

router.use('/unsubscribe', require('./unsubscribe'));

module.exports = router;
