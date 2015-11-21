'use strict';

var express = require('express');

var router = express.Router();

router.use('/subscribe', require('./subscribe'));
router.use('/numbers', require('./numbers'));

router.use('/unsubscribe', require('./unsubscribe'));

router.use('/placecalls', require('./placecalls'));

module.exports = router;
