'use strict';

var express = require('express');
var xml     = require('xml');
var router = express.Router();

var PhoneNumber = require('../../models/PhoneNumber');

router.post('/', function(req, res) {

    var category = req.body.category;

    PhoneNumber.find({category: category}, function(err, result) {
        var out = {
            callItems: []
        };
        result.forEach(function(item) {
            out.callItems.push({
                callItem: [{
                    maxWaitTime: 60
                },
                {
                    phoneNumbers: item.number
                }]
            });
            console.log(item.number);
        });
        console.log(out);
        return res.send(xml(out));
      });


});

module.exports = router;
