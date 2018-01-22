var express = require('express');
var router = express.Router();
var mongo = require('mongoskin');
const crypto = require('crypto');


let password = 'asaadsaad';

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = mongo.db("mongodb://localhost:27017/test", {native_parser:true});

  db.collection('homework7').findOne(function(err, data) {
    if (err) throw err;
    console.log(data);

    const decipher = crypto.createDecipher('aes256', password);
    
    let decrypted = decipher.update(data.message, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log(decrypted) 

    res.send(decrypted);

  });     

});

module.exports = router;
