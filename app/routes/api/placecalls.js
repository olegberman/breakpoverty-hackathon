'use strict';

var express = require('express');
var xml     = require('xml');
var request = require('request-promise');
var Promise = require('bluebird');
var router = express.Router();

var PhoneNumber = require('../../models/phonenumber');

var subscriber_id = "0a140225-04-150f39bbbf8-06dfc85a-1b2";
var site_code = "200000149531";
var api_key = "0a1414cd-0b-150f91db224-2b7fdec6-71e@0a140225-04-150f39bbbf8-06dfc85a-1b2@c631b4fe@1447288484388@10@b6233f2947910a588d681bfe697243bb"
var base_url = "https://api.angel.com/outbound-rest/"
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
                },
                {
                  variables: [
                    {
                      name: 'language'
                    },
                    {
                      value: item['lang']
                    }
                  ]
                }
              ]
            });
        });

        var api_call = request({
            method: 'POST',
            uri: base_url + subscriber_id + "/" + site_code + "/job?apiKey=" + api_key,
            headers: {
                'Content-type': 'application/xml'
            },
            body: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + xml(out)
        });

        api_call.then(function(data){
          return res.sendStatus(200);
        }, function (err) {
          return res.sendStatus(500);
        })

      });


});

module.exports = router;
