var Snipet = require("../../model/snipet.js");
var express = require('express');
const snipet = require("../../model/snipet.js");
var router = express.Router();
var TAG = "【api/find】"

router.post('/', function(request, res) {
    res.setHeader('Content-Type', 'text/plain');
    let query = request.body.query
    Snipet.find({ $or:[ 
        {title: { "$regex": query, "$options": "i" }},
        {discription: { "$regex": query, "$options": "i" }},
        {snipet: { "$regex": query, "$options": "i" }}] }, (err, docs) => {
        if (err) {
            res.sendStatus(404)
        } else {
            res.send(docs)
        }
    })
});

module.exports = router;