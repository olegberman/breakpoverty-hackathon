'use strict';

var express = require('express');
var router = express.Router();

var PhoneNumber = require('../../models/PhoneNumber');

router.post('/:phonenumber/:category', function(req, res) {

  var num = new PhoneNumber();
  num.number = req.params.phonenumber;
  num.category = req.params.category;

  if (!num.number || num.number.length !== 10) {
    return res.status(500).json({error: 'number is not valid'});
  }
  num.save(function(err) {
      if (err) return res.json(err);
      console.log("Saved: " + num);
      return res.json({ result: 'success' });
  });

});

module.exports = router;
