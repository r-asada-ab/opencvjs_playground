var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// コードスニペット
var Snipet = new Schema({
    date: String,
    title: String,
    discription: String,
    snipet: String
});

module.exports = mongoose.model('snipet', Snipet);