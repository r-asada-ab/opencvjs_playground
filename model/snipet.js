var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// コードスニペット
var Snipet = new Schema({
    date: String,
    title: String,
    discription: String,
    snipet: String,
    vote: Number,
    views: Number
});

module.exports = mongoose.model('snipet', Snipet);