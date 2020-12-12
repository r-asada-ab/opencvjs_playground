var Snipet = require("../../model/snipet.js");
var express = require('express');
var router = express.Router();

router.post('/', function(request, res) {
    res.setHeader('Content-Type', 'text/plain');

    Snipet.findOneAndUpdate (
        { _id: request.body._id },
        { $set: 
          { 
            vote: request.body.vote,
          } 
        },
        { upsert: true },
        function(err) {
          if (err) throw err;
        }
    )

    res.sendStatus(200)
});

module.exports = router;