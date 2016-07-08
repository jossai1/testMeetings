
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var QuestionSchema   = new Schema({
    text: String
});

module.exports = mongoose.model('Question', QuestionSchema);
