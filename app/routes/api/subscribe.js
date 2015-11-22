'use strict';

var express = require('express');
var router = express.Router();

var PhoneNumber = require('../../models/phonenumber');

router.post('/', function(req, res) {

  var num = new PhoneNumber();
  num.number = req.body.phonenumber;
  num.category = req.body.category;
  num.lang = req.body.language;

  if (!num.number || num.number.length !== 10) {
    return res.sendStatus(500);
  }
  num.save(function(err) {
      if(err) {
        if (err.code == 11000) return res.send('You have already subscribed');
        return res.sendStatus(500);
      }
      console.log("Saved: " + num);
      return res.sendStatus(200);
  });

});

module.exports = router;
