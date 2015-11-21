var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/access');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./app/routes'));

app.listen(8080);
