var Snipet = require("../model/snipet.js");
var express = require('express');
var router = express.Router();
var TAG = "【api/register】"

router.post('/', function(request, res) {
    console.log("catch the post request")
    res.setHeader('Content-Type', 'text/plain');

    console.log(TAG, "request = ", request)
    console.log(TAG, "body = ", request.body)
    console.log(TAG, "title = ", request.body.title)
    console.log(TAG, "discription = ", request.body.discription)
    console.log(TAG, "snipet = ", request.body.snipet)

    let snipet = new Snipet()
    let date = new Date()
    snipet.date = date.toString()
    snipet.title = request.body.title
    snipet.discription = request.body.discription
    snipet.snipet =request.snipet
    snipet.save()

    res.sendStatus(200)
});

module.exports = router;