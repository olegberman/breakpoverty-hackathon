'use strict';

var express = require('express');

var router = express.Router();

router.use('/subscribe', require('./subscribe'));
router.use('/numbers', require('./numbers'));

router.use('/unsubscribe', require('./unsubscribe'));

router.use('/placecalls', require('./placecalls'));

var PhoneNumber = require('../../models/phonenumber');

router.use('/flushnumbers', function(req, res) {
  PhoneNumber.remove({}, function() {
    return res.send('OK');
  });
});

module.exports = router;
