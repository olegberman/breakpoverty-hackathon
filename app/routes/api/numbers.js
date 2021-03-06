'use strict';

var express = require('express');
var router = express.Router();

var PhoneNumber = require('../../models/phonenumber');

router.get('/', function(req, res) {

  PhoneNumber.find({}, function(err, data) {
    if(err) return res.sendStatus(500);
    return res.json(data);
  });

});

router.get('/', function(req, res) {
  var category = req.body.category;
  PhoneNumber.find({
    category: category
  }, function(err, data) {
    if(err) return res.sendStatus(500);
    return res.json(data);
  });

});

module.exports = router;
