var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var NumberSchema   = new Schema({
    number: String,
    category: String
});

module.exports = mongoose.model('Number', BearSchema);