var Snipet = require("../../model/snipet.js");
var express = require('express');
var router = express.Router();
var TAG = "【api/register】"

router.post('/', function(request, res) {
    res.setHeader('Content-Type', 'text/plain');

    let snipet = new Snipet()
    let date = new Date()
    snipet.date = date.toString()
    snipet.title = request.body.title
    snipet.discription = request.body.discription
    snipet.snipet =request.body.snipet
    snipet.save()

    res.sendStatus(200)
});

module.exports = router;