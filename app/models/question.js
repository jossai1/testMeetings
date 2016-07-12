
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var QuestionSchema   = new Schema({
    questionText: String

});

module.exports = mongoose.model('Question', QuestionSchema);
