'use strict';

var app = require('express')();

app.use('/*', function(req, res) {
  return res.send('Sector clear!');
});

app.listen(5000);
