// server.js

// BASE SETUP
// =============================================================================

// connect to mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/access');

var Phonenumber  = require('./app/models/phonenumber');

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// on routes that end in /subscribe
// ----------------------------------------------------
router.route('/subscribe/:phonenumber/:category')

    // create a phonenumber (accessed at POST http://localhost:8080/subscribe)
    .post(function(req, res) {

        var num = new Phonenumber();      // create a new instance of the Bear model
        num.number = req.params.phonenumber;
        num.category = req.params.category;

        // save the phonenumber and check for errors
        num.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Phone number created!' });
        });

    });
// REGISTER OUR ROUTES -------------------------------
// all of our routes will
app.use('/', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);