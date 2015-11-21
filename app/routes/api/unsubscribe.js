'use strict';

var express = require('express');
var router = express.Router();

var PhoneNumber = require('../../models/PhoneNumber');

router.post('/:phonenumber/:category', function(req, res) {

  PhoneNumber.remove({
            number: req.params.phonenumber,
            category: req.params.category
        }, function(err, results) {
            if (err)
                res.send(err);
            console.log("Delete: " + results);
            res.json({ result: 'success' });
        });

});

module.exports = router;
