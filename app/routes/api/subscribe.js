'use strict';

var express = require('express');
var router = express.Router();

var PhoneNumber = require('../../models/phonenumber');

router.post('/', function(req, res) {

  var num = new PhoneNumber();
  num.number = req.body.phonenumber;
  num.category = req.body.category;

  if (!num.number || num.number.length !== 10) {
    return res.status(500).json({error: 'number is not valid'});
  }
  num.save(function(err) {
      if (err) return res.json(err);
      console.log("Saved: " + num);
      return res.sendStatus(200);
  });

});

module.exports = router;
