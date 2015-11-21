'use strict';

var express = require('express');
var router = express.Router();

var PhoneNumber = require('../../models/PhoneNumber');

router.post('/', function(req, res) {

  var num = new PhoneNumber();
  num.number = req.body.phonenumber;
  num.category = req.body.category;

  num.save(function(err) {
      if (err) return res.json(err);
      return res.json({ message: 'Phone number created!' });
  });

});

module.exports = router;