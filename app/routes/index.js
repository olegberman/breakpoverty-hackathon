'use strict';

var express = require('express');

var router = express.Router();

router.use('/api', require('./api'));

router.use('/*', function(req, res) {
  return res.json({status: 'Not implemented, yet.'});
});

module.exports = router;
