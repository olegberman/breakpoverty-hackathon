'use strict';

var express = require('express');
var router = express.Router();

var PhoneNumber = require('../../models/phonenumber');

router.post('', function(req, res) {

  PhoneNumber.remove({
            number: req.body.phonenumber,
            category: req.body.category
        }, function(err, results) {
            if(err) return res.sendStatus(500);
            console.log("Delete: " + results);
            res.json({ result: 'success' });
        });

});

module.exports = router;
