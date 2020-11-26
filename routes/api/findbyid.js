var Snipet = require("../../model/snipet.js");
var express = require('express');
var router = express.Router();
var TAG = "【api/findbyid】"

router.post('/', function(request, res) {
    res.setHeader('Content-Type', 'text/plain');

    let query = request.body.query
    Snipet.find({ _id: query }, (err, docs) => {
        if (err) {
            res.sendStatus(404)
        } else {
            res.send(docs)
        }
    })
});

module.exports = router;