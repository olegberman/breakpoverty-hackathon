'use strict';

var express = require('express');

var router = express.Router();

router.use('/subscribe', require('./subscribe'));

module.exports = router;
