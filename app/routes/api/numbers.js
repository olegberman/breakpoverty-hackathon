'use strict';

var express = require('express');
var router = express.Router();

var PhoneNumber = require('../../models/PhoneNumber');

router.get('/', function(req, res) {

  PhoneNumber.find({}, function(err, data) {
    if(err) return res.json(err);
    return res.json(data);
  });

});

module.exports = router;
