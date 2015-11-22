'use strict';

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PhoneNumberSchema = new Schema({
  number: String,
  category: String,
  lang: String
});

PhoneNumberSchema.index({ number: 1, category: 1 }, { unique: true });

module.exports = mongoose.model('Phonenumber', PhoneNumberSchema);
