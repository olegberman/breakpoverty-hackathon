'use strict';

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PhoneNumberSchema = new Schema({
  number: String,
  category: String
});

module.exports = mongoose.model('Phonenumber', PhoneNumberSchema);
