var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PhonenumberSchema   = new Schema({
    number: String,
    category: String
});

module.exports = mongoose.model('Phonenumber', PhonenumberSchema);